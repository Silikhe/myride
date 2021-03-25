import * as React from "react";
import Icon from "react-native-vector-icons/Feather";
import IconX from "react-native-vector-icons/MaterialCommunityIcons";
import Font from "react-native-vector-icons/FontAwesome";
import {
  StatusBar,
  FlatList,
  Title,
  Caption,
  Image,
  Animated,
  Text,
  View,
  Paragraph,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";
const { width, height } = Dimensions.get("screen");
import faker from "faker";

faker.seed(10);
const DATA = [...Array(10).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      "women",
      "men",
    ])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;

export default availableDrivers = ({ navigation }) => {
  (function () {
    return fetch("http://localhost/myride/api/api/driverlist")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson.driver;
      })
      .catch((error) => {
        console.error(error);
      });
  })();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar />
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
      <FlatList
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("book")}>
              <View
                style={{
                  flexDirection: "row",
                  padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: "rgbs(225,225,225,0.6)",
                  borderRadius: 12,
                  shadowColor: "#000000",
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 20,
                  borderColor: "#c4c4c4",
                  borderWidth: 1,
                  borderStyle: "solid",
                }}
              >
                <Image
                  // source={{ uri: item.image }}
                  source={require("../assets/profile-icon.jpg")}
                  style={{
                    width: AVATAR_SIZE * 1.2,
                    height: AVATAR_SIZE * 1.2,
                    borderRadius: AVATAR_SIZE * 1.2,
                    marginRight: SPACING / 2,
                  }}
                />
                <View>
                  <Text
                    style={{ fontSize: 22, fontWeight: "700", marginLeft: 25 }}
                  >
                    Silas Silikhe
                  </Text>
                  <View style={styles.section}>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <View style={{ flexDirection: "row" }}>
                        <Font
                          name="car"
                          size={18}
                          color="#000"
                          style={{ marginTop: 5 }}
                        />
                        <Text style={styles.title}>KEC 231 B</Text>
                      </View>
                      <View style={{ marginLeft: 25 }}>
                        <Text style={styles.title2}>Red</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="phone" size={18} />
                      <Text style={styles.title}>+254 7067 45581</Text>
                    </View>
                    <View style={{ marginLeft: 25 }}>
                      <Text style={styles.title2}>7 min</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 30, marginTop: 25 },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  greenWrapper: {
    width: 50,
    height: 50,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    elevation: 1,
  },

  title: {
    fontSize: 16,
    marginTop: 3,
    marginLeft: 12,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "500",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
});
