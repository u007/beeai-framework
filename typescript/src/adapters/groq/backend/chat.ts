/**
 * Copyright 2025 © BeeAI a Series of LF Projects, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { VercelChatModel } from '../../vercel/backend/chat.js';
import { GroqClient, GroqClientSettings } from './client.js';
import { getEnv } from '../../../internals/env.js';
import { GroqProvider } from "@ai-sdk/groq";

type GroqParameters = Parameters<GroqProvider["languageModel"]>;
export type GroqChatModelId = NonNullable<GroqParameters[0]>;
export type GroqChatModelSettings = NonNullable<GroqParameters[1]>;

export class GroqChatModel extends VercelChatModel {
  constructor(
    modelId: GroqChatModelId = getEnv("GROQ_CHAT_MODEL", "gemma2-9b-it"),
    settings: GroqChatModelSettings = {},
    client?: GroqClientSettings | GroqClient,
  ) {
    const model = GroqClient.ensure(client).instance.languageModel(modelId, settings);
    super(model);
  }

  static {
    this.register();
  }
}
