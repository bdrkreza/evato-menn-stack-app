import Link from "next/link";

type Props = {};

export default function DropdownMenu({}: Props) {
  return (
    <div className="drop-menu">
      <ul className="dropdown-menu">
        <li className="mt-2">
          <Link href="#" passHref>
            <h5> Action</h5>
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            <h5> Another action</h5>
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            <h5>Something else here</h5>
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            <h5> Separated link</h5>
          </Link>
        </li>
      </ul>
    </div>
  );
}
