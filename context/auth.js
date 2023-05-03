// import { useRouter, useSegments } from "expo-router";
// import React from "react";

// const AuthContext = React.createContext(null);

// // This hook can be used to access the user info.
// export function useAuth() {
//   return React.useContext(AuthContext);
// }

// // This hook will protect the route access based on user authentication.
// function useProtectedRoute(user) {
//   const segments = useSegments();
//   const router = useRouter();

//   // const user = false
//   React.useEffect(() => {
//     const inAuthGroup = segments[0] === "(auth)"; // This is the group name in the router.

//     if (
//       // If the user is not signed in and the initial segment is not anything in the auth group.
//       !user &&
//       !inAuthGroup
//     ) {
//       // Redirect to the sign-in page.
//       router.replace("/sign-in");
//     } else if (user && inAuthGroup) {
//       // Redirect away from the sign-in page.
//       router.replace("/");
//     }
//   }, [user, segments]);
// }

// export function Provider(props) {
//   const [user, setAuth] = React.useState(null);

//   useProtectedRoute(user);

//   return (
//     <AuthContext.Provider
//       value={{
//         signIn: () => setAuth({}),
//         signOut: () => setAuth(null),
//         user,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// }

import { useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
// import { AsyncStorage } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = React.createContext();

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}


export function Provider(props) {
  const router = useRouter();

  const [user, setAuth] = React.useState();

  console.log("user===============", user);
  // const fetchUser = async () => {
  //   const userDetails = await AsyncStorage.getItem("user");
  //   console.log("userDetails", userDetails);
  //   if (userDetails) {
  //     setAuth(JSON.parse(userDetails));
  //     router.replace("/");
  //     return;
  //   }
  //   router.replace("/sign-in");
  // };
  const fetchUser = async () => {
    try {
      const userDetails = await AsyncStorage.getItem("user");
      console.log("===============userDetails", userDetails);
      if (userDetails) {
        console.log("*************USER", userDetails);
        const users = JSON.parse(userDetails);
        setAuth(users);
        router.replace("/");
        return;
      }
      router.replace("/(auth)/condition");
    } catch (error) {
      console.error("Failed to fetch user from storage=======: ", error);
      router.replace("/(auth)/condition");
    }
  };

  const signIn = async (data) => {
    console.log("data", data, "inside sign in");
    setAuth(data);
    await AsyncStorage.setItem("user", JSON.stringify(data));
  };

 
  const signOut = async () => {
    setAuth(null);
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.error("Failed to remove user from storage: ", error);
    }
    console.log("i clicked signout", await AsyncStorage.getItem("user"));
  };
  

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
