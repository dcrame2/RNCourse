import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const Card = ({children}) => {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card;

const styles = StyleSheet.create({
card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    elevation: 4, // android only property
    // iOS only properties
    shadowColor: "black",
    shadowOffset: { width: 4, height: 8 },
    shadowRadius: 6,
    shadowOpacity: 0.75,
  },
})