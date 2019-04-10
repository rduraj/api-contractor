// global: list of contracts dynamically generated from MD files
declare const contracts: Contracts

const showContract = (element: HTMLElement) => {

  element.innerHTML = Object.keys(contracts)
    .map(module => {
        const contractList = contracts[module]
          .map(({ name, method, contract }) => `
            <li class="collection-item contract-item">
              <div class="collapsible-header contract-item-header">
                <small class="method-${method.toLowerCase()}">${method}</small> ${name}
              </div>
              <div class="collapsible-body contract-item-body">
                ${contract}
              </div>
            </li>
          `)

        return contractList
          ? `<li class="contract">
              <div class="collapsible-header">
                <i class="material-icons">layers</i>${module}
              </div>
              <div class="collapsible-body">
                <ul class="collapsible">
                  ${contractList.join('')}
                </ul>
              </div>
            </li>`
          : ''
    })
    .join('')
}


document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.collapsible')
  M.Collapsible.init(elems)
})
