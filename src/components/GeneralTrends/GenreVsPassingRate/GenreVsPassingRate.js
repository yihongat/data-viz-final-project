import GraphSection from "../../GraphSection/GraphSection";
import placeholder from "../../../assets/placeholder.png";

const GenreVsPassingRate = () => {
  return (
    <GraphSection>
      <div className="text-white  basis-6/12">
        <h3>Genre vs. Passing Rate</h3>
      </div>
      <div className="text-white grow-0 shrink-0 basis-6/12">
        <img src={placeholder} alt="Tests by genre" />
      </div>
    </GraphSection>
  );
};

export default GenreVsPassingRate;
