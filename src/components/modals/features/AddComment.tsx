import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  editCommentsById,
  fetchCommentsById,
} from "../../../api/services";
import { changeStatus } from "../../../store/slices/comment-slice";

import { setShowModal, getId } from "../../../store/slices/modal-slice";
import { CommentsI } from "../../../type/interface";
import { AppDispatch, RootState } from "../../../type/type";
import { Button } from "../../buttons";

const startCreator = (num: number) => {
  let list = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      list.push({ value: i, icon: "mdi:star" });
    } else {
      list.push({ value: i, icon: "mdi:star-outline" });
    }
  }
  return list;
};

export const AddComment = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tempId } = useSelector((state: RootState) => state.modal);

  const [star, setStar] = useState(1);
  const [starList, setStarList] = useState<
    [] | { value: number; icon: string }[]
  >([]);

  useEffect(() => {
    setStarList(startCreator(star));
  }, [star]);

  const addCemmentHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user, description, recommend } = e.target;

    const comment: CommentsI = {
      userName: user.value,
      stars: star,
      comment: description.value,
      recommend: recommend.checked,
      id: Math.random(),
    };

    let commentsList = [];
    const res = await fetchCommentsById(tempId);
    if (res.data[0]) {
      commentsList = [comment, ...res.data[0].commentsList];
      editCommentsById(tempId, { commentsList });
    } else {
      commentsList = [comment];
      addComment({ id: tempId, commentsList });
    }
    dispatch(setShowModal(false));
    dispatch(getId(0));
    dispatch(changeStatus("success"));
  };

  return (
    <form
      onSubmit={addCemmentHandler}
      className="flex flex-col gap-3 sm:w-3/4 mx-auto"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="user" className="font-semibold">
          نام:
        </label>
        <input
          type="text"
          id="user"
          className="bg-gray-100 rounded p-2"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="font-semibold">
          دیدگاه :
        </label>
        <textarea
          id="description"
          rows={3}
          className="bg-gray-100 rounded p-2"
          required
        ></textarea>
      </div>
      <div className="flex flex-row-reverse justify-end gap-1">
        <label htmlFor="recommend">این محصول را به دیگران پیشنهاد می کنم</label>
        <input
          type="checkbox"
          id="recommend"
          className="bg-gray-100 rounded p-2"
        />
      </div>
      <div className="flex justify-between">
        <p className="font-semibold">امتیاز</p>
        {starList.length !== 0 && (
          <div className="flex flex-row-reverse">
            {starList.map((i) => (
              <Icon
                key={i.value}
                onClick={() => setStar(i.value)}
                icon={i.icon}
                width="26"
                color="orange"
              />
            ))}
          </div>
        )}
      </div>
      <Button bg="bg-[#ade5ad]" hover="hover:bg-[#bdeabd]">
        ذخیره
      </Button>
    </form>
  );
};
