import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

interface TextProps {
  children: React.ReactNode;
}

export const Text = (props: TextProps) => {
  return <NativeText style={styles.text}>{props.children}</NativeText>;
};

const styles = StyleSheet.create({
  text: { fontFamily: "Roboto", fontSize: 16, color: "black" },
});
