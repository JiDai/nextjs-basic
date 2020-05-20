import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/episodes">
          <a>Episodes</a>
        </Link>
      </li>
      <li>
        <Link href="/characters">
          <a>Characters</a>
        </Link>
      </li>
    </ul>
  );
}
