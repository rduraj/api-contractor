import * as React from 'react'

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  WEBSOCKET = 'WS',
}


type State = {
  readonly module: string,
  readonly method: HttpMethod,
  readonly name: string,
  readonly fields: ReadonlyArray<{ readonly name: string, readonly type: string }>
}

export class NewContractForm extends React.PureComponent<{}, State> {

  public readonly state: State = {
    module: '',
    method: HttpMethod.GET,
    name: '',
    fields: [],
  }

  public render(): React.ReactNode {

    return (
      <>
        {/* <Select
          onChange={this.setModule}
          value={this.state.module}
        >
          <option disabled={true} value="">Select module</option>
          {Object.keys(contracts).map(module => (<option key={module} value={module}>{module}</option>))}
        </Select>
        <Select
          onChange={this.setMethod}
          value={this.state.method}
        >
          <option disabled={true} value="">Select method</option>
          {Object.keys(HttpMethod).map(method => (<option key={method} value={HttpMethod[method]}>{HttpMethod[method]}</option>))}
        </Select>
        <TextInput onChange={this.setName} label='Endpoint URL' value={this.state.name} />
        {this.state.fields.map((field, index) => (
          <Row key={index}>
            <Col s={5}>
              <TextInput onChange={this.setFieldName(index)} label='Field name' value={this.state.fields[index].name} />
            </Col>
            <Col s={4}>
              <TextInput onChange={this.setFieldType(index)} label='Field type' value={this.state.fields[index].type} />
            </Col>
            <Col s={1}><Button icon='delete' floating={true} onClick={this.removeField(index)} /></Col>
          </Row>
        ))}
        <Button onClick={this.addNewField}>Add new field</Button> */}
        test
      </>
    )
  }

}
