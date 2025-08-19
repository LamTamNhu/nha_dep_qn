import {sanityFetch} from '@/sanity/lib/live';
import { newsQuery } from '@/sanity/lib/queries';
import Banner from '@/components/ui/banner';
import NewsFilter from '@/components/NewsFilter';

export default async function NewsPage() {
    const {data: news} = await sanityFetch({query: newsQuery});
    return (
        <div className="min-h-screen bg-[#272727] text-center">
            <Banner title="Tin tức" />
            <div className="container mx-auto px-4 sm:px-6 md:px-10 pb-20 md:pb-30">
                <NewsFilter news={news} />
            </div>
        </div>
    );
}
