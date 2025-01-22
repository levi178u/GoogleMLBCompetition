# MLB x Google Cloud Hackathon
## 1. Problem Understanding and Planning
Objective: Extract fundamental Statcast metrics (e.g., pitch speed, exit velocity) from archival baseball game videos using computer vision and AI.
Deliverables: Hosted project URL, project description, open-source code repository, and insights.
## 2. Dataset Preparation
Archival Videos: Collect old baseball game videos (ensure usage rights). Use publicly available MLB archival datasets or licensed materials.
Annotations (if needed): If no labeled data exists, annotate key metrics manually or semi-automatically for training/testing.
Data Cleaning: Standardize video formats, segment clips, and ensure quality for computer vision tasks.
## 3. Technology Stack
Google Cloud Platform Tools:
Vertex AI: Train and deploy machine learning models.
Google Cloud Storage: Store video datasets and outputs.
Google Cloud Functions: Host APIs for metric extraction.
Cloud Run: Deploy the application.
BigQuery: Store extracted Statcast metrics for querying and analysis.
Gemini AI: Use for advanced NLP integration (optional, e.g., generating textual summaries of extracted metrics).
Imagen: Enhance visual analysis where needed, such as ball tracking or pitch identification.
## 4. Solution Pipeline
### Step 1: Extract Video Frames
Use OpenCV or a similar library to extract frames from videos at a high FPS to capture key moments in each pitch/play.
### Step 2: Object Detection
Use pre-trained computer vision models (e.g., YOLOv8 or Google’s AutoML Vision) to detect objects such as:
Baseball
Pitcher, batter, and fielders
Bats and bases
### Step 3: Track Motion
Implement object tracking algorithms (e.g., DeepSORT or Kalman Filter) to:
Track the baseball’s trajectory.
Measure pitch speed using frame-by-frame positional changes and timestamps.
### Step 4: Analyze Events
Use machine learning models (e.g., TensorFlow, PyTorch, or Vertex AI custom models):
Estimate exit velocity by analyzing the bat-ball collision.
Determine spin rate and pitch type using the trajectory.
### Step 5: Metric Extraction
Combine visual analytics with physics-based modeling to compute:
Pitch speed: Frame-wise displacement over time.
Exit velocity: Speed of the ball after contact.
Other metrics: Use advanced models for spin rate, launch angle, etc.
### Step 6: Verification
Validate the extracted metrics using real Statcast data (if available) for accuracy.
## 5. Application Development
Frontend: Create a user-friendly dashboard to upload videos and view extracted metrics. Use frameworks like React, Angular, or Vue.js.
Backend:
Use Python/Flask or Node.js for API development.
Host APIs on Cloud Run or App Engine for scalability.
Integration: Connect with BigQuery to allow querying of extracted metrics.
## 6. Testing and Deployment
Testing:
Test on multiple archival videos for robustness.
Fine-tune the models and adjust for edge cases (e.g., low-quality videos, occlusions).
Deployment: Host the application using Cloud Run or App Engine. Use CI/CD pipelines for efficient updates.
## 7. Submission Components
### A. Hosted Project
Provide a live URL where judges can upload videos and see Statcast metrics in real time.
### B. Project Description
Include:

Features and Functionality:
Upload archival videos.
Extract metrics (pitch speed, exit velocity, etc.).
View metrics on a dashboard or export as CSV.
Technologies Used:
Google Cloud tools: Vertex AI, Cloud Run, BigQuery, AutoML Vision.
Libraries: OpenCV, TensorFlow/PyTorch, YOLO, etc.
Data Sources:
MLB archival videos and publicly available datasets.
Findings and Learnings:
Challenges in low-resolution video processing.
Model tuning for accurate metric extraction.
### C. Open Source Repository
Host the code on GitHub with:
Open Source License (e.g., MIT License).
## Detailed README:
Installation instructions.
Usage guide.
Contribution guidelines.
Ensure the repository is public for judging.
## 8. Final Touches
Documentation: Add clear user instructions, system architecture diagrams, and model explanations in your project repository.
Presentation: Prepare a brief video/demo showcasing your tool’s capabilities.
