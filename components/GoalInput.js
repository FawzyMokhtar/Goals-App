import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';

function GoalInput({ visible, onAddGoal, onCancel }) {
  const [enteredGoalText, setEnterGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnterGoalText(enteredText);
  }

  function addGoalHandler() {
    if (!enteredGoalText.trim().length) {
      return;
    }

    onAddGoal(enteredGoalText);
    setEnterGoalText('');
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Type your goal...'
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.toolsContainer}>
          <Button title='Add Goal' color='#b180f0' onPress={addGoalHandler} />
          <Button title='Cancel' color='#f31282' onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 16,
  },
  toolsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
  },
});

export default GoalInput;
