
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdZoomOutMap extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m35 25v10h-10l3.828333333333333-3.828333333333333-4.843333333333334-4.766666666666666 2.423333333333332-2.4200000000000017 4.766666666666666 4.844999999999999z m-20 10h-10v-10l3.828333333333333 3.828333333333333 4.766666666666666-4.843333333333334 2.4200000000000017 2.423333333333332-4.845000000000001 4.766666666666666z m-10-20v-10h10l-3.828333333333333 3.828333333333333 4.843333333333334 4.766666666666666-2.423333333333334 2.4200000000000017-4.7666666666666675-4.845000000000001z m20-10h10v10l-3.828333333333333-3.828333333333333-4.766666666666666 4.843333333333334-2.4200000000000017-2.423333333333334 4.844999999999999-4.7666666666666675z"/></g>
            </IconBase>
        );
    }
}