exports = module.exports = exports = module.exports = function() {
  var mod = {
    fill: function(record, key, value) {
      if (app.has(value) && value !== false) {
        var list = [];
        if (typeof value === "string") {
          list.push({url: value});
        } else {
          for (var i=0; i<=value.length-1; i++) {
            list.push({url: value[i]});
          }
        }
        record.fields[key] = list;
        var json = JSON.stringify(record.fields[key]);
        if (record.fields["_" + key] === json) delete record.fields[key];
        record.fields["_" + key] = json;
      }
    }
  };
  return mod;
}