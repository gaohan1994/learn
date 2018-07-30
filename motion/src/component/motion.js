import React, { Component } from 'react';
import { Motion,  spring,  } from 'react-motion';
// import Head from './demos/head';

class Simple extends Component {

    constructor (props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toogleOpen = () => {
        const { open } = this.state;
        this.setState({
            open: !open
        });
    }

    render () {
        const { open } = this.state;
        const motionStyle = open === true
            ? spring(10)
            : spring(0)

        return (
            <Motion
                defaultStyle={{x: 0}} 
                style={{x: motionStyle}}
            >
                {({x}) => (
                    <div 
                        className="test" 
                        style={{
                            WebkitTransform: `translate3d(${x * 10}px, 0, 0)`,
                            transform: `translate3d(${x * 10}px, 0, 0)`,
                        }}
                        onClick={this.toogleOpen}
                    >
                        阿西
                    </div>
                )}
            </Motion>
        )
    }
}


export default class Test extends Component {
    render() {
        return (
            <div>
                
                <Simple/>  
                {/* <Head /> */}        
            </div>
        )
    }
}
