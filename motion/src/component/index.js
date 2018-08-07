import React, { Component } from 'react'
import Cart from './cart';
import { merge } from 'lodash';
class Index extends Component {

    constructor (props) {
        super(props);
        this.state = {
            balls: [],
            ballsTarget: { sx: 30 , sy: window.innerHeight - 40 },
        }
    }

    render() {
        const { balls, ballsTarget } = this.state;

        const data = new Array(5).fill({}).map((item, i) => {i})

        return (
            <div className="body">
                <Cart
                    changeFlyBallCount={this.changeFlyBallCount.bind(this)}
                    balls={balls}
                    target={ballsTarget}
                    curvature={0.004}
                    speed={150}
                />
                
                {
                    data.map((item, i) => (
                        <div 
                            key={i}
                            className="cart-item"
                            onClick={this.showFlyBall}
                        >
                            item
                        </div>
                    ))
                }

                <div ref={r => this.r = r} className="target"></div>
            </div>
        )
    }

    showFlyBall = ({pageX: x, pageY: y}) => {
        const { balls } = this.state;

        const newBall = {
            id: new Date().getTime(),
            position: {x, y},
        }

        balls.push(newBall);

        this.setState({
            balls: merge([], balls)
        })
    }

    changeFlyBallCount = (id) => {
        console.log('id: ', id);
        const { balls } = this.state;

        for (let i = 0; i < balls.length; i++) {
            if (balls.id === id) {
                balls.splice(i, 1);
                break;
            }
        }

        this.setState({
            balls: merge([], balls)
        })
    }
}

export default Index;