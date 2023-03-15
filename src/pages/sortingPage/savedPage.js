import React from "react";
import { Container } from "react-bootstrap";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import NavbarSide from "../../component/navbar/NavbarSide";

export default function SavedPage() {
    return (
        <div>
            <NavbarSide />
            <NavbarSearch />
            <Container>
                <div classname="saved-page__container">
                    <h1>saved page</h1>
                </div>
            </Container>
        </div>
    )
}