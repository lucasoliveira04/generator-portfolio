export const Footer = () => {
  const now = new Date();

  return (
    <footer className="bg-gray-100 text-center py-4">
      <p>© {now.getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
    </footer>
  );
};
