# AI-Use Disclosure

## 1. Tools Used

I used the following AI-assisted tools during the project:

- **ChatGPT** — as a support tool for brainstorming, structuring documentation, organizing test cases, and reviewing alternatives.
- **Replit AI** — as a coding assistant to accelerate implementation of the prototype and specific interface revisions.
- **GitHub Copilot** — occasionally for repository-related suggestions such as commit wording.

I remained responsible for the product definition, scope, design decisions, peer-feedback interpretation, testing, evaluation, and final approval of all changes.

The prototype itself does **not** currently use a live AI model or external AI API. Its AI behavior is intentionally simulated using predefined responses and sample service information.

---

## 2. How I Used AI During Development

I used AI primarily to accelerate implementation and help organize my thinking.

### Product Definition

I defined the project around a specific user problem: an MEP field technician may need to find job-specific information quickly while performing work in the field.

I chose the central product flow:

**MEP field technician → asks a job-related question → receives relevant information → verifies the source.**

ChatGPT was used to help refine the wording and structure of this concept, but I selected the user, problem, product scope, and central interaction based on my own project work and customer-discovery context.

### Prototype Development

I used Replit AI to accelerate coding of the prototype after I had defined the intended behavior.

I specified that the prototype needed:

- One sample commercial service job
- A question input
- A visible AI response
- Supporting source information
- Clear handling of empty or unsupported questions
- No unnecessary enterprise features

I reviewed the generated implementation and manually tested its behavior before using it as the project prototype.

### Prototype Revision

After receiving peer feedback, I reviewed the comments and identified three improvements that were most relevant to the user experience:

1. Provide example questions so first-time users know what they can ask.
2. Improve recovery from ambiguous or unsupported questions.
3. Make source traceability more visible.

I then used Replit AI to implement these decisions.

The decision to implement these specific changes came from my interpretation of the peer feedback and the assignment requirements, not from an automatic AI recommendation.

---

## 3. Representative Prompts

### Prompt 1 — Initial Prototype Implementation

> Create a simple single-page web prototype called “MEP AI Field Assistant.” The primary user is an MEP field technician working on a commercial service job. The technician should be able to view a sample service job, ask a job-related question, and receive a simulated AI response with a supporting source. Do not add login, databases, external APIs, or a live AI model.

### How I Used the Result

Replit AI produced an initial implementation based on the requirements I provided.

I then manually tested the prototype and confirmed that it supported the intended central flow. I also chose to keep the prototype intentionally limited rather than adding additional features.

---

### Prompt 2 — Peer-Feedback Revision

> Revise the existing MEP AI Field Assistant prototype based on peer-review feedback. Add visible example questions, clickable clarification options, improved unsupported-question handling, and inline source references. Preserve the current MVP scope and do not add live AI, databases, authentication, or enterprise integrations.

### How I Used the Result

This prompt translated the product changes I had already selected into implementation instructions for Replit AI.

After the revision, I manually tested the new functionality and checked that:

- Example questions worked correctly.
- Clarification options were clickable.
- Unsupported questions did not generate fabricated information.
- Sources remained visible.
- The main user flow still worked.

---

### Prompt 3 — Evaluation Structure

> Help organize five distinct test cases for the revised prototype, including two typical cases, one challenge case, one invalid or empty case, and one risk case.

### How I Used the Result

I used AI to help structure the evaluation format, but I selected and executed the actual test inputs.

I personally ran each test in the prototype, observed the result, and determined whether it passed.

The recorded evaluation therefore reflects observed prototype behavior rather than assumed or AI-generated results.

---

## 4. Human Judgment and Product Decisions

Human judgment played the central role throughout the project.

One major decision was to keep the prototype deliberately small.

AI-assisted development made it possible to add features such as authentication, databases, file uploads, multiple jobs, dashboards, live AI, and enterprise integrations. I chose not to implement these features because they were not necessary to test the central user experience and would have expanded the scope beyond the milestone.

I also made the final decisions about how to respond to peer feedback.

For example, one reviewer suggested stronger source integration. Rather than removing the existing Source section, I chose to preserve it and add inline references. This allowed the prototype to improve traceability without sacrificing the clarity of the original interface.

Another important decision was to keep the AI behavior simulated. This allowed me to focus the evaluation on whether the product interaction was understandable and useful before investing effort in live AI integration.

---

## 5. Verification

I manually verified the AI-assisted work rather than accepting generated code or suggestions without testing.

### Functional Testing

I executed five required evaluation cases:

- Two typical cases
- One challenge case
- One invalid or empty case
- One risk case

I also tested the clarification options individually.

### Content Verification

I compared the prototype's factual responses against the sample service record.

I confirmed that:

- Supported answers matched the available information.
- Source references corresponded to the sample service note.
- Unsupported technical information was not fabricated.
- Ambiguous questions triggered clarification.

### User-Flow Verification

I checked that a user could move from:

**job information → question → response → source**

without requiring additional explanation.

I also verified the revised interface after implementing peer feedback.

---

## 6. What Still Requires Verification

The current prototype evaluates the product interaction, not the reliability of a production AI system.

Because the current AI behavior is simulated, additional work would be required to evaluate:

- Retrieval accuracy across multiple documents
- Live generative-model consistency
- Source-selection accuracy
- Conflicting or incomplete service records
- Real technician behavior
- Comparison with traditional search

These remain future validation priorities.

---

## 7. AI Inside the Product

### Intended AI Task

The intended AI system would interpret a technician's natural-language question, identify relevant information from job documentation, and generate a concise response grounded in that information.

### Inputs

Potential inputs include:

- Technician questions
- Service notes
- Equipment information
- Job documentation
- Relevant project records

### Outputs

The intended system would provide:

- A concise answer
- Relevant supporting information
- A visible source
- Clarification when a question is ambiguous
- A clear statement when supporting information cannot be found

### Intended User Value

The product is intended to reduce the effort required for a field technician to locate and interpret relevant job information while preserving the ability to verify where the answer came from.

---

## 8. Current Implementation Status

### Functional

I implemented and verified:

- Single-page service-job interface
- Sample job information
- Question input
- Example-question buttons
- Simulated AI responses
- Inline source references
- Supporting Source section
- Empty-input validation
- Ambiguity handling
- Clickable clarification options
- Unsupported-information handling
- Suggested next questions

### Simulated

The following AI behaviors are currently simulated:

- Natural-language interpretation
- Information retrieval
- Response generation
- Source selection

### Planned

Potential future development includes:

- Live AI integration
- Retrieval across multiple documents
- Dynamic source grounding
- Additional service jobs
- Broader field-user testing
- Selected enterprise integrations

---

## 9. Summary

AI tools helped me accelerate coding, organize documentation, and explore implementation alternatives.

However, I remained responsible for:

- Defining the problem and primary user
- Choosing the product scope
- Selecting which peer feedback to implement
- Determining the prototype revisions
- Designing the evaluation
- Running the tests
- Interpreting the results
- Identifying the product risk and safeguard
- Verifying the final prototype behavior

AI functioned as a development assistant within a process directed and evaluated by me.
