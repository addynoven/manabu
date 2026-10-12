# Testing, observability, project hygiene, definition of done

## Definition of Done
A task is complete only when:
```bash
bun run typecheck && bun run lint && bun run test && bun run build   # all 0 errors
```
New logic has tests; bug fixes have regression tests; new screens have loading, empty, and error states.
