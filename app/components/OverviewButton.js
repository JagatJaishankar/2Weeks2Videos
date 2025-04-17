const OverviewButton = (props) => {
  return (
    <div>
      <button className='btn btn-primary text-lg font-raleway font-extrabold shadow-md'>
        {props.label}
      </button>
    </div>
  );
};

export default OverviewButton;
