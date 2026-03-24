# CLAUDE.md — AquaIntel Executive Control Room

This file is read automatically by Claude Code at the start of every session.
Follow every rule here precisely. Do not deviate from design tokens, component
patterns, or interaction specs without explicit instruction.

**Workflow rule:** Always update this file BEFORE making code changes. After
completing changes, review and confirm: new patterns documented, corrected values
replace old ones, no outdated information remains.

---

## Project Overview

**Product:** AquaIntel — Executive Control Room
**Stack:** Next.js 16 · React 19 · TypeScript · Material UI (MUI) · ApexCharts · Leaflet.js
**Font:** Roboto (Google Fonts) — only Roboto, no fallback sans-serif substitutions
**Target viewports:** 1920px · 1440px · 1280px (no horizontal scroll at any of these)
**Docker:** runs on port 3005 → `http://192.168.0.122:3005/` (`docker run -p 3005:3000`)
**Design source of truth:** Figma file (use Dev Mode for exact values)
**Full design doc:** `/home/shashank/trialUpwork1/dashboard/claude.md`

---

## Color Palette

### Global Background & Surface
```
--color-bg-page:         #EEF2F7   /* overall page background, light blue-grey */
--color-bg-sidebar:      #e9edf4   /* light blue-grey sidebar (Figma confirmed) */
--color-bg-topbar:       #2f446a   /* dark blue topbar (Figma confirmed) */
--color-surface-card:    #FFFFFF   /* white card surface */
--color-surface-hero:    #2D3F6B   /* hero KPI card — dark blue */
--color-surface-map:     #2D4B7A   /* map section header — slightly lighter navy */
--color-surface-input:   #F5F7FA   /* input / dropdown background */
```

### Text
```
--color-text-primary:    #1A2340   /* main headings, high-contrast body */
--color-text-secondary:  #6B7A99   /* subtext, labels, descriptions */
--color-text-muted:      #9AA3B8   /* timestamps, tertiary labels */
--color-text-on-dark:    #FFFFFF   /* text on navy/dark surfaces */
--color-text-on-dark-sub:#A8B8D8   /* subtext on dark surfaces */
--color-text-link:       #2196F3   /* inline links, "Maintain", "View" */
```

### Brand & Accent
```
--color-brand-teal:      #00BFA5   /* logo accent */
--color-brand-blue:      #1565C0   /* primary CTA buttons */
--color-accent-green:    #027a48   /* positive delta (Figma confirmed) */
--color-accent-orange:   #FF9800   /* warning / in-progress */
--color-accent-red:      #F44336   /* high-risk, negative delta */
--color-accent-amber:    #FFC107   /* alert tint */
```

### KPI Sparkline Chart Colors
```
--chart-beneficiaries:   #90A4C8
--chart-capital:         #2563EB
--chart-water:           #1E3A5F
--chart-economic:        #2E7D32
--chart-productivity:    #1565C0
--chart-health:          #E65100
```

### Risk / Status Colors
```
--risk-low:   #4CAF50   /* deployed = green */
--risk-med:   #FF9800   /* in-progress = orange */
--risk-high:  #F44336   /* high risk = red */
--pending:    #2196F3   /* pending = blue */
```

### Borders & Dividers
```
--color-border:      #E2E8F0
--color-border-dark: #3A4F7A
--color-divider:     #F0F4F8
```

### Alert
```
--alert-bg:     #FFF8E1
--alert-border: #FFB300
--alert-icon:   #F59E0B
--alert-text:   #7B5A00
```

---

## Typography

All typography uses **Roboto** exclusively.

