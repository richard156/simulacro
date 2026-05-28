# 📝 ExamenApp - Plataforma de Estudio con Flashcards

Aplicación web tipo "AnkiDroid" para estudiar preguntas de opción múltiple, construida con HTML/CSS/JS puro y Supabase como backend.

## ✨ Características

- ✅ **Autenticación** de usuarios con Supabase Auth (email + contraseña)
- ✅ **Flashcards** con preguntas de opción múltiple (A, B, C)
- ✅ **Orden aleatorio** de preguntas (algoritmo Fisher-Yates)
- ✅ **Feedback visual** inmediato al responder (verde = correcto, rojo = incorrecto)
- ✅ **Cronómetro** activable/desactivable con pausa
- ✅ **Estadísticas** en tiempo real (acertadas, falladas, restantes, total)
- ✅ **Panel Admin** protegido con contraseña para subir archivos CSV
- ✅ **Detección inteligente** de columnas en CSV (compatible con formatos de concurso)
- ✅ **Protección anti-clonación** por verificación de dominio
- ✅ **Diseño responsive** para PC, tablet y celular
- ✅ **Desplegable en GitHub Pages** (100% estático)

## 📋 Requisitos Previos

- Una cuenta en [Supabase](https://supabase.com) (gratuita)
- Una cuenta en [GitHub](https://github.com) (para desplegar)

## 🚀 Configuración Paso a Paso

### 1. Crear proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com) e inicia sesión
2. Crea un nuevo proyecto (elige un nombre y una contraseña segura para la BD)
3. Espera a que termine la inicialización (1-2 minutos)

### 2. Crear la tabla de preguntas

1. En el panel de Supabase, ve a **SQL Editor**
2. Haz clic en **"New Query"**
3. Pega el siguiente SQL y ejecútalo:

```sql
CREATE TABLE preguntas (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pregunta_texto TEXT NOT NULL,
    opcion_a TEXT NOT NULL,
    opcion_b TEXT NOT NULL,
    opcion_c TEXT NOT NULL,
    respuesta_correcta CHAR(1) NOT NULL CHECK (respuesta_correcta IN ('A', 'B', 'C'))
);
```

### 3. Configurar Autenticación

1. En Supabase, ve a **Authentication** > **Providers**
2. Asegúrate de que el proveedor **"Email"** esté habilitado
3. Opcional: En **Settings**, puedes desactivar "Confirm email" si no quieres que los usuarios tengan que confirmar su correo

### 4. Configurar la aplicación

1. Abre el archivo **`config.js`** en tu editor
2. Reemplaza los valores:

```javascript
const SUPABASE_URL = 'https://TU-PROYECTO.supabase.co';    // ← Tu URL de Supabase
const SUPABASE_ANON_KEY = 'tu-clave-anon-aqui';             // ← Tu Anon Key
```

Para encontrar estos valores:
- En Supabase, ve a **Project Settings** > **API**
- Copia la **"Project URL"** y la **"anon public key"**

3. Opcional: Cambia la contraseña de administrador:

```javascript
const ADMIN_PASSWORD = 'admin123'; // ← Cámbiala por una más segura
```

### 5. Desplegar en GitHub Pages

1. Crea un repositorio en GitHub (público)
2. Sube todos los archivos del proyecto:
   - `index.html`
   - `app.html`
   - `admin.html`
   - `config.js`
   - `README.md`
3. Ve a **Settings** > **Pages** de tu repositorio
4. En "Source", selecciona **"Deploy from a branch"**
5. Selecciona la rama **main** y la carpeta **/ (root)**
6. Haz clic en **"Save"**
7. Espera unos minutos y tu app estará disponible en:
   `https://TU-USUARIO.github.io/TU-REPOSITORIO/`

### 6. Probar la aplicación

1. Abre la URL de GitHub Pages
2. Regístrate con un correo y contraseña
3. Ve al **Panel Admin** (🔧 enlace abajo del login)
4. Ingresa la contraseña de administrador (`admin123` por defecto)
5. Sube un archivo CSV con preguntas
6. Vuelve al examen y ¡empieza a estudiar!

## 📁 Estructura del Proyecto

```
/
├── index.html    → Página de Login / Registro
├── app.html      → Página principal de estudio (flashcards)
├── admin.html    → Panel administrativo (subir CSV)
├── config.js     → Configuración centralizada (Supabase, admin, dominio)
└── README.md     → Este archivo de instrucciones
```

## 📄 Formato del CSV

El sistema detecta automáticamente las columnas buscando palabras clave. Tu CSV debe tener una fila de encabezados y datos como este:

| Pregunta | Alternativa A | Alternativa B | Alternativa C | Respuesta Correcta |
|----------|--------------|--------------|--------------|-------------------|
| ¿Cuánto es 2+2? | 3 | 4 | 5 | B |
| ¿Capital de Perú? | Lima | Bogotá | Santiago | A |

**Columnas aceptadas:**
- **Pregunta**: "pregunta", "enunciado", "question", "item"
- **Alternativa A**: "alternativa a", "opcion a", "option a", "a"
- **Alternativa B**: "alternativa b", "opcion b", "option b", "b"
- **Alternativa C**: "alternativa c", "opcion c", "option c", "c"
- **Respuesta correcta**: "respuesta correcta", "clave", "respuesta", "d"

## 🔒 Protección Anti-Clonación

La aplicación verifica que se esté ejecutando en un dominio autorizado (GitHub Pages).
Si alguien clona el repositorio y lo despliega en otro hosting, la app mostrará un mensaje de "Acceso Denegado".

Para agregar tu propio dominio personalizado, edita `config.js`:

```javascript
const DOMINIOS_PERMITIDOS = [
    'github.io',
    'tudominio.com', // ← Agrega aquí tu dominio
];
```

## 🛠️ Solución de Problemas

**Error: "No hay preguntas"**
→ Ve al Panel Admin, sube un archivo CSV con preguntas.

**Error al registrarse: "Email already registered"**
→ El correo ya existe. Intenta iniciar sesión.

**Error al subir CSV: "No se detectaron todas las columnas"**
→ Asegúrate de que el CSV tenga una fila de encabezados con nombres como "Pregunta", "Alternativa A", etc.

**La página se ve en blanco o con errores**
→ Abre la consola del navegador (F12) para ver errores específicos.

## 📱 Atajos de Teclado

En la pantalla de estudio:
- **A**, **B**, **C** o **1**, **2**, **3**: Seleccionar respuesta
- **Enter** o **Espacio**: Ir a la siguiente pregunta

## 🧪 Tecnologías Usadas

- **HTML5** + **CSS3** (Flexbox, Grid, animaciones)
- **JavaScript ES6+** (async/await, módulos)
- **Supabase JS SDK** (Auth + Base de datos)
- **Papa Parse** (Procesamiento de CSV)
- **GitHub Pages** (Hosting estático)

---

💡 **¿Preguntas o sugerencias?** Abre un issue en el repositorio de GitHub.
