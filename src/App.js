import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { connect } from "react-redux";

import { getSpacexProgramList } from "./actions/spacex-program-action";

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            yearFilter : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, ]
        }
    }
    componentDidMount () {
        this.props.fetchSpacexProgramList()
    }

    applyFilter = (value, key) => {
        console.log('getdata')
        let lauchSuccess = key === 'launchFilter' ? value : ''
        let landSuccess = key === 'landFilter' ? value : ''
        let launchedYear= key === 'dateFilter' ? value : ''

        this.props.fetchSpacexProgramList(lauchSuccess, landSuccess, launchedYear)
    }

    render() {
        const { yearFilter } = this.state

        return (
            <Container>
                <h1>SpaceX Launch programs </h1>
                <Row>
                    <Col xs="12" md="6" lg="3" className="bg-white pb-5">
                        <h4>Filters</h4>
                        <Row>
                            <Col>
                                <h6 className="subHeader">Launch Year</h6>
                                <Row>
                                    {
                                        yearFilter.map((item, index) => {
                                            return (
                                                <Col key={index} xs="6" md="6" className="text-center filterBadges">
                                                    <Badge onClick={() => this.applyFilter(item, 'dateFilter')} variant="info" as="h5">{item}</Badge>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="filterBadges">
                                <h6 className="subHeader">Successfull Launch</h6>
                                <div className="d-flex justify-content-around">
                                    <Badge onClick={() => this.applyFilter(true, 'launchFilter')} variant="info" as="h5">True</Badge>
                                    <Badge onClick={() => this.applyFilter(false, 'launchFilter')} variant="info" as="h5">False</Badge>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="filterBadges">
                                <h6 className="subHeader">Successfull Landing</h6>
                                <div className="d-flex justify-content-around">
                                    <Badge onClick={() => this.applyFilter(true, 'landFilter')} variant="info">True</Badge>
                                    <Badge onClick={() => this.applyFilter(false, 'landFilter')} variant="info">False</Badge>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" md="6" lg="9">

                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <h4>Developed By: Santosh</h4>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        spacexProgramList: state.spcaexProgram
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSpacexProgramList: (lauchSuccess = '', landSuccess = '', launchedYear='') => dispatch(getSpacexProgramList(lauchSuccess, landSuccess, launchedYear))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
