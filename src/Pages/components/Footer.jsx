function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center text-sm justify-center">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
