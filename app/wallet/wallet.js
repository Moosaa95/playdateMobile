import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

// import { COLORS, FONT } from '../constants';
import { COLORS, FONT, SIZES } from "../../constants";

const DigitalWallet = () => {
  const [isWalletCreated, setIsWalletCreated] = useState(false);
  const [isFundingFormVisible, setIsFundingFormVisible] = useState(false);
  const [amount, setAmount] = useState("");

  const handleCreateWallet = () => {
    setIsWalletCreated(true);
  };

  const handleFundWallet = () => {
    setIsFundingFormVisible(true);
  };

  const handleFormSubmit = (formData) => {
    // handle form submission logic here
  };

  return (
    <View style={styles.container}>
      {!isWalletCreated && (
        <TouchableOpacity style={styles.button} onPress={handleCreateWallet}>
          <Text style={styles.buttonText}>Create Digita Wallet</Text>
        </TouchableOpacity>
      )}

      {isWalletCreated && (
        <>
          <Text style={styles.title}>My Digital Wallet</Text>
          <TouchableOpacity style={styles.button} onPress={handleFundWallet}>
            <Text style={styles.buttonText}>Fund Wallet</Text>
          </TouchableOpacity>
        </>
      )}

      {isFundingFormVisible && (
        <View style={styles.container}>
          <Text>Fund Wallet Form</Text>
          {/* Implement form here */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Amount"
              keyboardType="numeric"
              onChangeText={(value) => setAmount(value)}
              value={amount}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleFundWallet}>
            <Text style={styles.buttonText}>Process</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleFundWallet}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
  },
  title: {
    ...FONT.h2,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: COLORS.white,
    ...FONT.h3,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: SIZES.medium,
    borderRadius: SIZES.borderRadius,
    backgroundColor: COLORS.lightGray,
    padding: SIZES.padding,
  },
});

export default DigitalWallet;
