import { AvatarGroup, Image, User } from "@nextui-org/react";

const DetailsPanel = ({ DATA }) => {
  return (
    <div className="relative md:max-w-[40vw] p-5 overflow-hidden flex flex-col items-center  w-screen">
      <Image
        removeWrapper
        className="m-0 w-[100%] blur-md opacity-10 h-[350px] rounded-none  z-50 object-cover top-0 left-0 absolute "
        src={DATA.data.song_art_image_url}
      />
      <Image
        className=" w-[300px]  m-5 h-[300px] z-50 mx-auto object-cover"
        src={DATA.data.header_image_url}
      />
      <p className="relative mx-2 mt-14 text-[1.2rem] md:text-[1.5rem] font-bold">
        {DATA.data.title_with_featured}
      </p>
      <p>
        <span className="font-bold text-slate-400">Released date</span> &nbsp;
        {DATA.data.release_date_for_display}
      </p>
      <User
        className="p-1 my-4"
        name={DATA.data.primary_artist.name}
        description="Artist"
        avatarProps={{
          size: "lg",
          src: DATA.data.primary_artist.image_url,
        }}
      />
    </div>
  );
};

export default DetailsPanel;
