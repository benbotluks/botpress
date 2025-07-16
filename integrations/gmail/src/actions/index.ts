import * as bp from '.botpress'
import { getMyEmail } from './get-my-email'

export const actions = {
  getMyEmail,
} as const satisfies bp.IntegrationProps['actions']
