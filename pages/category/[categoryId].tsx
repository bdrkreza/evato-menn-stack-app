import { FilterPanel } from "../../components";

type Props = {};

export default function ProductCategory({}: Props) {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <FilterPanel />
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    </div>
  );
}
