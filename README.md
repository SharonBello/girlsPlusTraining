# Girls+ · הכשרת מנטוריות ומלגאיות

E-learning module for Girls+ mentors and scholars.  
Built with React + TypeScript + Vite. Deployed on Cloudflare Pages.

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Deploy to Cloudflare Pages

### Option A — GitHub integration (recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create a project
3. Connect your GitHub repo
4. Set build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click Deploy — done ✓

Every `git push` to `main` auto-deploys.

### Option B — Direct upload

```bash
npm run build
# Then drag the /dist folder to Cloudflare Pages dashboard
```

### Custom domain (when Girls+ is ready)

In Cloudflare Pages → Custom domains → add `mentors.girlsplus.org` or similar.  
Since Cloudflare manages DNS, it's a one-click setup.

---

## Project structure

```
src/
  main.tsx                    ← App entry point
  styles/
    global.scss               ← Reset + base styles
  features/
    girlsplus/
      data/
        types.ts              ← All TypeScript interfaces
        activities.ts         ← Activity content
        sessions.ts           ← 10 sessions
        quizQuestions.ts      ← Quiz Q&A
        scholars.ts           ← מלגאיות content
      components/
        CourseShell.tsx       ← Root layout + routing
        layout/               ← TopNav, Sidebar, tabs
        ui/                   ← ActivityCard, SessionCard, Quiz, Video
        screens/              ← WelcomeScreen
        modules/              ← Module1–4, ScholarsModule
      hooks/
        useCourseState.ts     ← useReducer state
        useCourse.ts          ← Context hook
      styles/
        _variables.scss       ← Design tokens
```

## Adding content

**New activity** → add to `data/activities.ts`  
**New session** → add to `data/sessions.ts`  
**New quiz question** → add to `data/quizQuestions.ts`  
**New scholar content** → add lessons to `data/scholars.ts`

No component changes needed — data drives everything.

---

Developed by **Sharon Blu** · Learning Developer  
For **עמותת עתיד פלוס** · Girls+ Technovation Program
