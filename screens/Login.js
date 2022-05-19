import React, {useState} from "react";
import {Formik} from 'formik';
//custom components
import MainContainer from "../components/Containers/MainContainer";
import KeyboardAvoidingContainer from "../components/Containers/KeyboardAvoidingContainer";
import RegularText from "../components/Texts/RegularText";
import StyledTextInput from "../components/Inputs/StyledTextInput";
import MsgBox from "../components/Texts/MsgBox";

const Login = () => {
    const [message, setMessage]= useState('');
    const [isSuccessMessage, setisSuccessMessage]= useState(false);
  return (
    <MainContainer>
      <KeyboardAvoidingContainer>
        <RegularText style={{ marginBottom: 25 }}>
          Enter your account credentials
        </RegularText>
        <Formik initialValues={{email:'', password:''}}>
            {({handleChange, handleBlur, handleSubmit,values, isSubmitting}) =>(
                <>
                <StyledTextInput
                
                    label="Email Address"
                    icon="email-variant"
                    placeholder="walt4@gmail.com"
                    keyboardType="email-address"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={{marginBottom: 25}}

                    />
                <StyledTextInput
                
                label="Password"
                icon="lock-open"
                placeholder="* * * * * * * *"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                isPassword={true}
                style={{marginBottom: 25}}
                />
                <MsgBox style={{marginBottom: 25}} success={isSuccessMessage}>{message || 'an error here'}</MsgBox>
                </>
            )}

        </Formik>
        
      </KeyboardAvoidingContainer>
    </MainContainer>
  );
};

export default Login;
