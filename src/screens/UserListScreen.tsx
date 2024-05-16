import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import UserList from "../components/UserList";
import SearchBar from "../components/SearchBar";
import { User } from "../types/User";
import users from '../data/users.json';
import { DrawerActions, useNavigation } from "@react-navigation/native";

const UserListScreen: React.FC = () => {

  const navigation = useNavigation()
  const [selectedUserType, setSelectedUserType] = useState<number | null>(0);


  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
      let filteredData = users.users;
    
      if (selectedUserType !== null) {
        filteredData = filteredData.filter((user) => user.type === selectedUserType);
      }
    
      if (searchQuery !== "") {
        filteredData = filteredData.filter((user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }    
      setFilteredUsers(filteredData);
    }, [searchQuery, selectedUserType]);


  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.titleHeader}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Image
            source={require("../assets/menuIcon.png")}
            style={[styles.menuIconImage,{tintColor: 'blue' }]}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Customers'}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={styles.typeHeader}
        >
          <Text style={styles.header}>{"User Types"}</Text>
          <View
            style={{
              backgroundColor:
                selectedUserType === 0 ? "#add8e6" : "transparent",
                borderRadius:8,
              padding: 16,
            }}
          >
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => setSelectedUserType(0)}
            >
              <View style={styles.radioOuterCircle}>
                {selectedUserType === 0 && (
                  <View style={styles.radioInnerCircle} />
                )}
              </View>
              <Text style={styles.radioText}>Admin</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor:
                selectedUserType === 1 ? "#add8e6" : "transparent",
                borderRadius:8,
              padding: 16,
            }}
          >
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => setSelectedUserType(1)}
            >
              <View style={styles.radioOuterCircle}>
                {selectedUserType === 1 && (
                  <View style={styles.radioInnerCircle} />
                )}
              </View>
              <Text style={styles.radioText}>{"Manager"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
          <Text
            style={{ fontSize: 24, fontWeight: "bold", paddingVertical: 10 }}
          >
            {selectedUserType === 1 ? "Manager Users" : "Admin Users"}
          </Text>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <UserList users={filteredUsers}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  titleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginTop:36,
    padding:14
  },

  menuIconImage: {
    width: 26,
    height: 26,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  radioOuterCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  radioInnerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#000",
  },
  radioText: {
    fontSize: 16,
  },
  typeHeader:{
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingBottom: 20,
  }
});

export default UserListScreen;
