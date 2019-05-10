import * as React from 'react'
import { Collapsible, CollapsibleItem } from 'react-materialize'
import { Endpoints } from './Endpoints'

export const Contracts: React.FunctionComponent = () => (
  <Collapsible className='contract'>
    {
      Object.keys(contracts).map(module => (
        <CollapsibleItem key={module} header={module} icon='layers'>
          <Endpoints endpoints={contracts[module]} />
        </CollapsibleItem>
      ))
    }
  </Collapsible>
)
