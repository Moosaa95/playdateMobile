// import React, { useState } from "react";
// import { Button, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
// import useFetch from "../../../hook/useFetch";

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false);

//   const handlePostPlaydate = () => {
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Post Playdate Form" onPress={handlePostPlaydate} />
//       <Modal visible={modalVisible} animationType="slide">
//         <View style={styles.modalContainer}>
//           {/* Playdate Form */}
//           <Text style={styles.modalHeader}>Playdate Form</Text>
//           <TextInput style={styles.modalInput} placeholder="Event Type" />
//           <TextInput style={styles.modalInput} placeholder="Date" />
//           <TextInput style={styles.modalInput} placeholder="Start Time" />
//           <TextInput style={styles.modalInput} placeholder="End Time" />
//           <TextInput
//             style={styles.modalInput}
//             placeholder="Number of Available Spots"
//           />
//           <TextInput style={styles.modalInput} placeholder="Event Address" />
//           <TextInput
//             style={[styles.modalInput, styles.description]}
//             placeholder="Further Description/Information"
//           />
//           {/* <Button title="Post" onPress={handleCloseModal} />
//           <Button title="Cancel" onPress={handleCloseModal} /> */}
//           <View
//             style={{
//               flex: 1,
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
//               <Text style={styles.buttonText}>Post</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
//               <Text style={styles.buttonText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }
import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import useFetch from "../../../hook/useFetch";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [availableSpots, setAvailableSpots] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [description, setDescription] = useState("");

  const { loading, error, data, fetch } = useFetch();

  const handlePostPlaydate = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlePost = async () => {
    // const response = await request("POST", {
    // type: "outdoor", // default value for now
    // title: eventType,
    // description: description,
    // date: date,
    // start_time: startTime,
    // end_time: endTime,
    // available_spots: availableSpots,
    // address: eventAddress,
    // });
    try {
      const response = await fetch(
        "add-playdate",
        {
          type: "outdoor", // default value for now
          title: eventType,
          description: description,
          date: date,
          start_time: startTime,
          end_time: endTime,
          available_spots: availableSpots,
          address: eventAddress,
        },
        "post"
      );
      console.log(response, "response", data);

      if (data && data.status) {
        console.log('success');
        showMessage({
          message: "Success",
          description: `${data.message}`,
          type: "success",
          duration: 3000,
        });
      }
    } catch (error) {
      console.log(error);
    }
    // if (response) {
    //   handleCloseModal();
    // }
  };

  return (
    <View style={styles.container}>
      <Button title="Post Playdate Form" onPress={handlePostPlaydate} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {/* Playdate Form */}
          <Text style={styles.modalHeader}>Playdate Form</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Event Type"
            onChangeText={(text) => setEventType(text)}
            value={eventType}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="Date"
            onChangeText={(text) => setDate(text)}
            value={date}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="Start Time"
            onChangeText={(text) => setStartTime(text)}
            value={startTime}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="End Time"
            onChangeText={(text) => setEndTime(text)}
            value={endTime}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="Number of Available Spots"
            onChangeText={(text) => setAvailableSpots(text)}
            value={availableSpots}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="Event Address"
            onChangeText={(text) => setEventAddress(text)}
            value={eventAddress}
          />
          <TextInput
            style={[styles.modalInput, styles.description]}
            placeholder="Further Description/Information"
            multiline={true}
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.button} onPress={handlePost}>
              <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  description: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#0099ff",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
