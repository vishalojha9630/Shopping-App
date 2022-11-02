import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../redux/slice/categories.slice'
import { categoryService } from '../services/category.services'
import dynamicStyles from './style'
import LoadingModal from '../components/LoadingModal/loadingModal'

const Categories = (props) => {

  const DynamicAppStyles = props.route.params.DynamicAppStyles;
  const styles = dynamicStyles('light', DynamicAppStyles);
  const navigation = props.navigation;

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const { categoriesList } = useSelector((state) => state.category)


  useEffect(() => {
    setLoading(true)
    categoryService.categoryList()
      .then((data) => {
        data && setLoading(false)
        dispatch(setCategories(data))
      })
  }, [])

  const navigateTo = (category) => {
    navigation.navigate(`CategorySingle`, { category, styles })
  }


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateTo(item)} style={styles.cartWrap} >
        <View style={styles.infoWrap}>
          <Text style={styles.infoText}>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      {categoriesList.length === 0 && loading === true ? <LoadingModal /> :
        <FlatList
          data={categoriesList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />}
    </SafeAreaView>
  )
}

export default Categories
