import React, { ReactNode } from "react";
import {
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors";

type AppButtonProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  text: string;
  handleSubmit: () => void;
};
const AppButton: React.FC<AppButtonProps> = ({
  style,
  children,
  text,
  handleSubmit,
}) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={handleSubmit}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
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