| Role | Size | Weight | Color |
|---|---|---|---|
| Page title | 24px | 400 | `#1A2340` |
| Page subtitle | 14px | 400 | `#6B7A99` |
| Section header (dark card) | 16px | 600 | `#FFFFFF` |
| Hero KPI value | 36px | 700 | `#FFFFFF` |
| Secondary KPI value | 22px | 700 | `#1A2340` |
| KPI label | 12px | 400 | `#6B7A99` |
| Delta badge | 13px | 500 | `#027a48` / `#F44336`; uses `TrendingUpIcon`/`TrendingDownIcon` 12px — no `▲▼` text chars |
| Sidebar nav label | 16px | 400 | `#4B5F82` inactive / `#2f446a` active |
| Sidebar section label | 12px | 600 | `rgba(47,68,106,0.5)` uppercase |

---

## Spacing & Layout

- Page padding: `24px` at 1280px · `32px` at 1440px · `40px` at 1920px
- Card gap: `16px`
- Sidebar width: `200px`
- Top bar height: `56px`

### Border Radius
```
--radius-card:      12px
--radius-card-lg:   16px
--radius-button-lg: 24px   /* pill buttons */
--radius-popup:     12px
```

### Shadows
```
--shadow-card:       0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)
--shadow-card-hover: 0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)
--shadow-popup:      0 8px 32px rgba(0,0,0,0.18)
```

---

## Component Patterns

### 0. Card Header Standard (ALL dark-header section cards)
Every card with a dark gradient header **must** use these exact values:
- Background: `linear-gradient(135deg, #2D4B7A 0%, #1B2A4A 100%)`
- Padding: `py: '20px', px: '24px'` — **no fixed height**
- Title: `16px 600 #FFFFFF`
- Subtitle (if present): `13px #A8B8D8 mt:'2px'`
- `flexShrink: 0`
- Applies to: Geographic Map card, AI Executive Brief card

### 1. Hero KPI Card
- **Dark (Beneficiaries):** `linear-gradient(135deg, #2D3F6B 0%, #1B2A4A 100%)`
- **Light (Capital):** `#FFFFFF`
- Border radius: `16px`, padding: `24px`, `position: relative`, `minHeight: 160px`
- Layout: icon top-left · chart absolute top-right · label · large value + delta
- Icon box: `44×44px`, `borderRadius:10px`; dark=`rgba(255,255,255,0.15)` / light=`#F4F6F9`; icon `24px`; dark=white / light=`#2f446a`
- Label: `13px 400`; dark=`#A8B8D8` / light=`#6B7A99`; `mt:12px`
- Value: `36px 700`; dark=`#FFFFFF` / light=`#1A2340`; suffix inline `20px 700` same color
- Delta: `13px #4CAF50 ml:8px` (via DeltaBadge)
- Chart wrapper: `position:absolute, top:16, right:16, width:200, height:90, overflow:hidden`
- `chart.height: 90` in options + `height={90} width={200}` props
- Chart colors: Beneficiaries=`#90A4C8` · Capital=`#2563EB`
- Count-up animation: `useCountUp(value, 2000)`

### 2. Secondary KPI Card
- Background: `#FFFFFF`, border radius: `12px`, padding: `16px 20px`
- **Fixed height: `140px`** via `sx={{ height: 140 }}`
- Box shadow: `0 1px 4px rgba(0,0,0,0.06)` (single shadow only)
- **Layout — column flex, `height: '100%'`:**
  - Top row (`justifyContent: space-between, alignItems: center`): icon box left + period selector right
  - Bottom row (`justifyContent: space-between, alignItems: flex-end, mt: 'auto'`):
    - Left: label `12px #6B7A99` + value row (`22px 700 #1A2340` + suffix + DeltaBadge inline)
    - Right: chart wrapper `width:130, height:65, flexShrink:0` — **chart bottom-right**
