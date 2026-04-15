# =============================================================
# 1. Create new tasks
task-cli add "My task description"
task-cli add "Chacke my homelab"
task-cli add "Update my System"

# =============================================================
# 2. Update Tasks description
task-cli update 1 "My new task description"
task-cli update 2 "Chacke my homelab and RAM Useg"
task-cli update 3 "Save my work in Github before Update my system"
# NOTE: (1, 2, and 3) mean task ID

# =============================================================
# 3. Delete Tasks
task-cli delete 1
task-cli delete 2
task-cli delete 3
# NOTE: (1, 2, and 3) mean task ID

# =============================================================
# 4. Change Tasks status
task-cli mark 1 done
task-cli mark 2 in-progress
task-cli mark 3 not-done
# NOTE: (1, 2, and 3) mean task ID

# =============================================================
# 5. List tasks
# NOTE: List all task
task-cli list
# NOTE: List all tasks with status done
task-cli list done
# NOTE: List all tasks with status in-progress
task-cli list in-progress
# NOTE: List all tasks except tasks with status done
task-cli list not-done
