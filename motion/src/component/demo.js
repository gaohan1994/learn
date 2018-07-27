import React, { Component } from 'react'
import { Motion, StaggeredMotion, spring } from 'react-motion';

/**
 * 按钮的直径
*/
const MAIN_BUTTON_DIAM = 90;
const CHILD_BUTTON_DIAM = 48;

// NUM_CHILDREN: 子按钮的数量
const NUM_CHILDREN = 5;

const M_X = 490;
const M_Y = 450;

// OFFSET 应该在 0 到 0.5 之间
const OFFSET = 0.05;

// react-motion 的配置项
const SPRING_CONFIG = { stiffness: 400, damping: 28 };

const 
    FLY_OUT_RADIUS = 130,
    SEPARATION_ANGLE = 40,
    FAN_ANGLE = (NUM_CHILDREN - 1) * SEPARATION_ANGLE,
    BASE_ANGLE = ((180 - FAN_ANGLE) / 2);

const childButtonIcons = ['pencil', 'at', 'camera', 'bell', 'comment', 'bolt', 'ban', 'code'];

/**
 * 工具函数 ---- 角度和弧度的换算
 * 因为 Math.cos 和 Math.sin 接收参数得单位是弧度
 * 传入角度 返回该角度的弧度
 * @param {number} degress
 * @returns
 */
function toRadians (degress) {
    return degress * (Math.PI / 180);
}

/**
 * 计算每个子Button的最终位置
 * deltaX: 通过斜边计算出 再减去 Button的半径
 * deltaY: 通过斜边计算出 再加上 Button的半径
 * 
 * @param {*} index
 * @returns
 */
function finalChildDeltaPositions (index) {
    let angle = BASE_ANGLE + (index * SEPARATION_ANGLE);
    return {
        deltaX: FLY_OUT_RADIUS * Math.cos(toRadians(angle)) - (CHILD_BUTTON_DIAM / 2),
        deltaY: FLY_OUT_RADIUS * Math.cos(toRadians(angle)) + (CHILD_BUTTON_DIAM / 2),
    }
}

class Demo extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount = () => {
        window.addEventListener('click', this.closeMenu);
    }

    componentWillUnmount = () => {
        window.removeEventListener('click', this.closeMenu);
    }

    /**
     * 返回主要Button的style
     * @memberof Demo
     */
    mainButtonStyle = () => {
        return {
            width: MAIN_BUTTON_DIAM,
            height: MAIN_BUTTON_DIAM,
            top: M_Y - (MAIN_BUTTON_DIAM / 2),
            left: M_X - (MAIN_BUTTON_DIAM / 2),
        };
    }

    /**
     * 初始状态下子按钮样式
     *
     * @memberof Demo
     */
    initialChildButtonStyles = () => {
        return {
            width: CHILD_BUTTON_DIAM,
            height: CHILD_BUTTON_DIAM,
            top: spring(M_Y - (CHILD_BUTTON_DIAM / 2), SPRING_CONFIG),
            left: spring(M_X - (CHILD_BUTTON_DIAM / 2), SPRING_CONFIG),
            rotate: spring(-180, SPRING_CONFIG),
            scale: spring(0.5, SPRING_CONFIG),
        };
    }

    /**
     * 
     *
     * @memberof Demo
     */
    initialChildButtonStylesInit = () => {
        return {
            width: ,
            height: ,
            top: ,
            left: ,
            rotate: ,
            scale: ,
        };
    }

    finalChildButtonStyles = (childIndex) => {
        const { deltaX, deltaY } = finalChildDeltaPositions(childIndex);
        return {
            width: ,
            height: ,
            top: ,
            left: ,
            rotate: ,
            scale: ,
        };
    }

    finalChildButtonStylesInit = (childIndex) => {
        const { deltaX, deltaY } = finalChildDeltaPositions(childIndex);
        return {
            width: ,
            height: ,
            top: ,
            left: ,
            rotate: ,
            scale: ,
        };
    }

    toogleMenu = (e) => {
        e.stopPropagation();
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen
        });
    }

    closeMenu = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
            <div>
                demo
            </div>
        )
    }
}

export default Demo;