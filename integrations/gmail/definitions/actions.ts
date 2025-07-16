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
} as const satisfies sdk.IntegrationDefinitionProps['actions']
