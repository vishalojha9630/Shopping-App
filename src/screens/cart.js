import React from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slice/cart.slice';
import dynamicStyles from './style';

const Cart = (props) => {
  const DynamicAppStyles = props.route.params.DynamicAppStyles;
  const styles = dynamicStyles('light', DynamicAppStyles);

  const dispatch = useDispatch()
  const { cartsList } = useSelector((state) => state.cart)


  let totalValue = 0
  cartsList.forEach(items => {
    totalValue += items.price * items.quantity
  });

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItemMainContainer}>
        <View style={styles.listItemMainWrap} >
          <Image
            source={{ uri: item.image }}
            style={styles.listItemImage}
          />

          <View style={styles.listItemWrap}>
            <Text style={styles.nameStyle}>{item.title}</Text>
            <Text style={styles.priceStyle}>{item.price}</Text>
          </View>
        </View>

        <View style={styles.middleWrap}>
          <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))} style={styles.minusBtn}>
            <Text style={styles.minusBtnText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.BtnText}>{item.quantity}</Text>

          <TouchableOpacity onPress={() => dispatch(addToCart(item))} style={styles.minusBtn}>
            <Text style={styles.minusBtnText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.BtnText}>{item.quantity * item.price} /-</Text>

        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer} >
      {cartsList.length > 0 ?
        <FlatList
          data={cartsList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(key, index) => index.toString()}
        />
        :
        <View style={styles.emptyCartWrap}>
          <Text style={styles.emptyCartText}>Your cart is empty !</Text>
        </View>}

      <View style={styles.TotalWrap}>
        <Text style={styles.TotalText}>Grand Total: $ {totalValue} /-</Text>
      </View>

    </SafeAreaView>

  )
}
export default Cart