export interface Drink {
  id: string;
  name: string;
  chineseName?: string;
  description: string;
  day?: string;
  image?: string;
  category: 'daily-special' | 'regular';
}

export const dailySpecials: Drink[] = [
  {
    id: 'tuesday-special',
    name: 'Lemongrass w/ Green Apple Juice',
    chineseName: '香茅青苹果',
    description: 'Refreshing blend of aromatic lemongrass and crisp green apple',
    day: 'Tuesday',
    category: 'daily-special',
    image: '/lemongrass.png',
  },
  {
    id: 'wednesday-special',
    name: 'Chrysanthemum w/ Luohan Tea',
    chineseName: '菊花罗汉果',
    description: 'Traditional cooling tea combining chrysanthemum flowers and monk fruit',
    day: 'Wednesday',
    category: 'daily-special',
    image: '/lohan.png',
  },
  {
    id: 'thursday-special',
    name: 'Pear w/ Fritillary Bulb Homemade Drink',
    chineseName: '川贝梨水',
    description: 'Soothing herbal drink perfect for clearing heat and moistening the lungs',
    day: 'Thursday',
    category: 'daily-special',
    image: '/pear.png',
  },
  {
    id: 'friday-special',
    name: 'Sugarcane w/ Barley Homemade Drink',
    chineseName: '竹蔗薏米水',
    description: 'Sweet and naturally cooling beverage with barley goodness',
    day: 'Friday',
    category: 'daily-special',
    image: '/barley.png',
  },
  {
    id: 'weekend-special',
    name: 'Ginseng w/ Chrysanthemum Tea',
    chineseName: '洋参菊花茶',
    description: 'Energizing and balancing tea blend for weekend relaxation',
    day: 'Saturday/Sunday',
    category: 'daily-special',
    image: '/chrysanthemum.png',
  },
];

export const regularDrinks: Drink[] = [
  {
    id: 'winter-melon',
    name: 'Winter Melon Tea Brick',
    chineseName: '冬瓜茶',
    description: 'Classic homemade winter melon tea with rich, sweet flavor',
    category: 'regular',
    image: '/wintermelon.png',
  },
  {
    id: 'hawthorn',
    name: 'Hawthorn & Honey Dates Drink',
    chineseName: '山楂蜜枣',
    description: 'Tangy and sweet drink that aids digestion',
    category: 'regular',
    image: '/hawthorn.png',
  },
  {
    id: 'honey-lemon',
    name: 'Honey Lemon Drink',
    chineseName: '蜂蜜柠檬',
    description: 'Refreshing and vitamin-packed citrus beverage',
    category: 'regular',
    image: '/honeylemon.png',
  },
  {
    id: 'lime-plum',
    name: 'Fresh Lime & Sour Plum Drink',
    chineseName: '酸柑水',
    description: 'Tangy and thirst-quenching traditional favorite',
    category: 'regular',
    image: '/lime.png',
  },
  {
    id: 'lemon-tea',
    name: 'Lemon Tea',
    chineseName: '柠檬茶',
    description: 'Simple and refreshing tea with a citrus twist',
    category: 'regular',
    image: '/lemontea.png',
  },
];

export function getTodaySpecial(): Drink | null {
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.

  switch (today) {
    case 2: // Tuesday
      return dailySpecials[0];
    case 3: // Wednesday
      return dailySpecials[1];
    case 4: // Thursday
      return dailySpecials[2];
    case 5: // Friday
      return dailySpecials[3];
    case 0: // Sunday
    case 6: // Saturday
      return dailySpecials[4];
    default:
      return null; // Monday - no special
  }
}

export function getDayName(dayNum: number): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dayNum];
}
