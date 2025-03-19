import tszhong0411, { GLOB_E2E } from '@tszhong0411/eslint-config'

export default tszhong0411(
  {
    project: './tsconfig.json',
    tsconfigRootDir: import.meta.dirname,
    react: true,
    next: true,
  },
  {
    files: [GLOB_E2E],
  }
)
