/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1593701251922_2195';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.emqtt = {
    client: {
      host: 'mqtt://localhost',
      username: 'server',
      password: 'admin',
      clientId: 'egg',
      options: {
        keepalive: 60,
        protocolId: 'MQTT',
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 5,
        connectTimeout: 30 * 1000,
        rejectUnauthorized: false
      },
      msgMiddleware: ['msg2json']
    }
  }

  exports.mongoose = {
    // 多个数据库配置
    // clients: {
    //   // db1 数据库别名
    //   db1: {
    //     url: 'mongodb://106.53.254.36:27017/test?replaceState=rs',
    //     options: {},
    //   },
    //   db2: {
    //     url: 'mongodb://106.53.254.36:27018/test?replaceState=rs',
    //     options: {},
    //   },
    //   db3: {
    //     url: 'mongodb://106.53.254.36:27019/test?replaceState=rs',
    //     options: {},
    //   }
    // }
    client: {
      //本地
      // url: 'mongodb://wbq:123426@127.0.0.1:17777/MTQ',
      //远程
      // url: "mongodb://admin:qwerty123@118.190.105.235:27017/hzfds_admin",
      // url: "mongodb://106.53.254.36:27017/test,mongodb://106.53.254.36:27018/test,mongodb://106.53.254.36:27019/test",
      // url: "mongodb://106.53.254.36:27017,106.53.254.36:27018,106.53.254.36:27019/test?replaceState=rs",
      // url: "mongodb://106.53.254.36:27018/test?replaceState=rs",
      // url: "mongodb://106.53.254.36:27017?replicaSet=rs",
      // url: "mongodb://localhost:27017,localhost:27018,localhost:27019?replicaSet=rs",
      // url: "mongodb://localhost:27017,localhost:27018,localhost:27019?replicaSet=rs",
      url: "mongodb://localhost:27017,localhost:27018,localhost:27019?replicaSet=rs",
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // retryWrites:"false"
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};


// 多个数据库配置
// config.mongoose = {
//   clients: {
//     // db1 数据库别名
//     db1: {
//       url: 'mongodb:127.0.0.1/user',
//       options: {},
//     },
//     db2: {
//       url: 'mongodb:127.0.0.1/goods',
//       options: {},
//     }
//   }
// }