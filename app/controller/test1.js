'use strict';

const { mongoose } = require('../../config/plugin');

const Controller = require('egg').Controller;

// class Test1{
//   name="xxx";
// }

let s;
let i = 0;
// const test1 = Test1();
// console.log('test1:', test1);
var session;
// url: "mongodb://admin:qwerty123@118.190.105.235:27017/hzfds_admin",
const uri = 'mongodb://admin:qwerty123@118.190.105.235:27017/hzfds_admin';
// console.log(MongoClient());
class Test1Controller extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test() {
    console.log('test');
    // const client = new MongoClient(uri);
    // await client.connect();
    this.ctx.body = {
      msg: 'test'
    }
  }

  async add() {
    const { mongoose } = this.ctx.app;
    const db = mongoose.connection;
    session = await mongoose.startSession(
      {
        readConcern: { level: 'snapshot' },
        writeConcern: { w: 'majority' },
      }
    );
    try {
      await session.startTransaction();
      let t1 = { name: 'hello hhh' };
      //插入
      // let haha = await db.collection('user').insertOne(t1, { session });
      //修改
      await db.collection('user').updateOne({ name: 'yucheng111' }, { $set: { name: 'yucheng222' } }, { session });
      // a = 2
      this.ctx.body = {
        msg: 'commit success',
      }
      await session.commitTransaction();
      console.log('提交事务成功');

    } catch (e) {
      console.log('回滚');
      this.ctx.body = {
        msg: 'operate fail',
        e: 'fail:' + e
      }
      await session.abortTransaction();
    } finally {
      await session.endSession();
    }

  }
}

module.exports = Test1Controller;
