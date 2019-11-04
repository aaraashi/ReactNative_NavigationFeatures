import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/headerButton';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    
    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        onSelect={()=>{
            props.navigation.navigate('CategoryMeals',
        {
            categoryId: itemData.item.id
        });
    }}/>;
    };

    //console.log(props);
    return (
        <FlatList 
        keyExtractor={(item, index) => item.id} //only for older version of RN
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Meal Categories',
    headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" 
        iconName='ios-menu' 
        onPress={()=>{
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;