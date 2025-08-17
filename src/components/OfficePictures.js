import Image from "next/image";

export default function OfficePictures(){
    return(
        <section className="pt-12">
            <div className="w-full mx-auto text-center">
                <h2 className="text-white text-3xl font-bold my-20 p-4 inline-block border-2 border-white">
                    HÌNH ẢNH VĂN PHÒNG
                </h2>
                <div className="flex justify-center">
                    <div className="overflow-hidden">
                        <Image width={300} height={500} src="/images/office1.jpg" alt="van phong"
                               className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"/>
                    </div>
                    <div className="overflow-hidden">
                        <Image width={300} height={500} src="/images/Thiet-ke-chua-co-ten-7.jpg" alt="van phong"
                               className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"/>
                    </div>
                    <div className="overflow-hidden">
                        <Image width={300} height={500} src="/images/Thiet-ke-chua-co-ten-7.jpg" alt="van phong"
                               className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"/>
                    </div>
                </div>
            </div>
        </section>
    )
}