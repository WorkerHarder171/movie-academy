import MainRoom from "@/public/facility/main-room.png";
import DesignRoom from "@/public/facility/design-room.png";
import MeetingRoom from "@/public/facility/meeting-room.png";
import ProgrammerRoom from "@/public/facility/programmer-room.png";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const facilities = [
  {
    image: MainRoom,
    title: "Main Room",
  },
  {
    image: DesignRoom,
    title: "Design Room",
  },
  {
    image: MeetingRoom,
    title: "Meeting Room",
  },
  {
    image: ProgrammerRoom,
    title: "Programmer Room",
  },
];

export const ToolDesktop = () => {
  return (
    <section>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="rounded-3xl overflow-hidden h-64 border-[6px] border-hijau bg-gray-50 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Toolmobile = () => {
  return (
    <section>
      <div className="container mx-auto my-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex basis-[45%] gap-6 flex-col items-center">
            <Splide
              options={{
                type: "loop",
                interval: 4000,
                perPage: 1,
                perMove: 1,
                gap: "0.5rem",
                drag: "free",
                focus: "center",
                pagination: false,
                autoplay: true,
                arrows: true,
                speed: 1500,
              }}
              className="w-full max-w-xs mx-auto custom-splide-arrows"
            >
              {facilities.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="flex flex-col gap-1 px-3 py-6">
                    <div className="rounded-3xl w-full overflow-hidden h-52 border-[6px] border-hijau bg-gray-50 relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-center text-bodyTextLight">
                      {item.title}
                    </h3>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};
