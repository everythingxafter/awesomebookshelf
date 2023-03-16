import React from "react";

export default function SortingCard({ url, title, onClick }) {
  return (
    <div onClick={onClick}>
      <img
        src={url}
        alt={url}
        style={{
          width: "250px",
          height: "350px",
          borderRadius: "16px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          maxWidth: "250px",
          marginTop: "1em",
          marginBottom: "1em",
        }}
      >
        <h4>{title}</h4>
      </div>
    </div>
  );
}
