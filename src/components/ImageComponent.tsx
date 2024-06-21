export default function ImageCard(props) {
  return (
    <div className="h-full w-full ">
      <img
        src={
          "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt=""
        className="w-full h-full object-cover rounded-[28px] object-center"
      />
    </div>
  );
}
