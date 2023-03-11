import finishingList from "/img/list/finish.avif";

export const EndOfList = () => {
  return (
    <div className="my-8">
      <p className="text-center text-black mb-8">لیست به پایان رسید.</p>
      <img src={finishingList} alt="end of list" className="max-w-full" />
    </div>
  );
};
