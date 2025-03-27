import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native';

// Sample questions
const questions = [
  { id: '1', question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'], answer: 'Paris' },
  { id: '2', question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
  // Add more questions as needed
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      Alert.alert("Correct!", "You got it right!");
    } else {
      Alert.alert("Incorrect", "Try again!");
    }
    
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      Alert.alert("Quiz Finished", `Your score: ${score + (selectedOption === questions[currentQuestionIndex].answer ? 1 : 0)} out of ${questions.length}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
      <FlatList
        data={questions[currentQuestionIndex].options}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Button title={item} onPress={() => handleAnswer(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  question: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
