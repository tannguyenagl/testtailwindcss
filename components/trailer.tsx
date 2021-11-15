import { Info, Play } from "phosphor-react";
import { useWindowScrollMatch } from "../hooks/useWindowScrollMatch";
import classnames from "classnames";

const Trailer = () => {
  const match = useWindowScrollMatch(50);

  return (
    <div className="relative w-[100%] h-[100vh] bg-cover bg-hero-pattern">
      <div
        className={classnames(
          "transition-all duration-200 overflow-hidden max-w-[70%] absolute left-[50px] bottom-[150px] font-bold text-white text-title",
          {
            'w-[500px]': match,
            'w-[0px]':!match,
            'h-[120px]':match,
            'h-[0px]':!match
          }
        )}
      >
        <p>Phim Hài</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          eaque, consequuntur harum maxime doloremque voluptates nesciunt amet
          distinctio non veritatis doloribus? Beatae quae sunt suscipit
          provident labore perspiciatis tempore cumque.
        </p>
      </div>
      <button className="transition-all duration-300 absolute left-[50px] bottom-[50px] w-[156px] h-[48px] bg-white text-black flex items-center justify-center	border-[1px] hover:bg-black hover:text-white">
        <div className="mr-[5px]">
          <Play size={20} />
        </div>
        <p className="text-[20px]">Xem ngay</p>
      </button>

      <button className="transition-all duration-300 absolute left-[256px] bottom-[50px] w-[136px] h-[48px] text-black flex items-center justify-center	border-[1px] hover:opacity-80">
        <div className="mr-[5px]">
          <Info color="white" size={20} />
        </div>
        <p className="text-[20px] text-white">Chi tiết</p>
      </button>
    </div>
  );
};

export default Trailer;
