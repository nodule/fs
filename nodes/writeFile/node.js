output = [fs, 'writeFile', input.filename, input.data, {
  encoding: input.encoding,
  mode: input.mode,
  flag: input.flag
}];
