import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import LoginView from '@/components/LoginView';
import SignupView from '@/components/SignupView';

export default function App() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {isSignup ? (
          <SignupView onSwitch={() => setIsSignup(false)} />
        ) : (
          <LoginView onSwitch={() => setIsSignup(true)} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

