export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-muted-foreground/15">
      <div className="max-width py-6">
        <p className="text-center font-secondary text-sm text-muted-foreground">
          © {year} Lemvest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}