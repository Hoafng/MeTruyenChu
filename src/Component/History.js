import { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Readed } from "../data/Readed";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function History({navigation}){
   
    const [data,setData] = useState(Readed);
    return (
        <View  style={styles.container}>
        <View  style={styles.header}>
        <View style={{ flexDirection: 'row',
        alignItems: 'center',}}>
          <Text style={styles.tittle}>Tủ truyện</Text>
        </View>
            <TouchableOpacity style={styles.theLoai}>
                <SimpleLineIcons name="setting" size={30} color="white"/>
            </TouchableOpacity>

        </View>
        <ScrollView>
            <FlatList
                data={data}
                renderItem={({item})=> (
                    <TouchableOpacity style={styles.item}>
                        <Image source={{uri:item.imgUrl}}
                        style = {styles.image}/>
                        <Text style={styles.name}>
                            {item.name}<br/>
                            Chap đã đọc: {item.readed}
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
    tittle:{
        fontSize:25,
    },
    item:{
        width:'100%',
        flexDirection:'row'
    },
    theLoai:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width:'20%',
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
