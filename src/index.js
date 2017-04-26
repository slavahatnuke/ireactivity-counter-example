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
