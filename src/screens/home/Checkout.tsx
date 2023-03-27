import { Button } from "../../components/buttons";
import Input from "../../components/input";
import { useCheckout } from "../../hooks";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import { useEffect, useState } from "react";
import * as shamsi from "shamsi-date-converter";

export const Checkout = () => {
  const { register, handleSubmit, handleAddOrder, errors, getDate } =
    useCheckout();

  const [value, setValue] = useState<{
    format?: string;
    persian?: string;
    date?: string;
  }>({
    format: "MM/DD/YYYY",
  });
  const [hasDate, setHasDate] = useState(false);
  const [isValidDate, setIsValidDate] = useState<null | boolean>(null);

  const convert = (
    date: DateObject | DateObject[],
    format: string | undefined = value.format
  ) => {
    let object = { date, format };
    setValue({
      persian: new DateObject(object).convert(persian, persian_en).format(),
    });
    setHasDate(true);
  };

  useEffect(() => {
    // shamsi.jalaliToGregorian((jy: any, jm: any, jd: any))
    if (hasDate) {
      const selectedDate = shamsi
        .jalaliToGregorian(
          +value.persian.split("/")[0],
          +value.persian.split("/")[1],
          +value.persian.split("/")[2]
        )
        .join("/");
      if (new Date(`${selectedDate}`).getTime() > Date.now()) {
        getDate(selectedDate);
        setIsValidDate(true);
      } else {
        setIsValidDate(false);
      }
    }
  }, [value, isValidDate]);

  return (
    <div className="flex justify-center py-8 min-h-[70vh] items-center sm:min-h-[90vh]  form-container">
      <form
        onSubmit={handleSubmit(handleAddOrder)}
        className="flex flex-col gap-8 border max-w-xl mx-auto bg-white p-4 rounded form-shadow"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            label="نام"
            id="name"
            type="text"
            error={errors.name?.message}
            validation={{ ...register("name") }}
          />
          <Input
            label="نام خانوادگی"
            id="family"
            type="text"
            error={errors.family?.message}
            validation={{ ...register("family") }}
          />
          <Input
            label="آدرس"
            id="family"
            type="text"
            error={errors.address?.message}
            validation={{ ...register("address") }}
          />
          <Input
            label="تلفن همراه"
            id="phone"
            type="phone"
            error={errors.phone?.message}
            validation={{ ...register("phone") }}
          />

          <div className="flex flex-col gap-1">
            <label className="font-semibold">تاریخ تحویل :</label>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              value={value.date}
              onChange={convert}
              required
              style={{
                backgroundColor: "#f3f4f6",
                border: "none",
                padding: "1.15rem 0.5rem",
                borderRadius: "0.25rem",
              }}
            />
            {isValidDate === false ? (
              <p className="text-red-400 font-light text-xs">
                تاریخ وارد شده صحبح نمی باشد .
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 md:mx-auto">
          <Button
            bg="bg-[#ade5ad]"
            hover="hover:bg-[#bdeabd]"
            disabled={isValidDate ? false : true}
          >
            پرداخت
          </Button>
        </div>
      </form>
    </div>
  );
};
