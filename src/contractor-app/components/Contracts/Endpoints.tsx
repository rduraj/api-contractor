import * as React from 'react'
import { Collapsible, CollapsibleItem } from 'react-materialize'
import { EndpointHeader } from './EndpointHeader'
import { isMethodSelected, isEndpointSelected, updateLocationHash } from '../../lib/location/location'

type Props = {
  readonly endpoints: ReadonlyArray<Contract>,
  readonly module: string,
}

export const Endpoints: React.FunctionComponent<Props> = ({ endpoints, module }) => {

  const handleClickEndpoint = (method: string, name: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()

    updateLocationHash(module, method, name)
  }

  return (
    <Collapsible>
      {endpoints.map(({ name, method, contract }, index) => (
        <CollapsibleItem
          className='contract-body'
          expanded={isMethodSelected(method) && isEndpointSelected(name) || false}
          header={<EndpointHeader name={name} method={method} />}
          key={index}
          onClick={handleClickEndpoint(method, name)}
        >
          <div dangerouslySetInnerHTML={{ __html: contract }} />
        </CollapsibleItem>
      ))}
    </Collapsible>
  )

}
