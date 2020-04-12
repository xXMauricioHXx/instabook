import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Card from '../../components/Card';

import book1 from '../../assets/book1.jpg';
import book2 from '../../assets/book2.jpg';
import book3 from '../../assets/book3.jpg';

import { books } from '../../mock';
import { Container, Title } from '../../style';
import {
  SearchBarResult,
  SearchBarResultContainer,
  SearchBarResultItem,
  SearchBarResultItemAuthor,
} from './style';

const famousBooks = [
  {
    image: book1,
    title: 'Vidas Secas',
    author: 'Graciliano Ramos',
  },
  {
    image: book2,
    title: 'A menina que roubava livros',
    author: 'Markus Zusak',
  },
  {
    image: book3,
    title: 'A pirâmide Vermelha',
    author: 'Rick Riordan',
  },
];

export default class HomeScreen extends Component {
  constructor({ navigation }) {
    super();
    navigation.setOptions({ header: () => null });
  }

  state = {
    search: null,
    results: [],
    selectedItem: null,
    famousBooks: [],
  };

  componentDidMount() {
    this.setState({ famousBooks });
  }

  handleOnChangeText = async search => {
    if (search) {
      this.setState({
        search,
      });
      setTimeout(() => this.setState({ results: books }), 1000);
    }
    this.setState({ search: null, results: null });
  };

  handleOnTouchablePress = item => {
    this.setState({ search: item.name });
  };

  renderItemList = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderColor: '#d6d6d6',
          padding: 20,
        }}
        onPress={() => this.handleOnTouchablePress(item)}
      >
        <SearchBarResultItem>
          {item.title} -
          <SearchBarResultItemAuthor> {item.author}</SearchBarResultItemAuthor>
        </SearchBarResultItem>
      </TouchableOpacity>
    );
  };

  render() {
    const { search, results, famousBooks } = this.state;
    return (
      <Container>
        <SearchBar
          platform={'android'}
          containerStyle={styles.searchBarContainerStyle}
          inputContainerStyle={styles.searchBarInputContainerStyle}
          leftIconContainerStyle={styles.searchBarLeftIconContainerStyle}
          rightIconContainerStyle={styles.searchBarRightIconContainerStyle}
          inputStyle={styles.searchBarInputStyle}
          placeholder="Autores, livros..."
          onChangeText={this.handleOnChangeText}
          value={search}
        />
        {results && results.length ? (
          <SearchBarResultContainer>
            <SearchBarResult>
              <FlatList
                data={results}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItemList}
              />
            </SearchBarResult>
          </SearchBarResultContainer>
        ) : null}
        <Title>Most Famous Book</Title>
        <Card data={famousBooks} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainerStyle: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginTop: 50,
    height: 50,
    marginHorizontal: 5,
    elevation: 5,
    borderRadius: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchBarInputContainerStyle: {
    height: 50,
    marginTop: 0,
  },
  searchBarLeftIconContainerStyle: {
    height: 50,
    paddingTop: 0,
    marginBottom: 20,
  },
  searchBarRightIconContainerStyle: {
    height: 50,
    paddingTop: 0,
    marginBottom: 20,
  },
  searchBarInputStyle: {
    paddingTop: 0,
    marginBottom: 20,
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
