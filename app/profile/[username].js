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
import AddKids from "../../components/home/addkids/AddKids";
import { ScreenHeaderBtn } from "../../components";
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

  const handleAddKid = () => {
    // handle the form submission, e.g. by making a request to the server
  };

  
  const kidsLoading = false;

  const KIDS = [
    {
      id: 1,
      name: "John",
      age: 5,
      disorders: "ADHD",
      preferences: "Likes to play with toys",
      allergies: "None",
    },

    {
      id: 2,
      name: "Jane",
      age: 3,
      disorders: "None",
      preferences: "Likes to play with toys",
      allergies: "None",
    },
    {
      id: 3,
      name: "Jill",
      age: 2,
      disorders: "None",
      preferences: "Likes to play with toys",
      allergies: "None",
    },
    {
      id: 3,
      name: "Jill",
      age: 2,
      disorders: "None",
      preferences: "Likes to play with toys",
      allergies: "None",
    },
    {
      id: 3,
      name: "Jill",
      age: 2,
      disorders: "None",
      preferences: "Likes to play with toys",
      allergies: "None",
    },
    {
      id: 3,
      name: "Jill",
      age: 2,
      disorders: "None",
      preferences: "Likes to play with toys",
      allergies: "None",
    },
  ];

  const handlePressKid = (item) => {
    router.push(`/kid-details/${item.id}`);
    console.log('hey', item);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Parent Profile",
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
          <Text style={styles.headerTitle}>Parent Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Parent First Name"
            value=""
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Parent Last Name"
            value=""
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Parent Email"
            value=""
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Parent Phone Number"
            value=""
            onChangeText={() => {}}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateParent}>
            <Text style={styles.buttonText}>Update Details</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>List of Children Profile</Text>
        <View style={styles.cardsContainer}>
          {kidsLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <FlatList
              data={KIDS}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.card} 
                onPress={
                  () => handlePressKid(item)
                }
                >
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text style={styles.cardText}>Age: {item.age}</Text>
                </TouchableOpacity>
              )}
              contentContainerStyle={{ paddingVertical: 20 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>

        <View style={styles.formContainer}>
          {/* <Text style={styles.formHeader}>Add Kid</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value=""
            onChangeText={(text) => text}
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            value=""
            onChangeText={(text) => text}
          /> */}
          <TouchableOpacity style={styles.button} onPress={()=>router.replace('/(auth)/add-kid')}>
            <Text style={styles.buttonText}>Add Child Profile</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>Hey</Text>
        </View> */}

        <View style={styles.formContainer}>
          {/* <Text style={styles.headerTitle}>Change Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            secureTextEntry
            value={currentPassword}
            onChangeText={(text) => setCurrentPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            secureTextEntry
            value={confirmNewPassword}
            onChangeText={(text) => setConfirmNewPassword(text)}
          /> */}
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
