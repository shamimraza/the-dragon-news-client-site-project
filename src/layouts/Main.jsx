import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNev from '../pages/Shared/leftnev/LeftNev';
import RightNev from '../pages/Shared/rightnev/RightNev';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNev></LeftNev>
                    </Col>
                    <Col lg={6}>
                        Main content coming....
                    </Col>
                    <Col lg={3}>
                        <RightNev></RightNev>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;