# Ireland Life — Design System
## Extension of Lagos Life

**Version:** 1.0
**Date:** 2026-10-08
**Author:** Samuel Modey
**Status:** Draft

---

## 1. Design Principles

| Principle | Description |
|---|---|
| **Familiar** | Players coming from Lagos Life should feel at home |
| **Irish** | Irish identity is woven into every screen, not just a reskin |
| **Playful** | The game is fun first, realistic second |
| **Readable** | Information-dense but never overwhelming |
| **Responsive** | Works on mobile (primary), tablet, and desktop |

---

## 2. Color Palette

### 2.1 Core Colors

| Token | Value | Usage |
|---|---|---|
| `--il-green` | `#16a34a` | Primary brand color (Irish green) |
| `--il-green-dark` | `#15803d` | Hover states, active states |
| `--il-green-light` | `#dcfce7` | Backgrounds, highlights |
| `--il-orange` | `#ea580c` | Secondary accent (Irish flag) |
| `--il-navy` | `#1e3a5f` | Text, headers |
| `--il-slate` | `#475569` | Secondary text |
| `--il-mist` | `#f1f5f9` | Card backgrounds |
| `--il-white` | `#ffffff` | Page background |
| `--il-black` | `#0f172a` | Primary text |

### 2.2 Semantic Colors

| Token | Value | Usage |
|---|---|---|
| `--il-success` | `#22c55e` | Success messages, approvals |
| `--il-warning` | `#f59e0b` | Warnings, pending states |
| `--il-error` | `#ef4444` | Errors, rejections |
| `--il-info` | `#3b82f6` | Info, neutral actions |
| `--il-gold` | `#eab308` | Premium, VIP, achievements |

### 2.3 Ireland-Specific Accents

| Token | Value | Usage |
|---|---|---|
| `--il-shamrock` | `#22c55e` | Irish-themed elements |
| `--il-clover` | `#16a34a` | Nature, GAA |
| `--il-harp` | `#c0c0c0` | Cultural elements |
| `--il-guinness` | `#1c1917` | Dark accents |
| `--il-irish-cream` | `#fef3c7` | Warm backgrounds |

---

## 3. Typography

### 3.1 Fonts

| Role | Font | Weight | Size |
|---|---|---|---|
| Display | Fredoka | 600 | 24–48px |
| Heading | Fredoka | 500 | 18–24px |
| Body | Plus Jakarta Sans | 400 | 14–16px |
| Caption | Plus Jakarta Sans | 400 | 12px |
| Mono | JetBrains Mono | 400 | 12–14px |

### 3.2 Type Scale

| Level | Size | Line Height | Usage |
|---|---|---|---|
| `h1` | 32px | 1.2 | Page titles |
| `h2` | 24px | 1.3 | Section headers |
| `h3` | 20px | 1.4 | Subsection headers |
| `h4` | 16px | 1.4 | Card titles |
| `body` | 14px | 1.5 | Body text |
| `small` | 12px | 1.4 | Captions, labels |
| `tiny` | 10px | 1.3 | Badges, tags |

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--il-space-1` | 4px | Tight spacing |
| `--il-space-2` | 8px | Small spacing |
| `--il-space-3` | 12px | Default spacing |
| `--il-space-4` | 16px | Medium spacing |
| `--il-space-5` | 24px | Large spacing |
| `--il-space-6` | 32px | Section spacing |
| `--il-space-7` | 48px | Page spacing |
| `--il-space-8` | 64px | Hero spacing |

### 4.2 Breakpoints

| Breakpoint | Width | Usage |
|---|---|---|
| `sm` | 640px | Mobile |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |

### 4.3 Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--il-space-4);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--il-space-3);
  }
}
```

---

## 5. Components

### 5.1 Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--il-green);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--il-green-dark);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:disabled {
  background: var(--il-slate);
  cursor: not-allowed;
  transform: none;
}

