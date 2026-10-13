# MEP AI Field Assistant

A prototype that helps an MEP field technician ask a job-related question and quickly retrieve relevant, traceable job information.

## First Working Slice

The first working slice allows an MEP field technician to:

1. View a sample commercial service job.
2. Ask a job-related question.
3. Receive a simulated AI response.
4. Review the supporting source used for the response.

The prototype focuses on one central user flow and intentionally excludes authentication, databases, enterprise integrations, and other advanced features.

## Prototype Link

https://mep-ai-field-assistant.replit.app

## AI Role and Current Status

The intended AI system will interpret a technician's natural-language question, identify relevant information from job documentation, and generate a concise response grounded in that information.

For this first working slice, the AI behavior is simulated using predefined responses and sample job data. No live AI model, external API, or database is currently connected.

## Test Results

| Test | Input or Action | What Happened | Result |
|---|---|---|---|
| Typical case | “What happened during the previous service visit?” | The prototype returned the relevant information from the previous service note and displayed the supporting source. | Pass |
| Challenge case | “What should I check?” | The prototype recognized that the question was ambiguous and asked the user to clarify whether the question referred to the BAS communication issue, wiring, or rooftop unit. | Pass |
| Invalid or empty case | The user submitted the form without entering a question. | The prototype displayed “Please enter a job-related question.” | Pass |

## Known Limitations

### 1. Simulated AI
The current prototype uses predefined responses instead of a live AI model. A future version would retrieve and generate answers dynamically from job documentation.

### 2. Limited Sample Data
The prototype currently contains only one sample service job and a small amount of job information. Future versions should test multiple jobs and different document types.

### 3. No Enterprise Integrations
The prototype does not connect to Salesforce, work-order systems, document repositories, or other enterprise platforms. These integrations are intentionally outside the scope of the first working slice.

## Future Work

Future iterations may include live AI retrieval, additional job documentation, improved source citation, and testing with a broader set of MEP field scenarios.
