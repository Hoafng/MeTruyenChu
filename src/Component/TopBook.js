import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const TopBook = () => {
  return (
    <View style={styles.TopBook}>
      <View style={styles.TopBook__item}>
        <View style={styles.TopBook__header}>
          <Text style={styles.TopBook__title}>Đọc nhiều tuần</Text>
          <TouchableOpacity>
            <Text style={styles.TopBook__header__link}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.TopBook__content}>
          {DocNhieu.map((item, index) => (
            <View key={index} style={styles.TopBook__content__item}>
              {index === 0 && (
                <Image
                  source={{ uri: 'https://metruyenchu.com/assets/images/icons/medal-1.svg' }}
                  style={styles.TopBook__content__item__rank__img}
                />
              )}
              {index === 1 && (
                <Image
                  source={{ uri: 'https://metruyenchu.com/assets/images/icons/medal-2.svg' }}
                  style={styles.TopBook__content__item__rank__img}
                />
              )}
              {index === 2 && (
                <Image
                  source={{ uri: 'https://metruyenchu.com/assets/images/icons/medal-3.svg' }}
                  style={styles.TopBook__content__item__rank__img}
                />
              )}
              {index !== 0 && index !== 1 && index !== 2 && (
                <Text style={styles.TopBook__content__item__rank}>{index + 1}</Text>
              )}
              <View style={styles.TopBook__item__content}>
                <View style={styles.TopBook__item__left}>
                  <Text style={styles.h1}>{item.name}</Text>
                  {index === 0 && (
                    <>
                      <Text>{item.views} lượt đọc</Text>
                      <View style={styles.TopBook__item__left__actor}>
                        <PersonOutline style={styles.TopBook__item__left__actor__icon} />
                        <Text>{item.actor}</Text>
                      </View>
                      <View style={styles.TopBook__item__left__tag}>
                        <BookOutlined style={styles.TopBook__item__left__tag__icon} />
                        <Text>{item.tag}</Text>
                      </View>
                    </>
                  )}
                </View>
                <View style={styles.TopBook__item__right}>
                  {index !== 0 ? (
                    <Text>{item.views}</Text>
                  ) : (
                    <TouchableOpacity>
                      <Image source={{ uri: item.imgUrl }} style={styles.img} />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* Thêm mã nguồn cho "Thịnh hành tuần" và "Đề cử tuần" ở đây */}
    </View>
  );
};

const styles = {
  TopBook: {
    width: 1200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  TopBook__item: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '31.5%',
    boxShadow: '0 10px 25px 0 #d7d4ce',
    borderRadius: 10,
    ':hover': {
      TopBook__header: {
        TopBook__header__link: {
          display: 'block',
        },
      },
    },
  },
  TopBook__header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  TopBook__title: {
    fontSize: 1.25,
    fontWeight: '600',
    lineHeight: 1.2,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  TopBook__header__link: {
    textDecoration: 'none',
    color: '#b78a28',
    fontSize: 1,
    display: 'none',
    marginRight: 10,
  },
  TopBook__content: {
    flexDirection: 'column',
  },
  TopBook__content__item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(206, 206, 206, 0.5)',
    padding: 10,
  },
  TopBook__content__item__rank: {
    padding: 5,
    textAlign: 'center',
    alignItems: 'center',
  },
  TopBook__item__content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    padding: 10,
  },
  TopBook__item__left: {
    h1: {
      fontSize: 0.9375,
      fontWeight: '500',
      padding: 5,
      display: '-webkit-box',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      cursor: 'pointer',
      ':hover': {
        color: '#b78a28',
      },
    },
    p: {
      color: '#088860',
      fontSize: 0.9,
      padding: 5,
    },
    TopBook__item__left__actor: {
      flexDirection: 'row',
      alignItems: 'center',
      TopBook__item__left__actor__icon: {
        width: 1.5,
        height: 1.5,
        marginRight: 5,
        color: 'rgb(117, 116, 116)',
      },
      p: {
        color: '#333',
      },
    },
    TopBook__item__left__tag: {
      flexDirection: 'row',
      alignItems: 'center',
      TopBook__item__left__tag__icon: {
        width: 1.5,
        height: 1.5,
        marginRight: 5,
        color: 'rgb(117, 116, 116)',
      },
      p: {
        color: '#333',
      },
    },
  },
  TopBook__item__right: {
    flexDirection: 'row',
    img: {
      width: 70,
      height: 105,
      outline: '1px solid transparent',
      cursor: 'pointer',
    },
    p: {
      color: '#088860',
    },
  },
};
export default TopBook;
