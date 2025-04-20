import Link from "next/link";

const AcceptButton = (props) => {
  return (
    <div className='text-center'>
      <Link href={"#decision"}>
        <button className='btn btn-primary text-lg font-raleway font-extrabold shadow-md'>
          {props.label}
        </button>
      </Link>
    </div>
  );
};

export default AcceptButton;
