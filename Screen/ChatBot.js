import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native'
import {useState} from 'react'


const ChatBot = () => {
  const [text, setText] = useState('')
  const [response, setResponse] = useState('') 
  const generateText = async () => {
    const prompt = text;
    const apiKey = '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'
    const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions'

    const headers = {
      'Content-Type' : 'application/json',
      Authorization: `Bearer ${apiKey}`
    }

    const data = {
      prompt : prompt,
      max_tokens: 1024,
      temperature: 0.7,
    }

    const response = await fetch(url, {
      method:'POST',
      headers:headers,
      body:JSON.stringify(data)
    })
    const result = await response.json()
    setResponse(result.choices[0].text)
    //setResponse(JSON.stringify(result))
  }

return (
    <View style={styles.container}>
      <ScrollView style={styles.chat}>
        <View style={styles.messageRow}>
          <View style={styles.userBubble}>
            <Text style={styles.userText}>{text}</Text>
          </View>
        </View>
        {response && (
          <View style={[styles.messageRow, styles.responseRow]}>
            <View style={styles.responseBubble}>
              <Text style={styles.responseText}>{response}</Text>
            </View>
          </View>
        )}
      </ScrollView>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="질문을 입력하세요"
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <Button title="질문하기" onPress={generateText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ // sns 말풍선형식의 대화 스타일코드
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  chat: {
    flex: 1,
    paddingTop: 10,
  },
  messageRow: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  responseRow: {
    justifyContent: "flex-end",
  },
  userBubble: { //사용자 대화말풍선
    backgroundColor: "lightblue",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  responseBubble: { //챗봇의 대화 말풍선
    backgroundColor: "pink",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  userText: { // 사용자의 질문
    color: "black",
    fontSize: 16,
     lineHeight: 20,
  },
  responseText: { // 챗봇의 답변
    color: "black",
    fontSize: 16,
    lineHeight: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    width: "75%",
    fontSize: 16,
  },
});

export default ChatBot  