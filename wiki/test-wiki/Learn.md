- Success Case: We verify the description actually changes.
- Partial Update: We verify that updating the status doesn't accidentally delete the description (testing the Spread Operator logic).
- Fail Case: We verify it returns null for missing IDs. This is critical because your Controllers depend on that null to show an error message.
- Type Safety: Since CLI inputs are often strings, testing { id: "1" } ensures your utility is robust.

- keep your tests DRY (Don't Repeat Yourself).

- Data Pollution --> If you define mockTasks at the very top of the file (outside the tests), and one test deletes an item, the next test will only see 2 items. This is called Data Pollution

- Circular Logic --> If you copy-paste the logic from the utility into the test, and your logic has a bug, the test will pass because the bug exists in both places! This is called Circular Logic.

- 🏁 You should test a utility if it contains transformation logic.
  - Does it change a string? Test it.
  - Does it do math? Test it.
  - Does it remove characters? Test it.

- Hardcoded values are the enemy of testing.

### "Known Issues" or "Technical Debt

Commenting them is a smart move for now.
In professional development,
we call these "Known Issues" or "Technical Debt."

It allows you to save your progress without the CI/CD (or your terminal) screaming red at you.

```js
// BUG: *** The problem happen when i run all tasks at one because all test trying to write to one file ***
// BUG: *** If someone in another country run this code it will be fail ***
```
