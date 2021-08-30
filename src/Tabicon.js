import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

const Tabicon = ({ iconname, color }) => {
  return (
    <View style={styles.container}>
      <Icon name={iconname} type="ionicon" color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Tabicon;
