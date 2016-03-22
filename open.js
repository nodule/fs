module.exports = {
  name: "open",
  ns: "fs",
  description: "fs open",
  phrases: {
    active: "Opening file {{input.path}} ({{input.flags}}, {{input.mode}})"
  },
  ports: {
    input: {
      path: {
        title: "Path",
        type: "string"
      },
      flags: {
        title: "Flags",
        type: "string"
      },
      mode: {
        title: "Mode",
        type: "string"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      fd: {
        title: "Fd",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function open(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.open($.path, $.flags, $.mode, function openCallback(error, fd) {
        cb({
          error: error,
          fd: fd
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