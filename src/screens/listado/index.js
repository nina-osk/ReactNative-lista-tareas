import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const AppListado = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const onChange = text => {
    console.warn({text});
    setTask(text);
  };

  const addTask = () => {
    setTaskList([...taskList, {id: taskList.length + 1, task}]);
    setTask('');
  };

  const deleteTask = id => {
    setTaskList(taskList.filter(task => task.id !== id));
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionTitle}>
        <TextInput
          autoFocus
          style={styles.textInput}
          placeholder="Introduce"
          onChangeText={text => onChange(text)}
          value={task}
        />
        <Button
          onPress={() => addTask()}
          title="send"
          color="#9191E9"
          disabled={task.trim.length === 0}
        />
      </View>
      <Text>Task List</Text>
      {taskList.length > 0 ? (
        <FlatList
          keyExtractor={item => item.id.toString()}
          refreshing={true}
          data={taskList}
          renderItem={({item}) => (
            <View>
              <Text style={styles.textList}>{item.task}</Text>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.delete}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text>No task yet</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  sectionTitle: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    flex: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccccc',
  },
  taskListContainer: {
    paddingHorizontal: 40,
    marginTop: 30,
  },
  textInputStyle: {
    fontsize: 20,
    fontWeight: 'bold',
  },
});

export default AppListado;