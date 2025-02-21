# BeeAI Framework Examples

This repository contains examples demonstrating the usage of the BeeAI Framework, a toolkit for building AI agents and applications.

## Table of Contents

1. [Agents](#agents)
2. [Workflows](#workflows)
3. [Helpers](#helpers)
4. [Backend](#backend)
5. [Memory](#memory)
6. [Serialization](#serialization)
7. [Templates](#templates)
8. [Tools](#tools)

## Agents

- [`bee.py`](./agents/bee.py): Basic Bee Agent implementation
- [`simple.py`](./agents/simple.py): Simple agent implementation

## Workflows

- [`simple.py`](./workflows/simple.py): Introduction to workflows
- [`multiAgents.py`](./workflows/multi_agents.py): Multi-step sequential agentic workflow.
- [`web_agent.py`](./workflows/web_agent.py): Web Agent

## Helpers

- [`io.py`](./helpers/io.py): Input/Output helpers

## Backend

- [`ollama.py`](./backend/providers/ollama.py): Ollama Chat-based language model usage
- [`watsonx.py`](./backend/providers/watsonx.py): Watsonx Chat-based language model usage

### LLM Providers

- [`ollama.py`](./backend/providers/ollama.py): Ollama model usage
- [`watsonx.py`](./backend/providers/watsonx.py): Watsonx integration

## Memory

- [`agentMemory.py`](./memory/agentMemory.py): Memory management for agents
- [`slidingMemory.py`](./memory/slidingMemory.py): Sliding window memory
- [`summarizeMemory.py`](./memory/summarizeMemory.py): Memory with summarization
- [`tokenMemory.py`](./memory/tokenMemory.py): Token-based memory
- [`unconstrainedMemory.py`](./memory/unconstrainedMemory.py): Unconstrained memory example

## Templates

- [`basic_functions.py`](./templates/basic_functions.py): Basic functions
- [`basic_template.py`](./templates/basic_template.py): Basic template
- [`agent_sys_prompt.py`](./templates/agent_sys_prompt.py): System Prompt

## Tools

- [`decorator.py`](./tools/decorator.py): Tool creation using decorator
- [`duckduckgo.py`](./tools/duckduckgo.py): DDG Search Tool
- [`openmeteo.py`](./tools/openmeteo.py): DDG Search Tool
