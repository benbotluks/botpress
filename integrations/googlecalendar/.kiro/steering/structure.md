# Project Structure

## Root Level
- `integration.definition.ts` - Main integration definition and interface extensions
- `package.json` - Dependencies and build scripts
- `tsconfig.json` - TypeScript configuration
- `hub.md` - Integration documentation and setup guide
- `icon.svg` - Integration icon
- `linkTemplate.vrl` - Link template configuration

## Core Directories

### `/src` - Source Implementation
- `index.ts` - Main integration entry point with Sentry wrapper
- `setup.ts` - Registration and unregistration logic

### `/src/actions` - Action Implementations
- `index.ts` - Exports all actions
- `action-wrapper.ts` - Common error handling wrapper
- `/implementations` - Actual action logic
  - `create-event.ts`, `delete-event.ts`, `list-events.ts`, `update-event.ts`
  - `/interfaces` - Interface-based action implementations

### `/src/google-api` - Google API Integration
- `google-client.ts` - Main Google Calendar client
- `oauth-client.ts` - OAuth authentication handling
- `error-handling.ts` - API error processing
- `types.d.ts` - Type definitions
- `/mapping` - Request/response transformation
  - `/datetime-utils` - Date/time conversion utilities

### `/src/webhook-events` - Event Handling
- `handler-dispatcher.ts` - Event routing
- `/handlers` - Specific event handlers

### `/definitions` - Type Definitions
- `actions.ts`, `entities/`, `events.ts`, `configuration.ts`, `secrets.ts`, `states.ts`

### `/bp_modules` - Interface Module Extensions
- `creatable/`, `deletable/`, `listable/`, `readable/`, `updatable/`
- Each contains standardized CRUD operation definitions

### `/.botpress` - Generated Files
- Auto-generated TypeScript definitions and implementations
- Do not manually edit these files

## Naming Conventions
- Actions: `camelCase` (e.g., `createEvent`, `eventCreate`)
- Files: `kebab-case` (e.g., `create-event.ts`)
- Interfaces: Descriptive names matching functionality
- Entities: Singular nouns (e.g., `event`)