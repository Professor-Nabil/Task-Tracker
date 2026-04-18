# TODO

## 📅 Roadmap for Tomorrow

- [ ] Middleware Testing: Unit tests for validate-id, validate-status, and validate-description.

- [ ] Integration Testing: Verification of Services communication with the File Repository.

- [ ] Architecture Audit: Final review of the 60-file decoupling.

## 📝 Nabil's "To-Do" List for Tomorrow

When you're ready to fix these, here is your roadmap:

- [ ] The File Conflict:
      We need to look at vitest.config.js
      to disable threads or parallel execution for integration tests.
      Since they all use tasks.test.json, they must wait their turn.

- [ ] The Timezone:
      We will add process.env.TZ = 'UTC' (or your local zone)
      at the very top of the test files to ensure the math always matches.
