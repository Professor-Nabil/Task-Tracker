# =============================================================
# Entry Point
./src/app.js

# =============================================================
# Route
./src/routes/router-commands-inputs.js

./tests/e2e/add-command/add-task.test.js
./tests/e2e/add-command/add-task-failure.test.js

./tests/e2e/list-command/list-task-success.test.js
./tests/e2e/list-command/list-task-failure.test.js
./tests/e2e/list-command/list-task-filter-success.test.js
./tests/e2e/list-command/list-task-filter-failure.test.js

./tests/e2e/update-command/update-task-success.test.js
./tests/e2e/update-command/update-task-failure-id.test.js
./tests/e2e/update-command/update-task-failure-desc.test.js

./tests/e2e/delete-command/delete-task-success.test.js
./tests/e2e/delete-command/delete-task-failure-id.test.js

./tests/e2e/mark-command/mark-status-success.test.js
./tests/e2e/mark-command/mark-status-failure.test.js

./tests/e2e/unknown-commands/unknown-commands-and-help-page.test.js

# =============================================================
# Middleware
./src/middlewares/validate-argv-length.js
./src/middlewares/validate-id.js
./src/middlewares/validate-description.js
./src/middlewares/validate-status.js

./tests/unit/middlewares/validate-argv-length.test.js
./tests/unit/middlewares/validate-id.test.js
./tests/unit/middlewares/validate-description.test.js
./tests/unit/middlewares/validate-status.test.js

# =============================================================
# View
./src/views/print-success-operation.js
./src/views/print-fail-operation.js
./src/utils/cli/colors.js

# =============================================================
# Share
./src/utils/errors/AppError.js
./src/utils/date/get-local-time.js

./tests/unit/utils/date/get-local-time.test.js

# =============================================================
# Database
./src/models/Task-Model.js
./src/repository/db-config.js
./src/repository/read.js
./src/repository/write.js
./data/tasks.json

# =============================================================
# Add Component
./src/controllers/controller-add.js
./src/services/service-add-task.js
./src/utils/services/auto-increment-id.js

./tests/unit/utils/services/auto-increment-id.test.js
./tests/integration/services/service-add-task.test.js

# =============================================================
# Update Component
./src/controllers/controller-update.js
./src/services/service-update-task.js
./src/utils/services/update-task-in-array.js # 1

./tests/unit/utils/services/update-task-in-array.test.js # 1
./tests/integration/services/service-update-task.test.js

# =============================================================
# Mark Component
./src/controllers/controller-mark.js
./src/services/service-mark-task.js
./src/utils/services/update-task-in-array.js # 2

./tests/unit/utils/services/update-task-in-array.test.js # 2
./tests/unit/utils/services/service-mark-task.test.js

# =============================================================
# Delete Component
./src/controllers/controller-delete.js
./src/services/service-delete-task.js
./src/utils/services/delete-task-from-array.js

./tests/unit/utils/services/delete-task-from-array.test.js
./tests/integration/services/service-delete-task.test.js

# =============================================================
# List Component
./src/controllers/controller-list.js
./src/services/service-list-tasks.js
./src/views/view-list-tasks.js

./tests/integration/services/service-list-tasks.test.js

# =============================================================
# Help Component
./src/controllers/controller-help.js
./src/services/service-help-page.js
./src/assets/help.json
./src/views/print-help-page.js

./tests/integration/services/service-help-page.test.js
