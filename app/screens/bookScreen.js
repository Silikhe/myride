import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Modal from "../components/modal";
import CustomButton from "../components/CustomeButton";
import MapViewDirections from "react-native-maps-directions";
import mapStyle from "../../styles";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const API_KEY = "AIzaSyB5yyswUHaIHefK062Or0u4S5McIZEzpXE";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { color } from "react-native-reanimated";

export default function bookScreen({ navigation }) {
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
        <SafeAreaView style={styles.contain}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View style={[styles.whiteWrapper, { backgroundColor: "#fff" }]}>
                <Icon name="menu" size={24} />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.cartegoryWrapper}>
        <View style={styles.footerDescription}>
          <View>
            <Text style={styles.footerTitle}>Details</Text>
            <View style={styles.footerWords}>
              <Text style={styles.firstText}>Route:</Text>
              <Text style={styles.secondText}>Nairobi-Limuru-Way</Text>
            </View>
            <View style={styles.footerWords}>
              <Text style={styles.firstText}>Aproximated Time:</Text>
              <Text style={styles.secondText}>3 Hours</Text>
            </View>
            <View style={styles.footerWords}>
              <Text style={styles.firstText}>Car:</Text>
              <Text style={styles.secondText}>KHR 763k </Text>
            </View>
            <View style={styles.footerWords}>
              <Text style={styles.firstText}>Amount</Text>
              <Text style={[styles.thirdText]}>3200</Text>
            </View>
            <View style={styles.dropDown}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="Mpesa" value="mpesa" />
                <Picker.Item label="Cash" value="cash" />
              </Picker>
            </View>
          </View>
          <View>
            <CustomButton
              style={{
                backgroundColor: "#000",
              }}
              onPress={() => navigation.navigate("location")}
              title="BOOK"
            />
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
    fontSize: 22,
    fontWeight: "bold",
  },

  firstText: {
    fontWeight: "bold",
    color: "#B48900",
    fontSize: 18,
    paddingRight: 10,
  },

  secondText: {
    fontWeight: "500",
    color: "#c4c4c4",
    fontSize: 16,
  },

  thirdText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 23,
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

  whiteWrapper: {
    width: 50,
    height: 50,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  contain: { marginHorizontal: 30, marginTop: 25 },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
