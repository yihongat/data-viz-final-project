import classNames from "classnames";

const GraphSection = ({ children, className }) => {
  return (
    <div className={classNames("w-full flex py-16 gap-4", className)}>
      {children}
    </div>
  );
};

export default GraphSection;
