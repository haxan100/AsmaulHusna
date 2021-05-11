/* eslint-disable */ 
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DoaHarianLink,AsmaulLink } from '../app/utils/Link/Link'

export default function DoaHarian() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getData()

    }, [getData])

    const getData = () =>{
        axios.get(DoaHarianLink).then((r)=>{
            setData(r.data.result.data)
            setLoading(false)
            // console.log(r.data.result.data)
        }).catch(e=>console.log('error  : '+e)) 
    }

    // getData()
    console.log(data)
    
    
    return (
        <ScrollView>
            {
                loading == true ? <Text>Loading.....</Text> : 
                // console.log("datanya => " ,data);
                data.map((data,index)=>{
                    return (
                        <View key={index}>
                            <Text>{data.title}</Text>
                            <Text>{data.arabic}</Text>
                            <Text>{data.latin}</Text>
                            <Text>{data.translation}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
