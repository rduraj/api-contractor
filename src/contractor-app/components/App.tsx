import * as React from 'react'
import { Col, Row } from 'react-materialize'

import { Contracts } from '../../dto'
import { ContractList } from './ContractList'

declare const contracts: Contracts // parsed markdowns to JSON

export const App: React.FunctionComponent = () => (
  <>
    <Row>
      <Col s={10} offset='s1'>
        <h4>API Contract</h4>
      </Col>
    </Row>
    <Row>
      <Col s={10} offset='s1'>
        <ContractList contracts={contracts} />
      </Col>
    </Row>
  </>
)
