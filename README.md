# 🏎️ F1 Strategy Predictor & Telemetry Dashboard

A production-grade, full-stack machine learning application designed to simulate and calculate F1 tire degradation loops and lap time deltas in real-time. Built using a decoupled monorepo architecture.

## 🚀 Live Deployments
* **Frontend Web Dashboard (Vercel):** [https://f1-strategy-api.vercel.app](https://f1-strategy-api.vercel.app)
* **Backend Inference Engine (Render):** [https://f1-strategy-backend-dhanvith.onrender.com](https://f1-strategy-backend-dhanvith.onrender.com)

---

## 🏗️ System Architecture

The application is structured as a decoupled monorepo, separating the heavy data science processing engine from the user interface to maximize performance and scalability:

```text
f1-strategy-api/
├── backend/            # FastAPI Engine (Python 3)
│   ├── src/            # Main server routes, schema structures, and path handlers
│   ├── models/         # Trained Random Forest serialization files (.pkl)
│   └── requirements.txt# Data science ecosystem allocations
└── frontend/           # UI Interactive Panel (Next.js & React)
    ├── src/            # Core views, sliders, and telemetry hooks
    └── package.json    # Next ecosystem dependencies
