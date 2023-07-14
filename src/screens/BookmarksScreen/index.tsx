import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import AppBar from "../../components/AppBar";
import Lists from "./components/Bookmarks/Lists";

const BookmarksScreen = () => {
  const [isBookmark, setIsBookmark] = useState(true);

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "column",
      }}
    >
      <AppBar />
      <View className="flex-col p-xl">
        
        {isBookmark ? <Lists /> : <></>}
      </View>
    </ScrollView>
  );
};

export default BookmarksScreen;
