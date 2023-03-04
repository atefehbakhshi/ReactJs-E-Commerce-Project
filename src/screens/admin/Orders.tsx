import { Icon } from "@iconify/react";
import { useState } from "react";
import { OrdersTable } from "../../components/tables";

const orderssList = [
  {
    username: "پدرام",
    lastname: "صادقی",
    address: "تهران میدان آزادی ",
    phone: "09032855606",
    expectAt: 1648771200000,
    products: [
      {
        id: 4,
        name: "MacBook Air MGN63 2020",
        count: "1",
        price: "10275000",
        image: "b7b1754d9e82674138512445576bba26",
      },
      {
        id: 3,
        name: "MacBook Air MGN63 2020",
        count: "2",
        price: "10275000",
        image: "b7b1754d9e82674138512445576bba26",
      },
    ],
    prices: 10275000,
    delivered: "false",
    createdAt: 1646158398160,
    id: 1,
  },
  {
    username: "پدرام",
    lastname: "صادقی",
    address: "تهران میدان آزادی ",
    phone: "09032855606",
    expectAt: 1648771200000,
    products: [
      {
        id: 4,
        name: "MacBook Air MGN63 2020",
        count: "1",
        price: "10275000",
        image: "b7b1754d9e82674138512445576bba26",
      },
      {
        id: 3,
        name: "MacBook Air MGN63 2020",
        count: "2",
        price: "10275000",
        image: "b7b1754d9e82674138512445576bba26",
      },
    ],
    prices: 10275000,
    delivered: "false",
    createdAt: 1646158398160,
    id: 2,
  },
];

export const Orders = () => {
  const [isDelivered, setIsDelivered] = useState(false);

  return (
    <main className="p-3">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">مدیریت سفارشات</h1>
        <div className="flex gap-2">
          <div
            className="flex items-center gap-1 border-l border-[#afafaf50] px-2"
            onClick={() => setIsDelivered(false)}
          >
            {isDelivered ? (
              <Icon icon="material-symbols:circle-outline" color="#525252" />
            ) : (
              <Icon
                icon="material-symbols:check-circle-outline"
                color="#41c1c6"
              />
            )}
            <span>در انتظار تحویل</span>
          </div>
          <div
            className="flex items-center gap-1"
            onClick={() => setIsDelivered(true)}
          >
            {isDelivered ? (
              <Icon
                icon="material-symbols:check-circle-outline"
                color="#41c1c6"
              />
            ) : (
              <Icon icon="material-symbols:circle-outline" color="#525252" />
            )}
            <span>تحویل شده</span>
          </div>
        </div>
      </header>
      <div className="px-3 py-8 max-w-xl mx-auto">
        <OrdersTable list={orderssList} />
      </div>
      <div className="flex justify-center gap-1">
        <span className="bg-gray-200 p-1 text-center border rounded-full w-6 h-6">
          1
        </span>
        <span className="bg-gray-200 p-1 text-center border rounded-full w-6 h-6">
          2
        </span>
        <span className="bg-gray-200 p-1 text-center border rounded-full w-6 h-6">
          3
        </span>
      </div>
      <div></div>
    </main>
  );
};
