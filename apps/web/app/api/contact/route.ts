import { NextResponse } from "next/server";

export async function POST(req: Request){
  const data = await req.json().catch(()=> ({}));
  // Simulación: nunca guardamos ni enviamos correo real
  return NextResponse.json({ ok: true, received: data, message: "Formulario recibido (simulado)" }, { status: 200 });
}
