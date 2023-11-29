import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList, Text } from 'react-native';

import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, View} from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';






export default function Story({route}) {
  const { item } = route.params;
  const navigation= useNavigation();
 
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Giới thiệu' },
    { key: 'second', title: 'Đánh giá' },
    { key: 'third', title: 'Bình luận' },
    { key: 'four', title: 'D.S chương' },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: 'gray' }}
    />
  );

  const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'black' }]}>
      <FlatList
        data={item.coment}
        renderItem={({item})=>(    
          <Text style={styles.name}>
              {item.user_name} : {item.content}
          </Text>    
        )}
      />
    </View>
  );
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'black' }]}>
      <FlatList
        data={item.feedback}
        renderItem={({item})=>(    
          <Text style={styles.name}>
              {item.user_name} : {item.content}
          </Text>    
        )}
      />
    </View>
  );
  const RatingComponent = () => {
    const [rating, setRating] = useState(0);
  
    const onStarRatingPress = (rating) => {
      setRating(rating);
    };
  
    return (
      <View>
        <Text>Đánh giá truyện tranh:</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={rating}
          selectedStar={(rating) => onStarRatingPress(rating)}
          starSize={30}
        />
        <Text>Đánh giá của bạn: {rating}/5</Text>
      </View>
    );
  };

  const FourRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'black' }]}>
      <FlatList
        data={item.chapter}
        renderItem={({item})=>( 
         
          <TouchableOpacity>
              <Text style={styles.Listchapter} >
                Chapter {item.chapter_number} : {item.title}
              
              </Text> 
          </TouchableOpacity>  
             
        )}
      />
    </View>
  );

  const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'black' }]}>
      <Text style={styles.textDes}>{item.des}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
     <View  style={styles.title}>
        <View style={{alignItems: 'center',}}>
          <TouchableOpacity style={styles.back}
            onPress={()=> navigation.goBack('List')} >
            <Image style={{width:'40px',height:'40px',marginLeft:10, justifyContent:'center'}} source={require("../assets/Icon Button 11.png")}/>
            </TouchableOpacity>
        </View>
        <View style={styles.rowImage}>
          <Image source={{uri:item.img}}
            style = {styles.image}/>
          <View style={{flexDirection:'column',marginLeft:10,justifyContent:'space-around'}}>
            <View> 
              <Text style={styles.textImg}>{item.story_title}</Text>
              <Text style={styles.textAuthor}>bởi {item.author}</Text>
            </View>
            <TouchableOpacity style={styles.btnDocTruyen} onPress={()=>navigation.navigate('Chapter',{chapter:1,item:item})}>
              <Text style={{fontSize:12,color:'white'}}>Đọc truyện</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </View>

      <View style={{width:'100%',height:700}}>
      <TabView
                navigationState={{ index, routes }}
                renderScene={SceneMap({
                  first: FirstRoute,
                  second: SecondRoute,
                  third: ThirdRoute,
                  four: FourRoute,
                })}
                onIndexChange={setIndex}
                initialLayout={{width: 300}}
                renderTabBar={renderTabBar}
            />
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height:200,
    width:'100%',
    backgroundColor:'green'
  },
  rowImage:{
    flexDirection:'row',
  },
  image:{
    width:100,
    height:120,
    alignItems: 'center',
} ,
textImg:{
  fontSize:15,
  color:'white'
},
textAuthor:{

  fontSize:13,
  color:'white'
},
name:{
  height:20,
  marginTop: 10,
  marginLeft:10,
  color:'white',
  fontWeight:"bold",
},
btnDocTruyen:{
  borderWidth:1,
  borderRadius:20,
  backgroundColor:'blue',
  justifyContent:'center',
  alignItems:'center',
  width:100,
  height:30
},
scene: {
  flex: 1,
},
textDes:{
  margin:20,
  fontStyle:'italic',
  fontSize:20,
  color:'white'
},
Listchapter:{
  padding:20,
  color:'white',
  fontWeight:"bold",
  fontSize:20,
},
});