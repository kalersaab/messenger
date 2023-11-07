import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import React from "react";
import useValidation from "../../hooks/useValidation";
import axios from "axios";
import { apihost } from "../../apiutils";

const SignUp = ({ navigation }: any) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    validateAll,
    showEmailError,
    showPasswordError,
    showNameError,
  } = useValidation();
  const SignUpbtn = () => {
    if (validateAll()) {
      const user = {
        name: name,
        email: email,
        password: password,
      };
      axios
        .post(`${apihost}/api/register`, user)
        .then(() => {
          Alert.alert(
            "Registration Successfully",
            "You have successfully registered"
          );
          setName("");
          setEmail("");
          setPassword("");
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
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign Up</Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 17 }}>Name</Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
              }}
              autoCapitalize="none"
              placeholder=" Full Name"
              keyboardType="email-address"
              returnKeyType="next"
            />
            {showNameError && (
              <Text style={{ color: "red" }}>Please enter Name</Text>
            )}
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
              onPress={() => SignUpbtn()}
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
                SignUp
              </Text>
            </Pressable>
          </View>
          <View style={{ margin: 20, alignItems: "center" }}>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text>have you an account? SignIn </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
