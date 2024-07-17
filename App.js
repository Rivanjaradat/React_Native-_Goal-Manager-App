import React, { useState } from 'react';
import {
    StyleSheet,
    Button,
    View,
   
    FlatList
} from 'react-native';
import GoalsItem from './components/GoalsItem';
import GoalInput from './components/GoalInput';
export default function App() {
   
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

   

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [
            ...currentGoals,
            { id: Math.random().toString(), value: goalTitle }
        ]);
        setIsAddMode(false);
    };
    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id != goalId);
        });
    };
    return (
        <View style={styles.screen}>
            <Button title="Add new Goal" onPress={()=>setIsAddMode(true)} />
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} /> 
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={itemData => <GoalsItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
  

   
});
