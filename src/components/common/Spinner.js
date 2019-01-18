import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

const Spinner = ({ size }) => (
  <View style={style.spinnerStyle}>
    <ActivityIndicator size={size || "large"} />
  </View>
);

const style = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Spinner;
