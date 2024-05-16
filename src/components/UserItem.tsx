import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { User } from "../types/User";

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }:UserItemProps) => {    
  const firstLetter = user.name.substring(0, 1);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#add8e6",
          justifyContent: "center",
          marginRight: 10,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            color: "blue",
          }}
        >
          {firstLetter}
        </Text>
      </View>
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.designation}>
          {user.type === 0 ? "Admin" : "Manager"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  designation: {
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
  },
  email: {
    fontSize: 16,
    color: "#555",
  },
});

export default UserItem;
