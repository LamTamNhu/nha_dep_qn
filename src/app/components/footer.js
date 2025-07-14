export default function Footer() {
    return (
        <div>
            {/* Footer Section */}
            <footer className="bg-black/60 text-white pt-12 pb-8 px-4 mt-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold mb-3">
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
                        <h4 className="text-lg font-bold mb-2">Hà Nội</h4>
                        <div>
                            L5.16 Khu nhà ở liền kề Hải Ngân, thôn Nội, xã Thanh Liệt, H.
                            Thanh Trì, TP. Hà Nội
                        </div>
                        <div>Hotline: 0358 232 514 (Mr. Hiếu)</div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-8 text-center text-sm text-white/70">
                    &copy; {new Date().getFullYear()} NHÀ ĐẸP QUẢNG NAM. All rights
                    reserved.
                </div>
            </footer>
        </div>
    )
}