/* Secondary Button */
.btn-secondary {
  background: white;
  color: var(--il-navy);
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  border: 2px solid var(--il-mist);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: var(--il-green);
  color: var(--il-green);
}

/* Danger Button */
.btn-danger {
  background: var(--il-error);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--il-slate);
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.btn-ghost:hover {
  background: var(--il-mist);
  color: var(--il-navy);
}
```

### 5.2 Cards

```css
.card {
  background: white;
  border-radius: 16px;
  padding: var(--il-space-4);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--il-mist);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--il-space-3);
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--il-navy);
}

.card-body {
  color: var(--il-slate);
  line-height: 1.6;
}

/* Visa Status Card */
.card-visa {
  border-left: 4px solid var(--il-green);
}

.card-visa.pending {
  border-left-color: var(--il-warning);
}

.card-visa.rejected {
  border-left-color: var(--il-error);
}

/* Japa Route Card */
.card-japa {
  border-left: 4px solid var(--il-orange);
}

.card-japa.dangerous {
  border-left-color: var(--il-error);
}
```

### 5.3 Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.badge-success {
  background: var(--il-green-light);
  color: var(--il-green-dark);
}

.badge-warning {
  background: #fef3c7;
  color: #92400e;
}

.badge-error {
  background: #fee2e2;
  color: #991b1b;
}

.badge-info {
  background: #dbeafe;
  color: #1e40af;
}

.badge-neutral {
  background: var(--il-mist);
  color: var(--il-slate);
}
```

### 5.4 Progress Bars

```css
.progress {
  width: 100%;
  height: 8px;
  background: var(--il-mist);
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--il-green);
  border-radius: 999px;
  transition: width 0.3s ease;
}

.progress-bar.warning {
  background: var(--il-warning);
}

.progress-bar.error {
  background: var(--il-error);
}

/* Visa Processing Progress */
.progress-visa {
  height: 12px;
}

.progress-visa .progress-bar {
  background: linear-gradient(90deg, var(--il-green), var(--il-green-dark));
}
```

### 5.5 Modals

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: var(--il-space-4);
}

.modal {
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--il-space-4);
  border-bottom: 1px solid var(--il-mist);
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--il-navy);
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  color: var(--il-slate);
  cursor: pointer;
  padding: 4px;
}

.modal-body {
  padding: var(--il-space-4);
}

.modal-footer {
  display: flex;
  gap: var(--il-space-3);
  padding: var(--il-space-4);
  border-top: 1px solid var(--il-mist);
}
```

### 5.6 Tables

```css
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th {
  text-align: left;
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--il-slate);
  background: var(--il-mist);
  border-bottom: 1px solid #e2e8f0;
}

.table td {
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  color: var(--il-navy);
}

.table tr:hover td {
  background: #f8fafc;
}

.table-wrap {
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
```

### 5.7 Forms

```css
.form-group {
  margin-bottom: var(--il-space-4);
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--il-navy);
  margin-bottom: var(--il-space-2);
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--il-mist);
  border-radius: 12px;
  font-size: 14px;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--il-green);
}

.form-input:disabled {
  background: var(--il-mist);
  cursor: not-allowed;
}

.form-select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--il-mist);
  border-radius: 12px;
  font-size: 14px;
  background: white;
  cursor: pointer;
}

.form-hint {
  font-size: 12px;
  color: var(--il-slate);
  margin-top: var(--il-space-1);
}

.form-error {
  font-size: 12px;
  color: var(--il-error);
  margin-top: var(--il-space-1);
}
```

### 5.8 Navigation

```css
.tab-bar {
  display: flex;
  gap: var(--il-space-2);
  padding: var(--il-space-2);
  background: var(--il-mist);
  border-radius: 12px;
}

.tab {
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--il-slate);
  background: transparent;
  border: none;
}

.tab:hover {
  background: white;
  color: var(--il-navy);
}

