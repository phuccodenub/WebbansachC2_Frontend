# 📚 KẾ HOẠCH DEMO LÀM VIỆC NHÓM VỚI GIT - DỰ ÁN WEB BÁN SÁCH

> **Mục tiêu:** Demo quy trình làm việc nhóm chuyên nghiệp với Git, sử dụng GitHub Desktop  
> **Số thành viên:** 7 người  
> **Công cụ:** GitHub Desktop (KHÔNG sử dụng command line)  
> **Yêu cầu:** Mỗi feature branch phải có ít nhất 2 commits  
> **Repository:** https://github.com/phuccodenub/WebbansachC2_Frontend.git

---

## 📋 MỤC LỤC

1. [Hiện Trạng Dự Án](#1-hiện-trạng-dự-án)
2. [Phân Công Công Việc](#2-phân-công-công-việc)
3. [Cấu Trúc Branch](#3-cấu-trúc-branch)
4. [Quy Tắc Commit Message](#4-quy-tắc-commit-message)
5. [Hướng Dẫn Chi Tiết Cho Từng Thành Viên](#5-hướng-dẫn-chi-tiết-cho-từng-thành-viên)
6. [Quy Trình Merge Request](#6-quy-trình-merge-request)
7. [Timeline Thực Hiện](#7-timeline-thực-hiện)
8. [Checklist Hoàn Thành](#8-checklist-hoàn-thành)

---

## 1. HIỆN TRẠNG DỰ ÁN

### 📊 Tổng Quan

| Thành phần | Số lượng | UI hoàn thành | Logic hoàn thành |
|------------|----------|---------------|------------------|
| User Pages | 12 | ✅ 95% | ⚠️ 20% |
| Admin Pages | 5 | ✅ 90% | ⚠️ 15% |
| Components | 3 | ✅ 100% | ⚠️ 30% |
| Layouts | 2 | ✅ 100% | ✅ 100% |

### 🔴 VẤN ĐỀ CẦN KHẮC PHỤC

**1. Các form chưa có xử lý:**
- `LoginPage.tsx` - `handleSubmit` rỗng, không validation
- `RegisterPage.tsx` - `handleSubmit` rỗng, không validate password confirm
- `CheckoutPage.tsx` - Form không có state management
- `ProfilePage.tsx` - Form inputs không connected to state

**2. Dữ liệu hardcoded (cần làm động):**
- `HomePage.tsx` - 12 sách hardcoded (bestSellers, newBooks)
- `CategoryPage.tsx` - 12 sách hardcoded, filter/sort không hoạt động
- `ProductDetailPage.tsx` - Tất cả thông tin sách hardcoded
- `CartPage.tsx` - 3 items hardcoded, không persist
- `WishlistPage.tsx` - 3 items hardcoded
- `OrderHistoryPage.tsx` - 4 orders hardcoded

**3. Navigation bị sai:**
- Header: Icon Wishlist link đến `/` thay vì `/wishlist`
- Footer: Tất cả links đều là placeholder `/`

**4. Chức năng chưa hoạt động:**
- Nút "Thêm vào giỏ hàng" ở mọi nơi
- Nút "Thêm vào yêu thích" 
- Filter/Sort trên CategoryPage
- Search trên Header
- Pagination

---

## 2. PHÂN CÔNG CÔNG VIỆC

### 👥 Danh Sách Thành Viên và Feature Branch

| STT | Thành Viên | Feature Branch | Mô Tả Công Việc | Độ Khó |
|-----|------------|----------------|-----------------|--------|
| 1 | **Hương** | `feature/auth-register-login` | Form validation + State cho Login/Register | ⭐⭐ |
| 2 | **Danh** | `feature/product-detail` | Kết nối ProductDetail với data động | ⭐⭐ |
| 3 | **Nhân Lê** | `feature/category` | Làm filter/sort hoạt động | ⭐⭐⭐ |
| 4 | **Đạt** | `feature/cart` | Cart Context + localStorage persist | ⭐⭐⭐ |
| 5 | **Nhân Nguyễn** | `feature/user-profile` | Form state + validation cho Profile | ⭐⭐ |
| 6 | **Phúc** | `feature/admin-book-management` | Filter/Search + Form handling Admin Books | ⭐⭐⭐ |
| 7 | **Lộc** | `feature/admin-order-management` | Filter/Search + Modal state Admin Orders | ⭐⭐⭐ |

---

## 3. CẤU TRÚC BRANCH

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

## 4. QUY TẮC COMMIT MESSAGE

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

## 5. HƯỚNG DẪN CHI TIẾT CHO TỪNG THÀNH VIÊN

> ⚠️ **LƯU Ý QUAN TRỌNG:**  
> - Sử dụng **GitHub Desktop** cho tất cả thao tác Git  
> - **KHÔNG** sử dụng command line / terminal  
> - Mỗi branch phải có **ít nhất 2 commits**
> - **Fetch origin** và **Pull** từ `develop` trước khi bắt đầu làm việc

---

### 👤 HƯƠNG - `feature/auth-register-login`

#### 📋 Hiện Trạng Files
| File | UI | Logic | Vấn đề |
|------|-----|-------|--------|
| `src/pages/LoginPage.tsx` | ✅ | ❌ | `handleSubmit` rỗng, không validation |
| `src/pages/RegisterPage.tsx` | ✅ | ❌ | Không validate password confirm, terms |

#### ✏️ Bước 1: Tạo Branch Mới (GitHub Desktop)
1. Mở GitHub Desktop → Đảm bảo đang ở branch `develop`
2. **Fetch origin** để lấy code mới nhất
3. Click **Branch** → **New Branch**
4. Đặt tên: `feature/auth-register-login`
5. Click **Create Branch**

#### ✏️ Bước 2: Thực Hiện Commit 1 - Login Validation

**📁 File:** `src/pages/LoginPage.tsx`

**Công việc cụ thể:**
1. Thêm state cho error messages:
```tsx
const [errors, setErrors] = useState({ username: '', password: '' })
```

2. Viết hàm validate trong `handleSubmit`:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  let valid = true
  const newErrors = { username: '', password: '' }
  
  if (!formData.username.trim()) {
    newErrors.username = 'Vui lòng nhập tên đăng nhập'
    valid = false
  }
  
  if (!formData.password || formData.password.length < 6) {
    newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
    valid = false
  }
  
  setErrors(newErrors)
  
  if (valid) {
    console.log('Login data:', formData)
    // TODO: Call API login
  }
}
```

3. Hiển thị error messages dưới mỗi input:
```tsx
{errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
```

**Commit message:**
```
feat(auth): add login form validation

- Add error state for username and password fields
- Implement validation logic in handleSubmit
- Display error messages below input fields
- Validate minimum password length (6 chars)
```

#### ✏️ Bước 3: Thực Hiện Commit 2 - Register Validation

**📁 File:** `src/pages/RegisterPage.tsx`

**Công việc cụ thể:**
1. Thêm state errors:
```tsx
const [errors, setErrors] = useState({
  fullName: '', email: '', phone: '', password: '', confirmPassword: ''
})
```

2. Validate trong `handleSubmit`:
- fullName không rỗng
- email format đúng (regex)
- password >= 6 ký tự
- confirmPassword === password
- Terms checkbox phải được tick

3. Hiển thị errors cho mỗi field

**Commit message:**
```
feat(auth): add registration form validation

- Add comprehensive form validation for all fields
- Validate email format with regex
- Check password confirmation matches
- Require terms acceptance before submit
- Display field-specific error messages
```

#### ✏️ Bước 4: Push lên GitHub
1. Click **Push origin** (hoặc **Publish branch** nếu lần đầu)
2. Verify trên GitHub.com có 2 commits

---

### 👤 DANH - `feature/product-detail`

#### 📋 Hiện Trạng Files
| File | UI | Logic | Vấn đề |
|------|-----|-------|--------|
| `src/pages/ProductDetailPage.tsx` | ✅ | ❌ | `useParams().id` không dùng để fetch, data hardcoded |
| `src/components/BookCard.tsx` | ✅ | ⚠️ | onClick cart button rỗng |

#### ✏️ Bước 1: Tạo Branch
`feature/product-detail` từ `develop`

#### ✏️ Bước 2: Commit 1 - Tạo Book Data & Load Dynamic

**📁 File:** `src/pages/ProductDetailPage.tsx`

**Công việc cụ thể:**
1. Tạo mảng mock data books (ít nhất 5 sách khác nhau):
```tsx
const booksData = [
  { id: 1, title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', price: 88000, ... },
  { id: 2, title: 'Nhà Giả Kim', author: 'Paulo Coelho', price: 79000, ... },
  // ... thêm 3 sách nữa
]
```

2. Sử dụng `useParams()` để lấy ID và tìm sách:
```tsx
const { id } = useParams()
const book = booksData.find(b => b.id === Number(id)) || booksData[0]
```

3. Thay thế tất cả hardcoded values bằng `book.title`, `book.author`, `book.price`...

**Commit message:**
```
feat(product): implement dynamic book data loading

- Create mock books data array with 5 different books
- Use useParams to get book ID from URL
- Replace all hardcoded values with dynamic data
- Add fallback to first book if ID not found
```

#### ✏️ Bước 3: Commit 2 - Quantity Selector State

**📁 File:** `src/pages/ProductDetailPage.tsx`

**Công việc cụ thể:**
1. Thêm state quantity:
```tsx
const [quantity, setQuantity] = useState(1)
```

2. Kết nối nút +/- với state:
```tsx
<button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
<span>{quantity}</span>
<button onClick={() => setQuantity(q => q + 1)}>+</button>
```

3. Thêm console.log cho nút "Thêm vào giỏ hàng":
```tsx
const handleAddToCart = () => {
  console.log('Add to cart:', { bookId: book.id, quantity })
  alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`)
}
```

**Commit message:**
```
feat(product): add quantity selector functionality

- Add quantity state with default value 1
- Implement increment/decrement buttons
- Prevent quantity going below 1
- Add alert feedback when adding to cart
```

---

### 👤 NHÂN LÊ - `feature/category`

#### 📋 Hiện Trạng Files
| File | UI | Logic | Vấn đề |
|------|-----|-------|--------|
| `src/pages/CategoryPage.tsx` | ✅ | ❌ | Filter không hoạt động, sort không hoạt động, 12 books hardcoded |

#### ✏️ Bước 1: Tạo Branch
`feature/category` từ `develop`

#### ✏️ Bước 2: Commit 1 - Implement Filter Logic

**📁 File:** `src/pages/CategoryPage.tsx`

**Công việc cụ thể:**
1. Tạo state cho filtered books:
```tsx
const [filteredBooks, setFilteredBooks] = useState(books)
const [selectedGenre, setSelectedGenre] = useState('')
const [selectedPriceRange, setSelectedPriceRange] = useState('')
```

2. Tạo hàm filter:
```tsx
useEffect(() => {
  let result = [...books]
  
  if (selectedGenre) {
    result = result.filter(book => book.genre === selectedGenre)
  }
  
  if (selectedPriceRange) {
    // Filter theo khoảng giá
    if (selectedPriceRange === 'under100') {
      result = result.filter(book => book.price < 100000)
    } else if (selectedPriceRange === '100to200') {
      result = result.filter(book => book.price >= 100000 && book.price <= 200000)
    }
    // ... thêm các range khác
  }
  
  setFilteredBooks(result)
}, [selectedGenre, selectedPriceRange])
```

3. Kết nối sidebar filters với state

**Commit message:**
```
feat(category): implement filter functionality

- Add state for filtered books and filter selections
- Create useEffect to filter books when selections change
- Implement genre filter logic
- Implement price range filter logic
- Connect sidebar filters to state
```

#### ✏️ Bước 3: Commit 2 - Implement Sort

**📁 File:** `src/pages/CategoryPage.tsx`

**Công việc cụ thể:**
1. Thêm state sort:
```tsx
const [sortBy, setSortBy] = useState('newest')
```

2. Thêm logic sort trong useEffect:
```tsx
// Sau khi filter xong
if (sortBy === 'price-asc') {
  result.sort((a, b) => a.price - b.price)
} else if (sortBy === 'price-desc') {
  result.sort((a, b) => b.price - a.price)
} else if (sortBy === 'name') {
  result.sort((a, b) => a.title.localeCompare(b.title))
}
```

3. Kết nối dropdown sort với state
4. Hiển thị số lượng kết quả: `{filteredBooks.length} sản phẩm`

**Commit message:**
```
feat(category): implement sort functionality

- Add sortBy state with default 'newest'
- Implement sort logic for price ascending/descending
- Add sort by name alphabetically
- Connect sort dropdown to state
- Display filtered results count
```

---

### 👤 ĐẠT - `feature/cart`

#### 📋 Hiện Trạng Files
| File | UI | Logic | Vấn đề |
|------|-----|-------|--------|
| `src/pages/CartPage.tsx` | ✅ | ⚠️ | Cart items không persist, chỉ có trong component state |
| `src/pages/CheckoutPage.tsx` | ✅ | ❌ | Cart items hardcoded, form không có handling |

#### ✏️ Bước 1: Tạo Branch
`feature/cart` từ `develop`

#### ✏️ Bước 2: Commit 1 - Tạo Cart Context

**📁 Tạo file mới:** `src/context/CartContext.tsx`

**Công việc cụ thể:**
1. Tạo CartContext với các function:
```tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  // Implement addToCart, removeFromCart, updateQuantity, clearCart...
  
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
```

2. Wrap App với CartProvider trong `main.tsx`:
```tsx
<CartProvider>
  <App />
</CartProvider>
```

**Commit message:**
```
feat(cart): create cart context with localStorage persistence

- Create CartContext with full cart management
- Implement addToCart, removeFromCart, updateQuantity, clearCart
- Add localStorage persistence for cart items
- Calculate totalItems and totalPrice
- Create useCart hook for easy access
```

#### ✏️ Bước 3: Commit 2 - Kết Nối CartPage với Context

**📁 File:** `src/pages/CartPage.tsx`

**Công việc cụ thể:**
1. Import và sử dụng useCart:
```tsx
import { useCart } from '../context/CartContext'

function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart()
```

2. Xóa state hardcoded, thay bằng context
3. Kết nối các nút với context functions
4. Update Header để hiện cart count từ context

**📁 File:** `src/components/Header.tsx`
```tsx
import { useCart } from '../context/CartContext'
// Thay đổi cart badge từ "0" thành {totalItems}
```

**Commit message:**
```
feat(cart): connect CartPage and Header to cart context

- Replace hardcoded cart items with context data
- Connect quantity buttons to updateQuantity function
- Connect remove button to removeFromCart function
- Update Header cart badge to show real totalItems
- Remove redundant local state
```

---

### 👤 NHÂN NGUYỄN - `feature/user-profile`

#### 📋 Hiện Trạng Files
| File | UI | Logic | Vấn đề |
|------|-----|-------|--------|
| `src/pages/ProfilePage.tsx` | ✅ | ❌ | Form inputs không connected to state, save button không hoạt động |
| `src/pages/OrderHistoryPage.tsx` | ✅ | ⚠️ | Filter pills có state nhưng không filter thực sự |

#### ✏️ Bước 1: Tạo Branch
`feature/user-profile` từ `develop`

#### ✏️ Bước 2: Commit 1 - Profile Form State

**📁 File:** `src/pages/ProfilePage.tsx`

**Công việc cụ thể:**
1. Tạo state cho profile data:
```tsx
const [profile, setProfile] = useState({
  fullName: 'Nguyễn Văn A',
  phone: '0901234567',
  email: 'nguyenvana@email.com'
})

const [isEditing, setIsEditing] = useState(false)
```

2. Kết nối inputs với state:
```tsx
<input 
  value={profile.fullName}
  onChange={(e) => setProfile({...profile, fullName: e.target.value})}
  disabled={!isEditing}
/>
```

3. Thêm nút Edit/Save toggle:
```tsx
<button onClick={() => {
  if (isEditing) {
    console.log('Saving profile:', profile)
    alert('Đã lưu thông tin!')
  }
  setIsEditing(!isEditing)
}}>
  {isEditing ? 'Lưu' : 'Chỉnh sửa'}
</button>
```

**Commit message:**
```
feat(profile): implement profile form state management

- Add profile state with default user data
- Connect all input fields to state
- Add isEditing toggle for edit mode
- Implement save functionality with feedback
- Disable inputs when not in edit mode
```

#### ✏️ Bước 3: Commit 2 - Order History Filter

**📁 File:** `src/pages/OrderHistoryPage.tsx`

**Công việc cụ thể:**
1. Thêm state filtered orders:
```tsx
const [filteredOrders, setFilteredOrders] = useState(orders)
```

2. Kết nối filter pills với filter logic:
```tsx
useEffect(() => {
  if (activeFilter === 'all') {
    setFilteredOrders(orders)
  } else {
    setFilteredOrders(orders.filter(order => order.status === activeFilter))
  }
}, [activeFilter])
```

3. Render `filteredOrders` thay vì `orders`

**Commit message:**
```
feat(profile): implement order history filter functionality

- Add filteredOrders state
- Create useEffect to filter when activeFilter changes
- Connect filter pills to actual filtering logic
- Display filtered results in table
```

---

### 👤 PHÚC - `feature/admin-book-management`

#### 📋 Hiện Trạng Files
| File | UI | Logic | Vấn đề |
|------|-----|-------|--------|
| `src/pages/admin/AdminBooksPage.tsx` | ✅ | ❌ | Filter/search không hoạt động, delete button không làm gì |
| `src/pages/admin/AdminAddBookPage.tsx` | ✅ | ❌ | Form không có state, validation chỉ là UI |

#### ✏️ Bước 1: Tạo Branch
`feature/admin-book-management` từ `develop`

#### ✏️ Bước 2: Commit 1 - Books List Filter & Delete

**📁 File:** `src/pages/admin/AdminBooksPage.tsx`

**Công việc cụ thể:**
1. Chuyển hardcoded books thành state:
```tsx
const [books, setBooks] = useState(initialBooks)
const [searchTerm, setSearchTerm] = useState('')
const [filterGenre, setFilterGenre] = useState('')
```

2. Thêm filter/search logic:
```tsx
const displayedBooks = books.filter(book => {
  const matchSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase())
  const matchGenre = !filterGenre || book.genre === filterGenre
  return matchSearch && matchGenre
})
```

3. Implement delete:
```tsx
const handleDelete = (id: number) => {
  if (confirm('Bạn có chắc muốn xóa sách này?')) {
    setBooks(books.filter(book => book.id !== id))
  }
}
```

**Commit message:**
```
feat(admin): implement book list search and filter

- Convert books to state for dynamic management
- Add search by title functionality
- Add genre filter dropdown logic
- Implement delete book with confirmation
- Display filtered results
```

#### ✏️ Bước 3: Commit 2 - Add Book Form Handling

**📁 File:** `src/pages/admin/AdminAddBookPage.tsx`

**Công việc cụ thể:**
1. Tạo form state:
```tsx
const [formData, setFormData] = useState({
  title: '',
  author: '',
  category: '',
  publisher: '',
  isbn: '',
  importPrice: '',
  salePrice: '',
  quantity: '',
  description: ''
})
const [errors, setErrors] = useState({})
```

2. Kết nối tất cả inputs với state
3. Validate khi submit:
```tsx
const handleSubmit = () => {
  const newErrors = {}
  if (!formData.title) newErrors.title = 'Vui lòng nhập tên sách'
  if (!formData.author) newErrors.author = 'Vui lòng nhập tác giả'
  // ... validate các fields khác
  
  if (Object.keys(newErrors).length === 0) {
    console.log('Book data:', formData)
    alert('Đã lưu sách thành công!')
  } else {
    setErrors(newErrors)
  }
}
```

**Commit message:**
```
feat(admin): implement add book form with validation

- Create form state for all book fields
- Connect all inputs to state
- Add validation for required fields
- Display validation errors
- Show success message on valid submit
```

---

### 👤 LỘC - `feature/admin-order-management`

#### 📋 Hiện Trạng Files
| File | UI | Logic | Vấn đề |
|------|-----|-------|--------|
| `src/pages/admin/AdminOrdersPage.tsx` | ✅ | ⚠️ | Modal có state nhưng data hardcoded, filter không hoạt động |
| `src/pages/admin/AdminOrderDetailPage.tsx` | ✅ | ❌ | Chỉ redirect về AdminOrdersPage |

#### ✏️ Bước 1: Tạo Branch
`feature/admin-order-management` từ `develop`

#### ✏️ Bước 2: Commit 1 - Orders Filter & Search

**📁 File:** `src/pages/admin/AdminOrdersPage.tsx`

**Công việc cụ thể:**
1. Thêm state cho filters:
```tsx
const [orders, setOrders] = useState(initialOrders)
const [searchTerm, setSearchTerm] = useState('')
const [statusFilter, setStatusFilter] = useState('')
```

2. Implement filter logic:
```tsx
const displayedOrders = orders.filter(order => {
  const matchSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  const matchStatus = !statusFilter || order.status === statusFilter
  return matchSearch && matchStatus
})
```

3. Kết nối search input và filter dropdowns với state

**Commit message:**
```
feat(admin): implement order search and filter

- Add search by order ID and customer name
- Add status filter dropdown functionality
- Create displayedOrders computed from filters
- Connect filter UI to state
```

#### ✏️ Bước 3: Commit 2 - Order Status Update

**📁 File:** `src/pages/admin/AdminOrdersPage.tsx`

**Công việc cụ thể:**
1. Thêm function update status:
```tsx
const handleUpdateStatus = (orderId: string, newStatus: string) => {
  setOrders(orders.map(order => 
    order.id === orderId 
      ? { ...order, status: newStatus }
      : order
  ))
  alert(`Đã cập nhật trạng thái đơn hàng ${orderId}`)
}
```

2. Trong modal, thêm dropdown và nút cập nhật:
```tsx
<select 
  value={selectedOrder?.status}
  onChange={(e) => handleUpdateStatus(selectedOrder.id, e.target.value)}
>
  <option value="pending">Chờ xử lý</option>
  <option value="processing">Đang xử lý</option>
  <option value="shipping">Đang giao</option>
  <option value="delivered">Đã giao</option>
  <option value="cancelled">Đã hủy</option>
</select>
```

**Commit message:**
```
feat(admin): implement order status update functionality

- Add handleUpdateStatus function
- Create status dropdown in order detail modal
- Update order status in state when changed
- Show feedback alert on status change
- Reflect status change in orders table immediately
```

---

## 6. QUY TRÌNH MERGE REQUEST (PULL REQUEST)

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

## 7. TIMELINE THỰC HIỆN

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

## 8. CHECKLIST HOÀN THÀNH

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
