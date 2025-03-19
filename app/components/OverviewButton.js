const OverviewButton = (props) => {
  return (
    <div>
      <button className="btn btn-primary text-lg font-outfit font-bold shadow-md">
        {props.label}
      </button>
    </div>
  );
};

export default OverviewButton;
