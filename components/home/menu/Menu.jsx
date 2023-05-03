import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { icons } from '../../../constants';
const Menu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <View style={{ position: 'relative' }}>
      <TouchableOpacity onPress={toggleDropdown}>
        {/* <Text style={{ fontSize: 16 }}>Menu</Text> */}
        <Image 
            source={icons.menu}
            resizeMode="contain"
            style={{ width: 25, height: 25 }}
            
        />
      </TouchableOpacity>
      {isOpen && (
        <View
          style={{
            position: 'absolute',
            top: 30, // Adjust this value to position the dropdown relative to the button
            left: 0,
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            height: 100,
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          {options.map((option, index) => (
            <TouchableOpacity key={index} onPress={option.onPress}>
              <Text style={{ fontSize: 16, paddingVertical: 5 }}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Menu;
