import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const contacts = [
  { id: '1', name: 'Radit TI A', phone: '+62 895 1475 0080', photo: require('../assets/Radit.jpg') },
  { id: '2', name: 'Fadhil TI A', phone: '+62 896 6398 4287', photo: require('../assets/Fadhil.jpg') },
  { id: '3', name: 'Raihan TI A', phone: '+62 838 1801 5271', photo: require('../assets/Raihan.jpg') },
  { id: '4', name: 'Dani Akhmad Maulana', phone: '+62 852 1997 1516', photo: require('../assets/Dani.jpg') },
  { id: '5', name: 'Solo', phone: '+62 812 8762 4263', photo: require('../assets/Solo.jpg') },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => navigation.navigate('Detail', { contact: item })}
          >
            <View style={styles.contactDetails}>
              <Image source={item.photo} style={styles.contactPhoto} />
              <View style={styles.infoContainer}>
                <Text style={styles.contactName}>{item.name}</Text>
                {item.phone && <Text style={styles.contactPhone}>{item.phone}</Text>}
              </View>
            </View>
            <Image source={require('../assets/chevron.png')} style={styles.event} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Lighter border
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 2, // Subtle shadow
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 10, // Added spacing between items
  },
  contactDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  infoContainer: {
    justifyContent: 'center', // Center text vertically
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold', // Bold name
    marginBottom: 5, // Added spacing between name and phone
  },
  contactPhone: {
    fontSize: 14,
    color: '#888', // Subtler phone number color
  },
  chevron: {
    width: 18,
    height: 18,
    tintColor: '#ccc', // Light chevron color
  },
});

export default Home;
