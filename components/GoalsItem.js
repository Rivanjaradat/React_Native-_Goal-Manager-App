import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
const GoalItem = props => {
  
    return (
        < TouchableWithoutFeedback  onPress={props.onDelete.bind(this,props.id )}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </ TouchableWithoutFeedback>
       
    );
};
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});
export default GoalItem;