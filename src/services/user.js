import { HTTP } from '/config/http';

const User = {
  async getData() {
    try {
      const { data } = await HTTP.get('account/verify_credentials.json');

      return data;
    } catch (err) {
      throw err;
    }
  },

  async getTimeline() {
    try {
      const { data } = await HTTP.get('statuses/home_timeline.json');

      return data;
    } catch (err) {
      throw err;
    }
  },

  async sendTweet(status) {
    try {
      const { data } = await HTTP.post('statuses/update.json', status);

      return data;
    } catch (err) {
      throw err;
    }
  }
};

export default User;
