import { Layout } from 'antd'
import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { history } from '../../lib/router'
import { AppMenu } from '../AppMenu'
import { ContractList } from '../ContractList'
import { NewContractForm } from '../NewContractForm'

export class Router extends React.PureComponent {

  public render(): React.ReactNode {
    return (
      <ConnectedRouter history={history}>
        <>
          <AppMenu />
          <Layout.Content>
            <Layout.Header style={{ background: '#fff', marginBottom: 20 }}>
              <h1>API Contractor</h1>
            </Layout.Header>
            <div style={{ margin: 20 }}>
              <Switch>
                <Route exact={true} path='/add-new'><NewContractForm /></Route>
                <Route path='/'><ContractList /></Route>
              </Switch>
            </div>
          </Layout.Content>
        </>
      </ConnectedRouter>
    )
  }
}

