import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import CustomButton from "../components/CustomeButton";
import MapViewDirections from "react-native-maps-directions";
import mapStyle from "../../styles";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
import API_KEY from "../../API_KEY";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { color } from "react-native-reanimated";

export default function request({ navigation }) {
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
          <View>
            <Text style={styles.footerTitle}>Passengers Request</Text>
            <View style={styles.footerWords}>
              <Text style={[styles.secondText, { color: "#000" }]}>Route</Text>
              <Text style={styles.secondText}>Nakuru</Text>
            </View>
            <View style={styles.footerWords}>
              <Text style={[styles.secondText, { color: "#000" }]}>pickup</Text>
              <Text style={styles.secondText}>Nairobi</Text>
            </View>
            <View style={styles.footerWords}>
              <Text style={[styles.secondText, { color: "#000" }]}>
                Deperture
              </Text>
              <Text style={styles.secondText}>10. 00 am</Text>
            </View>
          </View>
          <View>
            <CustomButton
              style={{
                backgroundColor: "#000",
              }}
              onPress={() => navigation.navigate("DatePick")}
              title="Place A Ride"
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("launcher")}
              style={[
                styles.signIn,
                {
                  borderColor: "#red",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "red",
                  },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
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

  signIn: {
    width: "90%",
    borderWidth: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
  },

  container: { marginHorizontal: 20, marginTop: 25 },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  cartegoryWrapper: {
    width: 400,
    height: 370,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },

  footerWords: {
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footerTitle: {
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 25,
    fontWeight: "600",
    color: "#c4c4c4",
    alignSelf: "center",
  },

  firstText: {
    fontWeight: "bold",
    color: "#B48900",
    fontSize: 20,
    paddingRight: 10,
  },

  secondText: {
    marginRight: 25,
    fontWeight: "500",
    color: "#c4c4c4",
    fontSize: 17,
  },

  secondText1: {
    alignContent: "space-between",
    fontWeight: "bold",
    color: "#000",
    fontSize: 17,
  },

  thirdText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 25,
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
});
