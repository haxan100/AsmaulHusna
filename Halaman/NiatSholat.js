/* eslint-disable */ 
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { NiatSholatLink } from '../app/utils/Link/Link'

export default function NiatSholat() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
        
    }, [getData])

    const getData = () => {
        axios.get(NiatSholatLink).then((e)=>{
            var data = e.data.result
            setData(data)
            setLoading(false)            
        }).catch((e)=>alert(e))
    }

    return (
        <ScrollView>
            {
                loading == true ? <Text>Loading..... </Text> :
                data.map((data,index)=>{
                    return(
                        <View>
                            <Text key={index}>{data.id}</Text>
                            <Text >{data.name}</Text>
                            <Text >{data.arabic}</Text>
                            <Text >{data.latin}</Text>
                            <Text >{data.terjemahan}</Text>
                        </View>
                    )
                })
            
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
