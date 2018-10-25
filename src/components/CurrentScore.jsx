import React from 'react';
import PropTypes from 'prop-types';

import {STYLES} from '../utils/constants';

const CurrentScore = (props) => {
    const scoreStyle = {
        fontFamily: '"Ubuntu", sans-serif',
        fontSize: 80,
        fill: STYLES.scoreColor,
    };

    return (
        <text style={scoreStyle} x="300" y="80">
            {props.score}
        </text>
    );
};

CurrentScore.propTypes = {
    score: PropTypes.number.isRequired,
};

export default CurrentScore;
