/*
 * @Date: 2020-01-08 11:32:45
 * @LastEditors: wangbingqi
 * @LastEditTime: 2020-04-01 14:37:07
 */
module.exports = app => {

  const mongoose = app.mongoose;
  // const connect = app.mongooseDB.get('db1') // config配置的数据库别名
  // console.log('connect:', connect);
  const Schema = mongoose.Schema;
  var d = new Date();
  var Test1Schema = Schema({
    name: {
      type: String
    },
  })

  // return mongoose.model('Test1', Test1Schema, 'test1');
  const Test1 = mongoose.model('Test1', Test1Schema);
  return Test1();
  // const Test1 = connect.model('Test1', Test1Schema);
  // return Test1();
  // console.log('zzz:',connect.model('Test1', Test1Schema));
  // return connect.model('Test1', Test1Schema)
};