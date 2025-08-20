import {sanityFetch} from '@/sanity/lib/live';
import { newsQuery, bannerQuery } from '@/sanity/lib/queries';
import Banner from '@/components/ui/banner';
import NewsFilter from '@/components/NewsFilter';

export default async function NewsPage() {
    const {data: news} = await sanityFetch({query: newsQuery});
    const {data: banner} = await sanityFetch({query: bannerQuery});
    const useDefault = banner?.newsUseDefault !== false;
    const images = (useDefault ? banner?.defaultSlides : banner?.newsSlides) || [];
    return (
        <div className="min-h-screen bg-[#272727] text-center">
            <Banner title="Tin tức" images={images} />
            <div className="container mx-auto px-4 sm:px-6 md:px-10 pb-20 md:pb-30">
                <NewsFilter news={news} />
            </div>
        </div>
    );
}
