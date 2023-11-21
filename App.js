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
      
      <Button title={'Senac'} onPress={() => updateLocation(-22.910895031890497, -43.174184716828016)} />
        <Button title={'Niterói'} onPress={() => updateLocation(-22.907548492409962, -43.12600487607869)} />
        <Button title={'Saquarema'} onPress={() => updateLocation(-22.93673595462559, -42.492341482231)} />
        <Button title={'Paraty'} onPress={() => updateLocation(-23.219451256341728, -44.711520893955885)} />
      </View>
     
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