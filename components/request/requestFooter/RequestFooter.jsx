import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
} from "react-native";
import CustomButton from "../../playdateDetails/button/Button";
import { icons } from "../../../constants";

import styles from "./requestfooter.style";

const RequestFooter = ({ handlePress }) => {
  const handleAccept = () => {
    alert("Accept pressed!");
  };

  const handleDecline = () => {
    alert("Reject pressed!");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {/* <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    > */}
        {/* <View style={{ flexDirection: "row", gap: 10 }}> */}
        <CustomButton
          title="Accept"
          onPress={handleAccept}
          style={styler.accept}
        />

        {/* </View>
    </View> */}
      </TouchableOpacity>
      <TouchableOpacity>
        <CustomButton
          title="Decline"
          onPress={handleDecline}
          style={styler.decline}
        />
      </TouchableOpacity>
    </View>
  );
};

const styler = StyleSheet.create({
  accept: {
    backgroundColor: "#4caf50",
    borderColor: "#4caf50",
  },
  decline: {
    backgroundColor: "#f44336",
    borderColor: "#f44336",
  },
});

export default RequestFooter;
