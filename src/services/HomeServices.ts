import { request } from 'utils/request';

const homeServices = {
  getMetadata() {
    return request.request({
      method: 'GET',
      url: '',
    });
  },
};

export default homeServices;
