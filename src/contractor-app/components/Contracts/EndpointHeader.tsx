import * as React from 'react'

type Props = {
  readonly name: string,
  readonly method: string,
}

export const EndpointHeader: React.FunctionComponent<Props> = ({ name, method }) => (
  <>
    <small className={`method-${method.toLowerCase()}`}>{method}</small> {name}
  </>
)
