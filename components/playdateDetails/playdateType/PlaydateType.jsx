import React from "react";
import { View, Text, Image } from "react-native";
import { icons } from "../../../constants";
import { checkImageUrl } from "../../../utils";


import styles from "./playdatetype.style";

const PlayDateType = ({
  title,
  host,
  start_time,
  end_time,
  date,
  status,
  playdate_type,
  playdate_location,
  playDateImage,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{ uri: checkImageUrl(playDateImage)
          ? playDateImage
          : "https://" 
          }}
          style={styles.logoImage}
        />
        </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{title}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{host} / </Text>
        <View style={styles.locationBox}>
          <Image 
            source={icons.location}
            style={styles.locationImage}
            resizeMode="contain"
          />
          <Text style={styles.locationName}>{playdate_location}</Text>
        </View>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{date} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.time}
            style={styles.locationImage}
            resizeMode="contain"
          />
          <Text style={styles.locationName}>{start_time} - {end_time}</Text>
        </View>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>type: {playdate_type}</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.status}
            style={styles.locationImage}
            resizeMode="contain"
          />
          <Text style={styles.locationName}>{status}</Text>
        </View>
      </View>
      
    </View>
  );
};

export default PlayDateType;
