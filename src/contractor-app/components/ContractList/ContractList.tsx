import { Collapse } from 'antd'
import * as React from 'react'
import { connect, MapStateToProps } from 'react-redux'

import { Contracts } from '../../lib/contract'
import { updateLocationHash } from '../../lib/location'
import { getLocationParams } from '../../lib/location/location'
import { State as GlobalState } from '../../lib/store'
import { Endpoints } from './Endpoints'

type StateToProps = {
  readonly contracts: Contracts
}

type State = {
  readonly activeKey: string
}

class ContractListComponent extends React.PureComponent<StateToProps, State> {

  public state: State = {
    activeKey: getLocationParams().module
  }

  public render(): React.ReactNode {
    const { contracts } = this.props

    return (
      <Collapse
        className='contract'
        onChange={key => this.updateLocation(key as string)}
        activeKey={[this.state.activeKey]}
        accordion={true}
      >
        {Object.keys(contracts).map(module => (
          <Collapse.Panel
            key={module.toLowerCase()}
            header={module}
          >
            <Endpoints module={module} endpoints={contracts[module]} />
          </Collapse.Panel>
        ))}
      </Collapse>
    )
  }

  private readonly updateLocation = (key: string) => {
    if (!key) {
      return
    }

    updateLocationHash(key, '', '')
    this.setState({ activeKey: key })
  }
}

const mapStateToProps: MapStateToProps<StateToProps, {}, GlobalState> = state => ({
  contracts: state.contract.contracts,
})

export const ContractList = connect(
  mapStateToProps,
)(ContractListComponent)
