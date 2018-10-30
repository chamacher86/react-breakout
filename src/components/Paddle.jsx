import React from 'react';
import PropTypes from 'prop-types';
import {STYLES} from '../utils/constants';

const Paddle = (props) => {
    const paddleBaseStyle = {
        fill: STYLES.paddleColor,
    };

    const width = 100;
    const halfWidth = width / 2;
    const height = 20;
    const halfHeight = height / 2;

    return (
        <g>
            <rect
                x={props.position.x - halfWidth}
                y={props.position.y - halfHeight}
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
