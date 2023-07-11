import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

import { PrimaryButton } from "../../../components/Buttons";
import { PlainInputField } from "../../../components/InputFields";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { RegisterProps } from "../Register";

import { CalendarIcon } from "../../../../assets/icons/svg-icons";
import tailwindConfig from "../../../../tailwind.config";

import { authorize } from "../../../redux/features/auth/auth.slice";
import { useSignUpMutation } from "../../../redux/features/auth/authApi.slice";

const RegisterInfo = ({ registerInfo, setRegisterInfo }: RegisterProps) => {
  const primaryColor = (tailwindConfig as any).theme.colors.blue;
  const [signUp, { data, isLoading }] = useSignUpMutation();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    mobile_number: "",
  });

  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const handleSubmit = () => {
    if (
      registerInfo.firstname === "" ||
      registerInfo.lastname === "" ||
      registerInfo.email === "" ||
      registerInfo.dob === null ||
      registerInfo.mobile_number === ""
    ) {
      setError({
        firstname: registerInfo.firstname === "" ? "Required" : "",
        lastname: registerInfo.lastname === "" ? "Required" : "",
        email: registerInfo.email === "" ? "Required" : "",
        dob: registerInfo.dob === null ? "Required" : "",
        mobile_number: registerInfo.mobile_number === "" ? "Required" : "",
      });
    } else if (
      registerInfo.email.includes("@") === false ||
      registerInfo.email.includes(".") === false ||
      registerInfo.email.includes(" ") === true
    ) {
      setError({
        ...error,
        email: "Invalid email address",
      });
    } else if (registerInfo.mobile_number.length < 10) {
      setError({
        ...error,
        mobile_number: "Invalid phone number",
      });
    } else {
      const payload = {
        firstname: registerInfo.firstname,
        middlename: registerInfo.middlename,
        lastname: registerInfo.lastname,
        email: registerInfo.email,
        dob: registerInfo.dob,
        mobile_number: registerInfo.mobile_number,
      };
      signUp(payload)
        .unwrap()
        .then((res) => {
          dispatch(authorize(res));
          Toast.show({
            type: "success",
            text1: "Registration Successful",
            text2: "Redirecting in 3 seconds",
            visibilityTime: 4000,
            autoHide: true,
          });
          setTimeout(() => {
            navigation.navigate("Home");
          }, 3000);
        })
        .catch((err) => {
          Toast.show({
            type: "error",
            text1: "Fail",
            text2: err.data.msg || "Something went wrong",
            visibilityTime: 4000,
            autoHide: true,
          });
        });
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View>
          <Text className="text-dark opacity-80 mb-sm">First Name</Text>
          <PlainInputField
            placeholder="Tim"
            value={registerInfo.firstname}
            onChangeText={(text: string) => {
              setRegisterInfo({
                ...registerInfo,
                firstname: text,
              });
            }}
          />
        </View>
        <View className="mt-default">
          <Text className="text-dark opacity-80 mb-sm">
            Middle Name (Optional)
          </Text>
          <PlainInputField
            placeholder="Alber"
            value={registerInfo.middlename}
            onChangeText={(text: string) => {
              setRegisterInfo({
                ...registerInfo,
                middleName: text,
              });
            }}
          />
        </View>
        <View className="mt-default">
          <Text className="text-dark opacity-80 mb-sm">Last Name</Text>
          <PlainInputField
            placeholder="McGraw"
            value={registerInfo.lastname}
            onChangeText={(text: string) => {
              setRegisterInfo({
                ...registerInfo,
                lastname: text,
              });
            }}
          />
        </View>
        <View className="mt-default">
          <Text className="text-dark opacity-80 mb-sm">Email</Text>
          <PlainInputField
            placeholder="example@mail.com"
            keyboardType="email-address"
            value={registerInfo.email}
            onChangeText={(text: string) => {
              setRegisterInfo({
                ...registerInfo,
                email: text,
              });
            }}
          />
        </View>
        <View className="mt-default">
          <Text className="text-dark opacity-80 mb-sm">Date of Birth</Text>
          <Pressable
            className="relative flex-row justify-between px-lg items-center bg-light rounded-default h-12"
            onPressIn={() => {
              setShowDatePicker(true);
            }}
          >
            <Text className="text-dark opacity-80">
              {registerInfo.dob.toDateString()}
            </Text>
            <CalendarIcon size={16} color={primaryColor} />
          </Pressable>
          {showDatePicker && (
            <RNDateTimePicker
              mode="date"
              value={registerInfo.dob}
              onChange={(event, selectedDate) => {
                if (event.type == "set") {
                  setRegisterInfo({
                    ...registerInfo,
                    dob: selectedDate,
                  });
                  setShowDatePicker(false);
                }
                setShowDatePicker(false);
              }}
            />
          )}
        </View>
        <View className="mt-default">
          <Text className="text-dark opacity-80 mb-sm">Phone Number</Text>
          <PlainInputField
            placeholder=""
            keyboardType="phone-pad"
            value={registerInfo.mobile_number}
            onChangeText={(text: string) => {
              setRegisterInfo({
                ...registerInfo,
                mobile_number: text,
              });
            }}
          />
        </View>
      </KeyboardAvoidingView>
      <PrimaryButton
        text="Register"
        additionalCss="mt-2xl"
        onPress={handleSubmit}
      />
      {isLoading && (
        <LoadingIndicator
          text="Registering..."
          subText="Please wait while we register you"
        />
      )}
    </>
  );
};

export default RegisterInfo;
