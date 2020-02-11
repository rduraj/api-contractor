import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { Converter } from 'showdown'
import { argv } from 'yargs'

import { Contract, Contracts, ContractStatus } from '../dto'

const contractsExtension = 'md'
const converter = new Converter()
const contractsPath = argv.path as string

const extractName = (contractFilename: string) => {
  const parsedFilename = contractFilename.match(/([a-z-_{}]+)/ig)

  if (!parsedFilename) {
    return { name: '', method: '' }
  }

  const [method, name, status] = parsedFilename
  const contractStatus = status === contractsExtension
    ? ContractStatus.ACTIVE
    : status

  return {
    method: method.toUpperCase(),
    name: name.replace(/_/g, '/'),
    status: contractStatus,
  }
}

const contracts: Contracts = readdirSync(contractsPath).map(module => {

  const contractList = readdirSync(`${contractsPath}/${module}`)
    .map(contractName => {
      const markdown = readFileSync(`${contractsPath}/${module}/${contractName}`).toString()
      const contract = converter.makeHtml(markdown)

      return {
        contract,
        module,
        ...extractName(contractName),
      }
    })

  return {
    [module]: contractList as ReadonlyArray<Contract>,
  }

})
.reduce((contractList, moduleList) => ({...contractList, ...moduleList}), {})

writeFileSync('./node_modules/api-contractor/build/contractor-app/contracts.js', `const contracts = ${JSON.stringify(contracts)}`, 'utf-8')
