import { View, Text, TextInput, BackHandler } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { PrimaryButton } from '../../../components/Buttons';

interface OPTVerificationProps {
  phone: string
  additionalCss?: string
}

const OPTVerification = ({ phone, additionalCss }: OPTVerificationProps) => {
  const otpFieldsPerScreen = 4;
  const [otpCodes, setOtpCodes] = useState(Array(otpFieldsPerScreen).fill(""));
  const textInputRefs = useRef<(null | TextInput)[]>([
      ...Array(otpFieldsPerScreen),
  ]);

  const [timer, setTimer] = useState(59);

  useEffect(() => {
      const interval = setTimeout(() => {
        if (timer > 0) setTimer((prev) => prev - 1);
        else setTimer(59);
      }, 1000);
      return () => clearTimeout(interval);
  }, [timer]);
  
  const handleNext = (index: number) => {
      if (index < otpFieldsPerScreen - 1) {
        textInputRefs.current[index + 1]?.focus();
      }
  };
  const handleBack = (index: number) => {
      if (index > 0) {
        textInputRefs.current[index - 1]?.focus();
      }
  };

  const onChangeText = (text: string, index: number) => {
      setOtpCodes((prev) => {
        if (text.length <= 1)
          return prev.map((code, i) => (i === index ? text : code));
  
        const splitted = text.split("");
        if (splitted.length === otpFieldsPerScreen) {
          return splitted;
        } else if (splitted.length > otpFieldsPerScreen) {
          return splitted.slice(0, otpFieldsPerScreen);
        }
        return prev.map((code, i) => (i >= index ? splitted[i - index] : code));
      });
  };

  const handleSubmit = () => {
    console.log(otpCodes.join(""));
  };

  return (
      <View>
        <View className='flex-row items-center gap-x-2'>
          <Text>Enter OTP received by</Text>
          <Text className='font-bold text-dark'>{phone}</Text>
        </View>
        <View className='flex-row items-center gap-x-4 mt-sm'>
          {
            otpCodes.map((code, index) => (
              <TextInput
                key={index}
                ref={(el) => (textInputRefs.current[index] = el)}
                value={code}
                onChangeText={(text: string) => onChangeText(text, index)}
                onSubmitEditing={() => handleNext(index)}
                selectTextOnFocus={true}
                keyboardType="numeric"
                autoComplete="sms-otp"
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                maxLength={otpFieldsPerScreen}
                onKeyPress={({ nativeEvent: { key: KeyValue } }) => {
                  if (KeyValue === "Backspace") handleBack(index);
                  else handleNext(index);
                }}
                className={`px-xl py-lg rounded-sm flex text-lg bg-white text-center font-medium text-blue focus:border-blue ${additionalCss}`}
              />
            ))
          }
        </View>
        <PrimaryButton
          text='Verify'
          additionalCss='mt-2xl'
          onPress={handleSubmit}
        />
      </View>
  )
}

export default OPTVerification