// import React, {useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import styles from "./playdaterequest.style";

import { COLORS } from "../../../constants";

import PlayDateRequestCard from "../../common/cards/playdaterequests/PlayDateRequestCard";

const PlayDateRequest = () => {
  // this playdaterequest is for the playdate request that the user has sent to the playdate owner
  // when a user clicks on the playdate detail then click on the request button then the request will be sent to the playdate owner
  // the playdate owner will then see the request in the playdate request page
  // the play date owner can click on the request then take the user to the request playdate detail page where the user can accept or decline the request
  
  const router = useRouter();
  const [playRequest, setPlayRequest] = useState();
  const isLoading = false;
  const error = false;

  const playDateRequest = [
    {
      playdate_id: 1,
      playdate_name: "Playdate 1",
      location: "Location 1",
      time: "Time 1",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      playdate_id: 2,
      playdate_name: "Playdate 2",
      location: "Location 2",
      time: "Time 2",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      playdate_id: 2,
      playdate_name: "Playdate 2",
      location: "Location 2",
      time: "Time 2",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      playdate_id: 2,
      playdate_name: "Playdate 2",
      location: "Location 2",
      time: "Time 2",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      playdate_id: 2,
      playdate_name: "Playdate 2",
      location: "Location 2",
      time: "Time 2",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
  ]


  const handleRequestCardPress = (item) => {
    router.push(`/request-details/${item.playdate_id}`);
    alert("Playdate Request Card Pressed", item.playdate_id);
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Playdate Requests</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>Error</Text>
        ) : (
          playDateRequest.map((item) => (
            <PlayDateRequestCard
              // item={item}
              key={`request-details-${item.playdate_id}`}
              handleNavigate={()=> router.push(`/request-details/${item.playdate_id}`)}
              playRequest={item}
            />
          ))
        )}
      
          
    </View>
  </View>
  );
};

export default PlayDateRequest;
