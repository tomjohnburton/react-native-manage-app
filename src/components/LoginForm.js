import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection, Input, Button } from "./common";
import { connect } from "react-redux";
import { emailChange } from "../actions";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onEmailChange(text) {
    this.props.emailChange(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="abc@123.com"
            onChangeText={() => this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input label="Password" placeholder="password" secureTextEntry />
        </CardSection>
        <CardSection>
          <Button>Log In </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  null,
  { emailChange }
)(LoginForm);
