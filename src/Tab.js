import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { w, h } from "react-native-responsiveness";
import Tabicon from "./Tabicon";

const Tab = ({ firstBtn, SecondBtn, ThirdBtn }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.containers} onPress={firstBtn}>
          <Tabicon iconname={"home-sharp"} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containers} onPress={SecondBtn}>
          <Tabicon iconname={"search-sharp"} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containers} onPress={ThirdBtn}>
          <Tabicon iconname={"library"} color={"#fff"} />
        </TouchableOpacity>
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
  containers: {
    width: "30%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
