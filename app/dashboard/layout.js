import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SidebarMenu from "../components/SidebarMenu";

export default async function PrivateDashboard({ children }) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        <div className='absolute left-4 top-4 lg:hidden block'>
          <label htmlFor='my-drawer-2' className='btn btn-ghost drawer-button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='size-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </label>
        </div>
        <div className='max-lg:mt-12'>{children}</div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'></label>
        <SidebarMenu />
      </div>
    </div>
  );
}
