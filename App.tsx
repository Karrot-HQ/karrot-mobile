import React, { useCallback, useContext, useEffect, useRef, useState, useMemo } from 'react';
import { Text, View, ScrollView, ActivityIndicator, FlatList, TextInput, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {ThemeProvider} from 'react-native-elements';
import { Provider, connect } from "react-redux";
import { createStore } from 'redux';
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";

import Navigation from "./components/NavigationBar";
import storeContext from './components/redux/store';

const client = new ApolloClient({
  uri: "https://us-central1-karrot-hq.cloudfunctions.net/graphql",
  cache: new InMemoryCache(),
});

const store = createStore(storeContext);

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    </ApolloProvider>
  )
}

export default App;
