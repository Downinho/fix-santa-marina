const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 
                 font-body font-medium transition-all"
    >
      Pular para o conteúdo principal
    </a>
  );
};

export default SkipToContent;