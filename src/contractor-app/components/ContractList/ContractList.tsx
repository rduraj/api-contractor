import * as React from 'react'
import { Collapsible, CollapsibleItem } from 'react-materialize'

import { Contracts } from '../../../dto'
import { isModuleSelected, updateLocationHash } from '../../lib/location'
import { Endpoints } from './Endpoints'

type Props = {
  readonly contracts: Contracts,
}

const handleItemClick = (module: string) => () => {
  updateLocationHash(module, '', '')
}

export const ContractList: React.FunctionComponent<Props> = ({ contracts }) => (
  <Collapsible className='contract'>
    {
      Object.keys(contracts).map(module => (
        <CollapsibleItem
          expanded={isModuleSelected(module)}
          key={module}
          header={module}
          icon='layers'
          onClick={handleItemClick(module)}
        >
          <Endpoints module={module} endpoints={contracts[module]} />
        </CollapsibleItem>
      ))
    }
  </Collapsible>
)
