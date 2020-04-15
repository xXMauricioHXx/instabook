import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SearchBar, Card, ListItem, Icon } from 'react-native-elements';
import { Colors } from '../../contants';

import { books, users } from '../../mock';

class HomeScreen extends Component {
  constructor({ navigation }) {
    super();
    this.state = {
      search: null,
    };

    navigation.setOptions({
      header: () => null,
    });
    this.searchBar = null;
  }

  onChangeText = search => {
    this.setState({ search });
  };

  componentDidMount() {}

  handleSearch = () => {
    this.searchBar.blur();
  };

  renderStarts = number => {
    let starts = [];

    for (let i = 0; i < 5; i++) {
      let typeStar = 'star';
      if (i + 1 > number) {
        typeStar = 'star-border';
      }
      starts.push(
        <Icon
          key={i}
          name={typeStar}
          color={Colors.secundaryColor}
          size={30}
          iconStyle={{ elevation: 15 }}
        />,
      );
    }
    return starts;
  };

  render() {
    const { search } = this.state;
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.bgColor,
          padding: 20,
        }}
        onTouchStart={() => this.searchBar.blur()}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              marginTop: 120,
              color: Colors.textColor,
            }}
          >
            Hi, Mauricio
          </Text>
          <Text
            style={{
              width: '75%',
              fontSize: 16,
              marginHorizontal: 20,
              justifyContent: 'center',
              fontWeight: '100',
              color: Colors.textColor,
            }}
          >
            What book would you like to add in your shelf? Search below.
          </Text>
        </View>
        <View>
          <SearchBar
            searchIcon={() => (
              <TouchableOpacity
                style={styles.searchBarLeftIconContainerStyle}
                onPress={this.handleSearch}
              >
                <Icon name="search" color={Colors.bgColor} />
              </TouchableOpacity>
            )}
            ref={e => (this.searchBar = e)}
            clearIcon={false}
            containerStyle={styles.searchBarContainerStyle}
            inputContainerStyle={styles.searchBarInputContainerStyle}
            inputStyle={styles.searchBarInputStyle}
            placeholder="Author, books, etc..."
            onChangeText={this.onChangeText}
            value={search}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{ marginLeft: 15, fontSize: 16, color: Colors.textColor }}
          >
            What are your friend reading?{' '}
          </Text>
          <Card
            containerStyle={{
              padding: 0,
              width: '100%',
              margin: 0,
              marginHorizontal: 10,
              marginVertical: 20,
            }}
          >
            {users.map((item, index) => {
              return (
                <ListItem
                  Component={TouchableOpacity}
                  key={index}
                  leftAvatar={{ source: { uri: item.avatar } }}
                  title={item.name}
                  subtitle={`Reading - ${item.reading}`}
                  bottomDivider
                />
              );
            })}
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 14,
                  padding: 20,
                  color: Colors.primaryColor,
                  fontWeight: 'bold',
                }}
              >
                SEE MORE
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={{ marginBottom: 60 }}>
          <Text
            style={{ marginLeft: 15, fontSize: 16, color: Colors.textColor }}
          >
            Recommended
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              {books.map((item, index) => {
                return (
                  <Card
                    key={index}
                    containerStyle={{
                      width: Dimensions.get('window').width - 95,
                      borderRadius: 10,
                      position: 'relative',
                      elevation: 5,
                    }}
                  >
                    <View
                      style={{
                        width: 210,
                        height: 210,
                        backgroundColor: Colors.primaryColor,
                        borderRadius: 200,
                        position: 'absolute',
                        top: -130,
                        left: -75,
                      }}
                    />
                    <View
                      style={{
                        width: 210,
                        height: 210,
                        backgroundColor: Colors.secundaryColor,
                        borderRadius: 200,
                        position: 'absolute',
                        bottom: -130,
                        right: -75,
                      }}
                    />
                    <View
                      style={{ alignItems: 'flex-start', flexDirection: 'row' }}
                    >
                      <Image
                        style={{
                          width: 200,
                          height: 200,
                          resizeMode: 'contain',
                          marginLeft: -35,
                        }}
                        source={{ uri: item.imgUrl }}
                      />
                      <View>
                        <Text
                          style={{
                            color: Colors.textColor,
                            fontSize: 16,
                            marginLeft: -20,
                            width: 125,
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            color: Colors.subTextColor,
                            fontSize: 16,
                            marginLeft: -20,
                            width: 125,
                          }}
                        >
                          {item.author}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            marginLeft: -25,
                            paddingTop: 20,
                          }}
                        >
                          {this.renderStarts(item.rating).map(start => start)}
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.primaryColor,
                        flex: 1,
                        marginTop: 10,
                        padding: 10,
                        alignItems: 'center',
                        borderRadius: 5,
                        elevation: 15,
                      }}
                    >
                      <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                        View
                      </Text>
                    </TouchableOpacity>
                  </Card>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainerStyle: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    height: 70,
    marginVertical: 40,
  },
  searchBarInputContainerStyle: {
    height: 70,
    width: '100%',
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#F7F6F7',
  },
  searchBarLeftIconContainerStyle: {
    height: 50,
    backgroundColor: '#5466F2',
    padding: 15,
    elevation: 5,
    borderRadius: 10,
  },
  searchBarInputStyle: {
    height: 70,
    flex: 1,
    color: Colors.textColor,
  },
  searchContainerResultShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 25,
  },
});

export default HomeScreen;
