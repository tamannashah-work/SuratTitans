# Surat Titans — Pro Govinda League

Official web presence for the **Surat Titans**, a premier franchise representing the courage, pride, and sporting heritage of Mumbai in the Pro Govinda League.

Live Domain: [surattians.com](https://surattians.com)

---

## ⚡ Features & Visual Experience

This project is built as a state-of-the-art single-page application with modern typography, dynamic interactions, and optimized media assets:
* **Cinematic Entry Sequence**: Staggered text stamp animations for the tagline **"JOD KE TOD"** combined with smooth logo scaling and layout reveals.
* **Responsive Layouts**: Designed to be responsive, featuring custom stats grids, owner profiles, and responsive video players optimized for phone layouts.
* **Sticky Navbar**: Fixed header with a responsive glassmorphism blur and active menu state tracking.
* **Dynamic Reels Section**: Optimized Instagram reels carousel rendering via fast, scroll-triggered native iframes, bypassing slow SDK overhead.
* **Serverless Contact Form**: Fully functional email contact form powered by Vercel Serverless Functions and the Resend API.

---

## 🛠️ Tech Stack

* **Frontend**: React (JS) + Vite
* **Styling**: Vanilla CSS (highly tailored, responsive design system)
* **Backend Routing**: Vercel Serverless Functions (`/api/contact`)
* **Email Forwarding**: Resend SDK

---

## ⚙️ Project Configuration

Before running the application locally or deploying it, make sure to configure your environment variables.

Create a `.env` file in the root directory:
```env
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=info@surattitans.com
```

### ✉️ Resend Email Setup (For Domain `surattians.com`)

To receive contact form enquiries successfully, you must link and verify your domain in your Resend account:

1. **Add Your Domain**: Go to your [Resend Dashboard](https://resend.com), navigate to **Domains**, and add `surattians.com`.
2. **Add DNS Records**: Add the generated TXT, MX, and SPF records to your domain registrar's DNS settings.
3. **Update Sender Email**: Ensure the `from` address in your API (`api/contact.js`) uses your verified domain:
   ```javascript
   from: 'Surat Titans Website <contact@surattians.com>'
   ```

*Note: Resend's free tier restricts sending emails from `onboarding@resend.dev` to the registered account owner's email address only. Verifying your custom domain resolves this restriction.*

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v18 or higher) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tamannashah-work/SuratTitans.git
   cd SuratTitans
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Run the Vercel dev server (to test serverless functions locally):
   ```bash
   npx vercel dev
   ```

---

## 📦 Deployment

The project is optimized for deployment on Vercel:
```bash
npx vercel --prod
```
Ensure that `RESEND_API_KEY` and `CONTACT_EMAIL` are configured in your Vercel Project Environment Variables.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
