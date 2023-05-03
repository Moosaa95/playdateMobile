import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Image
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, FONT, icons } from "../../constants";


const Profile = () => {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmNewPassword, setConfirmNewPassword] = React.useState("");

  const handleChangePassword = (value) => {
    setCurrentPassword(value);
  };

  const handleChangeNewPassword = (value) => {
    setNewPassword(value);
  };

  const handleChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const handleSubmit = () => {
    // handle the form submission, e.g. by making a request to the server
  };

  const handleUpdateParent = () => {
    // handle the form submission, e.g. by making a request to the server
  };



  
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Company Profile",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
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
        }}
      />

      {/* <View style={styles.container}> */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.headerTitle}>Company Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Company Name"
            value=""
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Company Physical Address"
            value=""
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Company Phone Number"
            value=""
            onChangeText={() => {}}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateParent}>
            <Text style={styles.buttonText}>Update Details</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.formContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace('/(auth)/change-password')}
          >
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace('/(auth)/delete-account')}
          >
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  //   input: {
  //     borderWidth: 1,
  //     borderColor: "#ccc",
  //     borderRadius: 4,
  //     padding: 10,
  //     marginVertical: 10,
  //     width: 250,
  //   },
  //   button: {
  //     backgroundColor: "#007AFF",
  //     borderRadius: 4,
  //     padding: 10,
  //     marginTop: 20,
  //   },
  formContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  formHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  //   buttonText: {
  //     color: "#fff",
  //     fontWeight: "bold",
  //     textAlign: "center",
  //   },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  cardsContainer: {
    marginTop: SIZES.large,
    gap: SIZES.small,
    height: 120,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
  },
  card: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 80,
  },
});
