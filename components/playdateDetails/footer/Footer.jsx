import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import { icons } from "../../../constants";

import styles from "./footer.style";
import useFetch from "../../../hook/useFetch";
import { useRouter, useSearchParams } from "expo-router";
import { useAuth } from "../../../context/auth";

const Footer = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { user } = useAuth();
  const [requestSent, setRequestSent] = useState(false);

  const { loading, fetch } = useFetch();

  const handleApply = () => {
    console.log("apply", params.id, user);
    try {
      fetch(
        "request-playdate",
        { playdate_id: params.id, requester: user },
        "POST"
      ).then((res) => {
        console.log(res, "res", "next");
        if (res.status) {
          console.log("success");
          setRequestSent(true);
          alert(res.message);
        }else {
          alert(res.message)
        }
      });
    } catch (err) {
      console.log(err, 'error');
    }
  };

  return (
    <View style={styles.container}>
      {requestSent ? (
        <TouchableOpacity style={styles.likeBtn} disabled={true}>
          <Image
            source={icons.heartRed}
            resizeMode="contain"
            style={styles.likeBtnImage}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.likeBtn}>
          <Image
            source={icons.heartOutline}
            resizeMode="contain"
            style={styles.likeBtnImage}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={handleApply}
        disabled={requestSent}
      >
        <Text style={styles.applyBtnText}>
          {requestSent ? "Request sent" : "Request for playdate"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
