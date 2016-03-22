module.exports = {
  name: "chmod",
  ns: "fs",
  title: "Chmod",
  description: "fs chmod",
  phrases: {
    active: "Changing file mode on {{input.path}}"
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
  fn: function chmod(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.chmod($.path, $.mode, function chmodCallback(exception) {
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