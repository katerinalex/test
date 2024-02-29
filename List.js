import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {this.props.images.map((img) => {
              return (
                <View key={img.url.uri}>
                  <Pressable onPress={() => this.props.navigation.navigate('Image')}>
                    <View style={styles.section}>
                      <Image
                        style={styles.image}
                        source={img.url}
                      />
                      <Text style={styles.item}>{img.name} by {img.auther}</Text>
                    </View>
                  </Pressable>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
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
    width: 50,
    height: 50,
    resizeMode: 'cover',
    padding: 10,
    marginRight: 10,
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    marginBottom: 10,
  },
});
