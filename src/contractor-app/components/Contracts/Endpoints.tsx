import * as React from 'react'
import { Collapsible, CollapsibleItem } from 'react-materialize'
import { EndpointHeader } from './EndpointHeader'

type Props = {
  readonly endpoints: ReadonlyArray<Contract>
}

export const Endpoints: React.FunctionComponent<Props> = ({ endpoints }) => (
  <Collapsible>
    {endpoints.map(({ name, method, contract }, index) => (
      <CollapsibleItem
        className='contract-body'
        header={<EndpointHeader name={name} method={method} />}
        key={index}
      >
        <div dangerouslySetInnerHTML={{ __html: contract }} />
      </CollapsibleItem>
    ))}
  </Collapsible>
)
