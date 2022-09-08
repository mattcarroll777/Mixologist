import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#8b0000',
    padding: 10,
  },
  headingText: {
    color: 'white',
    fontSize: 25,
  },

  yourBar: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 1,
  },
  barView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  barText: {
    width: '33%',
    padding: 5,
  },

  possibleDrinks: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  drinkText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  bottomView: {
    width: '100%',
    height: 80,
    padding: 10,
    position: 'absolute',
    backgroundColor: '#8b0000',
    bottom: 0,
  },
  bottomText: {
    fontSize: 20,
    color: 'white',
    padding: 5,
  },
});
