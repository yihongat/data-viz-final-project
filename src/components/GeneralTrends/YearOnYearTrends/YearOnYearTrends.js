import { useEffect, useRef } from "react";
import StackedBarChart from "../../Charts/StackedBarChart";
import GraphSection from "../../GraphSection/GraphSection";
import * as d3 from "d3";
import moviesData from "../../../assets/movies.csv";
import { countBy } from "../../../utils/utils";

const BINARY = ["PASS", "FAIL"];

const YearOnYearTrends = () => {
  const stackedBar = useRef(undefined);

  useEffect(() => {
    d3.csv(moviesData, (data) => {
      return data;
    }).then((data) => {
      const failedMoviesCount = countBy(
        data.filter((d) => d.binary === "FAIL"),
        "year"
      );
      const passedMoviesCount = countBy(
        data.filter((d) => d.binary === "PASS"),
        "year"
      );
      const plotData = [
        ...Object.keys(failedMoviesCount).flatMap((year) => ({
          year,
          count: failedMoviesCount[year],
          binary: "FAIL",
        })),
        ...Object.keys(passedMoviesCount).flatMap((year) => ({
          year,
          count: passedMoviesCount[year],
          binary: "PASS",
        })),
      ];
      plotData.sort((a, b) => (a.year > b.year ? 1 : -1));
      const c = StackedBarChart(plotData, {
        x: (d) => d.year,
        y: (d) => d.count,
        z: (d) => d.binary,
        yLabel: "Number of movies",
        zDomain: BINARY,
      });
      stackedBar.current?.replaceChildren(c);
    });
  }, []);

  return (
    <GraphSection>
      <div className="text-white basis-6/12">
        <h3 className="my-8">Year on year trends</h3>
        <p>
          Lorem ipsum dolor sin amet. Some text that gives more context about
          possible reasons that the graph looks like that.
        </p>
      </div>
      <div className="text-white grow-0 shrink-0 basis-6/12" ref={stackedBar}></div>
    </GraphSection>
  );
};

export default YearOnYearTrends;
