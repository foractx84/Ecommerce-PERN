import { Star } from 'lucide-react';
import generateStars from '../../../utils/generateStars';

function RatingStars({ rating = 0, count = 0 }) {
  const stars = generateStars(rating);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {stars.map((star, index) => {
          if (star === 'full') {
            return (
              <Star
                key={index}
                size={16}
                className="fill-[#FFAD33] text-[#FFAD33]"
              />
            );
          }

          if (star === 'half') {
            return (
              <div key={index} className="relative h-4 w-4">
                <Star
                  size={16}
                  className="absolute left-0 top-0 fill-gray-300 text-gray-300"
                />

                <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
                  <Star
                    size={16}
                    className="fill-[#FFAD33] text-[#FFAD33]"
                  />
                </div>
              </div>
            );
          }

          return (
            <Star
              key={index}
              size={16}
              className="fill-gray-300 text-gray-300"
            />
          );
        })}
      </div>

      <span className="text-sm text-black/50">({count})</span>
    </div>
  );
}

export default RatingStars;