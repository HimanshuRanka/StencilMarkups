import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Card from "../Shared/Card";


export default function Homes({ navigation }) {

    const [houses, setHouses] = useState([
        {name: 'Ranka\'s', key: '1'},
        {name: 'Lunia\'s', key: '2'},
        {name: 'Neelam\'s', key: '3'},
    ])

    return (
        <View>
            <FlatList
                data={[
                    {name: 'Rankas', key: '1'},
                    {name: 'Lunias', key: '2'},
                    {name: 'Neelams', key: '3'},
                ]}
                renderItem = {({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Rooms')}>
                    <Card>
                        <Text>{item.name}</Text>
                    </Card>
                </TouchableOpacity>
            )}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ee3'
    }
})
