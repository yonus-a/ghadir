import { LayoutType } from "./types/general";
import "./styles/global.scss";

export default function RootLayout({ children }: Readonly<LayoutType>) {
  return (
    <html lang="fa" dir="rtl" prefix="og: https://ogp.me/ns#">
      <body>{children}</body>
    </html>
  );
}
