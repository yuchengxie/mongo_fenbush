
//mqtt控制器，处理mqtt请求
module.exports = (app) => {
  return class ServerController extends app.Controller {
    async index() {
      //emqtt.publish方法 向指定topic推送消息，第一个参数为topic，第二个参数为消息内容，第三个参数为QOS        
      await this.app.emqtt.publish(this.ctx.req.message.name, '收到消息内容为:' + this.ctx.req.message.msg, { qos: 0 });
    }
  };
};