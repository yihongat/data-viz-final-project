import Section from "../Section/Section";
import GenreVsPassingRate from "./GenreVsPassingRate/GenreVsPassingRate";
import YearOnYearTrends from "./YearOnYearTrends/YearOnYearTrends";

const GeneralTrends = () => {
  return (
    <Section className={"bg-black flex flex-col items-center justify-center"}>
      <div className="w-full flex flex-col items-start text-white">
        <h2 className="leading-tight">Are there general trends presented in this dataset?</h2>
      </div>
      <YearOnYearTrends/>
      <GenreVsPassingRate/>
    </Section>
  );
};

export default GeneralTrends;
