import React from 'react'
import {
    View,
    Text,
    TextInput,

} from 'react-native'

import SearchBar from './Components/SearchBar'

class Screen extends React.Component {
    render(){
        return(
            <View>
                <SearchBar/>
            </View>
        )
    }
}