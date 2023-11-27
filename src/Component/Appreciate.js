import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const Appreciate = () => {
  return (
    <View style={styles.Appreciate}>
      <View style={styles.Appreciate__left}>
        <View style={styles.Appreciate__left__title}>
          <Text style={styles.h1}>Đánh giá cao</Text>
          <TouchableOpacity>
            <Text style={styles.Appreciate__left__title__link}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.Appreciate__left__container}>
          {DanhGiaCao.map((item, index) => (
            <View key={index} style={styles.Appreciate__left__container__item}>
              <TouchableOpacity style={styles.Appreciate__left__container__item__link}>
                <Image source={{ uri: item.imgUrl }} style={styles.img} />
              </TouchableOpacity>
              <View style={styles.Appreciate__left__container__item__info}>
                <TouchableOpacity style={styles.Appreciate__left__container__item__info__title}>
                  <Text style={styles.h1}>{item.name}</Text>
                </TouchableOpacity>
                <View style={styles.Appreciate__left__container__item__info__appreciate}>
                  <Text style={styles.span}>{item.appreciate}</Text>
                  <Text style={styles.p}>{item.countAppreciate} đánh giá</Text>
                </View>
                <View style={styles.Appreciate__left__container__item__info__description}>
                  <Text style={styles.p}>{item.description}</Text>
                </View>
                <View style={styles.Appreciate__left__container__item__info__actor}>
                  <View style={styles.Appreciate__left__container__item__info__actor__left}>
                    <PersonOutline style={styles.Appreciate__left__container__item__info__actor__icon} />
                    <Text style={styles.p}>{item.actor}</Text>
                  </View>
                  <View style={styles.Appreciate__left__container__item__info__tag}>
                    <Text style={styles.span}>{item.tag}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.Appreciate__right}>
        <View style={styles.Appreciate__right__title}>
          <Text style={styles.h1}>Mới đánh giá</Text>
          <TouchableOpacity>
            <Text style={styles.Appreciate__right__title__link}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.Appreciate__right__container}>
          {MoiDanhGia.map((item, index) => (
            <View key={index} style={styles.Appreciate__right__container__item}>
              <View style={styles.Appreciate__right__container__item__top}>
                <View style={styles.Appreciate__right__container__item__top__left}>
                  <TouchableOpacity>
                    <Image source={{ uri: item.imgUrl }} style={styles.img} />
                  </TouchableOpacity>
                </View>
                <View style={styles.Appreciate__right__container__item__top__right}>
                  <View style={styles.Appreciate__right__container__item__top__right__title}>
                    <Text style={styles.h1}>{item.user}</Text>
                    <Text>đánh giá</Text>
                  </View>
                  <View style={styles.Appreciate__right__container__item__top__right__book}>
                    <Text style={styles.h1}>{item.book}</Text>
                    <Text style={styles.span}>{item.star}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.Appreciate__right__container__item__bottom}>
                <Text style={styles.p}>{item.comment}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = {
  Appreciate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    position: 'relative',
    width: 1200,
    marginBottom: 50,
  },
  Appreciate__left: {
    flexDirection: 'column',
    width: '68%',
  },
  Appreciate__left__title: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    h1: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 20,
      paddingBottom: 10,
      marginLeft: 20,
    },
    Appreciate__left__title__link: {
      color: '#b78a28',
    },
  },
  Appreciate__left__container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  Appreciate__left__container__item: {
    flexDirection: 'row',
    width: '48%',
    height: 140,
    marginBottom: 48,
  },
  Appreciate__left__container__item__link: {
    img: {
      width: 72,
      height: 96,
    },
  },
  Appreciate__left__container__item__info: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  Appreciate__left__container__item__info__title: {
    textDecoration: 'none',
    color: '#333',
    h1: {
      fontWeight: '600',
      lineHeight: 20,
      fontSize: 15,
      display: 'none',
    },
  },
  Appreciate__left__container__item__info__appreciate: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
    span: {
      backgroundColor: '#bf2c24',
      color: 'white',
      padding: 4,
      borderRadius: 15,
    },
    p: {
      fontSize: 15,
      lineHeight: 20,
      marginLeft: 5,
      color: '#088860',
    },
  },
  Appreciate__left__container__item__info__description: {
    p: {
      fontSize: 15,
      lineHeight: 20,
      color: '#666666',
    },
  },
  Appreciate__left__container__item__info__actor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    Appreciate__left__container__item__info__actor__left: {
      flexDirection: 'row',
      alignItems: 'center',
      Appreciate__left__container__item__info__actor__icon: {
        width: 20,
        color: '#666666',
        marginRight: 5,
      },
      p: {
        fontSize: 15,
        lineHeight: 20,
        color: '#666666',
      },
    },
    Appreciate__left__container__item__info__tag: {
      span: {
        border: '1px solid #b78a28',
        color: '#b78a28',
        fontSize: 12,
        padding: 3,
        cursor: 'pointer',
      },
    },
  },
  Appreciate__right: {
    width: '30%',
    flexDirection: 'column',
  },
  Appreciate__right__title: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    h1: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 20,
      paddingBottom: 10,
      marginLeft: 20,
    },
    Appreciate__right__title__link: {
      color: '#b78a28',
    },
  },
  Appreciate__right__container: {
    flexDirection: 'column',
    width: '100%',
  },
  Appreciate__right__container__item: {
    flexDirection: 'column',
    backgroundColor: '#f7f5f0',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
    padding: '16px 24px 24px 24px',
    Appreciate__right__container__item__top: {
      flexDirection: 'row',
      width: '100%',
      Appreciate__right__container__item__top__left: {
        img: {
          borderRadius: 50,
          marginRight: 16,
        },
      },
      Appreciate__right__container__item__top__right: {
        flexDirection: 'column',
        width: '100%',
        Appreciate__right__container__item__top__right__title: {
          flexDirection: 'row',
          alignItems: 'center',
          h1: {
            fontSize: 15,
            lineHeight: 20,
            fontWeight: '600',
            marginRight: 5,
          },
        },
        Appreciate__right__container__item__top__right__book: {
          color: '#bf2c24',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          h1: {
            fontSize: 15,
            lineHeight: 24,
            fontWeight: '600',
            cursor: 'pointer',
            display: 'none',
          },
          span: {
            backgroundColor: '#bf2c24',
            color: 'white',
            padding: '4px 8px',
            borderRadius: 15,
            height: 21,
          },
        },
      },
    },
    Appreciate__right__container__item__bottom: {
      width: '100%',
      p: {
        width: '100%',
        paddingTop: 10,
        fontSize: 15,
        lineHeight: 20,
        color: '#666666',
      },
    },
  },
  // Add more styles as needed
};

export default Appreciate;
