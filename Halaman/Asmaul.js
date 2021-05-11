
/* eslint-disable */ 
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,SafeAreaView, ScrollView,StatusBar } from 'react-native'
import { AsmaulLink } from '../app/utils/Link/Link';
// import { ListItem } from 'react-native-elements'

const axios = require('axios');

const Asmaul = () => {

const [data, setData] = useState()
const [loading, setLoading] = useState(true)

  useEffect(() => {
    GetData()
  }, [GetData])
  
// var url =  'https://jsonplaceholder.typicode.com/users';

  const GetData=() =>{
    axios.get(AsmaulLink).then((r)=>{
      // console.log(r.data.result.data.data)
      setData(r.data.result.data)
      setLoading(false)

    }).catch(e=>console.log('error  : '+e)) 
  }
  // GetData()
  // console.log(data==undefined)
  // console.log(data)
  // console.log(!loading)
  console.log(loading)

    return (

        <ScrollView>
          {

            loading == true ? <Text>Loading....</Text> : 
            data.map((datanya,index)=>{          
              return (
                <SafeAreaView style={styles.container}>
                  <ScrollView style={styles.scrollView}>
                    <View style={styles.contolener}>
                      <Text>No :{datanya.index} - </Text>
                      <Text  style={styles.text}>{datanya.latin} : </Text>
                      {/* <Text>{datanya.arabic}</Text> */}
                      <Text>{datanya.translation_id}</Text>

                    </View>

                 
                 </ScrollView>
               </SafeAreaView>    
              )
             }) 
          }

            
        </ScrollView>
    )
}

export default Asmaul

const styles = StyleSheet.create({
  contolener:{
    flex:1,
    flexDirection:'row'
  },
  // container: {
  //   flex: 1,
  //   // paddingTop: StatusBar.currentHeight,
  // },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 22,
  },

})
