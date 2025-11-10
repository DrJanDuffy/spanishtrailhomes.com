# Vercel Project Linking

This directory contains the project linking information that ensures all CLI deployments are tied to the correct Vercel project and domain configuration.

## Why This Directory Exists

By committing the `.vercel/project.json` file to the repository, we ensure that:
- All CLI deployments (`vercel deploy`) use the same project
- Domain configurations remain attached across deployments
- Team members and CI/CD systems deploy to the correct project
- No manual `vercel link` command is needed before each deployment

## Setting Up Project Linking

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI if not already installed:
   ```bash
   npm i -g vercel
   ```

2. Link to your existing project:
   ```bash
   vercel link
   ```

3. Follow the prompts to select your existing project

4. This will create/update the `project.json` file in this directory

### Option 2: Manual Configuration

1. Get your project information from the Vercel Dashboard:
   - Go to https://vercel.com/dashboard
   - Select your project (spanishtrailhomes.com)
   - Go to Settings > General
   - Note your Project ID

2. Get your Organization/Team ID:
   - Go to https://vercel.com/account
   - Or from your team settings page
   - Note your Org ID

3. Update the `project.json` file with these values

## project.json Structure

The `project.json` file should contain:

```json
{
  "projectId": "prj_xxxxxxxxxxxxxxxxxxxx",
  "orgId": "team_xxxxxxxxxxxxxxxxxxxx"
}
```

## Important Notes

- **This file should be committed** to ensure consistent deployments
- The file does NOT contain sensitive information (tokens, secrets)
- It only contains project identifiers that link deployments to your Vercel project
- Domain configurations are managed in the Vercel dashboard and automatically applied to linked projects
