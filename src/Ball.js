import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const Ball = () => {
  const TouchY = useSharedValue(0);
  const TouchX = useSharedValue(0);

  const GestureFunction = useAnimatedGestureHandler({
    onActive: (event) => {
      TouchY.value = event.translationY;
      TouchX.value = event.translationX;
    },
    onEnd: () => {
      TouchY.value = withSpring(0);
    },
  });
  const Moveball = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: TouchY.value }],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={GestureFunction}>
        <Animated.View style={[styles.ball, Moveball]} />
      </PanGestureHandler>
    </View>
  );
};

export default Ball;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ball: {
    backgroundColor: "red",
    width: 80,
    height: 80,
    borderRadius: 1000 / 2,
  },
});
