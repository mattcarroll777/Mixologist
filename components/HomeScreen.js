import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './styleSheets/HomeScreen.style';
import { DATA } from '../drinks';

let barArr = [];
const isInBarArr = (cv) => barArr.includes(cv);

export const HomeScreen = () => {
  const nav = useNavigation();
  const [input, setInput] = useState('');

  const AddDataHandler = useCallback(() => {
    let add = input;
    add = add.toLowerCase().trim();
    if (!barArr.includes(add)) {
      barArr.push(add);
    }
    setInput('');
  }, [input]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headingText}> Bartender </Text>
      </View>

      <View>
        <Text style={styles.yourBar}>Your Bar: </Text>
        <View style={styles.barView}>
          {barArr
            ? barArr.map((elem, idx) => {
                return (
                  <Text key={idx} style={styles.barText}>
                    {elem}
                  </Text>
                );
              })
            : null}
        </View>
      </View>

      <View>
        <Text style={styles.possibleDrinks}> Possible Drinks: </Text>
        {DATA.map((drink, indx) => {
          return drink.ingredients.every(isInBarArr) ? (
            <View key={indx}>
              <Text
                style={styles.drinkText}
                onPress={() => nav.navigate('Drink', { drink })}
              >
                {drink.name}
              </Text>
            </View>
          ) : null;
        })}
      </View>

      <View style={styles.bottomView}>
        <TextInput
          style={styles.bottomText}
          placeholder="Add a drink to your bar..."
          onChangeText={(text) => setInput(text)}
          value={input}
          placeholderTextColor={'white'}
          onSubmitEditing={AddDataHandler}
        />
      </View>
    </View>
  );
};
