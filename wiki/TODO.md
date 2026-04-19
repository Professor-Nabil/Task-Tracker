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

## 🚀 What's your next move?

You've conquered the CLI, the MVC pattern, E2E testing, and now Concurrent Testing Logic.

Do you want to:

- [ ] Automate the Cleanup: Write a script that deletes all those tasks.test.\*.json files automatically after the tests finish?

- [ ] GitHub Actions: Create a .github/workflows/test.yml so GitHub runs these tests every time you push?

- [ ] Move to the Web: Start building the API for this so your frontend friend can connect to it?
