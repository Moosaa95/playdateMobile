import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { checkImageUrl } from '../../../../utils'


import styles from './ecommerce.style'

const EcommerceCard = ({item, selectedItem, handlePress}) => {
  return (
    <TouchableOpacity style={styles.container(selectedItem, item)} onPress={() => handlePress(item)}>
        <TouchableOpacity style={styles.logoContainer(selectedItem, item)}>
            <Image source={{ url: checkImageUrl(item.logo) ? item.logo : "https:" }} resizeMode="contain" style={styles.logoImage} />
        </TouchableOpacity>
        <Text style={styles.itemName} numberOfLines={1}>
            {item.product_name}
        </Text>
        <Text style={styles.itemPrice} numberOfLines={1}>
            {item.price}
        </Text>
        <View style={styles.infoContainer}>
            <Text style={styles.itemDescription(selectedItem, item)} numberOfLines={1}>
                {item.description}
            </Text>
        </View>
    </TouchableOpacity>
  )
}


export default EcommerceCard