import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { w, h } from "react-native-responsiveness";

const List = ({ data, BtnPress }) => {
  // console.warn(data.Image);
  return (
    <TouchableOpacity onPress={BtnPress} style={styles.container}>
      {/* leftContainer */}
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={data.Image} />
      </View>
      {/* MidContainer */}
      <View style={styles.middleContainer}>
        <Text style={styles.txt} numberOfLines={1} ellipsizeMode={"tail"}>
          {data.song}
        </Text>
        <Text style={styles.PlayText}>Library: {data.Library} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width: "100%",
    height: h("8%"),

    flexDirection: "row",
    borderBottomColor: "#fff2",
    borderBottomWidth: h("0.1%"),
    marginTop: h("0.5%"),
  },
  imgContainer: {
    width: "20%",
    height: "100%",
    // backgroundColor: "gold",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  middleContainer: {
    // backgroundColor: "red",
    width: "75%",
    height: "100%",
    justifyContent: "center",
    marginLeft: h("1%"),
  },
  txt: {
    color: "white",
    fontSize: h("1.7%"),
    fontWeight: "bold",
  },
  PlayText: {
    color: "white",
    fontSize: h("1.4%"),
    marginTop: h("0.5%"),
  },
  RightConTainer: {
    // backgroundColor: "gold",
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
