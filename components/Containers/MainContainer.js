import React from "react";

//styled components
import styled from "styled-components/native";
import { StatusBarHeight } from "../shared";
import { colors } from "../colors";
const { primary } = colors;

const StyledView = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${primary};
`;

const MainContainer = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default MainContainer;
