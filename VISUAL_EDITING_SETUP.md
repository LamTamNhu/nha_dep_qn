# Sanity Visual Editing Setup

This project has been configured with Sanity Visual Editing capabilities. This allows you to edit content directly on your website through the Sanity Studio.

## 🚀 What's Included

- **Presentation Tool**: Visual editing interface in Sanity Studio
- **Draft Mode**: Preview unpublished content
- **Visual Editing Overlay**: Edit content directly on your live site
- **Real-time Updates**: See changes instantly as you edit

## 📋 Required Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Usually 'production'
- `SANITY_API_READ_TOKEN`: API token with Viewer permissions

### Getting Your API Token

1. Go to [Sanity Manage](https://manage.sanity.io)
2. Select your project
3. Go to API → Tokens
4. Create a new token with **Viewer** permissions
5. Copy the token to your `.env.local` file

## 🎯 How to Use Visual Editing

### Method 1: Through Sanity Studio

1. Start your development server: `npm run dev`
2. Open Sanity Studio: `http://localhost:3000/studio`
3. Look for the "Presentation" tab in the Studio
4. This will open your site in an iframe with editing capabilities

### Method 2: Direct Draft Mode Access

1. Visit any page on your site
2. Add `?preview=true` to the URL
3. You'll be redirected to enable draft mode
4. Once enabled, you'll see the visual editing overlay

### Method 3: From Published Content

1. In Sanity Studio, edit any document
2. Click "Open preview" or similar option
3. This will open the page with visual editing enabled

## 🔧 Features

### Visual Editing Overlay
- Click on any editable content to open the editing panel
- Changes are saved automatically
- Preview unpublished content in real-time

### Draft Mode
- View unpublished changes on your live site
- Content is fetched fresh (no CDN caching)
- Perfect for content review before publishing

### Exit Visual Editing
- Look for the "Exit Visual Editing" button in the top-right corner
- This will disable draft mode and return to the published version

## 🛠 Development Notes

### Key Files Added/Modified

1. **`sanity.config.js`**: Added `presentationTool`
2. **`src/app/layout.js`**: Added `VisualEditing` component
3. **`src/sanity/lib/live.js`**: Visual editing client configuration
4. **`src/app/api/draft-mode/`**: API routes for enabling/disabling draft mode
5. **`src/components/DisableVisualEditing.jsx`**: Exit button component
6. **`next.config.mjs`**: Added visual editing configurations

### Dependencies Added
- `@sanity/visual-editing`: Main visual editing package
- `@sanity/presentation`: Presentation tool for Studio
- `@sanity/preview-url-secret`: Secure preview URL validation

## 🔍 Troubleshooting

### Visual editing not working?
1. Check that `SANITY_API_READ_TOKEN` is set correctly
2. Ensure your token has proper permissions
3. Verify that draft mode is enabled (check for the exit button)

### Can't see unpublished content?
1. Make sure you're in draft mode
2. Check that the content is actually unpublished in Studio
3. Verify your API token has read access to drafts

### Overlay not appearing?
1. Check browser console for errors
2. Ensure you're on a page with Sanity content
3. Verify that the VisualEditing component is loaded

## 📚 Additional Resources

- [Sanity Visual Editing Documentation](https://www.sanity.io/docs/visual-editing)
- [Presentation Tool Guide](https://www.sanity.io/docs/presentation-tool)
- [Draft Mode in Next.js](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode)

## 🔐 Security Notes

- API tokens should never be committed to version control
- Use environment variables for all sensitive information
- The read token only provides viewing permissions, not editing
- Draft mode is automatically disabled when the session ends