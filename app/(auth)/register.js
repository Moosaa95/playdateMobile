import React, {useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { Stack, useRouter } from "expo-router";
import { Formik } from "formik";
import * as yup from "yup";
import { icons, COLORS, SIZES, FONTS } from "../../constants";
import useFetch from "../../hook/useFetch";
import FlashMessage, { showMessage } from "react-native-flash-message";

const RegisterSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email, please check your email and try again")
    .required("Email is required"),
  username: yup.string().required("username is required"),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^(083|085|086|087|089)[0-9]{7}$/, {
      message:
        "Phone number must start with 083, 085, 086, 087 or 089 and be 10 digits long",
      excludeEmptyString: true,
    }),
  address: yup.string().required("Address is required"),
});

export default function Register() {
  const router = useRouter();

  const { loading, fetch } = useFetch();



  
  const handleRegister = async (values) => {
    // Implement your register logic here
    console.log("Register form values:", values);
    const { firstName, lastName, email, username, phoneNumber, address } =
      values;
    fetch(
      "register",
      {
        username: username,
        email: email,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        address: address,
      },
      "POST"
    )
      .then((response) => {
        console.log(response, "response7");
        if (response.status) {
          alert(response.message);
          // showMessage({
          //   message: "Success",
          //   description: `${response.message}`,
          //   type: "success",
          //   duration: 5000,
          // });
          router.replace("/sign-in");
        } else {
          console.log(response.message, "error message");
          alert(response.message);
          // showMessage({
          //   message: "Error",
          //   description: `${response.message}`,
          //   type: "danger",
          //   duration: 5000,
          //   icon: "danger",
          //   backgroundColor: "#e74c3c",
          //   color: "#fff",
          //   textStyle: { fontWeight: "bold" },
          //   style: { borderRadius: 10 },
          // });
        }
      })
      .catch((error) => {
        console.log(error.response.data.message, "catch error");
      });
  };

  const handleSignIn = () => {
    // Implement your sign-in logic here
    router.replace("/sign-in");
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          // headerLeft: () => (
          //   <ScreenHeaderBtn
          //     iconUrl={icons.left}
          //     dimension="60%"
          //     handlePress={() => alert("Menu")}
          //   />
          // ),
          headerTitle: "",
        }}
      />
      {/* <FlashMessage position="top" /> */}
      <Text>Hey</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Register your account</Text>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            phoneNumber: "",
            address: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                onChangeText={handleChange("firstName")}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Last Name"
                onChangeText={handleChange("lastName")}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={handleChange("username")}
                value={values.username}
              />
              {errors.username && touched.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Phone Number (e.g. 0831234567)"
                onChangeText={handleChange("phoneNumber")}
                value={values.phoneNumber}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Address"
                onChangeText={handleChange("address")}
                value={values.address}
              />
              {errors.address && touched.address && (
                <Text style={styles.errorText}>{errors.address}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                {loading ? (
                  <ActivityIndicator size="small" color={COLORS.white} />
                ) : (
                  <Text style={styles.buttonText}>Register</Text>
                )}
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signInLink}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
    width: "80%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
  signInLink: {
    marginTop: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});
