import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/helper';
import Canvas from './components/Canvas';

class App extends Component {
    componentDidMount() {
        setInterval(() => {
            this.props.moveObjects(this.canvasMousePosition);
        }, 10);
    }

    trackMouse(event) {
        this.canvasMousePosition = getCanvasPosition(event);
    }

    render() {
        return (
            <Canvas
                mousePosition={this.props.mousePosition}
                trackMouse={event => (this.trackMouse(event))}
            />
        );
    }
}

App.propTypes = {
    angle: PropTypes.number.isRequired,
    moveObjects: PropTypes.func.isRequired,
};

export default App;
