import React, { Component, } from "react";
import { StyleSheet, FlatList, View, StatusBar } from "react-native";
import { Title, Card, Paragraph, } from "react-native-paper";
import { format } from "date-fns";
import { RootTabScreenProps } from '../../types';

let d = new Date(2021, 7, 13)
var date_str = format(d, "dd. MMM. yyyy")

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Pflanziska',
      last_watered: date_str, 
      img_location: '../assets/placeholder_plant.png', 
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Ingrids Monstera',
      last_watered: date_str, 
      img_location: '../assets/placeholder_plant.png', 
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Der Baum',
      last_watered: date_str, 
      img_location: '../assets/placeholder_plant.png', 
    },
  ];

function createCard(item: any) {
    let plant = item.item 
    // let img_location:string = plant.img_location
    // console.log(img_location)
    // let img = require(img_location)
    return (
        <View style={styles.Card}>
            <Card>
                <Card.Cover source= {require('../assets/placeholder_plant.png')} />
                <Card.Content>
                    <Title>{plant.name}</Title>
                    <Paragraph>This plant was last watered on {plant.last_watered}</Paragraph>
                </Card.Content>
            </Card>
        </View>
    )
}

function Library({ navigation }: RootTabScreenProps<'TabOne'>) {
    
    return (
        <View style={styles.container} >
            <FlatList
                data={DATA}
                renderItem={createCard}
                keyExtractor={item => item.id}
            />
        </View>

    )
}

export default Library

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#676767',
        marginTop: StatusBar.currentHeight || 0,
    },
    Card: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    
  });