module.exports = {
  name: "ftruncate",
  ns: "fs",
  description: "fs ftruncate",
  phrases: {
    active: "Truncating fd with a length of {{input.len}}"
  },
  ports: {
    input: {
      fd: {
        type: "object"
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
  fn: function ftruncate(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.ftruncate($.fd, $.len, function ftruncateCallback(exception) {
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