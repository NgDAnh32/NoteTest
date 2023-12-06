import {
  Button,
  Icon,
  Input,
  Layout,
  List,
  ListItem,
  Text,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Task from './component/tasks';
const PlusIcon = props => (
  <Icon {...props} name="plus" style={[props.style, {tintColor: 'black'}]} />
);
const LogOutIcon = props => (
  <Icon {...props} name="log-out" style={[props.style, {tintColor: 'black'}]} />
);
const TodoListScreen = ({onLogout}) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = async () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const renderTaskItem = ({item, index}) => (
    <ListItem style={styles.listItem}>
      <TouchableOpacity
        style={{width: '100%'}}
        onPress={() => completeTask(index)}>
        <Task text={item} />
      </TouchableOpacity>
    </ListItem>
  );
  const handleLogOut = () => {
    onLogout();
  };
  return (
    <Layout style={styles.container} level="4">
      {/* header task */}
      <Layout style={styles.tasksWrapper} level="4">
        <Layout
          level="4"
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Tasks</Text>
          <Button
            accessoryLeft={LogOutIcon}
            onPress={handleLogOut}
            size="large"
            appearance="ghost"></Button>
        </Layout>
        <Layout style={styles.items} level="4">
          <List
            data={taskItems}
            renderItem={renderTaskItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.listTask}
          />
        </Layout>
      </Layout>
      {/* write tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTask}>
        <Input
          style={styles.inputTask}
          placeholder="Write a task"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <Button
          accessoryLeft={PlusIcon}
          style={styles.button}
          appearance="outline"
          status="basic"
          onPress={handleAddTask}
        />
      </KeyboardAvoidingView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTask: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputTask: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    color: 'black',
    backgroundColor: '#FFF',
  },

  listItem: {
    backgroundColor: '#E8EAED',
  },
  listTask: {
    maxHeight: 400,
    backgroundColor: '#E8EAED',
  },
});
export default TodoListScreen;
