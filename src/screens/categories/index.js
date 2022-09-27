import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import Products from '../products/index';
import styles from './styles';
import CategoryItem from '../../components/categoryItem';
import { CATEGORIES } from '../../utils/data/categories';


const Categories = ({navigation}) => {

  const handleSelectedCategory=(item)=>{
      navigation.navigate('Products', 
        {
        categoryID: item.id,
        name: item.title,
        color: item.color,
        }
    );
  }
const renderCategories=({item})=>{
 return(
  <CategoryItem item={item} onSelected={handleSelectedCategory}/>
  );
}

  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
     
      <FlatList
              data={CATEGORIES}
              renderItem={renderCategories}
              keyExtractor={item=>item.id}
      />
      </View>
    </SafeAreaView>

  );
};
export default Categories;
