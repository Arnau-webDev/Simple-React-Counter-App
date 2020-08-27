import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    // Handle Click
    const handleAddOnClick = (e) => { setCounter(counter + 1) };

    const handleSubstractOnClick = (e) => { setCounter(counter - 1) };

    const handleResetOnClick = (e) => { setCounter(value) };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={ handleAddOnClick }> Add 1 to number </button>
            <button onClick={ handleResetOnClick }> Reset </button>
            <button onClick={ handleSubstractOnClick }> Minus 1 to number </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}

export default  CounterApp;
