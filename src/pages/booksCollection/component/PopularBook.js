import React from "react";
import { Container } from "react-bootstrap";
import PopularBookCard from "./PopularBookCard";

export default function PopularBook() {
    return (
        <div>
            <Container style={{ marginTop: '3em', marginBottom: '1.5em' }}>
                <h1>Popular Book</h1>
            </Container>
            <Container>
                <div style={{ display: 'flex' }}>
                    <PopularBookCard />
                    <PopularBookCard />
                    <PopularBookCard />
                    <PopularBookCard />
                    <PopularBookCard />
                    <PopularBookCard />
                    <PopularBookCard />
                    <PopularBookCard />

                </div>
            </Container>
        </div>
    )
}