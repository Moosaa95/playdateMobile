import React from "react";
import { Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants";

function AddKid() {
  return (
    <>
      <Text style={styles.formHeader}>Add Kid</Text>
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
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Kid</Text>
      </TouchableOpacity>
    </>
  );
}

export default AddKid;

const styles = StyleSheet.create({
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
