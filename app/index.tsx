import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const homeImagePath = require("../assets/images/homeImage.jpg");
  const router = useRouter();

  const data = JSON.stringify([{ name: "John" }, { name: "Doe" }]);

  return (
    <View style={styles.container}>
      <Image style={styles.homeImage} source={homeImagePath} />
      <View style={styles.introContainer}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          adipisci saepe enim, earum non velit fugit. This fox is that.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: "auth/sign-in",
            })
          }
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  homeImage: {
    height: "65%", // Adjust the height as needed
    width: "100%", // Adjust the width as needed
    resizeMode: "cover",
  },
  introContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  description: {
    fontSize: 15,
    color: "gray",
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "black",
    width: "80%",
    borderRadius: 25,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
