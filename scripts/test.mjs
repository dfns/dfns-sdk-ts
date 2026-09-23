import { build } from 'esbuild'
import { mkdir, mkdtemp, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

await mkdir('tmp', { recursive: true })
const outdir = await mkdtemp('tmp/sdk-tests-')
const tests = [
  'tests/fastAuth.test.ts',
  'packages/sdk-keysigner/index.test.ts',
  'packages/sdk-awskmssigner/index.test.ts',
]
try {
  await build({
    entryPoints: tests,
    outbase: '.',
    outdir,
    outExtension: { '.js': '.cjs' },
    bundle: true,
    platform: 'node',
    packages: 'external',
    alias: { '@dfns/sdk': resolve('packages/sdk') },
  })
  const result = spawnSync(
    process.execPath,
    ['--test', '--test-timeout=30000', ...tests.map((test) => `${outdir}/${test.replace(/\.ts$/, '.cjs')}`)],
    { stdio: 'inherit' }
  )
  if (result.error) throw result.error
  process.exitCode = result.status ?? 1
} finally {
  await rm(outdir, { recursive: true, force: true })
}
