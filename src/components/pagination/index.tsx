const setPagination = (page, list, dataLength) => {
  let paginationList = [];

  if (list.length < dataLength) {
    paginationList = [page - 2, page - 1, page];
  } else {
    paginationList = [page - 2, page - 1, page, page + 1];
  }
  return paginationList;
};

const Pagination = ({ page, list, OnSetPage, dataLength }) => {
  const pagination = setPagination(page, list, dataLength);

  return (
    <div className="flex justify-center gap-1">
      {pagination.map((pageNo, index) => {
        // do not display 0 or less than 0
        if (pageNo <= 0) return;
        // specify selected number
        let bg = "bg-gray-200";
        if (index === 2) {
          bg = "bg-[#41c1c6]";
        }
        return (
          <span
            className={`${bg} p-1 text-center border rounded-full w-6 h-6`}
            onClick={() => OnSetPage(pageNo)}
            key={pageNo}
          >
            {pageNo}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
