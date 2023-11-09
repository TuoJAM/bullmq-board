export const config = {
  port: process.env.PORT || 4002,
  cluster: {
    checkErrorMinutes: 1,
    checkIdleMinutes: 1,
    deadMinutes: 5,
    autoScalingWaitMinutes: 5,
    autoScalingIdleMinutes: 5,
    maxTaskOverConcurrency: 1,
    clusterHeartbeatMinutes: 1,
  },
  dataLake: {
    blockSize: 1024 * 1024 * 128,
    minBlockSize: 1024 * 1024 * 32,
  },
};
