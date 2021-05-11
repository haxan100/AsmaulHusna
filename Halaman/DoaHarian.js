/* eslint-disable */ 
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DoaHarianLink,AsmaulLink } from '../app/utils/Link/Link'

export default function DoaHarian() {
    const [Loading, setLoading] = useState(true)
    const [data, setData] = useState()
    useEffect(() => {
        getData()

    }, [getData])

    const getData = () =>{
        axios.get(DoaHarianLink).then((r)=>{
            setLoading(false)
            setData(r.data.result.data)
        }).catch(e=>console.log('error  : '+e)) 
    }

    // getData()
    
    
    return (
        <ScrollView>
            {
                Loading == true ? <Text>Loading.....</Text> :
                data.map((data,index)=>{
                    return (
                        <View key={index}>
                            <Text >{data.title}</Text>
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
