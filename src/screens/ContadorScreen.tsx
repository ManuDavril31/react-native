import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    //CONTENEDOR
    <View style={stile.container}>
      {/* TEXTO */}
      <Text style={stile.title}>Contador: {contador} </Text>
      {/* BOTON */}
      {/* <Button title="Click" onPress={() => setContador(contador + 1)} /> */}

      <Fab title="-1" onPress={() => setContador(contador - 1)} position="bl" />
      <Fab title="+1" onPress={() => setContador(contador + 1)} />

      {/* <TouchableOpacity
        style={stile.fabLocationBL}
        onPress={() => setContador(contador - 1)}>
        <View style={stile.fab}>
          <Text style={stile.fabText}>-</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const stile = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  //   backGround: {
  //     backgroundColor: 'red',
  //     borderRadius: 100,
  //   },
});
