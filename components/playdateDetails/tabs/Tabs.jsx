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

  const handleSendPlayRequest = () => {
    // TODO: Implement logic for sending play request
    alert("Play request sent!");
  };

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   date: {
//     fontSize: 14,
//     color: "#999",
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "#33A8FF",
//     padding: 10,
//     borderRadius: 5,
//     alignSelf: "flex-end",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

export default Tabs;
