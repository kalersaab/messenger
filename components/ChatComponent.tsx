import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatComponent = ({ item }) => {
  const navigation = useNavigation();
  console.log(item.messages[item.messages.length - 1]);
  return (
    <View>
      <Text>ChatComponent</Text>
    </View>
  );
};

export default ChatComponent;
