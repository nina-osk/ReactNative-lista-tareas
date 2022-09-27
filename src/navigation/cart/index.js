import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from "react-native";
import { COLORS } from "../../utils/colors";
import Cart from "../../screens/cart";

const Stack = createNativeStackNavigator();

const CartStackNavigation=()=>{
    return(
    
            <Stack.Navigator
            initialRouteName='Cart'
            ScreenOptions={{
                headerStyle: {backgroundColor: Platform.OS==='android' ? COLORS.primary:'',},
                headerTintColor: Platform.OS==='android' ? 'white' : COLORS.primary,
            }}>
        <Stack.Screen name="Categories" component={Categories}  />
        <Stack.Screen 
        name="Cart" 
        component={Cart}
        options={{title:'Carrito'}} />
       
            </Stack.Navigator>
     
        )
}

export default CartStackNavigation;