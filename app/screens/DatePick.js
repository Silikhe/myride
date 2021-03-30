import React, { useState } from "react";
import { StyleSheet, Button, TouchableOpacity, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomButton from "../components/CustomeButton";
import mapScreen from "./mapScreen";

const DatePick = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    alert("You have booked your trip: ", date);
    // console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const theDate = (date) => {
    if (date) {
      date == date;
    } else {
      date == 0;
    }
  };

  return (
    <View style={{ flex: 1, marginBottom: 300, justifyContent: "center" }}>
      <CustomButton onPress={showDatePicker} title="Book a trip">
        <FontAwesome name="phone" color="#c4c4c4" size={20} />
      </CustomButton>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        onDateChange={(date) => {
          this.setState({ date: date });
        }}
      />
      {/* <Text>{theDate(date)}</Text> */}
      <CustomButton
        onPress={() => navigation.navigate("location")}
        title="Confirm"
      >
        <FontAwesome name="phone" color="#c4c4c4" size={20} />
      </CustomButton>
      {/* <CustomButton
        onPress={() => navigation.navigate("available")}
        title="Available Drivers"
      > */}
      {/* <FontAwesome name="Available Drivers" color="#c4c4c4" size={20} /> */}
      {/* </CustomButton> */}
    </View>
  );
};

export default DatePick;

// const styles = StyleSheet.date({
//   container: {
//     flex: 1,
//     backgroundColor: "#B48900",
//   },
// });
