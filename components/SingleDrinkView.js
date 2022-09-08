import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styleSheets/SingleDrinkView.style';

const fakeDesc =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

export const SingleDrinkView = ({ route, navigation }) => {
  const { drink } = route.params;
  return (
    <View>
      <View>
        <Image
          source={require('../Images/vodkaDrinks/temp.jpg')}
          style={{ width: 400, height: 250, resizeMode: 'center' }}
        />
        <Text style={styles.drinkName}> {drink.name}</Text>
        <Text style={styles.ingredi}> Ingredients: </Text>
        <View style={styles.ingrediView}>
          {drink.ingredients.map((elem, idx) => {
            return (
              <Text key={idx} style={{ width: '33%', fontSize: 15 }}>
                {elem}
              </Text>
            );
          })}
        </View>
        <Text style={styles.ingredi}> Instructions: </Text>
        <View style={{ padding: 10 }}>
          <Text>
            {'\t'}
            {fakeDesc}
          </Text>
        </View>
      </View>
    </View>
  );
};
