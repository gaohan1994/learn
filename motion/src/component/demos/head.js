import React, { Component } from 'react'
import { range } from 'lodash';
import { StaggeredMotion, spring, presets } from 'react-motion';
/**
 * 跟随鼠标移动的demo （也许也有手指）
 * 
 * didmount 注册事件
 * 
 * willunmount 注销事件
*/
class Head extends Component {

    constructor (props) {
        super(props);
        this.state = {
            x: 250,
            y: 300,
        }

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
    }

    componentDidMount = () => {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('touchmove', this.handleTouchMove);
    }

    componentWillUnmount = () => {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('touchmove', this.handleTouchMove);
    }

    handleMouseMove = ({pageX: x, pageY: y}) => {
        this.setState({
            x,
            y,
        })
    }

    handleTouchMove = ({touches}) => {
        this.handleMouseMove(touches[0]);
    }

    getStyles = (prevStyels) => {
        // `prevStyels` is the interpolated value of the last tick
        const endValue = prevStyels.map((_, i) => {
            return i === 0
                ? this.state
                : {
                    x: spring(prevStyels[i - 1].x, presets.gentle),
                    y: spring(prevStyels[i - 1].y, presets.gentle),
                };
        });

        return endValue;
    }

    render () {
        return (
            <StaggeredMotion
                defaultStyles={range(6).map(() => ({x: 0, y: 0}))}
                styles={this.getStyles}
            >
                {balls => (
                    <div className="Head">
                        {balls.map(({x, y}, i) => (
                            <div 
                                key={i} 
                                className={`Head-ball ball-${i}`}    
                                style={{
                                    WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                                    transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                                    zIndex: balls.length - i,
                                }}
                            />
                        ))}
                    </div>
                )}
            </StaggeredMotion>
        )
    }
}

export default Head;