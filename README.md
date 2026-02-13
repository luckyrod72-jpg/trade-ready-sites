# Trade Ready Sites - Complete Build

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Edit `.env.local` and add your Airtable API key:
```
AIRTABLE_API_KEY=your_actual_api_key_here
AIRTABLE_BASE_ID=appPCJ4OPNNKtWV2I
AIRTABLE_TABLE_NAME=TRS_Contractors
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Test the Application
Open browser to:
```
http://localhost:3000/?slug=rod-test-hvac
```

## Project Structure

```
trade-ready-sites/
├── app/
│   ├── api/
│   │   └── contractor/
│   │       └── route.js          # API endpoint for fetching contractor data
│   ├── layout.js                  # Root layout wrapper
│   └── page.js                    # Main page component
├── components/
│   └── templates/
│       ├── HVAC.jsx               # HVAC contractor template
│       ├── Plumber.jsx            # Plumber contractor template
│       ├── Electrician.jsx        # Electrician contractor template
│       └── Roofer.jsx             # Roofer contractor template
├── .env.local                     # Environment variables (DO NOT COMMIT)
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

## How It Works

1. User visits with `?slug=contractor-slug` parameter
2. Page component fetches data from `/api/contractor`
3. API queries Airtable using the slug
4. Correct template renders based on trade type
5. Template displays contractor information

## Airtable Requirements

Your `TRS_Contractors` table must have these fields:
- `slug` (text)
- `business_name` (text)
- `trade` (text) - values: HVAC, Plumber, Electrician, Roofer
- `phone` (text)
- `city` (text)
- `state` (text)

## Next Steps

1. Test with your rod-test-hvac record
2. Add more contractor records to Airtable
3. Deploy to Netlify when ready
