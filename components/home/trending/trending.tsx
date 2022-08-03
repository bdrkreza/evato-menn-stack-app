import TrendingCarousel from "./trending-carousel";

type Props = {};

export default function Trending({}: Props) {
  return (
    <div className="container mt-5">
      <div className="trending">
        <h4 className="text-uppercase section-title">
          Trending <span className="px-2">HOT</span>
        </h4>
      </div>
      <div>
        <TrendingCarousel />
      </div>
    </div>
  );
}
