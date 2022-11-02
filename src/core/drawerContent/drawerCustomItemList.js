import React from 'react'
import DrawerCustomItem from './drawerCustomItem'

const DrawerCustomItemList = ({
  darwerItemList,
  style, }) => {

  return (
    <>
      {
        darwerItemList.map((item, index) => {
          return (
            <DrawerCustomItem
              key={index}
              index={index}
              screenName={item.screenName}
              Icon={item.Icon}
              text={item.text}
              onPress={item.functionCall}
            />
          )
        })
      }
    </>
  )
}
export default DrawerCustomItemList