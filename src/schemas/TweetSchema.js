export default class TweetSchema {
  static schema = {
    name: 'Tweet',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      id_str: 'string',
      text: 'string',
      user: 'string'
    }
  }
}
