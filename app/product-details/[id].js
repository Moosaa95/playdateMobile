import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useRouter, Stack } from "expo-router";
import { icons, COLORS, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const ProductDetail = ({ productItem }) => {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  //   const { addItemToCart } = useCart();
  //   const { itemName, price, description, image } = route.params;
  const [quantity, setQuantity] = useState(1);

  const isLoading = false;
  const error = false;

  const onRefresh = () => {};

  const PRODUCTITEM = {
    product_id: 1,
    product_name: "Product 1",
    price: "Price 1",
    description: "description 1",
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  };

  const handleQuantityChange = (increment) => {
    if (increment) {
      setQuantity((prev) => prev + 1);
    } else if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItemToCart({ itemName, price, quantity });
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={{ color: "red" }}>Error</Text>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={{ uri: PRODUCTITEM.logo }}
              style={styles.image}
              // resizeMode="cover"
              // style={{
              //     width: SIZES.width,
              //     height: SIZES.width,
              // }}
            />
            <View style={styles.details}>
              <Text style={styles.itemName}>{PRODUCTITEM.product_name}</Text>
              <Text style={styles.price}>{PRODUCTITEM.price}</Text>
              <Text style={styles.description}>{PRODUCTITEM.description}</Text>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>Quantity:</Text>
                <TouchableOpacity onPress={() => handleQuantityChange(false)}>
                    <Ionicons name="remove-circle" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={() => handleQuantityChange(true)}>
                    <Ionicons name="add-circle" size={24} color="black" />
                </TouchableOpacity>
              </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAddToCart}
                >
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  details: {
    flex: 1,
    padding: 16,
  },
  itemName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityText: {
    fontSize: 16,
    marginRight: 16,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: "#f0c040",
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
export default ProductDetail;
