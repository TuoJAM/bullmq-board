import { ExpressAdapter } from '@bull-board/express';

export const config = {
  webServer: {
    host: '127.0.0.1:4001',
    appKey: 'a58dcdef63c62',
    appSecret: '0749f17a37ebb0ff8ef8ba952a906b4ced2717317',
  },
  redis: {
    host: '192.168.72.128',
    port: 6379,
    db: 1,
  },
  bullBoard: {
    route: '/queues',
    adapter: ExpressAdapter,
  },
};
