import {CustomButton, Text, Wrapper} from '@components';
import {RF, SCREEN_WIDTH} from '@theme';
import {useTheme} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  FlatList,
  useWindowDimensions,
  Image,
} from 'react-native';
import {SlidingDot} from 'react-native-animated-pagination-dots';
import {onboard1, onboard2} from '@assets';

interface ItemProps {
  key: string;
  img: any;
  title: string;
  description: string;
}

const INTRO_DATA = [
  {
    key: '1',
    img: onboard1,
    title: 'Find your  Comfort Food here',
    description:
      'Here You Can Find A Chef Or Dish For Every Taste And Color. Enjoy!',
  },
  {
    key: '2',
    img: onboard2,
    title: 'Local Baba Is Where Your Comfort Food Lives',
    description: 'Enjoy A Fast And Smooth Food Delivery At Your Doorstep',
  },
];

const OnBoarding = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const {width} = useWindowDimensions();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<ItemProps> | null>(null);
  const [lastLoggedIndex, setLastLoggedIndex] = useState(-1);

  console.log(currentIndex, 'current index');
  const scrollToIndex = React.useCallback(
    (index: any) => {
      if (index >= 0 && index < INTRO_DATA.length) {
        setCurrentIndex(index);
        // console.log(lastLoggedIndex, 'index');

        flatListRef.current?.scrollToIndex({index, animated: true});
      }
    },

    [setCurrentIndex],
  );
  const renderItem = React.useCallback(
    ({item, index}: {item: ItemProps; index: number}) => {
      return (
        <View style={[styles.itemContainer, {width: width - 80}]}>
          <Image
            source={item.img}
            style={{
              height: RF(400),
              width: width,
              resizeMode: 'contain',
              marginTop: RF(50),
              // backgroundColor: 'green',
            }}
          />
          <Text
            style={{
              marginTop: RF(40),
              width: width - 20,
              textAlign: 'center',
              alignSelf: 'center',
            }}
            color={colors.darkText}
            semiBold
            size={18}>
            {item.title}
          </Text>
          <Text
            center
            style={{marginTop: RF(16)}}
            color={colors.black}
            size={12}>
            {item.description}
          </Text>
        </View>
      );
    },
    [width],
  );
  const keyExtractor = React.useCallback((item: ItemProps) => item.key, []);
  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex !== currentIndex) {
      // console.log(nextIndex, 'button click index');
    }
    if (nextIndex === 2) {
      navigation.navigate('Login');
    } else {
      scrollToIndex(nextIndex);
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <Wrapper noPadding translucent statusBarBagColor={'transparent'}>
      <View style={{flex: 1}}>
        <FlatList
          onMomentumScrollEnd={e => {
            const contentOffsetX = e.nativeEvent.contentOffset.x;
            const index = Math.round(contentOffsetX / width);
            // Log the index only if it has changed since the last scroll
            if (index !== lastLoggedIndex) {
              console.log(index, 'onMomentumScrollEnd index');
              setLastLoggedIndex(index);
              setCurrentIndex(index);
            }
          }}
          ref={ref => (flatListRef.current = ref)}
          data={INTRO_DATA}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          style={styles.flatList}
          pagingEnabled
          horizontal
          decelerationRate={'normal'}
          scrollEventThrottle={16}
          renderItem={renderItem}
        />

        <View style={{padding: RF(24), paddingBottom: RF(60)}}>
          <CustomButton
            title={'NEXT'}
            handlePress={handleNext}
            containerStyle={{
              height: RF(57),
              width: RF(157),
              backgroundColor: colors.primary,
            }}
          />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  flatList: {
    flex: 1,
  },

  itemContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 40,
    overflow: 'visible',
  },
});

export default OnBoarding;
