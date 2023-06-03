import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import {db} from '../DB/FireBase';

const Login = (props) => {
  const [user, setUser] = useState(['']);
  const [id, setID] = useState();
  const [pw, setPW] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    const readfromDB = async () => {
      try {
        const data = await db.collection("User")
        let tempArray = []
        data.get().then(snap => {
          snap.forEach((doc) => {
            tempArray.push({ ...doc.data(), id: doc.id})
          })
          setUser(tempArray)
        })
      } catch(error) {
        console.log(error.message)
      }
    }
    readfromDB()
  }, [isFocused]);

  const login = () => {
    let bool = false
    user.map((row, idx) => {
      if (row.ID == id && row.PW == pw) {
        props.navigation.navigate("Home", {
          screen: "Home",
          params: { 
            id: row.ID,
            pw: row.PW,
            nickname: row.NICKNAME,
            name: row.NAME,
            phone: row.PHONE
          },
        });
        alert(`로그인 성공`)
        setID('')
        setPW('')
        bool = true
      } 
    })
    if (!bool) {
 alert('ID 또는 PASSWORD가 틀렸습니다')
      setID('')
      setPW('')
    }
  }
  
  return (
    <View style={{
      flex : 1,
      justifyContent : 'center',
      backgroundColor: 'pink', 
      alignItems: 'center'}}>
      <View style={styles.loginBox}>
        <TextInput
          style={styles.inputBox}
          placeholder="아이디"
          value={id}
          onChangeText={(e) => setID(e)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="비밀번호"
          secureTextEntry={true}
          value={pw}
          onChangeText={(e) => setPW(e)}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={login}>
          <Text style={{color: 'balck', fontWeight: 'bold'}}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBox: {
    width: '80%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inputBox: {
    width: '75%',
    height: 40,
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginBtn: {
    width: '75%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor : 'pink',
    borderWidth : 1,
    marginBottom: 10,
  },
});

export default Login;
