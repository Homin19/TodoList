import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function App() {
  return (
    <View style={styles.container}>
      <Calendar
        // Customization props
        theme={{
          calendarBackground: 'pink',
          textSectionTitleColor: 'black',
          selectedDayBackgroundColor: 'balck',
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'blue',
          dayTextColor: 'black',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: 'blue',
          arrowColor: 'blue',
          monthTextColor: 'blue',
          textDayFontSize: 20,
          textDayFontWeight: 'bold',
          textMonthFontSize: 25,
          textMonthFontWeight: 'bold',
          textDayHeaderFontSize: 14,
        }}
        style={{
          width: 300, // 달력 크기조절
          height: 500, 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
