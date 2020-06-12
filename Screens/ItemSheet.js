import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Card from "../Shared/Card";
import TextStylePropTypes from "react-native-web/dist/exports/Text/TextStylePropTypes";

export default function ItemSheet() {

        const [items, setItems] = useState([
            {name: 'Fundermax', id: '332', cost: '35', key: '1'},
            {name: 'Wallpaper', id: '1123', cost: '440', key: '2'},
            {name: 'Corien', id: '883', cost: '699', key: '3'},
        ])

        return(
            <FlatList
                data={items}
                renderItem = {({item}) => (
                <TouchableOpacity>
                    <Card>
                        <Text> {item.name} id: {item.id} </Text>
                        <Text style={{textAlign: 'right'}}> | {item.cost} per sq.ft</Text>
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
