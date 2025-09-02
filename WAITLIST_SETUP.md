# Waitlist Setup Guide

## Environment Variables Required

Create a `.env.local` file in your project root with the following variables:

```bash
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE=your_supabase_service_role_key

# Resend Configuration
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=your_verified_sender_email@domain.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.arceus.ca
```

## Setup Steps

### 1. Supabase Setup
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a table called `marketing.waitlist` with the following schema:
   ```sql
   CREATE TABLE marketing.waitlist (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     source TEXT DEFAULT 'landing',
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```
3. Get your project URL and service role key from Settings > API

### 2. Resend Setup
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use a test email
3. Get your API key from the dashboard
4. Update the `FROM_EMAIL` in your environment variables

### 3. Deploy
1. Add the environment variables to your Vercel project
2. Deploy your changes

## Features
- ✅ Email validation
- ✅ Duplicate email handling
- ✅ Confirmation emails via Resend
- ✅ Supabase data storage
- ✅ User feedback and error handling
- ✅ Loading states
- ✅ Mobile responsive

## API Endpoint
- **POST** `/api/waitlist`
- Accepts: `{ email: string, source?: string }`
- Returns: `{ ok: boolean, error?: string }`
