import Image from "next/image";
import ContactPopover from "@/app/components/contactPopover";

export default function Footer() {
  const circleSize = `400px`; // Size of the circle in pixels
  return (
    <div>
      <footer className="relative">
        <div className="absolute ping border-2 border-orange-400 top-0 -translate-y-1/2 right-50 rounded-full pointer-events-none z-0" style={{ width: `${circleSize}`, height: `${circleSize}` }}>
        </div>
        <div className="absolute top-0 -translate-y-1/2 right-50 rounded-full z-20" style={{ width: `${circleSize}`, height: `${circleSize}` }}>
          <div className="absolute inset-2 bg-orange-400 rounded-full z-20 text-center flex flex-col items-center justify-center px-8" >
            <Image src="/images/logo.png" alt="Logo" width={800} height={800} className="w-70 h-16 object-cover top-0" />
            <h2 className="text-white font-bold text-lg mb-3">
              LIÊN HỆ NGAY VỚI CHÚNG TÔI
            </h2>
            <p className="text-gray-50 text-sm text-justify leading-relaxed mb-8">
              Hãy để chúng tôi kiến tạo không gian sống tuyệt vời dành cho bạn với những kiến trúc sư hàng đầu.
            </p>
            <ContactPopover className="z-50"
              trigger={
                <button className="heartbeat bg-white text-black px-6 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors z-50">
                  Liên hệ ngay
                </button>
              }
            />

          </div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-center bg-black text-white pt-12 pb-8 px-4 mt-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-3">
                CÔNG TY TNHH NHÀ ĐẸP QUẢNG NAM
              </h3>
              <div className="mb-2">
                174 Nguyễn Văn Trỗi, P. Tân Thạnh, TP. Tam Kỳ, T. Quảng Nam
              </div>
              <div className="mb-2">Email: nhadepquangnam@gmail.com</div>
              <div className="mb-2">
                Số điện thoại: 0914.353.808 - 0905.659.036
              </div>
            </div>
            {/* Branches */}
            <div>
              <h4 className="text-lg font-bold mb-2">Đà Nẵng</h4>
              <div>20 Đống Đa, P. Thuận Phước, Q. Hải Châu, TP. Đà Nẵng</div>
              <div>Hotline: 0369 151 115 (Ms. Mai)</div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2 text-left">Hà Nội</h4>
              <div>
                L5.16 Khu nhà ở liền kề Hải Ngân, thôn Nội, xã Thanh Liệt, H.
                Thanh Trì, TP. Hà Nội
              </div>
              <div>Hotline: 0358 232 514 (Mr. Hiếu)</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}