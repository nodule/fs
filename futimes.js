module.exports = {
  name: "futimes",
  ns: "fs",
  description: "fs futimes",
  phrases: {
    active: "Set access & modification times for fd to {{input.atime}} and {{input.mtime}}"
  },
  ports: {
    input: {
      fd: {
        type: "object"
      },
      atime: {
        type: "string"
      },
      mtime: {
        type: "string"
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
  fn: function futimes(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.futimes($.fd, $.atime, $.mtime, function futimesCallback(exception) {
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