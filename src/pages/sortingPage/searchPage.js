import React from "react";
import { Container } from "react-bootstrap";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import NavbarSide from "../../component/navbar/NavbarSide";
import SortingCard from "./component/sortingCard";
import './searchPage.css'

export default function SearchPage() {
    return (
        <div style={{ display: 'flex', color: 'var(--fontColorPrimary)' }}>
            <NavbarSide />
            <div style={{ width: '100%' }}>
                <NavbarSearch />
                <div style={{ margin: '2em 0 2em 2em' }}>
                    <h1>Search Result</h1>
                </div>
                <Container>
                    <div className="search-page__container">
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />
                        <SortingCard />

                    </div>
                </Container>
            </div>
        </div>
    )
}