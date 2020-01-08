import React, { useState } from 'react';

// Components
import MainView from '/components/MainView';
import Header from "/components/Header";
import Button from "/components/Button";
import Text from "/components/Text";

// Styles
import {
  TextArea
} from './styles';

// Services
import userService from '/services/user';
import Row from "../../components/Row";

export default function SendTweet({
  navigation
}) {
  const [status, setStatus] = useState('');

  async function handleSendTweet() {
    if(status) {
      try {
        await userService.sendTweet({ status });

        alert('Sent with success');
        setStatus('');
      } catch (err) {
        alert('Error sending Tweet')
      }
    }
  }

  return (
    <MainView
      topComponent={() => (
        <Header
          title={"New Tweet"}
          rightIcon={"menu"}
          rightIconAction={navigation.toggleDrawer}
          leftIcon={"arrow-back"}
          leftIconAction={navigation.goBack}
        />
      )}

      bottomComponent={() => (
        <Button
          color={"success"}
          text={"Send Tweet"}
          onPress={handleSendTweet}
        />
      )}
    >
      <Text weight={"medium"} fontSize={"small"}>
        Compose new tweet
      </Text>
      <TextArea
        maxLength={280}
        value={status}
        onChangeText={setStatus}
        placeholder={"What's happening?"}
      />
      <Row align={"end"}>
        <Text weight={"medium"} fontSize={"small"} color={status?.length === 280 ? "danger" : status?.length > 250 ? "warning" : "text"}>
          {status?.length || 0}/280
        </Text>
      </Row>
    </MainView>
  )
}
