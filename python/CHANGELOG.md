## python_v0.1.5 (2025-03-13)

### BREAKING CHANGE

- internal emit data types updated
- rename "newToken" event to "new_token"

### Refactor

- return typed objects from internal emits (#581)
- address mypy and turn on mypy commit hook and CI (#565)
- Add emitter event types and fix mypy (#550)
- **agents**: Add generics to BaseAgent and other mypy fixes (#517)

### Bug Fixes

- mcp tool error (#570)
- improve workflow add_agent arguments (#518)
- **backend**: handle event loop closed error (#523)
- **tools**: handle non-existing locations in OpenMeteo (#513)
- **emitter**: The "match all nested" matcher should match all nested (#515)

### Features

- **workflow**: rework agent workflow (#554)
- **adapters**: support additional headers for OpenAI backend (#533)
- **agents**: add remote agent for Beeai (#567)
- **agents**: add tool calling agent (#551)
- **agents**: rework base agent run and runcontext (#562)
- **adapters**: Add Azure OpenAI support (#514)
- Add Run.on API to directly add an event callback (#516)
- **adapters**: add Anthropic support (#522)

## python_v0.1.4 (2025-03-06)

### Refactor

- rename Bee agent to ReAct agent (#505)
- move logger to the root (#504)
- update user-facing event data to all be dict and add docs (#431)
- **agents**: remove Bee branding from BaseAgent (#440)

### Bug Fixes

- improve decorated tool output (#499)
- **backend**: correctly merge inference parameters (#496)
- **backend**: tool calling, unify message content (#475)
- **backend**: correctly merge inference parameters (#486)
- **tools**: make emitter required (#461)
- **workflows**: handle relative steps (#463)

### Features

- **adapters**: add Amazon Bedrock support (#466)
- **examples**: adds logger examples and updates docs (#494)
- **internals**: construct Pydantic model from JSON Schema (#502)
- **adapters**: Add Google VertexAI support (#469)
- **tools**: add MCP tool (#481)
- langchain tool (#474)
- **examples**: templates examples ts parity (#480)
- **examples**: adds error examples and updates error docs (#490)
- **agents**: simplify variable usage in prompt templates (#484)
- improve PromptTemplate.render API (#476)
- **examples**: Add custom_agent and bee_advanced examples (#462)
- **agents**: handle message formatting (#470)
- **adapters**: Add xAI backend (#445) (#446)

## python_v0.1.3 (2025-03-03)

### Features

- **adapters** add Groq backend support (#450)

### Bug Fixes

- **agents**: handle native tool calling and retries (#456)
- disregard unset params (#459)
- chatmodel params None (#458)
- pass chatmodel config parameters (#457)
- **tools**: async _run (#452)

## python_v0.1.2 (2025-02-28)

### Refactor

- update public facing APIs to be more pythonic (#397)

### Bug Fixes

- missed review from #397 (#430)
- **agents**: state transitions
- **agents**: propagate tool output to the state
- env var access
- corrections in error class (#409)
- **backend**: watsonx tools (#405)
- ability to specify external Ollama server (#389)
- update some type hints (#381)
- pass through chatmodel params (#382)

### Features

- add runcontext + retryable + emitter to tool (#429)
- add runcontext and emitter to workflow (#416)
- **tools**: wikipedia handle empty results
- **agents**: add granite runner
- **backend**: add tool calling support
- improve error handling (#418)
- **templates**: add fork method for templates (#380)
- improve pre-commit hooks (#404)
- OpenAI chat model (#395)
- retryable implementation (#363)
- typings and error propagating (#383)

## python_v0.1.1 (2025-02-21)

### Refactor

- **examples**: bring agent examples to ts parity (#343)

### Bug Fixes

- apply suggestions from mypy (#369)
- various bug fixes (#361)
- emit parsed react elements (#360)
- debugging pass over example notebooks (#342)

### Features

- **parsers**: add line prefix parser (#359)

## python_v0.1.0 (2025-02-19)

### Features

- init python package
