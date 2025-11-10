# Deployment Guide

This guide ensures that all deployments (CLI, CI/CD, or team members) are tied to the same Vercel project with consistent domain configuration.

## Initial Setup

### 1. Link to Existing Vercel Project

If you haven't already linked this repository to your Vercel project, you need to obtain your project IDs:

#### Method A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Link to your existing project
vercel link

# This will prompt you to:
# 1. Select your scope (personal or team)
# 2. Choose "Link to existing project"
# 3. Select your project from the list
```

The CLI will automatically create/update `.vercel/project.json` with the correct IDs.

#### Method B: Manual Setup via Dashboard

1. **Get Project ID:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your project (spanishtrailhomes.com)
   - Navigate to Settings > General
   - Copy the Project ID (starts with `prj_`)

2. **Get Organization/Team ID:**
   - If using a team: Go to your team settings page
   - If personal: Go to [Account Settings](https://vercel.com/account)
   - Copy the Org/Team ID (starts with `team_` or your username)

3. **Update `.vercel/project.json`:**
   ```json
   {
     "projectId": "prj_xxxxxxxxxxxxxxxxxxxx",
     "orgId": "team_xxxxxxxxxxxxxxxxxxxx"
   }
   ```

### 2. Verify Domain Configuration

Ensure your domain is properly configured in Vercel Dashboard:

1. Go to your project settings
2. Navigate to Domains
3. Verify `spanishtrailhomes.com` is added
4. Check that it's set as the production domain

Once the project is linked via `.vercel/project.json`, all deployments will automatically use this domain configuration.

## Deploying

### Production Deployment

```bash
# Deploy to production (main branch)
vercel --prod
```

This will:
- Use the linked project from `.vercel/project.json`
- Deploy to the production domain (spanishtrailhomes.com)
- Maintain all domain and environment configurations

### Preview Deployment

```bash
# Create a preview deployment
vercel
```

This creates a preview URL while maintaining the project link.

### CI/CD Integration

For GitHub Actions or other CI/CD:

1. Add Vercel token as a secret: `VERCEL_TOKEN`
2. The `.vercel/project.json` file ensures deployments use the correct project
3. Example GitHub Action:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Vercel CLI
        run: npm install --global vercel
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      - name: Deploy to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## Environment Variables

Environment variables should be set in the Vercel Dashboard:

1. Go to Project Settings > Environment Variables
2. Add required variables:
   - `V0_API_KEY` (required)
   - `KV_REST_API_URL` (optional, for rate limiting)
   - `KV_REST_API_TOKEN` (optional, for rate limiting)

These will automatically be available to all deployments linked to the project.

## Troubleshooting

### Error: "Project not found"

This means `.vercel/project.json` has invalid IDs. Re-run `vercel link` or verify IDs in the dashboard.

### Domain not attached after deployment

1. Verify the domain is configured in Project Settings > Domains
2. Ensure you're deploying with `--prod` flag for production domain
3. Check that the project link is correct in `.vercel/project.json`

### Multiple team members deploying to different projects

Ensure all team members have:
1. Pulled the latest changes including `.vercel/project.json`
2. Not run `vercel link` manually (this would override the committed project link)
3. Access to the correct Vercel project/team

## Best Practices

1. **Always commit `.vercel/project.json`** - This ensures consistency
2. **Never commit `.env` files** - Use Vercel Dashboard for environment variables
3. **Use `--prod` flag for production deployments** - This ensures domain attachment
4. **Verify project link before deploying** - Check `.vercel/project.json` contains correct IDs
5. **Document any domain changes** - Update this guide if domain configuration changes

## Additional Resources

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Vercel Project Linking](https://vercel.com/docs/concepts/projects/overview)
- [Domain Configuration](https://vercel.com/docs/concepts/projects/domains)
