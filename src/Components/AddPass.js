import React from 'react'

import {
    Text, 
    View,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity,

} from 'react-native'

class AddPass extends React.Component{
    render(){
        return(
            <View style = {style.container}>
                <TextInput
                    style = {style.txtIpStyle}
                    placeholder = 'Nguồn/ Trang ...'
                />
                <TextInput
                    style = {style.txtIpStyle}
                    placeholder = 'Tài khoản ...'
                />
                <TextInput
                    style = {style.txtIpStyle}
                    placeholder = 'Mật khẩu ...'
                />
                <TextInput
                    style = {style.txtIpStyle}
                    placeholder = 'Khác ...'
                    multiline
                    numberOfLines = {5}
                />
                <View style = {style.btnContainer}>
                    <TouchableOpacity 
                        style = {style.btnStyle}
                    >
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style.btnStyle} 
                    >
                        <Text>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default AddPass;

style = StyleSheet.create({
    container:{
        flexDirection:'column',
        borderColor:'gray',
        borderWidth:2,
        borderRadius:15,
    },
    txtIpStyle:{
        borderBottomWidth:2,
        borderBottomColor:'gray',
        
        marginTop:10,
        marginLeft:30,
        marginRight:30,
    },
    btnContainer:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:20,
        justifyContent:'space-around',
        alignItems:'center',
    },
    btnStyle:{
        width:100,
        height:40,
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
})
