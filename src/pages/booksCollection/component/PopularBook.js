import React from "react";
import { Container } from "react-bootstrap";
import PopularBookCard from "./PopularBookCard";
import "./PopularBook.css";

export default function PopularBook({ data, dataReadingList }) {
  return (
    <div>
      <Container
        style={{
          marginTop: "3em",
          marginBottom: "1.5em",
          color: "var(--fontColorPrimary)",
        }}
      >
        <h1>Popular Book</h1>
      </Container>
      <Container>
        <div className="popular-book-container">
          {data?.map((value) => {
            return (
              <PopularBookCard
                url={value?.Url}
                title={value?.Title}
                bookData={value}
                dataReadingList={dataReadingList}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
