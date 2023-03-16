import React from "react";
import { Container } from "react-bootstrap";
import PopularBookCard from "./PopularBookCard";
import "./PopularBook.css";
import Loading from "../../../component/loading/Loading";

export default function PopularBook({ data, dataReadingList, loading }) {
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
          {data.length > 0 ? (
            data?.map((value) => {
              return (
                <PopularBookCard
                  url={value?.Url}
                  title={value?.Title}
                  bookData={value}
                  dataReadingList={dataReadingList}
                />
              );
            })
          ) : (
            <Loading seen={loading} />
          )}
        </div>
      </Container>
    </div>
  );
}
