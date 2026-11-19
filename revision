# MEP AI Field Assistant — Prototype Revision

## 1. Priority Improvements

Based on peer feedback and the results from the first working slice, I selected three priority improvements for the revised prototype.

### Improvement 1 — Add visible example questions

Peer feedback showed that first-time users were not always sure what kinds of questions the prototype could answer. One reviewer used the README to find a working question rather than understanding the available interaction directly from the interface.

To address this, I added three visible example questions below the input field:

- What happened during the previous service visit?
- What issue was reported with RTU-3?
- What should I check?

These examples are clickable and populate the question field, reducing the need for users to consult the README before using the prototype.

### Improvement 2 — Improve recovery from ambiguous and unsupported questions

The original prototype handled an ambiguous question by asking the user to clarify, but the user still had to type a new question manually.

The revised prototype adds clickable clarification options:

- BAS communication issue
- Wiring
- Rooftop unit

The prototype also improves unsupported-question handling. Instead of returning a generic message such as “That question is not part of this MVP,” it now explains when information cannot be found in the available service record and provides suggested questions that the user can try next.

### Improvement 3 — Improve source traceability

Peer reviewers identified the existing Source section as useful because it helped them determine where an answer came from. One reviewer suggested making the connection between the answer and the source more visible.

The revised prototype now includes inline source references such as `[1]` directly within factual AI responses while preserving the existing Source section.

This makes it easier to understand which information is supported by the service record.

---

## 2. Response to Peer Feedback

| Feedback or Observed Issue | Decision | What Changed or Why |
|---|---|---|
| First-time users were unsure what kinds of questions the prototype could answer. | Acted on | Added visible and clickable example questions directly below the input field. |
| The source section was useful, but the relationship between individual statements and sources could be clearer. | Adapted | Added inline source references while retaining the existing Source section. |
| Unsupported questions produced a dead end and did not tell the user what to do next. | Acted on | Replaced the generic out-of-scope response with a clear statement that the information was not found and added suggested next questions. |
| Clarification options required the user to manually type another question. | Acted on | Added clickable clarification options for BAS communication, wiring, and rooftop unit information. |
| The current typical response resembles a summary or search result, so the value of future AI beyond search is not yet fully demonstrated. | Deferred | The current milestone remains focused on the central user flow and simulated AI behavior. Demonstrating stronger AI value through live retrieval and synthesis will require a later prototype with more documents and dynamic AI behavior. |

---

## 3. Evaluation of the Revised Prototype

The revised prototype was evaluated using five distinct test cases: two typical cases, one challenge case, one invalid or empty case, and one risk case.

### Test Results

| Case | Input or Action | Expected Result / Success Criterion | Actual Result | Pass, Partial, or Fail | Implication or Next Step |
|---|---|---|---|---|---|
| Typical 1 | “What happened during the previous service visit?” | The prototype should return an accurate summary of the previous visit and clearly identify the supporting source. | The system returned the communication issue, wiring check, and recommendation for further diagnostics. Inline citation `[1]` and the Previous Service Note source were displayed. | Pass | The primary information-retrieval flow is understandable and source traceability is improved. |
| Typical 2 | “What issue was reported with RTU-3?” | The prototype should identify the reported issue and show the supporting source. | The system reported intermittent communication loss between RTU-3 and the BAS controller and displayed source `[1]`. | Pass | The prototype can support a second realistic field question using the same service record. |
| Challenge | “What should I check?” | The system should recognize that the question is ambiguous and request clarification instead of assuming the user’s intent. | The system asked whether the user meant the BAS communication issue, wiring, or rooftop unit, and provided clickable clarification options. | Pass | The revised flow reduces the risk of a confident but incorrect assumption. |
| Invalid or Empty | Submit the form without entering a question. | The system should reject the empty input and request a valid job-related question. | The prototype displayed “Please enter a job-related question.” | Pass | Basic input validation continues to work as intended. |
| Risk | “What controller model and firmware version is installed?” | The system should not fabricate technical information that is not present in the service record. It should explain that the information is unavailable and provide a useful next step. | The system stated that the controller model and firmware version could not be found, displayed “No supporting information found in the current service record,” and suggested valid questions. | Pass | The revised response provides a meaningful safeguard against unsupported technical claims. |

---

## 4. Additional Clarification-Flow Checks

The clickable clarification options were also tested individually.

### BAS communication issue

Input:

`What information is available about the BAS communication issue?`

Result:

The prototype returned the documented intermittent communication loss between RTU-3 and the BAS controller and displayed the supporting source.

**Result: Pass**

### Wiring

Input:

`What was checked regarding the wiring?`

Result:

The prototype stated that wiring connections were checked and displayed the supporting service note.

**Result: Pass**

### Rooftop unit

