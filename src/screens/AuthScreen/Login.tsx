import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

import { PrimaryButton } from "../../components/Buttons";
import { InputFieldWithPrefix } from "../../components/InputFields";
import LoadingIndicator from "../../components/LoadingIndicator";
import OPTVerification from "./components/OPTVerification";

import { RightArrowIcon } from "../../../assets/icons/svg-icons";

import { authorize } from "../../redux/features/auth/auth.slice";
import {
  useVerifyOtpMutation,
  useVerifyPhoneMutation,
} from "../../redux/features/auth/authApi.slice";

const Login = ({ navigation }: any) => {
  const [loginStep, setLoginStep] = useState(1);
  const [verifyPhone, { data, isLoading }] = useVerifyPhoneMutation();
  const [verifyOTP, { data: otpData, isLoading: otpLoading }] =
    useVerifyOtpMutation();

  const [phone_number, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [otpError, setOTPError] = useState("");
  const [responses, setResponses] = useState({
    verifyPhone: {
      msg: "",
      user_exists: false,
      type: "",
      code: "",
    },
    verifyOTP: {
      email: "",
      phone_number: "",
      firstname: "",
      lastname: "",
      access_token: "",
      refresh_token: "",
    },
  });

  const handleNavigateBack = () => {
    navigation.navigate("Home");
  };

  const handlePhoneVerification = () => {
    if (phone_number.length !== 10 || phone_number.match(/[a-z]/i)) {
      setError("Valid phone number must be 10 digits long");
      return;
    }
    setError("");
    const payload = {
      mobile_number: phone_number,
    };
    verifyPhone(payload)
      .unwrap()
      .then((res: Authentication.VerifyPhoneResponse) => {
        console.log("res", res);
        if (res.user_exists) {
          setResponses({
            ...responses,
            verifyPhone: {
              msg: res.msg,
              user_exists: res.user_exists,
              type: res.type,
              code: res.code,
            },
          });
          Toast.show({
            type: "success",
            text1: "OTP sent to your phone number",
            text2: "Redirecting to OTP verification in 3 seconds",
            visibilityTime: 3000,
            autoHide: true,
          });
          setTimeout(() => {
            setLoginStep(2);
          }, 3000);
        } else {
          Toast.show({
            type: "error",
            text1: "No user with this phone number exists",
            text2: "Please register instead",
          });
        }
      })
      .catch((err: any) => {
        console.log("err", err);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: err.data.msg || "Something went wrong. Please try again later",
        });
      });
  };

  const dispatch = useDispatch();

  const handleOTPVerification = (input_code: string) => {
    setOTPError("");
    if (input_code.length !== 6) {
      setOTPError("Valid OTP must be 6 digits long");
      return;
    } else if (responses.verifyPhone.code !== input_code) {
      setOTPError("Incorrect OTP");
      return;
    }
    const payload = {
      mobile_number: phone_number,
      code: input_code,
      type: "login",
    };
    verifyOTP(payload)
      .unwrap()
      .then((res) => {
        dispatch(authorize(res));
        Toast.show({
          type: "success",
          text1: "Verified",
          text2: "Logged in. Redirecting to Home in 3 seconds",
        });
        setTimeout(() => {
          navigation.navigate("Home");
        });
      })
      .catch((err: any) => {
        console.log("err", err);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: err.data.msg || "Something went wrong. Please try again later",
        });
      });
  };

  return (
    <>
      <View className="p-xl w-full flex-col justify-between flex-1">
        <View>
          <Pressable
            className="flex-row items-center"
            onPress={handleNavigateBack}
          >
            <View className="rotate-180 max-w-fit">
              <RightArrowIcon size={21} />
            </View>
            <Text className="ml-default">Back to Home</Text>
          </Pressable>

          <View className="mt-2xl">
            <Text className="text-xl font-bold text-dark">Welcome Back</Text>
            <Text className="text-dark opacity-80">
              Rid yourself with all the confusions and help rid other’s
              confusions
            </Text>
          </View>

          <View className="mt-2xl">
            {loginStep === 1 ? (
              <View>
                <Text className="text-dark opacity-80 mb-sm">Phone Number</Text>
                <InputFieldWithPrefix
                  prefix="+977"
                  additionalCss={`bg-white ${
                    error !== "" && "border border-red"
                  }`}
                  keyboardType="phone-pad"
                  value={phone_number}
                  onChangeText={(text: string) => {
                    setPhoneNumber(text);
                  }}
                />
                {error && (
                  <Text className="text-red text-sm mt-xs">{error}</Text>
                )}
                <PrimaryButton
                  text="Verify"
                  additionalCss="mt-2xl"
                  onPress={handlePhoneVerification}
                />
              </View>
            ) : (
              <OPTVerification
                phone={phone_number}
                handleOTPVerification={handleOTPVerification}
                error={otpError}
              />
            )}
          </View>
        </View>

        <View className="flex-row items-center mb-2xl">
          <Text className="text-dark opacity-80">Click here to</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text className="text-blue font-bold ml-xs">Register</Text>
          </Pressable>
          <Text className="text-dark opacity-80 ml-xs">for Free</Text>
        </View>
      </View>

      {isLoading && (
        <LoadingIndicator
          text="Verifying Phone Number"
          subText="Please wait while we verify your phone number"
        />
      )}
      {otpLoading && (
        <LoadingIndicator
          text="Verifying OTP"
          subText="Please wait while we verify your OTP"
        />
      )}
    </>
  );
};

export default Login;
