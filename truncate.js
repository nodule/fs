module.exports = {
  name: "truncate",
  ns: "fs",
  description: "fs truncate",
  phrases: {
    active: "Truncating file {{input.path}} to {{input.len}}"
  },
  ports: {
    input: {
      path: {
        type: "string"
      },
      len: {
        type: "integer"
      }
    },
    output: {
      exception: {
        title: "Exception",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function truncate(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.truncate($.path, $.len, function truncateCallback(exception) {
        cb({
          exception: exception
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}