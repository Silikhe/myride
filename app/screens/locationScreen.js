import React, { useState, useEffect } from "react";
import SearchPlaces from "../components/searchPlaces";
import * as Location from "expo-location";
import * as IntentLauncher from "expo-intent-launcher";
import User from "../components/userLoc";
import * as Permissions from "expo-permissions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Placesearch from "react-native-placesearch";
import API_KEY from "../../API_KEY";
// import Geolocation from "@react-native-community/geolocation";
import DatePicker from "react-native-datepicker";
import {
  Keyboard,
  Text,
  StyleSheet,
  Dimensions,
  View,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Feather";
import Font from "react-native-vector-icons/FontAwesome";
import Isto from "react-native-vector-icons/Fontisto";
import CustomButton from "../components/CustomeButton";
import mapStyle from "../../styles";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { TouchableOpacity } from "react-native-gesture-handler";

const locationScreen = ({ route, navigation }) => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // let myId = route.params.id;
  let dated = "2020-03-31";
  // setId(myId);
  // console.log(date);
  // console.log(pickup);
  // console.log(date);
  // const [currentLongitude, setCurrentLongitude] = useState("...");
  // const [currentLatitude, setCurrentLatitude] = useState("...");
  // const [locationStatus, setLocationStatus] = useState("");

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     if (Platform.OS === "ios") {
  //       getOneTimeLocation();
  //       subscribeLocationLocation();
  //     } else {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //           {
  //             title: "Location Access Required",
  //             message: "This App needs to Access your location",
  //           }
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           //To Check, If Permission is granted
  //           getOneTimeLocation();
  //           subscribeLocationLocation();
  //         } else {
  //           setLocationStatus("Permission Denied");
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     }
  //   };
  //   requestLocationPermission();
  //   return () => {
  //     Geolocation.clearWatch(watchID);
  //   };
  // }, []);

  // const getOneTimeLocation = () => {
  //   setLocationStatus("Getting Location ...");
  //   Geolocation.getCurrentPosition(
  //     //Will give you the current location
  //     (position) => {
  //       setLocationStatus("You are Here");

  //       //getting the Longitude from the location json
  //       const currentLongitude = JSON.stringify(position.coords.longitude);

  //       //getting the Latitude from the location json
  //       const currentLatitude = JSON.stringify(position.coords.latitude);

  //       //Setting Longitude state
  //       setCurrentLongitude(currentLongitude);

  //       //Setting Longitude state
  //       setCurrentLatitude(currentLatitude);
  //     },
  //     (error) => {
  //       setLocationStatus(error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 30000,
  //       maximumAge: 1000,
  //     }
  //   );
  // };

  // const subscribeLocationLocation = () => {
  //   watchID = Geolocation.watchPosition(
  //     (position) => {
  //       //Will give you the location on location change

  //       setLocationStatus("You are Here");
  //       console.log(position);

  //       //getting the Longitude from the location json
  //       const currentLongitude = JSON.stringify(position.coords.longitude);

  //       //getting the Latitude from the location json
  //       const currentLatitude = JSON.stringify(position.coords.latitude);

  //       //Setting Longitude state
  //       setCurrentLongitude(currentLongitude);

  //       //Setting Latitude state
  //       setCurrentLatitude(currentLatitude);
  //     },
  //     (error) => {
  //       setLocationStatus(error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       maximumAge: 1000,
  //     }
  //   );
  // };

  // console.log(Location.getCurrentPositionAsync({}));

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      // IntentLauncher.startActivityAsync(
      //   IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS
      // );
      // let loc = Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      // alert(loc);
      // if (status !== "granted") {
      //   setErrorMsg("Permission to access location was denied");
      //   return;
      // }

      let loca = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(loca);
    })();
  }, []);

  // let loc;
  // if (errorMsg) {
  //   alert(errorMsg);
  // } else if (location) {
  //   loc = JSON.stringify(location);
  //   console.log(location);
  // }
  // alert(date);

  const passengerBook = () => {
    fetch("http://192.168.122.1/myride/api/api/passengerplace", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        pickupLocation: pickup,
        destination: destination,
        date: dated,
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // var myJSON = JSON.stringify(responseJson);
        navigation.navigate("available");
        // alert(myJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const pickChange = (val) => {
    setPickup(val);
  };

  const destinationChange = (val) => {
    setDestination(val);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
  };

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
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4325 }}>
          <View
            style={[
              styles.ourWrapper,
              { backgroundColor: "rgba(180, 137, 0, .2)" },
            ]}
          >
            <Isto
              name="map-marker-alt"
              size={30}
              style={{ color: "#B48900" }}
            />
          </View>
        </Marker>
      </MapView>
      <View>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View style={[styles.greenWrapper, { backgroundColor: "#fff" }]}>
                <Icon name="menu" size={24} />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.cartegoryWrapper}>
        <View style={styles.footerDescription}>
          <View style={styles.card}>
            <View style={styles.drop}>
              <Text style={styles.dropText}>Happy to see you</Text>
              <TouchableOpacity onPress={Keyboard.dismiss}>
                <Icon name="x" size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.search}>
              <View style={styles.inputWrapper}>
                <View style={styles.blackDot} />
                <TextInput
                  placeholder="Where are you going? "
                  placeholderTextColor="#afb1b6"
                  onChangeText={(val) => destinationChange(val)}
                ></TextInput>
              </View>
              <View>
                <Font name="car" size={15} color="#c4c4c4" />
              </View>
            </View>
            <View style={styles.search}>
              <View style={styles.inputWrapper}>
                <View style={[styles.blackDot, { backgroundColor: "green" }]} />
                <TextInput
                  placeholder="Enter your pickup point "
                  placeholderTextColor="#afb1b6"
                  onChangeText={(val) => pickChange(val)}
                />
              </View>
              <View>
                <Isto name="map-marker-alt" size={21} color="#c4c4c4" />
              </View>
            </View>
            <DatePicker
              style={styles.datePickerStyle}
              date={date} // Initial date from state
              mode="date" // The enum of date, datetime and time
              placeholder="select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  //display: 'none',
                  position: "absolute",
                  left: 0,
                  top: -18,
                  size: 50,
                  marginLeft: 20,
                },
                dateInput: {
                  position: "absolute",
                  top: -22,
                  width: 180,
                  left: 66,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
                console.log(date);
              }}
            />
            <CustomButton onPress={() => passengerBook()} title="Continue" />
          </View>
          <View>
            <View style={styles.footerWords}>
              <View
                style={{ flex: 1, marginBottom: 0, justifyContent: "center" }}
              >
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  onDateChange={(date) => {
                    setDate(date);
                    console.log(date);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default locationScreen;

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
    marginHorizontal: -170,
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 5,
  },
  ourWrapper: {
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  drop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greenWrapper: {
    width: 50,
    height: 50,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  dropText: {
    fontWeight: "bold",
    color: "#B48900",
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },

  search: {
    marginVertical: 10,
    padding: 12,
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

  container: { marginHorizontal: 30, marginTop: 25 },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  cartegoryWrapper: {
    width: "100%",
    height: "45%",
    position: "absolute",
    bottom: 0,
    // borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
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
    color: "#000",
    fontSize: 30,
    paddingRight: 60,
  },

  thirdText: {
    // fontWeight: "medium",
    color: "#000",
    fontSize: 20,
    // paddingRight: 5,
  },

  // greenWrapper: {
  //   width: 30,
  //   height: 30,
  //   borderRadius: 30,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   alignSelf: "center",
  // },

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
    // width: 20,
    paddingHorizontal: -20,
  },
});
