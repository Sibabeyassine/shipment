import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CommentProps {
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = comment.length > 150;

  if (!comment) return null;

  return (
    <div className="mt-2 text-sm text-gray-600">
      {shouldTruncate && !isExpanded ? (
        <>
          <p className="line-clamp-3">{comment}</p>
          <button
            onClick={() => setIsExpanded(true)}
            className="text-blue-600 hover:text-blue-800 mt-1 flex items-center gap-1"
          >
            View All <ChevronDown className="w-4 h-4" />
          </button>
        </>
      ) : (
        <>
          <p>{comment}</p>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(false)}
              className="text-blue-600 hover:text-blue-800 mt-1 flex items-center gap-1"
            >
              View Less <ChevronUp className="w-4 h-4" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Comment;