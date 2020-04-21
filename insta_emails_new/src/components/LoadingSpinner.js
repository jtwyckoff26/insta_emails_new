import React from "react";
import styled from "styled-components";
import LoadingGif from "./loading.gif";

const LoadingSpinner = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;
`;

export default () => {
  return <LoadingSpinner src={LoadingGif} />;
};
