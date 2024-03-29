# Pichafy AI

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## 🤖 Introduction

Building an AI image SaaS platform that excels in image processing capabilities,
integrates a secure payment infrastructure, offers advanced image search
functionalities, and supports multiple AI features, including image restoration,
recoloring, object removal, generative filling, and background removal.

## ⚙️ Tech Stack

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- PayPal
- Shadcn
- TailwindCSS

## 🔋 Features

👉 **Authentication and Authorization**: Secure user access with registration,
login, and route protection.

👉 **Community Image Showcase**: Explore user transformations with easy
navigation using pagination

👉 **Advanced Image Search**: Find images by content or objects present inside
the image quickly and accurately

👉 **Image Restoration**: Revive old or damaged images effortlessly

👉 **Image Recoloring**: Customize images by replacing objects with desired
colors easily

👉 **Image Generative Fill**: Fill in missing areas of images seamlessly

👉 **Object Removal**: Clean up images by removing unwanted objects with
precision

👉 **Background Removal**: Extract objects from backgrounds with ease

👉 **Download Transformed Images**: Save and share AI-transformed images
conveniently

👉 **Transformed Image Details**: View details of transformations for each image

👉 **Transformation Management**: Control over deletion and updates of
transformations

👉 **Credits System**: Earn or purchase credits for image transformations

👉 **Profile Page**: Access transformed images and credit information personally

👉 **Credits Purchase**: Securely buy credits via PayPal for uninterrupted use

👉 **Responsive UI/UX**: A seamless experience across devices with a
user-friendly interface and many more, including code architecture and
reusability.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://www.pnpm.io/) (PNPM)

**Cloning the Repository**

```bash
git clone https://github.com/theS3Interdev/pichafy.git


cd pichafy

```

**Installation**

Install the project dependencies using pnpm:

```bash
pnpm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following
content:

```env

CLERK_SECRET_KEY=
WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

MONGODB_URL=

PAYPAL_APP_SECRET=
NEXT_PUBLIC_PAYPAL_CLIENT_ID=

```

Replace the placeholder values with your actual respective account credentials.
You can obtain these credentials by signing up on the
[Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/),
[Cloudinary](https://cloudinary.com/) and [PayPal](https://developer.paypal.com)

**Running the Project**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the
project.
