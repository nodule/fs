module.exports = {
  name: "fchown",
  ns: "fs",
  description: "fs fchown",
  phrases: {
    active: "Changing file owner/group for fd"
  },
  ports: {
    input: {
      fd: {
        title: "Fd",
        type: "object"
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
  fn: function fchown(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.fchown(input.fd, input.uid, input.gid, function fchownCallback(exception) {
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