import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const users = useSelector((state) => state.user.users);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            {loggedInUser && loggedInUser.id === item.id && (
              <Button
                title="Edit"
                onPress={() => navigation.navigate("EditUser", { user: item })}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  userContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default HomeScreen;
