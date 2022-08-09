import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem({ id, text, onDelete }) {
  function onDeleteHandler() {
    onDelete(id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && styles.pressedItem} // for IOS
        onPress={onDeleteHandler}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
