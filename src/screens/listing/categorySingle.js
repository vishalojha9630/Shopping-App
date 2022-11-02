import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categoryService } from '../../services/category.services';
import { setCategorySingle } from '../../redux/slice/categories.slice';
import { useDispatch, useSelector } from 'react-redux';
import LoadingModal from '../../components/LoadingModal/loadingModal';

const CategorySingle = (props) => {
  const styles = props.route.params.styles;
  const navigation = props.navigation;
  const category = props.route.params.category;

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const { categorySingle } = useSelector((state) => state.category)


  useEffect(() => {
    setLoading(true)
    categoryService.getCategorySingle(category)
      .then((data) => {
        data && setLoading(false)
        dispatch(setCategorySingle(data))
      })
  }, [])

  const navigateTo = (id) => {
    navigation.navigate(`ProductSingle`, { id, styles })
  }


  const renderItem = ({ item }) => {
    return (
      <View style={styles.categoryCart}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 6 }}>
          <Image
            source={{ uri: `${item.image}` }}
            style={styles.categoryImageStyle}
          />
          <TouchableOpacity onPress={() => navigateTo(item?.id)} style={styles.viewBtnWrap} >
            <Text style={styles.viewBtnText}>View Detail</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 15, paddingEnd: 10, }}>
          <View style={{ flexDirection: 'row', }} >
            <Text style={styles.subHeadingText} >Title: </Text>
            <Text style={styles.commonSubText}>{item.title}</Text>
          </View>

          <View style={styles.subHeadingWrap}>
            <Text style={styles.subHeadingText}>Price: $ </Text>
            <Text style={styles.commonSubText}>{item.price}</Text>
          </View>

        </View>
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.mainContainer}>
      {categorySingle.length === 0 && loading === true ? <LoadingModal /> :
        <FlatList
          data={categorySingle}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<Text style={styles.headingText}>Category: {category}</Text>}
        />}
    </SafeAreaView>
  )
}

export default CategorySingle
