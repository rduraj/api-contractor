import * as React from 'react'

import { ContractStatus } from '../../../dto'

type Props = {
  readonly status: ContractStatus,
  readonly method: string,
  readonly name: string,
}

export const EndpointHeader: React.FunctionComponent<Props> = ({ name, method, status }) => (
  <>
    {status === 'deprecated' && <small className='method-deprecated'>DEPRECATED</small>}
    <small className={`method-${method.toLowerCase()}`}>{method}</small>
    {name}
  </>
)
