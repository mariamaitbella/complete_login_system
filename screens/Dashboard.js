import React, { useState } from "react";
import { Formik } from "formik";
import { ActivityIndicator } from "react-native";
//custom components
import MainContainer from "../components/Containers/MainContainer";
import KeyboardAvoidingContainer from "../components/Containers/KeyboardAvoidingContainer";
import RegularText from "../components/Texts/RegularText";
import StyledTextInput from "../components/Inputs/StyledTextInput";
import MsgBox from "../components/Texts/MsgBox";
import RegularButton from "../components/Buttons/RegularButton";
import { colors } from "../components/colors";
import PressableText from "../components/Texts/PressableText";
import RowContainer from "../components/Containers/RowContainer";
//styled components
import styled from "styled-components/native";
import { StatusBarHeight, ScreenHeight } from "../components/shared";
import BigText from "../components/Texts/BigText";
import InfoCard from "../components/Cards/InfoCard";

const { primary, darkGray } = colors;

const TopBg = styled.View`
  background-color: ${darkGray};
  width: 100%;
  height: ${ScreenHeight * 0.3}px;
  border-radius: 30px;
  position: absolute;
  top: -30px;
`;

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setisSuccessMessage] = useState(false);

  const handleLogin = async (credentials, setSubmiting) => {
    try {
      setMessage(null);
      //backend
      //move to next page
      setSubmiting(false);
    } catch (error) {
      setMessage("Login failed" + error.message);
      setSubmiting(false);
    }
  };

  return (
    <MainContainer style={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}>
      <TopBg />
      <MainContainer style={{ backgroundColor: "transparent" }}>
        {/* content */}
        <BigText style={{ marginBottom: 25, fontWeight: "bold" }}>
          Hello, Mariam!
        </BigText>
        <InfoCard
          icon="chart-timeline-variant"
          title="Balance"
          value="13,288.84"
          date="23/05/2022"
          style={{marginBottom:25}}
        />
        <InfoCard
          icon="chart-arc"
          title="Savings"
          value="3,300.63"
          date="Last 6 months"
        />
      </MainContainer>
    </MainContainer>
  );
};

export default Dashboard;
