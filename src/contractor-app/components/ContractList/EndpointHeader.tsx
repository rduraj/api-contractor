import * as React from 'react'

type Props = {
  readonly endpoint: string,
  readonly method: string,
}

export const EndpointHeader: React.FunctionComponent<Props> = ({ endpoint, method }) => (
  <>
    <small className={`method method-${method.toLowerCase()}`}>{method}</small> {endpoint}
  </>
)
