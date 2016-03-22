module.exports = {
  name: "link",
  ns: "fs",
  description: "fs link",
  phrases: {
    active: "Linking {{input.srcpath}} to {{input.dstpath}}"
  },
  ports: {
    input: {
      srcpath: {
        type: "string"
      },
      dstpath: {
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
  fn: function link(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      fs.link($.srcpath, $.dstpath, function linkCallback(exception) {
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