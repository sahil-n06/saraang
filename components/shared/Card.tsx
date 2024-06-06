import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = () => {
  return (
    <>
    <div className="mt-9 shadow-2xl p-10 rounded-2xl w-10/11 mb-20 items-center mx-auto">
      <div className="flex flex-wrap justify-center md:justify-between gap-4">
        <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
          <Link
            href="/assets/images/test-2.png"
            className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            style={{ backgroundImage: `url(/assets/images/test-2.png)` }}
          >
            <Image
              src="/assets/images/test-2.png"
              alt="Sample Event Title"
              layout="fill"
              objectFit="cover"
              className="opacity-0"
            />
          </Link>

          <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
            <p className="p-medium-16 p-medium-18 text-grey-500">
              {new Date('2024-06-05T00:00:00Z').toLocaleDateString()}
            </p>

            <Link href="#">
              <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">Sample Event Title</p>
            </Link>

            <div className="flex-between w-full">
              <p className="p-medium-14 md:p-medium-16 text-grey-600">
                github-username copilot-username
              </p>
            </div>
          </div>
        </div>




        <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
          <Link
            href="/assets/images/test.png"
            className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            style={{ backgroundImage: `url(/assets/images/test.png)` }}
          >
            <Image
              src="/assets/images/test.png"
              alt="Sample Event Title"
              layout="fill"
              objectFit="cover"
              className="opacity-0"
            />
          </Link>

          <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
            <p className="p-medium-16 p-medium-18 text-grey-500">
              {new Date('2024-06-05T00:00:00Z').toLocaleDateString()}
            </p>

            <Link href="#">
              <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">Sample Event Title</p>
            </Link>

            <div className="flex-between w-full">
              <p className="p-medium-14 md:p-medium-16 text-grey-600">
                2 check
              </p>
            </div>
          </div>
        </div>



        <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
          <Link
            href="/assets/images/test.png"
            className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            style={{ backgroundImage: `url(/assets/images/test.png)` }}
          >
            <Image
              src="/assets/images/test.png"
              alt="Sample Event Title"
              layout="fill"
              objectFit="cover"
              className="opacity-0"
            />
          </Link>

          <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
            <p className="p-medium-16 p-medium-18 text-grey-500">
              {new Date('2024-06-05T00:00:00Z').toLocaleDateString()}
            </p>

            <Link href="#">
              <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">Sample Event Title</p>
            </Link>

            <div className="flex-between w-full">
              <p className="p-medium-14 md:p-medium-16 text-grey-600">
                2 check
              </p>
            </div>
          </div>
        </div>




        
      </div>
    </div>
    </>
  );
};

export default Card;
