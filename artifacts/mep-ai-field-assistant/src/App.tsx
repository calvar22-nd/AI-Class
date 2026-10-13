import { type ReactNode } from 'react';
import { useState, type FormEvent } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Activity,
  Building2,
  CalendarDays,
  ClipboardList,
  FileText,
  Info,
  MessageSquareText,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [source, setSource] = useState('');

  function handleAsk(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedQuestion = question.trim().replace(/\?$/, '').trim().toLowerCase();

    if (normalizedQuestion === 'what happened during the previous service visit') {
      setResponse(
        'The previous technician reported intermittent communication loss between RTU-3 and the BAS controller. Wiring connections were checked, and further controller diagnostics were recommended.',
      );
      setSource('Previous Service Note — October 6, 2026');
      return;
    }

    if (normalizedQuestion === 'what should i check') {
      setResponse(
        'Could you clarify whether you are asking about the BAS communication issue, the wiring, or the rooftop unit itself?',
      );
      setSource('No source selected — clarification required.');
      return;
    }

    setResponse('Please enter a job-related question.');
    setSource('');
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            <Wrench size={19} strokeWidth={2.2} />
          </div>
          <div>
            <p className="brand-title">MEP AI FIELD ASSISTANT</p>
            <p className="brand-subtitle">Service reference</p>
          </div>
        </div>
        <div className="topbar-status">
          <span className="status-dot" aria-hidden="true" />
          Sample job loaded
        </div>
      </header>

      <main className="page-wrap">
        <section className="page-heading" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">
              <Activity size={14} strokeWidth={2.4} />
              Field reference / service call
            </p>
            <h1 className="page-title" id="page-title">A clear answer, on the job.</h1>
            <p className="page-intro">
              Review the service history and ask a question about this equipment.
              Responses are grounded in the sample job information below.
            </p>
          </div>
          <div className="job-chip" data-testid="text-job-number">
            <ClipboardList size={15} />
            Service Call #001
          </div>
        </section>

        <div className="content-grid">
          <section className="panel job-panel" aria-labelledby="job-panel-heading">
            <div className="panel-header">
              <div className="panel-header-icon" aria-hidden="true">
                <Building2 size={17} />
              </div>
              <div>
                <h2 className="panel-heading" id="job-panel-heading">Job details</h2>
                <p className="panel-kicker">Commercial service record</p>
              </div>
            </div>
            <div className="job-body">
              <p className="job-customer-label">Customer</p>
              <h3 className="job-customer" data-testid="text-customer">
                Lakeside Office Building
              </h3>
              <div className="job-divider" />
              <dl className="detail-list">
                <div className="detail-item">
                  <dt>Equipment</dt>
                  <dd className="equipment-line" data-testid="text-equipment">
                    <Wrench size={15} />
                    RTU-3 Rooftop Unit
                  </dd>
                </div>
                <div className="detail-item">
                  <dt>Issue</dt>
                  <dd data-testid="text-issue">
                    Intermittent communication loss with the building automation controller
                  </dd>
                </div>
                <div className="detail-item">
                  <dt>Date</dt>
                  <dd className="equipment-line" data-testid="text-job-date">
                    <CalendarDays size={15} />
                    October 6, 2026
                  </dd>
                </div>
              </dl>
              <div className="note-box" data-testid="text-previous-service-note">
                <p className="note-box-title">
                  <FileText size={14} />
                  Previous Service Note
                </p>
                <p>
                  Technician observed intermittent communication loss between RTU-3 and
                  the BAS controller. Wiring connections were checked. Further controller
                  diagnostics were recommended.
                </p>
              </div>
            </div>
          </section>

          <section className="panel assistant-panel" aria-labelledby="assistant-heading">
            <div className="panel-header">
              <div className="panel-header-icon" aria-hidden="true">
                <Sparkles size={17} />
              </div>
              <div>
                <h2 className="panel-heading" id="assistant-heading">Job question</h2>
                <p className="panel-kicker">Answers stay within the service record</p>
              </div>
            </div>
            <div className="assistant-content">
              <div className="assistant-intro">
                <div className="assistant-symbol" aria-hidden="true">
                  <ShieldCheck size={19} />
                </div>
                <p>
                  <strong>Ask about this service call</strong>
                  Get a concise response with its supporting source when available.
                </p>
              </div>

              <form onSubmit={handleAsk}>
                <label className="question-label" htmlFor="job-question">
                  Ask a question about this job
                </label>
                <div className="ask-row">
                  <input
                    className="question-input"
                    id="job-question"
                    name="question"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter a job-related question"
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    data-testid="input-job-question"
                  />
                  <button className="ask-button" type="submit" data-testid="button-ask-ai">
                    Ask AI
                    <Send size={15} strokeWidth={2.2} />
                  </button>
                </div>
              </form>

              <div className="answer-stack" aria-live="polite">
                <section className="answer-block" aria-labelledby="response-heading">
                  <h3 className="section-label" id="response-heading">
                    <MessageSquareText size={15} />
                    AI Response
                  </h3>
                  <p
                    className={`response-copy${response ? '' : ' is-empty'}`}
                    data-testid="text-ai-response"
                  >
                    {response || 'Your response will appear here.'}
                  </p>
                </section>
                <section className="answer-block" aria-labelledby="source-heading">
                  <h3 className="section-label" id="source-heading">
                    <FileText size={15} />
                    Source
                  </h3>
                  <p
                    className={`source-copy${source ? ' has-source' : ''}`}
                    data-testid="text-ai-source"
                  >
                    {source ? <ShieldCheck size={14} /> : <Info size={14} />}
                    {source || 'Source information will appear here.'}
                  </p>
                </section>
              </div>
            </div>
          </section>
        </div>

        <p className="prototype-note" data-testid="text-prototype-note">
          <Info size={14} aria-hidden="true" />
          <span>
            Prototype note: AI responses are currently simulated using predefined sample
            job information.
          </span>
        </p>
        <footer className="page-footer">Use the service record as your reference</footer>
      </main>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
