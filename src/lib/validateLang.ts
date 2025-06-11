import { redirect } from "react-router";

const SUPPORTED_LANGUAGES = ["es", "en"];

export function validateLang({ params }: { params: { lang?: string } }) {
  const lang = params.lang;

  if (!lang || !SUPPORTED_LANGUAGES.includes(lang)) {
    return redirect("/404"); // O redirige a /es si prefieres
  }

  return null; // sigue con la ruta normalmente
}