const getSplittedHash = () => document.location.hash.replace('#', '').split('.')

const parseEndpoint = (name: string) => name.replace(/\//g, '_')

const compareNames = (name: string, nameToCompare: string) => name && nameToCompare && name.toLowerCase() === nameToCompare.toLowerCase()

export const getLocationParams = () => {
  const [module = '', method = '', endpoint = ''] = getSplittedHash()

  return { module, method, endpoint }
}

export const isModuleSelected = (name: string) => {
  const [module] = getSplittedHash()

  return !!compareNames(module, name)
}

export const isMethodSelected = (name: string) => {
  const [, method] = getSplittedHash()

  return !!compareNames(method, name)
}

export const isEndpointSelected = (name: string) => {
  const [,,endpoint] = getSplittedHash()

  return !!(endpoint && endpoint === parseEndpoint(name))
}

export const updateLocationHash = (module = '', method = '', endpoint = '') => {
  const hash = [module.toLowerCase(), method.toLowerCase(), parseEndpoint(endpoint)]

  document.location.hash = hash.filter(Boolean).join('.')
}
