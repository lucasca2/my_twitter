import Realm from 'realm';

import TweetSchema from "/schemas/TweetSchema";

export default function getRealm() {
  return Realm.open({
    schema: [ TweetSchema ],
  })
}
