# Publishing to npm

## Pre-publish Checklist

✅ Package metadata configured in `package.json`
✅ Library entry point created (`src/lib/index.ts`)
✅ Build configuration set up (`vite.config.lib.ts`, `tsconfig.lib.json`)
✅ README.md created with usage examples
✅ LICENSE file added (MIT)
✅ .npmignore configured
✅ TypeScript declarations generated

## Build the Library

```bash
bun run build:lib
```

This will:
1. Generate TypeScript declarations in `dist/`
2. Bundle the library with Vite into `dist/canplot.mjs` (ESM) and `dist/canplot.cjs` (CommonJS)
3. Include source maps

## Package Structure

```
dist/
  ├── canplot.mjs         # ESM bundle
  ├── canplot.cjs         # CommonJS bundle
  ├── canplot.mjs.map     # ESM source map
  ├── canplot.cjs.map     # CommonJS source map
  ├── index.d.ts          # Main type definitions
  └── **/*.d.ts           # Component type definitions
```

## Publishing Steps

### 1. Test the package locally

```bash
# Build the library
bun run build:lib

# Test the package locally
npm pack

# Install in another project to test
cd /path/to/test-project
npm install /path/to/canplot/canplot-0.1.0.tgz
```

### 2. Login to npm

```bash
npm login
```

### 3. Publish to npm

```bash
# Publish
npm publish

# Or for a scoped package
npm publish --access public
```

### 4. Version Management

```bash
# Patch release (0.1.0 -> 0.1.1)
npm version patch
npm publish

# Minor release (0.1.0 -> 0.2.0)
npm version minor
npm publish

# Major release (0.1.0 -> 1.0.0)
npm version major
npm publish
```

## Package.json Key Fields

- **name**: `canplot` (change if you want a scoped package like `@yourname/canplot`)
- **version**: `0.1.0` (follow semantic versioning)
- **main**: `./dist/canplot.cjs` (CommonJS entry point)
- **module**: `./dist/canplot.mjs` (ESM entry point)
- **types**: `./dist/index.d.ts` (TypeScript definitions)
- **exports**: Configured for both CommonJS and ESM with types
- **files**: Only includes `dist`, `README.md`, and `LICENSE`
- **peerDependencies**: React 18 or 19
- **dependencies**: Only zustand (bundled with the library)

## What Gets Published

Only these files will be included in the npm package:
- `dist/` - All build artifacts
- `README.md` - Documentation
- `LICENSE` - MIT license
- `package.json` - Package metadata

## Post-Publish

1. Verify the package on npm: https://www.npmjs.com/package/canplot
2. Test installation: `npm install canplot`
3. Update documentation with installation instructions
4. Tag the release in git:
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```

## Troubleshooting

### Type definitions not found

Make sure `tsconfig.lib.json` has:
```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "emitDeclarationOnly": true
  }
}
```

### Build fails

Check that all exports in `src/lib/index.ts` are valid and properly typed.

### Package too large

Check what's being included:
```bash
npm pack --dry-run
```

Add unwanted files to `.npmignore`.

## Next Steps

- Set up GitHub Actions for automated publishing
- Add badges to README (npm version, build status, etc.)
- Create CHANGELOG.md for version history
- Set up automated tests before publishing
- Consider creating a documentation website (Storybook can be deployed to GitHub Pages)
