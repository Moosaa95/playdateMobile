import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({title, description}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionBox}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

export default Specifics