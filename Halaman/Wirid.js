/* eslint-disable */ 

import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { WiridLink } from '../app/utils/Link/Link';

const Wirid = () => {
    
const [data, setData] = useState()
const [loading, setLoading] = useState(true)

useEffect(() => {   
    getData()
},[getData] )

    const getData = () =>{
        axios.get(WiridLink).then((e)=>{
            // console.log(e)
            setData(e.data.result.data)
            setLoading(false)
        }).catch((e)=>alert(e))
    }

    return (
        <ScrollView>
            {
                loading == true ? <Text>Loading.....</Text>:
                data.map((datakuh,index)=>{
                    return (
                        <View>
                            <Text key={index}>Dibaca : {datakuh.times} X</Text>
                            <Text>{datakuh.arabic}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default Wirid

const styles = StyleSheet.create({})
