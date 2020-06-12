import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Card from "../Shared/Card";

export default function Rooms({ navigation }) {
    const [rooms, setRooms] = useState([
        {name: 'Guest Room', cost: '6732', key: '1'},
        {name: 'Living Room', cost: '48839', key: '2'},
        {name: 'Master BedRoom', cost: '31234', key: '3'},
    ])

    return(
        <FlatList
            data={rooms}
            renderItem = {({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Items')}>
                <Card>
                    <Text> {item.name} </Text>
                    <Text style={{textAlign: 'right'}}> | {item.cost} </Text>
                </Card>
            </TouchableOpacity>
        ) }
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    listings: {

    }
})
