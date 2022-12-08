export function Header(text) {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = text;
  header.append(h1);
  return header;
}
