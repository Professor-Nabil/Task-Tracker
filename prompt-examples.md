let's create write module on ./src/repository/write.js
should be except 3 arguments (path, fileName, data)
and convert the data to json
and save it on that `path/fileName`

```js
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

/**
 * Repository: Write Module
 * Responsibility: Physical persistence of data to the disk.
 */
export const write = async (path, fileName, data) => {
  const DATA_FILE = join(path, fileName);

  try {
    // 1. Ensure the directory exists (helpful if /data is missing)
    await mkdir(path, { recursive: true });

    // 2. Convert data to JSON string
    // null, 2 adds indentation to make tasks.json human-readable in Neovim/CLI
    const jsonData = JSON.stringify(data, null, 2);

    // 3. Save to disk
    await writeFile(DATA_FILE, jsonData, "utf8");

    return true;
  } catch (error) {
    // We throw the error so the Service/Controller knows the "Hands" failed
    throw new Error(`Failed to write to ${DATA_FILE}: ${error.message}`);
  }
};
```
