import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./store.style";

import { icons, SIZES } from "../../../constants";

import EcommerceCard from "../../common/cards/commercecards/EcommerceCard";

const Store = () => {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState();
  const isLoading = false;
  const error = false;

  const productList = [
    {
      product_id: 1,
      product_name: "Product 1",
      price: "Price 1",
      description: "description 1",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      product_id: 2,
      product_name: "Product 2",
      price: "Price 2",
      description: "description 2",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      product_id: 1,

      product_name: "Sensory Chew Necklace",
      price: 15.99,
      description:
        "A silicone necklace that's safe for kids to chew on when they need to relieve anxiety or stress.",
      logo: "https://example.com/sensory-chew-necklace.jpg",
    },
    {
      product_id: 1,

      product_name: "Visual Schedule Board",
      price: 24.99,
      description:
        "A magnetic board with visual icons that helps kids with autism understand daily routines and tasks.",
      logo: "https://example.com/visual-schedule-board.jpg",
    },
    {
      product_id: 1,

      product_name: "Speech Therapy App",
      price: 4.99,
      description:
        "A mobile app with speech exercises and games that help kids with autism develop their language and communication skills.",
      logo: "https://example.com/speech-therapy-app.jpg",
    },
    {
      product_id: 1,

      product_name: "Social Story Book",
      price: 19.99,
      description:
        "A book with illustrated stories that help kids with autism understand social situations and navigate social interactions.",
      logo: "https://example.com/social-story-book.jpg",
    },
    {
      product_id: 1,

      product_name: "Weighted Blanket",
      price: 79.99,
      description:
        "A blanket that provides deep pressure and sensory input to help kids with autism feel calm and relaxed.",
      logo: "https://example.com/weighted-blanket.jpg",
    },
    {
      product_id: 1,

      product_name: "Sensory Swing",
      price: 129.99,
      description:
        "A swing that provides vestibular and proprioceptive input to help kids with autism regulate their sensory input.",
      logo: "https://example.com/sensory-swing.jpg",
    },
    {
      product_id: 1,

      product_name: "Fidget Cube",
      price: 9.99,
      description:
        "A small cube with various sensory features such as buttons, switches, and rollers that helps kids with autism focus and relieve anxiety.",
      logo: "https://example.com/fidget-cube.jpg",
    },
    {
      product_id: 1,

      product_name: "PECS Communication Book",
      price: 39.99,
      description:
        "A book with picture exchange communication system (PECS) icons that helps nonverbal kids with autism communicate their needs and wants.",
      logo: "https://example.com/pecs-communication-book.jpg",
    },
    {
      product_id: 1,

      product_name: "Visual Timer",
      price: 12.99,
      description:
        "A timer with visual countdown features that helps kids with autism understand the passage of time and manage transitions.",
      logo: "https://example.com/visual-timer.jpg",
    },
    {
      product_id: 1,

      product_name: "Play Therapy Kit",
      price: 49.99,
      description:
        "A kit with various sensory toys and tools that help kids with autism engage in play therapy and develop social and emotional skills.",
      logo: "https://example.com/play-therapy-kit.jpg",
    },
  ];

  const handleCardPress = (item) => {
    router.push(`/product-details/${item.product_id}`);
    setSelectedProduct(item.product_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Products</Text>
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
          <FlatList
            data={productList}
            renderItem={({ item }) => (
              <EcommerceCard
                item={item}
                handlePress={handleCardPress}
                selectedProduct={selectedProduct}
              />
            )}
            keyExtractor={(item) => item.product_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Store;
