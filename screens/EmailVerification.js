import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
//custom components
import MainContainer from "../components/Containers/MainContainer";
import KeyboardAvoidingContainer from "../components/Containers/KeyboardAvoidingContainer";
import RegularText from "../components/Texts/RegularText";
import RegularButton from "../components/Buttons/RegularButton";
import { colors } from "../components/colors";
import IconHeader from "../components/Icons/IconHeader";
import StyledCodeInput from "../components/Inputs/StyledCodeInput";
import ResendTimer from "../components/Timers/ResendTimer";
import MessageModal from "../components/Modals/MessageModal";
const { primary, secondary, lightGray } = colors;

const EmailVerification = () => {
  const MAX_CODE_LENGTH = 4;
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);

  const [verifying, setVerifying] = useState(false);
  const [activeResend, setActiveResend] = useState(false);

  const [resendStatus, setResendStatus] = useState("Resend");
  const [resendingEmail, setResendingEmail] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessageType, setModalMessageType] = useState("");
  const [headerText, setHeaderText] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [buttonText, setButtonText] = useState("");

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
  const handleEmailVerification = async () => {
    try {
      setVerifying(true);
      //call backend
      setVerifying(false);
      return showModal(
        "success",
        "All good",
        "Your email has been verified",
        "Proceed"
      );
      //move to next page
    } catch (error) {
      setVerifying(false);
      return showModal("failed", "Failed!", error.message, "Close");
    }
  };

  return (
    <MainContainer>
      <KeyboardAvoidingContainer>
        <IconHeader name="lock-open" style={{ marginBottom: 30 }} />
        <RegularText style={{ marginBottom: 25, textAlign: "center" }}>
          Enter the 4-digit code sent to your email
        </RegularText>
        <StyledCodeInput
          code={code}
          setCode={setCode}
          maxLength={MAX_CODE_LENGTH}
          setPinReady={setPinReady}
        />
        {!verifying && pinReady && (
          <RegularButton onPress={handleEmailVerification}>
            Verify
          </RegularButton>
        )}
        {!verifying && !pinReady && (
          <RegularButton
            disabled={true}
            style={{ backgroundColor: secondary }}
            textStyle={{ color: lightGray }}
          >
            Verify
          </RegularButton>
        )}
        {verifying && (
          <RegularButton disabled={true}>
            <ActivityIndicator size="small" color={primary} />
          </RegularButton>
        )}
        <ResendTimer
          activeResend={activeResend}
          setActiveResend={setActiveResend}
          resendStatus={resendStatus}
          resendingEmail={resendingEmail}
          resendEmail={resendEmail}
        />
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

export default EmailVerification;
