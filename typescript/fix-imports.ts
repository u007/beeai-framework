// fix-imports.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Resolves the absolute path of an aliased import (e.g., @/foo/bar)
 * @param {string} importPath - The aliased import path (after '@/')
 * @param {string} srcDir - The absolute path to the src directory
 * @returns {string[]} - Possible absolute file paths for the import
 */
function resolveAliasedImport(importPath, srcDir) {
  const base = path.join(srcDir, importPath);
  // Try .ts, .js, .d.ts, .tsx, .jsx, and index files
  return [
    base + '.ts',
    base + '.js',
    base + '.d.ts',
    base + '.tsx',
    base + '.jsx',
    path.join(base, 'index.ts'),
    path.join(base, 'index.js'),
    path.join(base, 'index.tsx'),
    path.join(base, 'index.jsx'),
  ];
}

/**
 * Finds the first existing file from a list of possible paths
 */
function findExistingFile(possiblePaths) {
  return possiblePaths.find(fs.existsSync);
}

const srcDir = path.resolve(__dirname, 'src');
const files = glob.sync('src/**/*.{ts,js,tsx,jsx}', { absolute: true });

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Regex for matching import ... from "@/something"
  const importRegex = /from\s+['"]@\/([^'"]+)['"]/g;

  content = content.replace(importRegex, (match, importPath) => {
    const possibleFiles = resolveAliasedImport(importPath, srcDir);
    let targetFile = findExistingFile(possibleFiles);

    // Try all possible extensions if not found
    if (!targetFile) {
      const baseImport = importPath.replace(/\.(ts|js|d\.ts|tsx|jsx)$/, '');
      const altFiles = [
        path.join(srcDir, baseImport + '.ts'),
        path.join(srcDir, baseImport + '.js'),
        path.join(srcDir, baseImport + '.d.ts'),
        path.join(srcDir, baseImport + '.tsx'),
        path.join(srcDir, baseImport + '.jsx'),
        path.join(srcDir, baseImport, 'index.ts'),
        path.join(srcDir, baseImport, 'index.js'),
        path.join(srcDir, baseImport, 'index.tsx'),
        path.join(srcDir, baseImport, 'index.jsx'),
      ];
      targetFile = findExistingFile(altFiles);
    }

    if (!targetFile) {
      console.warn(`WARNING: Cannot resolve @/${importPath} for file ${file}. Skipping.`);
      return match; // Leave unchanged
    }

    // Compute the relative path from the importing file to the target file (without extension)
    let relPath = path.relative(path.dirname(file), targetFile);
    if (!relPath.startsWith('.')) relPath = './' + relPath;
    // Remove any extension
    relPath = relPath.replace(/\.(ts|js|d\.ts|tsx|jsx)$/, '');
    // Always use .js extension for ESM/JSR
    relPath = relPath + '.js';

    changed = true;
    return `from '${relPath}'`;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated imports in ${file}`);
  }
});