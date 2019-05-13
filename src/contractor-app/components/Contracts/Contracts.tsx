import * as React from 'react'
import { Collapsible, CollapsibleItem } from 'react-materialize'
import { Endpoints } from './Endpoints'
import { isModuleSelected, updateLocationHash } from '../../lib/location/location'

type Props = {
  readonly contracts: Contracts,
}

export const Contracts: React.FunctionComponent<Props> = ({ contracts }) => (
  <Collapsible className='contract'>
    {
      Object.keys(contracts).map(module => (
        <CollapsibleItem
          expanded={isModuleSelected(module)}
          key={module}
          header={module}
          icon='layers'
          onClick={() => updateLocationHash(module, '', '')}
        >
          <Endpoints module={module} endpoints={contracts[module]} />
        </CollapsibleItem>
      ))
    }
  </Collapsible>
)
