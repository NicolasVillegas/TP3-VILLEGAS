import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import 'react-native-gesture-handler';


const axios = require ("axios").default;

function QuotesScreen(){

    const [personaje,setPersonaje]=React.useState("");
    const [obra,setObra]=React.useState("");
    const [quote,setQuote]=React.useState("");
    const [loading, setLoading] = React.useState(false)
  
    function pegarAPI(){
      axios.get("https://animechan.vercel.app/api/random")
      .then(function (resp){
          let personaje=resp.data.character;
          setPersonaje(personaje);
          let obra=resp.data.anime;
          setObra(obra);
          let quote=resp.data.quote
          setQuote(quote);
      })
      .catch(function (err){
          console.log(err);
      })
    }

    return(
        <View style={styles.container}>
        <Image source={require('../assets/sabiduria.jpg')} style={styles.headerImage} />    
        {!loading ? <Button 
            title="Meditate"
            onPress={() => pegarAPI()}
        /> : <ActivityIndicator/>}
        {personaje.length == 0 ? null :
            <>
            <Text style={styles.text1}>{personaje}</Text>
            <Text style={styles.text2}>{obra}</Text>
            <Text style={styles.text3}>{quote}</Text>
            </>
        }
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
    text1: {
      color: 'red',
      margin: 20
    },
    text2: {
      color: 'blue',
      margin: 20
    },
    text3: {
      color: 'green',
      margin: 20
    },
    headerImage: {
        marginTop:0,
        marginBottom: 20
    },
  });

module.exports = QuotesScreen;