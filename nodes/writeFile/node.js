output = [fs, 'writeFile', input.filename, input.in, {
  encoding: input.encoding,
  mode: input.mode,
  flag: input.flag
}];
