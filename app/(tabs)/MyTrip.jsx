import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const MyTrip = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Trips</Text>
        <AntDesign name="pluscircleo" size={35} color="black" />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>No Trips Planned Yet</Text>
        <Text style={styles.subtitle}>
          Looks like it's time to plan a new travel experience! Get Started Now.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /* Add navigation or action here */
          }}
        >
          <Text style={styles.buttonText}>Start a New Trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
