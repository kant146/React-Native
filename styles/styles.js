import { StyleSheet,Platform,StatusBar } from "react-native";

export const  colors= {
  color1: "#FFC062",
  color1_light: "#F6F2E3",
  color1_light2:"#3FAE0BA",
  color2:"white",
  color3:"rgb(45,45,45)",
  color4:"transparent",
  color5:"#f2f2f2",
  color6:"#f7f7f7",
  colorGray:"#d3d3d3",

};

export const defaultStyle = StyleSheet.create({
  padding:35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.color1_light,
});

export const inputStyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color1_light2, 
  marginVertical:10,
  marginHorizontal: 20,
});


