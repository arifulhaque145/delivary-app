import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.circle, styles.shadowProp]}>
          <Image
            style={{ height: 28, width: 0.89 * 28 }}
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <View style={styles.delivaryView}>
          <View style={styles.boxCircle}>
            <Image
              style={{ height: 40, width: 35.14 }}
              source={require("../../assets/images/logo_box.png")}
            />
          </View>
          <Text
            style={{
              fontFamily: typography.primary,
              fontWeight: 900,
              fontSize: 34,
              textAlign: "center",
              marginTop: 24,
              color: colors.dark,
              letterSpacing: 0.8,
              lineHeight: 41,
            }}
          >
            Non-Contact <br /> Deliveries
          </Text>
          <Text preset="small" style={{ marginTop: 25 }}>
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>
          <Pressable
            onPress={() => navigation.navigate("Item")}
            style={styles.orderBtn}
          >
            Order Now
          </Pressable>
          <Text preset="small" style={styles.dismissBtn}>
            DISMISS
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.violet,
    height: "100%",
  },
  circle: {
    backgroundColor: colors.light_green,
    height: 63,
    width: 63,
    marginTop: 63,
    marginLeft: 20,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: colors.dark_light,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 25,
  },
  delivaryView: {
    backgroundColor: colors.white_dark,
    height: 584,
    marginTop: "50%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    padding: 20,
  },
  boxCircle: {
    backgroundColor: "#fff",
    height: 104,
    width: 104,
    marginTop: 44,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  orderBtn: {
    backgroundColor: colors.green,
    fontFamily: typography.secondary,
    paddingVertical: 16,
    marginTop: 48,
    borderRadius: 10,
    width: "100%",
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  dismissBtn: {
    color: colors.white_light,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 46,
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
