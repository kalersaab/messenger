import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { GlobalContext } from "../../context/Globalstate";
import { useNavigation } from "@react-navigation/native";
import ChatComponent from "../../components/ChatComponent";

const Message = ({ navigation }: any) => {
  const {
    currentUser,
    allChatRooms,
    setAllChatRooms,
    modalVisible,
    setModalVisible,
    setCurrentUser,
    setShowLoginView,
  } = useContext(GlobalContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "rgb(18,140,126)",
      },
      headerTitle: "",
      headerLeft: () => (
        <Text
          style={{ fontSize: 20, color: "rgb(255,255,255)", fontWeight: "600" }}
        >
          Message
        </Text>
      ),
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            padding: 10,
            backgroundColor: "rgb(40,120,190)",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View>
      <flatList data={allChatRooms} 
      renderItems={(item)=>{<ChatComponent /}}
      />
    </View>
  );
};

export default Message;
