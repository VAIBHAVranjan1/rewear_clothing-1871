export type Item = {
  id: number;
  title: string;
  image: string;
};

export const listings: Item[] = [
  { id: 1, title: "MacBook Air", image: "/macbook.jpg" },
  { id: 2, title: "iPhone 14", image: "/iphone.jpg" },
  { id: 3, title: "Gaming Chair", image: "/chair.jpg" },
  { id: 4, title: "Smartwatch", image: "/watch.jpg" },
];

export const purchases: Item[] = [
  { id: 1, title: "Headphones", image: "/headphones.jpg" },
  { id: 2, title: "Keyboard", image: "/keyboard.jpg" },
  { id: 3, title: "Monitor", image: "/monitor.jpg" },
  { id: 4, title: "Mouse", image: "/mouse.jpg" },
];
