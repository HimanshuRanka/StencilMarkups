import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Homes from "../Screens/Homes";
import Rooms from "../Screens/Rooms";
import ItemSheet from "../Screens/ItemSheet";
import {NavigationContainer} from "@react-navigation/native";

const MainStack = createStackNavigator();

export default function (){
    return(
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name={"Homes"} component={Homes} />
                <MainStack.Screen name={"Rooms"} component={Rooms} />
                <MainStack.Screen name={"Items"} component={ItemSheet} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}