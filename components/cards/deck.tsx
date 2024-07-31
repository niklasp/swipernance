import React, { Component, useRef, useState } from "react";
import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemedView } from "../ThemedView";

// demo purposes only
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export function Deck(props) {
  const [state, setState] = useState({
    cards: [...range(1, 10)],
    swipedAllCards: false,
    swipeDirection: "",
    cardIndex: 0,
  });

  const swiperRef = useRef<any>(null);

  const renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>
          {card} - {index}
        </Text>
      </View>
    );
  };

  const onSwiped = (type) => {
    console.log(`on swiped ${type}`);
  };

  const onSwipedAllCards = () => {
    setState({ ...state, swipedAllCards: true });
  };

  const swipeLeft = () => {
    swiperRef.current?.swipeLeft();
  };

  return (
    <ThemedView style={styles.container}>
      <Swiper
        ref={(swiper) => {
          swiperRef.current = swiper;
        }}
        containerStyle={styles.container}
        onSwiped={() => onSwiped("general")}
        onSwipedLeft={() => onSwiped("left")}
        onSwipedRight={() => onSwiped("right")}
        onSwipedTop={() => onSwiped("top")}
        onSwipedBottom={() => onSwiped("bottom")}
        // onTapCard={swipeLeft}
        cards={state.cards}
        cardIndex={state.cardIndex}
        cardVerticalMargin={80}
        renderCard={renderCard}
        onSwipedAll={onSwipedAllCards}
        stackSize={3}
        stackSeparation={15}
        overlayLabels={{
          bottom: {
            title: "👎 BLEAH",
            style: {
              label: {
                backgroundColor: "black",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          },
          left: {
            title: "NAY",
            style: {
              label: {
                backgroundColor: "red",
                borderColor: "white",
                color: "white",
                borderWidth: 2,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: -30,
              },
            },
          },
          right: {
            title: "AYE",
            style: {
              label: {
                backgroundColor: "green",
                borderColor: "white",
                color: "white",
                borderWidth: 2,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 15,
                marginLeft: 30,
              },
            },
          },
          top: {
            title: "👍 SUPER LIKE",
            style: {
              label: {
                backgroundColor: "black",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          },
        }}
        animateOverlayLabelsOpacity={true}
        animateCardOpacity={false}
        swipeBackCard={true}
      ></Swiper>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f",
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent",
  },
});
