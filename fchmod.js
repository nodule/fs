module.exports = {
  name: "fchmod",
  ns: "fs",
  description: "fs fchmod",
  phrases: {
    active: "Changing file mode for fd"
  },
  ports: {
    input: {
      fd: {
        title: "Fd",
        type: "object"
      },
      mode: {
        title: "Mode",
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
  fn: function fchmod(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.fchmod($.fd, $.mode, function fchmodCallback(exception) {
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