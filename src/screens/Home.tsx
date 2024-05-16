import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Image
            source={require("../assets/menuIcon.png")}
            style={[styles.menuIconImage, { tintColor: "blue" }]}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Home</Text>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EmptyScreen");
          }}
        >
          <Text style={styles.textContent}>{"Go to Empty Screen"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginTop: 36,
    padding: 14,
  },

  menuIconImage: {
    width: 26,
    height: 26,
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textContent: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
