import { Link } from 'react-router-dom'
import { CheckCircle, ClipboardText, Storefront } from '@phosphor-icons/react'

export default function OrderSuccessPage() {
  return (
    <div className="bg-[#F5F6FA] min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-2xl p-10 max-w-xl w-full text-center">
        {/* Check icon */}
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} weight="bold" className="text-white" />
        </div>

        <h1 className="text-2xl font-bold text-text-primary mb-3">Đặt hàng thành công!</h1>
        <p className="text-sm text-text-secondary leading-relaxed mb-8">
          Cảm ơn bạn đã tin tưởng MMT. Đơn hàng của<br />
          bạn đang được xử lý và sẽ sớm được giao đến tay bạn.
        </p>

        {/* Info boxes */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <p className="text-[11px] text-text-secondary uppercase tracking-wide font-medium mb-1">Mã đơn hàng</p>
            <p className="text-base font-bold text-primary">#BST-123456</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <p className="text-[11px] text-text-secondary uppercase tracking-wide font-medium mb-1">Tổng tiền thanh toán</p>
            <p className="text-base font-bold text-text-primary">268.000đ</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 justify-center">
          <Link
            to="/orders/BST-123456"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ClipboardText size={18} />
            Xem chi tiết đơn hàng
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-text-primary text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Storefront size={18} />
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    </div>
  )
}
