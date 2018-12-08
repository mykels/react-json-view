import React from 'react';
import {Icon} from "antd";

const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;
const DEFAULT_COLOR = '#000000';

export class CircleMinus extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="minus-circle" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}

export class CirclePlus extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="plus-circle" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}

export class SquareMinus extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="minus-square" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}

export class SquarePlus extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="plus-square" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}

export class ArrowRight extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="right" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}

export class ArrowDown extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="down" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}

export class Clippy extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="copy" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}

export class RemoveCircle extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="close-circle" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}

export class AddCircle extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="plus-circle" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}

export class Add extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <svg {...getIconStyle(style)}
                     viewBox="0 0 40 40"
                     fill="currentColor"
                     preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z"/>
                    </g>
                </svg>
            </span>
        );
    }
}

export class Edit extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="edit" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}

export class CheckCircle extends React.PureComponent {
    render() {
        const {props} = this;
        const {style, ...rest} = props;

        return (
            <span {...rest}>
                <Icon type="check-circle" theme="twoTone" {...getIconStyle(style)}/>
            </span>
        );
    }
}


function getIconStyle(style) {
    if (!style) {
        style = {};
    }
    return {
        style: {
            verticalAlign: 'middle',
            ...style,
            color: style.color ? style.color : DEFAULT_COLOR,
            height: '1em',
            width: '1em',
            marginRight: "6px"
        }
    };
}
