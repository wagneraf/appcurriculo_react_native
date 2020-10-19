import React from 'react';
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/FOTO.jpg';
import Card from './componente/card'

const App = () => {

  function handleRedeSocial(rede_social){
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Linkedin','https://linkedin.com/in/...')
      break 
      case 'github':
        Alert.alert('Github', 'https://github.com/wagner...')
      break
      case 'facebook':
        Alert.alert('Facebook', 'https://...');
      break
    }
  }
  return (
    <>
    <ScrollView style={style.scrollView}>
    <View style={style.page}>
      <View  style={style.container_cabecalho}>
        <Image source={foto} style={style.foto}/>
        <Text style={style.nome}>WAGNER ALVES FERREIRA</Text>
        <Text style={style.funcao}>Desenvolvedor Mobile</Text>
        <View style={style.redes_sociais}>
          <TouchableOpacity onPress = {()=>handleRedeSocial('github')}>          
            <Icon name="github" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {()=> handleRedeSocial('linkedin')}>
            <Icon name="facebook" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {()=> handleRedeSocial('facebook')}>
            <Icon name="linkedin" size={30}/>
          </TouchableOpacity>
        </View>
      </View> 
      <Card titulo="Experiência profissional">
        <Text style={style.card_container_text}>Empresa Brasilieira de Correios e Telégrafos</Text>
        <Text style={style.card_container_text}>Analista de sistema Júnior - 2008 a 2012</Text>
        <Text style={style.card_container_text}>Analista de sistema Pleno - 2013 a ...</Text>
      </Card>     
      <Card titulo="Formação Acadêmica">
        <Text style={style.card_container_text}>Ciências da Computação - FUMEC</Text>
      </Card>
    </View> 
    </ScrollView>     
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor:"#E7E7E7",
    flex:1,
    paddingBottom: 10
  },
  container_cabecalho:{
    alignItems:'center',
    justifyContent: 'center',
    marginTop:35
  },
  foto:{
    width:250,
    height:250,
    borderRadius: 125
  },
  nome:{
    fontSize:26,
    fontWeight: 'bold',
    marginTop:10
  },
  funcao:{
    
    color:'#939393',
    marginBottom: 10
  },
  redes_sociais:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width:'60%',
    marginTop:20
  },
  
  card_container:{
    width:'100%',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 20
  },
  card_container_text:{
    color: '#939393',
    marginBottom: 10
  },
  scrollView: {
  },
});

export default App;
