import Link from "next/link";

export default function FooterSection() {
  return (
    <section className='max-w-3xl mx-auto px-6 py-6'>
      <div className='font-lora opacity-80 flex md:flow-row max-md:flex-col md:justify-between max-md:space-y-4 text-center'>
        <div className='md:text-left'>
          <div className='font-raleway font-bold'>2 Weeks, 2 Videos</div>
          <div>Become a YouTuber in Days, Not Weeks</div>
          <div>
            Made with 🍯 and 🐰 by{" "}
            <span className='link link-active'>Jagat</span>
          </div>
          <div className='opacity-50'>
            Copyright &copy; {new Date().getFullYear()}
          </div>
        </div>
        <div className='md:text-right'>
          <div className='uppercase tracking-widest font-bold opacity-80 text-sm font-raleway'>
            legal
          </div>
          <div className='link link-hover'>
            <Link href={"/legal/privacy-policy"}>Privacy Policy</Link>
          </div>
          <div className='link link-hover'>
            <Link href={"/legal/terms-of-service"}>Terms of Service</Link>
          </div>
          <div className='link link-hover'>
            <Link href={"/legal/refund-policy"}>Refund Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
