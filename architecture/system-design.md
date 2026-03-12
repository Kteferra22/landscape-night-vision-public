# Landscape Night Vision – System Architecture

Landscape Night Vision uses a hybrid architecture that combines generative AI with deterministic rendering logic to provide predictable lighting previews while still benefiting from AI-assisted scene processing.

The system is designed to prioritize reliability, cost efficiency, and interactive performance.

---

## High Level Architecture

User Upload  
↓  
Lovable / React Frontend  
↓  
Image Optimization (Cloudinary CDN)  
↓  
Backend Storage (Supabase)  
↓  
AI Scene Processing (OpenAI API)  
↓  
Deterministic Fixture Placement Engine  
↓  
Canvas Lighting Renderer  
↓  
Final Lighting Preview

---

## Frontend Layer

The frontend was built using **Lovable**, which generates a React + TypeScript application architecture.

React components manage the user interface while a shared global state system coordinates the multi-step lighting workflow.

Key responsibilities of the frontend include:

• photo upload interface  
• scene preview rendering  
• fixture placement controls  
• brightness and orientation adjustments  
• preview generation  

The lighting simulation and fixture placement interactions occur directly in the browser using deterministic rendering logic.

---

## Image Optimization Pipeline

User-uploaded images commonly range from **10–12MB**, which would significantly increase storage costs and AI processing overhead.

To solve this problem, images are first processed using **Cloudinary**.

Cloudinary performs automatic transformations that:

• resize large images  
• compress file size  
• optimize delivery via CDN  

Typical results:

10–12MB → ~300KB optimized image

This optimization dramatically reduces:

• storage costs in Supabase  
• upload time  
• OpenAI processing cost  
• rendering latency in the frontend

---

## Backend Storage

**Supabase** serves as the backend infrastructure for the application.

Supabase provides:

• object storage for uploaded images  
• serverless backend services  
• public image URL generation  
• scalable infrastructure for image hosting

The optimized images are stored in Supabase buckets and retrieved by the frontend for further processing.

---

## AI Processing Layer

The system uses the **OpenAI API** to assist with scene interpretation and preprocessing.

Early versions of the system attempted to rely heavily on generative AI to produce full lighting simulations.

However, this approach introduced several issues:

• hallucinated lighting effects  
• inconsistent scene transformations  
• unpredictable output

Because lighting design requires precision, the architecture was redesigned.

---

## Deterministic Lighting Engine

Instead of allowing AI to fully control the rendering process, the final system uses a **deterministic rendering engine** implemented in the frontend.

This engine handles:

• fixture placement  
• depth-aware scaling  
• ground tilt simulation  
• brightness adjustments  
• visual lighting overlays

This approach ensures that lighting behaves consistently and predictably while still allowing AI to assist with preprocessing tasks.

---

## Rendering Layer

Lighting previews are generated using a canvas-based rendering pipeline.

The system maintains a fixed coordinate space for the scene (1200 × 675), allowing fixture placement to remain consistent across screen sizes.

Key rendering concepts include:

• depth scaling based on vertical position  
• fixture rotation and reflection  
• brightness control  
• layered lighting effects

---

## Design Philosophy

The final architecture reflects an important engineering principle:

**AI should assist deterministic systems, not replace them.**

By combining generative AI with controlled rendering logic, the system achieves:

• predictable results  
• faster rendering performance  
• lower infrastructure costs  
• better user control over lighting placement

---

## Future Improvements

Planned improvements to the system include:

• improved lighting realism  
• expanded fixture libraries  
• additional lighting simulation options  
• real-time preview adjustments
