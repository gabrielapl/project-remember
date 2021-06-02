import React, { useState } from 'react';
import {View,Text,TextInput} from 'react-native';

import {styles} from './styles';
import {Button} from '../../components/Button';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';

const Nome: React.FC = () => {
  const navigation  = useNavigation()
  const [isFocused,setIsFocused] = useState(false);
  const [isFilled,setIsFilled] = useState(false);
  const [name, setName] = useState('')
  
  function handleInputBlur(){
    setIsFocused(false)
    setIsFilled(!!name)
  }
  function handleInputFocus(){
    setIsFocused(true)
  }
  function handleInputChange(value: string){
    setIsFilled(!!value);
    setName(value)
  }
  return (
    <View style={styles.container}>  
      <Text style={styles.emoji}>{isFilled ?  "😉" :"🤔"}</Text>
      <Text style={styles.title}>Qual seu nome?</Text>
      <TextInput 
        style={[
          styles.input,
          (isFocused || isFilled) && {borderColor:colors.components}
        ]}
        placeholder="Digite um nome"
        placeholderTextColor='white'
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onChangeText={handleInputChange}
      />
      <Button title='Confirmar' onPress={()=>navigation.navigate('MorningTasks',{name})}/>
    </View> 
  );
};

export default Nome;