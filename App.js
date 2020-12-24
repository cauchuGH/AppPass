import React,{Component} from 'react'
import{
  View,
  Text,
  FlatList,

} from 'react-native'

import SearchBar from './src/Components/SearchBar'
import AddPass from './src/Components/AddPass'

export default class App extends Component{
  render(){
    return(
      <AddPass></AddPass>
    )
  }
} 
