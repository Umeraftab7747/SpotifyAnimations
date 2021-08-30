import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Slider,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { w, h } from "react-native-responsiveness";
import Tab from "./Tab.js";
import Tabicon from "./Tabicon";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const LIMIT_SCREEN = SCREEN_HEIGHT / 2;

const Bottomtabs = () => {
  const TouchY = useSharedValue(0);
  const TouchX = useSharedValue(0);

  const GestureFunction = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = TouchX.value;
      context.translateY = TouchY.value;
    },
    onActive: (event, context) => {
      TouchX.value = event.translationX + context.translateX;
      TouchY.value = event.translationY + context.translateY;
    },

    onEnd: (event) => {
      if (event.translationY >= -LIMIT_SCREEN / 2) {
        TouchY.value = withTiming(0);
      } else {
        TouchY.value = event.translationY;
        TouchY.value = withTiming(-SCREEN_HEIGHT * 0.8);
      }
    },
  });
  const MoveSlider = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: TouchY.value }],
      // opacity: interpolate(TouchY.value, [-700, 0, 5], [0, 1, 1]),
      opacity: interpolate(TouchY.value, [-350, -700], [1, 0]),
    };
  });

  const SlideBottomTab = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(TouchY.value, [-10, 0, 10], [10, 0, -5]),
        },
      ],
      opacity: interpolate(TouchY.value, [-5, 0, 5], [0.9, 1, 1]),
    };
  });

  const ScreenPlayerStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            TouchY.value,
            [-900, 0, 10],
            [-SCREEN_HEIGHT * 1, 0, SCREEN_HEIGHT * 10]
          ),
        },
      ],
      opacity: interpolate(TouchY.value, [-20, 0, 200], [1, 1, 0]),
    };
  });
  const TopTabStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(TouchY.value, [-350, -750], [0, 1]),
    };
  });
  const MusicScreenSytle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(TouchY.value, [-300, -750], [0, 1]),
    };
  });
  return (
    <View style={styles.container}>
      <SafeAreaView />
      {/* animation */}
      <PanGestureHandler onGestureEvent={GestureFunction}>
        {/* mini Player */}
        <Animated.View style={[styles.minPlayer, MoveSlider]}>
          {/* leftContainer */}
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={require("../assets/drke.jpeg")} />
          </View>
          {/* MidContainer */}
          <View style={styles.middleContainer}>
            <Text style={styles.txt} numberOfLines={1} ellipsizeMode={"tail"}>
              Lemon Pepper Freestyle (feat. Rick Ross)
            </Text>
            <Text style={styles.PlayText}>Air pods Connected </Text>
          </View>
          {/* RightContainer */}
          <View style={styles.RightConTainer}>
            <Tabicon iconname={"bluetooth"} color={"green"} />
          </View>
          {/* RightContainer 2 */}
          <View style={styles.RightConTainer}>
            <Tabicon iconname={"play"} color={"#fff"} />
          </View>
        </Animated.View>
        {/* mini Player */}
      </PanGestureHandler>

      {/* SCREEN PLAYER */}
      <Animated.View style={[styles.screenPlayer, ScreenPlayerStyles]}>
        {/* TopTab */}
        <Animated.View style={[styles.TopTab, TopTabStyle]}>
          <View style={styles.leftContainer}>
            <Tabicon iconname={"chevron-down-outline"} color={"white"} />
          </View>
          <View style={styles.MiddleContainer}>
            <Text style={styles.LikedText}>Liked Song</Text>
          </View>
        </Animated.View>
        {/* TopTab */}

        <Animated.View style={[styles.MainMusicContainer, MusicScreenSytle]}>
          <Image style={styles.imges} source={require("../assets/drke.jpeg")} />
          <Text style={styles.StartupHeader}>Library: Start Up!</Text>
          <Text style={styles.StartupHeader}>
            Song: Lemon Pepper (feat. Rick Ross)
          </Text>
          {/* slider */}
          <View
            style={{
              height: 40,
              width: "100%",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <Slider
              style={{ width: 300 }}
              step={1}
              minimumValue={18}
              maximumValue={71}
              value={18}
              minimumTrackTintColor={"green"}
              maximumTrackTintColor={"white"}
            />
          </View>
          {/* slider */}

          <View
            style={{
              width: "80%",
              height: "20%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginBottom: h("5%"),
              // backgroundColor: "red",
            }}
          >
            <Tabicon iconname={"caret-back-outline"} color={"#fff"} />
            <Tabicon iconname={"pause-sharp"} color={"#fff"} />
            <Tabicon iconname={"caret-forward-outline"} color={"#fff"} />
          </View>
        </Animated.View>
      </Animated.View>
      {/* SCREEN PLAYER */}

      {/* Animtions */}
      <Animated.View
        style={[
          SlideBottomTab,
          {
            // backgroundColor: "red",
            width: "100%",
            height: "30%",
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: -1,
            flexDirection: "row",
          },
        ]}
      >
        <Tab />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  minPlayer: {
    backgroundColor: "#000",
    width: "100%",
    height: h("8%"),

    position: "absolute",
    bottom: 70,
    left: 0,
    zIndex: 1,
    flexDirection: "row",
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
    width: "50%",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
  },
  txt: {
    color: "white",
    fontSize: h("1.7%"),
  },
  PlayText: {
    color: "green",
    fontSize: h("1.4%"),
  },
  RightConTainer: {
    // backgroundColor: "gold",
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  screenPlayer: {
    backgroundColor: "#000",
    width: "100%",
    height: h("100%"),
    position: "absolute",
    bottom: -SCREEN_HEIGHT / 1.19,
    left: 0,
    zIndex: -2,
    alignItems: "center",
  },
  TopTab: {
    backgroundColor: "black",
    width: "100%",
    height: h("9%"),
    borderBottomWidth: h("0.1%"),
    borderBottomColor: "#fff3",
    flexDirection: "row",
  },
  leftContainer: {
    // backgroundColor: "gold",
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  MiddleContainer: {
    // backgroundColor: "green",
    width: "55%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  LikedText: {
    color: "white",
    fontSize: h("2.2%"),
    fontWeight: "bold",
  },
  MainMusicContainer: {
    // backgroundColor: "white",
    width: "90%",
    height: h("70%"),
    alignItems: "center",
    paddingTop: h("10%"),
  },
  imges: {
    width: "80%",
    height: "50%",
    resizeMode: "contain",
  },
  StartupHeader: {
    color: "white",
    fontSize: h("2.0%"),
    fontWeight: "bold",
    marginTop: h("1%"),
  },
});
export default Bottomtabs;
