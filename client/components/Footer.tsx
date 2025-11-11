interface FooterProps {
  language: "en" | "es";
}

export default function Footer({ language }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8" />

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8">
          <p className="text-foreground/50 text-xs text-center">
            © {year} Maurique Labs. Systems with Soul.
          </p>
        </div>
      </div>
    </footer>
  );
}
