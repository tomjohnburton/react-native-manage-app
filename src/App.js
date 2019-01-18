import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";
import ReduxThunk from "redux-thunk";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const config = {
      apiKey: "AIzaSyBlm6HWlG77x6jGN7xum91yfsJ0VphTsS0",
      authDomain: "manager-42e27.firebaseapp.com",
      databaseURL: "https://manager-42e27.firebaseio.com",
      projectId: "manager-42e27",
      storageBucket: "manager-42e27.appspot.com",
      messagingSenderId: "752485288510"
    };
    firebase.initializeApp(config);
  };

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
