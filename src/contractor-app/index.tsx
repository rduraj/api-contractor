import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'

import 'materialize-css/dist/js/materialize.min.js'
import './styles.css'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement,
)
