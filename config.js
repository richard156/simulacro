/**
 * ============================================================
 *  CONFIGURACIÓN DE SUPABASE
 * ============================================================
 * 
 * Instrucciones:
 * 1. Ve a https://supabase.com e inicia sesión o regístrate.
 * 2. Crea un nuevo proyecto.
 * 3. En el panel de tu proyecto, ve a "Project Settings" > "API".
 * 4. Copia la "Project URL" y la "anon public key".
 * 5. Pégalas aquí debajo.
 * 6. Luego crea la tabla "preguntas" con el siguiente SQL:
 * 
 *    CREATE TABLE preguntas (
 *        id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 *        pregunta_texto TEXT NOT NULL,
 *        opcion_a TEXT NOT NULL,
 *        opcion_b TEXT NOT NULL,
 *        opcion_c TEXT NOT NULL,
 *        respuesta_correcta CHAR(1) NOT NULL CHECK (respuesta_correcta IN ('A', 'B', 'C'))
 *    );
 * 
 * 7. En Authentication > Settings, asegúrate de tener habilitado
 *    el método "Email" con confirmación de email opcional.
 * ============================================================
 */

// ⚠️ REEMPLAZA ESTOS VALORES CON LOS DE TU PROYECTO SUPABASE
const SUPABASE_URL = 'https://rbylchwdwxeuhzviyety.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJieWxjaHdkd3hldWh6dml5ZXR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5MzYzOTQsImV4cCI6MjA5NTUxMjM5NH0.-1CJm9kLc9NvUmhOCwCXjoOSQRxDFv-XdxvdXzCQghI';

// ============================================================
// CONFIGURACIÓN ADMIN
// ============================================================
// Contraseña para acceder al panel administrativo
const ADMIN_PASSWORD = 'admin123';

// ============================================================
// CONFIGURACIÓN DE PROTECCIÓN (Anti-clonación)
// ============================================================
// Dominios permitidos para desplegar la aplicación
// Por defecto: GitHub Pages (github.io)
// Puedes agregar tu propio dominio personalizado si lo deseas
const DOMINIOS_PERMITIDOS = [
    'github.io',       // GitHub Pages
    // 'tudominio.com', // ← Agrega aquí tu dominio personalizado si lo tienes
];

// ============================================================
// NO MODIFICAR NADA DE AQUÍ EN ADELANTE
// ============================================================

// Inicializar cliente de Supabase
// Usamos 'window.supabase' porque la CDN expone un objeto global 'supabase'
// Luego lo asignamos a nuestra propia constante 'supabase' para usarlo localmente
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Verifica si el dominio actual está en la lista de permitidos.
 * Esto evita que alguien clone el repositorio y lo despliegue
 * en otro lugar sin autorización.
 */
function verificarDominio() {
    const hostname = window.location.hostname.toLowerCase();
    
    // Si estamos en entorno local (localhost) permitir el desarrollo
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return true;
    }
    
    return DOMINIOS_PERMITIDOS.some(dominio => hostname.includes(dominio));
}
