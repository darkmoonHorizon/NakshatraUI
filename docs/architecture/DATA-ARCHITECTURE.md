# Data Architecture

Status: ACTIVE
Last Updated: 2026-10-03
Owner: Nakshatra Core

### Consumer-Owned Data Acquisition
The consumer is responsible for all data fetching (CMS, API, DB). The library only receives data.

### Package-Owned Presentation
The library controls how the data is displayed.

### Serializable Contracts
Allowed data types across the RSC/Client boundary:
- string
- number
- boolean
- arrays
- plain objects
- URLs
- enums

**Avoid in canonical data:**
- JSX
- ReactNode
- React components
- render functions
- callbacks

*Reasoning:* These types cannot be serialized across the Server/Client boundary and tie data models to specific UI implementations.\n
