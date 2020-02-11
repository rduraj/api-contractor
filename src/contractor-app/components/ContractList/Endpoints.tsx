import * as React from 'react'
import { Collapsible, CollapsibleItem } from 'react-materialize'

import { Contract } from '../../../dto'
import { isEndpointSelected, isMethodSelected, updateLocationHash } from '../../lib/location/location'
import { EndpointHeader } from './EndpointHeader'

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
      {endpoints.map(({ name, method, status, contract }, index) => (
        <CollapsibleItem
          className={`contract-body contract-${status}`}
          expanded={isMethodSelected(method) && isEndpointSelected(name) || false}
          header={<EndpointHeader status={status} name={name} method={method} />}
          key={index}
          onClick={handleClickEndpoint(method, name)}
        >
          <div dangerouslySetInnerHTML={{ __html: contract }} />
        </CollapsibleItem>
      ))}
    </Collapsible>
  )

}
