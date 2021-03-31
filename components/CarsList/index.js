import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CarItem from '../CarItem';
import cars from './cars';
import styles from './style';

const CarList = (props) => {

    return (
        <View style={styles.container}>

            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
            
        </View>
    );
};

export default CarList;
