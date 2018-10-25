import React from 'react';
import PropTypes from 'prop-types';
import {STYLES} from '../utils/constants';

const Ball = (props) => {
    const ballStyle = {
        fill: STYLES.ballColor,
    };
    return (
        <ellipse
            style={ballStyle}
            cx={props.position.x}
            cy={props.position.y}
            rx="16"
            ry="16"
        />
    );
};

Ball.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
};

export default Ball;
