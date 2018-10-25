import React from 'react';
import {GAME_NAME} from '../utils/constants';
import Paddle from './Paddle';
import Ball from './Ball';
import CurrentScore from './CurrentScore';

const Canvas = () => {
    const minWidth = window.innerWidth / -2;
    const minHeight = window.innerHeight / -2;
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        <svg
            id={GAME_NAME}
            preserveAspectRatio="xMaxYMax none"
            viewBox={[minWidth, minHeight, width, height]}
        >
            <Paddle position={{x: 0, y: 0}} />
            <Ball position={{x: 0, y: -100}}/>
            <CurrentScore score={15} />
        </svg>
    );
};

export default Canvas;
