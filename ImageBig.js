import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function ImageBig() {
  return (
    <View>
      <Image
        style={styles.image}
        source={this.image.url}
      />
      <Button
        title="Back to home"
        onPress={() =>
          this.props.navigation.navigate('Home')
        }
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    padding: 10,
    marginRight: 10,
  },
});

