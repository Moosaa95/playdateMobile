import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "../../context/auth";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons } from "../../constants";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { Formik } from "formik";
import * as Yup from "yup";
import useFetch from "../../hook/useFetch";

const SignInSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  // password: Yup.string().required("Required"),
  // password required and min 6 characters
  password: Yup.string().required("Required").min(6, "Too Short!"),
});

export default function SignIn() {
  const { signIn } = useAuth();
  const router = useRouter();

  console.log("==========SIGN IN==========");

  const {
    loading: loading,
    fetch: login,
  } = useFetch();

  const handleSignIn = async (values) => {
    const { username, password } = values;

    // try {
    //   login(
    //     "login",
    //     {
    //       username: username,
    //       password: password,
    //     },
    //     "POST"
    //   )
    //   .then((res) => {
    //     console.log(res, "res");
    //     if (res && res.login["status"] === true) {
    //       console.log("========", res);
    //       // save username in local storage
    //       //check if is first login before saving
    //       if (res.login["is_first_login"] === true) {
    //         // console.log("first login");
    //         alert('change password')
    //         router.push(res.login["url"]);
    //       }
    //       alert(res.login["message"]);
    //       signIn(res.username);
    //       router.push(res.login["url"]);
    //     } else {
    //       alert(res.login["message"]);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err, "err");
    //   });
    // } catch (error) {
    //   console.log(error, "error");
    // }

  };

  const handleSignUp = () => {
    router.push("register");
  };

  const handleResetPassword = () => {
    // Implement your sign-in logic here
    router.replace("/company/forgot-password");
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <FlashMessage position="top" />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Company Login</Text>
        <Text style={styles.titleText}>Please Sign In to your account</Text>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => handleSignIn(values)}
          validationSchema={SignInSchema}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            handleSubmit,
          }) => (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="enter your username"
                  onChangeText={handleChange("username")}
                  onBlur={() => setFieldTouched("username")}
                  value={values.username}
                />
                {touched.username && errors.username && (
                  <Text style={styles.error}>{errors.username}</Text>
                )}

                <TextInput
                  style={styles.input}
                  placeholder="enter your password"
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                {/* </View> */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => router.replace('/company/home')}
                  disabled={loading}
                >
                  {loading ? (
                    <ActivityIndicator size="small" color={COLORS.white} />
                  ) : (
                    <Text style={styles.buttonText}>Sign In</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity onPress={handleResetPassword}>
                  <Text style={styles.forgotPasswordLink}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>

        <FlashMessage position="top" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32,
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 25,
  },
  inputContainer: {
    marginBottom: 56,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
    width: 250,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 16,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpButton: {
    marginTop: 16,
  },
  signUpButtonText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
  forgotPasswordLink: {
    marginTop: 10,
    color: "#007AFF", // or any other color you prefer
    textDecorationLine: "underline",
  },
});
