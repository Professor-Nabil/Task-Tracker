.
├── bin
│   └── task-cli.js
├── data
│   ├── tasks.json
│   └── tasks.json.example
├── package.json
├── README.md
└── src
    ├── app.js
    ├── assets
    │   └── help.json
    ├── controllers
    │   ├── controller-add.js
    │   ├── controller-delete.js
    │   ├── controller-help.js
    │   ├── controller-list.js
    │   ├── controller-mark.js
    │   └── controller-update.js
    ├── middlewares
    │   ├── validate-argv-length.js
    │   ├── validate-description.js
    │   ├── validate-id.js
    │   └── validate-status.js
    ├── models
    │   └── Task-Model.js
    ├── repository
    │   ├── db-config.js
    │   ├── read.js
    │   └── write.js
    ├── routes
    │   └── router-commands-inputs.js
    ├── services
    │   ├── service-add-task.js
    │   ├── service-delete-task.js
    │   ├── service-help-page.js
    │   ├── service-list-tasks.js
    │   ├── service-mark-task.js
    │   └── service-update-task.js
    ├── utils
    │   ├── cli
    │   │   └── colors.js
    │   ├── date
    │   │   └── get-local-time.js
    │   ├── errors
    │   │   └── AppError.js
    │   └── services
    │       ├── auto-increment-id.js
    │       ├── delete-task-from-array.js
    │       └── update-task-in-array.js
    └── views
        ├── print-fail-operation.js
        ├── print-help-page.js
        ├── print-success-operation.js
        └── view-list-tasks.js

17 directories, 37 files
