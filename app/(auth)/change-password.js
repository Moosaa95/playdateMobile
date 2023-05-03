// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { useAuth } from "../../context/auth";
// import { Stack, useRouter } from "expo-router";
// import { COLORS, icons } from "../../constants";
// import useFetch from "../../hook/useFetch";
// import FlashMessage, {showMessage} from "react-native-flash-message";

// // import { ScreenHeaderBtn } from '../../components';

// export default function ChangePassword() {
//   const { signIn } = useAuth();
//   const router = useRouter();

//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const {
//     loading: ChangePasswordLoading,
//     fetch: ChangePasswords,

//   } = useFetch();

//   const handleChangePassword = async () => {
//     if (!newPassword || !confirmPassword) {
//       showMessage({
//         message: "Error",
//         description: "Please enter your new password and confirm password",
//         type: "danger",
//         duration: 3000,
//       });
//       return;
//     }
//     try {
//       await ChangePasswords(
//         "change-passwords",
//         {
//           new_password: newPassword,
//           confirm_password: confirmPassword,
//         },
//         "POST"
//       );
//         console.log('beforer');
//         console.log(ChangePasswordData["status"], ChangePasswordData["url"], ChangePasswordLoading, ChangePasswordError, "ChangePassword");
//       if (ChangePasswordData && ChangePasswordData.change["status"] === true) {
//         console.log("========", ChangePasswordData)
//         signIn(ChangePasswordData);
//         router.push(ChangePasswordData.change["url"]);
//         showMessage({
//           message: "Success",
//           description: `${ChangePasswordData.change["message"]}`,
//           type: "success",
//           duration: 3000,
//         });
//       }

//     }catch (error) {
//       console.error("Error signing in: ", error);
//       showMessage({
//         message: "Error",
//         description: `${error}`,
//         type: "danger",
//         duration: 3000,
//       });
//     }

//   }

//   return (
//     <>
//       <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: COLORS.lightWhite },
//           headerShadowVisible: false,
//           // headerLeft: () => (
//           //   <ScreenHeaderBtn
//           //     iconUrl={icons.left}
//           //     dimension="60%"
//           //     handlePress={() => alert("Menu")}
//           //   />
//           // ),
//           headerTitle: "",
//         }}
//       />
//       <FlashMessage position="top" />
//       <View style={styles.container}>
//         {/* welcome message */}
//         <Text style={styles.title}>Change your password</Text>
//         {/* <Text style={styles.titleText}>Please Sign In to your account</Text> */}

//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="New Password"
//             onChangeText={setNewPassword}
//             value={newPassword}
//             secureTextEntry={true}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             secureTextEntry={true}
//             onChangeText={setConfirmPassword}
//             value={confirmPassword}
//           />
//         </View>

//         <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
//           <Text style={styles.buttonText}>Change Password</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     marginBottom: 32,
//   },
//   titleText: {
//     fontSize: 15,
//     fontWeight: "bold",
//     marginBottom: 25,
//   },
//   inputContainer: {
//     marginBottom: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 4,
//     padding: 8,
//     marginBottom: 8,
//     width: "80%",
//     alignSelf: "center",
//   },
//   button: {
//     backgroundColor: "blue",
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 4,
//     marginTop: 16,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   signUpButton: {
//     marginTop: 16,
//   },
//   signUpButtonText: {
//     color: "blue",
//     textDecorationLine: "underline",
//   },
// });

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
// } from "react-native";
// import { useAuth } from "../../context/auth";
// import { Stack, useRouter } from "expo-router";
// import { COLORS, icons } from "../../constants";
// import useFetch from "../../hook/useFetch";
// import FlashMessage, {showMessage} from "react-native-flash-message";

// // import { ScreenHeaderBtn } from '../../components';

// export default function SignIn() {
//   const { signIn } = useAuth();
//   const router = useRouter();

//   console.log("==========SIGN IN==========");

//   const [username, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const {
//     data: loginData,
//     loading: loginLoading,
//     error: loginError,
//     fetch: login,
//   } = useFetch();

