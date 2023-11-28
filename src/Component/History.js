import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export default function History({navigation}){
   
    const [user, setUser] = useState(null);
    useEffect(() => {
        
        fetchData();
      }, []);
    const fetchData = async () => {
    try {
      const userSignin = await AsyncStorage.getItem('email');
      if (userSignin) {
        const response = await fetch('http://localhost:3000/User');
        const db = await response.json();
        const userfind = db.find((u) => u.email === userSignin);
        if (userfind) {
          setUser(userfind);
        } else {
          Alert.alert('Error', 'User not found in the database');
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', 'An error occurred while fetching data');
    }
  };
    return (
        <View  style={styles.container}>
        <View  style={styles.header}>
        <View style={{ flexDirection: 'row',
        alignItems: 'center',}}>
          <Text style={styles.tittle}>Lịch sử</Text>
        </View>
            <TouchableOpacity style={styles.theLoai}>
                <SimpleLineIcons name="setting" size={30} color="white"/>
            </TouchableOpacity>

        </View>
        <ScrollView>
            <FlatList
                data={user}
                renderItem={({item})=> (
                    <View>
                    {item.read_stories.map((story, index) =>
                    <TouchableOpacity style={styles.item}>
                        <Image source={{uri:"https://static.cdnno.com/poster/huan-luyen-gia-tang-lop-thap-nhat-cua-the-gioi-pokemon/150.jpg?1632913069"}}
                        style = {styles.image}/>
                        <Text style={styles.name}>
                            {item.email}<br/>
                            Chap đã đọc: {item.password}
                        </Text>
                       
                    </TouchableOpacity>
                    )}
                    </View>
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
    tittle:{
        fontSize:20,
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
