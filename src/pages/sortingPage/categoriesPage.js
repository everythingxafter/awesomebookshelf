import React from "react";
import { Button, Container } from "react-bootstrap";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import NavbarSide from "../../component/navbar/NavbarSide";
import SortingCard from "./component/sortingCard";
import './categoriesPage.css'

export default function CategoriesPage() {
    return (
        <div style={{ display: 'flex', color: 'var(--fontColorPrimary)' }}>
            <NavbarSide />
            <div style={{ width: '100%' }}>
                <NavbarSearch />
                <Container>
                    <div className="categories-page__tags">
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                        <Button>Action</Button>
                    </div>
                    <div>
                        <h1>Filter by : KeyTags</h1>
                    </div>
                    <Container>
                        <div className="categories-page__container">
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
                </Container>
            </div>
        </div>

    )
}