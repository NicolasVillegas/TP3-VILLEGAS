import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

function HomeScreen(){
    return(
        <View style={styles.container}>
          <Image source={require('../assets/multi.jpg')} style={styles.headerImage} />
          <Text>
            Welcome to the collective knowledge from Manga/anime media,  
                Obtain wisdom looking for phrases from iconic characters

          </Text>
          <StatusBar style="auto" />
        </View>
      )
}


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    headerImage: {
        marginTop:0,
        marginBottom: 20,
        width: 400,
        height: 400,
    },  
  });

module.exports = HomeScreen;