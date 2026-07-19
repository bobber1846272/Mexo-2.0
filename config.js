/* ═══════════════════════════════════════════════════════
   MEXO — jouw eigen instellingen

   Dit bestand upload je ÉÉN KEER en vervang je daarna nooit meer.
   Bij een update van Mexo vervang je alleen index.html en sw.js;
   dit bestand blijft gewoon staan.

   Laat je beide velden leeg, dan werkt Mexo volledig lokaal
   (demoversie, geen accounts en geen synchronisatie).
   ═══════════════════════════════════════════════════════ */

window.MEXO_CLOUD = {

  // De Project URL uit Supabase → Project Settings → API keys
  // Voorbeeld: "https://abcdefghijkl.supabase.co"
  url: "https://lwjkmghsygygorshnske.supabase.co",

  // De 'anon public' key uit datzelfde scherm (lange tekst).
  // Deze mag openbaar zijn; de beveiliging zit in je database-policies.
  // Plak hier NOOIT de service_role key.
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3amttZ2hzeWd5Z29yc2huc2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0ODcwMjUsImV4cCI6MjEwMDA2MzAyNX0.xLWXIRvbl-FzZkKLmHrYxgrRSE5MumTgLqriwxWaYQY"

};
