export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    label: "AI, RAG & Multi-Agent Systems",
    items: [
      "Multi-Agent RAG Architecture",
      "LangGraph / Agent Workflows",
      "Hybrid Search (Dense Vectors + BM25Okapi)",
      "Reciprocal Rank Fusion (RRF)",
      "Cross-Encoder Rerankers",
      "RAGAS & DeepEval Benchmarks",
      "Presidio PII Pseudonymization",
      "AES-256 Cryptographic Shredding"
    ]
  },
  {
    label: "Languages & Core",
    items: [
      "Python 3 (FastAPI, Uvicorn, Pydantic)",
      "C++",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Clean Code Principles"
    ]
  },
  {
    label: "Computer Vision & Deep Learning",
    items: [
      "PyTorch",
      "YOLOv8",
      "OpenCV",
      "Intel OpenVINO (Inference & Model Optimization)",
      "Neural Network Verification Pipelines"
    ]
  },
  {
    label: "Automation & Integrations",
    items: [
      "Apify REST API & Custom Actors",
      "Zapier (Multi-Step Zaps, Inline Formulas)",
      "Make.com Scenarios",
      "Selenium WebDriver & ChromeDriver",
      "JSON Payloads & Schema Validation",
      "Webhooks & RESTful API Design"
    ]
  },
  {
    label: "Data & Infrastructure",
    items: [
      "PostgreSQL",
      "MySQL",
      "Structured Query Optimization",
      "Docker & Containerization",
      "Linux CLI / Bash",
      "Git / GitHub Version Control"
    ]
  },
  {
    label: "Agentic & AI-Assisted Tools",
    items: [
      "Claude Code",
      "Cursor IDE",
      "Agentic Workflow Orchestration",
      "Advanced Prompt Engineering"
    ]
  },
  {
    label: "Methodologies & QA",
    items: [
      "Agile / Scrum Ceremonies",
      "Sprint Planning",
      "Technical API Specifications",
      "User Acceptance Criteria (UAC)",
      "QA Release Validation",
      "Incident Diagnostics & Root Cause Analysis"
    ]
  }
];
