import React from 'react';
import {connect} from "react-redux";
import './Sidebar.css';
import { IFeature } from '../../model/IFeature';

export interface Props {
    features: IFeature[]
}

class Sidebar extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const listItems = this.props.features.map((item, index) =>
            <li key={index}>
                <div><a href="">{item.name}</a></div>
            </li>
        );

        return (
            <div className="side">
                <ul className="side--features">
                    {listItems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: Props) => {
    const { features } = state;
    return { features };
};

export default connect(mapStateToProps)(Sidebar);
