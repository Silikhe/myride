import React, { Component } from "react";
import { Constants } from "expo";
import { View, ScrollView, Layouts } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"; // 1.2.12

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

// import React, { Component } from "react";
// import { Text, View } from "react-native";

export default class searchPlaces extends Component {
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View
          keyboardShouldPersistTaps="handled"
          // style={Layouts.Form.autocompleteContainer}
        >
          <GooglePlacesAutocomplete
            placeholder="Adresse"
            minLength={5} // minimum length of text to search
            autoFocus={false}
            returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            keyboardAppearance={"light"} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
            listViewDisplayed="true" // true/false/undefined
            fetchDetails={true}
            renderDescription={(row) => row.description} // custom description render
            components="country:ca"
            onPress={(data, details = null) => {
              let address = details.formatted_address.split(", ");

              this.props.handler({
                adresse: address[0],
                ville: address[1],
                postal: address[2].replace("QC ", ""),
              });
            }}
            getDefaultValue={() => ""}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: "AIzaSyB5yyswUHaIHefK062Or0u4S5McIZEzpXE",
              language: "fr", // language of the results
              types: "address", // default: 'geocode'
              components: "country:ca", // added  manually
            }}
            styles={{
              textInputContainer: {
                width: "100%",
              },
              description: {
                fontWeight: "bold",
              },
              predefinedPlacesDescription: {
                color: "#1faadb",
              },
            }}
            GooglePlacesDetailsQuery={{ fields: "formatted_address" }}
            debounce={300} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          />
        </View>
        {/* <View></View> */}
      </ScrollView>
    );
  }
}
