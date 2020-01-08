import { Collapse } from 'antd'
import * as React from 'react'

import { Contract } from '../../lib/contract'
import { getLocationParams } from '../../lib/location/location'
import { EndpointHeader } from './EndpointHeader'

type Props = {
  readonly endpoints: ReadonlyArray<Contract>,
  readonly module: string,
}

export const Endpoints: React.FunctionComponent<Props> = ({ endpoints, module }) => {

  // const handleClickEndpoint = (method: string, name: string) => (e: React.MouseEvent<HTMLElement>) => {
  //   e.stopPropagation()

  //   updateLocationHash(module, method, name)
  // }

  const locationParams = getLocationParams()
  const activeKey = `${locationParams.method}_${locationParams.endpoint}`

  return (
    <Collapse
      activeKey={[activeKey]}
    >
      {endpoints.map(({ endpoint, method, contract }, index) => (
        <Collapse.Panel
          // className='contract-body'
          // expanded={isMethodSelected(method) && isEndpointSelected(name) || false}
          header={<EndpointHeader name={name} method={method} />}
          key={`${method}_${endpoint}`}
          // onClick={handleClickEndpoint(method, name)}
        >
          {JSON.stringify(contract)}
        </Collapse.Panel>
      ))}
    </Collapse>
  )

}