- Icon box: `36×36px`, `bgcolor:#F4F6F9`, `borderRadius:10px`, `color:#2f446a`, icon `20px`
- Period selector: MUI Select, `height:28px`, `bgcolor:#F4F6F9`, no border, `fontSize:11px`, `borderRadius:6px`
- `chart.height: 65` in options + `height={65} width={130}` props; sparkline, `columnWidth:55%`, `borderRadius:2`
- Hover: `--shadow-card-hover`, `translateY(-2px)`, `200ms ease`
- **Exact values (Figma):**
  - Water Secured: label "Water Secured (Liters/Day)", value 850.4, suffix "ML", delta "+34% ▲", chart `#1E3A5F`, icon `WavesIcon`
  - Economic Impact: label "Economic Impact", value $2.1, suffix "B", delta "+62% ▲", chart `#2E7D32`, icon `ShowChartIcon`
  - Productivity: label "Productivity Improvement Index", value 25, suffix "%", delta "+50% ▲", chart `#1565C0`, icon `TimelineIcon`
  - Health: label "Health Improvement Indicators", value 31, suffix "%", delta "+21% ▲", chart `#E65100`, icon `FavoriteOutlinedIcon`

### 3. Sidebar
- Background: `#e9edf4` (light blue-grey — Figma confirmed)
- Width: `200px` (collapsed: `56px`)
- Logo text "AquaImpact": `#2f446a`
- Section labels ("STRATEGIC", "ASSESSMENT"): `rgba(47,68,106,0.5)`, `12px`, uppercase, `letterSpacing: 0.08em`
- Inactive nav items: `color: #4B5F82`, no background
- Active nav item: `color: #2f446a`, `bgcolor: rgba(47,68,106,0.12)`, `borderLeft: 3px solid #2f446a`
- Hover state: `bgcolor: rgba(47,68,106,0.08)`, color `#2f446a`
- Settings item: same inactive style
- All icons: `20px`, color matches parent nav item text color
- **STRATEGIC:** Control Room (`DevicesOutlinedIcon`) · Countries (`PublicOutlinedIcon`)
- **ASSESSMENT:** Deployments (`LeaderboardOutlinedIcon`) · Proposals (`ArticleOutlinedIcon`) · Intelligence (`RadarIcon`)
- **System:** Settings (`TuneIcon`)

### 4. Top Bar
- Background: `#2f446a`, height: `56px`

### 5. Geographic Impact Distribution (Map)
- Header: follows §0 Card Header Standard
  - Title: "Geographic Impact Distribution" `16px 600 #FFFFFF`
  - Subtitle: "Real-time deployment scale and risk heat overlay" `13px #A8B8D8`
- Tile layer: **CartoDB Voyager** (warm beige land + blue water)
  - `url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"`
  - `attribution="© OpenStreetMap contributors © CARTO"`
- Center: `[10, 35]`, zoom: `3`, no maxBounds, `scrollWheelZoom: true`
- Map height: **fixed 440px** — `geo-map-viewport` `height:'440px'`, MapContainer `style={{ height:'440px', width:'100%' }}`
- `GeographicMap` dynamically imported (`ssr:false`) in `ExecutiveControlRoom`
- `'leaflet/dist/leaflet.css'` imported in `layout.tsx` + `GeographicMap.tsx`

**Markers:**
- Radius: `10 + (marker.capitalValue / maxCapital) * 22` (min 10, max 32)
- Largest: India ($210M) · Nigeria ($120M) · Indonesia ($115M)
- Colors: Deployed=`#4CAF50` · In Progress=`#FF9800` · Pending=`#2196F3`
- `fillOpacity: 0.85`, stroke: `2px #FFFFFF`

**Legend dots:** all solid `backgroundColor: color`, NO border, `borderRadius:'50%'`, `width:10, height:10`
- STATUS LAYER: Deployed=`#4CAF50` · In Progress=`#FF9800` · Pending=`#2196F3`
- RISK STATUS: Low=`#4CAF50` · Medium=`#FF9800` · High=`#F44336`

**Hover tooltip:** dark `#1A2340` bg, `8px` radius, `10px 14px` padding
- Country name bold `13px` + 2×2 grid: Water Scarcity (red `#F44336`) | Impact Score | Capital | Deployments

