// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// const Button = ({ title, onPress }) => {
//   const buttonColor = title === 'Accept' ? '#4caf50' : '#f44336';

//   return (
//     <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={onPress}>
//       <Text style={styles.text}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 15,

//   },
//   text: {
//     color: '#fff',
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

// export default Button;

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  accept: {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  },
  decline: {
    backgroundColor: '#f44336',
    borderColor: '#f44336',
  },
});

export default CustomButton;