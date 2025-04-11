import React, { ReactNode } from "react";
import { StyleSheet, View, Text, StyleProp, ViewStyle } from "react-native";
import colors from "../assets/colors";

type AppButtonProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  text: string;
};
const AppButton: React.FC<AppButtonProps> = ({ style, children, text }) => {
  return (
    <View style={[styles.btn, style]}>
      <Text style={styles.btnText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.blue,
    borderRadius: 100,
    paddingVertical: 20,
  },
  btnText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 16,
  },
});
export default AppButton;
