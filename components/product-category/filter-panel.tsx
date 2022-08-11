import CategoryAccordion from "./category-accordion";
import PriceRange from "./price-range";

type Props = {};

export default function FilterPanel({}: Props) {
  return (
    <div className="my-4">
      <PriceRange />
      <CategoryAccordion />
    </div>
  );
}
