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
import IconHeader from "../components/Icons/IconHeader";
import StyledCodeInput from "../components/Inputs/StyledCodeInput";
import styled from "styled-components/native";
import ResendTimer from "../components/Timers/ResendTimer";
import MessageModal from "../components/Modals/MessageModal";
const { primary } = colors;

const FormWrapper = styled.View`
  ${(props) => {
    return props.pinReady ? `opacity: 1` : `opacity : 0.3`;
  }}
`;

const ResetPassword = ({navigation}) => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setisSuccessMessage] = useState(false);

  const MAX_CODE_LENGTH = 4;
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);

  // resending email
  const [activeResend, setActiveResend] = useState(false);
  const [resendStatus, setResendStatus] = useState("Resend");
  const [resendingEmail, setResendingEmail] = useState(false);

  // modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessageType, setModalMessageType] = useState("");
  const [headerText, setHeaderText] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [buttonText, setButtonText] = useState("");


  const moveTo = (screen, payLoad) => {
    navigation.navigate(screen, { ...payLoad });
  };


  const buttonHandler = () => {
    if (modalMessageType === "success") {
      // do something
    }

    setModalVisible(false);
  };

  const showModal = (type, headerText, message, buttonText) => {
    setModalMessageType(type);
    setHeaderText(headerText);
    setModalMessage(message);
    setButtonText(buttonText);
    setModalVisible(true);
  };
  const handleOnSubmit = async (credentials, setSubmiting) => {
    try {
      setMessage(null);
      //call backend
      //move to next page
      moveTo('Login');
      setSubmiting(false);
      return showModal(
        "success",
        "All good",
        "Your password has been reset",
        "Proceed"
      );
    } catch (error) {
      setMessage("Request Failed!" + error.message);
      setSubmiting(false);
      return showModal("failed", "Failed!", error.message, "Close");
    }
  };

  const resendEmail = async (triggerTimer) => {
    try {
      setResendingEmail(true);

      // make reaquest to backend
      // update setResendStatus

      setResendingEmail(false);
      // hold on briefly

      setTimeout(() => {
        setResendStatus("Resend");
        setActiveResend(false);
        triggerTimer();
      }, 5000);
    } catch (error) {
      setResendingEmail(false);
      setResendStatus("Failed");
      alert("Email resend failed:" + error.message);
    }
  };

  return (
    <MainContainer>
      <KeyboardAvoidingContainer>
        <RegularText style={{ textAlign: "center" }}>
          Enter the 4-digit code sent to your email
        </RegularText>
        <StyledCodeInput
          code={code}
          setCode={setCode}
          maxLength={MAX_CODE_LENGTH}
          setPinReady={setPinReady}
        />

        <ResendTimer
          style={{ marginBottom: 25 }}
          activeResend={activeResend}
          setActiveResend={setActiveResend}
          resendStatus={resendStatus}
          resendingEmail={resendingEmail}
          resendEmail={resendEmail}
        />

        <Formik
          initialValues={{ newPassword: "", confirmNewPassword: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.newPassword == "" || values.confirmNewPassword == "") {
              setMessage("Please fill in all fields");
              setSubmitting(false);
            } else if (values.newPassword !== values.confirmNewPassword) {
              setMessage("Passwords do not match");
              setSubmitting(false);
            } else {
              handleOnSubmit(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <FormWrapper pinReady={pinReady}>
              <StyledTextInput
                label="New password"
                icon="lock-open-variant"
                placeholder="* * * * * * * *"
                onChangeText={handleChange("newPassword")}
                onBlur={handleBlur("newPassword")}
                value={values.newPassword}
                isPassword={true}
                style={{ marginBottom: 25 }}
                editable={pinReady}
              />
              <StyledTextInput
                label="Confirm new password"
                icon="lock-open-variant"
                placeholder="* * * * * * * *"
                onChangeText={handleChange("confirmNewPassword")}
                onBlur={handleBlur("password")}
                value={values.confirmNewPassword}
                isPassword={true}
                style={{ marginBottom: 25 }}
                editable={pinReady}
              />
              <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>
                {message || " "}
              </MsgBox>
              {!isSubmitting && (
                <RegularButton disabled={!pinReady} onPress={handleSubmit}>
                  Submit
                </RegularButton>
              )}
              {isSubmitting && (
                <RegularButton disabled={true}>
                  <ActivityIndicator size="small" color={primary} />
                </RegularButton>
              )}
            </FormWrapper>
          )}
        </Formik>
        <MessageModal
          modalVisible={modalVisible}
          buttonHandler={buttonHandler}
          type={modalMessageType}
          headerText={headerText}
          message={modalMessage}
          buttonText={buttonText}
        />
      </KeyboardAvoidingContainer>
    </MainContainer>
  );
};

export default ResetPassword;
