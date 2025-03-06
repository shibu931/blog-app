import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ image, title, date, description, slug }) => {
  return (
    <div className="bg-white border border-gray-300 shadow-md shadow-gray-300 overflow-hidden flex flex-col">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title || "Blog Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col">
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        {date && <p className="text-sm text-gray-500">{date}</p>}
        <hr className='border-gray-300 my-2'/>
        {description && <p className="text-gray-700 flex-1">{description}</p>}
        <Link href={"blogs/"+slug} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 text-sm hover:cursor-pointer">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;