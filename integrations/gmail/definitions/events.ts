import * as sdk from '@botpress/sdk'
import { z } from '@botpress/sdk'

export const ping = {
    title: "ping",
    description: "a test event",
    schema: z.object({
        description: z.string().title("description").describe("Just a test event")
    })
}

export const events = {
    ping
} as const satisfies sdk.IntegrationDefinitionProps['events']
