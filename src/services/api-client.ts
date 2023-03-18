import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7872ac8d01b34e5d92504b87b54c5381',
  },
});
