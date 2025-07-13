
"use client";
import Navbar from "../components/navbar";
import Image from "next/image";

import { useState } from "react";
import Footer from "../components/footer";
import { CheckIcon, CreditCard, Lock, ShieldUser } from "lucide-react";
import FloatingButtons from "../components/floatingButtons";

export default function AboutPage() {
  const [expanded, setExpanded] = useState(false);
  const aboutShort =
    <div>
      <p>
        Với ước mơ tạo ra những ngôi nhà thật đẹp chàng kĩ sư trẻ Nguyên Tương Tổng Giám Đốc tại công ty Nhà Đẹp Quảng Nam chia sẻ.
      </p>
      <br />
      <blockquote className="text-2xl italic text-gray-900 mb-6 text-center md:text-left">
        "Chúng tôi không chỉ đơn thuần xây dựng những công trình, mà còn kiến tạo nên những tổ ấm
        - nơi gia đình sum vầy, nơi nuôi dưỡng những khoảnh khắc hạnh phúc."
      </blockquote>
      <br />
    </div>
  const aboutFull =
    <div>
      <p>
        `Mỗi ngày, đội ngũ Nhà Đẹp Quảng Nam bước ra công trường không chỉ với vai trò là những người thợ, những kỹ sư, những kiến trúc sư, mà còn là những người đồng hành cùng khách hàng trên hành trình hiện thực hóa giấc mơ an cư.`
      </p>
      <br />
      <p>
      `  Chúng tôi hiểu rằng, phía sau mỗi bản thiết kế, mỗi viên gạch đặt xuống là biết bao tâm tư, kỳ vọng, bao năm tích góp của gia chủ.
        Nhiều năm qua, từ những ngày đầu chập chững vào nghề, chúng tôi đã trải qua biết bao công trình, chứng kiến niềm vui ngày nhận nhà của hàng trăm
        gia đình. Ngoài ra chúng tôi đã cùng khách hàng đi qua rất nhiều nỗi lo: Lo lắng về chất lượng –
        liệu ngôi nhà có thực sự bền vững? Băn khoăn về thẩm mỹ – làm sao để công trình vừa đẹp vừa đúng với mong muốn?`

      </p>
      <br />
      <p>
        `Đau đầu vì tiến độ và chi phí – liệu công trình có đúng kế hoạch, không phát sinh chi phí bất ngờ? Chính những trăn trở ấy đã trở thành động lực
        để chúng tôi xây dựng một quy trình thi công CHẶT CHẼ - MINH BẠCH - CHẤT LƯỢNG, đảm bảo mỗi ngôi nhà khi bàn giao không chỉ đạt chuẩn kỹ thuật,
        mà còn mang đến sự an tâm tuyệt đối cho gia chủ.
        kinh nghiệm chuyên môn.`
      </p>
      <br />
      <p>
        `Trên hành trình hơn 10 năm thực chiến, đội ngũ đã không ngừng nỗ lực, học hỏi và đúc kết kinh
        nghiệm để mang đến những giải pháp thiết kế và thi công chất lượng – tối ưu – bền vững. Chúng tôi hiểu rằng, mỗi công trình là cả một hành
        trình, và gia chủ luôn cần một đơn vị đồng hành có tâm – có tầm sẵn sàng cam kết đồng hành đến cùng. Tại NĐQN các công trình luôn được quản lý
        bởi kỹ sư có chuyên môn và năng lực. Quá trình thi công luôn có sự theo sát và phối hợp cùng bộ phận thiết kế kiến trúc, kết cấu, điện nước,
        để đảm bảo công trình luôn được diễn ra suôn sẻ, nếu có vướng mắc hoặc có những sự thay đổi sẽ có giải pháp hợp lý kịp thời dựa trên những kinh nghiệm chuyên môn.`
      </p>
    </div>;

  const khongItems = [
    {
      text: "KHÔNG sử dụng vật tư kém chất lượng."
    },
    {
      text: "KHÔNG sử dụng vật tư sai báo giá."
    },
    {
      text: "KHÔNG cắt giảm vật tư, thi công đủ và đúng tiêu chuẩn."
    },
    {
      text: "KHÔNG bán thầu – kiểm soát chất lượng từ A-Z."
    },
    {
      text: "KHÔNG giấu giếm – minh bạch trong từng khâu thi công."
    }
  ];

  const coreValues = [
    {
      title: "Chân thành",
      description: "Trong phong cách làm việc Nhà Đẹp Quảng Nam luôn ưu tiên tư vấn trung thực, không tô vẽ những điều xa vời mà tập trung vào giá trị thực tế cho khách hàng."
    },
    {
      title: "Chính trực",
      description: "Trong quá trình thi công xây dựng chúng tôi tuân thủ đạo đức nghề nghiệp, không gian dối hay làm trái nguyên tắc, không chạy theo lợi nhuận mà bỏ qua yếu tố an toàn."
    },
    {
      title: "Trách nhiệm",
      description: "Không phải cứ bàn giao xong là hết nghĩa vụ, mà là đảm bảo công trình ấy thực sự đáng sống, đáng tin cậy trong nhiều năm sau."
    },
    {
      title: "Hiểu và Thương",
      description: "Chúng tôi không đơn thuần là đơn vị thi công theo yêu cầu, mà còn là thấu hiểu mong muốn của họ, để tư vấn giải pháp phù hợp nhất."
    },
    {
      title: "Sáng tạo",
      description: "Với phương châm không ngừng phát triển Nhà Đẹp Quảng Nam luôn tập trung cải tiến toàn diện để mang đến dịch vụ tốt nhất đáp ứng mọi nhu cầu khách hàng."
    }
  ];


  return (
    <div className="min-h-screen relative bg-white">
      <Navbar />
      {/* Banner */}
      <div className="relative w-full h-[32rem] flex items-center justify-center">
        <Image
          src="/images/aboutus.png"
          alt="About Us Banner"
          fill
          priority
          className="object-cover object-[55%_85%] z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-left justify-center px-4">
          <h1 className="text-xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Nhà Đẹp Quảng Nam
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium mb-8">
            Nâng tầm những ngôi nhà xứ Quảng
          </p>
        </div>
      </div>

      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl mx-auto px-4">
          <div className="container mx-auto max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-left text-orange-400 mb-14">
              CÂU CHUYỆN THƯƠNG HIỆU
            </h2>
            <div>
              {aboutShort}
              {!expanded && <span>... </span>}
              {expanded && <span>{aboutFull}</span>}
              <button
                className="ml-2 text-orange-400 underline hover:text-orange-500 transition-colors text-sm font-semibold"
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? "Thu gọn" : "Xem thêm"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-left text-orange-400 mb-14">
            ĐỘI NGŨ
          </h2>
          <div>
            <Image
              src="/images/wide_shot.jpg"
              alt="team"
              width={1920}
              height={500}
              className="h-auto object-cover shadow-lg"
            />
            <p className="bg-orange-400 text-white py-2 text-center text-xl">Toàn thể cán bộ nhân viên</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              <span className="text-orange-400">5 "KHÔNG"</span> tại Nhà Đẹp Quảng Nam
            </h2>
          </div>

          {/* Items Grid */}
          <div className="grid gap-6 md:gap-8">
            {khongItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg hover:bg-orange-50 transition-colors duration-300 border-l-4 border-orange-400"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <CheckIcon color="green" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto mt-20">
          {/* Header */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold text-left text-orange-400 mb-2">
              GIÁ TRỊ CỐT LÕI
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Chân thành - Chính trực - Trách nhiệm - Sáng Tạo - Hiểu và Thương
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-400"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">
                    {value.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-orange-400 rounded-full"></div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        {/* Policies and Commitments Section */}
        <div className="max-w-6xl mx-auto mt-20">
          {/* Header */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold text-left text-orange-400 mb-2">
              CHÍNH SÁCH VÀ CAM KẾT CỦA NDQN
            </h2>
          </div>
          {/* Policies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-400 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShieldUser size={40} className="text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">
                  Chính sách bảo hành
                </h3>
                <button className="text-orange-400 hover:text-orange-600 font-medium text-sm underline transition-colors duration-200">
                  Xem thêm
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-400 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard size={40} className="text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">
                  Chính sách thanh toán
                </h3>
                <button className="text-orange-400 hover:text-orange-600 font-medium text-sm underline transition-colors duration-200">
                  Xem thêm
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-400 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lock size={40} className="text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">
                  Chính sách bảo mật thông tin
                </h3>
                <button className="text-orange-400 hover:text-orange-600 font-medium text-sm underline transition-colors duration-200">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FloatingButtons />
      <Footer />
    </div>
  );
}
