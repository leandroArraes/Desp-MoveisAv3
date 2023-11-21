import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Link } from 'expo-router';
import React,{useState} from 'react';
import tw from 'twrnc';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


export default function Index() {

  const [location, setLocation] = useState({
    latitude: -22.9108283,
    longitude: -43.1754936,
  });

  const updateLocation = (latitude, longitude) => {
    setLocation({ latitude, longitude });
  };

  return (
    <View style={tw`h-100 w-100 flex items-center `}>
     
      <MapView style={tw`h-75 w-100 mt-10 `}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: -22.9108283,
            longitude: -43.1754936,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            pinColor="blue"
          />
                 
      
        </MapView>
         
          
      
      <StatusBar style="auto" />
      <View style={tw`grid gap-4 grid-rows-1 mt-2`}>
        <button title={'Cristo Redentor'} onPress={() => updateLocation(-22.916944, -43.203278)}>Cristo Redentor</button>
        <button title={'Grande Muralha da China'} onPress={() => updateLocation(39.90425, 116.40751)}>Grande Muralha da China</button>
        <button title={'Petra'} onPress={() => updateLocation(31.049722, 35.216667)}>Petra</button>
        <button title={'Coliseu'} onPress={() => updateLocation(41.890278, 12.490278)}>Coliseu</button>
        <button title={'Chichén Itzá'} onPress={() => updateLocation(20.682222, -88.568333)}>Chichén Itzá</button>
        <button title={'Machu Picchu'} onPress={() => updateLocation(-13.169833, -72.537222)}>Machu Picchu</button>
        <button title={'Taj Mahal'} onPress={() => updateLocation(27.175000, 78.042222)}>Taj Mahal</button>
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
