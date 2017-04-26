import React  from 'react';

export default ({counter, onUp}) =>
    <div className="counter-box">
        <div className="counter">{counter}</div>
        <button className="button" onClick={onUp}>UP</button>
    </div>