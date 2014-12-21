module.exports = {
  name: "file",
  ns: "fs",
  description: "Create a filename based on dir, name and optional extenstion",
  phrases: {
    active: "Created filename {{input.dir}}/{{input.name}}{{input.ext}}"
  },
  ports: {
    input: {
      name: {
        title: "Name",
        type: "string",
        required: true
      },
      dir: {
        title: "Directory",
        type: "string"
      },
      ext: {
        title: "Extension",
        type: "string"
      }
    },
    output: {
      file: {
        title: "File",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      path: require('path')
    }
  },
  fn: function file(input, output, state, done, cb, on, path) {
    var r = function() {
      var file = input.ext ? input.name + input.ext : input.name;
      output.file = input.dir ? path.normalize([input.dir, file].join(path.sep)) : file;
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}