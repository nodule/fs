module.exports = {
  name: "watch",
  ns: "fs",
  description: "Watches a file",
  phrases: {
    active: "Watching file {{input.file}}"
  },
  ports: {
    input: {
      file: {
        type: "string",
        title: "Filename",
        required: true
      },
      persistent: {
        type: "boolean",
        title: "Persistent",
        description: "Whether it should keep watching",
        "default": false
      }
    },
    output: {
      event: {
        title: "Event",
        type: "string"
      },
      file: {
        title: "Filename",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      fs: require('fs')
    }
  },
  fn: function watch(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.watch($.file, {
        persistent: $.persistent
      }, function watchCallback(event, file) {
        cb({
          event: event,
          file: file
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