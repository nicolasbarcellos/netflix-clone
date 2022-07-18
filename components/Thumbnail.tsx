import Image from "next/image";
import { thumbnails } from "../constants/imageUrl";
import { ResponsesData } from "../typings";

interface ThumbnailProps {
  movie: ResponsesData;
}

function Thumbnail({ movie }: ThumbnailProps) {
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`${thumbnails}${movie.backdrop_path || movie.poster_path}`}
        layout="fill"
        className="rounded-sm object-cover md:rounded overflow-hidden"
      />
    </div>
  );
}

export default Thumbnail;
