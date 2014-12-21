module.exports = {
  name: "write",
  ns: "fs",
  description: "fs write",
  phrases: {
    active: "Writing to file descriptor"
  },
  ports: {
    input: {
      fd: {
        title: "Fd",
        type: "object"
      },
      buffer: {
        title: "Buffer",
        type: "object"
      },
      offset: {
        title: "Offset",
        type: "integer"
      },
      length: {
        title: "Length",
        type: "integer"
      },
      position: {
        title: "Position",
        type: "integer"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      written: {
        title: "Written",
        description: "How many *bytes* were written from *buffer*",
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
  fn: function write(input, output, state, done, cb, on, fs) {
    var r = function() {
      fs.write(input.fd, input.buffer, input.offset, input.length, input.position, function writeCallback(error, written, buffer) {
        cb({
          error: error,
          written: written,
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