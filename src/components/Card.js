import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';

export const Card = props => {
  return (
    <View
      style={{
        width: '33%',
        height: 100,
        backgroundColor: 'green',
        margin: 5,
        alignItems: 'center',
      }}>
      <Text>
        {props.item.id} : {props.item.name}
      </Text>
      <Image style={style.image} source={{uri: props.item.image}} />
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
  },
});
