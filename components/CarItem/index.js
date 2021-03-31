import React from 'react';
import {Button, ImageBackground,Text, View} from 'react-native';
import styles from './styles'; 
import ButtonItem from '../ButtonItem';

const CarItem = (props) => {

    const {name,tagline,image,taglineCTA} = props.car;
 
    return (
        <View style={styles.carContainer}>
        
        <ImageBackground source={image}
          style={styles.image}/>
  
          <View style={styles.titles}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtittle}>
                  {tagline}
                  {' '}
                  <Text style={styles.cta}>{taglineCTA}</Text>
              </Text>
              
          </View>
          
          <View style={styles.buttonContainer}>
            <ButtonItem type='Primary' content={'Custom Order'} onPress={() => {
                console.warn("Custom Order Pressed");
            }}></ButtonItem>
            <ButtonItem type='Secondary' content={'Existing Order'} onPress={() => {
                console.warn("Existing Order Pressed"); }}></ButtonItem>
          </View>
          
        </View>
    );
};

export default CarItem;