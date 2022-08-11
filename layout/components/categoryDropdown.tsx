import { ICategory } from "../../contracts/category.type";

type Props = {
  data: ICategory[] | undefined;
};

export default function CategoryDropdown({ data }: Props) {
  console.log(data);
  return (
    <>
      {data?.map((category) => {
        return (
          <div key={category._id}>
            <span className="insert-sub-category">
              <div className="sub-category-item">
                <a className="dropdown-item" href="#">
                  <span>{category.name}</span>
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="sub-category ml-1">
                {category.children.map((sub) => (
                  <div className="sub-category-item" key={sub._id}>
                    <a className="dropdown-item" href="#">
                      <span>{sub.name}</span>
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </span>
          </div>
        );
      })}

      <div className="insert-sub-category">
        <a className="dropdown-item" href="#">
          <span>Desktop</span>
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
            </svg>
          </span>
        </a>
        <div className="sub-category">
          <a className="dropdown-item" href="#">
            <span>build pc</span>
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
              </svg>
            </span>
          </a>
          <div className="insert-sub-category">
            <a className="dropdown-item" href="#">
              <span>Desktop</span>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
              </span>
            </a>
            <div className="sub-category">
              <a className="dropdown-item" href="#">
                <span>build pc</span>
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
