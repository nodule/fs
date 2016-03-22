module.exports = {
  name: "rmdir",
  ns: "fs",
  description: "fs rmdir",
  phrases: {
    active: "Removing directory {{input.path}}"
  },
  ports: {
    input: {
      path: {
        title: "Path",
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
  fn: function rmdir(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.rmdir($.path, function rmdirCallback(exception) {
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