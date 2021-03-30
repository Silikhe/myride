import React from "react";
import prompt from "react-native-prompt-android";
import { View, Text } from "react-native";

export default function phone() {
  return (
    <View>
      prompt( 'Enter password', 'Enter your password to claim your $1.5B in
      lottery winnings',
      {/* [
     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
     {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
    ],
    {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder'
    } */}
      );
    </View>
  );
}
