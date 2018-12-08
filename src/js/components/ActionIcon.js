import React from 'react';
import {Icon} from "antd";

const DEFAULT_THEME = 'twoTone';
const DEFAULT_COLOR = '#000000';

export class ActionIcon extends React.PureComponent {
    render() {
        const {props} = this;
        let {style, theme, ...rest} = props;
        theme = props.theme || DEFAULT_THEME;

        return (
            <span {...rest}>
                <Icon type={props.icon} theme={theme} {...getIconStyle(style)}/>
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
