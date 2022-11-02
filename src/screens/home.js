import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/slice/product.slice'
import { productsService } from '../services/product.services'
import dynamicStyles from './style'
import LoadingModal from '../components/LoadingModal/loadingModal'

const Home = (props) => {

  const DynamicAppStyles = props.route.params.DynamicAppStyles;
  const styles = dynamicStyles('light', DynamicAppStyles);
  const navigation = props.navigation;

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const { productsList } = useSelector((state) => state.product)


  useEffect(() => {
    setLoading(true)
    productsService.productList()
      .then((data) => {
        data && setLoading(false)
        dispatch(setProducts(data))
      })
  }, [])

  const navigateTo = (id) => {
    navigation.navigate(`ProductSingle`, { id, styles })
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cartWrap}>
        <Image
          source={{ uri: `${item.image}` }}
          style={styles.imageStyle}
        />
        <View style={styles.infoWrap}>
          <Text style={styles.infoText}>{item.title}</Text>
          <Text style={styles.infoText}>$ {item.price}</Text>

          <TouchableOpacity onPress={() => navigateTo(item?.id)} style={styles.viewBtnWrap} >
            <Text style={styles.viewBtnText}>View Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.mainContainer}>
      {productsList.length === 0 && loading === true ? <LoadingModal /> :
        <FlatList
          bounces={false}
          data={productsList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(key, index) => index.toString()}
        />
      }
    </SafeAreaView>
  )
}

export default Home
