import React from 'react';
import { ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from  '../components/headerButton';

const ListItem = props => {
  return <View style={styles.listItem}>
    <Text>{props.children}</Text>
  </View>
};

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
      <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
        <View style={styles.details}>
            <Text>{selectedMeal.duration}m</Text>
            <Text>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>))}
      </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
      headerTitle: selectedMeal.title,
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log('Mark as favorite!');
            }}
          />
        </HeaderButtons>
      )
    };
  };

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    marginStart: 10,
    marginBottom: 5,
    marginTop: 5,
    fontFamily: 'open-sans-bold',
    fontSize: 15
  },
  listItem: {
    marginStart: 10,
    marginTop: 2
  }
});

export default MealDetailScreen;