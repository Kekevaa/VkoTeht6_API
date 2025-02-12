import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const URL = 'https://api.adviceslip.com/advice';

export default function App() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setAdvice(json.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Advice</Text>
      <Text style={styles.advice}>{advice}</Text>
      <Button title="Get New Advice" onPress={fetchAdvice} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  advice: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
});

