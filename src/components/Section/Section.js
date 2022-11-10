import classNames from "classnames";

const Section = ({ children, className }) => {
  return (
    <div className={classNames("w-full p-[80px] min-h-screen", className)}>
      {children}
    </div>
  );
};

export default Section;
