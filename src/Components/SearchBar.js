import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,

} from 'react-native'

class SearchBar extends React.Component {
    render() {
        return (
            <View style={style.searchBar}>
                <View style = {style.spaceBeforeInput}/>
                <TextInput
                    style={style.searchInput}
                    placeholder='Search'
                />
                <TouchableOpacity style={style.imageTouch}>
                    <Image
                        source={require('../img/iconSearch50px.png')}
                        style={style.imageSize}
                    />
                </TouchableOpacity>

            </View>
        )
    }
}

export default SearchBar;

style = StyleSheet.create({
    searchBar: {
        height: 70,
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'

    },
    spaceBeforeInput:{
        flex:1
    },
    searchInput: {
        height: 50,
        flex:8
    },
    imageTouch:{
        right:20,
        position:'absolute'
    },
    imageSize: {
        height: 30,
        width: 30,
        
    }
})