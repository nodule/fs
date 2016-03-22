module.exports = {
  name: "lchmod",
  ns: "fs",
  description: "fs lchmod",
  phrases: {
    active: "Changing file mode for {{input.path}}"
  },
  ports: {
    input: {
      path: {
        title: "Path",
        type: "string"
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
  fn: function lchmod(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.lchmod($.path, $.mode, function lchmodCallback(exception) {
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