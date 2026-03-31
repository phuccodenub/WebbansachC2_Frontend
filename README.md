# Website Bán Sách - Frontend React

Dự án frontend cho website bán sách, sử dụng React + TypeScript + Vite.

## Thành viên nhóm (Lớp 22DTHE3)
- **Nguyễn Sỹ Phúc** (@phuccodenub) - Team Lead
- **Trần Kim Hương** (@tkhuong183)
- **Danh** (@Danh2003dr)
- **Lê Nhân** (@HitomiTachi)
- **Nguyễn Nhân** (@nhan20474)
- **Nguyễn Hoàng Phước Lộc** (@MrK78L)
- **Đạt** (@datsohight)

## Công nghệ
- React 19
- TypeScript 5.9
- Vite 8
- Tailwind CSS 4
- React Router DOM 7
- Phosphor Icons

## Cài đặt

```bash
cd webbansachc2_frontend
npm install
npm run dev
```

App chạy tại: `http://localhost:5173`

## Scripts
- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run lint` - Kiểm tra lỗi ESLint
- `npm run preview` - Xem trước bản build

## Cấu trúc thư mục
```
src/
├── components/     # Các component dùng chung (Header, Footer, BookCard)
├── layouts/        # Layout chính (MainLayout, AdminLayout)
├── pages/          # Các trang
│   ├── HomePage, LoginPage, RegisterPage, ...
│   └── admin/      # Các trang quản trị (Dashboard, Books, Orders)
├── assets/         # Hình ảnh, tài nguyên
├── App.tsx         # Cấu hình routes
└── main.tsx        # Entry point
```

## Các trang chính
- `/` - Trang chủ
- `/login` - Đăng nhập
- `/register` - Đăng ký
- `/category` - Danh mục sách
- `/product/:id` - Chi tiết sách
- `/cart` - Giỏ hàng
- `/wishlist` - Danh sách yêu thích
- `/checkout` - Thanh toán
- `/orders` - Lịch sử đơn hàng
- `/profile` - Thông tin cá nhân
- `/admin` - Trang quản trị

## Git Workflow
Xem chi tiết tại backend repo: [docs/workflow.md](../webbansachc2/docs/workflow.md)

## Contributing
Xem hướng dẫn tại backend repo: [CONTRIBUTING.md](../webbansachc2/CONTRIBUTING.md)
