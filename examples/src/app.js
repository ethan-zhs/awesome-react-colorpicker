/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import ColorPicker from '../../src' // 引入组件

const App = () => <ColorPicker globalColor={[]} />
render(<App />, document.getElementById('root'))
