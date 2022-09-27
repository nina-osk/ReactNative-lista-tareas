import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

const ProductDetail= ({navigation, route}) => {
 const {componente}=route.params
  return (

      <View style={styles.container}>
        <Text>ProductDetails</Text>
        <Text>{componente.name}</Text>
        <Text>{componente.description}</Text>
        <Text>{componente.price}</Text>
      </View>

  );
};
export default ProductDetail;
