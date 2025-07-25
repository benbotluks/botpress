import type { Server } from 'node:http'
import { serve } from '../serve'
import { BaseIntegration } from './common'
import {
  RegisterHandler as RegisterFunction,
  UnregisterHandler as UnregisterFunction,
  WebhookHandler as WebhookFunction,
  CreateUserHandler as CreateUserFunction,
  CreateConversationHandler as CreateConversationFunction,
  ActionHandlers as ActionFunctions,
  ChannelHandlers as ChannelFunctions,
  UnknownOperationHandler as UnknownOperationFunction,
  integrationHandler,
} from './server'

export type IntegrationImplementationProps<TIntegration extends BaseIntegration = BaseIntegration> = {
  register: RegisterFunction<TIntegration>
  unregister: UnregisterFunction<TIntegration>
  handler: WebhookFunction<TIntegration>
  /**
   * @deprecated
   */
  createUser?: CreateUserFunction<TIntegration>
  /**
   * @deprecated
   */
  createConversation?: CreateConversationFunction<TIntegration>
  actions: ActionFunctions<TIntegration>
  channels: ChannelFunctions<TIntegration>
  __advanced?: {
    unknownOperationHandler?: UnknownOperationFunction<TIntegration>
  }
}

export class IntegrationImplementation<TIntegration extends BaseIntegration = BaseIntegration> {
  public readonly actions: IntegrationImplementationProps<TIntegration>['actions']
  public readonly channels: IntegrationImplementationProps<TIntegration>['channels']
  public readonly register: IntegrationImplementationProps<TIntegration>['register']
  public readonly unregister: IntegrationImplementationProps<TIntegration>['unregister']
  public readonly createUser: IntegrationImplementationProps<TIntegration>['createUser']
  public readonly createConversation: IntegrationImplementationProps<TIntegration>['createConversation']
  public readonly webhook: IntegrationImplementationProps<TIntegration>['handler']
  public readonly unknownOperationHandler: NonNullable<
    IntegrationImplementationProps<TIntegration>['__advanced']
  >['unknownOperationHandler']

  public constructor(public readonly props: IntegrationImplementationProps<TIntegration>) {
    this.actions = props.actions
    this.channels = props.channels
    this.register = props.register
    this.unregister = props.unregister
    this.createUser = props.createUser
    this.createConversation = props.createConversation
    this.webhook = props.handler
    this.unknownOperationHandler = props.__advanced?.unknownOperationHandler
  }

  public readonly handler = integrationHandler(this as IntegrationImplementation<any>)
  public readonly start = (port?: number): Promise<Server> => serve(this.handler, port)
}
