export default function BlueprintDays({ items }) {
  return (
    <ul className='list bg-base-100 rounded-box shadow-md border-2 border-gray-500'>
      <li className='p-4 pb-2 text-xs tracking-wide font-lora font-bold text-center'>
        <div className='badge badge-secondary badge-outline'>
          Blueprint from Day 01 to 14
        </div>
      </li>

      {items.map((item, index) => (
        <li key={index} className='list-row flex items-center gap-4 px-4 py-2'>
          <div className='text-4xl max-sm:text-lg font-lora font-bold opacity-30 tabular-nums'>
            {String(item.dayNumber).padStart(2, "0")}
          </div>

          <div className='flex items-center justify-center w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-box sm:bg-base-200'>
            {/* Replace with your actual SVG icon component or inline SVG */}
            {item.icon}
          </div>

          <div className='flex-grow'>
            <div className='font-raleway font-extrabold max-sm:font-bold sm:text-lg'>
              {item.title}
            </div>
            <div className='font-lora opacity-60 max-sm:text-sm'>
              {item.subtitle}
            </div>
          </div>

          <a href={item.fileUrl} download className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6 max-sm:size-4'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
              />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
