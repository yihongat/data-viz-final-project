import Section from "../Section/Section";

const Introduction = () => {
  return (
    <Section className={"bg-primary flex flex-col items-center justify-center"}>
        <div className="w-full flex flex-col items-start">
      <h1>Introduction</h1>
      <p className="max-w-[800px]">{`The Bechdel Test is a test which names the following three criteria: (1) it has to have at least two named women in it, (2) who talk to each other, (3) about something besides a male character/man. The test was popularized by Alison Bechdel's comic in a 1985 strip called The Rule. `}</p></div>
      <div className="my-16"><iframe width="560" height="315" src="https://www.youtube.com/embed/Meq3CyuKOjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </Section>
  );
};

export default Introduction;