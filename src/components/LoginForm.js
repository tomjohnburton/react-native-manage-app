import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection, Input, Button } from "./common";
import { connect } from "react-redux";
import { emailChange, passwordChange, loginUser } from "../actions";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onEmailChange = text => {
    this.props.emailChange(text);
  };
  onPasswordChange = text => {
    this.props.passwordChange(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="abc@123.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>Log In </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return { email: state.auth.email, password: state.auth.password };
};
export default connect(
  mapStateToProps,
  { emailChange, passwordChange, loginUser }
)(LoginForm);
