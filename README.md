# Task-Tracker

---

## What is Task-Tracker

Task-Tracker just a to-do app that works in terminal

- You can
  - Add Tasks
  - Update Tasks
  - Delete Tasks
  - Mark Tasks as done
  - Mark Tasks as in-progress
  - And save your Tasks as file.json

---

## How to install Task-Tracker

### For Linux

1. Make sure you have `git` (Version control system)
2. Make sure you have `node.js` (JavaScript run time Environment)
3. Make sure you have `npm` (Node package manager)
4. Open your beautiful terminal

```bash
# 1. Download The Task-Tracker Project
git clone https://github.com/Professor-Nabil/Task-Tracker.git

# 2. Open to Project directory
cd Task-Tracker

# 3. Install Task-Tracker using npm
sudo npm install -g
```

---

## How to use Task-Tracker

1. Open your beautiful terminal
2. Create a directory you want to save your Tasks in

   ```bash
   mkdir my-tasks
   ```

3. Open your Tasks directory

   ```bash
   cd my-tasks
   ```

4. Create new tasks

   ```bash
   task-cli add "My task description"
   task-cli add "Chacke my homelab"
   task-cli add "Update my System"
   ```

5. Update Tasks description

   ```bash
   task-cli update 1 "My new task description"
   task-cli update 2 "Chacke my homelab and RAM Useg"
   task-cli update 3 "Save my work in Github before Update my system"
   ```

   > [!NOTE] (1, 2, and 3) mean task ID

6. Delete Tasks

   ```bash
   task-cli delete 1
   task-cli delete 2
   task-cli delete 3
   ```

   > [!NOTE] (1, 2, and 3) mean task ID

7. Change Tasks status

   ```bash
   task-cli mark 1 done
   task-cli mark 2 in-progress
   task-cli mark 3 not-done
   ```

   > [!NOTE] (1, 2, and 3) mean task ID

8. List tasks

   ```bash
   # NOTE: List all task
   task-cli list
   # NOTE: List all tasks with status done
   task-cli list done
   # NOTE: List all tasks with status in-progress
   task-cli list in-progress
   # NOTE: List all tasks except tasks with status done
   task-cli list not-done

   ```

---

## Join with us

If you're a developer and you want to build an app like this,
you can start here [readmap.sh](https://roadmap.sh/projects/task-tracker)

**_Happy coding!_**
