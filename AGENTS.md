# Architecture rules

- Keep AI Gateway calls in unauthenticated `createServerFn` handlers and validate all public input, because the quote advisor is public while its API key and prompt must remain server-only.
- Share the validated quick lead form across quote entry points and insert through a public server function using an insert-only publishable client; visitors must never read leads.
- Mount the mobile contact bar once in the root shell with safe-area-aware content clearance to keep every public page consistent.