import Link from "next/link";


export default function Navigation() {
    return (
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/episodes">
          Episodes
        </Link>
      </li>
      <li>
        <Link href="/characters">
          Characters
        </Link>
      </li>
    </ul>
  );
}
