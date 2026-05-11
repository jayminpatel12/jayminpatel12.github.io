# Portfolio Auto-Discovery System

## How It Works

Your portfolio at `jayminpatel12.github.io` automatically reads your GitHub repos and discovers which ones should appear as portfolio projects. No admin panel, no database, no config files to maintain.

**The magic:** Add a special HTML comment block to any repo's `README.md`. Since it's an HTML comment, it's **completely invisible** on GitHub — nobody sees it when browsing your repo. But your portfolio site reads it and builds a beautiful project card from it.

## How to ADD a Project to Your Portfolio

Open the repo's `README.md` and paste this block **anywhere** in the file (top is easiest):

```markdown
<!-- PORTFOLIO
title: My Project Name
subtitle: One-Line Tagline
description: A longer description of what the project does and what makes it interesting. 2-3 sentences max.
tags: Kotlin, Jetpack Compose, Hilt, Room, Retrofit
icon: 📱
order: 1
color: blue
-->
```

### Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ Yes | Project display name |
| `subtitle` | No | Short tagline (shown under title) |
| `description` | No | 2-3 sentence description (falls back to repo description) |
| `tags` | No | Comma-separated tech tags |
| `icon` | No | Emoji shown in phone mockup (default: 📱) |
| `order` | No | Sort order (1 = first, 2 = second...). Unordered = last |
| `color` | No | Theme hint (not currently used, reserved for future) |

## How to REMOVE a Project

Just delete the `<!-- PORTFOLIO ... -->` comment block from that repo's README. The portfolio will stop showing it on next page load.

## How to REORDER Projects

Change the `order` values. Lower numbers appear first.

---

## Example Markers for Your 3 Projects

### NewsAggregator — Add this to the TOP of its README.md:

```markdown
<!-- PORTFOLIO
title: News Aggregator
subtitle: AI-Powered News & Weather App
description: Real-time Android news app with AI-generated article summaries via Gemini, offline reading through Room DB, category filtering, and infinite scroll powered by Paging 3. Multi-module Clean Architecture with 5 Gradle modules.
tags: Kotlin, Jetpack Compose, Gemini AI, Hilt, Room, Paging 3, GraphQL, Coroutines + Flow
icon: 📰
order: 1
-->
```

### SmartConnect — Add this to the TOP of its README.md:

```markdown
<!-- PORTFOLIO
title: SmartConnect
subtitle: Bluetooth Scanner & NFC Tap-to-Share
description: Hardware-integrated Android app with Bluetooth device discovery, signal strength monitoring, NFC read/write for tap-to-share, and Firebase-synced transfer history. MVVM + Clean Architecture across 4 modules.
tags: Kotlin, Jetpack Compose, Bluetooth API, NFC / NDEF, Firebase, Hilt, MVVM, Room DB
icon: 📡
order: 2
-->
```

### AppointmentSystem — Add this to the TOP of its README.md:

```markdown
<!-- PORTFOLIO
title: Appointment System
subtitle: Full-Stack Medical/Dental Clinic Platform
description: Complete booking platform with Android app (Compose), React web dashboard, and Node.js REST API. Features JWT auth, role-based access control, appointment status workflows, and real-time slot management across 69 files.
tags: Kotlin, Compose, React, Node.js, MongoDB, JWT, Retrofit, Tailwind
icon: 🏥
order: 3
-->
```

---

## Deploying the Portfolio

### Step 1: Create the GitHub Pages repo

1. Go to github.com and create a new repo named **exactly**: `jayminpatel12.github.io`
2. Make it **public**
3. Clone it:
   ```bash
   git clone https://github.com/jayminpatel12/jayminpatel12.github.io.git
   cd jayminpatel12.github.io
   ```

### Step 2: Add the portfolio file

4. Copy `index.html` into the repo root
5. Push it:
   ```bash
   git add index.html
   git commit -m "Deploy portfolio"
   git push origin main
   ```

### Step 3: Mark your projects

6. Go to each project repo's README.md on GitHub
7. Click the pencil icon to edit
8. Paste the portfolio marker block at the very top
9. Commit the change

### Step 4: Visit your portfolio

10. Wait 1-2 minutes for GitHub Pages to deploy
11. Go to: **https://jayminpatel12.github.io**
12. Your projects will appear automatically!

---

## FAQ

**Q: What if I create a new project later?**
A: Just add the `<!-- PORTFOLIO -->` marker to its README. Your portfolio auto-discovers it next time someone visits the page.

**Q: Can people see the marker in my README?**
A: No. HTML comments (`<!-- -->`) are invisible when rendered on GitHub. Only raw source shows them.

**Q: What about GitHub API rate limits?**
A: Unauthenticated GitHub API allows 60 requests/hour. Your portfolio makes ~1 request per repo to check READMEs, so with under 60 repos you're fine. If you hit limits, the page caches gracefully.

**Q: Can I customize the portfolio design?**
A: Yes — edit `index.html`. All styles are in a single `<style>` block. Colors are CSS variables at the top (`:root`).

**Q: What if the GitHub username changes?**
A: Edit the `GITHUB_USERNAME` constant at the top of the `<script>` section in `index.html`.