import NextHead from "next/head";

export default function Head({ children }) {
  return (
    <NextHead>
      {children}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/open-fonts@1.1.1/fonts/inter.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
      />
    </NextHead>
  );
}
