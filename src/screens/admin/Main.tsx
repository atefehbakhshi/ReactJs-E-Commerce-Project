import { useEffect, useState } from "react";
import { fetchOrdersDataForCharts } from "../../api/services";
import { OrdersChart } from "../../components/charts";

const getData = async () => {
  const res = await fetchOrdersDataForCharts();
  return res.data;
};

const assortment = (res: []) => {
  // calculate remain time until 00:00
  const h = (24 - new Date().getHours()) * 60 * 60 * 1000;
  const m = (60 - new Date().getMinutes()) * 60 * 1000;
  const s = (60 - new Date().getSeconds()) * 1000;
  const ms = 1000 - new Date().getMilliseconds();
  const remain = h + m + s + ms;
  const sevenDaysAgo = Date.now() + remain + -7 * 24 * 60 * 60 * 1000;

  const data = {
    sun: [],
    mon: [],
    thu: [],
    wed: [],
    tue: [],
    fri: [],
    sat: [],
  };

  const listOfSevenDaysAgo = res.filter(
    ({ createdAt }) => createdAt > sevenDaysAgo
  );

  listOfSevenDaysAgo.forEach((i) => {
    switch (new Date(i.createdAt).getDay()) {
      case 0:
        data.sun.push(i);
        break;
      case 1:
        data.mon.push(i);
        break;
      case 2:
        data.thu.push(i);
        break;
      case 3:
        data.wed.push(i);
        break;
      case 4:
        data.tue.push(i);
        break;
      case 5:
        data.fri.push(i);
        break;
      case 6:
        data.sat.push(i);
        break;
      default:
        break;
    }
  });

  return data;
};

const calculateCount = (list) => {
  let totalCount = 0;
  list.forEach((i) => {
    i.products.forEach((i) => (totalCount += i.count));
  });
  return totalCount;
};

const calculatePrice = (list) => {
  let totalPrice = 0;
  list.forEach((i) => (totalPrice += i.prices));
  return totalPrice;
};

export const Main = () => {
  const [productCount, setProductCount] = useState([]);
  const [productPrice, setProductPrice] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      const data = assortment(res);
      const countList = [
        calculateCount(data.sat),
        calculateCount(data.sun),
        calculateCount(data.mon),
        calculateCount(data.thu),
        calculateCount(data.wed),
        calculateCount(data.tue),
        calculateCount(data.fri),
      ];
      const totalPriceList = [
        calculatePrice(data.sat),
        calculatePrice(data.sun),
        calculatePrice(data.mon),
        calculatePrice(data.thu),
        calculatePrice(data.wed),
        calculatePrice(data.tue),
        calculatePrice(data.fri),
      ];
      setProductCount(countList);
      setProductPrice(totalPriceList);
    });
  }, []);

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <OrdersChart chartDate={productCount} title="تعداد سفارش روزانه " />
        <OrdersChart
          chartDate={productPrice}
          title="جمع مبلغ فروش روزانه (تومان)"
        />
      </div>
    </div>
  );
};
