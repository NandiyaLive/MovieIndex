import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <div className="logo">
          <h1>MovieIndex</h1>
        </div>
      </Link>

      <ul className="nav-links">
        <li>
          <Link href="/">
            <a>
              <p>Home</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/featured">
            <a>
              <p>Featured</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/guide"}>
            <a>
              <p>Guide</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/disclaimer"}>
            <a>
              <p>Disclaimer</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/create"}>
            <a>
              <p>Create</p>
            </a>
          </Link>
        </li>
        {/* <li>
          <a href="https://t.me/MovieIndex" target="_blank" rel="noopener noreferrer">
            <p>Telegram</p>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
