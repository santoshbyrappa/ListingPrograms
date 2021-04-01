import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import { connect } from "react-redux";

import { getSpacexProgramList } from "./actions/spacex-program-action";

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            yearFilter : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
            launchFilter: '',
            landFilter: '',
            dateFilter: ''
        }
    }
    componentDidMount () {
        this.props.fetchSpacexProgramList()
    }

    applyFilter = (value, key) => {
        console.log('assad')
        this.setState({ [key]: value }, () => {
            const { landFilter, launchFilter, dateFilter } = this.state

            this.props.fetchSpacexProgramList(launchFilter, landFilter, dateFilter)
        })
    }

    render() {
        const { yearFilter, launchFilter, landFilter, dateFilter } = this.state
        const { spacexProgramList } = this.props
        return (
            <Container fluid>
                <h3>SpaceX Launch programs </h3>
                <Row>
                    <Col xs="12" md="6" lg="3" className="px-3 h-100 mb-3">
                        <div className="bg-white pb-5">
                            <h4>Filters</h4>
                            <Row>
                                <Col>
                                    <h6 className="subHeader">Launch Year</h6>
                                    <Row>
                                        {
                                            yearFilter.map((item, index) => {
                                                return (
                                                    <Col key={index} xs="6" md="6" className="text-center filterBadges">
                                                        <Badge className={dateFilter == item ? 'badgeSelected' : ''} onClick={() => this.applyFilter(item, 'dateFilter')} as="h5">{item}</Badge>
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
                                        <Badge className={launchFilter == 'true' ? 'badgeSelected' : ''} onClick={() => this.applyFilter('true', 'launchFilter')} as="h5">True</Badge>
                                        <Badge className={launchFilter == 'false' ? 'badgeSelected' : ''}onClick={() => this.applyFilter('false', 'launchFilter')} as="h5">False</Badge>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col className="filterBadges">
                                <h6 className="subHeader">Successfull Landing</h6>
                                <div className="d-flex justify-content-around">
                                    <Badge className={landFilter == 'true' ? 'badgeSelected' : ''} onClick={() => this.applyFilter('true', 'landFilter')} as="h5">True</Badge>
                                    <Badge className={landFilter == 'false' ? 'badgeSelected' : ''} onClick={() => this.applyFilter('false', 'landFilter')} as="h5">False</Badge>
                                </div>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col xs="12" md="6" lg="9" className="programDetails">
                        <Row>
                            {
                                spacexProgramList.length > 0 ? spacexProgramList.map((program, programListIndex) => {
                                    return (
                                        <Col lg="3" xs="12" key={programListIndex} className="px-xs-0 pb-3">
                                            <Card className="h-100">
                                                <Card.Body className="programImage">
                                                    <div>
                                                        <img src={program.links.mission_patch} alt="No Image" width="100"/>
                                                    </div>
                                                    <h6>{program.mission_name}</h6>
                                                    <dl>
                                                        <dt>Mission Ids :</dt>
                                                        {
                                                            program.mission_id ? program.mission_id.map((id, missionIdIndex) => <dd key={missionIdIndex}>{id}</dd>) : '-'
                                                        }
                                                        <dt>Launched Year :</dt>
                                                        <dd>{program.launch_year}</dd>
                                                        <dt>Successfull Launch :</dt>
                                                        <dd>{program.launch_success ? 'true' : 'false'}</dd>
                                                        <dt>Successfull Landings :</dt>
                                                        <dd>{program.land_success ? 'true' : 'false'}</dd>
                                                    </dl>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                }) : <div className="text-center">No data found</div>
                            }
                        </Row>
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
        spacexProgramList: state.spcaexProgram.spacexProgramList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSpacexProgramList: (lauchSuccess = '', landSuccess = '', launchedYear='') => dispatch(getSpacexProgramList(lauchSuccess, landSuccess, launchedYear))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
