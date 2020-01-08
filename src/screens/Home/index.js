import React, { useEffect, useState } from 'react';
import styles from '/styles';

// Components
import MainView from "/components/MainView";
import Header from "/components/Header";

import Timeline from "./components/Timeline";

// Static
import LogoSmall from '/static/Icons/LogoSmall';

// Services
import userService from "/services/user";
import getRealm from "/services/realm";

export default function Home({
  navigation
}) {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    async function fetchTimeLine() {
      const realm = await getRealm();
      const localTweets = realm.objects('Tweet').map(t => ({ ...t, user: JSON.parse(t.user)}));
      let timeline = [];

      try {
        timeline = await userService.getTimeline();

        realm.write(() => {
          const allTweets = realm.objects('Tweet');
          realm.delete(allTweets);
        });

        timeline?.slice(0, 10)?.forEach(tweet => {
          let newTweet = {
            id: tweet.id,
            id_str: tweet.id_str,
            text: tweet.text,
            user: JSON.stringify(tweet.user),
          };

          if(!localTweets.find(t => t.id === newTweet.id)) {
            realm.write(() => {
              realm.create('Tweet', newTweet);
            });
          }
        });
      } catch (err) {
        timeline = localTweets;
      }

      setTweets(timeline);
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
