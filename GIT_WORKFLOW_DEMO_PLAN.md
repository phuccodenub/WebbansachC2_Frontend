# 📚 KẾ HOẠCH DEMO LÀM VIỆC NHÓM VỚI GIT - DỰ ÁN WEB BÁN SÁCH

> **Mục tiêu:** Demo quy trình làm việc nhóm chuyên nghiệp với Git, sử dụng GitHub Desktop  
> **Số thành viên:** 7 người  
> **Công cụ:** GitHub Desktop (KHÔNG sử dụng command line)  
> **Yêu cầu:** Mỗi feature branch phải có ít nhất 2 commits

---

## 📋 MỤC LỤC

1. [Phân Công Công Việc](#1-phân-công-công-việc)
2. [Cấu Trúc Branch](#2-cấu-trúc-branch)
3. [Quy Tắc Commit Message](#3-quy-tắc-commit-message)
4. [Hướng Dẫn Chi Tiết Cho Từng Thành Viên](#4-hướng-dẫn-chi-tiết-cho-từng-thành-viên)
5. [Quy Trình Merge Request](#5-quy-trình-merge-request)
6. [Timeline Thực Hiện](#6-timeline-thực-hiện)
7. [Checklist Hoàn Thành](#7-checklist-hoàn-thành)

---

## 1. PHÂN CÔNG CÔNG VIỆC

### 👥 Danh Sách Thành Viên và Feature Branch

| STT | Thành Viên | Feature Branch | Mô Tả Công Việc |
|-----|------------|----------------|-----------------|
| 1 | **Hương** | `feature/auth-register-login` | Xác thực người dùng: Đăng ký, Đăng nhập |
| 2 | **Danh** | `feature/product-detail` | Trang chi tiết sản phẩm (sách) |
| 3 | **Nhân Lê** | `feature/category` | Quản lý danh mục sách |
| 4 | **Đạt** | `feature/cart` | Giỏ hàng và chức năng thêm/xóa sản phẩm |
| 5 | **Nhân Nguyễn** | `feature/user-profile` | Trang hồ sơ người dùng |
| 6 | **Phúc** | `feature/admin-book-management` | Admin: Quản lý sách (CRUD) |
| 7 | **Lộc** | `feature/admin-order-management` | Admin: Quản lý đơn hàng |

### 🆕 CÁC FEATURE BRANCH BỔ SUNG (Cần phân công thêm)

| STT | Feature Branch | Mô Tả | Đề Xuất Phân Công |
|-----|----------------|-------|-------------------|
| 8 | `feature/checkout-payment` | Thanh toán và checkout | Hương hoặc Đạt |
| 9 | `feature/order-history` | Lịch sử đơn hàng người dùng | Nhân Nguyễn |
| 10 | `feature/wishlist` | Danh sách yêu thích | Danh |
| 11 | `feature/search-filter` | Tìm kiếm và lọc sách | Nhân Lê |
| 12 | `feature/admin-dashboard` | Dashboard thống kê admin | Phúc hoặc Lộc |
| 13 | `feature/header-footer` | Components Header và Footer | Bất kỳ thành viên |
| 14 | `feature/homepage` | Trang chủ hiển thị sách | Bất kỳ thành viên |

---

## 2. CẤU TRÚC BRANCH

```
main (production)
│
├── develop (staging/integration)
│   │
│   ├── feature/auth-register-login      (Hương)
│   ├── feature/product-detail           (Danh)
│   ├── feature/category                 (Nhân Lê)
│   ├── feature/cart                     (Đạt)
│   ├── feature/user-profile             (Nhân Nguyễn)
│   ├── feature/admin-book-management    (Phúc)
│   ├── feature/admin-order-management   (Lộc)
│   │
│   └── [Các feature branch bổ sung...]
│
└── hotfix/* (sửa lỗi khẩn cấp - nếu cần)
```

### 📌 Quy Tắc Branch

- **main**: Code production, chỉ merge từ `develop` sau khi test hoàn tất
- **develop**: Branch tích hợp, tất cả feature merge vào đây trước
- **feature/***: Các tính năng mới, tạo từ `develop`
- **hotfix/***: Sửa lỗi khẩn cấp từ `main`

---

## 3. QUY TẮC COMMIT MESSAGE

### 📝 Format Chuẩn (Conventional Commits)

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### 🏷️ Các Type Phổ Biến

| Type | Mô Tả | Ví Dụ |
|------|-------|-------|
| `feat` | Thêm tính năng mới | `feat(auth): add login form validation` |
| `fix` | Sửa lỗi | `fix(cart): resolve quantity update bug` |
| `style` | Thay đổi UI/CSS | `style(header): update navigation styling` |
| `refactor` | Tái cấu trúc code | `refactor(product): optimize API calls` |
| `docs` | Cập nhật tài liệu | `docs(readme): add setup instructions` |
| `chore` | Công việc khác | `chore(deps): update dependencies` |

### ✅ Ví Dụ Commit Message Tốt

```
feat(auth): implement user registration form

- Add RegisterPage component with form fields
- Add form validation for email and password
- Connect to register API endpoint
```

### ❌ Ví Dụ Commit Message Không Tốt

```
fix bug
update code
done
abc
```

---

## 4. HƯỚNG DẪN CHI TIẾT CHO TỪNG THÀNH VIÊN

> ⚠️ **LƯU Ý QUAN TRỌNG:**  
> - Sử dụng **GitHub Desktop** cho tất cả thao tác Git  
> - **KHÔNG** sử dụng command line / terminal  
> - Mỗi branch phải có **ít nhất 2 commits**

---

### 👤 HƯƠNG - `feature/auth-register-login`

#### Bước 1: Tạo Branch Mới (GitHub Desktop)
1. Mở GitHub Desktop
2. Đảm bảo đang ở branch `develop`
3. Click **Branch** → **New Branch**
4. Đặt tên: `feature/auth-register-login`
5. Click **Create Branch**

#### Bước 2: Thực Hiện Công Việc

**📁 Files cần làm việc:**
- `src/pages/LoginPage.tsx`
- `src/pages/RegisterPage.tsx`

**Commit 1:** Hoàn thiện form đăng nhập
```
Thay đổi: Cập nhật LoginPage.tsx
- Thêm validation cho email/password
- Thêm "Remember me" checkbox
- Cải thiện error messages

Commit message:
feat(auth): implement login form with validation

- Add email and password validation
- Add remember me checkbox functionality  
- Improve error message display
```

**Commit 2:** Hoàn thiện form đăng ký
```
Thay đổi: Cập nhật RegisterPage.tsx
- Thêm confirm password field
- Thêm terms & conditions checkbox
- Thêm phone number field (optional)

Commit message:
feat(auth): complete registration form with all fields

- Add password confirmation field
- Add terms and conditions acceptance
- Add optional phone number input
```

#### Bước 3: Push lên GitHub (GitHub Desktop)
1. Sau mỗi commit, click **Push origin** ở góc trên
2. Đảm bảo tất cả commits đã được push

---

### 👤 DANH - `feature/product-detail`

#### Bước 1: Tạo Branch Mới (GitHub Desktop)
1. Mở GitHub Desktop, chuyển về `develop`
2. **Branch** → **New Branch** → `feature/product-detail`

#### Bước 2: Thực Hiện Công Việc

**📁 Files cần làm việc:**
- `src/pages/ProductDetailPage.tsx`
- `src/components/BookCard.tsx`

**Commit 1:** Cập nhật layout trang chi tiết sản phẩm
```
Thay đổi: Cập nhật ProductDetailPage.tsx
- Thêm section mô tả chi tiết sách
- Thêm thông tin tác giả, NXB
- Thêm đánh giá sao

Commit message:
feat(product): enhance product detail page layout

- Add detailed book description section
- Display author and publisher information
- Add star rating component
```

**Commit 2:** Thêm chức năng tương tác
```
Thay đổi: Cập nhật ProductDetailPage.tsx
- Thêm nút "Thêm vào giỏ hàng"
- Thêm nút "Thêm vào yêu thích"
- Thêm chọn số lượng

Commit message:
feat(product): add interactive features to product page

- Implement add to cart button
- Add wishlist toggle button
- Add quantity selector component
```

#### Bước 3: Push lên GitHub
Click **Push origin** sau mỗi commit

---

### 👤 NHÂN LÊ - `feature/category`

#### Bước 1: Tạo Branch
`feature/category` từ `develop`

#### Bước 2: Thực Hiện Công Việc

**📁 Files cần làm việc:**
- `src/pages/CategoryPage.tsx`

**Commit 1:** Xây dựng giao diện danh mục
```
Thay đổi: Cập nhật CategoryPage.tsx
- Tạo sidebar danh mục
- Hiển thị danh sách sách theo danh mục
- Thêm breadcrumb navigation

Commit message:
feat(category): build category page with sidebar navigation

- Create category sidebar with tree structure
- Display books filtered by category
- Add breadcrumb for better navigation
```

**Commit 2:** Thêm chức năng lọc và sắp xếp
```
Thay đổi: Cập nhật CategoryPage.tsx
- Thêm filter theo giá
- Thêm filter theo đánh giá
- Thêm sort options (mới nhất, giá, bán chạy)

Commit message:
feat(category): add filtering and sorting functionality

- Implement price range filter
- Add rating filter option
- Create sort dropdown (newest, price, bestseller)
```

---

### 👤 ĐẠT - `feature/cart`

#### Bước 1: Tạo Branch
`feature/cart` từ `develop`

#### Bước 2: Thực Hiện Công Việc

**📁 Files cần làm việc:**
- `src/pages/CartPage.tsx`
- `src/pages/CheckoutPage.tsx`

**Commit 1:** Hoàn thiện giao diện giỏ hàng
```
Thay đổi: Cập nhật CartPage.tsx
- Hiển thị danh sách sản phẩm trong giỏ
- Thêm nút tăng/giảm số lượng
- Tính tổng tiền tự động

Commit message:
feat(cart): implement cart page with item management

- Display cart items with product details
- Add quantity increment/decrement buttons
- Calculate and display total price automatically
```

**Commit 2:** Thêm chức năng xóa và cập nhật
```
Thay đổi: Cập nhật CartPage.tsx
- Thêm nút xóa từng sản phẩm
- Thêm nút "Xóa tất cả"
- Thêm nút "Tiếp tục mua sắm"
- Thêm nút "Thanh toán"

Commit message:
feat(cart): add remove items and checkout navigation

- Implement remove single item functionality
- Add clear all cart button
- Create continue shopping and checkout buttons
```

---

### 👤 NHÂN NGUYỄN - `feature/user-profile`

#### Bước 1: Tạo Branch
`feature/user-profile` từ `develop`

#### Bước 2: Thực Hiện Công Việc

**📁 Files cần làm việc:**
- `src/pages/ProfilePage.tsx`
- `src/pages/OrderHistoryPage.tsx`

**Commit 1:** Xây dựng trang hồ sơ
```
Thay đổi: Cập nhật ProfilePage.tsx
- Hiển thị thông tin cá nhân
- Form chỉnh sửa thông tin
- Upload avatar

Commit message:
feat(profile): create user profile page with edit functionality

- Display user personal information
- Implement profile edit form
- Add avatar upload feature
```

**Commit 2:** Thêm quản lý địa chỉ và mật khẩu
```
Thay đổi: Cập nhật ProfilePage.tsx
- Thêm section quản lý địa chỉ giao hàng
- Thêm form đổi mật khẩu
- Thêm tabs navigation

Commit message:
feat(profile): add address management and password change

- Create shipping address management section
- Implement change password form
- Add tab navigation for profile sections
```

---

### 👤 PHÚC - `feature/admin-book-management`

#### Bước 1: Tạo Branch
`feature/admin-book-management` từ `develop`

#### Bước 2: Thực Hiện Công Việc

**📁 Files cần làm việc:**
- `src/pages/admin/AdminBooksPage.tsx`
- `src/pages/admin/AdminAddBookPage.tsx`

**Commit 1:** Xây dựng danh sách quản lý sách
```
Thay đổi: Cập nhật AdminBooksPage.tsx
- Hiển thị bảng danh sách sách
- Thêm pagination
- Thêm search và filter

Commit message:
feat(admin): implement book management table with pagination

- Create data table displaying all books
- Add pagination component
- Implement search and filter functionality
```

**Commit 2:** Hoàn thiện form thêm/sửa sách
```
Thay đổi: Cập nhật AdminAddBookPage.tsx
- Form thêm sách mới với validation
- Upload hình ảnh sách
- Chọn danh mục

Commit message:
feat(admin): complete add/edit book form with image upload

- Create comprehensive book form with validation
- Implement book cover image upload
- Add category selection dropdown
```

---

### 👤 LỘC - `feature/admin-order-management`

#### Bước 1: Tạo Branch
`feature/admin-order-management` từ `develop`

#### Bước 2: Thực Hiện Công Việc

**📁 Files cần làm việc:**
- `src/pages/admin/AdminOrdersPage.tsx`
- `src/pages/admin/AdminOrderDetailPage.tsx`

**Commit 1:** Xây dựng danh sách đơn hàng
```
Thay đổi: Cập nhật AdminOrdersPage.tsx
- Hiển thị bảng đơn hàng
- Filter theo trạng thái
- Search theo mã đơn hàng

Commit message:
feat(admin): create order management table with filters

- Display orders in data table format
- Add status filter (pending, processing, shipped, delivered)
- Implement order ID search
```

**Commit 2:** Chi tiết và cập nhật đơn hàng
```
Thay đổi: Cập nhật AdminOrderDetailPage.tsx
- Hiển thị chi tiết đơn hàng
- Cập nhật trạng thái đơn hàng
- In hóa đơn

Commit message:
feat(admin): implement order detail view with status update

- Show complete order details
- Add status update dropdown
- Create print invoice functionality
```

---

## 5. QUY TRÌNH MERGE REQUEST (PULL REQUEST)

### 📋 Các Bước Tạo Pull Request

#### Bước 1: Đảm bảo code đã được push
- Kiểm tra GitHub Desktop: không còn commits chưa push
- Verify trên GitHub web: branch có đầy đủ commits

#### Bước 2: Tạo Pull Request trên GitHub Web

1. Truy cập repository trên GitHub.com
2. Click **Pull requests** → **New pull request**
3. Chọn:
   - **base:** `develop`
   - **compare:** `feature/your-feature-name`
4. Click **Create pull request**

#### Bước 3: Điền Thông Tin Pull Request

**Template PR:**

```markdown
## 📝 Mô Tả
[Mô tả ngắn gọn những gì đã làm]

## 🔄 Loại Thay Đổi
- [ ] ✨ Tính năng mới (feature)
- [ ] 🐛 Sửa lỗi (bugfix)
- [ ] 💄 Thay đổi UI/Style
- [ ] ♻️ Refactor code
- [ ] 📝 Documentation

## 📸 Screenshots (nếu có)
[Đính kèm hình ảnh UI nếu có thay đổi giao diện]

## ✅ Checklist
- [ ] Code đã được test
- [ ] Không có lỗi ESLint/TypeScript
- [ ] Đã update documentation (nếu cần)

## 🔗 Related Issues
Closes #[issue_number]
```

#### Bước 4: Request Review
- Assign ít nhất 1 người review
- Thêm labels phù hợp (feature, enhancement, etc.)

#### Bước 5: Xử Lý Feedback
- Đọc comments từ reviewer
- Thực hiện thay đổi theo yêu cầu
- Push commits mới (PR sẽ tự động cập nhật)

#### Bước 6: Merge (Sau khi được approve)
- Reviewer hoặc Team Lead sẽ merge
- Chọn **Squash and merge** để gộp commits
- Delete branch sau khi merge

---

## 6. TIMELINE THỰC HIỆN

### 📅 Lịch Trình Demo

| Giai Đoạn | Thời Gian | Công Việc |
|-----------|-----------|-----------|
| **Phase 1** | Ngày 1 | Setup repository, tạo branch `develop`, phân công |
| **Phase 2** | Ngày 1-2 | Tất cả thành viên tạo feature branch, commit đầu tiên |
| **Phase 3** | Ngày 2-3 | Hoàn thành commit thứ 2, push tất cả |
| **Phase 4** | Ngày 3 | Tạo Pull Request |
| **Phase 5** | Ngày 3-4 | Code review, xử lý feedback |
| **Phase 6** | Ngày 4 | Merge tất cả vào `develop` |
| **Phase 7** | Ngày 4 | Test tích hợp, merge `develop` vào `main` |

### 🔄 Quy Trình Hàng Ngày

```
1. Fetch & Pull latest từ develop (GitHub Desktop: Fetch origin → Pull)
2. Làm việc trên feature branch
3. Commit với message chuẩn
4. Push lên remote
5. Báo cáo tiến độ cho nhóm
```

---

## 7. CHECKLIST HOÀN THÀNH

### ✅ Checklist Cho Mỗi Thành Viên

```
□ Đã tạo feature branch từ develop
□ Đã thực hiện ít nhất 2 commits
□ Commit message theo format chuẩn
□ Đã push tất cả commits lên GitHub
□ Đã tạo Pull Request
□ Đã điền đầy đủ thông tin PR
□ Đã request review
□ Đã xử lý feedback (nếu có)
□ PR đã được merge
```

### ✅ Checklist Cho Team Lead

```
□ Repository đã được setup
□ Branch develop đã được tạo
□ Tất cả thành viên đã có quyền access
□ Branch protection rules đã được thiết lập
□ Tất cả PRs đã được review
□ Không có conflicts khi merge
□ Develop đã được merge vào main
□ Release tag đã được tạo (optional)
```

---

## 📚 PHỤ LỤC

### A. Cách Sử Dụng GitHub Desktop

#### Tạo Branch Mới
1. Click dropdown branch hiện tại (góc trên bên trái)
2. Click **New Branch**
3. Nhập tên branch
4. Chọn base branch (`develop`)
5. Click **Create Branch**

#### Commit Changes
1. Thay đổi files trong VS Code/Editor
2. Mở GitHub Desktop - thấy changes ở panel bên trái
3. Chọn files muốn commit (tick checkbox)
4. Nhập **Summary** (commit title)
5. Nhập **Description** (chi tiết - optional)
6. Click **Commit to [branch-name]**

#### Push Changes
1. Sau khi commit, click **Push origin** (góc trên bên phải)
2. Hoặc click **Publish branch** nếu là branch mới

#### Pull Latest Changes
1. Click **Fetch origin** để kiểm tra updates
2. Nếu có changes, click **Pull origin**

#### Switch Branch
1. Click dropdown branch
2. Chọn branch muốn chuyển
3. Hoặc dùng filter để tìm branch

### B. Xử Lý Conflicts

Khi có conflict:
1. GitHub Desktop sẽ thông báo
2. Click **Open in Visual Studio Code**
3. Tìm markers: `<<<<<<<`, `=======`, `>>>>>>>`
4. Chọn code muốn giữ, xóa markers
5. Save file
6. Quay lại GitHub Desktop
7. Commit merge

### C. Các Lệnh Tương Đương (Tham Khảo)

> ⚠️ **Chỉ để tham khảo - KHÔNG sử dụng trong demo**

| GitHub Desktop Action | Git Command |
|----------------------|-------------|
| New Branch | `git checkout -b branch-name` |
| Commit | `git add . && git commit -m "message"` |
| Push | `git push origin branch-name` |
| Pull | `git pull origin branch-name` |
| Fetch | `git fetch origin` |
| Switch Branch | `git checkout branch-name` |

---

## 🎯 KẾT LUẬN

Kế hoạch này đảm bảo:
- ✅ Quy trình Git chuyên nghiệp như doanh nghiệp
- ✅ Sử dụng GitHub Desktop (không dùng command line)
- ✅ Mỗi branch có ít nhất 2 commits
- ✅ Commit message theo chuẩn Conventional Commits
- ✅ Pull Request workflow đầy đủ
- ✅ Code review process
- ✅ Phân công rõ ràng cho từng thành viên

---

**📝 Ghi chú cuối:**
- Document này là kịch bản chi tiết để demo
- Mỗi thành viên cần đọc kỹ phần của mình
- Thực hiện theo đúng thứ tự các bước
- Hỏi Team Lead nếu có vấn đề

---

*Tạo bởi: Team WebBanSach*  
*Ngày tạo: 31/03/2026*
