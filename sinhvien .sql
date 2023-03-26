-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 26, 2023 lúc 04:52 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `sinhvien`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id_AC` int(225) NOT NULL,
  `name` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id_AC`, `name`, `email`, `password`) VALUES
(3, 'Cường', 'cuonghong@gmail.com', '$2a$12$kzvOCoaKzKOgbOWuVMZW2u3/Au7KiT0hg.fllPjVkrWFzBb./w4Eu'),
(4, 'Nhân', 'thanhnhan@gmai.com', '$2a$12$9gyT1cVbETWpSHL8KDjC0eWA/zzLACPySmwFPzaIsTR6GuAIDc9o2'),
(5, 'Phong', 'phongtran@gmai.com', '$2a$12$I/WYALQfeoYkJymC3T/b7enp6PWpWNFxPIS3Hz34Yj4jq.CJfvZkC'),
(6, 'Trí', 'minhtri@gmai.com', '$2a$12$22PU1qcKHWT3MSmvx0EFj.eJDxxAx7L3bxs7QKBNP7bI6IUzSe3Py'),
(7, 'Mai Huy', 'huymai@gmail.com', '$2a$12$LnbhZcL0Aw1.qfTnLN7MYOS8LBZ4u/kdtQVdNvvtLEIXfJuinBCu.'),
(9, 'Thiện', 'maihuy', '$2a$10$Rgyyg3Iv1X0GTfb364jgUeYu1L6sTOozMR5qB0sbqfC7Yypt7lNsG'),
(10, 'Nhi', 'huynhnhi', '$2a$10$GK3hBtLkUXQd1viLs9nUZOngvkmc7qctgjXL9V7DduUag7OdW9CxS'),
(11, 'Khánh linh', 'khanhlinh@gmail.com', '$2a$10$z8OBxwLTTR3UrWYNH7ihX.3tJJwLcQQwOAIcC2Z55qdh1E.K6WyHK'),
(12, 'Mai Ka', 'maika@gmail.com', '$2a$10$OefJ/ZxkZAcFZ5XcOUNYaebczZ5.jdWxRk9xWItWgrTLzoOfEJhKi');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bacdaotao`
--

CREATE TABLE `bacdaotao` (
  `tenBDT` varchar(50) NOT NULL,
  `stc` int(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `bacdaotao`
--

INSERT INTO `bacdaotao` (`tenBDT`, `stc`) VALUES
('Cao đẳng', 80),
('Đại học', 100);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `diem`
--

CREATE TABLE `diem` (
  `mssv` int(10) NOT NULL,
  `ten` varchar(30) NOT NULL,
  `mk` varchar(50) NOT NULL,
  `mamh` varchar(100) NOT NULL,
  `diem` int(2) NOT NULL,
  `stc` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `diem`
--

INSERT INTO `diem` (`mssv`, `ten`, `mk`, `mamh`, `diem`, `stc`) VALUES
(1800002710, 'Mai Ka', 'NNA', 'NP', 8, 20),
(1800001234, 'Nguyễn Tấn Lộc', 'KTOT', 'DCDT', 7, 20),
(1800001307, 'Nguyễn Thị Ái Ngọc', 'NNA', 'NP', 8, 20),
(1800005814, 'Nguyễn Khánh Linh', 'CNTT', 'ATTT', 8, 20);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giaovien`
--

