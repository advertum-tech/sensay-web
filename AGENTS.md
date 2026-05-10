<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Брейкпоинты проекта

Три зоны, пять тиров. Tailwind v4, кастомных брейкпоинтов нет — стандартные (`md`=768, `lg`=1024, `xl`=1280, `min-[1500px]`).

### Mobile — 0–767px
- Класс: `md:hidden`

### Tablet — 768–1279px
Две версии дизайна, обе являются таблетом:
- **Узкий таблет** 768–1023px → `hidden md:block lg:hidden`
- **Широкий таблет** 1024–1279px → `hidden lg:block xl:hidden`

Когда слайд не разделяет узкий/широкий, используется единый таблет-диапазон: `hidden md:block xl:hidden` с фиксированной шириной контейнера 834px.

### Desktop — 1280px+
Два тира:
- **Desktop low** 1280–1499px → `xl:` без дополнительного условия
- **Desktop high** 1500px+ → `min-[1500px]:` (используется для корректировки позиций)

**Правило:** никогда не менять breakpoint одного слайда не сверившись с дизайном остальных. Все слайды должны переключаться в один и тот же момент.
