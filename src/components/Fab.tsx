import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  //TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
    <View
      style={[stile.fabLocation, position === 'bl' ? stile.left : stile.right]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('28425b', false, 30)}>
        <View style={stile.fab}>
          <Text style={stile.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>

    // <TouchableOpacity
    //   style={[//stile.fabLocation, position === 'bl' ? stile.left : stile.right]}
    //   onPress={onPress}>
    //   <View style={stile.fab}>
    //     <Text style={stile.fabText}>{title}</Text>
    //   </View>
    // </TouchableOpacity>
  );
};

const stile = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },

  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: 'green',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },
  fabText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
});
