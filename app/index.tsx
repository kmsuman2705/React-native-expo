

import { Link } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Index = () => {
  return (
    <View style={{
      backgroundColor: "pink",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text>
        Hello, welcome to Suman!
      </Text>
      <Link href={"/about"}> Go to about</Link>
    </View>
  );
};

export default Index;
