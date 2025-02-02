import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/cli.ts', './src/index.ts', './src/next.ts'],
  dts: true,
  format: ['esm'],
  target: 'esnext',
  clean: true
})
