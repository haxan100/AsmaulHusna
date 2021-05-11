/* eslint-disable */ 

import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { QuranLink } from '../app/utils/Link/Link';

const Quran = () => {

 const [data, setData] = useState()
const [loading, setLoading] = useState(true)

useEffect(() => {   
    getData()
},[getData] )

    const getData = () =>{
        axios.get(QuranLink).then((e)=>{
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
                        <Text key={index}> {datakuh.number}</Text>
                        <Text>{datakuh.name.long}</Text>
                        {/* <Text>{datakuh.name.entransliteration}</Text> */}
                        {/* <Text>{datakuh.text.transliteration.en}</Text> */}
                    </View>
                )
            })
        }
    </ScrollView>
    )
}

export default Quran

const styles = StyleSheet.create({})
