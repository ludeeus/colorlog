# Colorlog

[![npm](https://img.shields.io/npm/v/@ludeeus/colorlog?style=for-the-badge)](https://www.npmjs.com/package/@ludeeus/colorlog)
[![npm](https://img.shields.io/badge/demo-live-green?style=for-the-badge)](https://rawcdn.githack.com/ludeeus/colorlog/master/example.html)
[![npm](https://img.shields.io/badge/example-file-blue?style=for-the-badge)](https://github.com/ludeeus/colorlog/blob/master/example.ts)

![example](https://raw.githubusercontent.com/ludeeus/colorlog/master/example.png)

A simple component to format log output with colors.

Currently only output from pythons `logging` package is supported.

## Example usage

See [the demo](https://rawcdn.githack.com/ludeeus/colorlog/master/example.html) for examples on how it can look.

See [example.ts](https://github.com/ludeeus/colorlog/blob/master/example.ts) for examples on how you can use it.

```typescript
import "@ludeeus/colorlog";
```

## How it works

The component has one property (`log`), here you can feed it a text representation of your output.
It will split the input on newline, and scan each line for a know indicator on what type of log line it is.

## CSS vars

| CCS Var                  | Default     |
| ------------------------ | ----------- |
| `--colorlog-font-family` | `monospace` |
| `--colorlog-text`        | `#000000`   |
| `--colorlog-debug`       | `#00b2fd`   |
| `--colorlog-info`        | `#00ab00`   |
| `--colorlog-warning`     | `#ffc303`   |
| `--colorlog-error`       | `#f00000`   |
| `--colorlog-critical`    | `#d00000`   |
