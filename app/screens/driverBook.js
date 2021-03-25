import React, { useState } from "react";
import Font from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import Isto from "react-native-vector-icons/Fontisto";
import {
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  View,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import CustomButton from "../components/CustomeButton";
import MapViewDirections from "react-native-maps-directions";
import mapStyle from "../../styles";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
import API_KEY from "../../API_KEY";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { color } from "react-native-reanimated";

export default function driverBook({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.01 * ASPECT_RATIO,
        }}
        customMapStyle={mapStyle}
      >
        <MapViewDirections
          origin={{ latitude: 37.78885, longitude: -122.4325 }}
          destination={{ latitude: 37.79395, longitude: -122.4325 }}
          apikey={API_KEY}
          mode="WALKING"
          strokeColor="#c4c4c4"
          strokeWidth={4}
          lineDashPattern={[6, 6]}
        />
        <Marker coordinate={{ latitude: 37.78885, longitude: -122.4325 }}>
          <View
            style={[
              styles.greenWrapper,
              { backgroundColor: "rgba(2, 213, 155, .4)" },
            ]}
          >
            <View
              style={[styles.greenDot, { backgroundColor: "rgb(2, 213, 155)" }]}
            />
          </View>
        </Marker>
        <Marker coordinate={{ latitude: 37.79395, longitude: -122.4325 }}>
          <View
            style={[
              styles.greenWrapper,
              { backgroundColor: "rgba(247, 70, 86, .4)" },
            ]}
          >
            <View
              style={[styles.greenDot, { backgroundColor: "rgb(247, 70, 86)" }]}
            />
          </View>
        </Marker>
      </MapView>
      <View>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Icon name="menu" size={24} />
            <Icon name="x" size={24} />
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.cartegoryWrapper}>
        <View style={styles.footerDescription}>
          <View style={styles.card}>
            <View style={styles.drop}>
              <Text style={styles.dropText}>Select Location</Text>
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
            <View style={styles.search}>
              <View style={styles.inputWrapper}>
                <View style={[styles.blackDot, { backgroundColor: "green" }]} />
                <TextInput
                  placeholder="Select you Destination   "
                  placeholderTextColor="#afb1b6"
                />
              </View>
              <View>
                <Isto
                  name="map-marker-alt"
                  size={22}
                  style={styles.bottomCardIcon}
                />
              </View>
            </View>
            <View style={styles.search}>
              <View style={styles.inputWrapper}>
                <View style={[styles.blackDot, { backgroundColor: "red" }]} />
                <TextInput
                  placeholder="Enter a pickup point "
                  placeholderTextColor="#afb1b6"
                />
              </View>
              <View>
                <Isto name="plus" size={22} style={styles.bottomCardIcon} />
              </View>
            </View>
          </View>
          <View style={styles.price}>
            <View>
              <CustomButton
                style={{
                  padding: 100,
                  width: "100%",
                }}
                onPress={() => navigation.navigate("passenger")}
                title="Book Now"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contain: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    borderColor: "#efefef",
    marginHorizontal: -100,

    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 5,
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
    marginVertical: 10,
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

  container: { marginHorizontal: 50, marginTop: 25 },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  cartegoryWrapper: {
    width: "100%",
    height: "50%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },

  footerWords: {
    padding: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  firstText: {
    fontWeight: "bold",
    color: "#B48900",
    fontSize: 20,
    paddingRight: 100,
  },

  thirdText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 25,
    // paddingRight: 5,
  },

  greenWrapper: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgb(2, 213, 155)",
  },

  price: {
    marginHorizontal: 20,
  },
});