CREATE TABLE `giaovien` (
  `mgv` int(100) NOT NULL,
  `tengv` varchar(50) NOT NULL,
  `mk` varchar(50) NOT NULL,
  `mamh` varchar(50) NOT NULL,
  `ml` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `giaovien`
--

INSERT INTO `giaovien` (`mgv`, `tengv`, `mk`, `mamh`, `ml`) VALUES
(1, 'Đặng Như Phú', 'CNTT', 'ATTT', '18DTH2A'),
(2, 'Nguyển Văn Toàn', 'KTOT', 'DCDT', '18OTO3A'),
(3, 'Nguyễn Văn Quí', 'CNTT', 'CSDL', '18DTH2A'),
(4, 'Bùi Văn Khanh', 'YD', 'SH', '18KYD4A');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoa`
--

CREATE TABLE `khoa` (
  `mk` varchar(50) NOT NULL,
  `tenkhoa` varchar(50) NOT NULL,
  `solop` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `khoa`
--

INSERT INTO `khoa` (`mk`, `tenkhoa`, `solop`) VALUES
('CNTP', 'Công nghệ thực phẩm', 6),
('CNTT', 'Khoa Công nghệ thông tin', 3),
('KTOT', 'Kỹ thuật ô tô', 3),
('NNA', 'Ngôn ngữ Anh', 3),
('YD', 'Y Dược', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lop`
--

CREATE TABLE `lop` (
  `ml` varchar(7) NOT NULL,
  `mk` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lop`
--

INSERT INTO `lop` (`ml`, `mk`) VALUES
('18DTH2A', 'CNTT'),
('18DTH2B', 'CNTT'),
('18DTH2C', 'CNTT'),
('18KYD4A', 'YD'),
('18KYD4B', 'YD'),
('18KYD4C', 'YD'),
('18NNA1A', 'NNA'),
('18NNA1B', 'NNA'),
('18NNA1C', 'NNA'),
('18OTO3A', 'KTOT'),
('18OTO3B', 'KTOT'),
('18OTO3C', 'KTOT');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `monhoc`
--

CREATE TABLE `monhoc` (
  `mamh` varchar(50) NOT NULL,
  `tenmh` varchar(50) NOT NULL,
  `mk` varchar(50) NOT NULL,
  `soLopHoc` int(10) NOT NULL,
  `stc` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `monhoc`
--

INSERT INTO `monhoc` (`mamh`, `tenmh`, `mk`, `soLopHoc`, `stc`) VALUES
('ATTT', 'An toàn thông tin', 'CNTT', 3, 20),
('CSDL', 'Cơ sở dữ liệu', 'CNTT', 3, 20),
('DCDT', 'Động cơ đốt trong', 'KTOT', 3, 20),
('LTTBDĐ', 'Lập trình thiết bị di động', 'CNTT', 5, 20),
('NP', 'Ngữ Pháp ', 'NNA', 3, 20),
('SH', 'Sinh học', 'YD', 3, 20);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sinhvien`
--

CREATE TABLE `sinhvien` (
  `mssv` int(10) NOT NULL,
  `ten` varchar(30) NOT NULL,
  `ml` varchar(7) NOT NULL,
  `mk` varchar(50) NOT NULL,
  `gioitinh` char(5) NOT NULL,
  `diachi` varchar(100) NOT NULL,
  `gmail` varchar(50) NOT NULL,
  `ghichu` varchar(100) NOT NULL,
  `noisinh` varchar(30) NOT NULL,
  `bdt` varchar(30) NOT NULL,
  `stc` int(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sinhvien`
--

INSERT INTO `sinhvien` (`mssv`, `ten`, `ml`, `mk`, `gioitinh`, `diachi`, `gmail`, `ghichu`, `noisinh`, `bdt`, `stc`) VALUES
(180007378, 'adv', '18DTH2B', 'CNTT', 'Nam', 'fabfja', 'badh@gmak', 'Không có', 'skhfakhf', 'Đại học', 20),
(1800001234, 'Nguyễn Tấn Lộc', '18OTO3A', 'KTOT', 'Nam', '42, Đường Vườn Lài, Quận 12, TP.HCM', 'tanloc@gmail.com', 'Vắng học nhiều', 'Long An', 'Cao đẳng', 80),
(1800001304, 'Hồ Minh Trí', '18OTO3B', 'KTOT', 'Nam', 'long Xuyên, An Giang', 'minhtri@gmail.com', 'Vắng học nhiều', 'Ang Giang', 'Đại học', 100),
(1800001307, 'Nguyển Thị Ái Ngọc', '18KYD4A', 'YD', 'Nữ', 'Phú Hòa, Phú Yên', 'aingoc@gmail.com', 'Vắng học nhiều', 'Phú Yên', 'Đại học', 100),
(1800002710, 'Mai Ka', '18NNA1A', 'NNA', 'Nữ', '27A, P.5, Phú Khương, TP.Bến Tre', 'maika@gmail.com', 'Tích cực xây dựng bài', 'Bến Tre', 'Đại học', 100),
(1800003456, 'Huỳnh Minh Long', '18OTO3C', 'KTOT', 'Nam', 'Tuy An,Phú Yên', 'minhlong@gmail.com', 'Vắng học nhiều', 'Phú Yên', 'Đại học', 100),
(1800004444, 'Hà Thanh Nhàn', '18DTH2B', 'KTOT', 'Nam', 'Vũng Tàu', 'nhan@gmail.com', 'Vắng học nhiều', 'Bến Tre', 'Cao đẳng', 80),
(1800005555, 'David Ben', '18DTH2B', 'KTOT', 'Nam', '79, Lê Thị Hoa, Phường Bình Chiểu, Quận Thủ Đức, TP.HCM', 'ben@gmail.com', 'Vắng học nhiều', 'Bến Tre', 'Đại học', 100),
(1800005814, 'Nguyễn Khánh Linh', '18DTH2B', 'CNTT', 'Nam', '63A, Tịnh Biên, An Giang', 'khanhlinh@gmail.com', 'Vắng học nhiều', 'Ang Giang', 'Đại học', 100),
(1800005870, 'Mai Thanh Huy', '18DTH2B', 'CNTT', 'Nam', '79, Lê Thị Hoa, Phường Bình Chiểu, Quận Thủ Đức, TP.HCM', 'maithanhhuy1508@gmail.com', 'Vắng học nhiều', 'Bến Tre', 'Đại học', 100),
(1800008888, 'Nguyễn Văn D', '18KYD4A', 'YD', 'Nam', 'Ba Tri, Bến Tre', 'D@gmail.com', 'Không có', 'Sóc Trăng', 'Đại học', 100),
(1800009431, 'Phạm Khanh', '18DTH2C', 'CNTT', 'Nam', 'Mỹ Tho, TP.Tiền Giang', 'phamkhanh@gmail.com', 'Vắng học nhiều', 'Tiền Giang', 'Đại học', 100);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id_AC`);

--
-- Chỉ mục cho bảng `bacdaotao`
--
ALTER TABLE `bacdaotao`
  ADD PRIMARY KEY (`tenBDT`);

--
-- Chỉ mục cho bảng `diem`
--
ALTER TABLE `diem`
  ADD KEY `diem_ibfk_1` (`mamh`),
  ADD KEY `diem_ibfk_3` (`mk`),
  ADD KEY `mssv` (`mssv`);

--
-- Chỉ mục cho bảng `giaovien`
--
ALTER TABLE `giaovien`
  ADD PRIMARY KEY (`mgv`),
  ADD UNIQUE KEY `tenkhoa` (`mk`,`mamh`,`ml`),
  ADD KEY `giaovien_ibfk_2` (`mamh`),
  ADD KEY `giaovien_ibfk_3` (`ml`);

--
-- Chỉ mục cho bảng `khoa`
--
ALTER TABLE `khoa`
  ADD PRIMARY KEY (`mk`);

--
-- Chỉ mục cho bảng `lop`
--
ALTER TABLE `lop`
  ADD PRIMARY KEY (`ml`);

--
-- Chỉ mục cho bảng `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`mamh`),
  ADD KEY `mk` (`mk`);

--
-- Chỉ mục cho bảng `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD PRIMARY KEY (`mssv`),
  ADD KEY `ml` (`ml`,`mk`,`bdt`),
  ADD KEY `stc` (`stc`),
  ADD KEY `mk` (`mk`),
  ADD KEY `sinhvien_ibfk_3` (`bdt`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id_AC` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `giaovien`
--
ALTER TABLE `giaovien`
  MODIFY `mgv` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `diem`
--
ALTER TABLE `diem`
  ADD CONSTRAINT `diem_ibfk_1` FOREIGN KEY (`mamh`) REFERENCES `monhoc` (`mamh`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `diem_ibfk_2` FOREIGN KEY (`mssv`) REFERENCES `sinhvien` (`mssv`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `diem_ibfk_3` FOREIGN KEY (`mk`) REFERENCES `khoa` (`mk`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `giaovien`
--
ALTER TABLE `giaovien`
  ADD CONSTRAINT `giaovien_ibfk_1` FOREIGN KEY (`mk`) REFERENCES `khoa` (`mk`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `giaovien_ibfk_2` FOREIGN KEY (`mamh`) REFERENCES `monhoc` (`mamh`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `giaovien_ibfk_3` FOREIGN KEY (`ml`) REFERENCES `lop` (`ml`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `lop`
--
ALTER TABLE `lop`
  ADD CONSTRAINT `lop_ibfk_3` FOREIGN KEY (`mk`) REFERENCES `khoa` (`mk`);

--
-- Các ràng buộc cho bảng `monhoc`
--
ALTER TABLE `monhoc`
  ADD CONSTRAINT `monhoc_ibfk_3` FOREIGN KEY (`mk`) REFERENCES `khoa` (`mk`);

--
-- Các ràng buộc cho bảng `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD CONSTRAINT `sinhvien_ibfk_3` FOREIGN KEY (`bdt`) REFERENCES `bacdaotao` (`tenBDT`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sinhvien_ibfk_4` FOREIGN KEY (`mk`) REFERENCES `khoa` (`mk`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sinhvien_ibfk_5` FOREIGN KEY (`ml`) REFERENCES `lop` (`ml`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
