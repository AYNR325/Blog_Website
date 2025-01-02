
import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredimage, content, $createdAt }) {
  const strippedContent = content.replace(/<[^>]+>/g, ''); // Remove HTML tags
  const truncatedContent =
    strippedContent.length > 150 ? strippedContent.substring(0, 150) + '...' : strippedContent;

    const createdDate = new Date($createdAt);
      const formattedDate = createdDate.toLocaleString('en-US', {
        year: 'numeric', // 2025
        month: 'short',  // Jan
        day: 'numeric',  // 1
        hour: '2-digit', // 12
        minute: '2-digit' // 30
      });

  return (
    <Link to={`/post/${$id}`} className="w-full">
      <div className="w-full bg-[#B09E99] rounded-xl p-4 flex flex-col justify-between h-[325px]"> {/* Fixed height */}
        {/* Image Container */}
        <div className="w-full h-[175px] flex justify-center items-center bg-gray-200 rounded-md overflow-hidden"> {/* Uniform image container */}
          <img
            src={appwriteService.getFilePreview(featuredimage)}
            alt={title}
            className="w-full h-full object-cover" // Ensure full visibility
          />
        </div>
        <h2 className="text-xl font-bold text-white  line-clamp-2 ">{title}</h2> {/* Limit title to 2 lines */}
        <div className="text-white text-sm  line-clamp-2 ">{truncatedContent}</div> {/* Limit content to 3 lines */}
        <div className="text-gray-600 text-[12px] text-right ">{formattedDate}</div> {/* Display date */}
      </div>
    </Link>
  );
}

export default PostCard;
