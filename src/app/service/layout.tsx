import Footer from "../../../components/Footer";
import Topbar from "../../../components/Topbar";
import { Nav } from "./page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <nav>
        <Topbar />
        <Nav />
      </nav>
      <main className="">{children}</main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
