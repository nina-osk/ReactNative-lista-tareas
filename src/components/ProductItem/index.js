import React from 'react';
import { View, Text,  TouchableOpacity} from 'react-native';
import styles from './styles';

const ProductItem = ({item, onSelected}) => {

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.containerTouchable}
      onPress={() => onSelected(item)}>
      <View style={styles.container}>
       </View>
       <View>
        <Text style={styles.title}>Producto</Text>
        <Text style={styles.title}>{item.name}</Text>
         </View>
       <View>
      <Text style={styles.details}>${item.price}</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
};


export default ProductItem;
