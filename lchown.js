module.exports = {
  name: "lchown",
  ns: "fs",
  description: "fs lchown",
  phrases: {
    active: "Changing file owner/group for {{input.path}}"
  },
  ports: {
    input: {
      path: {
        title: "Path",
        type: "string"
      },
      uid: {
        title: "Uid",
        type: "integer"
      },
      gid: {
        title: "Gid",
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
  fn: function lchown(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.lchown($.path, $.uid, $.gid, function lchownCallback(exception) {
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