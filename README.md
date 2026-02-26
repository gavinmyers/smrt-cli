# SMRT CLI

A minimalistic, zero-dependency Node.js CLI toolset for tracking project progress, managing conditions, discussions, and executing features according to the **Definition of Done**.

## Setup

This CLI is designed to be installed as a subdirectory within your main project.

1.  **Installation**: Clone or copy this repository into a folder named `smrt-cli` within your project root.
2.  **Configuration**: Create a configuration directory and file in your project's root directory (parent of this CLI folder).

    **Expected Directory Structure:**
    ```text
    my-project/
    ├── .smrt-cli/        <-- Config directory
    │   └── .key          <-- Config file
    ├── smrt-cli/         <-- This CLI toolset (this repo)
    │   ├── client.js
    │   └── ...
    └── ...
    ```

    **`.key` File Content:**
    Create `.smrt-cli/.key` with the following JSON structure:
    ```json
    {
      "keyId": "YOUR_KEY_ID",
      "projectId": "YOUR_PROJECT_ID",
      "secret": "YOUR_SECRET_TOKEN",
      "apiUrl": "http://localhost:3001/api/cli/YOUR_PROJECT_ID/YOUR_KEY_ID"
    }
    ```

## Core Workflow

### 1. Check Project Status
Before starting any work, verify the project's health and current state.
```bash
node smrt-cli/status.js
node smrt-cli/project-info.js
```

### 2. Verify Conditions
Check the project-wide conditions that must be met before implementing new features.
```bash
node smrt-cli/conditions-list.js
```

### 3. Manage Features
Track the features you are working on. Each feature has a status: `OPEN`, `LOCKED`, or `CLOSED`.

- **List Features**: `node smrt-cli/features-list.js`
- **Create Feature**: `node smrt-cli/feature-create.js "Feature Name" "Description"`
- **Complete Feature**: `node smrt-cli/feature-complete.js <featureId>`

### 4. Requirements & Definition of Done
Every feature contains specific requirements. Additionally, the project defines global **Project Requirements** that serve as a "Definition of Done" for all features.

- **List Requirements**: `node smrt-cli/requirements-list.js <featureId>`
- **Create Requirement**: `node smrt-cli/requirement-create.js <featureId> "Task Name"`
- **Complete Requirement**: `node smrt-cli/requirement-complete.js <featureId> <requirementId>`

### 5. Discussions (Agent Threads)
Create and manage simple discussion threads and messages for agent coordination.

- **List Discussions**: `node smrt-cli/discussions-list.js`
- **Create Discussion**: `node smrt-cli/discussion-create.js "Thread Name"`
- **Update Discussion**: `node smrt-cli/discussion-update.js <discussionId> "New Thread Name"`
- **Delete Discussion**: `node smrt-cli/discussion-delete.js <discussionId>`
- **Discussion Info**: `node smrt-cli/discussion-info.js <discussionId>`
- **List Messages**: `node smrt-cli/discussion-messages-list.js <discussionId>`
- **Create Message**: `node smrt-cli/discussion-message-create.js <discussionId> "Message body"`
- **Update Message**: `node smrt-cli/discussion-message-update.js <discussionId> <messageId> "Updated body"`
- **Delete Message**: `node smrt-cli/discussion-message-delete.js <discussionId> <messageId>`

### 6. Project Templates (Definition of Done)
Manage global requirements that apply to every feature (e.g., "Write Tests").
```bash
node smrt-cli/project-requirements-list.js
node smrt-cli/project-requirement-create.js "New Template Requirement"
```

## Best Practices for Agents
1. **Always List Features** first to identify your current task.
2. **Read Requirements** for the specific feature to understand the scope.
3. **Use Discussions** for short agent-to-agent coordination notes tied to the project.
4. **Mark as Complete** immediately upon finishing a task to maintain an accurate project audit trail.
5. **Follow Templates**: Ensure "Definition of Done" items from the project templates are respected during implementation.
