module.exports = {
  name: "createWriteStream",
  ns: "fs",
  title: "Create Write Stream",
  description: "Creates a Writeable Stream Object",
  phrases: {
    active: "Writing file {{input.file}} ({{input.encoding}})"
  },
  ports: {
    input: {
      file: {
        title: "Filename",
        type: "string",
        required: true
      },
      encoding: {
        title: "Encoding",
        type: "string",
        "default": "utf-8"
      },
      flag: {
        title: "Flag",
        type: "string",
        "default": "w"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      stream: {
        title: "Stream",
        type: "Stream"
      },
      fd: {
        type: "number",
        title: "File descriptor"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function createWriteStream(input, output, state, done, cb, on, fs) {
    var r = function() {
      var opts = {
        flag: input.flag,
        encoding: input.encoding
      };

      var stream = fs.createWriteStream(input.file, opts);
      output({
        stream: stream
      });

      stream.on('error', function(err) {
        output({
          error: err
        });
      });

      stream.on('open', function(fd) {
        output({
          fd: fd
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