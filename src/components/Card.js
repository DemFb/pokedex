import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';

export const Card = props => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: props.item.image}} />
      <Text>
        {props.item.id} : {props.item.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: 200,
    backgroundColor: 'gray',
    borderRadius: 25,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 80,
    width: 80,
  },
});
