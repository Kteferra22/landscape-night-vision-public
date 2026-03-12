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

Frontend

• React  
• TypeScript  
• Canvas rendering for interactive scene manipulation

Backend

• Serverless image processing pipeline  
• Scene preprocessing and lighting simulation

Deployment

• Vercel

---

## Engineering Challenges

### 1. Converting daytime scenes into believable night environments

Early experiments produced unrealistic lighting and overly dark environments.  
We refined the processing pipeline to maintain landscape detail while introducing realistic nighttime shading.

### 2. Interactive fixture placement

Users needed to place fixtures directly on the image while adjusting brightness and orientation.  
This required building a canvas interaction layer capable of:

• selecting fixtures  
• rotating fixtures  
• adjusting brightness

### 3. Balancing realism vs performance

High quality lighting simulation can become computationally expensive.  
We prioritized fast previews while maintaining visual realism.

---

## Architecture Overview

The system consists of three main layers:
