import * as sdk from '@botpress/sdk'

export const actions = {
  getMyEmail: {
    title: 'Get my Email',
    description: "Get the user's email address",
    input: {
      schema: sdk.z.object({}),
    },
    output: {
      schema: sdk.z.object({
        emailAddress: sdk.z.string().title('Email Address').describe('The email address of the user'),
      }),
    },
  },
  sendEmail: {
    title: 'Send Email',
    description: 'Send an email to a specified email address',
    input: {
      schema: sdk.z.object({
        recipient: sdk.z.string().title('Recipient Email Address').describe('the email address of the recipient'),
        subject: sdk.z.string().title('Subject').describe('The subject of the outgoing email'),
        body: sdk.z.string().title('Message body').describe('The body of the outgoing email'),
      }),
    },
    output: {
      schema: sdk.z.object({}),
    },
  },
  checkNewEmails: {
    title: 'Check New Emails',
    description: 'List emails from the inbox with optional filtering',
    input: {
      schema: sdk.z.object({
        query: sdk.z
          .string()
          .optional()
          .title('Search Query')
          .describe('Gmail search query to filter emails (e.g., "is:unread", "from:example@gmail.com")'),
        maxResults: sdk.z
          .number()
          .optional()
          .title('Max Results')
          .describe('Maximum number of messages to return (default: 100)'),
        pageToken: sdk.z
          .string()
          .optional()
          .title('Page Token')
          .describe(
            'Token used toPage token to retrieve a specific page of results in the list. Only used when retrieving a past the first page.'
          ),
      }),
    },
    output: {
      schema: sdk.z.object({
        hasNewEmails: sdk.z
          .boolean()
          .title('Has New Emails')
          .describe('Whether there are emails matching the criteria'),
        messages: sdk.z
          .array(
            sdk.z.object({
              id: sdk.z.string().title('Message ID').describe('The ID of the message'),
              threadId: sdk.z.string().title('Thread ID').describe('The ID of the thread'),
            })
          )
          .title('Messages')
          .describe('List of messages matching the criteria'),
        nextPageToken: sdk.z
          .string()
          .nullable()
          .title('Next Page Token')
          .describe('Token for retrieving the next page of results'),
        resultSizeEstimate: sdk.z.number().title('Result Size Estimate').describe('Estimated total number of results'),
      }),
    },
  },
} as const satisfies sdk.IntegrationDefinitionProps['actions']
