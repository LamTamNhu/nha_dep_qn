# SEO Setup

## Authoring
- Sử dụng trường `SEO` trên các tài liệu như tin tức, dự án hoặc công trình thi công để quản lý tiêu đề, mô tả, URL chuẩn và ảnh Open Graph.
- Khi tạo tài liệu mới, các trường SEO được tự động điền dựa trên tiêu đề, mô tả ngắn và ảnh đầu tiên làm ảnh Open Graph; tác giả có thể chỉnh sửa lại nếu cần.
- Các giá trị mặc định và liên kết mạng xã hội được quản lý trong tài liệu **Cài đặt trang**.

## Metadata mapping
- `app/lib/seo.js` maps Sanity `seo` fields and site settings into the Next.js Metadata API.
- Dynamic routes call `mapSeoToMetadata` inside `generateMetadata` to populate `<head>` tags.

## JSON-LD
- Các trang nội dung như bài viết tin tức chèn dữ liệu cấu trúc thông qua thẻ `<script type="application/ld+json">`.
- Để thêm JSON-LD cho trang khác, tạo đối tượng trong component của trang và chèn theo cùng mẫu.

## Robots & Sitemap
- `/robots.txt` and `/sitemap.xml` are generated at request time using Sanity data.
- Update `siteSettings.robots` or `NEXT_PUBLIC_SITE_URL` to control their output.
- Visit these URLs locally to verify they return content.
