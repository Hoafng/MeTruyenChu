import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper/src'
import { newUpdate } from '../data/NewUpdate';
import { MoiHoanThanh } from '../data/MoiHoanThanh';
import { useNavigation } from '@react-navigation/native';

const NewBook = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.NewBook}>
      <View style={styles.NewBook__left}>
        <View style={styles.NewBook__left__title}>
          <Text style={styles.h1}>Mới đăng</Text>
          <TouchableOpacity onPress={() => navigation.navigate('XemTatCa')}>
            <Text style={styles.NewBook__left__title__link}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.NewBook__left__swiper}>
          <Swiper
            showsPagination={false}
            autoplay={true}
            autoplayTimeout={2.5}
            horizontal={true}
          >
            {newUpdate.map((item, index) => (
              <View style={styles.mySwiper__item} key={index}>
                <TouchableOpacity style={styles.mySwiper__item__link}>
                  <Image source={{ uri: item.imgUrl }} style={styles.img} />
                </TouchableOpacity>
                <View style={styles.NewBook__left__name}>
                  <Text style={styles.h1}>{item.name}</Text>
                </View>
                <View style={styles.NewBook__left__description}>
                  <Text style={styles.p}>{item.description}</Text>
                </View>
                <View style={styles.NewBook__left__actor}>
                  <View style={styles.NewBook__left__actor__left}>
                    <Image
                      source={require('../assets/logo.png')}
                      style={styles.NewBook__left__actor__icon}
                    />
                    <Text style={styles.p}>{item.actor}</Text>
                  </View>
                  <View style={styles.NewBook__left__tag}>
                    <Text style={styles.span}>{item.tag}</Text>
                  </View>
                </View>
              </View>
            ))}
          </Swiper>
        </View>
        <View style={styles.NewBook__left__btn}>
          <TouchableOpacity style={styles.NewBook__left__btn__link} onPress={() => navigation.navigate('DocNgay')}>
            <Text style={styles.NewBook__left__btn__link__text}>Đọc ngay</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.NewBook__right}>
        <View style={styles.NewBook__right__title}>
          <Text style={styles.h1}>Mới hoàn thành</Text>
          <TouchableOpacity onPress={() => navigation.navigate('XemTatCa')}>
            <Text style={styles.NewBook__right__title__link}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.NewBook__right__container}>
          {MoiHoanThanh.map((item, index) => (
            <View style={styles.NewBook__right__container__item} key={index}>
              <TouchableOpacity style={styles.NewBook__right__container__item__link}>
                <Image source={{ uri: item.imgUrl }} style={styles.img} />
              </TouchableOpacity>
              <View style={styles.NewBook__right__container__item__info}>
                <TouchableOpacity style={styles.NewBook__right__container__item__info__title} onPress={() => navigation.navigate('ChiTiet', { id: item.id })}>
                  <Text style={styles.h1}>{item.name}</Text>
                </TouchableOpacity>
                <View style={styles.NewBook__right__container__item__info__description}>
                  <Text style={styles.p}>{item.description}</Text>
                </View>
                <View style={styles.NewBook__right__container__item__info__actor}>
                  <View style={styles.NewBook__right__container__item__info__actor__left}>
                    <Image
                      source={require('../assets/logo.png')}
                      style={styles.NewBook__right__container__item__info__actor__icon}
                    />
                    <Text style={styles.p}>{item.actor}</Text>
                  </View>
                  <View style={styles.NewBook__right__container__item__info__tag}>
                    <Text style={styles.span}>{item.tag}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = {
  NewBook: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 1200,
    marginBottom: 20,
  },
  NewBook__left: {
    flexDirection: 'column',
    width: '30%',
    backgroundColor: '#f7f5f0',
    borderRadius: 10,
    height: '100%',
    NewBook__left__title: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
      h1: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 22,
        paddingBottom: 10,
        marginLeft: 20,
      },
      NewBook__left__title__link: {
        color: '#b78a28',
      },
    },
    NewBook__left__swiper: {
      position: 'relative',
      alignItems: 'center',
      mySwiper__item: {
        flexDirection: 'column',
        alignItems: 'center',
        mySwiper__item__link: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        },
        NewBook__left__name: {
          marginTop: 10,
          h1: {
            marginBottom: 12,
            fontSize: 17,
            fontWeight: '600',
            lineHeight: 20,
            textAlign: 'center',
            width: 320,
          },
        },
        NewBook__left__description: {
          width: 320,
          p: {
            fontSize: 15,
            lineHeight: 20,
            color: '#666666',
            overflow: 'hidden',
          },
        },
        NewBook__left__actor: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 320,
          marginTop: 10,
          NewBook__left__actor__left: {
            flexDirection: 'row',
            alignItems: 'center',
            NewBook__left__actor__icon: {
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
          NewBook__left__tag: {
            span: {
              borderWidth: 1,
              borderColor: '#b78a28',
              color: '#b78a28',
              fontSize: 12,
              padding: 3,
              cursor: 'pointer',
            },
          },
        },
      },
      NewBook__left__swiper__icon: {
        position: 'absolute',
        top: 100,
        zIndex: 99,
        color: '#333',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        cursor: 'pointer',
        right: 10,
        left: 10,
        transform: [{ rotate: '180deg' }],
      },
    },
    NewBook__left__btn: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 20,
      NewBook__left__btn__link: {
        color: 'white',
        backgroundColor: '#bf2c24',
        padding: 8,
        borderRadius: 20,
      },
    },
  },
  NewBook__right: {
    flexDirection: 'column',
    width: '68%',
    NewBook__right__title: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
      h1: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 22,
        paddingBottom: 10,
        marginLeft: 20,
      },
      NewBook__right__title__link: {
        color: '#b78a28',
      },
    },
    NewBook__right__container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      NewBook__right__container__item: {
        flexDirection: 'row',
        width: '48%',
        height: 110,
        marginBottom: 48,
        NewBook__right__container__item__link: {
          img: {
            width: 72,
            height: 96,
          },
        },
        NewBook__right__container__item__info: {
          flexDirection: 'column',
          marginLeft: 10,
          justifyContent: 'space-between',
          NewBook__right__container__item__info__title: {
            textDecorationLine: 'none',
            color: '#333',
            h1: {
              fontWeight: '600',
              lineHeight: 20,
              fontSize: 15,
            },
          },
          NewBook__right__container__item__info__description: {
            p: {
              fontSize: 15,
              lineHeight: 20,
              color: '#666666',
              overflow: 'hidden',
            },
          },
          NewBook__right__container__item__info__actor: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            NewBook__right__container__item__info__actor__left: {
              flexDirection: 'row',
              alignItems: 'center',
              NewBook__right__container__item__info__actor__icon: {
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
            NewBook__right__container__item__info__tag: {
              span: {
                borderWidth: 1,
                borderColor: '#b78a28',
                color: '#b78a28',
                fontSize: 12,
                padding: 3,
                cursor: 'pointer',
              },
            },
          },
        },
      },
    },
  },
};

export default NewBook;
