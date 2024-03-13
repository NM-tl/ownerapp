import Header from "@/ui/Header/header";
import Footer from "@/ui/Footer/footer";

export default function SimpleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <Header />
        <main className="max-w-7xl mx-auto py-10 px-4 shadow-inner">
            {children} 
        </main>
        <Footer />
    </div>
  );
}