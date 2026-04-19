@echo off
echo  Tiệm Sửa Đồng Hồ Minh Hoàng
echo  Đang khởi động...
cd backend
if not exist node_modules (
    echo  Cài đặt dependencies...
    npm install
)
npm start
