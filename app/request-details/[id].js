

import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  PlayRequestAbout,
  PlayRequestDataType,
  PlayRequestFooter,
  PlayRequestTabs,
  PlayRequestSpecific
} from "../../components";

import { Stack, useRouter, useSearchParams } from "expo-router";

import { icons, COLORS, SIZES, FONTS } from "../../constants";

const Tabs = ["description", "child-info", "child-needs", "parent-info"];

const RequestDetail = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [activeTab, setActiveTab] = useState(Tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {};
  const isLoading = false;
  const error = false;

  const requestPlayDetail = {
    playdate_id: 1,
    playdate_type: "Playdate",
    playdate_title: "Playdate at the park",
    playdate_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor ut pariatur suscipit dignissimos molestias dolorem nulla libero quasi veritatis! Consectetur sunt accusantium dignissimos nam magni distinctio, laboriosam suscipit. Voluptate.",
    playdate_date: "2021-09-01",
    playdate_start_time: "10:00",
    playdate_end_time: "12:00",
    playdate_location: "1234 Main St, City, State",
    playdate_host: "John Doe",
    playdate_logo:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    playdate_child_info: "Child Info",
    playdate_child_needs: "Child Needs",
    playdate_parent_info: "Parent Info",
    playdate_status: "Open",
  };

  const displayTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <PlayRequestAbout
            title = "Description"
            description={requestPlayDetail.playdate_description}
          />
        );
      case "child-info":
        return <PlayRequestSpecific
          title = "Child Info"
          playdate_child_info={requestPlayDetail.playdate_child_info}
        />;
      case "child-needs":
        return <PlayRequestSpecific
          title = "Child Needs"
          playdate_child_needs={requestPlayDetail.playdate_child_needs}
        />;
      case "parent-info":
        return <PlayRequestSpecific
          title = "Parent Info"
          playdate_parent_info={requestPlayDetail.playdate_parent_info}
        />;
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={icons.left}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: COLORS.primary,
                }}
              />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text style={styles.error}>{error}</Text>
          ) : requestPlayDetail.length === 0 ? (
            <Text style={styles.error}>No Request Detail</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <PlayRequestDataType
                title={requestPlayDetail.playdate_title}
                playdate_type={requestPlayDetail.playdate_type}
                date={requestPlayDetail.playdate_date}
                start_time={requestPlayDetail.playdate_start_time}
                end_time={requestPlayDetail.playdate_end_time}
                playdate_location={requestPlayDetail.playdate_location}
                host={requestPlayDetail.playdate_host}
                status={requestPlayDetail.playdate_status}
                playDateImage={requestPlayDetail.playdate_logo}
              />
              <PlayRequestTabs
                tabs={Tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <PlayRequestFooter />
      </>
    </SafeAreaView>
  );
};

export default RequestDetail;


// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useCart } from '../context/cartContext';

// const ProductDetail = ({ route }) => {
//   const { addItemToCart } = useCart();
//   const { itemName, price, description, image } = route.params;
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (increment) => {
//     if (increment) {
//       setQuantity((prev) => prev + 1);
//     } else if (quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     addItemToCart({ itemName, price, quantity });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: image }} style={styles.image} />
//       <View style={styles.details}>
//         <Text style={styles.itemName}>{itemName}</Text>
//         <Text style={styles.price}>${price.toFixed(2)}</Text>
//         <Text style={styles.description}>{description}</Text>
//         <View style={styles.quantityContainer}>
//           <Text style={styles.quantityText}>Quantity:</Text>
//           <TouchableOpacity onPress={() => handleQuantityChange(false)}>
//             <Ionicons name="remove-circle-outline" size={24} color="#000" />
//           </TouchableOpacity>
//           <Text style={styles.quantity}>{quantity}</Text>
//           <TouchableOpacity onPress={() => handleQuantityChange(true)}>
//             <Ionicons name="add-circle-outline" size={24} color="#000" />
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
//           <Text style={styles.buttonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'contain',
//   },
//   details: {
//     flex: 1,
//     padding: 16,
//   },
//   itemName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   quantityText: {
//     fontSize: 16,
//     marginRight: 16,
//   },
//   quantity: {
//     fontSize: 16,
//     marginHorizontal: 16,
//   },
//   button: {
//     backgroundColor: '#f0c040',
//     padding: 16,
//     borderRadius: 8,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//   },
// });

// export default ProductDetail;
