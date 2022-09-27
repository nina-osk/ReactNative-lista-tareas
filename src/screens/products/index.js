import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem/index';
import styles from './styles';
import {PRODUCTOS} from '../../utils/data/productos';

const Products = ({navigation, route}) => {
  const productos = PRODUCTOS.filter(product => product.category===route.params.categoryID);

  const handleSelectedProduct=(item)=>{
    navigation.navigate('ProductDetail', 
      {
      productID: item.id,
      name: item.name,
      componente:item,
      }
  );
}
const renderProducts=({item})=>{
  return(
   <ProductItem item={item} onSelected={handleSelectedProduct}/>
   );
 }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    <FlatList
            data={PRODUCTOS}
            renderItem={renderProducts}
            keyExtractor={item=>item.id}
    />
    </View>
  </SafeAreaView>

  );
};
export default Products;
