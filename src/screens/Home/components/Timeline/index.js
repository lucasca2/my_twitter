import React from 'react';
import { FlatList } from "react-native";

// Components
import Row from '/components/Row';
import Text from '/components/Text';

// Styles
import {
  Avatar,
  WrapperAvatar,
  WrapperContent,
  WrapperItem,
  Line
} from './styles';

export default function Timeline({
  tweets
}) {
  return (
    <FlatList
      data={tweets}
      keyExtractor={item => item.id_str}
      renderItem={({ item, index }) => (
        <>
          {index > 0 && (
            <Row>
              <Line />
            </Row>
          )}
          <WrapperItem>
            <WrapperAvatar>
              <Avatar source={{ uri: item?.user?.profile_image_url }}/>
            </WrapperAvatar>
            <WrapperContent>
              <Row>
                <Text weight={"medium"}>{item?.user?.name} </Text>
                <Text color={"whiteDarken"}>@{item?.user?.screen_name}</Text>
              </Row>
              <Text>{item?.text}</Text>
            </WrapperContent>
          </WrapperItem>
        </>
      )}
    />
  )
};
