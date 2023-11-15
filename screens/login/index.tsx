import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Globalstate";

const Login = ({ navigation }: any) => {
  const {
    showLoginView,
    setShowLoginView,
    currentUserName,
    setCurrentUserName,
    currentUser,
    setCurrentUser,
    allUsers,
    setAllUsers,
  } = useContext(GlobalContext);
  function handleRegisterAndSignIn(isLogin: any) {
    if (currentUserName.trim() !== "") {
      const index = allUsers.findIndex(
        (userItem: any) => userItem === currentUserName
      );

      if (isLogin) {
        if (index === -1) {
          Alert.alert("Please register first");
        } else {
          setCurrentUser(currentUserName);
        }
      } else {
        if (index === -1) {
          allUsers.push(currentUserName);
          setAllUsers(allUsers);
          setCurrentUser(currentUserName);
        } else {
          Alert.alert("Already registered ! Please login");
        }
      }

      setCurrentUserName("");
    } else {
      Alert.alert("User name field is empty");
    }

    Keyboard.dismiss();
  }
  useEffect(() => {
    if (currentUser.trim() !== "") navigation.navigate("Messagescreen");
  }, [currentUser]);

  console.log(allUsers, currentUser);
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

      {showLoginView ? (
        <>
          <View style={{ margin: 10, padding: 10, alignContent: "center" }}>
            <Text style={{ fontSize: 20 }}>UserName</Text>
            <TextInput
              style={{ borderBottomWidth: 1, borderColor: "gray", height: 50 }}
              onChangeText={(text) => {
                setCurrentUserName(text);
              }}
              value={currentUserName}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
              padding: 10,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => handleRegisterAndSignIn(false)} // Register button
                style={{
                  width: 100,
                  padding: 10,
                  backgroundColor: "rgb(140,75,170)",
                  borderRadius: 20,
                }}
              >
                <Text style={{ textAlign: "center", fontSize: 20 }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => handleRegisterAndSignIn(true)} // Login button
                style={{
                  width: 100,
                  padding: 10,
                  backgroundColor: "rgb(140,75,170)",
                  borderRadius: 20,
                }}
              >
                <Text style={{ textAlign: "center", fontSize: 20 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <View>
          <Text>Connect people around the world for free</Text>
          <TouchableOpacity onPress={() => setShowLoginView(true)}>
            <View>
              <Text>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;