.tab.active {
  background: white;
  color: var(--il-green);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

---

## 6. Icons

### 6.1 Icon Set

| Icon | Lucide Name | Usage |
|---|---|---|
| Passport | `BookUser` | Passport status |
| Visa | `Stamp` | Visa applications |
| Japa | `Plane` | Japa routes |
| Currency | `ArrowLeftRight` | Currency exchange |
| Immigration | `Shield` | Immigration status |
| Garda | `ShieldAlert` | Garda stops |
| GAA | `Trophy` | GAA skill |
| Pub | `Beer` | Pub culture |
| Weather | `CloudRain` | Weather |
| Home | `Home` | Housing |
| Work | `Briefcase` | Jobs |
| Health | `Heart` | Healthcare |
| Education | `GraduationCap` | Education |
| Transport | `Bus` | Transport |
| Food | `UtensilsCrossed` | Food |
| Music | `Music` | Music |
| Sport | `Trophy` | Sports |
| Settings | `Settings` | Settings |

### 6.2 Icon Sizes

| Size | Value | Usage |
|---|---|---|
| `sm` | 16px | Inline, badges |
| `md` | 20px | Buttons, list items |
| `lg` | 24px | Headers, cards |
| `xl` | 32px | Hero, empty states |

---

## 7. Animations

### 7.1 Transitions

```css
/* Standard transition */
.transition {
  transition: all 0.2s ease;
}

/* Slow transition */
.transition-slow {
  transition: all 0.3s ease;
}

/* Bounce */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.animate-bounce {
  animation: bounce 0.3s ease;
}

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease;
}

/* Slide up */
@keyframes slideUp {
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-slide-up {
  animation: slideUp 0.3s ease;
}

/* Pulse */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s ease infinite;
}
```

### 7.2 Micro-interactions

- **Button hover:** Lift 1px + darken
- **Card hover:** Shadow increase
- **Tab switch:** Slide indicator
- **Modal open:** Fade in overlay + slide up modal
- **Success:** Green checkmark animation
- **Error:** Red shake animation
- **Loading:** Spinner or skeleton

---

## 8. Accessibility

### 8.1 Color Contrast

- All text meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
- Never rely on color alone — always pair with icon or text

### 8.2 Focus States

```css
:focus-visible {
  outline: 2px solid var(--il-green);
  outline-offset: 2px;
}
```

### 8.3 ARIA

- All interactive elements have `aria-label` or `aria-labelledby`
- Modals have `role="dialog"` and `aria-modal="true"`
- Progress bars have `role="progressbar"` with `aria-valuenow`
- Tabs have `role="tablist"`, `role="tab"`, `role="tabpanel"`

### 8.4 Keyboard Navigation

- All interactive elements are focusable
- Tab order follows visual order
- Escape closes modals
- Enter/Space activates buttons

---

## 9. Dark Mode

### 9.1 Dark Palette

| Token | Value | Usage |
|---|---|---|
| `--il-dark-bg` | `#0f172a` | Page background |
| `--il-dark-surface` | `#1e293b` | Card background |
| `--il-dark-border` | `#334155` | Borders |
| `--il-dark-text` | `#f1f5f9` | Primary text |
| `--il-dark-text-muted` | `#94a3b8` | Secondary text |

### 9.2 Dark Mode Toggle

- Toggle in settings
- Persists in localStorage
- Respects `prefers-color-scheme` by default

---

## 10. Responsive Design

### 10.1 Mobile-First

- Base styles for mobile
- Enhance for larger screens
- Touch targets ≥ 44px

### 10.2 Layout Patterns

| Pattern | Mobile | Desktop |
|---|---|---|
| Navigation | Bottom tab bar | Top nav + sidebar |
| Cards | Stacked | Grid (2–3 columns) |
| Tables | Horizontal scroll | Full table |
| Modals | Full screen | Centered |
| Forms | Single column | Multi-column |

---

*End of Design System*
