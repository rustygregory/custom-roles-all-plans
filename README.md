# Custom roles on all plans

React + Vite prototype for custom roles, using Flora/Garden components and a top PrototypeBar console. Product chrome (TopBar + MainNav) lives in `src/chrome/` so the repo installs without private GitHub dependencies.

## Scripts

```bash
npm run dev       # local: http://localhost:5173/custom-roles-all-plans/
npm run build     # production bundle
npm run deploy    # GitHub Pages → https://rustygregory.github.io/custom-roles-all-plans/
```

## Inspect mode

Inspect lets engineers read spacing, color, typography, and component metadata from the **rendered** WorkArea without rebuilding the screen in Figma.

### Enable

- Click **Inspect** in the top console (next to **Comment**), or
- Open with `?inspect=true` before the hash, e.g.  
  `https://rustygregory.github.io/custom-roles-all-plans/?inspect=true#/roles`

The console turns **Mint/500** while Inspect is on. Press **Esc** to clear the selection, then again to exit. Click **Exit inspect** to leave immediately.

### Use

| Action | Result |
| --- | --- |
| Hover | Highlight element bounds |
| Click | Select and open the details panel |
| ⌘/Ctrl+Click | Place a comment (when Comment mode is also on) |
| Esc | Clear selection, then exit Inspect |

Inspect and Comment are separate toggles and can run together. Overlays only cover the WorkArea (`data-inspect-root` / `data-comment-root`), so the PrototypeBar and nav stay usable.

### Metadata (optional)

Add attributes so Inspect can show Flora names instead of only computed CSS:

```jsx
<Alert
  data-inspect-name="Alert"
  data-inspect-token-bg="bg/warning"
  data-inspect-token-color="fg/warningEmphasis"
>
```

| Attribute | Purpose |
| --- | --- |
| `data-inspect-name` | Flora (or host) component name |
| `data-inspect-token` | Space-separated token names (listed as metadata) |
| `data-inspect-token-color` | Semantic name for text color |
| `data-inspect-token-bg` | Semantic name for background |
| `data-inspect-token-border` | Semantic name for border color |

Do not invent token or component names. If metadata is missing, Inspect shows Garden `data-garden-id` when present, plus computed values labeled as such (never as semantic tokens).

### What Inspect cannot know without metadata

- Exact Flora component display names when there is no `data-inspect-name` / `data-garden-id`
- Semantic token names for arbitrary hex values that are not in the project’s known Flora light map
- Design intent that never reaches the DOM (Figma-only variables, unapplied tokens)
