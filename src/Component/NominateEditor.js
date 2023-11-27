import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { nominateEditor } from '../data/NominateEditor';

const NominateEditor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image
          source={{ uri: 'https://static.cdnno.com/storage/topbox/a7f407515a31e2cd505843260faa6ec3.jpg' }}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.wrapper}>
        <ScrollView style={styles.left}>
          <View style={styles.leftTag}>
            <Text style={styles.leftTagText}>Biên tập viên đề cử</Text>
            <TouchableOpacity>
              <Text style={styles.leftTagLink}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          {nominateEditor.map((item, index) => (
            <View style={styles.leftItem} key={index}>
              <TouchableOpacity>
                <Image source={{ uri: item.imgUrl }} style={styles.leftItemImage} />
              </TouchableOpacity>
              <View style={styles.leftItemInfo}>
                <TouchableOpacity>
                  <Text style={styles.leftItemInfoName}>{item.name}</Text>
                </TouchableOpacity>
                <Text style={styles.leftItemInfoDescription}>{item.description}</Text>
                <View style={styles.leftItemInfoActor}>
                  <PersonOutline style={styles.leftItemInfoActorIcon} />
                  <Text style={styles.leftItemInfoActorText}>{item.actor}</Text>
                  <View style={styles.leftItemInfoTag}>
                    <TouchableOpacity>
                      <Text style={styles.leftItemInfoTagText}>{item.tag}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.right}>
          {/* ... */}
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'relative',
  },
  background: {
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 1,
    top: 0,
  },
  backgroundImage: {
    width: '100%',
    height: 388,
    resizeMode: 'cover',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    position: 'relative',
    marginTop: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    zIndex: 99,
    width: 1200,
  },
  left: {
    flex: 1,
    zIndex: 99,
  },
  
};

export default NominateEditor;
