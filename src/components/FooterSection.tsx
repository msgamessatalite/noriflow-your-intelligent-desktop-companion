const FooterSection = () => (
  <footer className="border-t border-border/30 py-10 px-4">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span className="text-lg font-bold gradient-text">Noriflow</span>
        <span className="text-muted-foreground text-sm ml-3">by MSSATALAITE</span>
      </div>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="https://www.youtube.com/@MS_SATALITE_Gaming" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          YouTube
        </a>
        <span>© 2026 Noriflow</span>
      </div>
    </div>
  </footer>
);

export default FooterSection;
