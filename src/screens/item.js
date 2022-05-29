import { Feather } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/colors";

const image = require("../../assets/images/cover.png");

export default function Item() {
  return (
    <ScrollView style={{ backgroundColor: colors.white_dark }}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.constainer}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 65,
          }}
        >
          <View style={styles.circle}></View>
          <View
            style={[
              styles.circle,
              { marginHorizontal: 8, backgroundColor: colors.white_half },
            ]}
          ></View>
          <View
            style={[styles.circle, { backgroundColor: colors.white_half }]}
          ></View>
        </View>
      </ImageBackground>
      <View style={styles.item}>
        <Text style={styles.title}>Boston Lettuce</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 16,
            marginBottom: 6,
          }}
        >
          <Text
            preset="h2"
            style={{ marginRight: 5, fontWeight: "bold", letterSpacing: -0.8 }}
          >
            1.10
          </Text>
          <Text style={{ fontSize: 24, color: colors.white_light }}>
            € / piece
          </Text>
        </View>
        <Text
          preset="small"
          style={{
            textAlign: "justify",
            fontWeight: "bold",
            marginBottom: 20,
            color: colors.green_dark,
          }}
        >
          ~ 150 gr / piece
        </Text>
        <Text
          preset="h3"
          style={{ textAlign: "justify", marginBottom: 16, fontWeight: "bold" }}
        >
          Spain
        </Text>
        <Text preset="small" style={{ textAlign: "left", marginBottom: 56 }}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>
        <View style={{ flexDirection: "row", paddingBottom: 56 }}>
          <View style={styles.heartBtn}>
            <Feather name="heart" size={15} color={colors.white_light} />
          </View>
          <View style={styles.cartBtn}>
            <Feather
              name="shopping-cart"
              size={24}
              color={colors.white}
              style={{ marginRight: 25.26 }}
            />
            <Text
              preset="small"
              style={{
                textTransform: "uppercase",
                color: colors.white,
                fontWeight: 600,
                letterSpacing: -0.01,
              }}
            >
              add to cart
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  item: {
    flex: 1,
    backgroundColor: colors.white_dark,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -50,
    padding: 20,
    height: "100%",
  },
  circle: {
    backgroundColor: colors.white,
    borderRadius: "50%",
    height: 8,
    width: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    textAlign: "justify",
    marginTop: 17,
  },
  heartBtn: {
    backgroundColor: colors.white,
    borderColor: colors.dark_black,
    borderWidth: 1,
    borderRadius: 8,
    padding: 18,
    marginRight: 21,
  },
  cartBtn: {
    backgroundColor: colors.green_dark,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: 295,
  },
});
