// import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


import styles from './playdaterequestCard.style'
import { checkImageUrl } from '../../../../utils'

const PlayDateRequestCard = ({playRequest, handleNavigate}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{ url: checkImageUrl(playRequest) ? playRequest : "https:" }} resizeMode="contain" style={styles.logoImage} />
      </TouchableOpacity>
      <Text style={styles.textContainer} numberOfLines={1}>
        {/* {playRequest?.hostname}   */}
        hostname
      </Text>
      <View style={styles.jobType}>
        <Text style={styles.jobName} numberOfLines={1}>
          {/* {playRequest?.description} */}
          description
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {/* {playRequest?.location} */}
          location
        </Text>
        <Text style={styles.time} numberOfLines={1}>
          {/* {playRequest?.time} */}
          time
        </Text>
      </View>
    </TouchableOpacity>

  )
}

export default PlayDateRequestCard