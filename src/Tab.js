import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { w, h } from "react-native-responsiveness";
import Tabicon from "./Tabicon";

const Tab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <Tabicon iconname={"home-sharp"} color={"#fff"} />
        <Tabicon iconname={"search-sharp"} color={"#fff"} />
        <Tabicon iconname={"library"} color={"#fff"} />
      </View>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width: "100%",
    height: h("8%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
  bottomContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
