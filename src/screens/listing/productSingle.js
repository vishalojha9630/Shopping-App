import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { productsService } from '../../services/product.services';
import { setProductSingle } from '../../redux/slice/product.slice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slice/cart.slice';
import LoadingModal from '../../components/LoadingModal/loadingModal';

const ProductSingle = (props) => {
  const styles = props.route.params.styles;
  const id = props.route.params.id;

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const { productSingle } = useSelector((state) => state.product)

  useEffect(() => {
    setLoading(true)
    productsService.getProductSingle(id)
      .then((data) => {
        data && setLoading(false)
        dispatch(setProductSingle(data))
      })
  }, [])

  const navigateTo = () => {
    dispatch(addToCart(productSingle))
    console.log('AddToCart')
    // navigation.navigate(`Cart`, { styles })
  }


  return (
    <SafeAreaView style={styles?.mainContainer} >
      {productSingle.length === 0 && loading === true ? <LoadingModal /> :
        <ScrollView style={{ marginBottom: 10 }}>
          <Image
            source={{ uri: `${productSingle.image}` }}
            style={styles?.imageStyle}
          />
          <View style={{ paddingHorizontal: 8, }}>
            <View style={{ flexDirection: 'row', }} >
              <Text style={styles?.subHeadingText} >Title: </Text>
              <Text style={styles?.commonSubText}>{productSingle.title}</Text>
            </View>

            <View style={styles?.subHeadingWrap}>
              <Text style={styles?.subHeadingText}>Price: $ </Text>
              <Text style={styles?.commonSubText}>{productSingle.price}</Text>
            </View>

            <View style={{}}>
              <Text style={styles?.subHeadingText}>Description: </Text>
              <Text style={styles?.commonSubText}>{productSingle.description}</Text>
            </View>

          </View>

          <TouchableOpacity onPress={navigateTo} style={styles?.viewBtnWrap}>
            <Text style={styles?.viewBtnText}>Add To Cart</Text>
          </TouchableOpacity>
        </ScrollView>}
    </SafeAreaView>
  )
}

export default ProductSingle