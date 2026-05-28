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
// NO MODIFICAR NADA DE AQUÍ EN ADELANTE
// ============================================================

// ⚠️ IMPORTANTE: Usamos window.supabase en lugar de const supabase.
// La CDN de Supabase (@supabase/supabase-js v2) ya declara
// 'var supabase' a nivel global. Usar 'const supabase = ...'
// causaría un error: "Identifier 'supabase' has already been declared".
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Verificación de dominio — DESACTIVADA.
 * Ahora permite ejecución en cualquier dominio.
 */
function verificarDominio() {
    return true; // ✅ Desactivado
}
