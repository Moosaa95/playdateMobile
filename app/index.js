import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Welcome,
  PlayDateList,
  PlayDateRequest,
  PlayDateForm,
  ScreenHeaderBtn,
} from "../components";
import Store from "../components/home/ecommerce/Store";
import { useAuth } from "../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// loop icons

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // const sessionToken = AsyncStorage.getItem('username');
  const { signOut, user } = useAuth();

  console.log("hey i am sign ot", user, "inner");

  const handleSignOut = () => {
    // Implement the sign-out logic here
    console.log("hey i am sign out", user);
    signOut();
    router.replace("/sign-in");
  };

  const handleProfileRoute = () => {
    router.push(`/profile/${user}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{flexDirection:"row", alignItems: "center"}}>
              <ScreenHeaderBtn
              iconUrl={icons.digitalwallet}
              dimension="60%"
              handlePress={() => router.replace('/wallet/wallet')}
            />
            <ScreenHeaderBtn
              iconUrl={icons.notification}
              dimension="60%"
              handlePress={() => router.replace('/notification')}
            />

            <ScreenHeaderBtn 
              iconUrl={icons.cart}
              dimension="60%"
              handlePress={() => router.replace('/cart')}
            />

            <ScreenHeaderBtn 
              iconUrl={icons.invoice}
              dimension="60%"
              handlePress={() => router.replace('/invoice')}
            />

            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ScreenHeaderBtn
                iconUrl={icons.avatar}
                dimension="100%"
                handlePress={handleProfileRoute}
              />
              <View style={{ marginLeft: SIZES.small }}>
                <ScreenHeaderBtn
                  iconUrl={icons.logout1}
                  dimension="100%"
                  handlePress={handleSignOut}
                />
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    width: 120,
                    paddingVertical: SIZES.small,
                    paddingHorizontal: SIZES.medium,
                    borderRadius: SIZES.small,
                    elevation: 5,
                  }}
                >
                  <Text onPress={handleSignOut}>Sign out</Text>
                </View>
              </View>
            </View>
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            // searchTerm={searchTerm}
            // setSearchTerm={setSearchTerm}
            // handleClick={() => {
            //   if (searchTerm) {
            //     router.push(`/search/${searchTerm}`);
            //   }
            // }}
            
          />
          <PlayDateList />
          <PlayDateRequest />
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <PlayDateForm />
          </View>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <Store />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
