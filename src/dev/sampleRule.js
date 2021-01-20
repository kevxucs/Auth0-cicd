(() => {
  function rule(user, context, callback) {
    // testing v111
    console.log("IMPORT");
    console.log("Context -> ", context);
    console.log(context.request.query.scope);
    return callback(null, user, context);
  }
  if (module) {
    module.exports = rule;
  } else {
    return rule;
  }
})() // prettier-ignore
