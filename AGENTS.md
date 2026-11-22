# Architecture rules

- Keep AI Gateway calls in unauthenticated `createServerFn` handlers and validate all public input, because the quote advisor is public while its API key and prompt must remain server-only.
- Share the validated quick lead form across quote entry points and insert through a public server function using an insert-only publishable client; visitors must never read leads.
- Confirm quick submissions only after storage succeeds, independently of the optional email relay, so email failures never mask lost leads.
- Mount the mobile contact bar once in the root shell with safe-area-aware content clearance to keep every public page consistent.
- Permanently redirect retired local-sector URLs to the closest retained local page and remove them from shared city data, so old search links keep working without promoting removed sectors.
