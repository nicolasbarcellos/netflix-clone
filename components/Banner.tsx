import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/imageUrl";
import { ResponsesData } from "../typings";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

interface BannerProps {
  netflixOriginals: ResponsesData[];
}

function Banner({ netflixOriginals }: BannerProps) {
  const [movie, setMovie] = useState<ResponsesData | null>(null);
  const randomNumber = Math.floor(Math.random() * netflixOriginals.length);

  useEffect(() => {
    setMovie(netflixOriginals[randomNumber]);
  }, []);

  return (
    <section
      className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] 
      lg:justify-end lg:pb-12 "
    >
      <div className="absolute top-0 right-0 -z-10 left-0 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.overview}
          objectFit="cover"
          layout="fill"
          priority
        />
      </div>
      <div className="space-y-4 ">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-7xl">
          {movie?.title || movie?.original_title}
        </h1>
        <p
          className="max-w-xs text-xs md:max-w-lg md:text-lg 
        lg:max-w-2xl lg:text-2xl text-shadow-md"
        >
          {movie?.overview}
        </p>
        <div className="flex items-center space-x-4">
          <button className="bannerBtn flex items-center space-x-2 bg-white text-black">
            <BsFillPlayFill className="w-7 h-7 md:w-8 md:h-8" />
            <span>Play</span>
          </button>
          <button className="bannerBtn flex items-center space-x-2 text-white bg-gray-500">
            <AiOutlineInfoCircle className="w-7 h-7 md:w-8 md:h-8" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
