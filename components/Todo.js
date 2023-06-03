import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, StyleSheet, View, Dimensions, Platform } from 'react-native';
import uuid from 'react-uuid';
import TodoInsert from './TodoInsert';
import TodoList from './Todolist';

const { height, width } = Dimensions.get("window");

const Todo = () => {
  const [Todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([...Todos,
      {id: uuid(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(Todos.filter(Todo => Todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      Todos.map(Todo =>
        Todo.id === id ? {...Todo, checked: !Todo.checked} : Todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList Todos={Todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { //투두리스트 뒷배경
    flex: 1,
    backgroundColor: "pink",
    padding: 50,
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 35,
    marginTop: 0,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",// 텍스트 정렬
  },
  card: { // 할일을 나타내는 부분
    backgroundColor: "white",
    flex: 1,
    width: width - 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
          height: 30,
          width:0
        }
      },
  
    }),
  },
});
export default Todo;