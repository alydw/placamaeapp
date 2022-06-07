
import Stacks from './Stacks'
import Tabs from './Tabs'
import React, { useState, useContext } from 'react'

import { View } from 'react-native'
import { AuthContext } from '../provider'

const Navigation = ({cadastro}) => {
   
  
  
  return (
      <View style={{flex:1}}>
          {
            cadastro ? 
            <Tabs/>
            : 
            <Stacks/>
          }
      </View>
  )
}

export default Navigation