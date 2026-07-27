import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const getCategoryTitle = (categoryValue) => {
  const categoryMap = {
    'mansion': 'Biệt thự',
    'urbanHouse': 'Nhà phố',
    'countryHouse': 'Nhà vườn',
    'neoClassicHouse': 'Nhà tân cổ điển',
    'serviceBuilding': 'Công trình dịch vụ',
    'generalNews': 'Cẩm nang xây dựng',
    'activities': 'Kiến thức xây dựng'
  };
  return categoryMap[categoryValue] || categoryValue;
};