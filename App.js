import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './List';
import ImageBig from './ImageBig';

const Stack = createStackNavigator();

export default function App() {
  const accessKey = '5rLBUSWnm7W1jhp6Dbcb-LnRMjZ8GhQ_LtppJrycHzU';
  const query = 'nature';
  const count = 2; // Кількість зображень, які ви хочете отримати
  const [images, setImages] = useState([]);
  const a = 'https://reactnative.dev/img/tiny_logo.png';
  let pic = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  };
  
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${query}&count=${count}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const arr = [];

        for (el of data) {
          arr.push({
            url: {uri: el.urls.regular},
            name: el.alt_description,
            auther: el.user.name,
          })
        }

        setImages(arr);
      })
      .catch(error => console.log('Error fetching image from Unsplash:', error));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={<List images={images} />}
        />
        <Stack.Screen
          name="Image"
          component={<ImageBig image={images[0]}  />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
