# Colorlog

A simple component to format log output with colors.

Currently only output from pythons `logging` package is supported.

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

## Example usage

See [the demo](https://rawcdn.githack.com/ludeeus/colorlog/master/example.html) for examples on how it can look.

See [example.ts](https://github.com/ludeeus/colorlog/blob/master/example.ts) for examples on how you can use it.

```typescript
import "@ludeeus/colorlog";
```
