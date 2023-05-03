import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./listplaydatestyle.style";
import { checkImageUrl } from "../../../../utils";

const ListPlayDatesCard = ({ item, selectedPlay, handlePress }) => {
  console.log(item, selectedPlay, 'item and play');
  // alert("ListPlayDatesCard"  + item + " " + selectedPlay + " " + handlePress)
  return (
    <TouchableOpacity
      style={styles.container(selectedPlay, item)}
      onPress={() => handlePress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedPlay, item)}>
        <Image
          source={{ url: checkImageUrl(item.logo) ? item.logo : "https:" }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.host__user__first_name} {item.host__user__last_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedPlay, item)} numberOfLines={1}>
          {/* {item?.playdate_name} */}
          {item.description}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {/* {item?.location} */}
          {item.address}
        </Text>
        {/* add time */}
        <Text style={styles.time} numberOfLines={1}>
          {/* {item?.time} */}
          {item.start_time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListPlayDatesCard;
