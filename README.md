# Landscape Night Vision

Landscape Night Vision is an interactive web tool that allows homeowners and landscape designers to preview outdoor lighting installations before committing to real hardware.

The application converts a daytime photo of a property into a simulated nighttime scene and allows users to place lighting fixtures directly onto the image to preview their lighting layout.

---

## The Problem

Outdoor lighting installation is expensive and difficult to visualize ahead of time.

Homeowners and landscapers often rely on sketches, rough plans, or trial-and-error installations to determine fixture placement.

This leads to:

• wasted hardware  
• poor lighting placement  
• costly redesigns  

The goal of this project was to create a **visual planning tool** that allows users to preview lighting before installation.

---

## The Solution

Landscape Night Vision provides a simple workflow:

1. Upload a daytime photo of a landscape or home exterior  
2. Convert the scene into a nighttime simulation  
3. Place lighting fixtures interactively  
4. Preview lighting results before installation  

This enables homeowners and landscapers to experiment with lighting layouts before purchasing hardware.

---

## Key Features

• Daytime photo upload  
• Automatic scene preprocessing  
• Day → night visual simulation  
• Interactive fixture placement  
• Lighting brightness adjustment  
• Real-time preview generation  

---

## Tech Stack

### Frontend

• **Lovable** — rapid frontend development environment used to build the interactive UI  
• **React + TypeScript** — component architecture and state management  
• **Canvas rendering** — interactive fixture placement and scene manipulation  

### Backend

• **Supabase** — backend services, database, and asset storage  
• **Serverless architecture** — scalable processing of uploaded scenes  

### Image Processing

• **Cloudinary** — image optimization and transformation pipeline  

Uploaded images from users often ranged between **10–12MB**.  
Using Cloudinary transformations, we reduced images to approximately **~300KB** before storage and processing.

This optimization:

• significantly reduced storage costs  
• improved upload speeds  
• lowered OpenAI processing costs  
• improved rendering performance

### AI Layer

• **OpenAI API** — AI-assisted scene interpretation and transformation  
• hybrid **generative + deterministic pipeline**

### Deployment

• **Vercel**

---

## Engineering Challenges

### Generative AI reliability

Initial experiments relied heavily on generative AI to interpret and transform landscape scenes.

However, generative models frequently produced **hallucinations or inconsistent scene outputs**, which made lighting previews unreliable.

To address this, the system architecture was redesigned to combine:

• **Generative AI capabilities** for scene interpretation  
• **Deterministic system logic** for fixture placement and lighting simulation

This hybrid architecture ensured the system remained predictable while still benefiting from AI-driven scene understanding.

---

### Deterministic + AI system design

Instead of allowing AI to control the entire pipeline, the system uses a layered architecture:

1. AI-assisted scene interpretation
2. deterministic lighting placement rules
3. controlled lighting simulation rendering

This approach provides stability while preserving AI flexibility.

---

### Image optimization and processing costs

User-uploaded images frequently exceeded **10MB**, which created several problems:

• slow upload times  
• expensive AI processing costs  
• increased storage usage

Using **Cloudinary's transformation pipeline**, images are automatically resized and optimized before storage in Supabase.

The result:

10–12MB → ~300KB  

This dramatically reduced:

• storage costs  
• OpenAI processing load  
• frontend rendering time

---

### Interactive fixture placement

Users needed to place lighting fixtures directly on the scene while adjusting brightness and orientation.

To support this, a custom interaction layer was built that allows:

• fixture selection  
• rotation  
• brightness adjustments  
• visual preview of lighting results

---

### Balancing realism vs performance

Realistic lighting simulations can quickly become computationally expensive.

The system prioritizes **fast visual previews** while maintaining believable lighting results for planning purposes.

---

## Architecture Overview

User  
↓  
Lovable / React Frontend  
↓  
Image Optimization (Cloudinary)  
↓  
Backend Storage + Logic (Supabase)  
↓  
AI Processing (OpenAI API)  
↓  
Lighting Simulation Output  

Users interact with the frontend to upload images and place fixtures while backend services process and generate the final lighting preview.

---

## Code Examples

This repository contains selected examples demonstrating key parts of the system:

• interactive fixture placement logic  
• image preprocessing workflow  
• UI state management patterns  

Full production code is not included because portions of the project remain under active development.

---

## Current Status

Landscape Night Vision is currently in **active development**.

Future improvements include:

• improved lighting realism  
• expanded fixture libraries  
• real-time lighting adjustments  

---

## Live Demo

https://landscape-night-vision-ui.vercel.app

---

## Author

Kidus Teferra
