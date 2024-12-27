import { FlatList, StyleSheet, Text, View } from 'react-native'
import {PRODUCTS} from '../../../assets/products';
import ProductListItem from '../../components/product-list-item';


const Home = () => {
  return (
    <View> //view component that holdes a text component that can show a text
      <FlatList 
      data={PRODUCTS}
      renderItem={({item})=> <ProductListItem product={item}/>}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      ListHeaderComponent={<Text>Products</Text>}
      contentContainerStyle={styles.flatListContent}
      columnWrapperStyle={styles.flatListColumn}
      style={{ paddingHorizontal:10, paddingVertical:5}}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom:20,
  },
  flatListColumn: {
    justifyContent:'space-between',
  },

})