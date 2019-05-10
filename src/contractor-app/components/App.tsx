import * as React from 'react'
import { Row, Col } from 'react-materialize'
import { Contracts } from './Contracts'

export const App: React.FunctionComponent = () => (
  <>
    <Row>
      <Col s={10} offset='s1'>
        <h4>API Contract</h4>
      </Col>
    </Row>
    <Row>
      <Col s={10} offset='s1'>
        <Contracts />
      </Col>
    </Row>
  </>
)
