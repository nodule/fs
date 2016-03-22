module.exports = {
  name: "createReadStream",
  ns: "fs",
  title: "Create Read Stream",
  description: "Creats a Readable Stream Object",
  phrases: {
    active: "Reading file {{input.file}} ({{input.encoding}})"
  },
  ports: {
    input: {
      file: {
        title: "Filename",
        type: "string",
        required: true
      },
      start: {
        title: "Start",
        type: "number",
        "default": null
      },
      end: {
        title: "End",
        type: "number",
        "default": null
      },
      encoding: {
        title: "Encoding",
        type: "string",
        "default": "utf-8"
      },
      flag: {
        title: "Flag",
        type: "string",
        "default": "r"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      fd: {
        type: "number",
        title: "File descriptor"
      },
      stream: {
        title: "Stream",
        type: "Stream"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function createReadStream(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      var opts = {
        flag: $.flag,
        encoding: $.encoding
      };

      if ($.start) opts.start = $.start;
      if ($.end) opts.end = $.end;

      var stream = fs.createReadStream($.file, opts);
      output({
        stream: stream
      });

      stream.on('error', function(err) {
        output({
          error: $.create(err)
        });
      });

      stream.on('open', function(fd) {
        output({
          fd: $.create(fd)
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