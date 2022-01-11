/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'red'
        //CENTRAR TEXTO
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          //ALINEAR TEXTO AL CENTRO
          textAlign: 'center',
        }}>
        Hola Manuel
      </Text>
    </View>
  );
};
