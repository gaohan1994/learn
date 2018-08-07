import React, { Component } from 'react';
import Parabola from './parabola';
import '../App.css';

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            balls: props.balls
        }

        this._createFlyBall = this._createFlyBall.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            balls: nextProps.balls
        })
    }

    render() {
        const { balls } = this.state;
        return (
            <div style={{position: 'relative'}}>
                {
                    balls.map(this._createFlyBall)
                }
            </div>
        )
    }

    _createFlyBall = (item, index) => {
        const { target, curvature = 0.004, speed = 120, changeFlyBallCount } = this.props;
        return (
            <Ball
                {...item.position}
                target={target}
                key={item.id}
                id={item.id}
                curvature={curvature}
                speed={speed}
                changeFlyBallCount={changeFlyBallCount}
            />
        );
    }
}

class Ball extends React.Component {

    componentDidMount() {
        const { 
            target, 
            curvature, 
            speed, 
            changeFlyBallCount,
            id,
        } = this.props;

        const options = {
            curvature,
            speed,
            complete: () => changeFlyBallCount(id)
        }

        this.parabola = new Parabola(this.container, target, options);
        this.parabola.run();
    }

    componentWillUnmount() {
        this.parabola.stop();
    }

    render () {
        const { x = 0, y = 0 } = this.props;
        return (
            <div
                className="flyBall"
                ref={c => this.container = c}
                style={{top: y, left: x}}
            />
        );
    }
}

export default Cart;