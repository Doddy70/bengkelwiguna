# Claude Sonnet 4 Migration Guide

Migrating Bengkel Wiguna from Gemini 3.5 Flash to Claude Sonnet 4.

## Overview

| Aspect | Gemini 3.5 Flash | Claude Sonnet 4 |
|--------|------------------|-----------------|
| Context Window | 1M+ tokens | 200K tokens |
| Input Cost | $0.125/1M | $3/1M |
| Output Cost | $0.125/1M | $15/1M |
| Thinking | Built-in | Extended (opt-in) |
| Tool Calling | v1 | v1.5 |

## Files Created

### 1. Core Integration (`src/lib/claude.js`)

- `ClaudeClient` - Main API wrapper
- `ContextManager` - Token budget management
- `CostTracker` - Usage monitoring

### 2. Business Logic (`src/lib/claude-service.js`)

- SEO meta description generation
- JSON-LD schema creation
- Content optimization
- Translation services

### 3. Prompts Library (`src/lib/claude-prompts.js`)

- Automotive/ repair shop specific prompts
- Indonesian language support
- SEO optimization prompts

### 4. Cost Middleware (`src/middleware/cost-tracking.js`)

- Budget enforcement
- Usage monitoring
- Rate limiting

### 5. Migration Script (`scripts/migrate-to-claude.mjs`)

- Automated setup
- Verification checks
- Dry-run mode

## Setup Instructions

### 1. Install Claude SDK

```bash
cd bexon
npm install @anthropic-ai/sdk
```

### 2. Add Environment Variables

```bash
# .env.local
ANTHROPIC_API_KEY=sk-ant-your-key-here
CLAUDE_MAX_TOKENS_PER_REQUEST=4096
CLAUDE_MONTHLY_BUDGET_USD=50
```

### 3. Run Migration Script

```bash
node scripts/migrate-to-claude.mjs
```

### 4. Test Integration

```bash
node scripts/test-claude.mjs
```

## Usage Examples

### Basic Completion

```javascript
import { createClaudeClient } from '../lib/claude'

const client = createClaudeClient(process.env.ANTHROPIC_API_KEY)
const response = await client.complete('Hello from Claude!')
```

### With Thinking

```javascript
const { thinking, text } = await client.completeWithThinking(
  'Explain complex SEO concepts for automotive shops',
  { thinkingBudget: 2048 }
)
```

### Structured Output

```javascript
const schema = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    price: { type: 'number' },
  },
  required: ['title'],
}

const result = await client.completeStructured(prompt, schema)
```

## Cost Optimization Tips

1. **Use thinking sparingly** - Enable only for complex tasks
2. **Set maxTokens limits** - Prevents runaway responses
3. **Context summarization** - Use `ContextManager.fitContext()`
4. **Cache responses** - Store results in WordPress for reuse
5. **Monitor with CostTracker** - Track actual usage

## Context Budget Management

Claude Sonnet 4 has a 200K context window. Recommended budget:

| Component | Max Tokens |
|-----------|------------|
| System prompt | 10K |
| User context | 140K |
| Response | 50K |
| **Total** | 200K |

```javascript
import { ContextManager } from '../lib/claude'

const cm = new ContextManager({
  maxTokens: 150000, // Conservative limit
  summaryThreshold: 100000, // Summarize above this
})

const fittedContent = cm.fitContext(longContent, systemPrompt)
```

## Migration Checklist

- [ ] Install `@anthropic-ai/sdk`
- [ ] Add `ANTHROPIC_API_KEY` to `.env.local`
- [ ] Run `node scripts/migrate-to-claude.mjs`
- [ ] Test with `node scripts/test-claude.mjs`
- [ ] Verify cost tracking in dashboard
- [ ] Set up budget alerts
- [ ] Document internal processes

## Troubleshooting

### "Claude service not configured"

Ensure `ANTHROPIC_API_KEY` is set in environment variables.

### "Budget exceeded"

Check `CLAUDE_MONTHLY_BUDGET_USD` or wait for reset.

### "Invalid JSON response"

Increase `maxTokens` or simplify prompt.

## Comparison: API Formats

### Gemini

```javascript
const response = await model.generateContent({
  contents: [{ role: 'user', parts: [{ text: prompt }] }],
})
```

### Claude

```javascript
const response = await client.messages.create({
  model: 'claude-sonnet-4-6-20250514',
  max_tokens: 4096,
  messages: [{ role: 'user', content: prompt }],
})
```

## Next Steps

1. Integrate with existing WordPress data fetching
2. Add Claude-powered features to pages
3. Set up monitoring dashboard
4. Train team on usage guidelines
