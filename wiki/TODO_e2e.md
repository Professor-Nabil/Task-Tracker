# 📝 E2E Testing Todo List

Here is your roadmap for this evening.
We will test the "Human-App Interface" for every command you have:

#### **1. Update Command**

- [x] **Success:** `update 1 "New Name"` -> Check if terminal says "Task updated" and shows the new name.
- [x] **Failure (ID):** `update abc "New Name"` -> Check if `validateId` middleware prints an error.
- [x] **Failure (Desc):** `update 1 ""` -> Check if `validateDescription` blocks empty updates.

#### **2. Delete Command**

- [x] **Success:** `delete 1` -> Check if terminal confirms deletion.
- [x] **Failure:** `delete 999` -> Check if it prints "Task not found" (Fail Operation View).

#### **3. Mark Command (The "Status" Test)**

- [x] **Success (done):** `mark 1 done` -> Verify status update in terminal.
- [x] **Success (in-progress):** `mark 1 in-progress`.
- [x] **Success (not-done):** `mark 1 not-done`.
- [x] **Failure (Invalid Status):** `mark 1 pizza` -> Verify `validateStatus` middleware catch.

#### **4. List Command (Filtering)**

- [ ] **Filter Success:** `list done` -> Verify ONLY 'done' tasks are printed.
- [ ] **Filter Empty:** `list in-progress` (when none exist) -> Verify "No tasks found" message.

#### **5. Help Page**

- [ ] **Unknown Command:** `task-cli blabla` -> Verify it prints the Help Page.
- [ ] **Manual Help:** `task-cli help` -> Verify the manual trigger.

---

Enjoy your afternoon, Nabil!
You've built a rock-solid foundation.
When you come back this evening,
we will finish these and you'll have one of the best-tested CLI apps on GitHub.

**See you in the evening!** 🌙🚀
