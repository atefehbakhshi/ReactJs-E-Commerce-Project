import empty from "/img/list/empty.png";

export const EmptyList = () => {
  return (
    <div className="my-8 min-h-[50vh] relative flex justify-center items-center">
      <img src={empty} alt="end of list" className="w-3/4 max-w-full" />
      <p className="text-center text-black mb-8 absolute top-[40%]">
        لیست خالی می باشد .
      </p>
    </div>
  );
};
