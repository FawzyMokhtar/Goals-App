import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import uuid from 'react-native-uuid';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [isAddGoalModalVisible, setAddGoalModalVisibility] = useState(false);
  const [goals, setGoals] = useState([]);

  function toggleAddGoalModalHandler() {
    setAddGoalModalVisibility(!isAddGoalModalVisible);
  }

  function addGoalHandler(textInput) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: uuid.v4(), text: textInput },
    ]);

    toggleAddGoalModalHandler();
  }

  function deleteGoalHandler(goalId) {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId)
    );
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#b180f0'
          onPress={toggleAddGoalModalHandler}
        />
        <GoalInput
          visible={isAddGoalModalVisible}
          onAddGoal={addGoalHandler}
          onCancel={toggleAddGoalModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDelete={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
