# Technology Stack

## Core Technologies
- **TypeScript** - Primary language with strict typing
- **Botpress SDK** - Integration framework and runtime
- **Google APIs Client Library** (`googleapis`) - Google Calendar API interaction
- **Node.js** - Runtime environment

## Build System & Tools
- **Botpress CLI** (`bp`) - Primary build and development tool
- **TypeScript Compiler** (`tsc`) - Type checking
- **Sentry** - Error monitoring and tracking

## Key Dependencies
- `@botpress/sdk` - Core SDK functionality
- `@botpress/sdk-addons` - Additional SDK utilities (Sentry integration)
- `googleapis` - Google Calendar API client
- Interface modules: `creatable`, `deletable`, `listable`, `readable`, `updatable`

## Common Commands
```bash
# Build the integration
npm run build

# Type checking
npm run check:type

# Linting with Botpress linter
npm run check:bplint
```

## Architecture Patterns
- **Action Wrapper Pattern** - All actions wrapped with error handling
- **Interface Extension** - Uses Botpress interface modules for standardized CRUD operations
- **Modular Structure** - Separate concerns: actions, API client, mapping, webhook handling
- **Error Handling** - Centralized error handling with Sentry integration