**Click popup** (rendered by `GeographicMap` as `position:absolute; top:8px; left:8px; z-index:1000; p:0`):
- `MapPopup` component receives `marker` + `onClose` props; card itself is rendered by `GeographicMap`
- Card: `width:320px, bgcolor:#FFFFFF, borderRadius:12px, boxShadow:0 8px 32px rgba(0,0,0,0.18), p:0`
- **Header** (`p: '16px 16px 12px'`, `position:relative`):
  - Row: flag emoji + country `16px 600 #1A2340` + status badge + × button (`position:absolute top:8px right:8px`)
  - Status badge — Active: `bgcolor:rgba(76,175,80,0.15) color:#2E7D32`; In Progress: `bgcolor:rgba(255,152,0,0.15) color:#E65100`; `11px 500, px:8px, radius:20px`
  - × button: `MUI IconButton 20px color:#9AA3B8`
  - Region: `12px #6B7A99 mt:2px`
- **Metrics grid** (`p: '0 16px 12px'`): 2×2, `gap:8px`; cell: `border:1px solid #F0F4F8, radius:6px, p:10px`; label `10px uppercase #9AA3B8 mb:4px`; value `14px 600 #1A2340`; Water Scarcity value `#F44336`
- **Active Deployments** (`p: '0 16px 10px'`): label `10px uppercase #9AA3B8 mb:8px`; each row `display:flex, justifyContent:space-between`; pill `bgcolor:#F0F4F8, radius:20px, px:10px, py:4px, 12px #1A2340`; "Maintain" link `13px #2196F3`
- **Intelligence** (`p: '0 16px 10px'`): label `"INTELLIGENCE (n)" 10px uppercase #9AA3B8 mb:8px`; item: `InfoOutlinedIcon 14px #2196F3` + text `13px #2196F3`
- **CTA button** (`p: '0 16px 16px'`): full-width, `bgcolor:#1B2A4A`, white text, `radius:24px, height:40px, 14px 500`; hover `bgcolor:#2D4B7A`

**Legend (top-right):** all dots solid fill `bgcolor:color`, NO border

**MapMarkerData fields:**
- `capitalValue: number` — for radius formula
- `deploymentLabels: string[]` — pill tags in popup

**Stats bar:** `bgcolor:#1B2A4A`, `height:48px`, 4 items: Active Deployment "8" · Capital Deployment "$383.0M" · High Alerts "3" · Diversification "62/100" + progress bar

### 6. AI Executive Brief Panel
- Width: `380px`, `alignSelf: stretch`, `overflow: hidden`
- Header: follows §0 Card Header Standard — `py:'20px', px:'24px'`, `flexDirection:'column'`
  - **Top row** (justifyContent space-between, alignItems center):
    - Left: `AutoAwesomeIcon` `16px #FFD700` + "AI Executive Brief" `16px 600 #FFFFFF`, `gap:8px`
    - Right: "View Full Report ›" outlined button, `border:1px solid rgba(255,255,255,0.4)`, `color:#FFFFFF`, `borderRadius:20px`, `px:16px, py:6px`, `fontSize:13px`
  - **Bottom row** (inside header): "Updated: 3 minute ago" `12px #A8B8D8`, `mt:8px`
- Section label style (TOP 3 PRIORITIES, STRATEGIC FORECASTING): `10px uppercase 600 #9AA3B8`, `padding: '16px 20px 8px'`
- Priority items:
  - Badge: `20px` circle, `bgcolor:#1B2A4A`, `color:#FFFFFF`, `11px 600`
  - Arrow: `NorthEastIcon 14px #9AA3B8`
  - Hover: `bgcolor:#F8FAFC`
  - `padding: '10px 20px'`, `borderBottom: '1px solid #F0F4F8'`
