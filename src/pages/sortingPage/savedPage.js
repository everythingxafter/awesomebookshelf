import React from "react";
import { Container } from "react-bootstrap";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import NavbarSide from "../../component/navbar/NavbarSide";
import SortingCard from "./component/sortingCard";
import './savedPage.css'

export default function SavedPage() {
    return (
        <div style={{ display: 'flex', color: 'var(--fontColorPrimary)' }}>
            <NavbarSide />
            <div style={{ width: '100%' }}>
                <NavbarSearch />
                <div style={{ margin: '2em 0 2em 2em' }}>
                    <h1>Reading List</h1>
                </div>
                <Container>
                    <div className="saved-page__container">
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