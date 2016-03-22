module.exports = {
  name: "chown",
  ns: "fs",
  description: "fs chown",
  phrases: {
    active: "Changing owner/group for {{input.path}}"
  },
  ports: {
    input: {
      path: {
        title: "Path",
        type: "string"
      },
      uid: {
        title: "uid",
        type: "integer"
      },
      gid: {
        title: "gid",
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
  fn: function chown(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.chown($.path, $.uid, $.gid, function chownCallback(exception) {
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