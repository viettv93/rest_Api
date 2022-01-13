import React from "react"
import { Image, TextInput, TouchableOpacity, View, Text } from "react-native"

const Login = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
            <Image source={require('../login/image/nen.png')} style={{ marginBottom: 20 }} />
            <Image source={require('../login/image/sally.png')} style={{ marginBottom: 20 }} />

            <TextInput placeholder="Email" style={{ borderWidth: 1, width: '98%', marginBottom: 20 }} />
            <View style={{ borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <TextInput placeholder="Password" style={{ width: '89%' }} />
                <Image source={require('../login/image/hiden.png')}
                    style={{ marginRight: 9 }} />
            </View>
            <TouchableOpacity style={{backgroundColor: '#1E57F1', justifyContent:'center', alignItems:'center', width:'98%', height:'7%'}}>
                <Text style={{padding: 5 , color: 'white'}}>Login</Text>
            </TouchableOpacity>
            
            <Image source={require('../login/image/text.png')}
             resizeMode='contain'
             style={{marginTop: 20}}/>
            
            
        </View>
    )
}

export default Login