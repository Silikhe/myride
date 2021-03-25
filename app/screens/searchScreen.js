import React from "react";
import { View, StyleSheet, TextInput, Text, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Font from "react-native-vector-icons/FontAwesome";
import Isto from "react-native-vector-icons/Fontisto";

import { TouchableOpacity } from "react-native-gesture-handler";
// import styles from "../../styles";

export default function searchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.card}>
          <View style={styles.drop}>
            <Text style={styles.dropText}>Drop Location</Text>
            <TouchableOpacity>
              <Icon name="x" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.search}>
            <View style={styles.inputWrapper}>
              <View style={styles.blackDot} />
              <TextInput
                placeholder="Where are you going? "
                placeholderTextColor="#afb1b6"
              />
            </View>
            <View>
              <Font name="car" size={20} color="#c4c4c4" />
            </View>
          </View>
          <View style={styles.bottomCard}>
            <View style={styles.bottomCardPin}>
              <Isto
                name="map-marker-alt"
                size={22}
                style={styles.bottomCardIcon}
              />
              <Text style={styles.bottomCardText}>
                Tap to select from the map
              </Text>
            </View>
            <TouchableOpacity
              style={styles.buttonCircle}
              onPress={() => navigation.navigate("available")}
            >
              <Icon name="arrow-right" size={20} style={{ color: "#fff" }} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    borderColor: "#efefef",
    marginHorizontal: 10,
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 30,
  },
  drop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dropText: {
    fontWeight: "bold",
    color: "#B48900",
  },

  search: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#efefef",
    borderRadius: 5,
    borderWidth: 2,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  blackDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#000",
  },

  bottomCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  bottomCardPin: {
    flexDirection: "row",
    alignItems: "center",
  },

  bottomCardIcon: {
    color: "#000",
    marginRight: 10,
  },

  bottomCardText: {
    color: "#c4c4c4",
    fontWeight: "bold",
    fontSize: 16,
  },

  buttonCircle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
