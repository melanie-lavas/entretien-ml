# Architecture rules

- Keep AI Gateway calls in unauthenticated `createServerFn` handlers and validate all public input, because the quote advisor is public while its API key and prompt must remain server-only.