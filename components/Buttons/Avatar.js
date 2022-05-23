import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//styled components
import styled from "styled-components/native";
import { colors } from "../colors";
const { primary, secondary, accent } = colors;

const StyledView = styled.TouchableOpacity`
 
  background-color: ${primary};
  flex-direction:column;
  height: 45px
  width: 45px;
  border-radius: 15px;
  justify-content:center;
  align-items:center;
  border-width:2px;
  border-color: ${secondary};
`;

const Avatar = (props) => {
  return <StyledView {...props}><MaterialCommunityIcons
  name="account"
  size={35}
  color={accent}
  /></StyledView>;
};

export default Avatar;
