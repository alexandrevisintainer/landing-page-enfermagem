import type { Metadata } from "next";
import "./globals.css";
import { Lato } from'next/font/google'
import { Header } from "@/components/Header";

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700']
})


export const metadata: Metadata = {
  title: "Afecto - Enfermagem Domiciliar",
  description: "Oferecemos enfermagem domiciliar, cuidados pós-cirúrgicos, assistência especializada para idosos e terapias em casa. Com nossa equipe capacitada, garantimos segurança, conforto e qualidade de vida no atendimento diário, promovendo uma recuperação tranquila e cuidados personalizados.",
  icons: {
    icon: "./assets/icon.svg", // Caminho para o favicon na pasta public
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
