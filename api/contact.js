const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_TYPES = new Set(["sugerencias", "errores"]);

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Método no permitido." });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Faltan variables de entorno para el formulario de contacto.");
    return response.status(500).json({ error: "El formulario no está configurado." });
  }

  const nombre = cleanText(request.body?.nombre, 100);
  const email = cleanText(request.body?.email, 254).toLowerCase();
  const tipo = cleanText(request.body?.tipo, 30);
  const mensaje = cleanText(request.body?.mensaje, 3000);
  const website = cleanText(request.body?.website, 200);

  if (website) return response.status(200).json({ ok: true });
  if (nombre.length < 2 || !EMAIL_PATTERN.test(email) || !ALLOWED_TYPES.has(tipo) || mensaje.length < 10) {
    return response.status(400).json({ error: "Revisá los datos ingresados." });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `[Dólar en Línea] ${tipo} de ${nombre}`,
        html: `<h2>Nuevo mensaje desde el formulario</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Tipo:</strong> ${escapeHtml(tipo)}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${escapeHtml(mensaje).replaceAll("\n", "<br>")}</p>`,
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend rechazó el envío:", await resendResponse.text());
      return response.status(502).json({ error: "No se pudo enviar el mensaje." });
    }
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error enviando el formulario:", error);
    return response.status(500).json({ error: "No se pudo enviar el mensaje." });
  }
}
