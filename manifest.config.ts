import { defineManifest } from '@crxjs/vite-plugin'
import packageJson from './package.json'
const { version } = packageJson
const { dev_silverproject: { store_version } } = packageJson

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name:
    env.mode === 'staging'
      ? '[INTERNAL] CRXJS Power Tools'
      : 'CRXJS Power Tools',
  // up to four numbers separated by dots
  version: store_version,
  // semver is OK in "version_name"
  version_name: version,
  action: {
    default_popup: "index.html"
  },
}))

