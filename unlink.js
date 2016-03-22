module.exports = {
  name: "unlink",
  ns: "fs",
  description: "fs unlink",
  phrases: {
    active: "Unlinking file {{input.path}}"
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
  fn: function unlink(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.unlink($.path, function unlinkCallback(exception) {
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