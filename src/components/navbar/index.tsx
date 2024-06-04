import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link href="/">Home</Link>
      </div>

      <ul>
        <li>
          <Link href="/shop">Our Coffee</Link>
        </li>
        <li>
          <Link href="/story">Our Story</Link>
        </li>
        <li>
          <Link href="/tips">Our Tips</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
