import { Text, View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";

// import { COLORS, icons, images, SIZES } from "../constants";
import { COLORS, icons, SIZES, images } from "../../constants";
import {
  Welcome,
  PlayDateList,
  PlayDateRequest,
  PlayDateForm,
  ScreenHeaderBtn,
} from "../../components";
import { useAuth } from "../../context/auth";
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
    router.replace("/company/sign-in");
  };

  const handleProfileRoute = () => {
    router.push(`/company-profile/${user}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension="60%"
                // handlePress={() => router.replace("/wallet/wallet")}
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
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Company Home</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Company Name</Text>
            <Text style={styles.infoText}>Acme Corporation</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Address</Text>
            <Text style={styles.infoText}>123 Main St.</Text>
            <Text style={styles.infoText}>Anytown, Nigeria</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Phone</Text>
            <Text style={styles.infoText}>(123) 456-7890</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Email</Text>
            <Text style={styles.infoText}>info@acmecorp.com</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.large,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: SIZES.large,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: SIZES.h2,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    paddingTop: SIZES.medium,
  },
  infoCard: {
    paddingVertical: SIZES.medium,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  infoTitle: {
    fontSize: SIZES.body2,
    fontWeight: "bold",
    color: "#333",
    marginBottom: SIZES.small,
  },
  infoText: {
    fontSize: SIZES.body2,
    color: "#666",
  },
});

export default Home;
