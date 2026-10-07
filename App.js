import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StudentRoster from './components/StudentRoster';

export default function App() {
  return (
    <View style={styles.container}>
      <StudentRoster />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f5f9',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});
