import { StyleSheet } from "react-native";

const dynamicStyles = (DynamicAppStyles, colorScheme) => {
  return StyleSheet.create({

    mainContainer: {
      backgroundColor: '#FFF',
      flex: 1,
      paddingHorizontal: 13,
    },
    imageStyle: {
      height: 250,
      width: '100%',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    cartWrap: {
      backgroundColor: '#edeff2',
      borderRadius: 10,
      marginVertical: 20,
    },
    infoWrap: {
      padding: 16,
    },
    infoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#404040'
    },


    // ProductSingle Style:- 
    viewBtnWrap: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 6,
      marginTop: 20,
      alignSelf: 'flex-end',
      backgroundColor: '#4e85de',
    },
    viewBtnText: {
      fontSize: 16,
      color: '#FFFFFF',
    },
    subHeadingWrap: {
      flexDirection: 'row',
    },
    subHeadingText: {
      fontSize: 16,
      color: '#333333',
      fontWeight: 'bold',
    },
    commonSubText: {
      fontSize: 16,
      color: '#595959',
      fontWeight: '400',
    },



    // CategorySingle Style:- 
    headingText: {
      fontSize: 25,
      color: '#333333',
      fontWeight: 'bold',
    },
    categoryImageStyle: {
      height: 80,
      width: 80,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    categoryCart: {
      backgroundColor: '#edeff2',
      borderRadius: 10,
      marginVertical: 10,
      padding: 10,
    },


    // Cart Style:-
    listItemMainContainer: {
      backgroundColor: '#edeff2',
      borderRadius: 10,
      marginVertical: 5,
      padding: 15,
    },
    listItemMainWrap: {
      flexDirection: 'row',
    },
    listItemImage: {
      height: 80,
      width: 50,
      borderRadius: 8,
    },
    listItemWrap: {
      flex: 1,
      marginLeft: 15,
    },
    nameStyle: {
      fontSize: 18,
      color: '#595959',
      fontWeight: 'bold',
    },
    priceStyle: {
      fontSize: 17,
      color: '#595959',
      fontWeight: '500',
    },
    middleWrap: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    minusBtn: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 6,
      backgroundColor: '#4e85de',
    },
    minusBtnText: {
      fontSize: 16,
      color: '#FFFFFF',
    },
    BtnText: {
      fontSize: 16,
      color: '#000',
    },
    emptyCartWrap: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyCartText: {
      fontSize: 18,
      color: '#595959',
      fontWeight: '400',
    },
    TotalWrap: {
      paddingVertical: 10,
      backgroundColor: '#edeff3'
    },
    TotalText: {
      fontSize: 18,
      color: '#595959',
      fontWeight: '600',
      marginStart: 15
    },

  })
}

export default dynamicStyles;