- Deployment Alert (no separate label above — alert box contains its own header):
  - Box: `mx:16px, my:12px`, `bgcolor:#FFF8E1`, `borderLeft:4px solid #FFB300`, `borderRadius:8px`, `p:12px`
  - Header row: `WarningAmberIcon 16px #F59E0B` + "Underperforming Deployment Alert" `13px 600 #1A2340`
  - Body: `12px #7B5A00 mt:6px lineHeight:1.5`
  - "View" link: `12px #F59E0B mt:6px`
- Forecast items: `px:20px, py:12px`, `borderLeft:4px solid` (item1=`#FF9800`, item2=`#4CAF50`), `borderBottom:1px solid #F0F4F8`

### 7. Alerts Ticker Strip
- White bg, `height:44px`, `borderTop/borderBottom:1px solid #E2E8F0`, `overflow:hidden`
- JS RAF-based scroll animation (useTicker hook), pause on hover
- Each item: colored `8px dot` + `13px #1A2340 text` + region tag
- Region tag: `bgcolor:#F0F4F8, borderRadius:20px, px:8px, py:2px, 11px 500 #6B7A99`
- **Exact ticker items (Figma):**
  1. 🔴 "Portfolio Overexposed to East African Climate Risk" · East Africa
  2. 🟠 "Severe Drought Intensifying in Horn of Africa" · East Africa
  3. 🔴 "Political Instability Escalating in Pakistan" · South Asia
  4. 🟠 "Mozambique cyclone damage: 3 treatment plants offline" · East Africa
  5. 🟠 "Mekong Delta salinity intrusion reaches seasonal high" · SE Asia

### 8. Performance Banner Row
- Two cards (`flex:1` each, `gap:16px`): Best Performer + Needs Attention
- Best Performer: `borderLeft:4px solid #4CAF50`, icon `EmojiEventsOutlinedIcon 24px #4CAF50`, icon box `rgba(76,175,80,0.12)`
  - Label: "BEST PERFORMER" `11px uppercase 600 #6B7A99`
  - Title: "Kenya — Solar-Powered Well Network" `18px 600 #1A2340`
  - Delta: "+15.6% ▲" `16px 600 #4CAF50`, right-aligned
- Needs Attention: `borderLeft:4px solid #F44336`, icon `WarningAmberIcon 24px #F44336`, icon box `rgba(244,67,54,0.12)`
  - Label: "NEEDS ATTENTION"
  - Title: "Mozambique — Coastal Desalination Pilot"
  - Delta: "-50.6% ▼" `16px 600 #F44336`

### 9. Deep Dive Cards (4-col grid)
- White bg, `radius:12px`, `20px` padding, `16px` gap, `mt:24px`
- Hover: `translateY(-3px)`, shadow, `borderColor: moduleColor+'4D'`
- Subtle gradient: `linear-gradient(135deg, #FFFFFF 60%, moduleColor+'08' 100%)`
- CTA: `ChevronRightIcon 16px` inline, `display:inline-flex, alignItems:center, gap:4px`
- Module colors + icons:
  - Country Prioritization: `#2196F3`, `FlagOutlinedIcon` (iconName `'FlagOutlined'`)
  - Deployment Performance: `#4CAF50`, `LeaderboardOutlinedIcon` (iconName `'Leaderboard'`)
  - Proposal Assessment: `#FF9800`, `ArticleOutlinedIcon` (iconName `'Article'`)
  - Intelligence Hub: `#9C27B0`, `BoltOutlinedIcon` (iconName `'Bolt'`)
- **Exact values (Figma):**
  - Country: description "Identify strategic regions for next deployment phase." stats: Active countries=22, Pending Review=7, progress=75%
  - Deployment: description "Track technical KPIs and logistical typical milestones." stats: Efficiency Score=92%, vs Last Quarter=+8.2%, progress=92%
  - Proposal: description "Review and score incoming venture applications." stats: Awaiting Review=8, Approved This Month=34, progress=60%
  - Intelligence: description "Access global datasets and research documents." stats: Beneficiaries Supported=142, AI Insights=12 New, progress=85%

