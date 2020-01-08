import { Icon, Layout, Menu } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'

type State = {
  readonly menuCollapsed: boolean,
}

export class AppMenu extends React.PureComponent<{}, State> {

  public state: State = {
    menuCollapsed: true,
  }

  public render(): React.ReactNode {
    return (
      <Layout.Sider collapsible={true} collapsed={this.state.menuCollapsed} onCollapse={this.collapseMenu}>
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            theme="dark"
          >
          <Menu.Item key="1">
            <Link to='/'>
              <Icon type="folder-open" />
              <span>Contracts</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/add-new'>
              <Icon type="edit" />
              <span>Add new</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    )
  }

  private readonly collapseMenu = () => {
    this.setState({ menuCollapsed: !this.state.menuCollapsed })
  }
}
