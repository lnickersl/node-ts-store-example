import * as path from 'path';

const dir = __dirname;

export default function (...args: string[]) {
  return path.resolve(dir, '..', '..', 'static', ...args);
}
