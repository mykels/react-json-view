import React from 'react';
import {ActionIcon} from "./ActionIcon";

export class CircleMinus extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='minus-circle'/>
        );
    }
}

export class CirclePlus extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='plus-circle'/>
        );
    }
}

export class SquareMinus extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='minus-square'/>
        );
    }
}

export class SquarePlus extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='plus-square'/>
        );
    }
}

export class ArrowRight extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='caret-right' theme='filled'/>
        );
    }
}

export class ArrowDown extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='caret-down' theme='filled'/>
        );
    }
}

export class Clippy extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='copy'/>
        );
    }
}

export class Delete extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='delete'/>
        );
    }
}

export class Cancel extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='close-circle'/>
        );
    }
}

export class Add extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='plus-circle'/>
        );
    }
}

export class Edit extends React.PureComponent {
    render() {
        const {props} = this;

        return (
            <ActionIcon {...props} icon='edit'/>
        );
    }
}

export class Check extends React.PureComponent {
    render() {
        const {props} = this;
        return (
            <ActionIcon {...props} icon='check-circle'/>
        );
    }
}

