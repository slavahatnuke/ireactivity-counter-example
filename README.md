# iReactivity-counter-example

### To start
- `npm i`
- `npm start`

### Example
```javascript
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'ireactivity';

import AppView from './App';

const store = {
    counter: 0
};

const App = connect(AppView, {
    counter: (store) => store.counter,
    onUp: (store) => () => store.counter = store.counter + 1
});

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
```

```javascript
// App.js

import React  from 'react';

export default ({counter, onUp}) =>
    <div className="counter-box">
        <div className="counter">{counter}</div>
        <button className="button" onClick={onUp}>UP</button>
    </div>
    
```

## iReactivity
This is simple react binding
[https://www.npmjs.com/package/ireactivity](https://www.npmjs.com/package/ireactivity)

