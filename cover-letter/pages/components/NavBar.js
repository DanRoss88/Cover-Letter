import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-name">
        <h1>Daniel Ross</h1>
      </div>{" "}
      <ul>
        <li>
          <Link href="#about" scroll={false}>
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" scroll={false}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="#whyyou" scroll={false}>
            Why Your Company?
          </Link>
        </li>
        <li>
          <Link href="#whyme" scroll={false}>
            Why Hire Me?
          </Link>
        </li>
        <li>
          <Link href="#skills" scroll={false}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="#references" scroll={false}>
            References
          </Link>
        </li>
        <li>
          <Link href="https://flowcv.com/resume/9th3fq6rpv" scroll={false}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
