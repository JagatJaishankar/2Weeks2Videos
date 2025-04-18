const AcceptButton = (props) => {
  return (
    <div className='text-center'>
      <button className='btn btn-primary text-lg font-raleway font-extrabold shadow-md'>
        {props.label}
      </button>
    </div>
  );
};

export default AcceptButton;
