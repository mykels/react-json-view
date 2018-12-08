import React from 'react';

import Theme from './../../themes/getStyle';

export default class extends React.PureComponent {

    render() {
        return (
            <div {...Theme(this.props.theme, 'null')}>
                NULL
            </div>
        );
    }

}
