import React, { Component } from 'react'
import { range } from 'lodash';
import { Motion, StaggeredMotion, spring } from 'react-motion';

const BUTTON_SIZE = 50;

const SPRING_CONFIG = { stiffness: 500, damping: 30 };

export default class Col extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toogleButton = this.toogleButton.bind(this);
        this.closeButton = this.closeButton.bind(this);
    }

    toogleButton = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen
        });
    }

    closeButton = () => {
        this.setState({
            isOpen: false
        });
    }

    initialChildButtonStyles = () => {
        return {
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            bottom: 0,
            rotate: -180,
            scale: 0.5,
        }
    }

    initialChildButtonStylesInit = () => {
        return {
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            bottom: spring(0, SPRING_CONFIG),
            rotate: spring(-180, SPRING_CONFIG),
            scale: spring(0.5, SPRING_CONFIG),
        }
    }

    finalChildButtonStyles = (index) => {
        // console.log('index * (BUTTON_SIZE + 20): ', index * (BUTTON_SIZE + 20));
        return {
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            bottom: spring(index * (BUTTON_SIZE + 20), SPRING_CONFIG),
            rotate: spring(0, SPRING_CONFIG),
            scale: spring(1, SPRING_CONFIG),
        }
    }

    renderChildButtons = () => {
        const { isOpen } = this.state;

        const targetButtonStylesInitObject = range(4).map(i => {
            return isOpen ? this.finalChildButtonStyles(i) : this.initialChildButtonStyles()
        })

        const targetButtonStylesInit = Object.keys(
            targetButtonStylesInitObject).map(
                key => targetButtonStylesInitObject[key]
        );

        const calculateStylesFroNextFrame = prevFrameStyles => {

            // prevFrameStyles = isOpen ? prevFrameStyles : prevFrameStyles.reverse();

            const nextFrameStyles = prevFrameStyles.map((buttonStyleInPreviousFrame, i) => {
                if (isOpen === true) {
                    return this.finalChildButtonStyles(i)
                } else {
                    return this.initialChildButtonStylesInit()
                }
            });

            return nextFrameStyles;
        }

        return (
            <StaggeredMotion
                defaultStyles={targetButtonStylesInit}
                styles={calculateStylesFroNextFrame}
            >

                {
                    interpolatedStyles => {
                        return (
                            <div className="child-body">
                                {interpolatedStyles.map((style, index) => {
                                    const {width, height, bottom, rotate, scale} = style;
                                    return (
                                        <div 
                                            className="child-button"
                                            key={index}
                                            style={{
                                                width,
                                                height,
                                                bottom,
                                                transform: `rotate(${rotate}deg) scale(${scale})`,
                                            }}
                                            onClick={this.closeButton}
                                        />
                                    )
                                })}
                            </div>
                        )
                    }
                }
            </StaggeredMotion>
        )
    }

    render() {
        const { isOpen } = this.state;

        const mainButtonDisplay = 
            !isOpen
            ? {
                width: spring(BUTTON_SIZE, SPRING_CONFIG),
                height: spring(BUTTON_SIZE, SPRING_CONFIG),
            } : {
                width: spring(0, SPRING_CONFIG),
                height: spring(0, SPRING_CONFIG),
            }

        return (
            <div>
                {this.renderChildButtons()}
                <Motion style={mainButtonDisplay}>
                    {({width, height}) => {
                        return (
                            <div 
                                className="main-button button"
                                style={{ width:width, height: height}} 
                                onClick={this.toogleButton}   
                            />
                        )
                    }}
                </Motion>
            </div>
        )
    }
}
