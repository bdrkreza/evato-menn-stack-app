import { MdOutlineArrowRight } from "react-icons/md";
import { TCategory } from "../../contracts/category.type";
type Props = {
  data: TCategory[] | undefined;
};
export default function NestedMenu({ data }: any) {
  console.log("nested meun", data);
  const renderCategories = (categories: TCategory[]) => {
    let myCategories: any = [];
    categories.forEach((category: any) => {
      myCategories.push(
        <li key={category.name}>
          {category.parentId ? (
            <a
              className="dropdown-item"
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
            >
              <MdOutlineArrowRight />
              {category.name}
            </a>
          ) : (
            <span className="dropdown-item">
              {category.name}
              <MdOutlineArrowRight />
            </span>
          )}
          {category.children.length > 0 ? (
            <ul className="dropdown-menu dropdown-submenu">
              {renderCategories(category.children)}
            </ul>
          ) : null}
        </li>
      );
    });
    return myCategories;
  };
  return (
    <>
      <ul className="dropdown-menu menu" aria-labelledby="dropdownMenuButton">
        {data?.data?.length > 0 ? renderCategories(data?.data) : null}
      </ul>
    </>
  );
}
