module.exports = {
  name: "read",
  ns: "fs",
  description: "fs read",
  phrases: {
    active: "Reading fd {{input.offset}}:{{input.length}}:{{input.position}} "
  },
  ports: {
    input: {
      fd: {
        type: "object"
      },
      buffer: {
        type: "object"
      },
      offset: {
        type: "integer"
      },
      length: {
        type: "integer"
      },
      position: {
        type: "integer"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      bytesRead: {
        title: "Bytes read",
        type: "object"
      },
      buffer: {
        title: "Buffer",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function read(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.read($.fd, $.buffer, $.offset, $.length, $.position, function readCallback(error, bytesRead, buffer) {
        cb({
          error: error,
          bytesRead: bytesRead,
          buffer: buffer
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