Input:

`What information is available about RTU-3?`

Result:

The prototype identified RTU-3 as a rooftop unit and reported the documented communication issue with the BAS controller.

**Result: Pass**

These checks confirm that the clarification buttons are functional rather than purely visual.

---

## 5. Before-and-After Comparison

One peer reviewer tested the following question:

`What controller model and firmware version is installed?`

### Before Revision

The earlier prototype responded:

> “That question is not part of this MVP. Please try another question.”

This response prevented fabrication, but it created a dead end. The user did not know whether the information was missing, whether the question was incorrect, or what they should ask next.

### After Revision

The revised prototype responds:

> “I could not find the controller model or firmware version in the available service record.”

It also displays:

> “No supporting information found in the current service record.”

The interface then provides suggested questions that the user can select.

### Interpretation

The revision improved the experience because the system now distinguishes between an unsupported question and missing information. The user receives a clear explanation and a path to continue using the product instead of reaching a dead end.

---

## 6. What Does the Evidence Tell Me?

The revised prototype performs the central task reasonably well within its current limited scope. A user can view a service record, ask a realistic job-related question, receive a concise answer, and verify the supporting source. The example questions and clickable clarification options also make the system easier to understand without requiring the README.

The prototype still has important limitations. The AI behavior is simulated using predefined responses, the available data consists of only one sample job, and the current tests do not establish model accuracy or reliability in a real MEP field environment. The results therefore provide early evidence that the interaction design is understandable and useful, but they do not prove that a live AI system would reliably perform the task across multiple jobs and document types.

The results support the product’s intended value at a limited prototype level: reducing the effort required to move from a job question to relevant, traceable service information. The next important test would be to connect the interface to a larger set of sample job documents and evaluate whether dynamic retrieval can maintain source accuracy and useful responses across a broader range of technician questions.

---

## 7. Concrete Risk and Safeguard

### Risk

A field technician could receive unsupported technical information presented with too much confidence and make a decision based on information that is not actually present in the service record.

This risk matters because technicians may use the tool while performing real work, where incorrect technical information could create delays, unnecessary work, equipment problems, or unsafe decisions.

### Safeguard Implemented

The revised prototype addresses this risk through several design choices:

- It does not invent information that is absent from the sample service record.
- It explicitly states when supporting information cannot be found.
- It displays the supporting source when information is available.
- It asks for clarification when a question is ambiguous.
- It provides suggested next questions instead of forcing the user into a dead end.
- It continues to display a notice explaining that the AI behavior is currently simulated.

These choices are intended to reduce over-reliance on the system and maintain user control over the final field decision.

### Remaining Risk

The safeguard is currently demonstrated through predefined behavior rather than a live AI model. A future generative system could still hallucinate, misinterpret documentation, select an incorrect source, or present an incomplete answer with excessive confidence.

A later version should therefore test retrieval accuracy, source grounding, repeated outputs, and user behavior with a live model before the product is used for real field decisions.

---

## 8. Remaining Limitations

### 1. Simulated AI

The current prototype still uses predefined responses rather than a live generative AI model. The prototype demonstrates the intended experience but does not establish model accuracy or reliability.

### 2. Limited Sample Data

The prototype currently contains one sample service job and a small amount of information. It does not yet test whether the interaction remains useful when information is distributed across multiple service notes, equipment records, or project documents.

### 3. No Enterprise Integrations

The prototype does not connect to Salesforce, work-order systems, document repositories, or other company platforms. These integrations remain outside the scope of this milestone.

---

## 9. Next Priorities

Based on the current evaluation, the next priorities are:

1. **Test dynamic retrieval using multiple sample documents.**  
   This would help determine whether the system can identify the correct information and source when answers are distributed across different records.

2. **Evaluate the prototype with additional MEP field scenarios and intended users.**  
   More realistic user testing would help determine which questions technicians actually ask and whether the responses reduce search effort.

3. **Compare AI-assisted retrieval with simpler alternatives.**  
   A later evaluation should compare the AI interaction against keyword search or document navigation to determine whether AI provides meaningful additional value.

---

## 10. Current Prototype Status

The current prototype remains intentionally limited.

### Functional

- Sample service-job interface
- Question input
- Example-question buttons
- Simulated predefined responses
- Inline source references
- Source display
- Empty-input handling
- Ambiguity detection
- Clickable clarification options
- Unsupported-information response
- Suggested next questions

### Simulated

- AI interpretation of natural-language questions
- Information retrieval
- Response generation
- Source selection

### Planned

- Live generative AI
- Dynamic document retrieval
- Multiple jobs and document types
- Enterprise-system integrations
- Broader user evaluation

The prototype should therefore be interpreted as a test of the intended user experience rather than a production-ready technical system.
