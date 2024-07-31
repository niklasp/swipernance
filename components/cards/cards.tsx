import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export function Card({ data }) {
  return (
    <View>
      <Text>{data.text}</Text>
    </View>
  );
}

export function StatusCard({ text }) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
  },
  cardsText: {
    fontSize: 22,
  },
});
