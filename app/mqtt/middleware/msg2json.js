
module.exports = () => {

  return async (ctx, next) => {
    module.exports = () => {

      return async (ctx, next) => {
        try {
          ctx.req.message = JSON.parse(ctx.req.msg);
        } catch (err) {
          ctx.logger.error(err);
        }
        await next();
        ctx.logger.info(`Response_Time: ${ctx.starttime ? Date.now() - ctx.starttime : 0}ms Topic：${ctx.req.topic} Msg: ${ctx.req.msg}`);
      };
    };
  }
}