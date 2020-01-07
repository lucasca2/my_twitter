import React, { useEffect, useState } from 'react';
import styles from '/styles';

// Components
import MainView from "/components/MainView";
import Header from "/components/Header";
import Text from "/components/Text";

import Timeline from "./components/Timeline";

// Static
import LogoSmall from '/static/Icons/LogoSmall';

import userService from "/services/user";

export default function Home({
  navigation
}) {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    async function fetchTimeLine() {
      alert(1);
      if(!tweets) {
        // const timeline = await userService.getTimeline();
        //
        // setTweets(timeline);
      }
    }

    fetchTimeLine();
  }, []);

  return (
    <MainView
      noScroll={true}
      topComponent={() => (
        <Header
          leftComponent={() => (
            <LogoSmall height={40} width={225} fill={styles.colors.default.secondary}/>
          )}
          rightIcon={"menu"}
          rightIconAction={navigation.toggleDrawer}
        />
      )}
    >
      <Timeline tweets={tweets} />
    </MainView>
  )
}
