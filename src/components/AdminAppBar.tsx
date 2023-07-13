import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

import ConfirmationModal from "./ConfirmationModal";

import { LogoutIcon } from "../../assets/icons/svg-icons";
import tailwindConfig from "../../tailwind.config";

import { apiSlice } from "../redux/api/api.slice";
import { unauthorize } from "../redux/features/auth/auth.slice";
import { persistor } from "../redux/store";

const AdminAppBar = () => {
  const navigation = useNavigation<any>();

  const primaryColor = (tailwindConfig.theme as any).colors.blue;

  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutModalIsOpen && setLogoutModalIsOpen(false);
    dispatch(unauthorize());
    dispatch(apiSlice.util.resetApiState());
    persistor.purge();
    Toast.show({
      type: "success",
      text1: "Logout",
      text2: "Clearing your data and logging you out.",
    });
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  };

  return (
    <>
      <View className="w-full flex-row justify-between items-center p-xl">
        <View className="h-[24.28px] w-[88px]">
          <Image
            source={require("../../assets/admin.png")}
            alt="Logo"
            className="w-full h-full object-fill mix-blend-multiply"
          />
        </View>
        <TouchableOpacity
          className="rounded-md bg-white p-default flex justify-center items-center"
          onPress={() => {
            setLogoutModalIsOpen(true);
          }}
        >
          <LogoutIcon size={24} color={primaryColor} />
        </TouchableOpacity>
      </View>
      {logoutModalIsOpen && (
        <ConfirmationModal
          text="Logout"
          subText="Are you sure you want to logout?"
          btnText="Logout"
          isDanger={true}
          handleAction={handleLogout}
          close={() => setLogoutModalIsOpen(false)}
        />
      )}
    </>
  );
};

export default AdminAppBar;