//   const handleSignIn = async () => {
//     if (!email || !password) {
//       showMessage({
//         message: "Error",
//         description: "Please enter your email and password",
//         type: "danger",
//         duration: 3000,
//       });
//       return;
//     }
//     try {
//       await login(
//         "login",
//         {
//           username: email,
//           password: password,
//         },
//         "POST"
//       );
//       console.log(loginData, loginLoading, loginError, "login", loginData.login["status"], loginData.login["url"]);
//       if (loginData && loginData.login["status"] === true) {
//         console.log("========", loginData)
//         // save username in local storage
//         signIn(loginData);
//         router.push(loginData.login["url"]);
//         showMessage({
//           message: "Success",
//           description: `${loginData.login["message"]}`,
//           type: "success",
//           duration: 3000,
//         });

//       }
//       else {
//         showMessage({
//           message: "Error",
//           description: `${loginData.login["message"]}`,
//           type: "danger",
//           duration: 3000,
//         });
//       }
//     } catch (error) {
//       console.error("Error signing in: ", error);
//       showMessage({
//         message: "Error",
//         description: `${error}`,
//         type: "danger",
//         duration: 3000,
//       });
//     }

//   };
//   const handleSignUp = () => {
//     // Implement your sign-up logic here
//     // console.log(`Signing up with email: ${email}, password: ${password}`);
//     router.push("register");
//   };

//   return (
//     <>
//       <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: COLORS.lightWhite },
//           headerShadowVisible: false,
//           // headerLeft: () => (
//           //   <ScreenHeaderBtn
//           //     iconUrl={icons.left}
//           //     dimension="60%"
//           //     handlePress={() => alert("Menu")}
//           //   />
//           // ),
//           headerTitle: "",
//         }}
//       />
//       <FlashMessage position="top"  />
//       <View style={styles.container}>
//         {/* welcome message */}
//         <Text style={styles.title}>Welcome</Text>
//         <Text style={styles.titleText}>Please Sign In to your account</Text>

//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             onChangeText={setEmail}
//             value={email}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry={true}
//             onChangeText={setPassword}
//             value={password}
//           />
//         </View>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleSignIn}
//           disabled={loginLoading}
//         >
//           {loginLoading ? (
//             <ActivityIndicator size="small" color={COLORS.white} />
//           ) : (
//             <Text style={styles.buttonText}>Sign In</Text>
//           )}
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//           <Text style={styles.signUpButtonText}>
//             Don't have an account? Sign Up
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     marginBottom: 32,
//   },
//   titleText: {
//     fontSize: 15,
//     fontWeight: "bold",
//     marginBottom: 25,
//   },
//   inputContainer: {
//     marginBottom: 16,
//   },
//   input: {
// borderWidth: 1,
// borderColor: "#ccc",
// borderRadius: 4,
// padding: 8,
// marginBottom: 8,
//     width: "80%",
//     alignSelf: "center",
//   },
//   button: {
//     backgroundColor: "blue",
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 4,
//     marginTop: 16,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// signUpButton: {
//   marginTop: 16,
// },
// signUpButtonText: {
//   color: "blue",
//   textDecorationLine: "underline",
// },
// });

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

// const validationSchema = Yup.object().shape({
//   newPassword: Yup.string().required("Please enter your new password"),
//   // confirmPassword: Yup.string().oneOf(
//   //   [Yup.ref("newPassword"), null],
//   //   "Passwords must match"
//   // ),
// });

export default function ChangePassword() {
  const { signIn } = useAuth();
  const router = useRouter();

  console.log("==========Password change==========");

  const { loading: loading, fetch: ChangePassword } = useFetch();

  const handleChangePassword = async (values) => {
    const { password, confirmPassword } = values;
    console.log('password changer', password, confirmPassword);

    try {
      ChangePassword(
        "change-password",
        {
          password: password,
          confirm_password: confirmPassword,
        },
        "POST"
      )
        .then((res) => {
          console.log(res, "res");
          if (res.status) {
            alert(res.message);
            router.push("/sign-in");
          }else{
            alert(res.message);
          }
          
        })
        .catch((err) => {
          console.log(err, "err");
          alert(err.message);
        });
    } catch (error) {
      console.log(error, "error");
    }
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
        <Text style={styles.titleText}>Change Password</Text>
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          onSubmit={(values) => handleChangePassword(values)}
          // validationSchema={validationSchema}
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
                  placeholder="enter your password"
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <TextInput
                  style={styles.input}
                  placeholder="confirm your password"
                  secureTextEntry={true}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={() => setFieldTouched("confirmPassword")}
                  value={values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
                {/* </View> */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <ActivityIndicator size="small" color={COLORS.white} />
                  ) : (
                    <Text style={styles.buttonText}>Change Password</Text>
                  )}
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
