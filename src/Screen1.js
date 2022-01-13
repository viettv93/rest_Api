 import React from "react"
 import { Text, TouchableOpacity, View } from "react-native"


const Screen1 = () => {
    const onPress=()=>{
        fetch('https://sandbox.izivan.com.vn/api/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'admin@gmail.com',
                password: '123123'
            })
          }).then(async (response) => {
                const data = await response.json()
                console.log(data)
          });
    }
    return(
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={onPress}
            style={{width:60, height:40, backgroundColor: 'red'}}>
                <Text >an vao</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen1