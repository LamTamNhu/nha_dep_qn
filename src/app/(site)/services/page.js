import Banner from '@/components/ui/banner';
import ServiceSections from '@/components/ServiceSections';
import { client } from '@/sanity/lib/client';
import { servicesPageQuery } from '@/sanity/lib/queries';

const fallbackServices = [
  {
    id: 1,
    title: "Thiết kế thi công trọn gói",
    description: "Cung cấp giải pháp toàn diện từ thiết kế đến thi công, đảm bảo tiến độ và chất lượng.",
    image: "https://nhadepquangnam.vn/wp-content/uploads/2025/06/Ban-sao-cua-File-hinh-vuong-1-1000x1000.jpg",
    alt: "Thiết kế thi công trọn gói",
  },
  {
    id: 2,
    title: "Thiết kế thi công nội thất",
    description: "Tạo nên không gian sống hoàn hảo với nội thất tinh tế và hiện đại.",
    image: "/thumbnails/2.jpg",
    alt: "Thiết kế thi công nội thất",
  },
  {
    id: 3,
    title: "Thiết kế kiến trúc",
    description: "Thiết kế kiến trúc sáng tạo, phù hợp với nhu cầu và phong cách riêng.",
    image: "/thumbnails/3.jpg",
    alt: "Thiết kế kiến trúc",
  },
  {
    id: 4,
    title: "Thi công phần thô",
    description: "Xây dựng phần thô chắc chắn, đúng kỹ thuật và chuẩn bị cho hoàn thiện.",
    image: "/thumbnails/4.jpg",
    alt: "Thi công phần thô",
  },
  {
    id: 5,
    title: "Thi công hoàn thiện",
    description: "Hoàn thiện công trình với chi tiết cao, mang lại không gian sống lý tưởng.",
    image: "/thumbnails/5.jpg",
    alt: "Thi công hoàn thiện",
  },
  {
    id: 6,
    title: "Thi công nhà đã có bảng vẽ",
    description: "Thực hiện thi công dựa trên bản vẽ sẵn, đảm bảo đúng thiết kế ban đầu.",
    image: "/thumbnails/6.jpg",
    alt: "Thi công nhà đã có bảng vẽ",
  },
];

export default async function ServicesPage() {
  const data = await client.fetch(servicesPageQuery);
  const services = data?.services && data.services.length > 0 ? data.services : fallbackServices;

  return (
    <div className="min-h-screen bg-[#272727]">
      <Banner title="DỊCH VỤ" />
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <ServiceSections services={services} />
      </div>
      <div className="h-70 bg-[#272727]" />
    </div>
  );
}

