import React from "react";
import { Oval } from "react-loader-spinner";

export default function Loading({ seen }) {
  if (seen) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Oval
          height={80}
          width={80}
          color="white"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="white"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}
