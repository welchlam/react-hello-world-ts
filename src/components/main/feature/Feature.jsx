import React from 'react';
import { connect } from "react-redux";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import {addFeature, removeFeature} from "../../../redux/feature/actions";

class Feature extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddFeature = this.handleAddFeature.bind(this);
        this.handleRemoveFeature = this.handleRemoveFeature.bind(this);
    }

    render() {
        return (
            <div>
                <Paper style={{margin: '10px'}}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.features.map(feature => (
                                <TableRow key={feature.id}>
                                    <TableCell align="center">{feature.id}</TableCell>
                                    <TableCell align="center">{feature.name}</TableCell>
                                    <TableCell align="center">{feature.detail}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <Button variant="contained" color="primary" style={{margin: '5px'}} onClick={this.handleAddFeature}>
                    Add Feature
                </Button>
                <Button variant="contained" style={{margin: '5px'}} onClick={this.handleRemoveFeature}>
                    Remove Feature
                </Button>
            </div>

        );
    }

    handleAddFeature() {
        const ids = this.props.features.map(item => item.id);
        const maxId = Math.max.apply(Math, [...ids, 0]);
        const nextId = maxId + 1;
        this.props.addFeature(nextId);
    }

    handleRemoveFeature() {
        const ids = this.props.features.map(item => item.id);
        const maxId = Math.max.apply(Math, ids);
        this.props.removeFeature(maxId);
    }
}

const mapStateToProps = state => {
    const { features } = state;
    return { features };
};

export default connect(
    mapStateToProps,
    {addFeature, removeFeature}
)(Feature);
