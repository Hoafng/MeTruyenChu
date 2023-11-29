import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function Notification({navigation}){
   
    
    return (
        <View  style={styles.container}>
            <View  style={styles.title}>
        <View style={{ flexDirection: 'row',
        alignItems: 'center'}}>
          <Text style={styles.text}>Thông báo</Text>
        </View>
            <TouchableOpacity style={styles.theLoai}>
                <MaterialCommunityIcons name="playlist-check" size={30} color="white"/>
            </TouchableOpacity>

        </View>
        <ScrollView>
            <View style={styles.Notification}>
                <MaterialIcons name="notifications" size={200} color="black"/>
                <Text>Chưa có thông báo mới</Text>
            </View>
            
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text:{
        fontSize:20,
        color:'#FFFFFF'
    },
    title:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        height:'10%',
        width:'100%',
        backgroundColor:'#101010',
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
    Notification:{
        justifyContent:'space-around',
        alignItems:'center'
    },
})
