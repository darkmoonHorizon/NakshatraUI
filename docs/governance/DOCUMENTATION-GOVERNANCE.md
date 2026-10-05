# Documentation Governance

Status: ACTIVE
Last Updated: 2026-10-03
Owner: Nakshatra Core

## Document Status Classification

| Status | Meaning |
|---|---|
| **LOCKED** | Explicitly decided and must not be changed without an ADR |
| **ACTIVE** | Current implementation truth, but potentially changeable |
| **PROPOSED** | Recommended direction, not yet approved |
| **OPEN** | Decision has not been made |
| **HISTORICAL** | Previous decision/implementation retained for context |

## Source-of-Truth Hierarchy

```text
Actual repository implementation
        ↓
LOCKED ADRs
        ↓
LOCKED TDRs
        ↓
Architecture documentation
        ↓
Project / product documentation
        ↓
Agent instructions
        ↓
Conversation history
```

**Critical Rules:**
- Agent instructions control agent behavior; they do not override locked architecture decisions.
- Conversation history must never be treated as the permanent source of truth once the decision has been documented.\n
