import { PaginationI } from "../../type/interface";
import { PaginationT } from "../../type/type";

const setPagination: PaginationT = (totalCount, dataPerPage) => {
  const pageCount = Math.ceil(totalCount / dataPerPage);
  let paginationList = [];

  for (let i = 1; i <= pageCount; i++) {
    paginationList.push(i);
  }

  return paginationList;
};

const Pagination = ({
  page,
  totalCount,
  OnSetPage,
  dataPerPage,
}: PaginationI) => {
  const pagination = setPagination(totalCount, dataPerPage);

  return (
    <div className="flex justify-center gap-1">
      {pagination.map((pageNo: number, index) => {
        if (
          index + 1 === page - 1 ||
          index + 1 === page ||
          index + 1 === page + 1
        ) {
          return (
            <span
              className={`${
                pageNo === page ? "bg-[#41c1c6]" : "bg-gray-200"
              } p-1 text-center border rounded-full w-6 h-6`}
              onClick={() => OnSetPage(pageNo)}
              key={pageNo}
            >
              {pageNo}
            </span>
          );
        }
      })}
    </div>
  );
};

export default Pagination;
