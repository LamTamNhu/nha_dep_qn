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
            normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
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
            table: ({ value }) => {
                const rows = value?.rows || [];
                if (rows.length === 0) return null;
                const [headRow, ...bodyRows] = rows;
                return (
                    <div className="not-prose my-6 overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr>
                                    {(headRow?.cells || []).map((cell, i) => (
                                        <th
                                            key={i}
                                            className="border border-gray-600 bg-black/40 px-3 py-2 text-left font-semibold"
                                        >
                                            {cell}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {bodyRows.map((row, r) => (
                                    <tr key={row._key || r}>
                                        {(row.cells || []).map((cell, c) => (
                                            <td
                                                key={c}
                                                className="border border-gray-600 px-3 py-2 align-top"
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            },
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
