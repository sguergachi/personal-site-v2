---
slug: "/muck-puck-mobile-app"
date: "2024-04-28"
title: "MuckPuck Mobile application design"
---

# MuckPuck Mobile application design

### Overview
#### 1. Timeline: 
2021

#### 2. Role:
UI/UX Designer

#### 3. Background: 
Peytec is an industrial IoT and AI company, currently focused on commercializing a mining product called MuckPuck which uses proprietary wireless positioning technology to reliably track muck piles of Ore or Waste throughout a mine.

(( Video [New Muck Tracking Tech - Peytec Muck Puck - Partnership Series - YouTube](https://youtu.be/VTg_229h4bk?si=5EEOALGTg3Ko3Wir) ))

### Challenges

In early 2021 I was volunteering my time to assist Peytec with a few projects, one of which was designing a cross platform mobile application for the MuckPuck product.

When I was asked to help, the hardware tag development was nearing completion, and a first version of the mobile application was quickly needed to be able to scan and register the MuckPuck tags using NFC.

My job required working closely with the CEO to figure out requirements and putting together a UI/UX mockup design based on these requirements to handoff to the mobile developers for implementation.

### Design Process

### 1. Define Requirements

Working with the CEO, who was acting as the product manager I broke down the user journey to accomplish the key functions the mobile application was responsible for handling in the MuckPuck system. This helped me define the overarching user experience and requirements the mobile application.

### 2. Mockup Prototype

Since this project had a tight schedule of a few weeks to get to the design, I made my focus to get to a high fidelity mockup from the start. To speed up the process I used a design system we were using for our web applications, as well as using mobile application UI kits to help present the design of certain OS specific screens.

I used Adobe XD to build the prototype and did continuous testing with a mobile device as I was building the prototype to ensure the user flow and experience of the application was smooth and intuitive.

(( Mobile app design ))

I started by first thinking about the splash screen as defining the first impression of the user experience. Here I experimented with the idea of the splash screen acting as an overlay "revealing" content beneath it like a set of curtains. 

(( Mockup Video ))

#### Splash Screen

I then iterated it to turn the splash screen into a persistent network connectivity indicator which morphs into the nav bar after the user logs in.

(( Splash Screen Design ))

A key principle I use in my designs is "zero waste", where I try to make sure no part of a UI is wasted for superfluous or ornamental purposes. I find this can minimize cognitive load if done correctly.

#### Activity Screen

The activity screen is where the main content is displayed indicating a transaction in the system initiated by a tag.

(( Activity Screen ))

In my design I added a highlight feature to help indicate new items that were added into the list after a refresh to easily differentiate what's new from what's old.

#### Upload Sheet

One of the functions of the mobile app is providing a way to upload new details about a tag to the wider network. This would be helpful in tracking the tag throughout the mine. 

(( Upload Sheet ))

For this I designed a simple sheet for the user to fill in the updated details about a tag they want to upload. 

### 3. Handoff
After reviewing the prototype with the CEO to make sure it conforms to the desired requirements, I proceeded to provide access to the UI design assets as well as UI Specs via Adobe XD's web share tool.

(( Handoff ))

This allowed developers to quickly replicate the UI design in development without too much back and forth.

### Outcomes
- Application was conceived, designed, and built in record time to coincide with the hardware launch.
- Multiple large mines are happily using the mobile application along with the MuckPuck system.

Lessons Learned

1. **Start simple, then make it beautiful:**
   Since this was the first mobile application Peytec was going to offer, and since it was being built as a cross platform application, I felt at the time it was valuable to use the same design system used for Peytec's web applications. Unfortunately I didn't have time to properly translate it to a mobile OS. Looking back, it likely would have been better to try to use a simple and reliable mobile specific design system for this project, and eventually update it to reflect the companies unique design language.

2. **For smaller projects, skipping wireframing can speed up development**:
   Something I learned is that taking the decision to skip wireframing is a fairly reasonable shortcut, provided the application has a simple user flow. Doing this had no perceived impact on the final user experience.

3. ****