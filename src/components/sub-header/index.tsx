const SubHeader = ({ text }) => {
  return (
    <div>
      <header className="flex justify-center mb-3 font-semibold sub-header">
        <h1>{text}</h1>
      </header>
      <div className="flex justify-between bg-red-100 w-3/4 py-2 px-1 md:px-2 rounded mx-auto max-w-xl">
        <select name="size" className="w-[30%]">
          <option value="s">سایز</option>
          <option value="s">S</option>
          <option value="s">S</option>
          <option value="s">S</option>
          <option value="s">S</option>
        </select>
        <select name="model" className="w-[30%]">
          <option value="s">مدل</option>
          <option value="s">S</option>
          <option value="s">S</option>
          <option value="s">S</option>
          <option value="s">S</option>
        </select>
        <select name="price" className="w-[30%]">
          <option value="s">قیمت</option>
          <option value="s">بیشترین</option>
          <option value="s">کمترین</option>
        </select>
      </div>
    </div>
  );
};

export default SubHeader;
