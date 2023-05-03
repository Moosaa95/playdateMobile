import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";
import { useAuth } from "../../../context/auth";

import styles from "./welcome.style";

const playDateType = ["Indoor", "Outdoor", "Virtual", "All"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const {user} = useAuth()
  const [activeJobType, setActiveJobType] = useState("All");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {user?.username || 'user'}</Text>
        <Text style={styles.welcomeMessage}> Find your next playdate</Text>
      </View>
      {/* <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a playdate"
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View> */}
      {/* <View style={styles.tabsContainer}>
        <FlatList
          data={playDateType}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View> */}
    </View>
  );
};

export default Welcome;
