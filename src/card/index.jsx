import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Card({ disabled, handleClick, id, type, flipped, height, width, solved}) {
    return <div
    className={`flip-container ${flipped ? 'flipped' : ''}`}
    style={{
        width, height
    }}
    onClick={() => disabled ? null : handleClick(id)}
    >
    <div className='flipper'>
    <img
    alt='card'
    style={{
        height, width
    }}
    className={flipped ? 'front' : 'back'}
    src={flipped || solved ? `/img/${type}.png` : `/img/back.png` }
    />

    </div>
    </div>
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
}
