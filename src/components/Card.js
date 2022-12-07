import {View, Text, Image, Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Card = props => {
  return (
    <View style={style.view}>
      <Image style={style.image} source={{uri: props.item.image}} />
      <Text>
        {props.item.id} : {props.item.name}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
  },
  view: {
    width: windowWidth / 2 - 10,
    height: windowWidth / 2 - 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.50)',
  },
});
