import { Collapse } from 'antd'
import * as React from 'react'

import { Contract } from '../../lib/contract'
import { getLocationParams, updateLocationHash } from '../../lib/location/location'
import { ContractDescription } from './ContractDescription'
import { EndpointHeader } from './EndpointHeader'

type Props = {
  readonly endpoints: ReadonlyArray<Contract>,
  readonly module: string,
}

type State = {
  readonly activeKey: string
}

export class Endpoints extends React.PureComponent<Props> {

  public state: State = {
    activeKey: `${getLocationParams().method}_${getLocationParams().endpoint.replace('_','/')}`
  }

  public render(): React.ReactNode {
    const { endpoints } = this.props

    return (
      <Collapse
        activeKey={[this.state.activeKey]}
        onChange={key => this.updateLocation(key as string)}
        accordion={true}
      >
        {endpoints.map((endpointInfo, index) => (
          <Collapse.Panel
            className='contract-body'
            header={<EndpointHeader endpoint={endpointInfo.endpoint} method={endpointInfo.method} />}
            key={`${endpointInfo.method.toLowerCase()}_${endpointInfo.endpoint.toLowerCase()}`}
          >
            <ContractDescription endpointInfo={endpointInfo} />
          </Collapse.Panel>
        ))}
      </Collapse>
    )
  }

  private readonly updateLocation = (key: string) => {
    if (!key) {
      return
    }

    const [method, endpoint] = key.split('_')

    updateLocationHash(this.props.module, method, endpoint)
    this.setState({ activeKey: key })
  }

}
