import React from "react";
import NavbarSide from "../../component/navbar/NavbarSide";
import './BooksCollection.css'
import CarouselCollection from "./component/CarouselCollection";
import NavbarSearch from "./component/NavbarSearch";
import PopularBook from "./component/PopularBook";

export default function BooksCollection() {
    return (
        <div style={{ display: "flex", }}>
            <NavbarSide />
            <div style={{ width: "100%" }}>
                <NavbarSearch />
                <CarouselCollection />
                <PopularBook />
            </div>

        </div>
    )
}