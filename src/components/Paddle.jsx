import React from 'react';
import PropTypes from 'prop-types';
import {STYLES} from '../utils/constants';

const Paddle = (props) => {
    const paddleBaseStyle = {
        fill: STYLES.paddleColor,
    };

    const transform = `rotate(${props.rotation}, 0, 0)`;

    const width = 100;
    const halfBase = width / 2;
    const height = 20;

    return (
        <g>
            <rect
                x={-halfBase}
                y={height}
                width={width}
                height={height}
                rx={2}
                ry={2}
                style={paddleBaseStyle}
            />
        </g>
    );
};

Paddle.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
};

export default Paddle;
