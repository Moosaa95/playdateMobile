import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput, Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import { icons, COLORS, SIZES, FONTS } from "../../constants";

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const ResetPasswordScreen = () => {
    const router = useRouter(); 

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.replace('/sign-in')}>
              <Image
                source={icons.left}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: COLORS.primary,
                }}
              />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Reset Password</Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={ResetPasswordSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                style={styles.input}
                label="Email"
                placeholder="enter your email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                error={touched.email && errors.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              <TextInput
                style={styles.input}
                label="Password"
                placeholder="select a password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                error={touched.password && errors.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <TextInput
                style={styles.input}
                label="Confirm Password"
                placeholder="confirm your password"
                secureTextEntry={true}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}
              <Button
                title="Reset Password"
                style={styles.button}
                onPress={handleSubmit}
                color={"blue"}
                
              />
              {/* Reset Password */}
              {/* </Button> */}
            </View>
          )}
        </Formik>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  input: {
    width: 300,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    // marginBottom: 8,
  },
  error: {
    fontSize: 14,
    color: "red",
    marginBottom: 8,
  },
  button: {
    ackgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 16,
    alignSelf: "center",
  },
});

export default ResetPasswordScreen;
