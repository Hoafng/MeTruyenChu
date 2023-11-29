import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, Dimensions, ScrollView } from 'react-native';
import { Text } from 'react-native';

import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, View} from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';


export default function Chapter({route}) {
  const { chapter, item } = route.params;
  const navigation= useNavigation();
  const [data,setData]=useState({});
  const[numChap,setNumchap]=useState(0);
  const[countChap,setCountchap]=useState(0);
  useEffect(() => {
    infoChap();
  }, []);
  useEffect(() => {
    handlePre();
  }, [setNumchap]);
  useEffect(() => {
    handleNext();
  }, [setNumchap]);
  const infoChap = async () => {
    try {
        const response = await fetch('http://localhost:3000/Truyen');
        const db = await response.json();
        const story = db.find(
            (story) => story.story_title === item.story_title
          );
          if (story) {
            const count = story.chapter.map((chap)=>chap.chapter_number);
            setCountchap(count.length)
            const dataChap = story.chapter.filter((chap) => chap.chapter_number === chapter);
            if(dataChap.length >0){
                setData(dataChap[0])
               }
            
          } else {
            Alert.alert('Lỗi');
          }
      } catch (errors) {
        console.error('Error fetching data:', errors);
  };
}
  const handlePre = async ()=>{
    if(data.chapter_number>1)
       {
        setNumchap(data.chapter_number-1)
        const response = await fetch('http://localhost:3000/Truyen');
        const db = await response.json();
        const story = db.find(
            (story) => story.story_title === item.story_title
          );
          if (story) {
            const dataChap = story.chapter.filter((chap) => chap.chapter_number === numChap);
            if(dataChap.length >0){
                setData(dataChap[0])
            }
          } 
    };      
  }
  const handleNext= async ()=>{
    console.log(data.chapter_number,numChap)
    if(data.chapter_number===countChap)
        setNumchap(countChap)
    else {
        setNumchap(data.chapter_number+1)
        const response = await fetch('http://localhost:3000/Truyen');
        const db = await response.json();
        const story = db.find(
            (story) => story.story_title === item.story_title
          );
          if (story) {
            const dataChap = story.chapter.filter((chap) => chap.chapter_number === numChap);
            if(dataChap.length >0){
                setData(dataChap[0])
            }
          } 
    }; 
}   
  return (
    <View style={styles.container}>
     <View  style={styles.title}>
        <View style={{alignItems: 'center',}}>
          <TouchableOpacity style={styles.back}
            onPress={()=> navigation.goBack('Story')} >
                <Feather name="chevron-left" size={30} color="white"/>
            </TouchableOpacity>
        </View>
        <Text style={{fontSize:10,color:'white'}}>Chap :{data.chapter_number} {data.title} </Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.txtContent}>
            {data.content}
        </Text>
        <View style={styles.btn}>
        <TouchableOpacity style={styles.pre} onPress={handlePre}>
         <AntDesign name="arrowleft" size={30} color="white"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pre} onPress={handleNext}>
         <AntDesign name="arrowright" size={30} color="white"/>
        </TouchableOpacity>
        </View>  
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  title:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height:70,
    width:'100%',
    backgroundColor:'black',
    flexDirection:'row'
  },
  content:{
    width:'90%',
    
  },
txtContent:{
    fontSize:15,
    color:'white'
},
btn:{
    justifyContent:'space-between',
    flexDirection:'row'
},
pre:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    backgroundColor:'gray',
    width:100,
    borderRadius:20,
},

});