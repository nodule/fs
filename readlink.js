module.exports = {
  name: "readlink",
  ns: "fs",
  description: "fs readlink",
  phrases: {
    active: "Reading link {{input.path}}"
  },
  ports: {
    input: {
      path: {
        type: "string"
      }
    },
    output: {
      error: {
        type: "object"
      },
      linkString: {
        title: "Link String",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function readlink(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.readlink(input.path, function readlinkCallback(error, linkString) {
        cb({
          error: error,
          linkString: linkString
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