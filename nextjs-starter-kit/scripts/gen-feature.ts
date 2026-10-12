#!/usr/bin/env bun
/**
 * Scaffolds a complete feature module in the final folder structure.
 * Usage: bun run gen:feature <kebab-case-name>
 * Assumes `@/core/errors` exports Result, ok, AppError (see core/errors in the kit).
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const name = process.argv[2];
if (!name || !/^[a-z][a-z0-9-]*$/.test(name)) {
  console.error('Usage: bun run gen:feature <kebab-case-name>   (e.g. billing, user-settings)');
  process.exit(1);
}

const pascal = name
  .split('-')
  .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
  .join('');
const camel = pascal.charAt(0).toLowerCase() + pascal.slice(1);
const root = process.cwd();

if (existsSync(join(root, 'features', name))) {
  console.error(`features/${name} already exists. Nothing was changed.`);
  process.exit(1);
}

const f = (p: string) => `features/${name}/${p}`;

const files: Record<string, string> = {
  [f('index.ts')]: `// Public API of this feature. Other features and app/ import only from here.
export { ${pascal}Screen } from './screens';
export * from './models';
`,
  [f('models/index.ts')]: `export * from './${camel}.model';
`,
  [f(`models/${camel}.model.ts`)]: `import { z } from 'zod';

export const ${camel}Schema = z.object({
  id: z.string(),
});

export type ${pascal} = z.infer<typeof ${camel}Schema>;
`,
  [f(`repositories/${camel}Repository.ts`)]: `import 'server-only';
import { ok, type AppError, type Result } from '@/core/errors';
import type { ${pascal} } from '../models';

// Every query that touches user data takes userId and filters by it.
export async function list${pascal}(userId: string): Promise<Result<${pascal}[], AppError>> {
  void userId;
  return ok([]);
}
`,
  [f('repositories/index.ts')]: `export * from './${camel}Repository';
`,
  [f(`actions/${camel}Actions.ts`)]: `'use server';

// Every action: authenticate -> authorize (ownership) -> validate (Zod) -> repository.
export {};
`,
  [f('keys.ts')]: `export const ${camel}Keys = {
  all: ['${name}'] as const,
};
`,
  [f(`screens/${name}/${pascal}Screen.tsx`)]: `export function ${pascal}Screen() {
  return (
    <main>
      <h1>${pascal}</h1>
    </main>
  );
}
`,
  [f(`screens/${name}/components/index.ts`)]: `export {};
`,
  [f(`screens/${name}/index.ts`)]: `export * from './${pascal}Screen';
`,
  [f('screens/index.ts')]: `export * from './${name}';
`,
  [f(`__tests__/${camel}.test.ts`)]: `import { describe, expect, it } from 'vitest';
import { ${camel}Schema } from '../models';

describe('${name} models', () => {
  it('parses a valid ${name}', () => {
    expect(${camel}Schema.parse({ id: '1' })).toEqual({ id: '1' });
  });
});
`,
  [f('components/.gitkeep')]: '',
  [f('engine/.gitkeep')]: '',
  [f('hooks/.gitkeep')]: '',
  [f('jobs/.gitkeep')]: '',
  [f('store/.gitkeep')]: '',
};

// Route adapter (skipped if the route already exists)
const route = `app/${name}/page.tsx`;
if (!existsSync(join(root, 'app', name))) {
  files[route] = `import { ${pascal}Screen } from '@/features/${name}/screens';

export default function Page() {
  return <${pascal}Screen />;
}
`;
}

for (const [rel, content] of Object.entries(files)) {
  const abs = join(root, rel);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, content);
}

console.log(`Created features/${name} (${Object.keys(files).length} files).`);
console.log(`Next: models -> repositories -> actions -> screens. Then: bun run lint && bun run typecheck`);
