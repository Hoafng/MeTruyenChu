import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { newUpdate } from '../data/NewUpdate';

const NewUpdate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mới cập nhật</Text>
        <TouchableOpacity>
          <Text style={styles.headerLink}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        {newUpdate.map((item, index) => (
          <View
            key={index}
            style={index % 2 === 1 ? styles.itemEven : styles.item}
          >
            <Text style={styles.tag}>{item.tag}</Text>
            <TouchableOpacity style={styles.nameContainer}>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.updateContainer}>
              <Text style={styles.update}>{item.update}</Text>
            </TouchableOpacity>
            <Text style={styles.info}>{item.actor}</Text>
            <Text style={styles.info}>{item.user}</Text>
            <Text style={styles.info}>{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 1200,
    marginBottom: 50,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: 1200,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(192, 187, 187, 0.7)',
    paddingBottom: 20,
    paddingLeft: 20,
  },
  headerText: {
    fontSize: 1.25,
    fontWeight: '600',
    lineHeight: 1.2,
    paddingBottom: 10,
  },
  headerLink: {
    textDecorationLine: 'none',
    color: '#b78a28',
    fontSize: 1,
    display: 'none',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    ':hover': {
      backgroundColor: '#f1f1f0',
    },
  },
  itemEven: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fcfcfa',
    ':hover': {
      backgroundColor: '#f1f1f0',
    },
  },
  tag: {
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    fontSize: 0.875,
    padding: 12,
    width: '10%',
    textAlign: 'center',
  },
  nameContainer: {
    textDecorationLine: 'none',
    width: '25%',
  },
  name: {
    fontWeight: '600',
    lineHeight: 1.2,
    fontSize: 0.9375,
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    color: '#333',
  },
  updateContainer: {
    width: '25%',
    textDecorationLine: 'none',
  },
  update: {
    fontWeight: '600',
    lineHeight: 1.2,
    fontSize: 0.9375,
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    marginLeft: 10,
    color: '#333',
  },
  info: {
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    fontSize: 0.875,
    padding: 12,
    width: '20%',
    textAlign: 'center',
    fontWeight: '400',
    color: 'rgba(92, 92, 92, 0.7)',
  },
};

export default NewUpdate;
