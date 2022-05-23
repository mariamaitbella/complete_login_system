import React from "react";

//styled components
import styled from "styled-components/native";
import { ScreenHeight } from "../shared";
import { colors } from "../colors";
const { primary, black, secondary, accent } = colors;
import SmallText from "../Texts/SmallText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RegularText from "../Texts/RegularText";
const CardView = styled.View`
  flex-direction: row;
  height: ${ScreenHeight * 0.2}px;
  background-color: ${primary};
  border-width: 2px;
  border-color: ${secondary};
  padding: 20px;
  border-radius: 15px;
  overflow: hidden;
  elevation: 5;
  shadow-color: ${black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
`;

const CardSection = styled.View`
  justify-content: space-between;
  align-items: flex-start;
`;

const InfoCard = ({ icon, title, value, date, ...props }) => {
  return (
    <CardView style={{ ...props?.style }}>
      <CardSection style={{ width: "60%" }}>
        <RegularText style={{ fontWeight: "bold" }}>{title}</RegularText>
        <RegularText style={{ fontWeight: "bold" }}>{value}</RegularText>
        <SmallText>{date}</SmallText>
      </CardSection>
      <CardSection style={{ width: "40%" }}>
        <MaterialCommunityIcons
          name={icon}
          size={ScreenHeight * 0.13}
          color={accent}
        />
      </CardSection>
    </CardView>
  );
};

export default InfoCard;
