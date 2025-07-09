import Navbar from "./navbar"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div
        className="h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C6mr6kWCe9m2HdhNwYhQd1H8DiDSsN.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">MODERN DESIGN</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Kiến tạo không gian sống hiện đại với phong cách tối giản và tinh tế
            </p>
          </div>
        </div>
      </div>

      {/* Content sections would go here */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Dự án nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 aspect-video rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
