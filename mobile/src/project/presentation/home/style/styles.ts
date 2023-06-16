import { COLORS } from "global/atomic/abstract";
import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  scroll: {
    width: width,
    height: height,
  },
  container: {
    width: width,
    height: height,
    backgroundColor: "#0F172A",
    paddingTop: Constants.statusBarHeight + RFValue(17),
    paddingEnd: RFValue(17),
    paddingHorizontal: RFValue(16),
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
export { styles };