### 10. Floating Action Button
- `56px` circle, `bgcolor:#1565C0`, `AutoAwesomeIcon` white `24px`, fixed bottom-right `32px`

---

## ApexCharts Configuration

```typescript
// baseChartOptions in src/theme/theme.ts — applied to ALL charts
{
  chart: {
    sparkline: { enabled: true },   // hides axes, labels, padding
    toolbar: { show: false },
    background: 'transparent',
    parentHeightOffset: 0,
  },
  grid: { show: false },
  xaxis: { labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
  dataLabels: { enabled: false },
  plotOptions: { bar: { borderRadius: 2, columnWidth: '55%' } },
}
```

**Rules:**
- Set `chart.height` in BOTH the options object AND the component `height` prop
- Hero cards: `chart.height:90`, wrapper `200×90`
- Secondary cards: `chart.height:65`, wrapper `130×65`
- Never pass `categories` in xaxis — sparkline uses data-only mode
- Never disable animations

---

## Leaflet / CSS Rules

```css
/* globals.css — critical overrides */
.leaflet-container {
  display: block !important;   /* prevents inline whitespace gap below map */
  width: 100% !important;
  height: 440px !important;
}
.leaflet-container img { max-width: none !important; }  /* fixes MUI CssBaseline conflict */
.leaflet-pane, .leaflet-map-pane, .leaflet-popup-pane { position: absolute !important; }
.leaflet-popup { position: absolute !important; }
.leaflet-tooltip { background:transparent !important; border:none !important; box-shadow:none !important; }
```

**Map card height — must match AI Brief panel height:**
- `ecr-map-wrapper`: `flex:1, minWidth:0, display:'flex', flexDirection:'column'` — NO `alignSelf:'flex-start'`
- `geo-map-card`: `height:'100%', display:'flex', flexDirection:'column'` — fills wrapper height to match brief
- `geo-map-viewport`: `flex:1` (grows to fill space between header and stats bar), `position:'relative', overflow:'hidden', lineHeight:0` — NO fixed height
- `MapContainer`: `style={{ height:'100%', width:'100%', display:'block' }}` — fills the flex viewport
- globals.css `.leaflet-container`: `height:100% !important` (not fixed 440px)
- `geo-map-popup-panel`: `p:0` (MapPopup owns all its own padding)

---

## File Structure

```
src/
  app/          layout.tsx · page.tsx · globals.css · ThemeRegistry.tsx
  components/
    layout/     Sidebar.tsx · TopBar.tsx
    kpi/        HeroKpiCard.tsx · SecondaryKpiCard.tsx
    map/        GeographicMap.tsx · MapInner.tsx · MapPopup.tsx · MapLegend.tsx · MapStatsBar.tsx
    ai-brief/   AIExecutiveBrief.tsx · PriorityItem.tsx · DeploymentAlert.tsx · ForecastItem.tsx
    ticker/     AlertsTicker.tsx
    performance/PerformanceBanner.tsx
    deep-dive/  DeepDiveGrid.tsx · DeepDiveCard.tsx
    common/     DeltaBadge.tsx
  theme/        theme.ts
  data/         kpiData.ts · mapData.ts · aiData.ts · deepDiveData.ts
  hooks/        useCountUp.ts
  types/        index.ts
```

---

## Do Not Rules

- **Never** hardcode design tokens outside `theme.ts` or `sx` props
- **Never** use a font other than Roboto
- **Never** use "Group" as a chart axis label
- **Never** leave placeholder / lorem ipsum text
- **Never** disable ApexCharts animations
- **Never** use `makeStyles` or `styled-components` — use `sx` only
- **Never** put more than one component per file
- **Never** keep files over 250 lines without splitting

---

## Session Kickoff Checklist

1. Does it match Figma? Check Dev Mode.
2. Are tokens from `theme.ts`, not hardcoded?
3. Hover, active, and loading states present?
4. File under 250 lines?
5. Charts use real data (not "Group")?
6. Works at 1280px, 1440px, 1920px?
