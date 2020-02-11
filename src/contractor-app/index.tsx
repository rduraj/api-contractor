import 'materialize-css/dist/js/materialize.min.js' // tslint:disable-line: no-import-side-effect
import './styles.css' // tslint:disable-line: no-import-side-effect

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
