import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./playdatelist.style";

import { COLORS, SIZES } from "../../../constants";
// import ListPlayDatesCard from "../../common/cards/playdaterequests/"
import ListPlayDatesCard from "../../common/cards/listplaydates/ListPlayDateCard";
import useFetch from "../../../hook/useFetch";
import { useAuth } from "../../../context/auth";

const PlayDateList = () => {
  const router = useRouter();
  const [selectedPlayDate, setSelectedPlayDate] = useState();
  const isLoading = false;
  const { user } = useAuth();
  const [dataa, setDataa] = useState([]);
  // const error = false;
  // console.log("hey play list", user, 'nagode', 'yes');

  const { data, loading, error, fetch } = useFetch();

  // get the playdate list from the backend
  useEffect(() => {
    // Call the API endpoint here

    // fetch("get-playdates");
    try {
      fetch("get-playdates", { username: user }, 'POST').then((res) => {
        // console.log(res, "res");
        setDataa(res);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // console.log(data, "playdates datere");

  // const playDateList = [
  //   {
  //     playdate_id: 1,
  //     playdate_name: "Playdate 1",
  //     location: "Location 1",
  //     time: "Time 1",
  //     description: "description 1",
  //     host: "host 1",
  //     logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  //   },
  //   {
  //     playdate_id: 2,
  //     playdate_name: "Playdate 2",
  //     location: "Location 2",
  //     time: "Time 2",
  //     description: "description 2",
  //     host: "host 2",
  //     logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  //   },
  // ];

  const handleCardPress = (item) => {
    router.push(`/playlist-details/${item.id}`);
    setSelectedPlayDate(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Playdates</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : [dataa].length == 0 ? (
          <Text style={styles.error}>No PlayDate Available</Text>
        ) : (
          <FlatList
            data={dataa}
            renderItem={({ item }) => (
              <ListPlayDatesCard
                item={item}
                handlePress={handleCardPress}
                selectedPlay={selectedPlayDate}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PlayDateList;
