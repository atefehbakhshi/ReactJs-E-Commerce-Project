import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsById } from "../../api/services";
import { changeStatus } from "../../store/slices/comment-slice";
import {
  getId,
  setModalName,
  setShowModal,
} from "../../store/slices/modal-slice";
import { CommentsI } from "../../type/interface";
import { RootState } from "../../type/type";
import { Button } from "../buttons";

const StarCreators = (num: number) => {
  let list = [];
  for (let i = 1; i <= num; i++) {
    list.push(num * Math.random());
  }
  return list;
};

const ProductCamment = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const [list, setList] = useState<null | CommentsI[]>(null);
  const [score, setScore] = useState(0);
  const [cemmentsCount, setCommentsCount] = useState(0);
  const { status } = useSelector((state: RootState) => state.comments);

  useEffect(() => {
    fetchCommentsById(id).then((res) => {
      if (res.data.length > 0) {
        const comments = res.data[0].commentsList;
        setList(comments);

        const numberOfComments = comments.length;
        setCommentsCount(numberOfComments);

        // calculate score
        let totalScore = 0;
        comments.forEach((item: CommentsI) => {
          totalScore += item.stars;
        });
        totalScore = +(totalScore / numberOfComments).toFixed(2);
        setScore(totalScore);
      }
    });
  }, [id, status]);

  const addComment = () => {
    dispatch(setShowModal(true));
    dispatch(setModalName("addComment"));
    dispatch(getId(id));
    dispatch(changeStatus("pending"));
  };
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[#5c5c5c] text-xl font-semibold">
            دیدگاه کاربران
          </h1>
          {list && (
            <div className="flex items-center gap-2">
              <p className="text-[#717171] text-lg">
                <span className="text-[#5c5c5c] text-xl font-semibold">
                  {score.toLocaleString("fa")}{" "}
                </span>
                از ۵
              </p>
              <p className="text-[#717171] text-xs ">
                از مجموع{" "}
                <span className="font-bold text-base">
                  {cemmentsCount.toLocaleString("fa")}
                </span>{" "}
                امتیاز کاربران
              </p>
            </div>
          )}
        </div>
        <Button onClick={addComment}>
          {list ? " شما هم نظر خود را بنویسید !" : "اولین نظر را بنویسید !"}
        </Button>
      </div>
      <div className="py-4 max-w-[75rem]">
        {list &&
          list.map((item) => (
            <div
              key={item.id}
              className="flex flex-col-reverse gap-4 items-start border-t py-4 sm:flex-row sm:justify-between"
            >
              <div className="flex gap-2 md:gap-4 items-start sm:w-[65%]">
                <span
                  className={`flex items-center justify-center w-[1.5rem] h-[1.5rem] p-2 rounded-sm text-xl text-white ${
                    item.stars < 3 ? "bg-[#ff7588]" : "bg-[#16d39a]"
                  }`}
                >
                  {item.stars.toLocaleString("fa")}
                </span>
                <div>
                  <div className="flex gap-2 ">
                    <p className="font-bold mb-1">{item.userName}</p>
                    <div className="flex">
                      {StarCreators(item.stars).map((item) => (
                        <Icon key={item} icon="mdi:star" color="orange" />
                      ))}
                    </div>
                  </div>
                  <p>{item.comment} </p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                {item.recommend ? (
                  <>
                    <p className="text-xs text-[#16d39a]">
                      خرید این محصول را پیشنهاد می کنم
                    </p>
                    <Icon icon="uiw:like-o" color="#16d39a" />
                  </>
                ) : (
                  <>
                    <p className="text-xs text-[#ff7588]">
                      خرید این محصول را پیشنهاد نمی کنم
                    </p>
                    <Icon icon="uiw:dislike-o" color="#ff7588" />
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductCamment;
