# Яндекс.Метрика — реализация

## Файлы

| Файл | Роль |
|------|------|
| `app/components/YandexMetrica.tsx` | Инициализация счётчика + логика userId |
| `app/utils/reachGoal.ts` | Утилита для отправки событий |

---

## Инициализация счётчика

Один `<Script>` с IIFE + init. Больше ничего инлайн.

```js
(function(m,e,t,r,i,k,a){ ... })
(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");

ym(YM_ID, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
  triggerEvent: true,
});
```

`triggerEvent: true` — YM выстреливает событие `yacounter{YM_ID}inited` когда счётчик готов.

---

## Логика userId (useEffect)

### Существующий пользователь (userId есть в localStorage)

```
yacounter{YM_ID}inited
  → ym(YM_ID, "userParams", { UserID: userId })
  → ym(YM_ID, "reachGoal", "visit", { users: { userId } })
```

### Новый пользователь (localStorage пуст)

```
yacounter{YM_ID}inited
  → ym(YM_ID, "getClientID", callback)
      → POST /functions/v1/register-identity { ym_client_id }
          → получаем userId
          → localStorage.setItem("sensay_user_id", userId)
          → ym(YM_ID, "userParams", { UserID: userId })
          → ym(YM_ID, "reachGoal", "visit", { users: { userId } })
```

---

## reachGoal

Все события автоматически получают `users.userId` из localStorage:

```ts
reachGoal("download_mac_arm")
// → ym(YM_ID, "reachGoal", "download_mac_arm", { users: { userId: "..." } })
```

---

## Воронка

| Шаг | Событие | Параметры |
|-----|---------|-----------|
| 1 | `visit` | `{ users: { userId } }` |
| 2 | `click_download_button` | `{ users: { userId }, platform: { mac_arm: true } }` |
| 3 | (запуск приложения — позже) | |

Платформа — вложенный параметр внутри `download`:

```ts
reachGoal("click_download_button", { platform: { mac_arm: true } })
reachGoal("click_download_button", { platform: { mac_x64: true } })
reachGoal("click_download_button", { platform: { windows: true } })
reachGoal("click_download_button", { platform: { other: true } })
```

---

## Где смотреть в YM

- **Параметры посетителей** — ключ `UserID` (через `userParams`)
- **Отчёты → Конверсии** → цель → дерево параметров `users → userId`
- **Вебвизор** → сегментация по параметру `UserID`
