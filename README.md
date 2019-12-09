## Demo
![Demo](https://i.ibb.co/WnbqV6M/20191206185143.png)


## Installation & Usage
```sh
npm install awesome-react-colorpicker --save
```

## Import the Component

```js
import React from 'react';
import ColorPicker from 'awesome-react-colorpicker';
import 'awesome-react-colorpicker/dist/colorpicker.min.css';

class Component extends React.Component {

  render() {
    return (
        <ColorPicker 
            color="red"
            globalColor={['red', 'rgb(200, 100, 100)']}
            onChange={this.handleChange}
            addGlobalColor={this.handleAddGlobalColor}
        />
    ) 
  }
}
```

## proptypes
```
* color
* globalColor
* onChange
* addGlobalColor
```

### color
- string

### globalColor
- Array\<string\>

### onChange
- function
- params ( color: string )

### addGlobalColor
- function
- params ( color: string )