import { Stack } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { useRouter } from "expo-router";

const Condition = () => {
  const router = useRouter();
  console.log("hry");

  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitle: "",
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Application Home</Text>
        <View style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={styles.box}
          >
            <Text style={styles.boxText}>PlayDate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/company/sign-in")}
            style={styles.box}
          >
            <Text style={styles.boxText}>Company</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Condition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: COLORS.gray,
  },
  boxContainer: {
    flexDirection: "row",
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: COLORS.gray2,
    shadowColor: COLORS.gray2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  boxText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.gray,
  },
});
