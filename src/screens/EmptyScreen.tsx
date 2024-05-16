import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {  useNavigation } from '@react-navigation/native';

const EmptyScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      
      <TouchableOpacity style={styles.content} onPress={()=>{navigation.goBack()}}>
        <Text style={styles.textContent}>{'GO Back'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EmptyScreen;
