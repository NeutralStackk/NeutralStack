# NeutralStack Website

Premium company website for NeutralStack, built with React, Vite, Tailwind CSS, Lucide icons, and a Node email endpoint.

## Run Locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

For contact-form delivery in development, run the backend in a second terminal:

```bash
npm run dev:server
```

Open the local URL printed by Vite, typically `http://localhost:5173`. The About Us page is available at `/about`.

## Contact Email Setup

The inquiry form sends notifications to `adminneutralstack@gmail.com` through the Node server. Create a local `.env` file from `.env.example`, then configure Gmail SMTP:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=adminneutralstack@gmail.com
SMTP_PASS=your_gmail_app_password
CONTACT_TO=adminneutralstack@gmail.com
```

For Gmail, enable 2-Step Verification on the sending account and create an App Password. Use that app password for `SMTP_PASS`; do not place a normal email password in the project.

## Production Build

```bash
npm run build
npm start
```

`npm start` serves the production site and its `/api/contact` endpoint at `http://127.0.0.1:3001`.

## Push to a GitHub Organization

Create an empty repository in your GitHub organization, such as `YOUR-ORG/neutralstack-website`. Do not initialize it with a README, `.gitignore`, or license because this local repository already has files.

From this project directory:

```bash
git add .
git commit -m "Launch NeutralStack company website"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/neutralstack-website.git
git push -u origin main
```

Before pushing, confirm that `.env` is not staged. It contains private email credentials and is already excluded by `.gitignore`; only `.env.example` should be committed.

## Deploy on Render

This project is configured for a Render Web Service because it serves both the React website and the Node contact-form API.

1. Push the repository to your GitHub organization.
2. In Render, choose **New > Blueprint** and connect the organization repository.
3. Select the repository. Render will detect `render.yaml` and configure:
   - Build command: `npm ci && npm run build`
   - Start command: `npm start`
   - Health check: `/api/health`
4. In the service environment variables, set `SMTP_PASS` to the Gmail App Password for `adminneutralstack@gmail.com`.
5. Deploy the service and confirm the generated `onrender.com` site loads and the contact form sends a test inquiry.

Do not commit `SMTP_PASS` or place it in `render.yaml`.

## Connect Your Domain

After the Render deployment works on its generated address:

1. Open the Render service and add your purchased domain under **Custom Domains**.
2. Render will display the DNS records required for your domain provider.
3. Add those DNS records wherever you bought or manage your domain.
4. Return to Render and verify the domain.

Render issues and renews HTTPS certificates automatically after DNS verification.

## Site Content

The implementation includes:

- Responsive navbar and conversion-focused hero section
- Dedicated About Us page with mission and company principles
- Our Goal, Why NeutralStack, service offering, and process sections
- Traditional freelancer versus NeutralStack comparison
- Contact form with secure server-side email delivery and business footer
- Custom generated marketing visual in `public/hero-neutralstack.png`
