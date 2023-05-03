import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import styles from "./tabs.style";

import { SIZES } from "../../../constants";

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  // alert(name);
  return (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
  )
  ;
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  // const { title, description, date } = playdate;

  return (
    <View style={styles.container}>
      {/* <Text>Tab {tabs}</Text> */}
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            // onPress={() => setActiveTab(item)}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};


export default Tabs;
