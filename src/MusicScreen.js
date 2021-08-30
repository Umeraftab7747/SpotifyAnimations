import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Bottomtabs from "./BottomTabs";

const MusicScreen = () => {
  return (
    <Bottomtabs>
      <View style={styles.BackGround}>
        <Text>Hellow World</Text>
      </View>
    </Bottomtabs>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  BackGround: {
    backgroundColor: "red",
    width: "100%",
    height: "80%",
    zIndex: -2,
  },
});
