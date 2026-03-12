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
• React  
• TypeScript  
• Canvas rendering for interactive scene manipulation  

### AI / Processing
• OpenAI API  
• GPT-based scene interpretation  
• Image preprocessing pipeline  

### Backend
• Serverless processing architecture  

### Deployment
• Vercel  

---

## Engineering Challenges

### Generative AI reliability

Initial versions relied heavily on generative AI to interpret and transform landscape scenes.  
However, generative models often introduced **hallucinations and inconsistent scene interpretation**, which made lighting previews unreliable.

To solve this, the system was redesigned to combine:

• **Generative AI capabilities** for scene understanding  
• **Deterministic system logic** for lighting placement and simulation

This hybrid approach allowed us to maintain AI flexibility while ensuring predictable results.

---

### Deterministic + AI architecture

Rather than allowing AI to fully control the rendering pipeline, the application uses a layered system:

1. AI-assisted preprocessing of the scene
2. Deterministic rendering rules for fixture placement
3. Controlled lighting simulation logic

This ensures lighting placement behaves consistently while still benefiting from AI-powered image interpretation.

---

### Interactive fixture placement

Users needed to place fixtures directly on the scene while adjusting brightness and orientation.

This required building a custom canvas interaction layer capable of:

• selecting fixtures  
• rotating fixtures  
• adjusting brightness  
• previewing lighting effects  

---

### Balancing realism vs performance

Realistic lighting simulations can become computationally expensive.

The system prioritizes **fast visual previews** while maintaining believable lighting results.

---

## Architecture Overview

The system consists of three main layers:

User  
↓  
React Frontend (interactive UI)  
↓  
Serverless Processing Layer  
↓  
Lighting Simulation Output  

Users interact with the frontend to upload images and place fixtures while the backend processes the scene and generates lighting previews.

---

## Code Examples

This repository contains selected examples demonstrating key parts of the system:

• Interactive fixture placement logic  
• Image preprocessing workflow  
• State management patterns used in the UI  

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
