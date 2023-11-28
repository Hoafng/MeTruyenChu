import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function List({navigation}){
   
    const [data,setData] = useState('');
    useEffect(() => {
        
        fetchData();
      }, []);
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/Truyen'); // URL của JSON Server
          const db = await response.json();
          setData(db)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    return (
        <View  style={styles.container}>
        <View  style={styles.title}>
        <View style={{ flexDirection: 'row',alignItems: 'center',}}>
          <TouchableOpacity style={styles.back}
            onPress={()=> navigation.navigate('Home')} >
            <Image style={{width:'40px',height:'40px',marginLeft:10, justifyContent:'center'}} source={require("../assets/Icon Button 11.png")}/>
            </TouchableOpacity>
        </View>
            <TouchableOpacity style={styles.theLoai}>
                <Feather name="grid" size={30} color="black"/>
            </TouchableOpacity>

        </View>
        <ScrollView>
            <FlatList
                data={data}
                renderItem={({item})=> (
                    <TouchableOpacity style={styles.item}>
                        <Image source={{uri:item.img}}
                        style = {styles.image}/>
                        <Text style={styles.name}>
                            {item.story_title}
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
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    item:{
        width:300,
        flexDirection:'row'
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
    },
    title:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        height:'10%',
        width:'100%'
      },
})
