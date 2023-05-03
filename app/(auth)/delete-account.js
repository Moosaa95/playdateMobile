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
  password: Yup.string().required("Required").min(6, "Too Short!"),
});

export default function DeleteAccount() {
  const router = useRouter();
  const loading = false;

  console.log("==========SIGN IN==========");

  const handleSignIn = async (values) => {
    const { username, password } = values;
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Delete Account",
        }}
      />
      <FlashMessage position="top" />
      <View style={styles.container}>
        <Formik
          initialValues={{ password: "" }}
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
              <View style={styles.container}>
                <View>
                  <Text style={styles.label}>Password:</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your password"
                      secureTextEntry={true}
                      onChangeText={handleChange("password")}
                      onBlur={() => setFieldTouched("password")}
                      value={values.password}
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <ActivityIndicator size="small" color={COLORS.white} />
                    ) : (
                      <Text style={styles.buttonText}>Authenticate</Text>
                    )}
                  </TouchableOpacity>
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
                <View>
                  <Text style={styles.warningText}>
                    Your account and all related data will be completely
                    deleted. This action is permanent. Please enter your
                    password to confirm.
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <ActivityIndicator size="small" color={COLORS.white} />
                    ) : (
                      <Text style={styles.buttonText}>Delete Account</Text>
                    )}
                  </TouchableOpacity>
                </View>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: COLORS.white,
    justifyContent: "space-around",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.grey,
  },
  iconContainer: {
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: COLORS.grey,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: COLORS.black,
  },
  errorText: {
    fontSize: 12,
    color: COLORS.red,
    marginBottom: 10,
  },
  warningText: {
    fontSize: 14,
    color: "red",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
