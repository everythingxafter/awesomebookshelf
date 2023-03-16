import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './LogoutPage.css'

export default function LogoutPage() {
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (counter === 0) {
            window.location.href = "/";
        }
    }, [counter]);

    return (
        <div className="logout-page">
            <Container>
                <Row>
                    <Col>
                        <div className="logout-page__text">
                            <h1>Logged Out Successfully!</h1>
                            <p>You will be redirected to the home page in {counter} seconds.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


