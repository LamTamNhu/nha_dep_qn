import Link from 'next/link';
import PortableTextZoomImage from '@/components/PortableTextZoomImage';

/**
 * Shared PortableText components factory.
 *
 * @param {object} opts
 * @param {string}  opts.title            - Fallback alt text for images
 * @param {Array}   [opts.sameCategoryNews] - Pre-fetched same-category posts for seeMore blocks (news only)
 */
export function makePortableTextComponents({ title, sameCategoryNews = [] } = {}) {
    return {
        block: {
            normal: ({ children }) => <p>{children}</p>,
            h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-semibold my-2">{children}</h3>,
            blockquote: ({ children }) => <blockquote>{children}</blockquote>,
        },
        marks: {
            left:   ({ children }) => <span className="block text-left w-full">{children}</span>,
            center: ({ children }) => <span className="block text-center w-full">{children}</span>,
            right:  ({ children }) => <span className="block text-right w-full">{children}</span>,
            link: ({ value, children }) => (
                <a
                    href={value?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[var(--accent-light)]"
                >
                    {children}
                </a>
            ),
        },
        types: {
            image: ({ value }) => (
                <PortableTextZoomImage value={value} fallbackAlt={title} />
            ),
            seeMore: ({ value }) => {
                const isManual = value.mode === 'manual';
                let picks = [];
                if (isManual) {
                    picks = (value.links || []).map((l) => ({
                        _id: l.href,
                        title: l.text,
                        href: l.href,
                    }));
                } else {
                    const count = value.count ?? 3;
                    const pool = [...sameCategoryNews];
                    for (let i = pool.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [pool[i], pool[j]] = [pool[j], pool[i]];
                    }
                    picks = pool.slice(0, count).map((item) => ({
                        _id: item._id,
                        title: item.title,
                        href: `/news/${item.slug}`,
                    }));
                }
                if (picks.length === 0) return null;
                return (
                    <div className="not-prose my-8 px-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">&gt;&gt; Xem thêm</p>
                        <div className="flex flex-col gap-2">
                            {picks.map((item) => (
                                <Link
                                    key={item._id}
                                    href={item.href}
                                    className="flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--accent-light)] hover:underline leading-snug"
                                >
                                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                );
            },
        },
    };
}
