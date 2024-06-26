import React from 'react';
import { View, Text, Image, FlatList, Share, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { buttonList } from './../../constants/constants';

export default function ButtonList() {
  const { signOut } = useAuth();
  const router = useRouter();

  const onMenuClick = (item) => {
    if (item.path === 'logout') {
      signOut();
      return;
    }
    if (item.path === 'share') {
      Share.share({
        message: 'Download the Book Search App',
      });
      return;
    }
    router.push(item.path);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => onMenuClick(item)}
      style={styles.itemContainer}
    >
      <Image
        source={item.icon}
        style={styles.icon}
      />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={buttonList}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  flatListContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: Colors.PWHITE,
    borderRadius: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  itemText: {
    fontFamily: 'comfortaa-r',
    fontSize: 16,
    flex: 1,
  },
});
