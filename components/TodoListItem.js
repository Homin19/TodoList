import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'; //Dimension - 모바일 기기는 화면 크기가 천차만별 그렇기 때문에 어떤 요소의 크기를 수치로 정해두면 기기별로 크기가 달라보일 수 있다. 이러한 문제점을 해결하기 위해 react-native에서는 Dimensions라는 API를 기본적으로 제공해줌
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get("window");

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onToggle(id)}>
                {checked ? (
                    <View style={styles.completeCircle}>
                        <Icon name="circledowno" size={30} color="red" />
                    </View>
                ) : (
                    <View style={styles.circle} />
                )}
            </TouchableOpacity>
            <Text style={[styles.text, 
                checked? styles.strikeText : styles.unstrikeText,]}>
                {textValue}
            </Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text onPress={onRemove(id)}>
                ❌
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width - 70,
        flex: 1,
        borderBottomColor: 'pink',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        width: 100,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'gray',
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20,
    },
    completeCircle: {
        marginRight: 20,
        marginLeft: 20,
        
    },
    strikeText: {
        color: 'gray',
        textDecorationLine: 'line-through', // 텍스트에 밑줄 보이게 하기
    },
    unstrikeText: {
        color: 'black',
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default TodoListItem;