import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/Globalstate";

const Login = () => {
  const { setCurrentUserName, currentUserName } = useContext(GlobalContext);
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          padding: 20,
        }}
      >
        Socket IO
      </Text>
      <View style={{ margin: 10, padding: 10 }}>
        <TextInput
          style={{ borderBottomWidth: 1, borderColor: "gray", height: 50 }}
          onChangeText={(text) => {
            setCurrentUserName(text);
          }}
          value={currentUserName}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
