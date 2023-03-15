import React from "react";
import { Container } from "react-bootstrap";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import NavbarSide from "../../component/navbar/NavbarSide";

export default function SearchPage() {
    return (
        <div>
            <NavbarSide />
            <NavbarSearch />
            <Container>
                <div classname="search-page__container">
                    <h1>search page</h1>
                </div>
            </Container>
        </div>
    )
}