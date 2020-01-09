import { Card, Col, Collapse, Descriptions, Row, Tag } from 'antd'
import * as React from 'react'

import { Contract, ContractField } from '../../lib/contract'

type Props = {
  readonly endpointInfo: Contract
}

export class ContractDescription extends React.PureComponent<Props> {

  public render(): React.ReactNode {
    const { endpointInfo: { contract } } = this.props

    console.log('contract', contract);

    return (


      <Row gutter={16}>
        <Col span={12}>
          <Card title='Body:'>
            {this.renderFields(contract.body)}
          </Card>
        </Col>
        <Col span={12}>
          <Card title='Responses:'>
            <Collapse>
              {contract.response.map((response, index) => (
                  <Collapse.Panel
                    key={index}
                    header={<><Tag color={this.getTagColor(response.code)}>{response.code}</Tag> - {response.description}</>}
                  >
                    {response.fields.length > 0 ? this.renderFields(response.fields) : 'Empty response...'}
                  </Collapse.Panel>
              ))}
            </Collapse>
          </Card>
        </Col>
      </Row>
    )
  }

  private readonly renderFields = (fields: ReadonlyArray<ContractField>) => (
    <Descriptions column={1} bordered={true}>
      {fields.map((field, index) => (
        <Descriptions.Item key={index} label={field.name}>
          <strong>{field.type}</strong>
        </Descriptions.Item>
      ))}
    </Descriptions>
  )

  private readonly getTagColor = (code: number): string => {
    switch (code.toString().substring(0, 1)) {
      case '5':
        return 'magenta'
      case '4':
        return 'red'
      case '3':
        return 'orange'
      case '2':
        return 'green'
      case '1':
        return 'cyan'
      default:
        return 'geekblue'
    }
  }

}
