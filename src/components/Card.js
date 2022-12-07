import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';

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
    width: 180,
    height: 180,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent:'center',
    margin: 5,
  },
});
