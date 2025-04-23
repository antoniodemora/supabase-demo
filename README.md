# 📱 React Native + Supabase: Login y Catálogo de Estados

Este proyecto es una app móvil desarrollada con **React Native (Expo)** que incluye:

-   Autenticación con email/password usando Supabase
-   Navegación protegida basada en sesión
-   Catálogo de estados de México editable (CRUD completo)
-   Manejo de errores y retroalimentación visual

---

## 🛠 Tecnologías

-   [React Native (Expo)](https://expo.dev)
-   [Supabase](https://supabase.com)
-   [React Navigation](https://reactnavigation.org)

---

## 🚀 Instalación

```bash
git clone https://github.com/tu-usuario/supabase-catalogo-app.git
cd supabase-catalogo-app
npm install
npx expo start
```

---

## 🧩 Configuración de Supabase

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Activa el proveedor de email/password
3. Crea la tabla `mexican_states` con el siguiente SQL:

```sql
create table mexican_states (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  created_by uuid references auth.users(id)
);

alter table mexican_states enable row level security;

create policy "Read for authenticated users"
  on mexican_states for select
  using (auth.uid() is not null);

create policy "Insert for authenticated users"
  on mexican_states for insert
  with check (auth.uid() = created_by);

create policy "Delete own states"
  on mexican_states for delete
  using (auth.uid() = created_by);

create policy "Update own states"
  on mexican_states for update
  using (auth.uid() = created_by);
```

4. Copia tu URL y anon key desde Supabase e ingrésalos en `/lib/supabase.js`

```js
export const supabase = createClient(
    "https://TUSUPABASEURL.supabase.co",
    "TUPUBLICANONKEY"
);
```

---

## ✍ Estructura del proyecto

-   `/screens`: Pantallas (Intro, Login, Register, Catalog)
-   `/lib/supabase.js`: Cliente Supabase
-   `App.js`: Entry point
-   `AppNavigator.js`: Lógica de navegación

---

## ✅ To Do

-   [x] Login y registro con Supabase
-   [x] CRUD de estados
-   [x] Navegación protegida
-   [x] Manejo de errores

---

## 🧪 Test rápido

-   Registra un usuario
-   Agrega un estado
-   Edita/elimina los propios
-   Cierra sesión y vuelve a entrar

---

## 📄 Licencia

MIT
