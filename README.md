# 📱 React Native + Supabase: Login y Catálogo de Estados

Este proyecto es una app móvil desarrollada con **React Native (Expo)** que incluye:

- Autenticación con email/password usando Supabase
- Navegación protegida basada en sesión
- Catalogo de imágenes

---

## 🛠 Tecnologías

- [React Native (Expo)](https://expo.dev)
- [Supabase](https://supabase.com)
- [React Navigation](https://reactnavigation.org)

---

## 🚀 Instalación

```bash
git clone git@github.com:antoniodemora/supabase-demo.git
cd supabase-demo
npm install
npx expo start
```

---

## 🧩 Configuración de Supabase

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Activa el proveedor de email/password

3. Crea un bucket dentro de supabase Storage.
4. Copia tu URL y anon key desde Supabase e ingrésalos en `/lib/supabase.js`

```js
const supabaseUrl = "https://TUSUPABASEURL.supabase.co";
const supabaseAnonKey = "TUPUBLICANONKEY";
```

---

## ✍ Estructura del proyecto

- `/screens`: Pantallas (Intro, Login, Register, Catalog)
- `/lib/supabase.js`: Cliente Supabase
- `App.js`: Entry point
- `AppNavigator.js`: Lógica de navegación

---

---

## 🧪 Test rápido

- Registra un usuario
- Inicia sesión
- Cierra sesión y vuelve a entrar

---

## 📄 Licencia

MIT
