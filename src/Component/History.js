import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function History({navigation}){
   
    const [user, setUser] = useState({});
    useEffect(() => {  
        fetchData();
        
      }, []);
    const fetchData = async () => {
    try {
      const userSignin = await AsyncStorage.getItem('email');
      if (userSignin) {
        const response = await fetch('http://localhost:3000/User');
        const db = await response.json();
        const userfind = db.find((userfind) => userfind.email === userSignin);
        if (userfind) {
          setUser(userfind);
        } else {
          alert('Error', 'User not found in the database');
        }
        
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error', 'An error occurred while fetching data');
    }
  };
 
    return (
        <View  style={styles.container}>
        <View  style={styles.header}>
        <View style={{ flexDirection: 'row',
        alignItems: 'center',}}>
          <Text style={styles.tittle}>Lịch sử</Text>
        </View>
            {/* <TouchableOpacity style={styles.theLoai}>
                <SimpleLineIcons name="setting" size={30} color="white"/>
            </TouchableOpacity> */}

        </View>
        <ScrollView style={{backgroundColor:'gray',width:'100%'}}>
            <FlatList
                data={user.read_stories}
                renderItem={({item})=> (
                  <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Chapter',{chapter:item.last_read_chapter,item:item})}>
                  <Image source={{ uri: item.img }} style={styles.image} />
                  <Text style={styles.name}>
                    {item.story_title}<br/>
                    Chap đã đọc: {item.last_read_chapter}
                  </Text>
                </TouchableOpacity>
                )}
                
                numColumns={1}
                
            />
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    tittle:{
        fontSize:20,
        color:'white',
    },
    item:{
        width:'100%',
        flexDirection:'row',
        padding:15
    },
    theLoai:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width:150,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flex:'column'
    } ,
    name:{
        height:100,
        marginTop: 10,
        marginLeft:10,
        fontWeight:"bold",
        color:'white',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        height:'10%',
        width:'100%'
      },
})
