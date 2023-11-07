import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import useValidation from "../../hooks/useValidation";
import { apihost } from "../../apiutils";
import axios from "axios";

const Login = ({ navigation }: any) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    validateAll,
    showEmailError,
    showPasswordError,
  } = useValidation();
  const Loginbtn = () => {
    if (validateAll()) {
      const user = {
        email: email,
        password: password,
      };
      axios
        .post(`${apihost}/api/login`, user)
        .then((response) => {
          const token = response.data.token;
          console.log(token);

          Alert.alert("Login Successfully", "You have successfully Login");
        })
        .catch((error) => {
          Alert.alert("Register Error", "An Error occured while Register");
          console.log("Register Error", error);
        });
    }
  };
  return (
    <View style={{ padding: 10, margin: 10 }}>
      <KeyboardAvoidingView>
        <View style={{ justifyContent: "center", marginTop: 10 }}>
          <View
            style={{
              marginTop: 40,

              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Login</Text>
          </View>
          <View style={{ margin: 10, alignContent: "center" }}>
            <Text style={{ fontSize: 17 }}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
              autoCapitalize="none"
              placeholder="example123@email.com"
              keyboardType="email-address"
              returnKeyType="next"
            />
            {showEmailError && (
              <Text style={{ color: "red" }}>Please enter email</Text>
            )}
          </View>
          <View style={{ margin: 10, alignContent: "center" }}>
            <Text>Password</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
              secureTextEntry
              placeholder="*********"
              keyboardType="email-address"
              returnKeyType="go"
            />
            {showPasswordError && (
              <Text style={{ color: "red" }}>Please enter Password</Text>
            )}
          </View>
          <View>
            <Pressable
              onPress={() => Loginbtn()}
              style={{
                padding: 10,
                width: 100,
                backgroundColor: "rgb(100,50,230)",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  color: "rgb(255,255,255)",
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
          <View style={{ margin: 20, alignItems: "center" }}>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text> you have not an account? SignUp </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
