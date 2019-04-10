// global: list of contracts dynamically generated from MD files
declare const contracts: Contracts

const showContract = (element: HTMLElement) => {

  element.innerHTML = Object.keys(contracts).map(module => {
      const contractList = contracts[module]
        .map(({ name, method, contract }) => `
          <div class="card">
            <div class="card-header">
              <div class="card-title h5">${name}</div>
              <div class="card-subtitle text-gray">${method}</div>
            </div>
            <div class="card-body">${contract}</div>
          </div>
        `)

      return `
        <details class="accordion">
          <summary class="accordion-header">
            <i class="icon icon-arrow-right mr-1"></i>
            ${module}
          </summary>
          <div class="accordion-body">
            ${contractList}
          </div>
        </details>
      `
  }).reduce((list, contract) => list + contract, '')

}
