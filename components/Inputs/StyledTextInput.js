import React, { useState } from "react";
import { View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
//styled components
import styled from "styled-components/native";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";
const { primary, secondary, tertiary, accent, lightGray } = colors;

const InputField = styled.TextInput`
  background-color: ${primary};
  padding: 15px;
  padding-left: 65px;
  padding-right: 55px;
  border-radius: 10px;
  font-size: 16px;
  height: 60px;
  margin-top: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
  border-color: ${secondary};
  border-width: 2px;
`;

const LeftIcon = styled.View`
  position: absolute;
  top: 35px;
  left: 15px;
  z-index: 1;
  border-right-width: 2px;
  border-color: ${secondary};
  padding-right: 10px;
`;

const RightIcon = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  right: 15px;
  z-index: 1;

`;

const StyledTextInput = ({ icon, label, isPassword, ...props }) => {
  const [inputBackgroundColor, setInputBackgroundColor] = useState();
  const [hidePassword, setHidePassword] = useState(true);
  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor(primary);
  };

  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor(secondary);
  };

  return (
    <View>
      <LeftIcon>
        <MaterialCommunityIcons name={icon} size={30} color={accent} />
      </LeftIcon>
      <SmallText>{label}</SmallText>
      <InputField
        {...props}
        placeholderTextColor={lightGray}
        style={{ backgroundColor: inputBackgroundColor, ...props?.style }}
        onBlur={customOnBlur}
        onFocus={customOnFocus}
        secureTextEntry={isPassword && hidePassword}
      />
      {isPassword&&<RightIcon onPress={()=>{
        setHidePassword(!hidePassword);
      }} >
        <MaterialCommunityIcons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={tertiary} />

        </RightIcon>}
    </View>
  );
};

export default StyledTextInput;
