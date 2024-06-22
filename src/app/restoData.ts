interface IRestoData {
  id: number;
  categories: string;
  name: string;
  price: string;
  isOpen: string;
}

export const restoData: IRestoData[] = [
  {
    id: 1,
    categories: "Japanese",
    name: "Sushi House",
    price: "$",
    isOpen: "OPEN NOW",
  },
  {
    id: 2,
    categories: "Italian",
    name: "Pizza Paradiso",
    price: "$$",
    isOpen: "CLOSED",
  },
  {
    id: 3,
    categories: "Thai",
    name: "Thai Star",
    price: "$$",
    isOpen: "OPEN NOW",
  },
  {
    id: 4,
    categories: "Seafood",
    name: "Sea Breeze",
    price: "$$",
    isOpen: "CLOSED",
  },
  {
    id: 5,
    categories: "Mexican",
    name: "Taqueria Del Sol",
    price: "$$",
    isOpen: "OPEN NOW",
  },
  {
    id: 6,
    categories: "American",
    name: "McDonalds",
    price: "$",
    isOpen: "OPEN NOW",
  },
  {
    id: 7,
    categories: "American",
    name: "Wok N Roll",
    price: "$$",
    isOpen: "CLOSED",
  },
  {
    id: 8,
    categories: "American",
    name: "Pho 101",
    price: "$$",
    isOpen: "OPEN NOW",
  },
  {
    id: 9,
    categories: "Italian",
    name: "Le Relais",
    price: "$$$",
    isOpen: "CLOSED",
  },
  {
    id: 10,
    categories: "Japanese",
    name: "Tandoori Nights",
    price: "$$$",
    isOpen: "OPEN NOW",
  },
  //   {
  // id : 11,
  // categories: "Burger",
  //     name: "Burger King",
  //     price: "$",
  //     isOpen: "CLOSED",
  //   },
  //   {
  // id : 12,
  // categories: "Breakfast",
  //     name: "Panera Bread",
  //     price: "$$",
  //     isOpen: "OPEN NOW",
  //   },
  //   {
  // id : 13,
  // categories: "Sandwich",
  //     name: "Subway",
  //     price: "$",
  //     isOpen: "CLOSED",
  //   },
];
