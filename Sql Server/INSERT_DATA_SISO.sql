use db_siso

select * from database_siso.barang
select * from database_siso.dtl_peminjaman_barang

UPDATE [database_siso].[barang]
SET ketersediaan_barang = 'Booked'
WHERE id_barang = 3;

SET IDENTITY_INSERT database_siso.barang ON;
INSERT INTO database_siso.barang (id_barang, nama_barang, nomor_aktiva, tipe_barang, jumlah_barang, jumlah_optimum, jumlah_minimum, satuan_barang, kondisi_barang, gambar_barang, kategori_barang, keterangan_penyimpanan, id_dtl_penyimpanan, status_barang, ketersediaan_barang, created_by, created_date, modified_by, modified_date) VALUES
(2, 'Laptop Lenovo ThinkPad L14', '13829300', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoL14.jpg', 'Asset', '', NULL, 'Tidak Aktif', 'Available', NULL, NULL, '6', '2025-06-12'),
(3, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397000', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'Baris 1', 17, 'Aktif', 'Booke', NULL, NULL, '51795', '2025-09-16'),
(4, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397100', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(5, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397200', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(6, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397300', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(7, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397400', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(8, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397500', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(9, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397600', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(10, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397700', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(11, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397800', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(12, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397900', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(13, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398000', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(14, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398100', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(15, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398200', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(16, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398300', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', NULL, NULL, '51866', '2025-09-04'),
(17, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398400', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(18, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398500', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', NULL, NULL, '51866', '2025-09-04'),
(19, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398600', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, '51795', '2025-09-16'),
(20, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398700', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(21, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398800', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(22, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398900', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(23, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399000', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', NULL, NULL, '51866', '2025-09-04'),
(24, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399100', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(25, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399200', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', NULL, NULL, '51866', '2025-09-04'),
(26, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399300', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', NULL, NULL, '51866', '2025-09-04'),
(27, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399400', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(28, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399500', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', NULL, NULL, '51866', '2025-09-04'),
(29, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399600', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', NULL, NULL, '51866', '2025-09-04'),
(30, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399700', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Booked', NULL, NULL, NULL, NULL),
(31, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399800', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', NULL, NULL, '51866', '2025-09-04'),
(32, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399900', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Booked', NULL, NULL, '51866', '2025-09-04'),
(33, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131400000', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 2', 17, 'Tidak Aktif', 'Booked', '51795', '2025-05-20', '51866', '2025-09-04'),
(34, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131400100', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 2', 17, 'Tidak Aktif', 'Available', '51795', '2025-05-20', '51866', '2025-09-04'),
(35, 'Mouse', '1234', 'Non Consummable', 0, 20, 10, 'Pcs', 'Good', 'download_(2).jpeg', 'Non Asset', 'tidak ada', 1, 'Aktif', 'Not Available', '6', '2025-06-12', NULL, NULL),
(36, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131520000', 'Non Consummable', 1, 32, 20, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 2', 7, 'Aktif', 'Booked', '51795', '2025-06-12', NULL, NULL),
(37, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131531000', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', 'lenovoP14s.jpg', 'Asset', 'Baris 2', 7, 'Aktif', 'Booked', '51795', '2025-06-12', NULL, NULL),
(38, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13822600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13822600.jpeg', 'Asset', 'BARIS 2', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(39, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13823800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13823800.jpeg', 'Asset', 'BARIS 2', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(40, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824200.jpeg', 'Asset', 'BARIS 2', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(41, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13823200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13823200.jpeg', 'Asset', 'BARIS 2', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(42, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824500.jpeg', 'Asset', 'BARIS 2', 37, 'Aktif', 'Booked', '51866', '2025-07-12', NULL, NULL),
(43, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13823700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13823700.jpeg', 'Asset', 'BARIS 2', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(44, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13823300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13823300.jpeg', 'Asset', 'BARIS 1', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(45, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13823400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13823400.jpeg', 'Asset', 'BARIS 1', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(46, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13822700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13822700.jpeg', 'Asset', 'BARIS 1', 37, 'Aktif', 'Booked', '51866', '2025-07-12', NULL, NULL),
(47, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824100.jpeg', 'Asset', 'BARIS 1', 37, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(48, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13822800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13822800.jpeg', 'Asset', 'BARIS 3', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(49, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824400.jpeg', 'Asset', 'BARIS 3', 37, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(50, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13823600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13823600.jpeg', 'Asset', 'BARIS 3', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(51, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13823100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13823100.jpeg', 'Asset', 'BARIS 3', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(52, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13823000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13823000.jpeg', 'Asset', 'BARIS 3', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(53, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13822900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 3 (tidak ada tali)', 37, 'Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(54, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824000.jpeg', 'Asset', 'BARIS 3', 37, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(55, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13823500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13823500.jpeg', 'Asset', 'Baris 4', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(56, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824300.jpeg', 'Asset', 'Baris 4', 37, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(57, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13823900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 4', 37, 'Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(58, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13820600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13820600.jpg', 'Asset', 'BARIS 1', 38, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(59, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13821600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13821600.jpeg', 'Asset', 'Baris 1', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(60, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13822200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13822200.jpg', 'Asset', 'BARIS 1', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(61, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13822500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13822500.jpeg', 'Asset', 'Baris 1', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(62, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13821400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13821400.jpg', 'Asset', 'BARIS 1', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(63, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13821500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13821500.jpeg', 'Asset', 'Baris 1', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(64, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13822100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13822100.jpg', 'Asset', 'BARIS 1', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(65, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13821300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13821300.jpeg', 'Asset', 'BARIS 1', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(66, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13821100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13821100.jpg', 'Asset', 'BARIS 1', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(67, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13820700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13820700.jpeg', 'Asset', 'BARIS 2', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(68, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13821000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13821000.jpg', 'Asset', 'BARIS 2', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(69, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13821200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 2 (tidak ada tali)', 38, 'Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(70, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13821800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13821800.jpg', 'Asset', 'BARIS 3', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(71, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13822300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13822300.jpeg', 'Asset', 'BARIS 3', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(72, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13822400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13822400.jpg', 'Asset', 'BARIS 3', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(73, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13822000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 3', 38, 'Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(74, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13820800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13820800.jpg', 'Asset', 'BARIS 4', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(75, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13821700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13821700.jpeg', 'Asset', 'BARIS 4', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(76, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13821900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13821900.jpg', 'Asset', 'BARIS 4', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(77, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13820900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13820900.jpeg', 'Asset', 'BARIS 4', 38, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(78, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13829900', 'Non Consummable', 1, 1, 1, 'Lembar', 'Good', '13829900.jpeg', 'Asset', 'BARIS 1', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(79, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13830300.jpg', 'Asset', 'BARIS 1', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(80, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13830300.jpg', 'Asset', 'BARIS 1', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(81, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13830900.jpeg', 'Asset', 'BARIS 1', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(82, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13829500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13829500.jpg', 'Asset', 'BARIS 1', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(83, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13830400.jpeg', 'Asset', 'BARIS 1', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(84, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 1 (tidak ada tali)', 39, 'Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(85, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13830100.jpeg', 'Asset', 'BARIS 1', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(86, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13830600.jpg', 'Asset', 'BARIS 2', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(87, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13829800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13829800.jpeg', 'Asset', 'BARIS 2', 39, 'Aktif', 'Booked', '51866', '2025-07-12', NULL, NULL),
(88, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13830700.jpg', 'Asset', 'BARIS 2', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(89, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13830500.jpeg', 'Asset', 'BARIS 2', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(90, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13830200.jpeg', 'Asset', 'BARIS 2', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(91, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13831400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13831400.jpg', 'Asset', 'BARIS 2', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(92, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13831300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13831300.jpeg', 'Asset', 'BARIS 2', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(93, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13831700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13831700.jpg', 'Asset', 'BARIS 3', 39, 'Aktif', 'Booked', '51866', '2025-07-12', NULL, NULL),
(94, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832900.jpeg', 'Asset', 'BARIS 3', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(95, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13831800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13831800.jpg', 'Asset', 'BARIS 3', 39, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(96, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832300.jpeg', 'Asset', 'BARIS 3', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(97, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13831600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 3 (tidak ada tali)', 39, 'Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(98, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832800.jpeg', 'Asset', 'BARIS 3', 39, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(99, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13831200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13831200.jpg', 'Asset', 'BARIS 3', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(100, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832100.jpeg', 'Asset', 'BARIS 3', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(101, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832500.jpg', 'Asset', 'BARIS 4', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(102, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13833500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13833500.jpeg', 'Asset', 'BARIS 4', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(103, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832700.jpg', 'Asset', 'BARIS 4', 39, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(104, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13831900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13831900.jpeg', 'Asset', 'BARIS 4', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(105, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832600.jpg', 'Asset', 'BARIS 4', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(106, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13833300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13833300.jpeg', 'Asset', 'BARIS 4', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(107, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832400.jpg', 'Asset', 'BARIS 4', 39, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(108, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835300.jpg', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(109, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13868200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13868200.jpg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(110, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835800.jpg', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(111, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13868700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13868700.jpg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(112, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835400.jpg', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(113, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13834900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13834900.jpg', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(114, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13868800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13868800.jpg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(115, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13868900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13868900.jpg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(116, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835600.jpg', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(117, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13836100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13836100.jpeg', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(118, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13868600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13868600.jpg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(119, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835700.jpeg', 'Asset', 'BARIS 2', 40, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(120, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13868300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13868300.jpg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Booked', '51866', '2025-07-12', NULL, NULL),
(121, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835500.jpeg', 'Asset', 'Baris 4', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(122, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13836000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13836000.jpg', 'Asset', 'BARIS 1', 40, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(123, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835200.jpeg', 'Asset', 'BARIS 4', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(124, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835000.jpg', 'Asset', 'BARIS 3', 40, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(125, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13834700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13834700.jpg', 'Asset', 'BARIS 3', 40, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(126, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13829000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13829000.jpeg', 'Asset', 'BARIS 4', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(127, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835100.jpeg', 'Asset', 'BARIS 4', 40, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(128, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13836300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13836300.jpg', 'Asset', 'BARIS 3', 40, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(129, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13834800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13834800.jpg', 'Asset', 'BARIS 3', 40, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(130, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13836400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13836400.jpg', 'Asset', 'BARIS 3', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(131, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13820500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13820500.jpg', 'Asset', 'BARIS 3', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(132, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835900.jpg', 'Asset', 'BARIS 3', 40, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(133, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827200.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(134, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13836200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13836200.jpg', 'Asset', 'BARIS 3', 40, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(135, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824600.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(136, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827100.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(137, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13826600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13826600.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(138, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827800.jpeg', 'Asset', 'BARIS 1', 7, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(139, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827600.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(140, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13826900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13826900.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(141, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827700.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(142, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827000.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(143, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827500.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(144, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827300.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(145, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13828200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13828200.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(146, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13828300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13828300.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(147, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13828400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13828400.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(148, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827400.jpg', 'Asset', 'BARIS 2', 7, 'Tidak Aktif', 'Available', '51866', '2025-07-12', '51866', '2025-09-04'),
(149, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13828100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13828100.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(150, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13828000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13828000.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(151, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13863800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13863800.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(152, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827900.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(153, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13864400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13864400.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(154, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13826800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13826800.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(155, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13863700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13863700.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(156, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13826700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13826700.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(157, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13864000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13864000.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(158, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13864100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13864100.jpg', 'Asset', 'BARIS 4', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(159, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13869200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13869200.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(160, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13864300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13864300.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(161, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13863900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13863900.jpg', 'Asset', 'BARIS 4', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(162, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13863500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13863500.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(163, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13864600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13864600.jpg', 'Asset', 'BARIS 4', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(164, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13864500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13864500.jpg', 'Asset', 'BARIS 4', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(165, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13864200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13864200.jpg', 'Asset', 'BARIS 4', 7, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(166, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13833000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13833000.jpeg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51866', '2025-07-12', '51729', '2025-12-14'),
(167, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13833000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13833000.jpeg', 'Asset', 'BARIS 1', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(168, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832000.jpeg', 'Asset', 'BARIS 1', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(169, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13833400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13833400.jpeg', 'Asset', 'BARIS 1', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(170, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832200.jpeg', 'Asset', 'BARIS 1', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(171, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832100.jpeg', 'Asset', 'BARIS 1', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(172, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13833100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13833100.jpg', 'Asset', 'BARIS 2', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(173, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13867600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13867600.jpg', 'Asset', 'BARIS 4', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(174, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13867900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13867900.jpg', 'Asset', 'Baris 4', 7, 'Aktif', 'Available', '51866', '2025-07-12', '51729', '2025-12-14'),
(175, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13833200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13833200.jpg', 'Asset', 'BARIS 2', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(176, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13867500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13867500.jpg', 'Asset', 'BARIS 4', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(177, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13867400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13867400.jpg', 'Asset', 'BARIS 2', 3, 'Aktif', 'Booked', '51866', '2025-07-12', NULL, NULL),
(178, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13867200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13867200.jpg', 'Asset', 'BARIS 2', 3, 'Aktif', 'Booked', '51866', '2025-07-12', NULL, NULL),
(179, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13867800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13867800.jpg', 'Asset', 'BARIS 2', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(180, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13867300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13867300.jpg', 'Asset', 'BARIS 3', 3, 'Aktif', 'Available', '51866', '2025-07-12', NULL, NULL),
(181, 'LAPTOP_NOTEBOOK_LENOVO_P15V AMD RYZEN 7P 6850H', '13867700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13867700.jpg', 'Asset', 'BARIS 3', 3, 'Aktif', 'Booked', '51866', '2025-07-12', NULL, NULL),
(183, 'PC Lenovo', '7009', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '7009.png', 'Asset', '-', 1, 'Aktif', 'Booked', '51866', '2025-07-16', NULL, NULL),
(184, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397123', 'Consummable', 1, 1, 1, 'Pcs', 'Good', '131397123.png', 'Asset', '1', 39, 'Aktif', 'Available', '51795', '2025-07-16', NULL, NULL),
(185, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781400.png', 'Asset', 'BARIS 1', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(186, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781300.png', 'Asset', 'BARIS 1', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(187, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781500.png', 'Asset', 'BARIS 1', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(188, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781800.', 'Asset', 'BARIS 2', 1, 'Tidak Aktif', 'Available', '51866', '2025-08-07', '51866', '2025-08-07'),
(189, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781200.png', 'Asset', 'BARIS 1', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(190, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781900.', 'Asset', 'BARIS 2', 1, 'Tidak Aktif', 'Available', '51866', '2025-08-07', '51866', '2025-08-07'),
(191, 'PC_CPU_LENOVO_TCM70S_INTEL', '13783800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 3', 1, 'Tidak Aktif', 'Available', '51866', '2025-08-07', '51866', '2025-08-07'),
(192, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781600.png', 'Asset', 'BARIS 2', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(193, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781700.png', 'Asset', 'BARIS 2', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(194, 'PC_CPU_LENOVO_TCM70S_INTEL', '13783600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13783600.png', 'Asset', 'BARIS 3', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(195, 'PC_CPU_LENOVO_TCM70S_INTEL', '13783500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13783500.png', 'Asset', 'BARIS 3', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(196, 'PC_CPU_LENOVO_TCM70S_INTEL', '13782100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13782100.png', 'Asset', 'BARIS 2', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(197, 'PC_CPU_LENOVO_TCM70S_INTEL', '13782000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13782000.png', 'Asset', 'BARIS 2', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(198, 'PC_CPU_LENOVO_TCM70S_INTEL', '13782200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13782200.png', 'Asset', 'BARIS 2', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(199, 'PC_CPU_LENOVO_TCM70S_INTEL', '13782300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13782300.png', 'Asset', 'BARIS 2', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(200, 'PC_CPU_LENOVO_TCM70S_INTEL', '13783700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13783700.png', 'Asset', 'BARIS 3', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(201, 'PC_CPU_LENOVO_TCM70S_INTEL', '13783200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13783200.png', 'Asset', 'BARIS 3', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(202, 'PC_CPU_LENOVO_TCM70S_INTEL', '13783300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13783300.png', 'Asset', 'BARIS 3', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(203, 'PC_CPU_LENOVO_TCM70S_INTEL', '13783400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13783400.png', 'Asset', 'BARIS 3', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(204, 'PC_CPU_LENOVO_TCM70S_INTEL', '13782700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13782700.png', 'Asset', 'BARIS 1', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(205, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781100.png', 'Asset', 'BARIS 1', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(206, 'PC_CPU_LENOVO_TCM70S_INTEL', '13780800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13780800.png', 'Asset', 'BARIS 1', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(207, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781000.png', 'Asset', 'BARIS 1', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(208, 'PC_CPU_LENOVO_TCM70S_INTEL', '13780900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13780900.png', 'Asset', 'BARIS 2', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(209, 'PC_CPU_LENOVO_TCM70S_INTEL', '13782400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13782400.png', 'Asset', 'BARIS 2', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(210, 'PC_CPU_LENOVO_TCM70S_INTEL', '13782600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13782600.png', 'Asset', 'BARIS 2', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(211, 'PC_CPU_LENOVO_TCM70S_INTEL', '13782800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13782800.png', 'Asset', 'BARIS 3', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(212, 'PC_CPU_LENOVO_TCM70S_INTEL', '13782500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13782500.png', 'Asset', 'BARIS 2', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(213, 'PC_CPU_LENOVO_TCM70S_INTEL', '13782900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13782900.png', 'Asset', 'BARIS 3', 2, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(214, 'PC_CPU_LENOVO_TCM70S_INTEL', '13783000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13783000.png', 'Asset', 'BARIS 3', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(215, 'PC_CPU_LENOVO_TCM70S_INTEL', '13783100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13783100.png', 'Asset', 'BARIS 3', 2, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(216, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781800.png', 'Asset', 'BARIS 2', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(217, 'PC_CPU_LENOVO_TCM70S_INTEL', '13781900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13781900.png', 'Asset', 'BARIS 2', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(218, 'PC_CPU_LENOVO_TCM70S_INTEL', '13783800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13783800.png', 'Asset', 'BARIS 3', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(219, 'TOOLS_UPS 1600 VA900', '331407300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '331407300.png', 'Asset', 'BARIS 3', 1, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(220, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13860301', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860301.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(221, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13860201', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860201.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(222, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13860101', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860101.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(223, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13860001', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860001.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(224, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13862901', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13862901.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(225, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13863001', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13863001.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(226, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13869801', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13869801.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(227, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13861100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861100.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(228, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13869901', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13869901.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(229, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13861201', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861201.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(230, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13861301', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861301.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(231, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13861000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861000.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(232, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13861401', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861401.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(233, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13861601', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861601.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(234, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13861801', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861801.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(235, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13860900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860900.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(236, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13860601', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860601.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(237, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13860700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860700.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(238, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13861101', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861101.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(239, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13861001', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861001.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(240, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13860600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860600.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(241, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13860901', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860901.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(242, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13860801', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860801.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(243, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13861800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861800.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(244, 'PC_MONITOR_LENOVO_P27H-20 27-INCH', '13860701', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860701.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(245, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13861600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861600.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(246, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13861500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861500.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(247, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13860600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860600.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(248, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13860400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860400.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(249, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13861400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861400.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(250, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13861300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861300.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(251, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13860300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 1', 5, 'Tidak Aktif', 'Available', '51866', '2025-08-07', '51866', '2025-08-07'),
(252, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13860200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860200.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(253, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13861200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13861200.png', 'Asset', 'BARIS 2', 6, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(254, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13860100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860100.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(255, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13860000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860000.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(256, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13862300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13862300.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(257, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13860300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13860300.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(258, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13862700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13862700.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(259, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13862900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13862900.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(260, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13862800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13862800.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(261, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13863000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13863000.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Booked', '51866', '2025-08-07', NULL, NULL),
(262, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13869800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13869800.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(263, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13869900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13869900.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(264, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13862100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13862100.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(265, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13862000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13862000.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(266, 'PC_CPU_LENOVO_INTEL CORE I7-12700K', '13862200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13862200.png', 'Asset', 'BARIS 1', 5, 'Aktif', 'Available', '51866', '2025-08-07', NULL, NULL),
(267, 'LINKSYS 8 PORT', 'NA02137M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02137M.', 'Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-13', '51795', '2025-08-13'),
(268, 'LINKSYS 8 PORT', 'NA02137M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02137M.jpg', 'Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-13', '51795', '2025-08-13'),
(269, 'LINKSYS 8 PORT', 'NA02130M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Non Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-13', '51795', '2025-08-13'),
(270, 'RUIJIE RG-EG105GW(T)', 'NA02118M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02118M.jpeg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(271, 'LINKSYS 8 PORT', 'NA02137M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02137M.jpg', 'Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-13', '51795', '2025-08-13'),
(272, 'RUIJIE RG-EG105GW(T)', 'NA02108M', 'Non Consummable', 0, 1, 1, 'Pcs', 'Good', 'NA02108M.jpeg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Not Available', '51795', '2025-08-13', NULL, NULL),
(273, 'LINKSYS 8 PORT', 'NA02137M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02137M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(274, 'LINKSYS 8 PORT', 'NA02130M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02130M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(275, 'HUAWAWEI ADAPTER POWER', 'NA02125T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02125T.jpg', 'Non Asset', 'Baris 1', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(276, 'LINKSYS 8 PORT', 'NA02139M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02139M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(277, 'HUAWAWEI ADAPTER POWER', 'NA02124T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02124T.jpg', 'Non Asset', 'Baris 1', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(278, 'LINKSYS 8 PORT', 'NA02135M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02135M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(279, 'RUIJIE RG-EG105GW(T)', 'NA02113M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02113M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(280, 'LINKSYS 8 PORT', 'NA02134M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02134M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(281, 'LINKSYS 8 PORT', 'NA02140M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02140M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(282, 'RUIJIE RG-EG105GW(T)', 'NA02110M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02110M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(283, 'HUAWAWEI WAIRLESS LAN ACCESS POINT', 'NA02122M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02122M.jpg', 'Non Asset', 'Baris 1', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(284, 'LINKSYS 8 PORT', 'NA02131M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02131M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(285, 'HUAWAWEI WAIRLESS LAN ACCESS POINT', 'NA02123M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02123M.jpg', 'Non Asset', 'Baris 1', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(286, 'LINKSYS 8 PORT', 'NA02144M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02144M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(287, 'LINKSYS 8 PORT', 'NA02141M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02141M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(288, 'ANTENA MOTOROLA', 'NA02126C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02126C.jpg', 'Non Asset', 'Baris 1', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(289, 'ANTENA MOTOROLA', 'NA02127C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02127C.jpg', 'Non Asset', 'Baris 1', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(290, 'ANTENA MOTOROLA', 'NA02128C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02128C.jpg', 'Non Asset', 'Baris 1', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(291, 'NA02132M', 'LINKSYS 8 PORT', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'LINKSYS_8_PORT.jpg', 'Non Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-13', '51795', '2025-08-14'),
(292, 'LINKSYS 8 PORT', 'NA02136M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02136M.jpg', 'Non Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-13', '51795', '2025-08-14'),
(293, 'KABEL LAN', 'NAL0001', 'Non Consummable', 49, 49, 1, 'Pcs', 'Good', 'NAL0001.', 'Non Asset', 'LAB CB 106', 42, 'Aktif', 'Available', '51795', '2025-08-13', '51795', '2025-08-20'),
(294, 'NA02138M', 'LINKSYS 8 PORT', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'LINKSYS_8_PORT.jpg', 'Non Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-13', '51795', '2025-08-14'),
(295, 'HUAWAWEI SWITCH 4*GE SFP', 'NA02119M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02119M.jpg', 'Non Asset', 'Baris 1', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(296, 'HUAWAWEI SWITCH 4*GE SFP', 'NA02120M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02120M.jpg', 'Non Asset', 'Baris 1', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(297, 'LINKSYS 8 PORT', 'NA02133M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02133M.jpg', 'Non Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-13', '51795', '2025-08-14'),
(298, 'HUAWAWEI SWITCH 4*GE SFP', 'NA02121M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02121M.jpg', 'Non Asset', 'Baris 1', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(299, 'NA02142M', 'LINKSYS 8 PORT', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'LINKSYS_8_PORT.jpg', 'Non Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-13', '51795', '2025-08-14'),
(300, 'ASUS RT-AX56U SMART WIFI ROUTER', 'NA02129M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02129M.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(301, 'CISCO CATALYST 9100 AX SERIES', 'NA01076T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01076T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(302, 'CISCO CATALYST 9100 AX SERIES', 'NA00201T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00201T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(303, 'CISCO CATALYST 9100 AX SERIES', 'NA00199T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00199T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(304, 'CISCO CATALYST 9100 AX SERIES', 'NA00202T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00202T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-13', NULL, NULL),
(305, 'LINKSYS 8 PORT', 'NA02138M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02138M.jpg', 'Non Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(306, 'LINKSYS 8 PORT', 'NA02132M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02132M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(307, 'LINKSYS 8 PORT', 'NA02136M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02136M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(308, 'LINKSYS 8 PORT', 'NA02138M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02138M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(309, 'LINKSYS 8 PORT', 'NA02133M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02133M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(310, 'LINKSYS 8 PORT', 'NA02142M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02142M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(311, 'LINKSYS 8 PORT', 'NA0123M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0123M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(312, 'LINKSYS 8 PORT', 'NA0124M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0124M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(313, 'CISCO CATALYST 9100 AX SERIES', 'NA00200T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00200T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(314, 'CISCO CATALYST 9100 AX SERIES', 'NA00220T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00220T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(315, 'CISCO CATALYST 9100 AX SERIES', 'NA01074T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01074T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(316, 'LINKSYS 8 PORT', 'NA0048-M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0048-M.jpg', 'Non Asset', 'Baris 1', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(317, 'CISCO CATALYST 9100 AX SERIES', 'NA00257T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00257T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(318, 'CISCO CATALYST 9100 AX SERIES', 'NA00203T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00203T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(319, 'CISCO CATALYST 9100 AX SERIES', 'NA00198T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00198T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(320, 'CISCO CATALYST 9100 AX SERIES', 'NA00269T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00269T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(321, 'CISCO CATALYST 9100 AX SERIES', 'NA00219T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00219T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(322, 'CISCO CATALYST 9100 AX SERIES', 'NA00195T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00195T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(323, 'CISCO CATALYST 9100 AX SERIES', 'NA00297T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00297T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(324, 'CISCO CATALYST 9100 AX SERIES', 'NA00274T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00274T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(325, 'CISCO CATALYST 9100 AX SERIES', 'NA01073T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01073T.jpg', 'Non Asset', 'Baris 2', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(326, 'HUAWAWEI ETHERNET SWITCH', 'NA02165M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02165M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(327, 'MOTOROLA AP6532', 'NA02157M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02157M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(328, 'MOTOROLA AP6532', 'NA02163M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02163M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(329, 'Huawei Wireless LAN Access Point', 'NA0125M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0125M.jpg', 'Non Asset', 'Baris 1', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(330, 'MOTOROLA AP6532', 'NA02151M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02151M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(331, 'MOTOROLA AP6532', 'NA02146M', 'Non Consummable', 0, 1, 1, 'Pcs', 'Good', 'NA02146M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Not Available', '51795', '2025-08-14', NULL, NULL),
(332, 'MOTOROLA AP6532', 'NA02145M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02145M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(333, 'MOTOROLA AP6532', 'NA02162M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02162M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(334, 'MOTOROLA AP6532', 'NA02153M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02153M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(335, 'MOTOROLA AP6532', 'NA02150M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02150M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(336, 'MOTOROLA AP6532', 'NA02154M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02154M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(337, 'MOTOROLA AP6532', 'NA02149M', 'Non Consummable', 0, 1, 1, 'Pcs', 'Good', 'NA02149M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Not Available', '51795', '2025-08-14', NULL, NULL),
(338, 'MOTOROLA AP6532', 'NA02152M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02152M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(339, 'MOTOROLA AP6532', 'NA02161M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02161M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(340, 'MOTOROLA AP6532', 'NA02148M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02148M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(341, 'MOTOROLA AP6532', 'NA02160M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02160M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(342, 'MOTOROLA AP6532', 'NA02159M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02159M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(343, 'Huawei Wireless LAN Access Point', 'NA0125M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0125M.jpg', 'Non Asset', 'Baris 2', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(344, 'MOTOROLA AP6532', 'NA02158M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02158M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(345, 'MOTOROLA AP6532', 'NA02164M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02164M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(346, 'Huawei Wireless LAN Access Point', 'NA0126M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0126M.jpg', 'Non Asset', 'Baris 2', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(347, 'MOTOROLA AP6532', 'NA02147M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02147M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(348, 'MOTOROLA AP6532', 'NA02156M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02156M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(349, 'MOTOROLA AP6532', 'NA02155M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02155M.jpg', 'Non Asset', 'Baris 3', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(350, 'D-LINK WIRELESS N ACCESS POINT', 'NA00480M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00480M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(351, 'D-LINK WIRELESS N ACCESS POINT', 'NA00482M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00482M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(352, 'D-LINK WIRELESS N ACCESS POINT', 'NA00481M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00481M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(353, 'D-LINK WIRELESS N ACCESS POINT', 'NA00483M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00483M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(354, 'D-LINK WIRELESS N ACCESS POINT', 'NA00479M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00479M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(355, 'Huawei (Box Besar)', 'NA0127M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0127M.jpg', 'Non Asset', 'Baris 2', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(356, 'D-LINK 16-PORT 10/100 DESKTOP SWITCH', 'NA00540M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00540M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(357, 'Huawei (Box Besar)', 'NA0128M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0128M.jpg', 'Non Asset', 'Baris 2', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(358, 'D-LINK 16-PORT 10/100 DESKTOP SWITCH', 'NA00541M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00541M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(359, 'D-LINK WIFI RANGE EXTENDER / ACCESS POINT', 'NA00484M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00484M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(360, 'D-LINK WIFI RANGE EXTENDER / ACCESS POINT', 'NA00485M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00485M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(361, 'D-LINK WIFI RANGE EXTENDER / ACCESS POINT', 'NA00486M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00486M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(362, 'D-LINK WIFI RANGE EXTENDER / ACCESS POINT', 'NA00487M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00487M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(363, 'D-LINK WIFI RANGE EXTENDER / ACCESS POINT', 'NA00488M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00488M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(364, 'TP-LINK 300MBPS WIRELESS N GIGABIT ROUTER', 'NA00476M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00476M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(365, 'CISCO LINKSYS WIRELESS-N BROADBAND ROUTER', 'NA00468M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00468M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(366, 'Huawei (Box Besar)', 'NA0129M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0129M.jpg', 'Non Asset', 'Baris 2', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(367, 'Huawei (Box Besar)', 'NA0130M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0130M.jpg', 'Non Asset', 'Baris 2', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(368, 'D-LINK 16-PORT 10/100 DESKTOP SWITCH', 'NA00540M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00540M.', 'Non Asset', 'Baris 4', 11, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(369, 'Huawei (Box Besar)', 'NA0131M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0131M.jpg', 'Non Asset', 'Baris 2', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(370, 'HP V1410HP-24 SWITCH', 'NA00570M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00570M.jpg', 'Non Asset', 'Baris 4', 11, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(371, 'Huawei (Box Besar)', 'NA0132M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0132M.jpg', 'Non Asset', 'Baris 2', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(372, 'D-LINK 16-PORT 10/100 DESKTOP SWITCH', 'NA00540M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00540M.jpg', 'Non Asset', 'Baris 4', 11, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(373, 'Huawei (Box Besar)', 'NA0133M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0133M.jpg', 'Non Asset', 'Baris 2', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(374, 'Huawei Wireless LAN Access Point', 'NA0134M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0134M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(375, 'D-LINK 16-PORT 10/100 DESKTOP SWITCH', 'NA00540M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00540M.jpg', 'Non Asset', 'Baris 4', 11, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(376, 'D-LINK 16-PORT DESKTOP SWITCH', 'NA00540M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00540M.jpg', 'Non Asset', 'Baris 4', 11, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(377, 'Huawei Wireless LAN Access Point', 'NA0135M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0135M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(378, 'D-LINK 16-PORT 10/100 DESKTOP SWITCH', 'NA00540M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00540M.jpg', 'Non Asset', 'Baris 4', 11, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(379, 'Huawei Wireless LAN Access Point', 'NA0136M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0136M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(380, 'Huawei Wireless LAN Access Point', 'NA0137M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0137M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(381, 'Huawei Wireless LAN Access Point', 'NA0138M', 'Non Consummable', 2, 1, 1, 'Pcs', 'Good', 'NA0138M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(382, 'D-LINK 16-PORT 10/100 DESKTOP SWITCH', 'NA00540M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00540M.jpg', 'Non Asset', 'Baris4', 11, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(383, 'D-LINK 16-PORT 10/100 DESKTOP SWITCH BASIC NETWORKING', 'NA00540M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00540M.jpg', 'Non Asset', 'Baris4', 11, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(384, 'RUIJIE RG-EG105GW(T)', 'NA02104M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02104M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(385, 'RUIJIE RG-EG105GW(T)', 'NA02106M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02106M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(386, 'RUIJIE RG-EG105GW(T)', 'NA02112M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02112M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(387, 'RUIJIE RG-EG105GW(T)', 'NA02107M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02107M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(388, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0139M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0139M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(389, 'RUIJIE RG-EG105GW(T)', 'NA02109M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02109M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(390, 'RUIJIE RG-EG105GW(T)', 'NA02116M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02116M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(391, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0140M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0140M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(392, 'RUIJIE RG-EG105GW(T)', 'NA02111M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02111M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(393, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0141M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0141M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(394, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0142M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0142M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(395, 'RUIJIE RG-EG105GW(T)', 'NA02115M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02115M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(396, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0143M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0143M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(397, 'RUIJIE RG-EG105GW(T)', 'NA02117M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02117M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(398, 'RUIJIE RG-EG105GW(T)', 'NA02114M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02114M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(399, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0144M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0144M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(400, 'RUIJIE RG-EG105GW(T)', 'NA02103M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02103M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(401, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0145M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0145M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(402, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0146M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0146M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(403, 'RUIJIE RG-EG105GW(T)', 'NA02105M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02105M.jpg', 'Non Asset', 'Baris 1', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(404, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0147M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0147M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(405, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0148M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0148M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(406, 'LAPTOP LENOVO THINKPAD', 'NA00979M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00979M.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(407, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0149M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0149M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(408, 'LAPTOP LENOVO THINKPAD', 'NA00978M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00978M.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(409, 'LAPTOP LENOVO THINKPAD', 'NA00990M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00990M.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(410, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0150M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0150M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(411, 'LAPTOP LENOVO THINKPAD', 'NA00993M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00993M.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(412, 'LAPTOP TOSHIBA', 'NA00977M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(413, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0151M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0151M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(414, 'LAPTOP TOSHIBA', 'NA00984M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00984M.jpg', 'Asset', 'Baris 1', 17, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(415, 'TP-LINK 300 Mbps Wireless N Access Point', 'NA0152M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0152M.jpg', 'Non Asset', 'Baris 3', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(416, 'LAPTOP LENOVO THINKPAD', 'NA00979M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00979M.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(417, 'LAPTOP LENOVO THINKPAD', 'NA00978M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00978M.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(418, 'LAPTOP LENOVO THINKPAD', 'NA00990M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00990M.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(419, 'LAPTOP LENOVO THINKPAD', 'NA00993M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00993M.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(420, 'Routerboard Mikrotik RB951 Series', 'NA00515M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00515M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(421, 'LAPTOP TOSHIBA', 'NA00977M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00977M.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(422, 'LAPTOP TOSHIBA', 'NA00984M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00984M.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(423, 'Routerboard Mikrotik RB951 Series', 'NA00513M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00513M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(424, 'Routerboard Mikrotik RB951 Series', 'NA00514M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00514M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(425, 'Routerboard Mikrotik RB951 Series', 'NA00511M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00511M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(426, 'Routerboard Mikrotik RB951 Series', 'NA00512M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00512M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(427, 'CISCO WAP121 WIRELESS-N ACCESS POINT WITH SINGLE', 'NA00475M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00475M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(428, 'Routerboard Mikrotik RB951 Series', 'NA00516M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00516M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(429, 'Routerboard Mikrotik RB951 Series', 'NA00517M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00517M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(430, 'Routerboard Mikrotik RB951 Series', 'NA00518M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00518M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(431, 'Routerboard Mikrotik RB951 Series', 'NA00510M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00510M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(432, 'Routerboard Mikrotik RB260 GSP', 'NA00497M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00497M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(433, 'Routerboard Mikrotik RB260 GSP', 'NA00505M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00505M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(434, 'Routerboard Mikrotik RB260 GSP', 'NA00509M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00509M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(435, 'Routerboard Mikrotik RB260 GSP', 'NA00507M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00507M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(436, 'Routerboard Mikrotik RB260 GSP', 'NA00495M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00495M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(437, 'Routerboard Mikrotik RB260 GSP', 'NA00496M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00496M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(438, 'Routerboard Mikrotik RB260 GSP', 'NA00499M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00499M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(439, 'Routerboard Mikrotik RB260 GSP', 'NA00501M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00501M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(440, 'Routerboard Mikrotik RB260 GSP', 'NA00498M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00498M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(441, 'Routerboard Mikrotik RB260 GSP', 'NA00508M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00508M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(442, 'Routerboard Mikrotik RB260 GSP', 'NA00504M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00504M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(443, 'Routerboard Mikrotik RB260 GSP', 'NA00502M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00502M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(444, 'Routerboard Mikrotik RB260 GSP', 'NA00503M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00503M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(445, 'Routerboard Mikrotik RB260 GSP', 'NA00506M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00506M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(446, 'Routerboard Mikrotik RB260 GSP', 'NA00500M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00500M.jpg', 'Non Asset', 'Baris 2', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(447, 'MIKROTIK hAP AX2', 'NA00001M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00001M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(448, 'MIKROTIK hAP AX2', 'NA00002M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00002M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(449, 'MIKROTIK hAP AX2', 'NA00003M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00003M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(450, 'MIKROTIK hAP AX2', 'NA00004M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00004M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(451, 'MIKROTIK hAP AX2', 'NA00005M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00005M.jpg', 'Non Asset', 'Baris 2', 9, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(452, 'MIKROTIK hAP AX2', 'NA00006M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00006M.jpg', 'Non Asset', 'Baris 2', 9, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(453, 'MIKROTIK hAP AX2', 'NA00006M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00006M.jpg', 'Asset', 'Baris 2', 9, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(454, 'LAPTOP HP', 'NA00976M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00976M.jpg', 'Asset', 'Baris 2', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(455, 'LAPTOP HP', 'NA00980M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00980M.jpg', 'Asset', 'Baris 2', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(456, 'MIKROTIK hAP AX2', 'NA00007M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00007M.jpg', 'Asset', 'Baris 2', 9, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(457, 'LAPTOP LENOVO THINKPAD', 'NA00988M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00988M.jpg', 'Asset', 'Baris 2', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(458, 'LAPTOP LENOVO THINKPAD', 'NA00981M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00981M.jpg', 'Asset', 'Baris 2', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(459, 'MIKROTIK hAP AX2', 'NA00008M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00008M.jpg', 'Non Asset', 'Baris 2', 9, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(460, 'LAPTOP LENOVO THINKPAD', 'NA00992M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00992M.jpg', 'Asset', 'Baris 2', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(461, 'LAPTOP LENOVO THINKPAD', 'NA00974M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00974M.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(462, 'LAPTOP LENOVO THINKPAD', 'NA00991M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00991M.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(463, 'LAPTOP HP', 'NTB-096', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NTB-096.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(464, 'LAPTOP HP', 'NA00987M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00987M.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(465, 'LAPTOP HP', 'NA00975M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00975M.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(466, 'PC MONITOR LCD LENOVO 18\"', '13111800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13111800.jpg', 'Asset', 'Di atas lemari 9', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(467, 'PC MONITOR LCD LENOVO 18\"', '13569700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13569700.jpg', 'Asset', 'Di atas lemari 9', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(468, 'PC MONITOR LCD LENOVO 18\"', '13568600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13568600.jpg', 'Asset', 'Di atas lemari 9', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(469, 'PC MONITOR LCD LENOVO 18\"', '13569500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13569500.jpg', 'Asset', 'Di atas lemari 9', 17, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(470, 'PC Simbada Gaming', 'NA02298M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02298M.', 'Asset', 'BARIS 1', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(471, 'ADAPTOR ACCESS POINT', 'NA153M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA153M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(472, 'PC Simbada Gaming', 'NA02298M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02298M.jpg', 'Asset', 'BARIS 1', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(473, 'PC Lenovo ThinkCentre', 'NA00611', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00611.jpg', 'Asset', 'BARIS 1', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(474, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA00678T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00678T.', 'Non Asset', 'Baris 1 ', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(475, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA00677T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00677T.', 'Non Asset', '1 undefined', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(476, 'PC Lenovo ThinkCentre', '13441800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13441800.jpg', 'Asset', 'BARIS 2', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(477, 'LAN CABLE SOLUTION', 'NA00683T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00683T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(478, 'LAN CABLE SOLUTION', 'NA00684T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00684T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(479, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA00678T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00678T.jpeg', 'Non Asset', 'Baris 1', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(480, 'PC Lenovo ThinkCentre', '13441700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13441700.jpg', 'Asset', 'BARIS 2', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(481, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA00678T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00678T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(482, 'ROUTERBOARD RB2011', 'NA00524M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00524M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(483, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA00677T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00677T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(484, 'PERKAKAS', 'NA00717T', 'Non Consummable', 1, 1, 1, 'Pack', 'Good', 'NA00717T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(485, 'PC Lenovo ThinkCentre', 'NA00638E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00638E.jpg', 'Asset', 'BARIS 2', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(486, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA00830T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00830T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(487, 'PERKAKAS', 'NA0101T', 'Non Consummable', 1, 1, 1, 'Pack', 'Good', 'NA0101T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(488, 'PC Lenovo ThinkCentre', 'NA00627E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00627E.jpg', 'Asset', 'BARIS 2', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(489, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA00679T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00679T.jpeg', 'Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(490, 'PERKAKAS', 'NA00714T', 'Non Consummable', 1, 1, 1, 'Pack', 'Good', 'NA00714T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(491, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA00831T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00831T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(492, 'PC Lenovo ThinkCentre', '13439900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13439900.jpg', 'Asset', 'BARIS 2', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(493, 'PERKAKAS', 'NA00715T', 'Non Consummable', 1, 1, 1, 'Pack', 'Good', 'NA00715T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(494, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02211T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02211T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(495, 'PC Lenovo ThinkCentre', 'NA00636E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00636E.jpg', 'Asset', 'BARIS 3', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(496, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02216T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02216T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(497, 'PC Lenovo ThinkCentre', 'NA00637E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00637E.jpg', 'Asset', 'BARIS 3', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(498, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02210T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02210T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(499, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02213T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02213T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(500, 'PC Lenovo ThinkCentre', 'NA00642E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00642E.jpg', 'Asset', 'BARIS 3', 54, 'Aktif', 'Booked', '51795', '2025-08-14', NULL, NULL),
(501, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02206T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02206T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(502, 'NA00477M', 'TP-LINK ', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'TP-LINK_.png', 'Non Asset', 'Baris 4', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(503, 'ROUTER LINKSYS', 'NA02195M', 'Non Consummable', 1, 0, 1, 'Pcs', 'Good', 'NA02195M.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(504, 'PC Lenovo ThinkCentre', 'NA00612E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00612E.jpg', 'Asset', 'BARIS 3', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(505, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02205T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02205T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(506, 'MIKROTIK hAP AX2', 'NA00009M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00009M.jpg', 'Non Asset', 'Baris 3', 9, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(507, 'PC Lenovo ThinkCentre', '13439600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13439600.jpg', 'Asset', 'BARIS 3', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(508, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02209T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02209T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(509, 'MIKROTIK hAP AX2', 'NA00010M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00010M.jpg', 'Non Asset', 'Baris 3', 9, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(510, 'MIKROTIK hAP AX2', 'NA00010M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00010M.jpg', 'Non Asset', 'Baris 3', 9, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(511, 'D-LINK 16-PORT 10/100 DESKTOP SWITCH', 'NA00541M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00541M.jpg', 'Non Asset', 'Baris 4', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(512, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02204T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02204T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(513, 'PC Lenovo ThinkCentre', 'NA00624E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00624E.jpg', 'Asset', 'BARIS 4', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(514, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02207T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02207T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(515, 'KEPALA CHARGER', 'NA02190T', 'Non Consummable', 1, 1, 1, 'Pack', 'Good', 'NA02190T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(516, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02215T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02215T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(517, 'PC Lenovo ThinkCentre', 'NA00629E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00629E.jpg', 'Asset', 'BARIS 4', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(518, 'TP-LINK ', 'NA00477M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00477M.png', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(519, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02212T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02212T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(520, 'PC Lenovo ThinkCentre', '13440600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13440600.jpg', 'Asset', 'BARIS 4', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(521, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02214T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02214T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(522, 'PC Lenovo ThinkCentre', 'NA00623E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00623E.jpg', 'Asset', 'BARIS 4', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(523, 'WIRELESS VEIN', 'NA02189M', 'Non Consummable', 1, 1, 1, 'Pack', 'Good', 'NA02189M.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(524, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA00681T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00681T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(525, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02208T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02208T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(526, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA00832T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00832T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(527, 'PC Lenovo ThinkCentre', 'NA00640E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00640E.jpg', 'Asset', 'BARIS 4', 54, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(528, 'PC Simbada Gaming', 'NA0233-M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0233-M.jpg', 'Asset', 'BARIS 1', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(529, 'ACCESS POINT NETGEAR WINDAP 360', '13520200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13520200.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(530, 'PC CPU Zyrex', '13015800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13015800.jpg', 'Asset', 'BARIS 1', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(531, 'MULTIMETER DIGITAL SANWA', 'NA00267T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00267T.jpg', 'Non Asset', 'Baris 1', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(532, 'MULTIMETER DIGITAL SANWA', 'NA00266T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00266T.jpg', 'Non Asset', 'Baris 1', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(533, 'KABEL TIES PUTIH', 'NA02418T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02418T.jpg', 'Non Asset', 'Baris 1 isi 4pcs', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(534, 'KABEL TIES HITAM', 'NA02419T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02419T.jpg', 'Non Asset', 'Baris 1 isi 4pcs', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(535, 'D-LINK', 'NA00480M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00480M.jpg', 'Non Asset', 'Baris 4', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(536, 'PC HP Compact', '13023000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13023000.jpg', 'Asset', 'BARIS 2', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(537, 'SPEED OUT', 'NA00273T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00273T.jpg', 'Non Asset', 'Baris 1 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(538, 'KOOCU LEED LAMP', 'NA00733T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00733T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(539, 'PC HP Compact', '13021200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13021200.jpg', 'Asset', 'BARIS 2', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(540, 'SOLDERING IRON', 'NA00270T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00270T.jpg', 'Non Asset', 'Baris 1 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(541, 'D-LINK', 'NA00480M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00480M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(542, 'KOOCU LEED LAMP', 'NA00727T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00727T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(543, 'PLASTIK ZIPLOCK SILVER KECIL', 'NA00275C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00275C.jpg', 'Non Asset', 'Baris 1 ', 23, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(544, 'KOOCU LEED LAMP', 'NA00731T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00731T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(545, 'D-LINK', 'NA00484M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00484M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(546, 'REMOTE CABLE TESTER RJ-45,RJ-11,USB,AND BNC', 'NA00674T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00674T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(547, 'PC HP Compact', '13022500', 'Consummable', 1, 1, 1, 'Pcs', 'Good', '13022500.jpg', 'Asset', 'BARIS 2', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(548, 'D-LINK', 'NA00471M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00471M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(549, 'PLASTIK ZIPLOCK SILVER BESAR', 'NA00276C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00276C.jpg', 'Non Asset', 'Baris 1 isi 2pcs', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(550, 'REMOTE CABLE TESTER RJ-45,RJ-11,USB,AND BNC', 'NA00675T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00675T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(551, 'REMOTE CABLE TESTER RJ-45,RJ-11,USB,AND BNC', 'NA00676T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00676T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(552, 'PLASTIK ZIPLOCK SILVER KECIL', 'NA00275C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00275C.jpg', 'Non Asset', 'Baris 1 isi 2pcs', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(553, 'D-LINK', 'NA00473M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00473M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(554, 'KOOCU LEED LAMP', 'NA00730T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00730T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(555, 'PC HP Compact', '13020500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13020500.jpg', 'Asset', 'BARIS 2', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(556, 'KOOCU LEED LAMP', 'NA00734T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00734T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(557, 'TANG KECIL IJO KUNING', 'T019', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T019.jpg', 'Non Asset', 'Baris 1', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(558, 'PC HP Compact', '13022200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13022200.jpg', 'Asset', 'BARIS 2', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(559, 'KOOCU LEED LAMP', 'NA00728T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00728T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(560, 'TANG KECIL IJO KUNING', 'T020', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T020.jpg', 'Non Asset', 'Baris 1', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(561, 'PC HP Compact', '13021800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13021800.jpg', 'Asset', 'BARIS 3', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(562, 'KOOCU LEED LAMP', 'NA00732T', 'Non Consummable', 0, 1, 1, 'Pcs', 'Good', 'NA00732T.jpg', 'Non Asset', 'Baris 1', 13, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(563, 'PLASTIK ISI PELINDUNG KABEL', 'NA00263C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00263C.jpg', 'Non Asset', 'Baris 1 isi 30pcs', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(564, 'CONSOLE CABLE USB TO RJ45 T340', 'NA02240C', 'Non Consummable', 21, 1, 1, 'Pack', 'Good', 'NA02240C.jpeg', 'Non Asset', 'Baris 1', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(565, 'KOOCU LEED LAMP', 'NA00726T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00726T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(566, 'CISCO LYNKSYS', 'NA00466M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00466M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(567, 'BOR MOLLAR', 'NA00272C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00272C.jpg', 'Non Asset', 'Baris 1', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(568, 'MIKROTIK hAP AX2', 'NA00005M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00005M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(569, 'CISCO LYNKSYS', 'NA00468M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00468M.jpg', 'Non Asset', 'Baris 4', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(570, 'MIKROTIK hAP AX2', 'NA00006M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00006M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(571, 'CISCO LYNKSYS', 'NA00469M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00469M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(572, 'PC Lenovo ThinkCentre', '13440100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13440100.jpg', 'Asset', 'BARIS 3', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(573, 'KOOCU LEED LAMP', 'NA00729T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00729T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(574, 'CISCO LYNKSYS', 'NA00468M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00468M.jpg', 'Non Asset', 'Baris 4', 10, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(575, 'PC Lenovo ThinkCentre', '13442800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13442800.jpg', 'Asset', 'BARIS 3', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(576, 'PC Lenovo ThinkCentre', 'NA00625E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00625E.jpg', 'Asset', 'BARIS 3', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(577, 'MIKROTIK hAP AX2', 'NA00007M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00007M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(578, 'PC Lenovo ThinkCentre', 'NA00630E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00630E.jpg', 'Asset', 'BARIS 3', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(579, 'MIKROTIK hAP AX2', 'NA00007M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00007M.jpg', 'Non Asset', 'Baris 3', 9, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(580, 'PC Lenovo ThinkCentre', 'NA00626E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00626E.jpg', 'Asset', 'BARIS 4', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(581, 'Kardus HP Xiaomi Redmi 5A', 'NA00973M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00973M.jpg', 'Asset', 'Baris 2 isi 22pcs', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(582, 'KOOCU LEED LAMP', 'NA00732T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00732T.jpg', 'Non Asset', 'Baris 1', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(583, 'REDMI 5A', 'NA01036M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01036M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(584, 'REDMI 5A', 'NA01027M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01027M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(585, 'REDMI 5A', 'NA01037M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01037M.jpg', 'Asset', 'Baris 2', 23, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-26'),
(586, 'REDMI 5A', 'NA01032M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01032M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(587, 'Rel Laci', 'NA0153M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0153M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(588, 'PC CPU Aero Cool', 'NA00633E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00633E.jpg', 'Asset', 'BARIS 4', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(589, 'REDMI 5A', 'NA01028M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01028M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(590, 'Rel Laci', 'NA0154M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0154M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(591, 'REDMI 5A', 'NA01035M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01035M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(592, 'HP LENOVO A706', 'NA01099M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01099M.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(593, 'HP LENOVO A706', 'NA00606M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00606M.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(594, 'PC CPU Aero Cool', 'NA00631E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00631E.jpg', 'Asset', '4', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(595, 'HP LENOVO A706', 'NA00606M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00606M.jpg', 'Non Asset', 'Baris 2', 13, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(596, 'PC CPU Aero Cool', 'NA00644E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00644E.jpg', 'Asset', 'BARIS 4', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(597, 'REDMI NOTE 5A', 'NA01024M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01024M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(598, 'REDMI NOTE 5A', 'NA01023M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01023M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(599, 'PC CPU Aero Cool', 'NA00632E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00632E.jpg', 'Asset', 'BARIS 4', 55, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(600, 'HP LENOVO A706', 'NA00626M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00626M.', 'Non Asset', 'Baris 2', 13, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(601, 'HP LENOVO A706', 'NA01098N', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01098N.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(602, 'Rel Laci', 'NA0155M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0155M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(603, 'PC CPU Aero Cool', 'NA00639E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00639E.jpg', 'Asset', 'BARIS 2', 56, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(604, 'Rel Laci', 'NA0156M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0156M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(605, 'HP LENOVO A706', 'NA00625M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00625M.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(606, 'USB-C 20W POWER ADAPTER', 'NA00301M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00301M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(607, 'REDMI NOTE 5A', 'NA01020M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01020M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(608, 'HP LENOVO A706', 'NA00626M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00626M.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(609, 'Rel Laci', 'NA0157M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0157M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(610, 'REDMI NOTE 5A', 'NA01025M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01025M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(611, 'REDMI NOTE 5A', 'NA01143M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01143M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(612, 'REDMI NOTE 5A', 'NA01022M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01022M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(613, 'HP LENOVO A706', 'NA00629M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00629M.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(614, 'HP LENOVO A706', 'NA00628M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00628M.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(615, 'REDMI NOTE 5A', 'NA01030M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01030M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(616, 'Rel Laci', 'NA0158M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0158M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(617, 'REDMI NOTE 5A', 'NA01144M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01144M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(618, 'PORTABLE THERMAL PRINTER', 'NA00642T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00642T.jpeg', 'Non Asset', 'Baris 1', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(619, 'REDMI 5A', 'NA01029M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01029M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(620, 'Rel Laci', 'NA0159M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0159M.jpg', 'Non Asset', 'Baris 4', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(621, 'REDMI 5A', 'NA01033M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01033M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(622, 'PORTABLE THERMAL PRINTER', 'NA00643T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00643T.jpeg', 'Non Asset', 'Baris 1', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(623, 'REDMI 5A', 'NA01034M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01034M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(624, 'REDMI 5A', 'NA01031M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01031M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(625, 'PORTABLE THERMAL PRINTER', 'NA00644T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00644T.jpeg', 'Non Asset', 'Baris 1', 15, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(626, 'REDMI 5A', 'NA01146M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01146M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(627, 'REDMI 5A', 'NA01150M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01150M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(628, 'REDMI 5A', 'NA01145M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01145M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(629, 'REDMI NOTE 5A', 'NA01026M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01026M.jpg', 'Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(630, 'HP LENOVO A706', 'NA00605M | 13470200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00605M__13470200.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(631, 'GERGAJI PARALON', 'NA02303T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02303T.jpg', 'Non Asset', 'Baris 2', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(632, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00686C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00686C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(633, 'HP LENOVO A706', 'NA00605M |13470300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00605M_13470300.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(634, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00687C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00687C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(635, 'HP LENOVO A706', 'NA00606M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00606M.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(636, 'MATA GERGAJI BESI', 'NA02304T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02304T.jpg', 'Non Asset', 'Baris 2 isi 5pcs', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(637, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00688C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00688C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(638, 'SAMSUNG GALAXY CORE', 'NA00604M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00604M.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(639, 'WIRE TRACKER', 'NA00268T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00268T.jpg', 'Non Asset', 'Baris 2 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(640, 'KABEL HDMI', 'NA0123', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0123.jpg', 'Non Asset', 'Box 5', 45, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(641, 'CONSOLE CABLE USB TO RJ45 T340', 'NA02240C', 'Non Consummable', 21, 1, 1, 'Pcs', 'Good', 'NA02240C.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(642, 'PORTABLE THERMAL PRINTER', 'NA00642T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00642T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(643, 'AC/DC ADAPTOR', 'NA00641T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00641T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(644, 'PORTABLE THERMAL PRINTER', 'NA00643T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00643T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(645, 'OBENG (-) MIN', 'NA00981T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00981T.jpg', 'Non Asset', 'Baris 2 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(646, 'PORTABLE THERMAL PRINTER', 'NA00644T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00644T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(647, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00686C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00686C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(648, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00687C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00687C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(649, 'TEST PEN DIGITAL MAX POWER', 'NA00982T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00982T.jpg', 'Non Asset', 'Baris 2 isi 5pcs', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(650, 'DVD STORAGE', 'NA00258C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00258C.jpg', 'Non Asset', 'BOX 6', 46, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(651, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00688C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00688C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(652, 'TANG MERAH', 'NA00261T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00261T.jpg', 'Non Asset', 'Baris 2 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(653, 'MOUSE', 'NA0124', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0124.jpg', 'Non Asset', 'Box 5, 2 pcs', 45, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(654, 'AC/DC ADAPTOR', 'NA00639T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00639T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(655, 'BUKU PANDUAN DAN GARANSI', 'NA0075T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0075T.jpg', 'Asset', 'BOX 6', 46, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(656, 'AC/DC ADAPTOR', 'NA00640T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00640T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(657, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00689C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00689C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(658, 'DVD RW', 'NA00279C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00279C.jpg', 'Non Asset', 'BOX 6', 46, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(659, 'TANG IJO KUNING BESAR', 'T021', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T021.jpg', 'Non Asset', 'Baris 2 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(660, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00690C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00690C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(661, 'PALU KARET', 'NA00260T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00260T.jpg', 'Non Asset', 'Baris 2 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(662, 'DRIVER ', 'NA00280C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00280C.jpg', 'Non Asset', 'BOX 6', 46, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(663, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00690C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00690C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(664, 'PALU BESI KUNING IJO', 'NA00259T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00259T.jpg', 'Non Asset', 'Baris 2 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(665, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00692C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00692C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(666, 'CD - RW', 'NA00281C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00281C.jpg', 'Non Asset', 'BOX 6', 46, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(667, 'KSS SELF ADHESIVE TIE MOUNT', 'NA02421C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02421C.jpg', 'Non Asset', 'Baris 2 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(668, 'KSS SELF ADHESIVE TIE MOUNT', 'NA00277C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00277C.jpg', 'Non Asset', 'Baris 2 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(669, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00693C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00693C.jpeg', 'Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(670, 'KSS SELF ADHESIVE TIE MOUNT', 'NA02420C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02420C.jpg', 'Non Asset', 'Baris 2 ', 23, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(671, 'MIKROTIK hAP AX2', 'NA00008M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00008M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(672, 'DVD RW', 'NA00282C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00282C.jpg', 'Non Asset', 'BOX 6', 46, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(673, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00694C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00694C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(674, 'MIKROTIK hAP AX2', 'NA00009M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00009M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(675, 'SWITCHING CHARGIN ADAPTER', '4000020638', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '4000020638.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(676, 'KOMPUTER LOCK', 'NA0123', 'Non Consummable', 26, 1, 1, 'Pcs', 'Good', 'NA0123.jpg', 'Non Asset', 'Kardus 1', 10, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(677, 'MOUSE LENOVO', 'NA00030C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00030C.jpg', 'Non Asset', 'KARDUS 5', 51, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(678, 'MIKROTIK hAP AX2', 'NA00010M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00010M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(679, 'MIKROTIK hAP AX2', 'NA00011M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00011M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(680, 'KEYBOARD LENOVO', 'NA00457C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00457C.jpg', 'Non Asset', 'KARDUS 5', 51, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(681, 'STOP KONTAK LUBANG 5', 'NA0124', 'Non Consummable', 6, 1, 1, 'Pcs', 'Good', 'NA0124.jpg', 'Non Asset', 'Kardus 1, 6 pcs', 47, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(682, 'KEYBOARD LENOVO', 'NA00434C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00434C.jpg', 'Non Asset', 'KARDUS 5', 51, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(683, 'KEYBOARD LENOVO', 'NA00436C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00436C.jpg', 'Non Asset', 'KARDUS 5', 51, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(684, 'KEYBOARD LENOVO', 'NA00439C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00439C.jpg', 'Non Asset', 'KARDUS 5', 51, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(685, 'KOMPONEN KEYBOARD 14-AC', 'NA00401', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00401.jpg', 'Non Asset', 'Baris 1', 24, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(686, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00695C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00695C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(687, 'KOMPONEN KEYBOARD 14-AC', 'NA00401', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00401.jpg', 'Non Asset', 'Baris 1 isi 5pcs tidak ada NA', 24, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(688, 'KEYBOARD LENOVO', 'NA00442C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00442C.jpg', 'Non Asset', 'KARDUS 5', 51, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(689, 'STOP KONTAK LUBANG 2', 'NA0125', 'Non Consummable', 7, 1, 1, 'Pcs', 'Good', 'NA0125.png', 'Non Asset', 'Kardus 1, 7 pcs', 47, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(690, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3469', 'NA00696C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00696C.jpeg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(691, 'KEYBOARD LENOVO', 'NA00437C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00437C.jpg', 'Non Asset', 'KARDUS 5', 51, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(692, 'KEYBOARD LENOVO', 'NA00443C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00443C.jpg', 'Non Asset', 'KARDUS 5', 51, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(693, 'HEATSINK, PROCESSOR INTEL CORE I3', 'NA00406', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00406.jpg', 'Non Asset', 'Baris 1 isi 12pcs tidak ada NA', 24, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(694, 'STOP KONTAK LUBANG 3', 'NA0126', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0126.jpg', 'Non Asset', 'Kardus 1, 1 pcs', 47, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(695, 'KEYBOARD LENOVO', 'NA00444C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00444C.jpg', 'Non Asset', 'KARDUS 5', 51, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(696, 'HEATSINK ', 'NA00418', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00418.jpg', 'Non Asset', 'Baris 1 isi 12pcs tidak ada NA', 24, 'Tidak Aktif', 'Available', '51795', '2025-08-14', '51795', '2025-08-14'),
(697, 'STOP KONTAK LUBANG 4', 'NA0127', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0127.jpg', 'Non Asset', 'Kardus 1, 1 pcs', 47, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(698, 'Steker', 'NA02299C', 'Non Consummable', 30, 1, 1, 'Pcs', 'Good', 'NA02299C.jpg', 'Non Asset', 'Kardus 1, 30 pcs', 47, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(699, 'FAN', 'NA00418', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00418.jpg', 'Non Asset', 'Baris 1 isi 12pcs tidak ada NA', 24, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(700, 'MIKROTIK hAP AX2', 'NA00012M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00012M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(701, 'MIKROTIK hAP AX2', 'NA00013M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00013M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(702, 'MIKROTIK hAP AX2', 'NA00014M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00014M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(703, 'MIKROTIK hAP AX2', 'NA00015M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00015M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(704, 'MIKROTIK hAP AX2', 'NA00016M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00016M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(705, 'MIKROTIK hAP AX2', 'NA00017M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00017M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(706, 'MIKROTIK hAP AX2', 'NA00018M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00018M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(707, 'MIKROTIK hAP AX2', 'NA00019M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00019M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(708, 'MIKROTIK hAP AX2', 'NA00020M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00020M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(709, 'MIKROTIK hAP AX2', 'NA00021M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00021M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(710, 'MIKROTIK hAP AX2', 'NA00022M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00022M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(711, 'Stop Kontak Lubang 6', 'NA01', 'Non Consummable', 23, 1, 1, 'Pcs', 'Good', 'NA01.jpg', 'Non Asset', 'Kardus 6, 23 pcs', 52, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(712, 'MIKROTIK hAP AX2', 'NA00023M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00023M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(713, 'MIKROTIK hAP AX2', 'NA00024M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00024M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(714, 'MIKROTIK hAP AX2', 'NA00025M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00025M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(715, 'Stop Kontak Lubang 2', 'NA02', 'Non Consummable', 90, 1, 1, 'Pcs', 'Good', 'NA02.png', 'Non Asset', 'Kardus 6, 90 pcs', 52, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(716, 'MIKROTIK hAP AX2', 'NA00026M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00026M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(717, 'MIKROTIK hAP AX2', 'NA00027M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00027M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-14', NULL, NULL),
(718, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3480', 'NA00698C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00698C.jpg', 'Non Asset', '2', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-15', '51795', '2025-08-15'),
(719, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3480', 'NA00698C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00698C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(720, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3480', 'NA00698C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00698C.jpg', 'Non Asset', '2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(721, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3481', 'NA00699C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00699C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(722, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3481', 'NA00699C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00699C.jpg', 'Non Asset', 'Baris 2', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-15', '51795', '2025-08-15'),
(723, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3481', 'NA00699C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00699C.jpg', 'Non Asset', 'Baris 2', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-15', '51795', '2025-08-15'),
(724, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3482', 'NA00700C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00700C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(725, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3481', 'NA00699C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00699C.jpg', 'Non Asset', 'Baris 2', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-15', '51795', '2025-08-15'),
(726, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3482', 'NA00700C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00700C.jpg', 'Non Asset', 'Baris 2', 14, 'Tidak Aktif', 'Available', '51795', '2025-08-15', '51795', '2025-08-15'),
(727, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3483', 'NA00701C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00701C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(728, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3484', 'NA00702C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00702C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(729, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3485', 'NA00703C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00703C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(730, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3486', 'NA00704C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00704C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(731, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3487', 'NA00705C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00705C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(732, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3488', 'NA00706C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00706C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(733, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3489', 'NA00707C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00707C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(734, 'TP-LINK GIGABIT PCI EXPRESS NETWORK ADAPTER TG-3490', 'NA00708C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00708C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(735, 'ORICO  2 BAY OFFLINE CLONE HARD DRIVE DOCK', 'NA00709T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00709T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(736, 'ORICO  2 BAY OFFLINE CLONE HARD DRIVE DOCK', 'NA00710T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00710T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(737, 'ORICO  2 BAY OFFLINE CLONE HARD DRIVE DOCK', 'NA00711T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00711T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(738, 'ORICO  2 BAY OFFLINE CLONE HARD DRIVE DOCK', 'NA00712T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00712T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(739, 'ORICO  2 BAY OFFLINE CLONE HARD DRIVE DOCK', 'NA00713T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00713T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(740, 'VENTION VGA TO HDMI', 'NA00922C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00922C.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(741, 'VENTION VGA TO HDMI', 'NA00923C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00923C.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(742, 'VENTION VGA TO HDMI', 'NA02201C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02201C.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(743, 'LED LIGHT WTTH', 'NA00720T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00720T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(744, 'LED LIGHT WTTH', 'NA00718T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00718T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(745, 'LED LIGHT WTTH', 'NA00719T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00719T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(746, 'LED LIGHT WTTH', 'NA00722T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00722T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(747, 'LED LIGHT WTTH', 'NA00721T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00721T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(748, 'KABEL HDMI WARNA BIRU', 'NA02233T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02233T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(749, 'KABEL HDMI WARNA BIRU', 'NA02231T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02231T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(750, 'KABEL HDMI WARNA BIRU', 'NA02200C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02200C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(751, 'KABEL HDMI WARNA BIRU', 'NA02200C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02200C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(752, 'KABEL HDMI WARNA BIRU', 'NA02239T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02239T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(753, 'KABEL HDMI WARNA BIRU', 'NA02227T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02227T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(754, 'KABEL HDMI WARNA BIRU', 'NA02228T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02228T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(755, 'KABEL HDMI WARNA BIRU', 'NA02230T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02230T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(756, 'KABEL HDMI WARNA BIRU', 'NA02229T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02229T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(757, 'KABEL HDMI WARNA BIRU', 'NA02234T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02234T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(758, 'KABEL HDMI WARNA BIRU', 'NA02232T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02232T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(759, 'KABEL HDMI WARNA BIRU', 'NA02237T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02237T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(760, 'KABEL HDMI WARNA BIRU', 'NA02236T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02236T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(761, 'KABEL HDMI WARNA BIRU', 'NA00769C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00769C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(762, 'KABEL HDMI WARNA BIRU', 'NA00770C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00770C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(763, 'KABEL HDMI WARNA BIRU', 'NA00771C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00771C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(764, 'KABEL HDMI WARNA BIRU', 'NA00772C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00772C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(765, 'KABEL HDMI WARNA BIRU', 'NA00773C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00773C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(766, 'KABEL HDMI WARNA BIRU', 'NA00775C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00775C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(767, 'KUAS MINI ', 'T0065', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0065.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(768, 'KUAS MINI ', 'T0066', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0066.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(769, 'KUAS MINI ', 'T0067', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0067.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(770, 'KUAS MINI ', 'T0068', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0068.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(771, 'KUAS MINI ', 'T0070', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0070.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(772, 'KUAS MINI ', 'T0071', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0071.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(773, 'KUAS MINI ', 'T0072', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0072.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(774, 'KUAS MINI ', 'T0073', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0073.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(775, 'KUAS MINI ', 'T0074', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0074.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(776, 'KUAS MINI ', 'T0075', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0075.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(777, 'KUAS MINI ', 'T0076', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0076.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(778, 'KUAS MINI ', 'T0077', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0077.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(779, 'KUAS MINI ', 'T0078', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0078.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(780, 'KUAS MINI ', 'T0080', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0080.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(781, 'KUAS MINI ', 'T0081', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0081.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(782, 'KUAS MINI ', 'T0082', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0082.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(783, 'KUAS MINI ', 'T0083', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0083.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(784, 'KUAS MINI ', 'T0084', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0084.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(785, 'KUAS MINI ', 'T0085', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0085.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(786, 'KUAS MINI ', 'T0086', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0086.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(787, 'KUAS MINI ', 'T0087', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0087.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(788, 'KUAS MINI ', 'T0088', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0088.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(789, 'KUAS MINI ', 'T0089', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0089.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(790, 'KUAS MINI ', 'T0090', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0090.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(791, 'KUAS MINI ', 'T0091', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0091.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(792, 'KUAS MINI ', 'T0092', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0092.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(793, 'KUAS MINI ', 'T0093', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0093.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(794, 'KUAS MINI ', 'T0094', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0094.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(795, 'KUAS MINI ', 'T0095', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0095.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(796, 'KUAS MINI ', 'T0096', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0096.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(797, 'KUAS MINI ', 'T0096', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0096.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(798, 'KUAS MINI ', 'T0098', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0098.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(799, 'KUAS MINI ', 'T0099', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0099.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(800, 'KUAS MINI ', 'T0100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0100.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(801, 'KUAS MINI ', 'T0101', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0101.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(802, 'KUAS MINI ', 'T0102', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0102.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(803, 'KUAS MINI ', 'T0103', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0103.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(804, 'KUAS MINI ', 'T0104', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0104.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(805, 'KUAS MINI ', 'T0105', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0105.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(806, 'KUAS MINI ', 'T0106', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0106.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(807, 'KUAS MINI ', 'T0107', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0107.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(808, 'KUAS MINI ', 'T0108', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0108.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(809, 'KUAS MINI ', 'T0109', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0109.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(810, 'KUAS MINI ', 'T0110', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0110.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(811, 'KUAS MINI ', 'T0111', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0111.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(812, 'KUAS MINI ', 'T0112', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0112.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(813, 'KUAS MINI ', 'T0113', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0113.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(814, 'KUAS MINI ', 'T0114', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0114.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(815, 'KUAS MINI ', 'T0115', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0115.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(816, 'KUAS MINI ', 'T0116', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0116.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(817, 'KUAS MINI ', 'T0118', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0118.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(818, 'KUAS MINI ', 'T0119', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0119.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(819, 'KUAS MINI ', 'T0120', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0120.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(820, 'KUAS MINI ', 'T0121', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0121.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(821, 'KUAS MINI ', 'T0122', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0122.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(822, 'KUAS MINI ', 'T0123', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0123.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(823, 'KUAS MINI ', 'T0124', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0124.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(824, 'KUAS MINI ', 'T0125', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0125.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(825, 'KUAS MINI ', 'T0126', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0126.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(826, 'KUAS MINI ', 'T0127', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0127.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(827, 'TP-LINK TL-WN727N', 'NA00665C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00665C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(828, 'TP-LINK TL-WN727N', 'NA00664C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00664C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(829, 'TP-LINK TL-WN727N', 'NA00661C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00661C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(830, 'TP-LINK TL-WN727N', 'NA00660C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00660C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(831, 'TP-LINK TL-WN727N', 'NA00663C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00663C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(832, 'TP-LINK TL-WN727N', 'NA00667C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00667C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(833, 'TP-LINK TL-WN727N', 'NA00654C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00654C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(834, 'TP-LINK TL-WN727N', 'NA00659C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00659C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(835, 'TP-LINK TL-WN727N', 'NA00670C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00670C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(836, 'TP-LINK TL-WN727N', 'NA00668C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00668C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(837, 'TP-LINK TL-WN727N', 'NA00656C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00656C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(838, 'TP-LINK TL-WN727N', 'NA00653C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00653C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(839, 'TP-LINK TL-WN727N', 'NA00658C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00658C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(840, 'Batre Alkaline 6LR61', 'NA02226C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02226C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(841, 'Batre Alkaline 6LR61', 'NA02223C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02223C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(842, 'Batre Alkaline 6LR61', 'NA02220C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02220C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(843, 'Batre Alkaline 6LR61', 'NA02219C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02219C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(844, 'Batre Alkaline 6LR61', 'NA02222C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02222C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(845, 'Batre Alkaline 6LR61', 'NA02221C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02221C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(846, 'Batre Alkaline 6LR61', 'NA02224C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02224C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(847, 'Batre Alkaline 6LR61', 'NA02225C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02225C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(848, 'Demagnetizer JM-X1 JAKEMY', 'NA00841T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00841T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(849, 'Demagnetizer JM-X1 JAKEMY', 'NA00842T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00842T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(850, 'Demagnetizer JM-X1 JAKEMY', 'NA00843T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00843T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(851, 'Demagnetizer JM-X1 JAKEMY', 'NA00844T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00844T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(852, 'Demagnetizer JM-X1 JAKEMY', 'NA00845T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00845T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(853, 'Demagnetizer JM-X1 JAKEMY', 'NA00846T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00846T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(854, 'Demagnetizer JM-X1 JAKEMY', 'NA00847T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00847T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(855, 'Demagnetizer JM-X1 JAKEMY', 'NA00848T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00848T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(856, 'Demagnetizer JM-X1 JAKEMY', 'NA00849T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00849T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(857, 'Demagnetizer JM-X1 JAKEMY', 'NA00850T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00850T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(858, 'Demagnetizer JM-X1 JAKEMY', 'NA00851T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00851T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(859, 'Demagnetizer JM-X1 JAKEMY', 'NA00852T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00852T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(860, 'Demagnetizer JM-X1 JAKEMY', 'NA00853T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00853T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(861, 'Demagnetizer JM-X1 JAKEMY', 'NA00854T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00854T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(862, 'Demagnetizer JM-X1 JAKEMY', 'NA00855T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00855T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(863, 'Demagnetizer JM-X1 JAKEMY', 'NA00856T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00856T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(864, 'PIRING BAUT', 'NA00040C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00040C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(865, 'PIRING BAUT', 'NA00041C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00041C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(866, 'PIRING BAUT', 'NA00042C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00042C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(867, 'PIRING BAUT', 'NA00043C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00043C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(868, 'PIRING BAUT', 'NA00044C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00044C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(869, 'PIRING BAUT', 'NA00045C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00045C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(870, 'PIRING BAUT', 'NA00046C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00046C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(871, 'PIRING BAUT', 'NA00047C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00047C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(872, 'PIRING BAUT', 'NA00048C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00048C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(873, 'PIRING BAUT', 'NA00049C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00049C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(874, 'PIRING BAUT', 'NA00050C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00050C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(875, 'PIRING BAUT', 'NA00051C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00051C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(876, 'PIRING BAUT', 'NA00052C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00052C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(877, 'PIRING BAUT', 'NA00053C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00053C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(878, 'PIRING BAUT', 'NA00054C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00054C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(879, 'PIRING BAUT', 'NA00055C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00055C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(880, 'PIRING BAUT', 'NA00055C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00055C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(881, 'PIRING BAUT', 'NA00056C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00056C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(882, 'PIRING BAUT', 'NA00057C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00057C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(883, 'PIRING BAUT', 'NA00058C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00058C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(884, 'PIRING BAUT', 'NA00059C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00059C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(885, 'PIRING BAUT', 'NA00060C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00060C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(886, 'PIRING BAUT', 'NA00061C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00061C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(887, 'PIRING BAUT', 'NA00062C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00062C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(888, 'PIRING BAUT', 'NA00063C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00063C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(889, 'PIRING BAUT', 'NA00064C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00064C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(890, 'PIRING BAUT', 'NA00065C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00065C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(891, 'PIRING BAUT', 'NA00066C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00066C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(892, 'PIRING BAUT', 'NA00067C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00067C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(893, 'PIRING BAUT', 'NA00068C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00068C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(894, 'PIRING BAUT', 'NA00069C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00069C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(895, 'PIRING BAUT', 'NA00070C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00070C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(896, 'PIRING BAUT', 'NA00071C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00071C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(897, 'PIRING BAUT', 'NA00072C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00072C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(898, 'PIRING BAUT', 'NA00073C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00073C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(899, 'PIRING BAUT', 'NA00074C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00074C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(900, 'PIRING BAUT', 'NA00075C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00075C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(901, 'PIRING BAUT', 'NA00076C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00076C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(902, 'PIRING BAUT', 'NA00078C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00078C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(903, 'PIRING BAUT', 'NA00079C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00079C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(904, 'PIRING BAUT', 'NA00080C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00080C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(905, 'PIRING BAUT', 'NA00081C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00081C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(906, 'PIRING BAUT', 'NA00082C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00082C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(907, 'PIRING BAUT', 'NA00083C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00083C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(908, 'PIRING BAUT', 'NA00084C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00084C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(909, 'PIRING BAUT', 'NA00085C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00085C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(910, 'PIRING BAUT', 'NA0385-T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0385-T.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(911, 'MOUSE LENOVO KABEL', 'NA00017C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00017C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(912, 'MOUSE LENOVO KABEL', 'NA0246-T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0246-T.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(913, 'MOUSE LENOVO KABEL', 'NA00092C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00092C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(914, 'MOUSE LENOVO KABEL', 'NA00021C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00021C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(915, 'MOUSE LOGITECH KABEL', 'NA00036C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00036C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(916, 'MOUSE LOGITECH KABEL', 'H0057', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'H0057.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(917, 'MOUSE LOGITECH KABEL', 'NA00032C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00032C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(918, 'MOUSE LOGITECH KABEL', 'NA00033C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00033C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(919, 'MOUSE LOGITECH KABEL', 'NA00028C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00028C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(920, 'BOX KEYBOARD LENOVO', 'NA00417C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00417C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(921, 'BOX KEYBOARD LENOVO', 'NA00418C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00418C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(922, 'BOX KEYBOARD LENOVO', 'NA00420C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00420C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(923, 'BOX KEYBOARD LENOVO', 'NA00421C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00421C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(924, 'BOX KEYBOARD LENOVO', 'NA00422C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00422C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(925, 'BOX KEYBOARD LENOVO', 'NA00423C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00423C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(926, 'BOX KEYBOARD LENOVO', 'NA00425C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00425C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(927, 'BOX KEYBOARD LENOVO', 'NA00426C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00426C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(928, 'BOX KEYBOARD LENOVO', 'NA00428C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00428C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(929, 'BOX KEYBOARD LENOVO', 'NA00429C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00429C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(930, 'BOX KEYBOARD LENOVO', 'NA00430C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00430C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(931, 'BOX KEYBOARD LENOVO', 'NA00431C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00431C.jpg', 'Non Asset', 'Baris 1', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(932, 'BOX KEYBOARD LENOVO', 'NA00432C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00432C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(933, 'BOX KEYBOARD LENOVO', 'NA00433C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00433C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(934, 'BOX KEYBOARD LENOVO', 'NA00435C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00435C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(935, 'BOX KEYBOARD LENOVO', 'NA00438C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00438C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(936, 'BOX KEYBOARD LENOVO', 'NA00440C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00440C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(937, 'BOX KEYBOARD LENOVO', 'NA00441C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00441C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(938, 'BOX KEYBOARD LOGITECH', 'NA00446C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00446C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(939, 'KEYBOARD LOGITECH ', 'NA00464C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00464C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(940, 'KEYBOARD LOGITECH ', 'NA00396C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00396C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(941, 'KEYBOARD LENOVO', 'NA01090C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01090C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(942, 'KEYBOARD LENOVO', 'NA00383C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00383C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(943, 'KEYBOARD LENOVO', 'NA01087C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01087C.jpg', 'Non Asset', 'Baris 2', 22, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(944, 'MIKROTIK hAP AX LITE', 'NA00028M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00028M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(945, 'MIKROTIK hAP AX LITE', 'NA00028M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00028M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(946, 'MIKROTIK hAP AX LITE', 'NA00029M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00029M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(947, 'MIKROTIK hAP AX LITE', 'NA00030M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00030M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(948, 'MIKROTIK hAP AX LITE', 'NA00031M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00031M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(949, 'MIKROTIK hAP AX LITE', 'NA00032M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00032M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(950, 'MIKROTIK hAP AX LITE', 'NA00033M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00033M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(951, 'MIKROTIK hAP AX LITE', 'NA00034M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00034M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(952, 'MIKROTIK hAP AX LITE', 'NA00035M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00035M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(953, 'MIKROTIK hAP AX LITE', 'NA00036M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00036M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(954, 'MIKROTIK hAP AX LITE', 'NA00037M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00037M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(955, 'MIKROTIK hAP AX LITE', 'NA00038M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00038M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(956, 'MIKROTIK hAP AX LITE', 'NA00038M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00038M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(957, 'MIKROTIK hAP AX LITE', 'NA00039M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00039M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(958, 'MIKROTIK hAP AX LITE', 'NA00040M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00040M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(959, 'MIKROTIK hAP AX LITE', 'NA00041M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00041M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(960, 'MIKROTIK hAP AX LITE', 'NA00042M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00042M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(961, 'MIKROTIK hAP AX LITE', 'NA00043M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00043M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(962, 'MIKROTIK hAP AX LITE', 'NA00044M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00044M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(963, 'MIKROTIK hAP AX LITE', 'NA00045M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00045M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(964, 'MIKROTIK hAP AX LITE', 'NA00046M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00046M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(965, 'MIKROTIK hAP AX LITE', 'NA00047M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00047M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(966, 'MIKROTIK hAP AX LITE', 'NA00048M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00048M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(967, 'MIKROTIK hAP AX LITE', 'NA00049M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00049M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(968, 'MIKROTIK hAP AX LITE', 'NA00050M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00050M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(969, 'MIKROTIK hAP AX LITE', 'NA00051M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00051M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(970, 'MIKROTIK hAP AX LITE', 'NA00052M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00052M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(971, 'MIKROTIK hAP SERIES AC2', 'NA00603M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00603M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(972, 'MIKROTIK hAP SERIES AC2', 'NA00633M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00633M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(973, 'MIKROTIK hAP SERIES AC2', 'NA00631M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00631M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(974, 'MIKROTIK hAP SERIES AC2', 'NA00598M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00598M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(975, 'MIKROTIK hAP SERIES AC2', 'NA00637M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00637M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(976, 'MIKROTIK hAP SERIES AC2', 'NA00428M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00428M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(977, 'MIKROTIK hAP SERIES AC2', 'NA00632M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00632M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(978, 'MIKROTIK hAP SERIES AC2', 'NA00634M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00634M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(979, 'MIKROTIK hAP SERIES AC2', 'NA00634M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00634M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(980, 'MIKROTIK hAP SERIES AC2', 'NA00635M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00635M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(981, 'MIKROTIK hAP SERIES AC2', 'NA00636M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00636M.jpg', 'Non Asset', 'Baris 3', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(982, 'MIKROTIK hAP SERIES ', 'NA00596M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00596M.jpg', 'Non Asset', 'Baris 4', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(983, 'MIKROTIK hAP SERIES', 'NA00636M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00636M.jpg', 'Non Asset', 'Baris 4', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(984, 'MIKROTIK hAP SERIES', 'NA00682M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00682M.jpg', 'Non Asset', 'Baris 4', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(985, 'MIKROTIK hAP SERIES', 'NA00601M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00601M.jpg', 'Non Asset', 'Baris 4', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(986, 'MIKROTIK hAP SERIES', 'NA00602M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00602M.jpg', 'Non Asset', 'Baris 4', 9, 'Aktif', 'Available', '51795', '2025-08-15', NULL, NULL),
(987, 'LINKSYS 1200', 'NA00645M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00645M.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(988, 'Lenovo Display Port to Display Port Cable', 'NA02267M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02267M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(989, 'Lenovo Display Port to Display Port Cable', 'NA02269M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02269M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(990, 'Lenovo Display Port to Display Port Cable', 'NA02270M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02270M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(991, 'Lenovo Display Port to Display Port Cable', 'NA02259M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02259M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(992, 'Lenovo Display Port to Display Port Cable', 'NA02246M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02246M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(993, 'Lenovo Display Port to Display Port Cable', 'NA02243M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02243M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(994, 'Lenovo Display Port to Display Port Cable', 'NA02253M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02253M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(995, 'Lenovo Display Port to Display Port Cable', 'NA02254M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02254M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(996, 'Lenovo Display Port to Display Port Cable', 'NA02252M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02252M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(997, 'Lenovo Display Port to Display Port Cable', 'NA02247M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02247M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(998, 'Lenovo Display Port to Display Port Cable', 'NA02248M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02248M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(999, 'Lenovo Display Port to Display Port Cable', 'NA02251M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02251M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1000, 'Lenovo Display Port to Display Port Cable', 'NA02257M', 'Non Consummable', 0, 1, 1, 'Pcs', 'Good', 'NA02257M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Not Available', '51795', '2025-08-18', NULL, NULL);

INSERT INTO database_siso.barang (id_barang, nama_barang, nomor_aktiva, tipe_barang, jumlah_barang, jumlah_optimum, jumlah_minimum, satuan_barang, kondisi_barang, gambar_barang, kategori_barang, keterangan_penyimpanan, id_dtl_penyimpanan, status_barang, ketersediaan_barang, created_by, created_date, modified_by, modified_date) VALUES
(1001, 'Lenovo Display Port to Display Port Cable', 'NA02258M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02258M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1002, 'Lenovo Display Port to Display Port Cable', 'NA02249M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02249M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1003, 'Lenovo Display Port to Display Port Cable', 'NA02245M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02245M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1004, 'Lenovo Display Port to Display Port Cable', 'NA02255M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02255M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1005, 'Lenovo Display Port to Display Port Cable', 'NA02256M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02256M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1006, 'Lenovo Display Port to Display Port Cable', 'NA02261M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02261M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1007, 'Lenovo Display Port to Display Port Cable', 'NA02264M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02264M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1008, 'Lenovo Display Port to Display Port Cable', 'NA02262M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02262M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1009, 'Lenovo Display Port to Display Port Cable', 'NA02263M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02263M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1010, 'Lenovo Display Port to Display Port Cable', 'NA02266M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02266M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1011, 'Lenovo Display Port to Display Port Cable', 'NA02250M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02250M.jpg', 'Non Asset', 'Baris 4', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1012, 'PC MONITOR LCD LENOVO 18\"', '13568100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13568100.jpg', 'Asset', 'Atas Lemari', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1013, 'PC MONITOR LCD LENOVO 18\"', '13570200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13570200.jpg', 'Asset', 'Atas Lemari', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1014, 'PC MONITOR LCD LENOVO 18\"', '13569800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13569800.jpg', 'Asset', 'Atas Lemari', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1015, 'PC MONITOR LCD LENOVO 18\"', '13569100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13569100.jpg', 'Asset', 'Atas Lemari', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1016, 'PC MONITOR LCD LENOVO 18\"', '13570000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13570000.jpg', 'Asset', 'Atas Lemari', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1017, 'KABEL HDMI WARNA BIRU', 'NA02233T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02233T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1018, 'KABEL HDMI WARNA BIRU', 'NA02231T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02231T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1019, 'KABEL HDMI WARNA BIRU', 'NA02200C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02200C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1020, 'KABEL HDMI WARNA BIRU', 'NA02200C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02200C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1021, 'KABEL HDMI WARNA BIRU', 'NA02239T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02239T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1022, 'KABEL HDMI WARNA BIRU', 'NA02227T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02227T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1023, 'KABEL HDMI WARNA BIRU', 'NA02228T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02228T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1024, 'KABEL HDMI WARNA BIRU', 'NA02230T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02230T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1025, 'KABEL HDMI WARNA BIRU', 'NA02229T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02229T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1026, 'KABEL HDMI WARNA BIRU', 'NA02234T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02234T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1027, 'KABEL HDMI WARNA BIRU', 'NA02232T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02232T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1028, 'KABEL HDMI WARNA BIRU', 'NA02237T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02237T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1029, 'KABEL HDMI WARNA BIRU', 'NA02236T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02236T.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1030, 'KABEL HDMI WARNA BIRU', 'NA00769C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00769C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1031, 'KABEL HDMI WARNA BIRU', 'NA00770C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00770C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1032, 'KABEL HDMI WARNA BIRU', 'NA00771C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00771C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1033, 'KABEL HDMI WARNA BIRU', 'NA00772C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00772C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1034, 'KABEL HDMI WARNA BIRU', 'NA00773C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00773C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1035, 'KABEL HDMI WARNA BIRU', 'NA00775C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00775C.jpg', 'Non Asset', 'Baris 2', 14, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1036, 'Ethernet Adapter UGREEN USB Type C', 'NA00341C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00341C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1037, 'Ethernet Adapter UGREEN USB Type C', 'NA00336C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00336C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1038, 'Ethernet Adapter UGREEN USB Type C', 'NA00328C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00328C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1039, 'Ethernet Adapter UGREEN USB Type C', 'NA00360C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00360C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1040, 'Ethernet Adapter UGREEN USB Type C', 'NA00386C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00386C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1041, 'Ethernet Adapter UGREEN USB Type C', 'NA00364C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00364C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1042, 'Ethernet Adapter UGREEN USB Type C', 'NA00348C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00348C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1043, 'Ethernet Adapter UGREEN USB Type C', 'NA00388C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00388C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1044, 'Ethernet Adapter UGREEN USB Type C', 'NA00390C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00390C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1045, 'Ethernet Adapter UGREEN USB Type C', 'NA00354C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00354C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1046, 'Ethernet Adapter UGREEN USB Type C', 'NA00346C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00346C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1047, 'Ethernet Adapter UGREEN USB Type C', 'NA00394C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00394C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1048, 'Ethernet Adapter UGREEN USB Type C', 'NA00330C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00330C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1049, 'Ethernet Adapter UGREEN USB Type C', 'NA00340C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00340C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1050, 'Ethernet Adapter UGREEN USB Type C', 'NA00368C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00368C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1051, 'Ethernet Adapter UGREEN USB Type C', 'NA00327C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00327C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1052, 'Ethernet Adapter UGREEN USB Type C', 'NA00371C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00371C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1053, 'Ethernet Adapter UGREEN USB Type C', 'NA00365C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00365C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1054, 'Ethernet Adapter UGREEN USB Type C', 'NA00335C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00335C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1055, 'Ethernet Adapter UGREEN USB Type C', 'NA00393C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00393C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1056, 'Ethernet Adapter UGREEN USB Type C', 'NA00399C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00399C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1057, 'Ethernet Adapter UGREEN USB Type C', 'NA00398C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00398C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1058, 'Ethernet Adapter UGREEN USB Type C', 'NA00377C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00377C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1059, 'Ethernet Adapter UGREEN USB Type C', 'NA00379C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00379C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1060, 'Ethernet Adapter UGREEN USB Type C', 'NA00352C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00352C.jpg', 'Non Asset', 'Baris 2', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1061, 'HEATSINK, PROCESSOR INTEL CORE I3', 'NA00406', 'Non Consummable', 12, 1, 1, 'Pack', 'Good', 'NA00406.jpg', 'Non Asset', 'Baris 1', 24, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1062, 'KEYBOARD LENOVO', 'NA00457C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00457C.jpg', 'Non Asset', 'Baris 1', 51, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1063, 'KEYBOARD LENOVO', 'NA00434C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00434C.jpg', 'Non Asset', 'Baris 1', 51, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1064, 'KEYBOARD LENOVO', 'NA00436C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00436C.jpg', 'Non Asset', 'Baris 1', 51, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1065, 'KEYBOARD LENOVO', 'NA00439C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00439C.jpg', 'Non Asset', 'Baris 1', 51, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1066, 'KEYBOARD LENOVO', 'NA00442C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00442C.jpg', 'Non Asset', 'Baris 1', 51, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1067, 'KEYBOARD LENOVO', 'NA00437C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00437C.jpg', 'Non Asset', 'Baris 1', 51, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1068, 'KEYBOARD LENOVO', 'NA00443C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00443C.jpg', 'Non Asset', 'Baris 1', 51, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1069, 'KEYBOARD LENOVO', 'NA00444C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00444C.jpg', 'Non Asset', 'Baris 1', 51, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1070, 'MOUSE LENOVO', 'NA00030C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00030C.jpg', 'Non Asset', 'Baris 1', 51, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1071, 'LAPTOP LENOVO THINKPAD', 'NA00979M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00979M.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1072, 'LAPTOP LENOVO THINKPAD', 'NA00978M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00978M.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1073, 'LAPTOP LENOVO THINKPAD', 'NA00990M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00990M.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1074, 'LAPTOP LENOVO THINKPAD', 'NA00993M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00993M.jpg', 'Asset', 'Baris 1', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1075, 'LAPTOP LENOVO THINKPAD', 'NA00988M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00988M.jpg', 'Asset', 'Baris 2', 17, 'Tidak Aktif', 'Available', '51795', '2025-08-18', '51795', '2025-08-26'),
(1076, 'LAPTOP LENOVO THINKPAD', 'NA00981M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00981M.jpg', 'Asset', 'Baris 2', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1077, 'LAPTOP LENOVO THINKPAD', 'NA00992M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00992M.jpg', 'Asset', 'Baris 2', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1078, 'USB LED LIGHT WITH CLIP', 'NA00723T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00723T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1079, 'USB LED LIGHT WITH CLIP', 'NA00724T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00724T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1080, 'LAPTOP LENOVO THINKPAD', 'NA00974M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00974M.jpg', 'Asset', 'Baris 3', 17, 'Tidak Aktif', 'Available', '51795', '2025-08-18', '51795', '2025-08-26'),
(1081, 'LAPTOP LENOVO THINKPAD', 'NA00991M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00991M.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1082, 'USB LED LIGHT WITH CLIP', 'NA00725T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00725T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1083, 'LAPTOP HP', 'NA00976M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00976M.jpg', 'Asset', 'Baris 2', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1084, 'LINKYSYS ADAPTER', 'NA02194T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02194T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1085, 'CHARGING ADAPTER', 'H0145', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'H0145.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1086, 'LAPTOP HP', 'NA00980M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00980M.jpg', 'Asset', 'Baris 2', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1087, 'CHARGING ADAPTER', 'H0117', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'H0117.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1088, 'CHARGING ADAPTER', 'H0148', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'H0148.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1089, 'LAPTOP HP', 'NTB-096', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NTB-096.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1090, 'CHARGING ADAPTER', 'NAHO150', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NAHO150.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1091, 'LAPTOP HP', 'NA00987M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00987M.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1092, 'CHARGING ADAPTER', 'NAHO151', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NAHO151.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1093, 'CHARGING ADAPTER', 'NAHO152', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NAHO152.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1094, 'LAPTOP HP', 'NA00975M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00975M.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1095, 'CHARGING ADAPTER', 'NAHO153', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NAHO153.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1096, 'PC MONITOR LCD LENOVO 18\"', '13111800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13111800.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1097, 'PC BRAKET', 'H0132', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'H0132.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1098, 'PC BRAKET', 'NA00994C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00994C.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1099, 'PC MONITOR LCD LENOVO 18\"', '13569700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13569700.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1100, 'PC MONITOR LCD LENOVO  18\"', '13568600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13568600.jpg', 'Asset', 'Baris 3', 17, 'Tidak Aktif', 'Available', '51795', '2025-08-18', '51795', '2025-08-26'),
(1101, 'PC MONITOR LCD LENOVO  18\"', '13569500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13569500.jpg', 'Asset', 'Baris 3', 17, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1102, 'Crimping Tools', 'NA00964T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00964T.jpg', 'Non Asset', 'Baris 4', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1103, 'Crimping Tools', 'NA00929T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00929T.jpg', 'Non Asset', 'Baris 4', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1104, 'Crimping Tools', 'T0027', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0027.jpg', 'Non Asset', 'Baris 4', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1105, 'Crimping Tools', 'T0008', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0008.jpg', 'Non Asset', 'Baris 4', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1106, 'Crimping Tools', 'T0030', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0030.jpg', 'Non Asset', 'Baris 4', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1107, 'Crimping Tools', 'T0007', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0007.jpg', 'Non Asset', 'Baris 4', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1108, 'Crimping Tools', 'T0020', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0020.jpg', 'Non Asset', 'Baris 4', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1109, 'Crimping Tools', 'T0023', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0023.jpg', 'Non Asset', 'Baris 4', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1110, 'Crimping Tools', 'T0025', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'T0025.jpg', 'Non Asset', 'Baris 4', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1111, 'Fatools DC Volt Testpen ', 'NA00840T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00840T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1112, 'Feibad Profesional Tools FB0072', 'NA00836T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00836T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1113, 'Feibad Profesional Tools FB0072', 'NA00837T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00837T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1114, 'Jakemy JM-8', 'NA02274T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02274T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1115, 'PC BRAKET', 'NA00993C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00993C.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1116, 'Jakemy JM-8', 'NA02278T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02278T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1117, 'PC BRAKET', 'NA00992C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00992C.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1118, 'Jakemy JM-8', 'NA02286T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02286T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1119, 'Jakemy JM-8', 'NA02287T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02287T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1120, 'KEYBOARD LENOVO', 'NA001', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA001.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1121, 'KEYBOARD LENOVO', 'NA002', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA002.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1122, 'Jakemy JM-8', 'NA02288T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02288T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1123, 'KEYBOARD LENOVO', 'NA003', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA003.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1124, 'Jakemy JM-8', 'NA02282T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02282T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1125, 'KEYBOARD LENOVO', 'NA004', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA004.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1126, 'Jakemy JM-8', 'NA02285T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02285T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1127, 'KEYBOARD LENOVO', 'NA00456C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00456C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1128, 'KEYBOARD LENOVO ', 'NA00352C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00352C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1129, 'Jakemy JM-8', 'NA02280T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02280T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1130, 'KEYBOARD LOGITECH', 'NA00455C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00455C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1131, 'Jakemy JM-8', 'NA02290T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02290T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1132, 'KEYBOARD LOGITECH', 'NA00463C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00463C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1133, 'Jakemy JM-8', 'NA0229TT', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0229TT.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1134, 'KEYBOARD LOGITECH', 'NA00453C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00453C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1135, 'Jakemy JM-8', 'NA02281T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02281T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1136, 'KEYBOARD LOGITECH', 'NA00447C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00447C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1137, 'Jakemy JM-8', 'NA02283T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02283T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1138, 'KEYBOARD LOGITECH', 'NA00450C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00450C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1139, 'Jakemy JM-8', 'NA00227T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00227T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1140, 'KEYBOARD LOGITECH', 'NA00449C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00449C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1141, 'Jakemy JM-8', 'NA00926T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00926T.jpg', 'Non Asset', 'Baris 2', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1142, 'Obeng Min Besar', 'NA00904T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00904T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1143, 'KEYBOARD LOGITECH', 'NA00448C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00448C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1144, 'Obeng Min Besar', 'NA00905T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00905T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1145, 'KEYBOARD LOGITECH', 'NA00452C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00452C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1146, 'Obeng Min Besar', 'NA00906T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00906T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1147, 'Obeng Min Besar', 'NA00907T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00907T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1148, 'KEYBOARD LOGITECH', 'NA00451C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00451C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1149, 'Obeng Min Besar', 'NA00908T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00908T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1150, 'Obeng Min Besar', 'NA00909T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00909T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1151, 'KEYBOARD LOGITECH', 'NA00453C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00453C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1152, 'Obeng Min Besar', 'NA00910T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00910T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1153, 'KEYBOARD LOGITECH', 'NA00454C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00454C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1154, 'Obeng Min Besar', 'NA00915T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00915T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1155, 'Obeng Min Besar', 'NA00916T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00916T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1156, 'LINKSYS STOPKONTAK', 'NA02300T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02300T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1157, 'KEYBOARD LOGITECH', 'NA00461C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00461C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1158, 'Obeng Min Besar', 'NA00917T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00917T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1159, 'LINKYSYS KARTU GARANSI SYSCO', 'NA02192T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02192T.jpg', 'Non Asset', 'Baris 2', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1160, 'Obeng Bintang Kecil ', 'NA00983T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00983T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1161, 'CILLING BRAKET PROJEKTOR', 'NA02196C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02196C.jpg', 'Non Asset', 'Baris 3', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1162, 'KEYBOARD LOGITECH', 'NA00462C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00462C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1163, 'Obeng Bintang Kecil ', 'NA00920T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00920T.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1164, 'KEYBOARD LOGITECH', 'NA00459C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00459C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1165, 'DOWELL NO:21108', 'NA00825T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00825T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1166, 'KEYBOARD LOGITECH', 'NA00460C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00460C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1167, 'DOWELL NO:21108', 'NA00826T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00826T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1168, 'DOWELL NO:21108', 'NA00827T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00827T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1169, 'KEYBOARD LOGITECH', 'NA00466C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00466C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1170, 'DOWELL NO:21108', 'NA00828T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00828T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1171, 'KEYBOARD LENOVO WIRELESS', 'NA00458C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00458C.jpg', 'Non Asset', 'Baris 1', 53, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1172, '6 Crew Drive Set (Fatools Obeng Biru)', 'NA00821T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00821T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1173, '6 Crew Drive Set (Fatools Obeng Biru)', 'NA00822T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00822T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1174, '6 Crew Drive Set (Fatools Obeng Biru)', 'NA00823T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00823T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1175, '6 Crew Drive Set (Fatools Obeng Biru)', 'NA00824T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00824T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1176, 'LINKSYS STOPKONTAK', 'NA02300T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02300T.jpg', 'Non Asset', 'Baris 2', 13, 'Tidak Aktif', 'Available', '51795', '2025-08-18', '51795', '2025-08-18'),
(1177, 'LINKYSYS KARTU GARANSI SYSCO', 'NA02192T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02192T.jpg', 'Non Asset', 'Baris 2', 13, 'Tidak Aktif', 'Available', '51795', '2025-08-18', '51795', '2025-08-18'),
(1178, 'CILLING BRAKET PROJEKTOR', 'NA02196C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02196C.jpg', 'Non Asset', 'Baris 3', 13, 'Tidak Aktif', 'Available', '51795', '2025-08-18', '51795', '2025-08-18'),
(1179, 'CILLING BRAKET PROJEKTOR', 'NA02197C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02197C.jpg', 'Non Asset', 'Baris 3', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1180, 'CILLING BRAKET PROJEKTOR', 'NA02198C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02198C.jpg', 'Non Asset', 'Baris 3', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1181, 'SUN FILAMENT', 'NA02301C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02301C.jpg', 'Non Asset', 'Baris 3', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1182, 'SUN FILAMENT', 'NA02302C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02302C.jpg', 'Non Asset', 'Baris 3', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1183, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00810C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00810C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1184, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00817C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00817C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1185, 'BLUEPRINT LI', 'NA00810C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00810C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1186, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00814C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00814C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1187, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00806C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00806C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1188, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00805C', 'Consummable', 0, 1, 1, 'Pcs', 'Good', 'NA00805C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Not Available', '51795', '2025-08-18', NULL, NULL),
(1189, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00807C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00807C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1190, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00808C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00808C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1191, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00812C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00812C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1192, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00815C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00815C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1193, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00803C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00803C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1194, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00808C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00808C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1195, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00804C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00804C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1196, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00809C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00809C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1197, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00809C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00809C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1198, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00818C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00818C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1199, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00813C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00813C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1200, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00803C', 'Consummable', 0, 1, 1, 'Pcs', 'Good', 'NA00803C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Not Available', '51795', '2025-08-18', NULL, NULL),
(1201, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00805C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00805C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1202, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00804C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00804C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1203, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00816C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00816C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1204, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00811C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00811C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1205, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00806C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00806C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1206, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00811C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00811C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1207, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00806C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00806C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1208, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00811C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00811C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1209, 'BLUEPRINT LITE THERNAL PAPER ROLL', 'NA00807C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00807C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-18', NULL, NULL),
(1210, 'CORSAIR iCUE H170i ELITE CAPELLIX', 'NA00630C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00630C.jpg', 'Non Asset', 'Baris 4', 13, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1211, 'PC MONITOR LCD LENOVO 18INCH', '13567700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13567700.jpg', 'Asset', 'Atas Lemari', 13, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1212, 'PC MONITOR LCD LENOVO 18INCH', '13111900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13111900.jpg', 'Asset', 'Atas Lemari', 13, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1213, 'PC MONITOR LCD LENOVO 18INCH', '13568000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13568000.jpg', 'Asset', 'Atas Lemari', 13, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1214, 'Fatools SDW06', 'NA00835T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00835T.jpg', 'Non Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1215, 'PC MONITOR LCD LENOVO 18INCH', '13568400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13568400.jpg', 'Asset', 'Atas Lemari', 13, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1216, 'Box Baut', 'NA00117C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00117C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1217, 'Box Baut', 'NA00090C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00090C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1218, 'KABEL VGA', 'NAV001', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NAV001.jpg', 'Non Asset', 'BOX 1', 41, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1219, 'Box Baut', 'NA02241O', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02241O.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1220, 'BOYA DIGITAL WIRELESS MICROPHONE', 'NA00097M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00097M.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1221, 'KABEL LAN', 'NAL001', 'Non Consummable', 49, 1, 49, 'Pcs', 'Good', 'NAL001.jpg', 'Non Asset', 'BOX 2', 42, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1222, 'BOYA DIGITAL WIRELESS MICROPHONE', 'NA00093M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00093M.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1223, 'BOYA DIGITAL WIRELESS MICROPHONE', 'NA00092M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00092M.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1224, 'AC ADAPTER SUNPOWER', 'NA00112C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00112C.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1225, 'BOYA DIGITAL WIRELESS MICROPHONE', 'NA00096M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00096M.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1226, 'AC ADAPTER SUNPOWER', 'NA00113C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00113C.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1227, 'BOYA DIGITAL WIRELESS MICROPHONE', 'NA00095M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00095M.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1228, 'AC ADAPTER SUNPOWER', 'NA00110C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00110C.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1229, 'BOYA DIGITAL WIRELESS MICROPHONE', 'NA00094M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00094M.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1230, 'MINI STORAGE ', 'NA00119C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00119C.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1231, 'AC ADAPTER SUNPOWER', 'NA00111C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00111C.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1232, 'AC ADAPTER SUNPOWER', 'NA00114C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00114C.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1233, 'STOP KONTAK 6 LUBANG', 'NAS001', 'Non Consummable', 21, 1, 21, 'Pcs', 'Good', 'NAS001.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1234, 'VIDEO STABILIZER INSTRUCTIONS', 'NA0027-M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0027-M.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1235, 'SPAREPART BOX', 'NA00086C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00086C.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1236, 'SPAREPART BOX', 'NA00089C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00089C.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1237, 'SPAREPART BOX', 'NA00088C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00088C.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1238, 'SPAREPART BOX', 'NA00087C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00087C.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1239, 'MINI STORAGE', 'NA00120T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00120T.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1240, 'DOME CAMERA', 'NA0024-M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0024-M.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1241, 'DOME CAMERA', 'NA0025-M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0025-M.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1242, 'DOME CAMERA', 'NA0026-M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0026-M.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-20', NULL, NULL),
(1243, 'STAND', 'NAST001', 'Non Consummable', 4, 1, 1, 'Pcs', 'Good', 'NAST001.jpg', 'Non Asset', 'KARDUS 3', 49, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1244, 'INTEL CORE I5 PROCESSOR', 'NA02382C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02382C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1245, 'INTEL CORE I5 PROCESSOR', 'NA02383C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02383C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1246, 'INTEL CORE I5 PROCESSOR', 'NA02384C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02384C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1247, 'INTEL CORE I5 PROCESSOR', 'NA02381C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02381C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1248, 'INTEL CORE I5 PROCESSOR', 'NA02380C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02380C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1249, 'INTEL CORE I5 PROCESSOR', 'NA02389C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02389C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1250, 'INTEL CORE I5 PROCESSOR', 'NA02388C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02388C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1251, 'LEM SERBAGUNA B-7000', 'NA00156C', 'Non Consummable', 4, 1, 1, 'Pcs', 'Good', 'NA00156C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1252, 'V-GEN MEMORY MODULE', 'NA00138C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00138C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1253, 'V-GEN MEMORY MODULE', 'NA00136C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00136C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1254, 'V-GEN MEMORY MODULE', 'NA00135C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00135C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1255, 'V-GEN MEMORY MODULE', 'NA00134C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00134C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1256, 'V-GEN MEMORY MODULE', 'NA00137C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00137C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1257, 'PSU 430 WATT', 'NA00009C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00009C.jpg', 'Non Asset', 'KARDUS 2', 48, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1258, 'KARDUS KABEL SATA MERAH TYPE MF - 97 E', 'NA00160C', 'Non Consummable', 21, 1, 1, 'Pcs', 'Good', 'NA00160C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1259, 'PSU 430 WATT', 'NA00008C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00008C.jpg', 'Non Asset', 'KARDUS 2', 48, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1260, 'PLASTIK ITEM (SOFTCASE HANDPONE)', 'NA02188C', 'Non Consummable', 12, 1, 1, 'Pcs', 'Good', 'NA02188C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1261, 'INDUSTRIAL GLOVES', 'NAG0030', 'Non Consummable', 30, 1, 1, 'Pcs', 'Good', 'NAG0030.jpg', 'Non Asset', 'BOX 3', 43, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1262, 'PSU 430 WATT', 'NA00007C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00007C.jpg', 'Non Asset', 'KARDUS 2', 48, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1263, 'LAP PUTIH', 'NAL0040', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NAL0040.jpg', 'Non Asset', 'BOX 3', 43, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1264, 'PSU 430 WATT', 'NA00010C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00010C.jpg', 'Non Asset', 'KARDUS 2', 48, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1265, 'PSU 430 WATT', 'NA00012C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00012C.jpg', 'Non Asset', 'KARDUS 2', 48, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1266, 'PSU 430 WATT', 'NA00011C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00011C.jpg', 'Non Asset', 'KARDUS 2', 48, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1267, 'MPG X 570 GAMING PLUS', 'NAM001', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NAM001.jpg', 'Non Asset', 'KARDUS 2', 48, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1268, 'RAM KINGSTON', 'NA00210C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00210C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1269, 'RAM V-GEN PLATINUM', 'NA02396C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02396C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1270, 'RAM CORSAIR', 'NA00129C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00129C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1271, 'RAM CORSAIR', 'NA00126C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00126C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1272, 'RAM CORSAIR', 'NA00131C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00131C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1273, 'RAM CORSAIR', 'NA00127C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00127C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1274, 'RAM CORSAIR', 'NA00132C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00132C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1275, 'RAM CORSAIR', 'NA00130C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00130C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1276, 'RAM CORSAIR', 'NA00128C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00128C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1277, 'RAM CORSAIR', 'NA00125C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00125C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1278, 'RAM CORSAIR', 'NA00124C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00124C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1279, 'RAM V-GEN PLATINUM', 'NA02410C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02410C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1280, 'RAM V-GEN PLATINUM', 'NA02405C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02405C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1281, 'RAM V-GEN PLATINUM', 'NA02406C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02406C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1282, 'RAM V-GEN PLATINUM', 'NA02408C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02408C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1283, 'RAM V-GEN PLATINUM', 'NA02401C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02401C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1284, 'RAM V-GEN PLATINUM', 'NA02400C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02400C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1285, 'RAM V-GEN PLATINUM', 'NA02409C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02409C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1286, 'RAM V-GEN PLATINUM', 'NA02399C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02399C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1287, 'RAM V-GEN PLATINUM', 'NA02403C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02403C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1288, 'RAM V-GEN PLATINUM', 'NA02402C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02402C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1289, 'RAM V-GEN PLATINUM', 'NA02404C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02404C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1290, 'RAM V-GEN PLATINUM', 'NA02407C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02407C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1291, 'RAM V-GEN ', 'NA00189C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00189C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1292, 'RAM V-GEN ', 'NA00140C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00140C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1293, 'RAM HYNIX', 'NA00141C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00141C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-21', NULL, NULL),
(1294, 'KABEL VGA VENTION', 'NA00783C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00783C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1295, 'KABEL VGA NETLINE', 'NA00780C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00780C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1296, 'KABEL VGA NETLINE', 'NA00778C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00778C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1297, 'KABEL VGA NETLINE', 'NA00779C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00779C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1298, 'KABEL VGA PUTIH', 'NA00785C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00785C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1299, 'KABEL VGA PUTIH ', 'NA00784C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00784C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1300, 'HARDISK WD 500GB', 'NA02366C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02366C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1301, 'HARDISK SEAGATE', 'NA00180C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00180C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1302, 'POWERSUPPLY ENLIGHT', 'NA0177-T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0177-T.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1303, 'SSD DARK L3', 'NA00146C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00146C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1304, 'SSD DARK L3', 'NA00147C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00147C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1305, 'SSD DARK L3', 'NA00145C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00145C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1306, 'SSD Samsung', 'NA00151C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00151C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1307, 'SSD Samsung', 'NA00152C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00152C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1308, 'SSD Samsung', 'NA00149C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00149C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1309, 'SSD Samsung', 'NA00150C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00150C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1310, 'DVD', 'NA00182C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00182C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1311, 'DVD', 'NA00181C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00181C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1312, 'DVD', 'NA00183C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00183C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1313, 'Kepala HDMI', 'NA00760C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00760C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1314, 'DVD', 'NA00185C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00185C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1315, 'DVD', 'NA00184C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00184C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1316, 'DVD', 'NA00186C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00186C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1317, 'DVD', 'NA00187C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00187C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1318, 'Kepala HDMI', 'NA00759C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00759C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1319, 'Kepala HDMI', 'NA00761C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00761C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1320, 'Kepala HDMI', 'NA00756C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00756C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1321, 'Kepala HDMI', 'NA00762C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00762C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1322, 'Kepala HDMI', 'NA00758C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00758C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1323, 'Kepala HDMI', 'NA00755C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00755C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1324, 'Kepala HDMI', 'NA00757C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00757C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1325, 'Kabel Charger', 'NA00765C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00765C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1326, 'Kabel Charger', 'NA00763C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00763C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1327, 'Kabel Charger', 'NA00764C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00764C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1328, 'Kabel Charger', 'NA00666C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00666C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1329, 'Kabel Charger', 'NA00767C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00767C.jpg', 'Non Asset', 'Baris 3', 15, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1330, 'HARDISK HITACHI', 'NA0196-T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0196-T.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1331, 'HARDISK HITACHI', 'NA0197-T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0197-T.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1332, 'HARDISK HITACHI', 'NA0184-T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0184-T.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1333, 'HARDISK HITACHI', 'NA0185-T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0185-T.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1334, 'HDD Toshiba', 'NA02377C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02377C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1335, 'HDD', 'NA00148C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00148C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1336, 'RAM GENUINE', 'NA00205C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00205C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1337, 'RAM GENUINE', 'NA00214C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00214C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1338, 'RAM GENUINE', 'NA00211C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00211C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1339, 'RAM GENUINE', 'NA00213C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00213C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1340, 'RAM GENUINE', 'NA00212C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00212C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1341, 'RAM GENUINE', 'NA00216C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00216C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1342, 'RAM GENUINE', 'NA00215C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00215C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1343, 'RAM GENUINE', 'NA00209C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00209C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1344, 'RAM GENUINE', 'NA00204C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00204C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1345, 'RAM GENUINE', 'NA00208C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00208C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1346, 'RAM GENUINE', 'NA00196C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00196C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1347, 'RAM GENUINE', 'NA00206C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00206C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1348, 'RAM GENUINE', 'NA00197C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00197C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1349, 'RAM CORSAIR', 'NA00142C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00142C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1350, 'RAM HYNIX', 'NA00143C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00143C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1351, 'RAM V-GEN', 'NA02389C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02389C.jpg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-22', NULL, NULL),
(1352, 'RAM V-GEN', 'NA01284C', 'Non Consummable', 2, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 1', 21, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1353, 'PC Simbada Gaming', 'NA02298M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02298M.jpeg', 'Asset', 'Baris 1', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1354, 'PC Lenovo ThinkCentre', 'NA00611', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00611.jpeg', 'Asset', 'Baris 1', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1355, 'PC Lenovo ThinkCentre', '13441800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 2', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1356, 'PC Lenovo ThinkCentre', '13441700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13441700.jpeg', 'Asset', 'Baris 2', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1357, 'PC Lenovo ThinkCentre', 'NA00638E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00638E.jpeg', 'Asset', 'Baris 2', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1358, 'PC Lenovo ThinkCentre', 'NA00627E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00627E.jpeg', 'Asset', 'Baris 2', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1359, 'PC Lenovo ThinkCentre', '13439900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13439900.jpeg', 'Asset', 'Baris 2', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1360, 'PC Lenovo ThinkCentre', 'NA00636E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00636E.jpeg', 'Asset', 'Baris 3', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1361, 'PC Lenovo ThinkCentre', 'NA00637E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00637E.jpeg', 'Asset', 'Baris 3', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1362, 'PC Lenovo ThinkCentre', 'NA00642E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00642E.jpeg', 'Asset', 'Baris 3', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1363, 'PC Lenovo ThinkCentre', 'NA00612E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00612E.jpeg', 'Asset', 'Baris 3', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1364, 'PC Lenovo ThinkCentre', '13439600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13439600.jpeg', 'Asset', 'Baris 3', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1365, 'PC Lenovo ThinkCentre', 'NA00624E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00624E.jpeg', 'Asset', 'Baris 4', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1366, 'PC Lenovo ThinkCentre', 'NA00629E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00629E.jpeg', 'Asset', 'Baris 4', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1367, 'PC Lenovo ThinkCentre', '13440600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13440600.jpeg', 'Asset', 'Baris 4', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1368, 'PC Lenovo ThinkCentre', 'NA00623E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00623E.jpeg', 'Asset', 'Baris 4', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1369, 'PC Lenovo ThinkCentre', 'NA00640E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00640E.jpeg', 'Asset', 'Baris 4', 54, 'Tidak Aktif', 'Available', '51795', '2025-08-25', '51795', '2025-08-25'),
(1370, 'PC CPU Aero Cool', 'NA00645E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00645E.jpg', 'Asset', 'BARIS 4	', 55, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1371, 'PC Futura N2000', 'NA02619E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02619E.jpeg', 'Asset', 'BARIS 2', 56, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1372, 'PC Futura N2000', 'NA02618E', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02618E.jpeg', 'Asset', 'BARIS 2', 56, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1373, 'PC Futura N2000', 'NA02617E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02617E.jpeg', 'Asset', 'BARIS 2', 56, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1374, 'PC Futura N2000', 'NA02307M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02307M.jpeg', 'Asset', 'BARIS 2', 56, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1375, 'HP XIAOMI REDMI NOTE 10 S', 'NA01149M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01149M.jpg', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1376, 'PC Futura N2000', 'NA02305M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02305M.jpeg', 'Asset', 'BARIS 2', 56, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1377, 'HP XIAOMI REDMI NOTE 10 S', 'NA01148M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01148M.jpg', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1378, 'HP XIAOMI REDMI NOTE 10 S', 'NA01147M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01147M.jpg', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1379, 'PC Futura N2000', 'NA02304M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02304M.jpeg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1380, 'PC Futura N2000', 'NA02304M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02304M.jpeg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1381, 'PC Futura N2000', 'NA02303M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02303M.jpeg', 'Asset', 'BARIS 2', 56, 'Aktif', 'Available', '51795', '2025-08-25', NULL, NULL),
(1382, 'PC Futura N2000', 'NA02302M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02302M.jpg', 'Asset', 'BARIS 2', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1383, 'PC Futura N2000', 'NA02301M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02301M.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1384, 'Jarkemy Mata Obeng Kecil', 'NA00834T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00834T.jpg', 'Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1385, 'Jarkemy Mata Obeng Kecil', 'NA00833T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00833T.jpg', 'Asset', 'Baris 1', 15, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1386, 'PC Futura N2000', 'NA02300M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02300M.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1387, 'PC Futura N2000', 'NA00635E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00635E.jpg', 'Asset', 'BARIS 2', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1388, 'PC Futura N2000', 'NA00622E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00622E.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1389, 'PC Futura N2000', 'NA00620E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00620E.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1390, 'PC Futura N2000', 'NA00618E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00618E.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1391, 'PC Futura N2000', 'NA00618E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00618E.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1392, 'PC Futura N2000', 'NA00617E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00617E.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1393, 'PC Futura N2000', 'NA00615E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00615E.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1394, 'PC Futura N2000', 'NA00614E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00614E.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1395, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02305T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02305T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1396, 'RJ45 AND RJ11 NETWORK CABLE TESTER', 'NA02306T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02306T.jpeg', 'Non Asset', 'Baris 1', 14, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1397, 'KABEL HDMI WARNA HITAM', 'NA02411C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02411C.jpg', 'Non Asset', 'Baris 3', 14, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1398, 'KABEL HDMI WARNA HITAM', 'NA02412C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02412C.jpg', 'Non Asset', 'Baris 3', 14, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1399, 'KABEL HDMI WARNA HITAM', 'NA02413C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02413C.jpg', 'Non Asset', 'Baris 3', 14, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1400, 'PC Futura N2000', 'NA00613E', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00613E.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1401, 'KABEL HDMI WARNA HITAM', 'NA02414C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02414C.jpg', 'Non Asset', 'Baris 3', 14, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1402, 'WADAH KABEL HDMI WARNA HITAM', 'NA02307T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02307T.jpeg', 'Non Asset', 'Baris 3', 14, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1403, 'PC Futura N2000', '13472100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13472100.jpg', 'Asset', 'BARIS 3', 56, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1404, 'HP XIAOMI REDMI 5A', 'NA01142M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01142M.jpg', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1405, 'HP XIAOMI REDMI NOTE 10 S', 'NA01141M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01141M.png', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1406, 'HP XIAOMI REDMI NOTE 10 S', 'NA01140M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', NULL, 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1407, 'HP XIAOMI REDMI NOTE 10 S', 'NA01139M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', NULL, 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1408, 'HP XIAOMI REDMI NOTE 10 S', 'NA01138M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01138M.png', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1409, 'TOSHIBA SATELITE PRO', 'NA00993M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA00993M.jpg', 'Asset', 'BARIS 4', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1410, 'HP XIAOMI REDMI NOTE 10 S', 'NA01137M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01137M.png', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1411, 'HP XIAOMI REDMI NOTE 10 S', 'NA01136M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01136M.png', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1412, 'HP XIAOMI REDMI NOTE 10 S', 'NA01135M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01135M.png', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1413, 'HP XIAOMI REDMI NOTE 10 S', 'NA01134M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01134M.png', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1414, 'HP XIAOMI REDMI NOTE 10 S', 'NA01133M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01133M.png', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1415, 'HP XIAOMI REDMI NOTE 10 S', 'NA01132M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01132M.png', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1416, 'TOSHIBA SATELITE PRO', 'NA01130M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01130M.jpg', 'Asset', 'Baris 3', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1417, 'HP PROBOOK 5220 M', 'NA00987M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA00987M.jpg', 'Asset', 'BARIS 3', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1418, 'LENOVO THINKPAD T430', 'NA01129M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01129M.jpg', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1419, 'HP PROBOOK 5220 M', 'NA01127M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01127M.jpg', 'Asset', 'Baris 2', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1420, 'TOSHIBA PORTEGE', 'NA01126T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01126T.jpg', 'Asset', 'Baris 2', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1421, 'LENOVO THINKPAD T430', 'NA01125T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01125T.jpg', 'Asset', 'Baris 3', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1422, 'HP PROBOOK 5220 M', 'NA01124T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01124T.jpg', 'Asset', 'Baris 3', 14, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1423, 'LENOVO THINKPAD E520', 'NA01123T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', NULL, 'Asset', 'Baris 1', 16, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1424, 'HP PROBOOK 4331 S', 'NA01122M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01122M.jpeg', 'Asset', 'Baris 3', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1425, 'HP PROBOOK 4331 S', 'NA00978M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA00978M.jpg', 'Asset', 'BARIS 3', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1426, 'HP PROBOOK 4331 S', 'NA01121M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01121M.jpeg', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1427, 'TOSHIBA PORTEGE', 'NA01120M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01120M.jpg', 'Asset', 'Baris 2', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1428, 'HP PROBOOK 4331 S', 'NA01119T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01119T.jpeg', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1429, 'HP PROBOOK 4331 S', 'NA00975M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA00975M.jpg', 'Asset', 'BARIS 4', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1430, 'HP PROBOOK 4331 S', 'NA01118M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01118M.jpeg', 'Asset', 'Baris 1', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1431, 'HP PROBOOK 4331 S', 'NA01117T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA01117T.jpeg', 'Asset', 'Baris 3', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1432, 'HP XIAOMI REDMI NOTE 10 S', 'NA01038M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01038M.png', 'Asset', 'Baris 4', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1433, 'HP XIAOMI REDMI 5A', 'NA01037M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01037M.jpg', 'Asset', 'Baris 1', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1434, 'ACER ASPIRE V5', 'NA00989M', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', 'NA00989M.jpg', 'Asset', 'Baris 3', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1435, 'PC MONITOR LCD LENOVO 18', '13670000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13670000.jpg', 'Asset', 'Atas Lemari', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1436, 'PC MONITOR LCD LENOVO 18', '13570300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13570300.jpg', 'Asset', 'Atas Lemari', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1437, 'PC MONITOR LCD LENOVO 18', '13569000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13569000.jpg', 'Asset', 'Atas Lemari', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1438, 'PC MONITOR LCD LENOVO 18', '13568800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13568800.jpg', 'Asset', 'Atas Lemari', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1439, 'PC MONITOR LCD LENOVO 18', '13568600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13568600.jpg', 'Asset', 'Atas Lemari', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1440, 'LAPTOP LENOVO THINKPAD 17 INC - 060', 'NA00604M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00604M.jpg', 'Asset', 'BARIS 1', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1441, 'LAPTOP LENOVO THINKPAD 17 INC - 069', 'NA00600M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00600M.jpg', 'Asset', 'BARIS 1', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1442, 'PC MONITOR LCD LENOVO 18', '13568200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13568200.jpg', 'Asset', 'Atas Lemari', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1443, 'PC MONITOR LCD LENOVO 18', '13111900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13111900.jpg', 'Asset', 'Atas Lemari', 16, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1444, 'LAPTOP LENOVO THINKPAD 17 INC - 075', 'NA00599M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00599M.jpg', 'Asset', 'BARIS 1', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1445, 'LAPTOP LENOVO THINKPAD 17 INC - 067', 'NA00598M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00598M.jpg', 'Asset', 'BARIS 1', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1446, 'LAPTOP LENOVO THINKPAD 17 INC - 070', 'NA00597M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00597M.jpg', 'Asset', 'BARIS 1', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1447, 'LAPTOP LENOVO THINKPAD 17 INC - 081', 'NA00596M', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00596M.jpg', 'Asset', 'BARIS 1', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1448, 'Laptop Notebook HP 348 G4 IDS UMA I7', '13679800', 'Consummable', 1, 1, 1, 'Pcs', 'Good', '13679800.jpg', 'Asset', 'BARIS 2', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1449, 'Laptop Notebook HP 348 G4 IDS UMA I9', '13679500', 'Consummable', 1, 1, 1, 'Pcs', 'Good', '13679500.jpg', 'Asset', 'BARIS 2', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1450, 'Laptop Notebook HP 348 G4 IDS UMA I5', '13678600', 'Consummable', 1, 1, 1, 'Pcs', 'Good', '13678600.jpg', 'Asset', 'BARIS 2', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1451, 'Laptop Notebook HP 348 G4 IDS UMA I6', '13678300', 'Consummable', 1, 1, 1, 'Pcs', 'Good', '13678300.jpg', 'Asset', 'BARIS 2', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1452, 'Laptop Notebook HP 348 G4 IDS UMA I10', '13678100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Not Good', '13678100.jpg', 'Asset', 'BARIS 2', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1453, 'Laptop Notebook HP 348 G4 IDS UMA I11', '13677700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13677700.jpg', 'Asset', 'BARIS 3', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1454, 'Laptop Notebook HP 348 G4 IDS UMA I8', '13677200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13677200.jpg', 'Asset', 'BARIS 2', 12, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1455, 'RAM Strontium', 'NA02415C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02415C.jpeg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1456, 'HDD Lenovo', 'NA02416C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02416C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1457, 'HDD Lenovo', 'NA02417C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02417C.jpg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1458, 'HARDISK SEAGATE', 'NA0180-T', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0180-T.jpg', 'Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1459, 'Socket Processor', 'NA00167C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1460, 'Socket Processor', 'NA00170C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1461, 'Socket Processor', 'NA00168C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1462, 'Socket Processor', 'NA00171C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1463, 'Socket Processor', 'NA00169C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1464, 'Socket Processor', 'NA00164C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1465, 'Socket Processor', 'NA00166C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1466, 'Socket Processor', 'NA00165C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1467, 'Socket Processor', 'NA00163C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00163C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1468, 'HEATSINK', 'NA02440C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', '51795', '2025-08-26'),
(1469, 'HEATSINK', 'NA02441C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02441C.jpeg', 'Non Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1470, 'KEYBOARD LENOVO ', 'NA01087C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01087C.jpeg', 'Asset', 'BARIS 2', 22, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1471, 'PIRING BAUT', 'NA01088C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA01088C.jpeg', 'Asset', 'BARIS 1', 22, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1472, 'MOUSE ACER KABEL', 'NA00031C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00031C.jpeg', 'Asset', 'BARIS 1', 22, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1473, 'KARDUS MOTHERBOARD(KABEL POWER SUPPLY)', 'NA02429C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02429C.jpeg', 'Non Asset', 'Baris 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1474, 'KUAS FKD 63.5 MM', 'NA02308T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02308T.jpeg', 'Asset', 'BARIS 2', 22, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1475, 'PROCESSOR INTEL I3', 'NA02455C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02455C.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1476, 'HARDISK SAMSUNG', 'NA0182-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0182-T.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1477, 'HARDISK WD 500GB', 'NA0183-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0183-T.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1478, 'HARDISK HITACHI', 'NA0184-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0184-T.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1479, 'HARDISK HITACHI', 'NA0185-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0185-T.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1480, 'HARDISK WD ', 'NA0190-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0190-T.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1481, 'HARDISK SAMSUNG', 'NA0194-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0194-T.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1482, 'HARDISK SAMSUNG', 'NA0195-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0195-T.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1483, 'HARDISK HITACHI', 'NA0196-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0196-T.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1484, 'HARDISK HITACHI', 'NA0197-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0197-T.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1485, 'HARDISK SEAGATE', 'NA00176C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00176C.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1486, 'HARDISK SEAGATE', 'NA0178-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0178-T.jpeg', 'Asset', 'BARIS 1', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1487, 'HDD Lenovo', 'NA02416C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02416C.jpg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1488, 'HDD LENOVO', 'NA02417C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02417C.jpg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1489, 'HDD', 'NA00148C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00148C.jpg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1490, 'HDD Hitachi', 'NA0185-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0185-T.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1491, 'HDD Hitachi', 'NA0184-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0184-T.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1492, 'HDD Hitachi', 'NA0197-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0197-T.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1493, 'HDD Hitachi', 'NA0196-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0196-T.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1494, 'HDD Toshiba', 'NA02377C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02377C.jpg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1495, 'HDD WD', 'NA0189-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0189-T.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1496, 'HDD WD', 'NA02417C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02417C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1497, 'HDD WD', 'NA02418C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02418C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1498, 'HDD WD', 'NA02369C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02369C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1499, 'HDD WD', 'NA02419C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02419C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1500, 'HDD WD', 'NA02420C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02420C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1501, 'HDD WD', 'NA02421C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02421C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1502, 'HDD WD', 'NA0191-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0191-T.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1503, 'HDD HP', 'NA0188-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0188-T.jpg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1504, 'HDD SAMSUNG', 'NA0193-T', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA0193-T.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1505, 'SSD DARK L3', 'NA00146C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00146C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1506, 'SSD DARK L3', 'NA00147C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00147C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1507, 'SSD DARK L3', 'NA00145C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00145C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1508, 'SSD SAMSUNG', 'NA00151C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00151C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1509, 'SSD SAMSUNG', 'NA00152C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00152C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1510, 'SSD SAMSUNG', 'NA00149C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00149C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1511, 'SSD SAMSUNG', 'NA00150C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00150C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1512, 'DVD', 'NA00182C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00182C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1513, 'DVD', 'NA00181C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00181C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1514, 'HEATSINK', 'NA02442C', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02442C.jpeg', 'Non Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1515, 'DVD', 'NA00185C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00185C.jpeg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1516, 'Heatsink', 'NA02442C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02442C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1517, 'DVD', 'NA00184C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00184C.jpeg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1518, 'DVD', 'NA00186C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00186C.jpeg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1519, 'Heatsink', 'NA02443C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02443C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1520, 'DVD', 'NA00187C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00187C.jpeg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1521, 'Heatsink', 'NA02444C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02444C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1522, 'Heatsink', 'NA02445C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02445C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1523, 'Heatsink', 'NA02446C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02446C.jpeg', 'Asset', 'BARIS 2', 49, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1524, 'Motherboard', 'NA02422C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02422C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1525, 'Motherboard', 'NA02423C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02423C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1526, 'RAM Lenovo', 'NA02447C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02447C.jpg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1527, 'Motherboard', 'NA02424C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02424C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1528, 'Motherboard', 'NA02425C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02425C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1529, 'Motherboard', 'NA02426C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02426C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1530, 'RAM Lenovo', '1', 'Consummable', 1, 1, 1, 'Pcs', 'Good', '1.jpg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1531, 'Motherboard', 'NA02427C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02427C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1532, 'Motherboard', 'NA02428C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02428C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1533, 'RAM Lenovo', 'NA02449C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02449C.jpg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1534, 'WI-FI Card', 'NA02455C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02455C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1535, 'RAM Vgen', 'NA02450C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02450C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1536, 'WI-FI Card', 'NA02456C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02456C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1537, 'WI-FI Card', 'NA02457C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02457C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1538, 'RAM Vgen', 'NA02451C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02451C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1539, 'WI-FI Card', 'NA02458C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02458C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1540, 'WI-FI Card', 'NA02459C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02459C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1541, 'RAM Vgen', 'NA02452C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02452C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1542, 'HDD WD', 'NA02460C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02460C.jpeg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1543, 'RAM Vgen', 'NA02453C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02453C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1544, 'Baterai Laptop', 'NA02461C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02461C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1545, 'RAM Vgen', 'NA02454C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA02454C.jpeg', 'Asset', 'BARIS 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1546, 'Adapter Laptop Lenovo', 'NA00122C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00122C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1547, 'Adapter Laptop Lenovo', 'NA00121C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00121C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1548, 'Adapter Laptop Lenovo', 'NA00123C', 'Consummable', 1, 1, 1, 'Pcs', 'Good', 'NA00123C.jpg', 'Asset', 'Baris 2', 21, 'Aktif', 'Available', '51795', '2025-08-26', NULL, NULL),
(1549, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13825900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', NULL, 'Asset', 'Rak 1', 37, 'Aktif', 'Available', '51866', '2025-09-04', '51866', '2025-09-04'),
(1550, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13825200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13825200.jpeg', 'Asset', 'BARIS 2 (tidak ada tali)', 37, 'Aktif', 'Booked', '51866', '2025-09-04', NULL, NULL),
(1551, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13831000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13831000.jpeg', 'Asset', 'BARIS 2', 37, 'Aktif', 'Booked', '51866', '2025-09-04', NULL, NULL),
(1552, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13830800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13830800.jpeg', 'Asset', 'BARIS 2', 38, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1553, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13833600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13833600.jpeg', 'Asset', 'BARIS 2 (tidak ada tali)', 38, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1554, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13831100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13831100.jpeg', 'Asset', 'BARIS 3', 38, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1555, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832800.jpeg', 'Asset', 'BARIS 1', 38, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1556, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824100.jpeg', 'Asset', 'BARIS 1', 38, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1557, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835600.jpeg', 'Asset', 'BARIS 4', 38, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1558, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13832700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13832700.jpeg', 'Asset', 'BARIS 4 (tidak ada tali)', 38, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1559, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13836000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13836000.jpeg', 'Asset', 'BARIS 1', 38, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1560, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13834700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13834700.jpeg', 'Asset', 'BARIS 4', 38, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1561, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13836300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13836300.jpeg', 'Asset', 'BARIS 3', 38, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1562, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13831800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13831800.jpeg', 'Asset', 'BARIS 3', 38, 'Aktif', 'Booked', '51866', '2025-09-04', NULL, NULL),
(1563, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13826500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13826500.jpeg', 'Asset', 'BARIS 1', 39, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1564, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835100.jpeg', 'Asset', 'BARIS 4 (tidak ada tali)', 39, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1565, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13834800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13834800.jpeg', 'Asset', 'BARIS 3', 39, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1566, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824400.jpeg', 'Asset', 'BARIS 3', 39, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1567, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827400.jpeg', 'Asset', 'BARIS 2', 39, 'Aktif', 'Booked', '51866', '2025-09-04', NULL, NULL),
(1568, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835000.jpeg', 'Asset', 'BARIS 2', 39, 'Aktif', 'Booked', '51866', '2025-09-04', NULL, NULL),
(1569, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13827800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13827800.jpeg', 'Asset', 'BARIS 3', 39, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1570, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13820600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13820600.jpeg', 'Asset', 'BARIS 3', 39, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1571, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824000.jpeg', 'Asset', 'BARIS 4', 39, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1572, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835700.jpeg', 'Asset', 'BARIS 4', 39, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1573, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13824500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13824500.jpeg', 'Asset', 'BARIS 2', 39, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1574, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '13835900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '13835900.jpeg', 'Asset', 'BARIS 3', 39, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1575, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131396400.jpeg', 'Asset', 'BARIS 1', 40, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51866', '2025-09-04'),
(1576, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131396400.jpeg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1577, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131395000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131395000.', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-09-04', '51866', '2025-09-04'),
(1578, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131394600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131394600.jpg', 'Asset', 'BARIS 3', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1579, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131395400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131395400.jpg', 'Asset', 'BARIS 4', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1580, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131400200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131400200.jpg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1581, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131397000.jpg', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1582, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131394700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131394700.jpg', 'Asset', 'BARIS 3', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1583, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131399000.jpg', 'Asset', 'BARIS 4', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1584, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131400500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131400500.jpg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1585, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131396900.jpg', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1586, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131395700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131395700.jpg', 'Asset', 'BARIS 3', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1587, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131400700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131400700.jpg', 'Asset', 'BARIS 4', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1588, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131397500.jpg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1589, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131398800.jpg', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1590, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131398300.jpg', 'Asset', 'BARIS 3', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1591, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131396000.jpg', 'Asset', 'BARIS 4', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1592, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397800', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131397800.jpg', 'Asset', 'BARIS 1', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1593, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131395900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131395900.jpg', 'Asset', 'BARIS 2', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1594, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131394500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131394500.jpg', 'Asset', 'BARIS 3', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1595, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131397600.jpg', 'Asset', 'BARIS 4', 40, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1596, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131384000', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 1', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1597, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396700', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 2', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1598, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396100', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 3', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1599, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396800', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 4', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1600, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398600', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', '131398600.', 'Asset', 'BARIS 1', 7, 'Aktif', 'Booked', '51866', '2025-09-04', '51795', '2025-09-16'),
(1601, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399800', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', '131399800.', 'Asset', 'BARIS 2', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1602, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131397400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131397400.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Booked', '51866', '2025-09-04', NULL, NULL),
(1603, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131400300', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 4', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1604, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131397100', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', '131397100.', 'Asset', 'BARIS 1', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1605, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397900', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', '131397900.', 'Asset', 'BARIS 2', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1606, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131398100', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 3', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1607, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131395100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131395100.jpg', 'Asset', 'BARIS 4', 7, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1608, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131395800', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 1', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1609, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131395600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131395600.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1610, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131400100', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 3', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1611, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399200', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 4', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1612, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131398200', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 1', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1613, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399300', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 2', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1614, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131398400', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131398400.', 'Asset', 'BARIS 3', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1615, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131398400', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 3', 7, 'Tidak Aktif', 'Available', '51866', '2025-09-04', '51795', '2025-09-17'),
(1616, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131398500.jpg', 'Asset', 'BARIS 4', 7, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1617, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131397700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131397700.jpg', 'Asset', 'BARIS 1', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1618, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131400400', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131400400.jpg', 'Asset', 'BARIS 2', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1619, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131400000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131400000.jpg', 'Asset', 'BARIS 3', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1620, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131399500.jpg', 'Asset', 'BARIS 4', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1621, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131398000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131398000.jpg', 'Asset', 'BARIS 1', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1622, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131397200.jpg', 'Asset', 'BARIS 2', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1623, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131400600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131400600.jpg', 'Asset', 'BARIS 3', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1624, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131395300', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131395300.jpg', 'Asset', 'BARIS 4', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1625, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131399100', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131399100.jpg', 'Asset', 'BARIS 1', 57, 'Aktif', 'Booked', '51866', '2025-09-04', NULL, NULL),
(1626, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131383900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131383900.jpg', 'Asset', 'BARIS 2', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1627, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131396200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131396200.jpg', 'Asset', 'BARIS 3', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1628, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131399600.jpg', 'Asset', 'BARIS 4', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1629, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131399900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131399900.jpg', 'Asset', 'BARIS 1', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1630, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131401000', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131401000.jpg', 'Asset', 'BARIS 2', 57, 'Aktif', 'Booked', '51866', '2025-09-04', NULL, NULL),
(1631, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131398900', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131398900.jpg', 'Asset', 'BARIS 3', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1632, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131395500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131395500.jpg', 'Asset', 'BARIS 4', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1633, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131396600', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131396600.jpg', 'Asset', 'BARIS 1', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1634, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396500', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131396500.jpg', 'Asset', 'BARIS 2', 57, 'Aktif', 'Available', '51866', '2025-09-04', NULL, NULL),
(1635, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131395200', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131395200.jpg', 'Asset', 'BARIS 3', 57, 'Aktif', 'Booked', '51866', '2025-09-04', NULL, NULL),
(1636, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398700', 'Non Consummable', 1, 1, 1, 'Pcs', 'Good', '131398700.jpg', 'Asset', 'BARIS 4', 57, 'Aktif', 'Booked', '51866', '2025-09-04', NULL, NULL),
(1637, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397900 ', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131397900_.jpg', 'Asset', 'BARIS 1', 7, 'Tidak Aktif', 'Available', '51795', '2025-09-16', '51795', '2025-09-17'),
(1638, 'LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131398400', 'Non Consummable', 1, 32, 30, 'Pcs', 'Good', NULL, 'Asset', 'BARIS 3', 7, 'Tidak Aktif', 'Available', '51795', '2025-09-16', '51795', '2025-09-17'),
(1639, ' LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131397100', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131397100.jpg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1640, ' LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131398600 ', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131398600_.jpg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Booked', '51795', '2025-09-17', NULL, NULL),
(1641, ' LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399800 ', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131399800_.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1642, ' LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131398100', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131398100.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1643, ' LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131400100', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131400100.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1644, ' LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399200 ', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131399200_.jpg', 'Asset', 'BARIS 4', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1645, ' LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396100', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131396100.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Booked', '51795', '2025-09-17', NULL, NULL),
(1646, ' LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396700', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131396700.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1647, ' LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131384000', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131384000.jpg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1648, ' LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131399300', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131399300.jpg', 'Asset', 'BARIS 2', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1649, ' LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396800', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131396800.jpg', 'Asset', 'BARIS 4', 7, 'Aktif', 'Booked', '51795', '2025-09-17', NULL, NULL),
(1650, ' LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131398200', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131398200.jpg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Booked', '51795', '2025-09-17', NULL, NULL),
(1651, ' LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131400300', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131400300.jpg', 'Asset', 'BARIS 4', 7, 'Aktif', 'Booked', '51795', '2025-09-17', NULL, NULL),
(1652, ' LAPTOP_NOTEBOOK_LENOVO_L14 CORE I7 16GB', '131398400', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131398400.jpg', 'Asset', 'BARIS 3', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1653, ' LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131397900 ', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131397900_.jpg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1654, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131396600', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131396600.jpg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL),
(1655, 'LAPTOP_NOTEBOOK_LENOVO_P14S GEN 5, 7 165H vPro', '131395800', 'Non Consummable', 1, 30, 32, 'Pcs', 'Good', '131395800.jpg', 'Asset', 'BARIS 1', 7, 'Aktif', 'Available', '51795', '2025-09-17', NULL, NULL);
SET IDENTITY_INSERT database_siso.barang OFF;
SELECT * FROM database_siso.barang

SET IDENTITY_INSERT database_siso.dtl_peminjaman_barang ON;
INSERT INTO database_siso.dtl_peminjaman_barang (id_dtl_peminjaman, id_peminjaman_barang, id_barang, jumlah_peminjaman, satuan_barang, kondisi_barang, gambar_sebelum, gambar_sesudah, tanggal_pengembalian, status_barang, alasan_barang) VALUES
(94, 46, 7, 1, 'Pcs', 'Pcs', 'sebelum_94_1752660107.jpeg', 'setelah94_1752661205.jpeg', NULL, 'Completed', NULL),
(95, 47, 6, 1, 'Pcs', 'Pcs', 'sebelum_95_1752668478.jpeg', NULL, NULL, 'Borrowed', NULL),
(96, 47, 4, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset & Non Asset', 'barang rusak'),
(99, 49, 8, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(100, 50, 46, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(101, 51, 19, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(102, 51, 181, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Approved', NULL),
(103, 52, 21, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(104, 52, 35, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(105, 53, 21, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(106, 53, 35, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(107, 54, 21, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(108, 55, 35, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(109, 56, 35, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(110, 57, 35, 3, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(111, 58, 35, 2, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(112, 59, 177, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by Koordinator UPT', NULL),
(113, 59, 35, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(117, 62, 5, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(118, 63, 17, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(119, 64, 9, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(120, 65, 10, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by Koordinator UPT', NULL),
(121, 66, 10, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(122, 66, 42, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(123, 66, 120, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(124, 67, 35, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Approved', NULL),
(125, 68, 12, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(126, 69, 22, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(127, 70, 24, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(128, 71, 15, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(129, 72, 252, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(130, 72, 253, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(131, 72, 254, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(132, 72, 255, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(133, 72, 256, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(134, 72, 257, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(135, 72, 258, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(136, 72, 259, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(137, 72, 260, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(138, 72, 261, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(139, 72, 238, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(140, 72, 242, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(141, 72, 241, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(142, 72, 228, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(143, 72, 213, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(144, 72, 178, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(145, 72, 183, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(146, 73, 13, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(147, 73, 14, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(148, 73, 15, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(149, 73, 35, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Approved', NULL),
(150, 74, 5, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(151, 75, 15, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(152, 76, 20, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(153, 76, 35, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(154, 77, 1188, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(155, 77, 381, 1, 'Pcs', 'Pcs', 'sebelum_155_1755825465.jpg', 'setelah155_1755833429.png', 2025, 'Completed', NULL),
(156, 78, 272, 1, 'Pcs', 'Pcs', 'sebelum_156_1755825475.jpg', 'setelah156_1755825520.jpeg', NULL, 'Completed', NULL),
(157, 79, 27, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(158, 80, 30, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(159, 80, 35, 4, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(160, 80, 32, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(161, 80, 33, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(162, 80, 331, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(163, 80, 337, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(164, 80, 500, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(165, 80, 1000, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(166, 80, 1200, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Non Asset', NULL),
(167, 80, 1600, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(168, 80, 1625, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(169, 80, 1630, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(170, 80, 1635, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(171, 80, 1636, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(172, 81, 1562, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(173, 82, 1568, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(174, 82, 87, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(175, 82, 1567, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(176, 83, 1551, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(177, 83, 1550, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(178, 84, 93, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(179, 85, 1640, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(180, 85, 1602, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(181, 85, 1645, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(182, 85, 1649, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(183, 85, 1650, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(184, 85, 1651, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(185, 86, 36, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL),
(186, 87, 37, 1, 'Pcs', 'Pcs', NULL, NULL, NULL, 'Reject by PIC Asset', NULL);
SET IDENTITY_INSERT database_siso.dtl_peminjaman_barang OFF;

SET IDENTITY_INSERT database_siso.pengguna ON;
INSERT INTO database_siso.pengguna (id_pengguna, nama_pengguna, email_pengguna, username_pengguna, password_pengguna, role_pengguna, main_job, other_job, foto, status_pengguna, created_by, created_date, modified_by, modified_date) VALUES
('51729', 'Sisia Dika Ariyanto', 'sisia.ariyanto@polytechnic.astra.ac.id', 'sisia', '1234', 'Koordinator UPT', 'Koordinator UPT Informatika', 'Koordinator UPT Informatika', 'sisia.png', 'Aktif', NULL, NULL, '51795', '2025-05-23'),
('51778', 'Eko Abdul Goffar', 'eko.goffar@polytechnic.astra.ac.id', 'Eko', '1234', 'PIC LAB', 'Koordinator Project', 'Koordinator Tingkat, PIC LAB', 'eko.png', 'Aktif', NULL, NULL, NULL, NULL),
('51792', 'Kristina Hutajulu', 'kristina.hutajulu@polytechnic.astra.ac.id', 'kristina', '1234', 'PIC LAB', 'PIC Budget', 'Koordinator Tingkat, PIC LAB', 'tina.png', 'Aktif', NULL, NULL, NULL, NULL),
('51795', 'Candra Bagus K', 'candra.kristanto@polytechnic.astra.ac.id', 'candra', '1234', 'PIC Non Asset', 'Koordinator 5K2S', 'Koordinator Tingkat, PIC LAB', 'candra.png', 'Aktif', NULL, NULL, NULL, NULL),
('51798', 'Indah Cyithia Devi', 'indah.devi@polytechnic.astra.ac.id', 'indah', '1234', 'PIC LAB', 'Koordinator Mutu ', 'Koordinator Tingkat, PIC LAB', 'indah.png', 'Aktif', NULL, NULL, '6', '2025-06-13'),
('51850', 'Eka Widya Yuliani', 'eka.yuliani@polytechnic.astra.ac.id', 'eka', '1234', 'PIC LAB', 'PDCA', 'Koordinator Tingkat, PIC Lab', 'eka.png', 'Aktif', NULL, NULL, NULL, NULL),
('51865', 'Muhammad Hanif Abdulfattah', 'hanif.abdulfattah@polytechnic.astra.ac.id', 'hanif', '1234', 'PIC LAB', 'Koordinator Maintenance LAB', 'Koordinator Tingkat, PIC LAB', 'hanif.png', 'Aktif', NULL, NULL, NULL, NULL),
('51866', 'Roni Prasetyo', 'roni.prasetyo@polytechnic.astra.ac.id', 'roni', '1234', 'PIC Asset & Non Asset', 'PIC Asset dan Non-Asset', 'Koordinator Tingkat, PIC LAB', 'roni.png', 'Aktif', NULL, NULL, '51866', '2025-07-12'),
('51867', 'Riesta Pinky Nurul Afifah', 'riesta.pinky@polytechnic.astra.ac.id', 'riesta', '1234', 'PIC LAB', 'Admin Jam Minus Jam Plus', 'Koordinator Tingkat, PIC LAB', 'pinky.png', 'Aktif', NULL, NULL, NULL, NULL),
('51868', 'Elora Manuella Amei', 'elora.amei@polytechnic.astra.ac.id', 'elora', '1234', 'PIC LAB', 'Koordinator Training', 'Koordinator Tingkat, PIC LAB', 'elora.png', 'Aktif', NULL, NULL, NULL, NULL);
SET IDENTITY_INSERT database_siso.pengguna OFF;
SELECT * FROM database_siso.pengguna

SET IDENTITY_INSERT database_siso.penyimpanan ON;
INSERT INTO database_siso.penyimpanan (id_penyimpanan, nama_penyimpanan, status_penyimpanan, created_by, created_date, modified_by, modified_date) VALUES
(1, 'LEMARI 1', 'Aktif', NULL, NULL, NULL, NULL),
(2, 'LEMARI 2', 'Aktif', NULL, NULL, NULL, NULL),
(3, 'LEMARI 3', 'Aktif', NULL, NULL, NULL, NULL),
(4, 'LEMARI 4', 'Aktif', NULL, NULL, NULL, NULL),
(5, 'LEMARI 5', 'Aktif', NULL, NULL, NULL, NULL),
(6, 'LEMARI 6', 'Aktif', NULL, NULL, NULL, NULL),
(7, 'LEMARI 7', 'Aktif', NULL, NULL, NULL, NULL),
(8, 'LEMARI 8', 'Aktif', NULL, NULL, NULL, NULL),
(9, 'LEMARI 9', 'Aktif', NULL, NULL, NULL, NULL),
(10, 'LEMARI 10', 'Aktif', NULL, NULL, NULL, NULL),
(11, 'LACI 1', 'Aktif', NULL, NULL, NULL, NULL),
(12, 'LACI 2', 'Aktif', NULL, NULL, NULL, NULL),
(13, 'LACI 3', 'Aktif', NULL, NULL, NULL, NULL),
(14, 'LACI 4', 'Aktif', NULL, NULL, NULL, NULL),
(15, 'LACI 5', 'Aktif', NULL, NULL, NULL, NULL),
(16, 'LACI 6', 'Aktif', NULL, NULL, NULL, NULL),
(17, 'LACI 7', 'Aktif', NULL, NULL, NULL, NULL),
(18, 'LACI 8', 'Aktif', NULL, NULL, NULL, NULL),
(19, 'LACI 9', 'Aktif', NULL, NULL, NULL, NULL),
(20, 'LACI 10', 'Aktif', NULL, NULL, NULL, NULL),
(24, 'kardus putih', 'Tidak Aktif', '6', '2025-06-12', '6', '2025-06-12'),
(25, 'BOX 1', 'Aktif', '51795', '2025-08-13', '51795', '2025-08-13'),
(26, 'BOX 2', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(27, 'BOX 3', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(28, 'BOX 4', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(29, 'BOX 5', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(30, 'BOX 6', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(31, 'KARDUS 1', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(32, 'KARDUS 2', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(33, 'KARDUS 3', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(34, 'KARDUS 4', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(35, 'KARDUS 5', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(36, 'KARDUS 6', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(37, 'KARDUS 7', 'Aktif', '51795', '2025-08-13', NULL, NULL),
(38, 'RAK 1', 'Aktif', '51795', '2025-08-14', NULL, NULL),
(39, 'RAK 2', 'Aktif', '51795', '2025-08-14', NULL, NULL),
(40, 'RAK 3', 'Aktif', '51795', '2025-08-14', NULL, NULL);
SET IDENTITY_INSERT database_siso.penyimpanan OFF;
SELECT * FROM database_siso.penyimpanan

INSERT INTO database_siso.mahasiswa(username, nama) VALUES
('0320210001', 'Mahasiswa 1'),
('0320210002', 'Mahasiswa 2');
SELECT * FROM database_siso.mahasiswa

SET IDENTITY_INSERT database_siso.lembaga ON;
INSERT INTO database_siso.lembaga (id, nama_lembaga) VALUES
(1, 'Lembaga Penelitian dan Pengabdian Masyarakat'),
(2, 'Unit Pengembangan Penelitian'),
(3, 'Unit Pengembangan Pengabdian Masyarakat'),
(4, 'Unit Perpustakaan dan Manajemen Pengetahuan'),
(5, 'Lembaga Penelitian dan Pengabdian Masyarakat - Penelitian'),
(6, 'Badan Penjaminan Mutu'),
(7, 'Sekretariat Institusi'),
(8, 'Dept. Kemahasiswaan dan Alumni'),
(9, 'Dept. Administrasi Akademik dan Admisi'),
(10, 'Prodi P4'),
(11, 'Prodi TPM'),
(12, 'Prodi MK'),
(13, 'Prodi TPHP'),
(14, 'Prodi MI'),
(15, 'Prodi MO'),
(16, 'Prodi TRPAB'),
(17, 'Dept. Sumber Daya Manusia'),
(18, 'Dept. Administrasi Keuangan, Akunting, dan Pajak'),
(19, 'Pusat Sistem Informasi'),
(20, 'Dept. Pelayanan Teknis'),
(21, 'Dept. Produksi dan Pelatihan'),
(22, 'Program Meister'),
(23, 'Unit Pelayanan Teknis Manufaktur'),
(24, 'Unit Pelayanan Teknis Pemesinan'),
(25, 'Unit Pelayanan Teknis Otomasi'),
(26, 'Unit Pelayanan Teknis Desain dan Metrologi'),
(27, 'Unit Pelayanan Teknis Informatika'),
(28, 'Unit Pelayanan Teknis Otomotif'),
(29, 'Unit Pelayanan Teknis Perawatan'),
(30, 'Unit Pelatihan dan Sertifikasi Nasional'),
(31, 'Unit Perencanaan dan Kontrol Produksi'),
(32, 'Unit Pemasaran Produksi'),
(33, 'Unit Pemasaran Pelatihan dan Sertifikasi'),
(34, 'Prodi TKBG'),
(35, 'Komite Industri'),
(36, 'Unit Pelayanan Teknis Sipil'),
(37, 'Pusat Sertifikasi Kompetensi'),
(38, 'Dept. Pelayanan Umum'),
(39, 'Unit Pelayanan Teknis Alat Berat'),
(40, 'Prodi TRL'),
(41, 'Unit Pelayanan Teknis Logistik'),
(42, 'Dept. Pemasaran Produksi dan Pelatihan'),
(43, 'Dept. Rekayasa'),
(44, 'Dept. Perencanaan dan Kontrol Produksi'),
(45, 'Dept. Produksi'),
(46, 'Dept. Pengendalian Mutu Produksi'),
(47, 'Dept. Pelatihan dan Sertifikasi'),
(48, 'Prodi TRPL'),
(49, 'Unit Pelayanan Teknis Perangkat Lunak'),
(50, 'Lembaga Kerjasama dan Urusan Internasional');
SET IDENTITY_INSERT database_siso.lembaga OFF;
SELECT * FROM database_siso.lembaga

SET IDENTITY_INSERT database_siso.ruangan ON;
INSERT INTO database_siso.ruangan (id_ruangan, nama_ruangan, pic_ruangan, status_ruangan, created_by, created_date, modified_by, modified_date) VALUES
(1, 'LAB CB 113', '51866', 'Aktif', NULL, NULL, '51795', '2025-05-23'),
(2, 'LAB CB 111', '51778', 'Aktif', NULL, NULL, NULL, NULL),
(3, 'LAB CB 110', '51867', 'Aktif', NULL, NULL, NULL, NULL),
(4, 'LAB CB 109', '51792', 'Aktif', NULL, NULL, NULL, NULL),
(5, 'LAB CB 108', '51865', 'Aktif', NULL, NULL, NULL, NULL),
(6, 'LAB CB 107', '51795', 'Aktif', NULL, NULL, NULL, NULL),
(9, 'LAB CB 106', '51795', 'Aktif', NULL, NULL, '6', '2025-06-12'),
(10, 'LAB CB 105', '51868', 'Aktif', NULL, NULL, NULL, NULL),
(11, 'LAB CB 104', '51866', 'Aktif', NULL, NULL, NULL, NULL),
(12, 'LAB CB 103', '51850', 'Aktif', NULL, NULL, NULL, NULL),
(13, 'LAB CB 101', '51866', 'Aktif', NULL, NULL, NULL, NULL),
(14, 'LAB CD 102', '51866', 'Aktif', NULL, NULL, NULL, NULL),
(15, 'LAB CB 102', '51795', 'Tidak Aktif', '51795', '2025-05-21', '51795', '2025-05-21'),
(16, 'LAB CB 102', '51795', 'Tidak Aktif', '51795', '2025-05-21', '51795', '2025-05-21'),
(17, 'LAB CB 106', '51729', 'Tidak Aktif', '51795', '2025-05-23', '51795', '2025-05-23'),
(18, 'test', '51798', 'Tidak Aktif', '6', '2025-06-12', '6', '2025-06-12');
SET IDENTITY_INSERT database_siso.ruangan OFF;
SELECT * FROM database_siso.ruangan

SET IDENTITY_INSERT database_siso.dtl_ruangan_penyimpanan ON;
INSERT INTO database_siso.dtl_ruangan_penyimpanan (id_dtl_penyimpanan, id_ruangan, id_penyimpanan, status_detail, created_by, created_date, modified_by, modified_date) VALUES
(1, 13, 1, 'Aktif', NULL, NULL, NULL, NULL),
(2, 13, 2, 'Aktif', NULL, NULL, NULL, NULL),
(3, 12, 1, 'Aktif', NULL, NULL, NULL, NULL),
(4, 12, 2, 'Aktif', NULL, NULL, NULL, NULL),
(5, 11, 1, 'Aktif', NULL, NULL, NULL, NULL),
(6, 11, 2, 'Aktif', NULL, NULL, NULL, NULL),
(7, 10, 1, 'Aktif', NULL, NULL, NULL, NULL),
(8, 10, 2, 'Aktif', NULL, NULL, NULL, NULL),
(9, 9, 1, 'Aktif', NULL, NULL, NULL, NULL),
(10, 9, 2, 'Aktif', NULL, NULL, NULL, NULL),
(11, 9, 3, 'Aktif', NULL, NULL, NULL, NULL),
(12, 9, 4, 'Aktif', NULL, NULL, NULL, NULL),
(13, 9, 5, 'Aktif', NULL, NULL, NULL, NULL),
(14, 9, 6, 'Aktif', NULL, NULL, NULL, NULL),
(15, 9, 7, 'Aktif', NULL, NULL, NULL, NULL),
(16, 9, 8, 'Aktif', NULL, NULL, NULL, NULL),
(17, 9, 9, 'Aktif', NULL, NULL, NULL, NULL),
(18, 9, 10, 'Aktif', NULL, NULL, NULL, NULL),
(19, 9, 11, 'Aktif', NULL, NULL, '51795', '2025-05-22'),
(20, 9, 12, 'Aktif', NULL, NULL, NULL, NULL),
(21, 9, 13, 'Aktif', NULL, NULL, NULL, NULL),
(22, 9, 14, 'Aktif', NULL, NULL, NULL, NULL),
(23, 9, 15, 'Aktif', NULL, NULL, NULL, NULL),
(24, 9, 16, 'Aktif', NULL, NULL, NULL, NULL),
(25, 9, 17, 'Aktif', NULL, NULL, NULL, NULL),
(26, 9, 18, 'Aktif', NULL, NULL, '51795', '2025-05-22'),
(36, 9, 19, 'Aktif', '51795', '2025-05-22', '51795', '2025-05-22'),
(37, 2, 1, 'Aktif', '51866', '2025-07-12', NULL, NULL),
(38, 3, 1, 'Aktif', '51866', '2025-07-12', NULL, NULL),
(39, 4, 1, 'Aktif', '51866', '2025-07-12', NULL, NULL),
(40, 5, 1, 'Aktif', '51866', '2025-07-12', NULL, NULL),
(41, 9, 25, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(42, 9, 26, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(43, 9, 27, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(44, 9, 28, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(45, 9, 29, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(46, 9, 30, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(47, 9, 31, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(48, 9, 32, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(49, 9, 33, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(50, 9, 34, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(51, 9, 35, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(52, 9, 36, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(53, 9, 37, 'Aktif', '51795', '2025-08-13', NULL, NULL),
(54, 9, 38, 'Aktif', '51795', '2025-08-14', NULL, NULL),
(55, 9, 39, 'Aktif', '51795', '2025-08-14', NULL, NULL),
(56, 9, 40, 'Aktif', '51795', '2025-08-14', NULL, NULL),
(57, 6, 1, 'Aktif', '51866', '2025-09-04', NULL, NULL);
SET IDENTITY_INSERT database_siso.dtl_ruangan_penyimpanan OFF;

SELECT * FROM database_siso.dtl_penyimpanan

SET IDENTITY_INSERT database_siso.keranjang ON;
INSERT INTO database_siso.keranjang (id_keranjang, nim, barang, jumlah) VALUES
(45, '0320200032', 5, 1),
(46, '0320200032', 6, 0),
(47, '0320200032', 4, 0),
(66, '0320210053', 15, 1),
(70, '0320210053', 4, 1),
(88, '0320210053', 12, 1),
(120, '0320240002', 23, 1),
(123, '0320200032', 18, 1),
(131, '0320230119', 30, 1),
(132, '0320240067', 30, 1),
(167, '0320240078', 1582, 1),
(168, '0320240081', 1584, 1);
SET IDENTITY_INSERT database_siso.keranjang OFF;

SET IDENTITY_INSERT database_siso.peminjaman_barang ON;
INSERT INTO database_siso.peminjaman_barang (id_peminjaman_barang, nama_peminjam, tanggal_peminjam, nim_peminjam, keperluan_peminjaman, mulai_peminjaman, selesai_peminjaman, status_peminjaman) VALUES
(46, 'RISALATUL KAMILA', '2025-07-16', '0320210053', 'Sertifikasi Mikrotik', '2025-07-17', '2025-07-18', 'Completed'),
(47, 'RISALATUL KAMILA', '2025-07-16', '0320210053', 'Ujikom Jarkom', '2025-07-17', '2025-07-21', 'Borrowed'),
(49, 'FARHAN ZAIDAN', '2025-07-16', '0320230063', 'Perkuliahan PRG 7', '2025-07-15', '2025-07-18', 'Rejected'),
(50, 'RISALATUL KAMILA', '2025-07-16', '0320210053', '\r\nSupport PKM', '2025-07-16', '2025-07-18', 'Rejected'),
(51, 'RISALATUL KAMILA', '2025-07-16', '0320210053', 'Training Web', '2025-07-16', '2025-07-22', 'Rejected'),
(52, 'FARHAN ZAIDAN', '2025-07-16', '0320230063', 'Seminar', '2025-07-17', '2025-07-18', 'Rejected'),
(53, 'FARHAN ZAIDAN', '2025-07-16', '0320230063', 'Seminar', '2025-07-18', '2025-07-21', 'Rejected'),
(54, 'FARHAN ZAIDAN', '2025-07-16', '0320230063', 'Proyek AHM', '2025-07-17', '2025-07-31', 'Rejected'),
(55, 'FARHAN ZAIDAN', '2025-07-16', '0320230063', 'Fasilitas Lab', '2025-07-17', '2025-07-19', 'Rejected'),
(56, 'FARHAN ZAIDAN', '2025-07-16', '0320230063', 'Fasilitas Lab', '2025-07-17', '2025-07-19', 'Rejected'),
(57, 'FARHAN ZAIDAN', '2025-07-16', '0320230063', 'Fasil', '2025-07-17', '2025-07-18', 'Rejected'),
(58, 'FARHAN ZAIDAN', '2025-07-16', '0320230063', 'fs', '2025-07-17', '2025-07-18', 'Rejected'),
(59, 'FARHAN ZAIDAN', '2025-07-16', '0320230063', 'Proyek GS Recruitment', '2025-07-16', '2025-07-31', 'Rejected'),
(62, 'INDRA SUKMA NUGRAHA', '2025-08-07', '0320240031', 'test video', '2025-08-08', '2025-08-09', 'Rejected'),
(63, 'INDRA SUKMA NUGRAHA', '2025-08-07', '0320240031', 'Mengerjakan Projek Kampus', '2025-08-08', '2025-08-09', 'Rejected'),
(64, 'RONI PRASETYO', '2025-08-13', '0320200024', 'Pembelajaran Projek SRI', '2025-08-14', '2025-08-31', 'Rejected'),
(65, 'AGESTYO RIZKI NUGRAHA', '2025-08-13', '0320230003', 'pembelajaran', '2025-08-14', '2025-08-15', 'Rejected'),
(66, 'RIZQI ALFIAN', '2025-08-13', '0320240070', 'Peminjaman Laptop Tester', '2025-08-14', '2025-08-15', 'Rejected'),
(67, 'AGESTYO RIZKI NUGRAHA', '2025-08-13', '0320230003', 'Pembelajaran', '2025-08-14', '2025-08-15', 'Approved'),
(68, 'ADHITTYA TUBAGUS SYAHRONI', '2025-08-13', '0320240086', 'Untuk mengerjakan project', '2025-08-14', '2025-08-15', 'Rejected'),
(69, 'ALVARO NAUFAL SAKSONO', '2025-08-13', '0320240006', 'Untuk mengerjakan soal UAS', '2025-08-14', '2025-12-31', 'Rejected'),
(70, 'FERNANDA TARISHA WANAILA', '2025-08-13', '0320230014', 'pembelajaran', '2025-08-14', '2025-09-04', 'Rejected'),
(71, 'VEBRIANA DELA ROSANTI', '2025-08-13', '0320240080', 'buat project dan pembelajaran', '2025-08-14', '2025-08-29', 'Rejected'),
(72, 'RIZQI ALFIAN', '2025-08-13', '0320240070', 'Testing 2', '2025-08-15', '2025-08-23', 'Rejected'),
(73, 'AGESTYO RIZKI NUGRAHA', '2025-08-13', '0320230003', 'belajar', '2025-08-14', '2026-03-28', 'Approved'),
(74, 'RISALATUL KAMILA', '2025-08-18', '0320210053', 'Praktikum Jarkom', '2025-08-19', '2025-08-20', 'Rejected'),
(75, 'FARHAN ZAIDAN', '2025-08-20', '0320230063', 'Perkuliahan Proyek Pemrograman', '2025-08-21', '2025-08-21', 'Rejected'),
(76, 'FARHAN ZAIDAN', '2025-08-20', '0320230063', 'Jam Minus', '2025-08-21', '2025-08-21', 'Rejected'),
(77, 'FARHAN ZAIDAN', '2025-08-20', '0320230063', 'Praktikum JARKOM', '2025-08-21', '2025-08-21', 'Completed'),
(78, 'FARHAN ZAIDAN', '2025-08-22', '0320230063', 'Remedial', '2025-08-23', '2025-08-23', 'Completed'),
(79, 'KADEK BINTANG JANUARTA', '2025-09-07', '0320240032', 'Pembelajaran di kelas selama 1 semester', '2025-09-08', '2026-02-28', 'Rejected'),
(80, '1', '2025-09-08', '0320250060', 'dfhghjk', '2025-09-09', '2025-10-11', 'Rejected'),
(81, 'SHEVA YUDHA YUNIOR', '2025-09-08', '0320240078', 'Peminjaman Matrikulasi - Zahirah Mufidah', '2025-09-09', '2025-09-11', 'Rejected'),
(82, 'MIKHAIL DAFFA HERDIANSAH', '2025-09-09', '0320230040', 'untuk mengerjakan tugas matrikulasi', '2025-09-10', '2025-09-11', 'Rejected'),
(83, 'AMAR ABDULLAH SULAMMI', '2025-09-10', '0320230090', 'Matrikulasi 2025', '2025-09-10', '2025-09-10', 'Rejected'),
(84, 'DIPTA ADITYA PRATAMA', '2025-09-15', '0320250017', 'perkerjaan tugas dikampus', '2025-09-15', '2026-02-27', 'Rejected'),
(85, 'FARSYA KHAIRANI', '2025-09-17', '0320240026', 'Pembelajaran', '2025-09-18', '2026-02-20', 'Rejected'),
(86, 'ABDUL AZIZ', '2025-10-10', '0320240001', 'untuk pembelajaran', '2025-10-13', '2026-02-28', 'Rejected'),
(87, 'PUJI YAYANG HANDRIANI', '2025-10-10', '0320240056', 'Untuk kegiatan pembelajaran', '2025-10-13', '2026-02-28', 'Rejected');
SET IDENTITY_INSERT database_siso.peminjaman_barang OFF;

-- Insert data dummy siso_msmutasi
SET IDENTITY_INSERT database_siso.siso_msmutasi ON;

INSERT INTO database_siso.siso_msmutasi (
    id_mutasi, id_pengguna, tanggal_mutasi, lokasi_asal, lokasi_tujuan, 
    ruang_penyimpanan_tujuan, alasan_mutasi, status_mutasi, 
    disetujui_oleh, tanggal_persetujuan, modified_by, modified_date
) VALUES
(1, '51866', '2025-12-14', 'UPT-Informatika', 'Dept. Pelatihan dan Sertifikasi', 
   'Laci', 'Keperluan absensi karyawan dan sertifikasi', 'Approved', 
   'Sisia Dika Ariyanto', '2025-12-14', '51729', '2025-12-14'),

(2, '51866', '2025-12-15', 'UPT-Informatika', 'Dept. Pelatihan dan Sertifikasi', 
   'LEMARI 2', 'Keperluan pelatihan internal', 'Draft', 
   NULL, NULL, NULL, NULL),

(3, '51795', '2025-12-16', 'UPT-Informatika', 'Pusat Sistem Informasi', 
   'Rak Server A1', 'Pengembangan aplikasi SISO', 'Pending', 
   NULL, NULL, NULL, NULL),

(4, '51729', '2025-12-17', 'UPT-Informatika', 'Unit Pelayanan Teknis Informatika', 
   'Gudang IT', 'Maintenance perangkat lab', 'Approved', 
   'Roni Prasetyo', '2025-12-17', '51866', '2025-12-17'),

(5, '51866', '2025-12-18', 'UPT-Informatika', 'Unit Pelayanan Teknis Perangkat Lunak', 
   'Ruang Development', 'Testing perangkat development', 'Rejected', 
   'Admin QA', '2025-12-18', '51729', '2025-12-18'),

(6, '51795', '2025-12-19', 'UPT-Informatika', 'Dept. Sumber Daya Manusia', 
   'Ruang HRD', 'Laptop untuk rekrutmen', 'Pending', 
   NULL, NULL, NULL, NULL),

(7, '51866', '2025-12-20', 'UPT-Informatika', 'Dept. Pelayanan Umum', 
   'Front Office', 'Perangkat pelayanan tamu', 'Draft', 
   NULL, NULL, NULL, NULL);

SET IDENTITY_INSERT database_siso.siso_msmutasi OFF;

SELECT * FROM database_siso.siso_msmutasi 
WHERE id_pengguna != '51866';

-- 1. Tambah kolom alasan_penolakan ke tabel mutasi (jika belum ada)
ALTER TABLE database_siso.siso_msmutasi
ADD alasan_penolakan NVARCHAR(500) NULL;

-- 2. Update SP sp_SisoMsMutasi_Approve untuk menerima dan menyimpan alasan_penolakan
ALTER PROCEDURE database_siso.sp_SisoMsMutasi_Approve
    @id_mutasi INT,
    @status_mutasi NVARCHAR(50),
    @disetujui_oleh NVARCHAR(100),
    @alasan_penolakan NVARCHAR(500) = NULL,
    @modified_by NVARCHAR(50) = NULL
AS
BEGIN
    UPDATE database_siso.ms_mutasi
    SET status_mutasi = @status_mutasi,
        disetujui_oleh = @disetujui_oleh,
        alasan_penolakan = @alasan_penolakan,
        tanggal_persetujuan = GETDATE(),
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_mutasi = @id_mutasi;
    
    SELECT @@ROWCOUNT;
END

-- 3. Update SP sp_SisoMsMutasi_GetAll untuk mengembalikan alasan_penolakan
ALTER PROCEDURE database_siso.sp_SisoMsMutasi_GetAll
AS
BEGIN
    SELECT 
        m.id_mutasi,
        m.id_pengguna,
        m.tanggal_mutasi,
        m.lokasi_asal,
        l.nama_lembaga AS lokasi_tujuan,
        m.ruang_penyimpanan_tujuan,
        m.alasan_mutasi,
        m.status_mutasi,
        m.disetujui_oleh,
        m.tanggal_persetujuan,
        m.alasan_penolakan,
        m.modified_by,
        m.modified_date
    FROM database_siso.ms_mutasi m
    LEFT JOIN database_siso.ms_lembaga l ON m.id_lembaga_tujuan = l.id
    ORDER BY m.id_mutasi DESC;
END

-- 4. Update SP sp_SisoMsMutasi_GetById untuk mengembalikan alasan_penolakan
ALTER PROCEDURE database_siso.sp_SisoMsMutasi_GetById
    @id_mutasi INT
AS
BEGIN
    SELECT 
        m.id_mutasi,
        m.id_pengguna,
        m.tanggal_mutasi,
        m.lokasi_asal,
        l.nama_lembaga AS lokasi_tujuan,
        m.ruang_penyimpanan_tujuan,
        m.alasan_mutasi,
        m.status_mutasi,
        m.disetujui_oleh,
        m.tanggal_persetujuan,
        m.alasan_penolakan,
        m.modified_by,
        m.modified_date
    FROM database_siso.ms_mutasi m
    LEFT JOIN database_siso.ms_lembaga l ON m.id_lembaga_tujuan = l.id
    WHERE m.id_mutasi = @id_mutasi;
END

-- Insert data dummy siso_ms_dtlmutasi
SET IDENTITY_INSERT database_siso.siso_ms_dtlmutasi ON;

INSERT INTO database_siso.siso_ms_dtlmutasi (
    id_dtl_mutasi, id_mutasi, id_barang, kuantitas, kondisi_barang, catatan
) VALUES
(1, 1, 2, 1, 'Good', 'Laptop Lenovo ThinkPad L14 untuk absensi'),
(2, 1, 3, 1, 'Good', 'Laptop Lenovo P14S untuk sertifikasi'),
(3, 2, 38, 1, 'Good', 'Laptop untuk pelatihan batch 1'),
(4, 2, 39, 1, 'Good', 'Laptop untuk pelatihan batch 2'),
(5, 3, 42, 1, 'Good', 'Laptop development team A'),
(6, 3, 43, 1, 'Good', 'Laptop development team B'),
(7, 3, 44, 1, 'Good', 'Laptop development team C'),
(8, 4, 46, 1, 'Good', 'Laptop untuk monitoring server'),
(9, 5, 48, 1, 'Good', 'Laptop testing unit 1'),
(10, 5, 49, 1, 'Good', 'Laptop testing unit 2'),
(11, 6, 50, 1, 'Good', 'Laptop HRD 1'),
(12, 6, 51, 1, 'Good', 'Laptop HRD 2'),
(13, 7, 52, 1, 'Good', 'Laptop front office');

SET IDENTITY_INSERT database_siso.siso_ms_dtlmutasi OFF;

-- Verifikasi
SELECT * FROM database_siso.siso_msmutasi;
SELECT * FROM database_siso.siso_ms_dtlmutasi;

SET IDENTITY_INSERT database_siso.riwayat_approval ON;
INSERT INTO database_siso.riwayat_approval (id, id_dtl_peminjaman, user_approval, nama_approval,waktu_approval) VALUES
(60, 94, 'RISALATUL KAMILA', 'Request', '2025-07-16 16:54:34'),
(61, 95, 'RISALATUL KAMILA', 'Request', '2025-07-16 16:56:51'),
(62, 96, 'RISALATUL KAMILA', 'Request', '2025-07-16 16:56:51'),
(63, 97, 'RISALATUL KAMILA', 'Request', '2025-07-16 16:57:40'),
(64, 98, 'RISALATUL KAMILA', 'Request', '2025-07-16 16:57:40'),
(65, 94, 'PIC Asset & Non Asset', 'Approved', '2025-07-16 16:59:00'),
(66, 94, 'Koordinator UPT', 'Approved', '2025-07-16 16:59:42'),
(67, 98, 'PIC Non Asset', 'Approved', '2025-07-16 17:04:28'),
(68, 97, 'PIC Asset & Non Asset', 'Approved', '2025-07-16 17:06:48'),
(70, 97, 'Koordinator UPT', 'Approved', '2025-07-16 17:27:09'),
(71, 96, 'PIC Asset & Non Asset', 'Rejected', '2025-07-16 17:38:29'),
(72, 95, 'PIC Asset & Non Asset', 'Approved', '2025-07-16 17:38:43'),
(73, 95, 'Koordinator UPT', 'Approved', '2025-07-16 17:38:57'),
(74, 99, 'FARHAN ZAIDAN', 'Request', '2025-07-16 17:52:24'),
(93, 99, 'PIC Asset', 'Reject', '2025-07-16 18:42:05'),
(95, 100, 'RISALATUL KAMILA', 'Request', '2025-07-16 18:56:04'),
(96, 101, 'RISALATUL KAMILA', 'Request', '2025-07-16 19:18:57'),
(97, 102, 'RISALATUL KAMILA', 'Request', '2025-07-16 19:18:57'),
(98, 102, 'PIC Asset & Non Asset', 'Approved', '2025-07-16 19:19:35'),
(99, 102, 'Koordinator UPT', 'Approved', '2025-07-16 19:20:14'),
(100, 103, 'FARHAN ZAIDAN', 'Request', '2025-07-16 19:58:23'),
(101, 104, 'FARHAN ZAIDAN', 'Request', '2025-07-16 19:58:23'),
(102, 105, 'FARHAN ZAIDAN', 'Request', '2025-07-16 19:59:12'),
(103, 106, 'FARHAN ZAIDAN', 'Request', '2025-07-16 19:59:12'),
(104, 107, 'FARHAN ZAIDAN', 'Request', '2025-07-16 20:00:04'),
(105, 108, 'FARHAN ZAIDAN', 'Request', '2025-07-16 20:00:44'),
(106, 109, 'FARHAN ZAIDAN', 'Request', '2025-07-16 20:03:05'),
(107, 110, 'FARHAN ZAIDAN', 'Request', '2025-07-16 20:09:27'),
(108, 111, 'FARHAN ZAIDAN', 'Request', '2025-07-16 20:10:12'),
(109, 112, 'FARHAN ZAIDAN', 'Request', '2025-07-16 20:11:38'),
(110, 113, 'FARHAN ZAIDAN', 'Request', '2025-07-16 20:11:38'),
(111, 112, 'PIC Asset & Non Asset', 'Approved', '2025-07-16 20:12:26'),
(112, 100, 'PIC Asset', 'Reject', '2025-07-17 09:00:00'),
(113, 101, 'PIC Asset', 'Reject', '2025-07-17 09:00:00'),
(114, 112, 'Koordinator UPT', 'Reject', '2025-07-17 09:00:00'),
(115, 113, 'PIC Non Asset', 'Reject', '2025-07-17 09:00:00'),
(168, 103, 'PIC Asset', 'Reject', '2025-07-18 00:00:00'),
(169, 104, 'PIC Non Asset', 'Reject', '2025-07-18 00:00:00'),
(170, 107, 'PIC Asset', 'Reject', '2025-07-18 00:00:00'),
(171, 108, 'PIC Non Asset', 'Reject', '2025-07-18 00:00:00'),
(172, 109, 'PIC Non Asset', 'Reject', '2025-07-18 00:00:00'),
(173, 110, 'PIC Non Asset', 'Reject', '2025-07-18 00:00:00'),
(174, 111, 'PIC Non Asset', 'Reject', '2025-07-18 00:00:00'),
(175, 105, 'PIC Asset', 'Reject', '2025-07-19 00:00:00'),
(176, 106, 'PIC Non Asset', 'Reject', '2025-07-19 00:00:00'),
(177, 114, 'FARHAN ZAIDAN', 'Request', '2025-07-29 15:58:58'),
(178, 115, 'RISALATUL KAMILA', 'Request', '2025-07-29 16:03:03'),
(179, 116, 'RISALATUL KAMILA', 'Request', '2025-07-29 16:03:03'),
(180, 116, 'PIC Non Asset', 'Approved', '2025-07-29 16:03:34'),
(181, 117, 'INDRA SUKMA NUGRAHA', 'Request', '2025-08-07 09:50:56'),
(182, 118, 'INDRA SUKMA NUGRAHA', 'Request', '2025-08-07 11:16:26'),
(183, 114, 'PIC Asset & Non Asset', 'Approved', '2025-08-07 11:23:34'),
(184, 117, 'PIC Asset', 'Reject', '2025-08-09 00:00:00'),
(326, 118, 'PIC Asset', 'Reject', '2025-08-09 23:30:00'),
(328, 119, 'RONI PRASETYO', 'Request', '2025-08-13 10:24:10'),
(329, 120, 'AGESTYO RIZKI NUGRAHA', 'Request', '2025-08-13 10:29:23'),
(330, 120, 'PIC Asset & Non Asset', 'Approved', '2025-08-13 10:30:56'),
(331, 121, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:31:11'),
(332, 122, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:31:11'),
(333, 123, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:31:11'),
(334, 124, 'AGESTYO RIZKI NUGRAHA', 'Request', '2025-08-13 10:32:09'),
(335, 125, 'ADHITTYA TUBAGUS SYAHRONI', 'Request', '2025-08-13 10:32:56'),
(336, 126, 'ALVARO NAUFAL SAKSONO', 'Request', '2025-08-13 10:33:29'),
(337, 127, 'FERNANDA TARISHA WANAILA', 'Request', '2025-08-13 10:35:30'),
(338, 128, 'VEBRIANA DELA ROSANTI', 'Request', '2025-08-13 10:35:57'),
(339, 129, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:05'),
(340, 130, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:05'),
(341, 131, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:05'),
(342, 132, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:05'),
(343, 133, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:05'),
(344, 134, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(345, 135, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(346, 136, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(347, 137, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(348, 138, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(349, 139, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(350, 140, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(351, 141, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(352, 142, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(353, 143, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(354, 144, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(355, 145, 'RIZQI ALFIAN', 'Request', '2025-08-13 10:36:06'),
(356, 146, 'AGESTYO RIZKI NUGRAHA', 'Request', '2025-08-13 10:36:44'),
(357, 147, 'AGESTYO RIZKI NUGRAHA', 'Request', '2025-08-13 10:36:44'),
(358, 148, 'AGESTYO RIZKI NUGRAHA', 'Request', '2025-08-13 10:36:44'),
(359, 149, 'AGESTYO RIZKI NUGRAHA', 'Request', '2025-08-13 10:36:44'),
(360, 124, 'PIC Non Asset', 'Approved', '2025-08-13 10:39:35'),
(361, 149, 'PIC Non Asset', 'Approved', '2025-08-13 10:39:52'),
(527, 119, 'PIC Asset', 'Reject', '2025-08-15 05:30:00'),
(548, 126, 'PIC Asset', 'Reject', '2025-08-15 06:00:00'),
(573, 120, 'Koordinator UPT', 'Reject', '2025-08-15 07:00:00'),
(654, 127, 'PIC Asset', 'Reject', '2025-08-15 09:30:00'),
(717, 147, 'PIC Asset', 'Reject', '2025-08-15 11:30:00'),
(739, 121, 'PIC Asset', 'Reject', '2025-08-15 12:30:00'),
(763, 148, 'PIC Asset', 'Reject', '2025-08-15 13:00:00'),
(817, 125, 'PIC Asset', 'Reject', '2025-08-15 15:00:00'),
(1026, 123, 'PIC Asset', 'Reject', '2025-08-15 22:00:00'),
(1061, 146, 'PIC Asset', 'Reject', '2025-08-15 23:00:00'),
(1075, 128, 'PIC Asset', 'Reject', '2025-08-15 23:30:00'),
(1175, 129, 'PIC Asset', 'Reject', '2025-08-16 01:30:00'),
(1241, 133, 'PIC Asset', 'Reject', '2025-08-16 02:30:00'),
(1243, 135, 'PIC Asset', 'Reject', '2025-08-16 02:30:00'),
(1277, 138, 'PIC Asset', 'Reject', '2025-08-16 03:00:00'),
(1309, 139, 'PIC Asset', 'Reject', '2025-08-16 03:30:00'),
(1344, 143, 'PIC Asset', 'Reject', '2025-08-16 04:00:00'),
(1345, 144, 'PIC Asset', 'Reject', '2025-08-16 04:00:00'),
(1591, 142, 'PIC Asset', 'Reject', '2025-08-16 08:00:00'),
(1766, 131, 'PIC Asset', 'Reject', '2025-08-16 11:00:00'),
(1927, 137, 'PIC Asset', 'Reject', '2025-08-16 13:30:00'),
(1992, 140, 'PIC Asset', 'Reject', '2025-08-16 14:30:00'),
(2055, 141, 'PIC Asset', 'Reject', '2025-08-16 15:30:00'),
(2106, 130, 'PIC Asset', 'Reject', '2025-08-16 16:30:00'),
(2141, 134, 'PIC Asset', 'Reject', '2025-08-16 17:00:00'),
(2201, 132, 'PIC Asset', 'Reject', '2025-08-16 18:00:00'),
(2329, 136, 'PIC Asset', 'Reject', '2025-08-16 20:00:00'),
(2555, 145, 'PIC Asset', 'Reject', '2025-08-16 23:30:00'),
(2570, 150, 'RISALATUL KAMILA', 'Request', '2025-08-18 09:05:42'),
(2571, 150, 'PIC Asset', 'Reject', '2025-08-20 00:00:00'),
(2594, 151, 'FARHAN ZAIDAN', 'Request', '2025-08-20 13:43:25'),
(2595, 152, 'FARHAN ZAIDAN', 'Request', '2025-08-20 14:08:45'),
(2596, 153, 'FARHAN ZAIDAN', 'Request', '2025-08-20 14:08:45'),
(2597, 154, 'FARHAN ZAIDAN', 'Request', '2025-08-20 14:10:58'),
(2598, 155, 'FARHAN ZAIDAN', 'Request', '2025-08-20 14:10:58'),
(2599, 155, 'PIC Non Asset', 'Approved', '2025-08-20 14:12:09'),
(2600, 151, 'PIC Asset', 'Reject', '2025-08-22 00:00:22'),
(2601, 152, 'PIC Asset', 'Reject', '2025-08-22 00:00:22'),
(2602, 153, 'PIC Non Asset', 'Reject', '2025-08-22 00:00:22'),
(2603, 154, 'PIC Non Asset', 'Reject', '2025-08-22 00:00:22'),
(2607, 156, 'FARHAN ZAIDAN', 'Request', '2025-08-22 08:15:41'),
(2608, 156, 'PIC Non Asset', 'Approved', '2025-08-22 08:16:22'),
(2609, 157, 'KADEK BINTANG JANUARTA', 'Request', '2025-09-07 11:15:05'),
(2610, 158, '1', 'Request', '2025-09-08 13:58:43'),
(2611, 159, '1', 'Request', '2025-09-08 13:58:43'),
(2612, 160, '1', 'Request', '2025-09-08 13:58:43'),
(2613, 161, '1', 'Request', '2025-09-08 13:58:43'),
(2614, 162, '1', 'Request', '2025-09-08 13:58:43'),
(2615, 163, '1', 'Request', '2025-09-08 13:58:43'),
(2616, 164, '1', 'Request', '2025-09-08 13:58:43'),
(2617, 165, '1', 'Request', '2025-09-08 13:58:43'),
(2618, 166, '1', 'Request', '2025-09-08 13:58:43'),
(2619, 167, '1', 'Request', '2025-09-08 13:58:43'),
(2620, 168, '1', 'Request', '2025-09-08 13:58:43'),
(2621, 169, '1', 'Request', '2025-09-08 13:58:43'),
(2622, 170, '1', 'Request', '2025-09-08 13:58:43'),
(2623, 171, '1', 'Request', '2025-09-08 13:58:43'),
(2624, 172, 'SHEVA YUDHA YUNIOR', 'Request', '2025-09-08 15:19:34'),
(2625, 157, 'PIC Asset', 'Reject', '2025-09-09 00:01:10'),
(2626, 173, 'MIKHAIL DAFFA HERDIANSAH', 'Request', '2025-09-09 13:58:08'),
(2627, 174, 'MIKHAIL DAFFA HERDIANSAH', 'Request', '2025-09-09 13:58:08'),
(2628, 175, 'MIKHAIL DAFFA HERDIANSAH', 'Request', '2025-09-09 13:58:08'),
(2629, 158, 'PIC Asset', 'Reject', '2025-09-10 00:00:22'),
(2630, 159, 'PIC Non Asset', 'Reject', '2025-09-10 00:00:22'),
(2631, 160, 'PIC Asset', 'Reject', '2025-09-10 00:00:22'),
(2632, 161, 'PIC Asset', 'Reject', '2025-09-10 00:00:22'),
(2633, 162, 'PIC Non Asset', 'Reject', '2025-09-10 00:00:22'),
(2634, 163, 'PIC Non Asset', 'Reject', '2025-09-10 00:00:22'),
(2635, 164, 'PIC Asset', 'Reject', '2025-09-10 00:00:22'),
(2636, 165, 'PIC Non Asset', 'Reject', '2025-09-10 00:00:22'),
(2637, 166, 'PIC Non Asset', 'Reject', '2025-09-10 00:00:22'),
(2638, 167, 'PIC Asset', 'Reject', '2025-09-10 00:00:22'),
(2639, 168, 'PIC Asset', 'Reject', '2025-09-10 00:00:22'),
(2640, 169, 'PIC Asset', 'Reject', '2025-09-10 00:00:22'),
(2641, 170, 'PIC Asset', 'Reject', '2025-09-10 00:00:22'),
(2642, 171, 'PIC Asset', 'Reject', '2025-09-10 00:00:22'),
(2643, 172, 'PIC Asset', 'Reject', '2025-09-10 00:00:22'),
(2644, 176, 'AMAR ABDULLAH SULAMMI', 'Request', '2025-09-10 08:28:12'),
(2645, 177, 'AMAR ABDULLAH SULAMMI', 'Request', '2025-09-10 08:28:12'),
(2646, 173, 'PIC Asset', 'Reject', '2025-09-11 00:00:22'),
(2647, 174, 'PIC Asset', 'Reject', '2025-09-11 00:00:22'),
(2648, 175, 'PIC Asset', 'Reject', '2025-09-11 00:00:22'),
(2649, 176, 'PIC Asset', 'Reject', '2025-09-11 00:00:22'),
(2650, 177, 'PIC Asset', 'Reject', '2025-09-11 00:00:22'),
(2653, 178, 'DIPTA ADITYA PRATAMA', 'Request', '2025-09-15 10:49:45'),
(2654, 178, 'PIC Asset', 'Reject', '2025-09-16 00:00:22'),
(2655, 179, 'FARSYA KHAIRANI', 'Request', '2025-09-17 15:20:45'),
(2656, 180, 'FARSYA KHAIRANI', 'Request', '2025-09-17 15:20:45'),
(2657, 181, 'FARSYA KHAIRANI', 'Request', '2025-09-17 15:20:45'),
(2658, 182, 'FARSYA KHAIRANI', 'Request', '2025-09-17 15:20:45'),
(2659, 183, 'FARSYA KHAIRANI', 'Request', '2025-09-17 15:20:45'),
(2660, 184, 'FARSYA KHAIRANI', 'Request', '2025-09-17 15:20:45'),
(2661, 179, 'PIC Asset', 'Reject', '2025-09-19 00:00:22'),
(2662, 180, 'PIC Asset', 'Reject', '2025-09-19 00:00:22'),
(2663, 181, 'PIC Asset', 'Reject', '2025-09-19 00:00:22'),
(2664, 182, 'PIC Asset', 'Reject', '2025-09-19 00:00:22'),
(2665, 183, 'PIC Asset', 'Reject', '2025-09-19 00:00:22'),
(2666, 184, 'PIC Asset', 'Reject', '2025-09-19 00:00:22'),
(2668, 185, 'ABDUL AZIZ', 'Request', '2025-10-10 08:07:28'),
(2669, 186, 'PUJI YAYANG HANDRIANI', 'Request', '2025-10-10 08:27:37'),
(2670, 185, 'PIC Asset', 'Reject', '2025-10-14 00:00:22'),
(2671, 186, 'PIC Asset', 'Reject', '2025-10-14 00:00:22');
SET IDENTITY_INSERT database_siso.riwayat_approval OFF;


--===================================================================================================================--
--STORE PROCEDURE

-- =============================================
-- STORED PROCEDURES UNTUK TABEL BARANG
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Barang
CREATE PROCEDURE [database_siso].[sp_Barang_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_barang, nama_barang, nomor_aktiva, tipe_barang,
        jumlah_barang, jumlah_optimum, jumlah_minimum, satuan_barang,
        kondisi_barang, gambar_barang, kategori_barang, keterangan_penyimpanan,
        id_dtl_penyimpanan, status_barang, ketersediaan_barang,
        created_by, created_date, modified_by, modified_date
    FROM [database_siso].[barang]
    ORDER BY id_barang;
END
GO

-- SP Get Barang By ID
CREATE PROCEDURE [database_siso].[sp_Barang_GetById]
    @id_barang INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_barang, nama_barang, nomor_aktiva, tipe_barang,
        jumlah_barang, jumlah_optimum, jumlah_minimum, satuan_barang,
        kondisi_barang, gambar_barang, kategori_barang, keterangan_penyimpanan,
        id_dtl_penyimpanan, status_barang, ketersediaan_barang,
        created_by, created_date, modified_by, modified_date
    FROM [database_siso].[barang]
    WHERE id_barang = @id_barang;
END
GO

-- SP Insert Barang
CREATE PROCEDURE [database_siso].[sp_Barang_Insert]
    @nama_barang NVARCHAR(100),
    @nomor_aktiva NVARCHAR(20),
    @tipe_barang NVARCHAR(20),
    @jumlah_barang INT,
    @jumlah_optimum INT,
    @jumlah_minimum INT,
    @satuan_barang NVARCHAR(10),
    @kondisi_barang NVARCHAR(100),
    @gambar_barang NVARCHAR(100) = NULL,
    @kategori_barang NVARCHAR(50),
    @keterangan_penyimpanan NVARCHAR(50),
    @id_dtl_penyimpanan INT = NULL,
    @status_barang NVARCHAR(20),
    @ketersediaan_barang NVARCHAR(50) = NULL,
    @created_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[barang] (
        nama_barang, nomor_aktiva, tipe_barang, jumlah_barang,
        jumlah_optimum, jumlah_minimum, satuan_barang, kondisi_barang,
        gambar_barang, kategori_barang, keterangan_penyimpanan,
        id_dtl_penyimpanan, status_barang, ketersediaan_barang,
        created_by, created_date
    )
    VALUES (
        @nama_barang, @nomor_aktiva, @tipe_barang, @jumlah_barang,
        @jumlah_optimum, @jumlah_minimum, @satuan_barang, @kondisi_barang,
        @gambar_barang, @kategori_barang, @keterangan_penyimpanan,
        @id_dtl_penyimpanan, @status_barang, @ketersediaan_barang,
        @created_by, GETDATE()
    );
    
    SELECT SCOPE_IDENTITY() AS id_barang;
END
GO

-- SP Update Barang
CREATE PROCEDURE [database_siso].[sp_Barang_Update]
    @id_barang INT,
    @nama_barang NVARCHAR(100),
    @nomor_aktiva NVARCHAR(20),
    @tipe_barang NVARCHAR(20),
    @jumlah_barang INT,
    @jumlah_optimum INT,
    @jumlah_minimum INT,
    @satuan_barang NVARCHAR(10),
    @kondisi_barang NVARCHAR(100),
    @gambar_barang NVARCHAR(100) = NULL,
    @kategori_barang NVARCHAR(50),
    @keterangan_penyimpanan NVARCHAR(50),
    @id_dtl_penyimpanan INT = NULL,
    @status_barang NVARCHAR(20),
    @ketersediaan_barang NVARCHAR(50) = NULL,
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[barang]
    SET 
        nama_barang = @nama_barang,
        nomor_aktiva = @nomor_aktiva,
        tipe_barang = @tipe_barang,
        jumlah_barang = @jumlah_barang,
        jumlah_optimum = @jumlah_optimum,
        jumlah_minimum = @jumlah_minimum,
        satuan_barang = @satuan_barang,
        kondisi_barang = @kondisi_barang,
        gambar_barang = @gambar_barang,
        kategori_barang = @kategori_barang,
        keterangan_penyimpanan = @keterangan_penyimpanan,
        id_dtl_penyimpanan = @id_dtl_penyimpanan,
        status_barang = @status_barang,
        ketersediaan_barang = @ketersediaan_barang,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_barang = @id_barang;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Barang
CREATE PROCEDURE [database_siso].[sp_Barang_Delete]
    @id_barang INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[barang] 
    WHERE id_barang = @id_barang;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

ALTER PROCEDURE [database_siso].[sp_Barang_Delete]
    @id_barang INT
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Soft delete: update status to 'Inactive'
    UPDATE [database_siso].[barang] 
    SET status_barang = 'Inactive',
        modified_date = GETDATE()
    WHERE id_barang = @id_barang;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Search Barang (by nama atau nomor_aktiva)
CREATE PROCEDURE [database_siso].[sp_Barang_Search]
    @keyword NVARCHAR(100) = NULL,
    @status_barang NVARCHAR(20) = NULL,
    @ketersediaan_barang NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        id_barang, nama_barang, nomor_aktiva, tipe_barang,
        jumlah_barang, jumlah_optimum, jumlah_minimum, satuan_barang,
        kondisi_barang, gambar_barang, kategori_barang, keterangan_penyimpanan,
        id_dtl_penyimpanan, status_barang, ketersediaan_barang,
        created_by, created_date, modified_by, modified_date
    FROM [database_siso].[barang]
    WHERE 
        (@keyword IS NULL OR nama_barang LIKE '%' + @keyword + '%' OR nomor_aktiva LIKE '%' + @keyword + '%')
        AND (@status_barang IS NULL OR status_barang = @status_barang)
        AND (@ketersediaan_barang IS NULL OR ketersediaan_barang = @ketersediaan_barang)
    ORDER BY id_barang;
END
GO

CREATE PROCEDURE [database_siso].[sp_Barang_PermanentDelete]
    @id_barang INT
AS
BEGIN
    SET NOCOUNT ON;
    DELETE FROM [database_siso].[barang] WHERE id_barang = @id_barang;
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- Cek foreign key yang reference ke tabel barang
SELECT 
    fk.name AS FK_Name,
    tp.name AS Parent_Table,
    cp.name AS Parent_Column
FROM sys.foreign_keys fk
INNER JOIN sys.tables tp ON fk.parent_object_id = tp.object_id
INNER JOIN sys.tables tr ON fk.referenced_object_id = tr.object_id
INNER JOIN sys.foreign_key_columns fkc ON fkc.constraint_object_id = fk.object_id
INNER JOIN sys.columns cp ON fkc.parent_column_id = cp.column_id AND fkc.parent_object_id = cp.object_id
WHERE tr.name = 'barang'

ALTER PROCEDURE [database_siso].[sp_Barang_PermanentDelete]
    @id_barang INT
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Hapus data terkait dulu
    DELETE FROM [database_siso].[dtl_peminjaman_barang] WHERE id_barang = @id_barang;
    DELETE FROM [database_siso].[keranjang] WHERE barang = @id_barang;
    DELETE FROM [database_siso].[siso_ms_dtlmutasi] WHERE id_barang = @id_barang;
    
    -- Baru hapus barang
    DELETE FROM [database_siso].[barang] WHERE id_barang = @id_barang;
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL PEMINJAMAN_BARANG
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Peminjaman Barang
CREATE PROCEDURE [database_siso].[sp_PeminjamanBarang_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_peminjaman_barang, nama_peminjam, tanggal_peminjam,
        nim_peminjam, keperluan_peminjaman, mulai_peminjaman,
        selesai_peminjaman, status_peminjaman
    FROM [database_siso].[peminjaman_barang]
    ORDER BY id_peminjaman_barang DESC;
END
GO

-- SP Get Peminjaman Barang By ID
CREATE PROCEDURE [database_siso].[sp_PeminjamanBarang_GetById]
    @id_peminjaman_barang INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_peminjaman_barang, nama_peminjam, tanggal_peminjam,
        nim_peminjam, keperluan_peminjaman, mulai_peminjaman,
        selesai_peminjaman, status_peminjaman
    FROM [database_siso].[peminjaman_barang]
    WHERE id_peminjaman_barang = @id_peminjaman_barang;
END
GO

-- SP Get Peminjaman Barang By NIM
CREATE PROCEDURE [database_siso].[sp_PeminjamanBarang_GetByNim]
    @nim_peminjam NVARCHAR(20)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_peminjaman_barang, nama_peminjam, tanggal_peminjam,
        nim_peminjam, keperluan_peminjaman, mulai_peminjaman,
        selesai_peminjaman, status_peminjaman
    FROM [database_siso].[peminjaman_barang]
    WHERE nim_peminjam = @nim_peminjam
    ORDER BY id_peminjaman_barang DESC;
END
GO

-- SP Insert Peminjaman Barang
CREATE PROCEDURE [database_siso].[sp_PeminjamanBarang_Insert]
    @nama_peminjam NVARCHAR(100),
    @nim_peminjam NVARCHAR(20),
    @keperluan_peminjaman NVARCHAR(200) = NULL,
    @mulai_peminjaman DATE = NULL,
    @selesai_peminjaman DATE = NULL,
    @status_peminjaman NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[peminjaman_barang] (
        nama_peminjam, tanggal_peminjam, nim_peminjam,
        keperluan_peminjaman, mulai_peminjaman, selesai_peminjaman,
        status_peminjaman
    )
    VALUES (
        @nama_peminjam, GETDATE(), @nim_peminjam,
        @keperluan_peminjaman, @mulai_peminjaman, @selesai_peminjaman,
        @status_peminjaman
    );
    
    SELECT SCOPE_IDENTITY() AS id_peminjaman_barang;
END
GO

-- SP Update Peminjaman Barang
CREATE PROCEDURE [database_siso].[sp_PeminjamanBarang_Update]
    @id_peminjaman_barang INT,
    @nama_peminjam NVARCHAR(100),
    @nim_peminjam NVARCHAR(20),
    @keperluan_peminjaman NVARCHAR(200) = NULL,
    @mulai_peminjaman DATE = NULL,
    @selesai_peminjaman DATE = NULL,
    @status_peminjaman NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[peminjaman_barang]
    SET 
        nama_peminjam = @nama_peminjam,
        nim_peminjam = @nim_peminjam,
        keperluan_peminjaman = @keperluan_peminjaman,
        mulai_peminjaman = @mulai_peminjaman,
        selesai_peminjaman = @selesai_peminjaman,
        status_peminjaman = @status_peminjaman
    WHERE id_peminjaman_barang = @id_peminjaman_barang;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Update Status Peminjaman
CREATE PROCEDURE [database_siso].[sp_PeminjamanBarang_UpdateStatus]
    @id_peminjaman_barang INT,
    @status_peminjaman NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[peminjaman_barang]
    SET status_peminjaman = @status_peminjaman
    WHERE id_peminjaman_barang = @id_peminjaman_barang;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Peminjaman Barang
CREATE PROCEDURE [database_siso].[sp_PeminjamanBarang_Delete]
    @id_peminjaman_barang INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[peminjaman_barang] 
    WHERE id_peminjaman_barang = @id_peminjaman_barang;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Search Peminjaman Barang
CREATE PROCEDURE [database_siso].[sp_PeminjamanBarang_Search]
    @keyword NVARCHAR(100) = NULL,
    @status_peminjaman NVARCHAR(100) = NULL,
    @tanggal_mulai DATE = NULL,
    @tanggal_selesai DATE = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        id_peminjaman_barang, nama_peminjam, tanggal_peminjam,
        nim_peminjam, keperluan_peminjaman, mulai_peminjaman,
        selesai_peminjaman, status_peminjaman
    FROM [database_siso].[peminjaman_barang]
    WHERE 
        (@keyword IS NULL OR nama_peminjam LIKE '%' + @keyword + '%' OR nim_peminjam LIKE '%' + @keyword + '%')
        AND (@status_peminjaman IS NULL OR status_peminjaman = @status_peminjaman)
        AND (@tanggal_mulai IS NULL OR mulai_peminjaman >= @tanggal_mulai)
        AND (@tanggal_selesai IS NULL OR selesai_peminjaman <= @tanggal_selesai)
    ORDER BY id_peminjaman_barang DESC;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL DTL_RUANGAN_PENYIMPANAN
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Detail Ruangan Penyimpanan
CREATE PROCEDURE [database_siso].[sp_DtlRuanganPenyimpanan_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_penyimpanan, id_ruangan, id_penyimpanan,
        status_detail, created_by, created_date,
        modified_by, modified_date
    FROM [database_siso].[dtl_ruangan_penyimpanan]
    ORDER BY id_dtl_penyimpanan;
END
GO

-- SP Get Detail Ruangan Penyimpanan By ID
CREATE PROCEDURE [database_siso].[sp_DtlRuanganPenyimpanan_GetById]
    @id_dtl_penyimpanan INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_penyimpanan, id_ruangan, id_penyimpanan,
        status_detail, created_by, created_date,
        modified_by, modified_date
    FROM [database_siso].[dtl_ruangan_penyimpanan]
    WHERE id_dtl_penyimpanan = @id_dtl_penyimpanan;
END
GO

-- SP Get Detail By Ruangan
CREATE PROCEDURE [database_siso].[sp_DtlRuanganPenyimpanan_GetByRuangan]
    @id_ruangan INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_penyimpanan, id_ruangan, id_penyimpanan,
        status_detail, created_by, created_date,
        modified_by, modified_date
    FROM [database_siso].[dtl_ruangan_penyimpanan]
    WHERE id_ruangan = @id_ruangan
    ORDER BY id_dtl_penyimpanan;
END
GO

-- SP Get Detail By Penyimpanan
CREATE PROCEDURE [database_siso].[sp_DtlRuanganPenyimpanan_GetByPenyimpanan]
    @id_penyimpanan INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_penyimpanan, id_ruangan, id_penyimpanan,
        status_detail, created_by, created_date,
        modified_by, modified_date
    FROM [database_siso].[dtl_ruangan_penyimpanan]
    WHERE id_penyimpanan = @id_penyimpanan
    ORDER BY id_dtl_penyimpanan;
END
GO

-- SP Insert Detail Ruangan Penyimpanan
CREATE PROCEDURE [database_siso].[sp_DtlRuanganPenyimpanan_Insert]
    @id_ruangan INT = NULL,
    @id_penyimpanan INT = NULL,
    @status_detail NVARCHAR(20) = NULL,
    @created_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[dtl_ruangan_penyimpanan] (
        id_ruangan, id_penyimpanan, status_detail,
        created_by, created_date
    )
    VALUES (
        @id_ruangan, @id_penyimpanan, @status_detail,
        @created_by, GETDATE()
    );
    
    SELECT SCOPE_IDENTITY() AS id_dtl_penyimpanan;
END
GO

-- SP Update Detail Ruangan Penyimpanan
CREATE PROCEDURE [database_siso].[sp_DtlRuanganPenyimpanan_Update]
    @id_dtl_penyimpanan INT,
    @id_ruangan INT = NULL,
    @id_penyimpanan INT = NULL,
    @status_detail NVARCHAR(20) = NULL,
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[dtl_ruangan_penyimpanan]
    SET 
        id_ruangan = @id_ruangan,
        id_penyimpanan = @id_penyimpanan,
        status_detail = @status_detail,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_dtl_penyimpanan = @id_dtl_penyimpanan;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Detail Ruangan Penyimpanan
CREATE PROCEDURE [database_siso].[sp_DtlRuanganPenyimpanan_Delete]
    @id_dtl_penyimpanan INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[dtl_ruangan_penyimpanan] 
    WHERE id_dtl_penyimpanan = @id_dtl_penyimpanan;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL DTL_PEMINJAMAN_BARANG
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Detail Peminjaman Barang
CREATE PROCEDURE [database_siso].[sp_DtlPeminjamanBarang_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_peminjaman, id_peminjaman_barang, id_barang,
        jumlah_peminjaman, satuan_barang, kondisi_barang,
        gambar_sebelum, gambar_sesudah, tanggal_pengembalian,
        status_barang, alasan_barang
    FROM [database_siso].[dtl_peminjaman_barang]
    ORDER BY id_dtl_peminjaman DESC;
END
GO

-- SP Get Detail Peminjaman Barang By ID
CREATE PROCEDURE [database_siso].[sp_DtlPeminjamanBarang_GetById]
    @id_dtl_peminjaman INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_peminjaman, id_peminjaman_barang, id_barang,
        jumlah_peminjaman, satuan_barang, kondisi_barang,
        gambar_sebelum, gambar_sesudah, tanggal_pengembalian,
        status_barang, alasan_barang
    FROM [database_siso].[dtl_peminjaman_barang]
    WHERE id_dtl_peminjaman = @id_dtl_peminjaman;
END
GO

-- SP Get Detail By Peminjaman Barang
CREATE PROCEDURE [database_siso].[sp_DtlPeminjamanBarang_GetByPeminjaman]
    @id_peminjaman_barang INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_peminjaman, id_peminjaman_barang, id_barang,
        jumlah_peminjaman, satuan_barang, kondisi_barang,
        gambar_sebelum, gambar_sesudah, tanggal_pengembalian,
        status_barang, alasan_barang
    FROM [database_siso].[dtl_peminjaman_barang]
    WHERE id_peminjaman_barang = @id_peminjaman_barang
    ORDER BY id_dtl_peminjaman;
END
GO

-- SP Get Detail By Barang
CREATE PROCEDURE [database_siso].[sp_DtlPeminjamanBarang_GetByBarang]
    @id_barang INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_peminjaman, id_peminjaman_barang, id_barang,
        jumlah_peminjaman, satuan_barang, kondisi_barang,
        gambar_sebelum, gambar_sesudah, tanggal_pengembalian,
        status_barang, alasan_barang
    FROM [database_siso].[dtl_peminjaman_barang]
    WHERE id_barang = @id_barang
    ORDER BY id_dtl_peminjaman DESC;
END
GO

-- SP Insert Detail Peminjaman Barang
CREATE PROCEDURE [database_siso].[sp_DtlPeminjamanBarang_Insert]
    @id_peminjaman_barang INT,
    @id_barang INT,
    @jumlah_peminjaman INT,
    @satuan_barang NVARCHAR(50),
    @kondisi_barang NVARCHAR(100),
    @gambar_sebelum NVARCHAR(100) = NULL,
    @gambar_sesudah NVARCHAR(100) = NULL,
    @tanggal_pengembalian INT = NULL,
    @status_barang NVARCHAR(100),
    @alasan_barang NVARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[dtl_peminjaman_barang] (
        id_peminjaman_barang, id_barang, jumlah_peminjaman,
        satuan_barang, kondisi_barang, gambar_sebelum,
        gambar_sesudah, tanggal_pengembalian, status_barang, alasan_barang
    )
    VALUES (
        @id_peminjaman_barang, @id_barang, @jumlah_peminjaman,
        @satuan_barang, @kondisi_barang, @gambar_sebelum,
        @gambar_sesudah, @tanggal_pengembalian, @status_barang, @alasan_barang
    );
    
    SELECT SCOPE_IDENTITY() AS id_dtl_peminjaman;
END
GO

-- SP Update Detail Peminjaman Barang
CREATE PROCEDURE [database_siso].[sp_DtlPeminjamanBarang_Update]
    @id_dtl_peminjaman INT,
    @id_peminjaman_barang INT,
    @id_barang INT,
    @jumlah_peminjaman INT,
    @satuan_barang NVARCHAR(50),
    @kondisi_barang NVARCHAR(100),
    @gambar_sebelum NVARCHAR(100) = NULL,
    @gambar_sesudah NVARCHAR(100) = NULL,
    @tanggal_pengembalian INT = NULL,
    @status_barang NVARCHAR(100),
    @alasan_barang NVARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[dtl_peminjaman_barang]
    SET 
        id_peminjaman_barang = @id_peminjaman_barang,
        id_barang = @id_barang,
        jumlah_peminjaman = @jumlah_peminjaman,
        satuan_barang = @satuan_barang,
        kondisi_barang = @kondisi_barang,
        gambar_sebelum = @gambar_sebelum,
        gambar_sesudah = @gambar_sesudah,
        tanggal_pengembalian = @tanggal_pengembalian,
        status_barang = @status_barang,
        alasan_barang = @alasan_barang
    WHERE id_dtl_peminjaman = @id_dtl_peminjaman;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Update Status Pengembalian
CREATE PROCEDURE [database_siso].[sp_DtlPeminjamanBarang_UpdatePengembalian]
    @id_dtl_peminjaman INT,
    @gambar_sesudah NVARCHAR(100) = NULL,
    @tanggal_pengembalian INT = NULL,
    @status_barang NVARCHAR(100),
    @alasan_barang NVARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[dtl_peminjaman_barang]
    SET 
        gambar_sesudah = @gambar_sesudah,
        tanggal_pengembalian = @tanggal_pengembalian,
        status_barang = @status_barang,
        alasan_barang = @alasan_barang
    WHERE id_dtl_peminjaman = @id_dtl_peminjaman;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Detail Peminjaman Barang
CREATE PROCEDURE [database_siso].[sp_DtlPeminjamanBarang_Delete]
    @id_dtl_peminjaman INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[dtl_peminjaman_barang] 
    WHERE id_dtl_peminjaman = @id_dtl_peminjaman;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Search Detail Peminjaman
CREATE PROCEDURE [database_siso].[sp_DtlPeminjamanBarang_Search]
    @status_barang NVARCHAR(100) = NULL,
    @kondisi_barang NVARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        id_dtl_peminjaman, id_peminjaman_barang, id_barang,
        jumlah_peminjaman, satuan_barang, kondisi_barang,
        gambar_sebelum, gambar_sesudah, tanggal_pengembalian,
        status_barang, alasan_barang
    FROM [database_siso].[dtl_peminjaman_barang]
    WHERE 
        (@status_barang IS NULL OR status_barang = @status_barang)
        AND (@kondisi_barang IS NULL OR kondisi_barang = @kondisi_barang)
    ORDER BY id_dtl_peminjaman DESC;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL LOG_TABLE
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Log
CREATE PROCEDURE [database_siso].[sp_LogTable_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id, event_name, executed_at, status, message
    FROM [database_siso].[log_table]
    ORDER BY id DESC;
END
GO

-- SP Get Log By ID
CREATE PROCEDURE [database_siso].[sp_LogTable_GetById]
    @id INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id, event_name, executed_at, status, message
    FROM [database_siso].[log_table]
    WHERE id = @id;
END
GO

-- SP Insert Log
CREATE PROCEDURE [database_siso].[sp_LogTable_Insert]
    @event_name NVARCHAR(100) = NULL,
    @status NVARCHAR(50) = NULL,
    @message NVARCHAR(MAX) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[log_table] (
        event_name, executed_at, status, message
    )
    VALUES (
        @event_name, GETDATE(), @status, @message
    );
    
    SELECT SCOPE_IDENTITY() AS id;
END
GO

-- SP Delete Log
CREATE PROCEDURE [database_siso].[sp_LogTable_Delete]
    @id INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[log_table] 
    WHERE id = @id;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Search Log
CREATE PROCEDURE [database_siso].[sp_LogTable_Search]
    @event_name NVARCHAR(100) = NULL,
    @status NVARCHAR(50) = NULL,
    @tanggal_mulai DATETIME2 = NULL,
    @tanggal_selesai DATETIME2 = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        id, event_name, executed_at, status, message
    FROM [database_siso].[log_table]
    WHERE 
        (@event_name IS NULL OR event_name LIKE '%' + @event_name + '%')
        AND (@status IS NULL OR status = @status)
        AND (@tanggal_mulai IS NULL OR executed_at >= @tanggal_mulai)
        AND (@tanggal_selesai IS NULL OR executed_at <= @tanggal_selesai)
    ORDER BY id DESC;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL LEMBAGA
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Lembaga
CREATE PROCEDURE [database_siso].[sp_Lembaga_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id, nama_lembaga
    FROM [database_siso].[lembaga]
    ORDER BY id;
END
GO

-- SP Get Lembaga By ID
CREATE PROCEDURE [database_siso].[sp_Lembaga_GetById]
    @id INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id, nama_lembaga
    FROM [database_siso].[lembaga]
    WHERE id = @id;
END
GO

-- SP Insert Lembaga
CREATE PROCEDURE [database_siso].[sp_Lembaga_Insert]
    @nama_lembaga NVARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[lembaga] (nama_lembaga)
    VALUES (@nama_lembaga);
    
    SELECT SCOPE_IDENTITY() AS id;
END
GO

-- SP Update Lembaga
CREATE PROCEDURE [database_siso].[sp_Lembaga_Update]
    @id INT,
    @nama_lembaga NVARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[lembaga]
    SET nama_lembaga = @nama_lembaga
    WHERE id = @id;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Lembaga
CREATE PROCEDURE [database_siso].[sp_Lembaga_Delete]
    @id INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[lembaga] 
    WHERE id = @id;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Search Lembaga
CREATE PROCEDURE [database_siso].[sp_Lembaga_Search]
    @keyword NVARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        id, nama_lembaga
    FROM [database_siso].[lembaga]
    WHERE 
        (@keyword IS NULL OR nama_lembaga LIKE '%' + @keyword + '%')
    ORDER BY id;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL KERANJANG
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Keranjang
CREATE PROCEDURE [database_siso].[sp_Keranjang_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_keranjang, nim, barang, jumlah
    FROM [database_siso].[keranjang]
    ORDER BY id_keranjang;
END
GO

-- SP Get Keranjang By ID
CREATE PROCEDURE [database_siso].[sp_Keranjang_GetById]
    @id_keranjang INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_keranjang, nim, barang, jumlah
    FROM [database_siso].[keranjang]
    WHERE id_keranjang = @id_keranjang;
END
GO

-- SP Get Keranjang By NIM
CREATE PROCEDURE [database_siso].[sp_Keranjang_GetByNim]
    @nim NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_keranjang, nim, barang, jumlah
    FROM [database_siso].[keranjang]
    WHERE nim = @nim
    ORDER BY id_keranjang;
END
GO

-- SP Insert Keranjang
CREATE PROCEDURE [database_siso].[sp_Keranjang_Insert]
    @nim NVARCHAR(50),
    @barang INT,
    @jumlah INT
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[keranjang] (nim, barang, jumlah)
    VALUES (@nim, @barang, @jumlah);
    
    SELECT SCOPE_IDENTITY() AS id_keranjang;
END
GO

-- SP Update Keranjang
CREATE PROCEDURE [database_siso].[sp_Keranjang_Update]
    @id_keranjang INT,
    @nim NVARCHAR(50),
    @barang INT,
    @jumlah INT
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[keranjang]
    SET 
        nim = @nim,
        barang = @barang,
        jumlah = @jumlah
    WHERE id_keranjang = @id_keranjang;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Update Jumlah Keranjang
CREATE PROCEDURE [database_siso].[sp_Keranjang_UpdateJumlah]
    @id_keranjang INT,
    @jumlah INT
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[keranjang]
    SET jumlah = @jumlah
    WHERE id_keranjang = @id_keranjang;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Keranjang
CREATE PROCEDURE [database_siso].[sp_Keranjang_Delete]
    @id_keranjang INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[keranjang] 
    WHERE id_keranjang = @id_keranjang;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Keranjang By NIM (Clear Cart)
CREATE PROCEDURE [database_siso].[sp_Keranjang_DeleteByNim]
    @nim NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[keranjang] 
    WHERE nim = @nim;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL MAHASISWA
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Mahasiswa
CREATE PROCEDURE [database_siso].[sp_Mahasiswa_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        username, nama
    FROM [database_siso].[mahasiswa]
    ORDER BY username;
END
GO

-- SP Get Mahasiswa By Username
CREATE PROCEDURE [database_siso].[sp_Mahasiswa_GetByUsername]
    @username NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        username, nama
    FROM [database_siso].[mahasiswa]
    WHERE username = @username;
END
GO

-- SP Insert Mahasiswa
CREATE PROCEDURE [database_siso].[sp_Mahasiswa_Insert]
    @username NVARCHAR(50),
    @nama NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[mahasiswa] (username, nama)
    VALUES (@username, @nama);
    
    SELECT @username AS username;
END
GO

-- SP Update Mahasiswa
CREATE PROCEDURE [database_siso].[sp_Mahasiswa_Update]
    @username NVARCHAR(50),
    @nama NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[mahasiswa]
    SET nama = @nama
    WHERE username = @username;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Mahasiswa
CREATE PROCEDURE [database_siso].[sp_Mahasiswa_Delete]
    @username NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[mahasiswa] 
    WHERE username = @username;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Search Mahasiswa
CREATE PROCEDURE [database_siso].[sp_Mahasiswa_Search]
    @keyword NVARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        username, nama
    FROM [database_siso].[mahasiswa]
    WHERE 
        (@keyword IS NULL OR username LIKE '%' + @keyword + '%' OR nama LIKE '%' + @keyword + '%')
    ORDER BY username;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL PENGGUNA
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Pengguna
CREATE PROCEDURE [database_siso].[sp_Pengguna_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_pengguna, nama_pengguna, email_pengguna, username_pengguna,
        password_pengguna, role_pengguna, main_job, other_job,
        foto, status_pengguna, created_by, created_date,
        modified_by, modified_date
    FROM [database_siso].[pengguna]
    ORDER BY id_pengguna;
END
GO

-- SP Get Pengguna By ID
CREATE PROCEDURE [database_siso].[sp_Pengguna_GetById]
    @id_pengguna NVARCHAR(10)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_pengguna, nama_pengguna, email_pengguna, username_pengguna,
        password_pengguna, role_pengguna, main_job, other_job,
        foto, status_pengguna, created_by, created_date,
        modified_by, modified_date
    FROM [database_siso].[pengguna]
    WHERE id_pengguna = @id_pengguna;
END
GO

-- SP Get Pengguna By Username (Login)
CREATE PROCEDURE [database_siso].[sp_Pengguna_GetByUsername]
    @username_pengguna NVARCHAR(30)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_pengguna, nama_pengguna, email_pengguna, username_pengguna,
        password_pengguna, role_pengguna, main_job, other_job,
        foto, status_pengguna, created_by, created_date,
        modified_by, modified_date
    FROM [database_siso].[pengguna]
    WHERE username_pengguna = @username_pengguna;
END
GO

-- SP Insert Pengguna
CREATE PROCEDURE [database_siso].[sp_Pengguna_Insert]
    @id_pengguna NVARCHAR(10),
    @nama_pengguna NVARCHAR(150),
    @email_pengguna NVARCHAR(100),
    @username_pengguna NVARCHAR(30),
    @password_pengguna NVARCHAR(50),
    @role_pengguna NVARCHAR(50),
    @main_job NVARCHAR(500),
    @other_job NVARCHAR(500),
    @foto NVARCHAR(100),
    @status_pengguna NVARCHAR(20),
    @created_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[pengguna] (
        id_pengguna, nama_pengguna, email_pengguna, username_pengguna,
        password_pengguna, role_pengguna, main_job, other_job,
        foto, status_pengguna, created_by, created_date
    )
    VALUES (
        @id_pengguna, @nama_pengguna, @email_pengguna, @username_pengguna,
        @password_pengguna, @role_pengguna, @main_job, @other_job,
        @foto, @status_pengguna, @created_by, GETDATE()
    );
    
    SELECT @id_pengguna AS id_pengguna;
END
GO

-- SP Update Pengguna
CREATE PROCEDURE [database_siso].[sp_Pengguna_Update]
    @id_pengguna NVARCHAR(10),
    @nama_pengguna NVARCHAR(150),
    @email_pengguna NVARCHAR(100),
    @username_pengguna NVARCHAR(30),
    @role_pengguna NVARCHAR(50),
    @main_job NVARCHAR(500),
    @other_job NVARCHAR(500),
    @foto NVARCHAR(100),
    @status_pengguna NVARCHAR(20),
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[pengguna]
    SET 
        nama_pengguna = @nama_pengguna,
        email_pengguna = @email_pengguna,
        username_pengguna = @username_pengguna,
        role_pengguna = @role_pengguna,
        main_job = @main_job,
        other_job = @other_job,
        foto = @foto,
        status_pengguna = @status_pengguna,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_pengguna = @id_pengguna;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Update Password
CREATE PROCEDURE [database_siso].[sp_Pengguna_UpdatePassword]
    @id_pengguna NVARCHAR(10),
    @password_pengguna NVARCHAR(50),
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[pengguna]
    SET 
        password_pengguna = @password_pengguna,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_pengguna = @id_pengguna;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Update Status Pengguna
CREATE PROCEDURE [database_siso].[sp_Pengguna_UpdateStatus]
    @id_pengguna NVARCHAR(10),
    @status_pengguna NVARCHAR(20),
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[pengguna]
    SET 
        status_pengguna = @status_pengguna,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_pengguna = @id_pengguna;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Pengguna
CREATE PROCEDURE [database_siso].[sp_Pengguna_Delete]
    @id_pengguna NVARCHAR(10)
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[pengguna] 
    WHERE id_pengguna = @id_pengguna;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Search Pengguna
CREATE PROCEDURE [database_siso].[sp_Pengguna_Search]
    @keyword NVARCHAR(150) = NULL,
    @role_pengguna NVARCHAR(50) = NULL,
    @status_pengguna NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        id_pengguna, nama_pengguna, email_pengguna, username_pengguna,
        password_pengguna, role_pengguna, main_job, other_job,
        foto, status_pengguna, created_by, created_date,
        modified_by, modified_date
    FROM [database_siso].[pengguna]
    WHERE 
        (@keyword IS NULL OR nama_pengguna LIKE '%' + @keyword + '%' OR username_pengguna LIKE '%' + @keyword + '%')
        AND (@role_pengguna IS NULL OR role_pengguna = @role_pengguna)
        AND (@status_pengguna IS NULL OR status_pengguna = @status_pengguna)
    ORDER BY id_pengguna;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL PENYIMPANAN
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Penyimpanan
CREATE PROCEDURE [database_siso].[sp_Penyimpanan_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_penyimpanan, nama_penyimpanan, status_penyimpanan,
        created_by, created_date, modified_by, modified_date
    FROM [database_siso].[penyimpanan]
    ORDER BY id_penyimpanan;
END
GO

-- SP Get Penyimpanan By ID
CREATE PROCEDURE [database_siso].[sp_Penyimpanan_GetById]
    @id_penyimpanan INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_penyimpanan, nama_penyimpanan, status_penyimpanan,
        created_by, created_date, modified_by, modified_date
    FROM [database_siso].[penyimpanan]
    WHERE id_penyimpanan = @id_penyimpanan;
END
GO

-- SP Insert Penyimpanan
CREATE PROCEDURE [database_siso].[sp_Penyimpanan_Insert]
    @nama_penyimpanan NVARCHAR(100),
    @status_penyimpanan NVARCHAR(20),
    @created_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[penyimpanan] (
        nama_penyimpanan, status_penyimpanan, created_by, created_date
    )
    VALUES (
        @nama_penyimpanan, @status_penyimpanan, @created_by, GETDATE()
    );
    
    SELECT SCOPE_IDENTITY() AS id_penyimpanan;
END
GO

-- SP Update Penyimpanan
CREATE PROCEDURE [database_siso].[sp_Penyimpanan_Update]
    @id_penyimpanan INT,
    @nama_penyimpanan NVARCHAR(100),
    @status_penyimpanan NVARCHAR(20),
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[penyimpanan]
    SET 
        nama_penyimpanan = @nama_penyimpanan,
        status_penyimpanan = @status_penyimpanan,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_penyimpanan = @id_penyimpanan;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Penyimpanan
CREATE PROCEDURE [database_siso].[sp_Penyimpanan_Delete]
    @id_penyimpanan INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[penyimpanan] 
    WHERE id_penyimpanan = @id_penyimpanan;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Search Penyimpanan
CREATE PROCEDURE [database_siso].[sp_Penyimpanan_Search]
    @keyword NVARCHAR(100) = NULL,
    @status_penyimpanan NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        id_penyimpanan, nama_penyimpanan, status_penyimpanan,
        created_by, created_date, modified_by, modified_date
    FROM [database_siso].[penyimpanan]
    WHERE 
        (@keyword IS NULL OR nama_penyimpanan LIKE '%' + @keyword + '%')
        AND (@status_penyimpanan IS NULL OR status_penyimpanan = @status_penyimpanan)
    ORDER BY id_penyimpanan;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL RIWAYAT_APPROVAL
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Riwayat Approval
CREATE PROCEDURE [database_siso].[sp_RiwayatApproval_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id, id_dtl_peminjaman, user_approval, nama_approval, waktu_approval
    FROM [database_siso].[riwayat_approval]
    ORDER BY id DESC;
END
GO

-- SP Get Riwayat Approval By ID
CREATE PROCEDURE [database_siso].[sp_RiwayatApproval_GetById]
    @id INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id, id_dtl_peminjaman, user_approval, nama_approval, waktu_approval
    FROM [database_siso].[riwayat_approval]
    WHERE id = @id;
END
GO

-- SP Get Riwayat Approval By Detail Peminjaman
CREATE PROCEDURE [database_siso].[sp_RiwayatApproval_GetByDtlPeminjaman]
    @id_dtl_peminjaman INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id, id_dtl_peminjaman, user_approval, nama_approval, waktu_approval
    FROM [database_siso].[riwayat_approval]
    WHERE id_dtl_peminjaman = @id_dtl_peminjaman
    ORDER BY waktu_approval DESC;
END
GO

-- SP Insert Riwayat Approval
CREATE PROCEDURE [database_siso].[sp_RiwayatApproval_Insert]
    @id_dtl_peminjaman INT,
    @user_approval NVARCHAR(100),
    @nama_approval NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[riwayat_approval] (
        id_dtl_peminjaman, user_approval, nama_approval, waktu_approval
    )
    VALUES (
        @id_dtl_peminjaman, @user_approval, @nama_approval, GETDATE()
    );
    
    SELECT SCOPE_IDENTITY() AS id;
END
GO

-- SP Delete Riwayat Approval
CREATE PROCEDURE [database_siso].[sp_RiwayatApproval_Delete]
    @id INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[riwayat_approval] 
    WHERE id = @id;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL RUANGAN
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Ruangan
CREATE PROCEDURE [database_siso].[sp_Ruangan_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_ruangan, nama_ruangan, pic_ruangan, status_ruangan,
        created_by, created_date, modified_by, modified_date
    FROM [database_siso].[ruangan]
    ORDER BY id_ruangan;
END
GO

-- SP Get Ruangan By ID
CREATE PROCEDURE [database_siso].[sp_Ruangan_GetById]
    @id_ruangan INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_ruangan, nama_ruangan, pic_ruangan, status_ruangan,
        created_by, created_date, modified_by, modified_date
    FROM [database_siso].[ruangan]
    WHERE id_ruangan = @id_ruangan;
END
GO

-- SP Get Ruangan By PIC
CREATE PROCEDURE [database_siso].[sp_Ruangan_GetByPic]
    @pic_ruangan NVARCHAR(10)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_ruangan, nama_ruangan, pic_ruangan, status_ruangan,
        created_by, created_date, modified_by, modified_date
    FROM [database_siso].[ruangan]
    WHERE pic_ruangan = @pic_ruangan
    ORDER BY id_ruangan;
END
GO

-- SP Insert Ruangan
CREATE PROCEDURE [database_siso].[sp_Ruangan_Insert]
    @nama_ruangan NVARCHAR(100),
    @pic_ruangan NVARCHAR(10) = NULL,
    @status_ruangan NVARCHAR(20),
    @created_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[ruangan] (
        nama_ruangan, pic_ruangan, status_ruangan, created_by, created_date
    )
    VALUES (
        @nama_ruangan, @pic_ruangan, @status_ruangan, @created_by, GETDATE()
    );
    
    SELECT SCOPE_IDENTITY() AS id_ruangan;
END
GO

-- SP Update Ruangan
CREATE PROCEDURE [database_siso].[sp_Ruangan_Update]
    @id_ruangan INT,
    @nama_ruangan NVARCHAR(100),
    @pic_ruangan NVARCHAR(10) = NULL,
    @status_ruangan NVARCHAR(20),
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[ruangan]
    SET 
        nama_ruangan = @nama_ruangan,
        pic_ruangan = @pic_ruangan,
        status_ruangan = @status_ruangan,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_ruangan = @id_ruangan;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Ruangan
CREATE PROCEDURE [database_siso].[sp_Ruangan_Delete]
    @id_ruangan INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[ruangan] 
    WHERE id_ruangan = @id_ruangan;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Search Ruangan
CREATE PROCEDURE [database_siso].[sp_Ruangan_Search]
    @keyword NVARCHAR(100) = NULL,
    @status_ruangan NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        id_ruangan, nama_ruangan, pic_ruangan, status_ruangan,
        created_by, created_date, modified_by, modified_date
    FROM [database_siso].[ruangan]
    WHERE 
        (@keyword IS NULL OR nama_ruangan LIKE '%' + @keyword + '%')
        AND (@status_ruangan IS NULL OR status_ruangan = @status_ruangan)
    ORDER BY id_ruangan;
END
GO

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL SISO_MSMUTASI
-- Database: db_siso, Schema: database_siso
-- =============================================

SELECT * FROM database_siso.siso_msmutasi
-- SP Get All Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsMutasi_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_mutasi, id_pengguna, tanggal_mutasi, lokasi_asal, lokasi_tujuan,
        ruang_penyimpanan_tujuan, alasan_mutasi, status_mutasi,
        disetujui_oleh, tanggal_persetujuan, modified_by, modified_date
    FROM [database_siso].[siso_msmutasi]
    ORDER BY id_mutasi DESC;
END
GO

-- SP Get Mutasi By ID
CREATE PROCEDURE [database_siso].[sp_SisoMsMutasi_GetById]
    @id_mutasi INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_mutasi, id_pengguna, tanggal_mutasi, lokasi_asal, lokasi_tujuan,
        ruang_penyimpanan_tujuan, alasan_mutasi, status_mutasi,
        disetujui_oleh, tanggal_persetujuan, modified_by, modified_date
    FROM [database_siso].[siso_msmutasi]
    WHERE id_mutasi = @id_mutasi;
END
GO

-- SP Get Mutasi By Pengguna
CREATE PROCEDURE [database_siso].[sp_SisoMsMutasi_GetByPengguna]
    @id_pengguna NVARCHAR(10)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_mutasi, id_pengguna, tanggal_mutasi, lokasi_asal, lokasi_tujuan,
        ruang_penyimpanan_tujuan, alasan_mutasi, status_mutasi,
        disetujui_oleh, tanggal_persetujuan, modified_by, modified_date
    FROM [database_siso].[siso_msmutasi]
    WHERE id_pengguna = @id_pengguna
    ORDER BY id_mutasi DESC;
END
GO

-- SP Insert Mutasi
-- lokasi_asal default 'UPT-Informatika'
-- lokasi_tujuan ambil dari id_lembaga (tabel lembaga)
CREATE PROCEDURE [database_siso].[sp_SisoMsMutasi_Insert]
    @id_pengguna NVARCHAR(10),
    @id_lembaga_tujuan INT,
    @ruang_penyimpanan_tujuan NVARCHAR(255) = NULL,
    @alasan_mutasi NVARCHAR(200) = NULL,
    @status_mutasi NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    DECLARE @lokasi_tujuan NVARCHAR(255);
    
    -- Ambil nama_lembaga dari tabel lembaga
    SELECT @lokasi_tujuan = nama_lembaga 
    FROM [database_siso].[lembaga] 
    WHERE id = @id_lembaga_tujuan;
    
    INSERT INTO [database_siso].[siso_msmutasi] (
        id_pengguna, tanggal_mutasi, lokasi_asal, lokasi_tujuan,
        ruang_penyimpanan_tujuan, alasan_mutasi, status_mutasi
    )
    VALUES (
        @id_pengguna, GETDATE(), 'UPT-Informatika', @lokasi_tujuan,
        @ruang_penyimpanan_tujuan, @alasan_mutasi, @status_mutasi
    );
    
    SELECT SCOPE_IDENTITY() AS id_mutasi;
END
GO

-- SP Update Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsMutasi_Update]
    @id_mutasi INT,
    @id_pengguna NVARCHAR(10),
    @lokasi_asal NVARCHAR(50),
    @lokasi_tujuan NVARCHAR(50),
    @ruang_penyimpanan_tujuan NVARCHAR(255) = NULL,
    @alasan_mutasi NVARCHAR(200) = NULL,
    @status_mutasi NVARCHAR(50) = NULL,
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[siso_msmutasi]
    SET 
        id_pengguna = @id_pengguna,
        lokasi_asal = @lokasi_asal,
        lokasi_tujuan = @lokasi_tujuan,
        ruang_penyimpanan_tujuan = @ruang_penyimpanan_tujuan,
        alasan_mutasi = @alasan_mutasi,
        status_mutasi = @status_mutasi,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_mutasi = @id_mutasi;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

ALTER PROCEDURE [database_siso].[sp_SisoMsMutasi_Update]
    @id_mutasi INT,
    @id_pengguna NVARCHAR(10),
    @id_lembaga_tujuan INT,
    @ruang_penyimpanan_tujuan NVARCHAR(255) = NULL,
    @alasan_mutasi NVARCHAR(200) = NULL,
    @status_mutasi NVARCHAR(50) = NULL,
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    DECLARE @lokasi_tujuan NVARCHAR(255);
    
    -- Ambil nama_lembaga dari tabel lembaga
    SELECT @lokasi_tujuan = nama_lembaga 
    FROM [database_siso].[lembaga] 
    WHERE id = @id_lembaga_tujuan;
    
    UPDATE [database_siso].[siso_msmutasi]
    SET id_pengguna = @id_pengguna,
        lokasi_tujuan = @lokasi_tujuan,
        ruang_penyimpanan_tujuan = @ruang_penyimpanan_tujuan,
        alasan_mutasi = @alasan_mutasi,
        status_mutasi = @status_mutasi,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_mutasi = @id_mutasi;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END

-- SP Approve Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsMutasi_Approve]
    @id_mutasi INT,
    @status_mutasi NVARCHAR(50),
    @disetujui_oleh NVARCHAR(100),
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[siso_msmutasi]
    SET 
        status_mutasi = @status_mutasi,
        disetujui_oleh = @disetujui_oleh,
        tanggal_persetujuan = GETDATE(),
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_mutasi = @id_mutasi;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsMutasi_Delete]
    @id_mutasi INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[siso_msmutasi] 
    WHERE id_mutasi = @id_mutasi;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Search Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsMutasi_Search]
    @status_mutasi NVARCHAR(50) = NULL,
    @tanggal_mulai DATE = NULL,
    @tanggal_selesai DATE = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        id_mutasi, id_pengguna, tanggal_mutasi, lokasi_asal, lokasi_tujuan,
        ruang_penyimpanan_tujuan, alasan_mutasi, status_mutasi,
        disetujui_oleh, tanggal_persetujuan, modified_by, modified_date
    FROM [database_siso].[siso_msmutasi]
    WHERE 
        (@status_mutasi IS NULL OR status_mutasi = @status_mutasi)
        AND (@tanggal_mulai IS NULL OR tanggal_mutasi >= @tanggal_mulai)
        AND (@tanggal_selesai IS NULL OR tanggal_mutasi <= @tanggal_selesai)
    ORDER BY id_mutasi DESC;
END
GO

--=================================================================================================================--

-- 1. Tambah kolom alasan_penolakan ke tabel (jika belum ada)
ALTER TABLE database_siso.siso_msmutasi
ADD alasan_penolakan NVARCHAR(500) NULL;
GO

-- 2. Update SP Approve untuk terima alasan_penolakan
ALTER PROCEDURE [database_siso].[sp_SisoMsMutasi_Approve]
    @id_mutasi INT,
    @status_mutasi NVARCHAR(50),
    @disetujui_oleh NVARCHAR(100),
    @alasan_penolakan NVARCHAR(500) = NULL,
    @modified_by NVARCHAR(20) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE [database_siso].[siso_msmutasi]
    SET status_mutasi = @status_mutasi,
        disetujui_oleh = @disetujui_oleh,
        alasan_penolakan = @alasan_penolakan,
        tanggal_persetujuan = GETDATE(),
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_mutasi = @id_mutasi;
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- 3. Update SP GetAll untuk return alasan_penolakan
ALTER PROCEDURE [database_siso].[sp_SisoMsMutasi_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT id_mutasi, id_pengguna, tanggal_mutasi, lokasi_asal, lokasi_tujuan,
           ruang_penyimpanan_tujuan, alasan_mutasi, status_mutasi,
           disetujui_oleh, tanggal_persetujuan, alasan_penolakan, modified_by, modified_date
    FROM [database_siso].[siso_msmutasi]
    ORDER BY id_mutasi DESC;
END
GO

-- 4. Update SP GetById untuk return alasan_penolakan
ALTER PROCEDURE [database_siso].[sp_SisoMsMutasi_GetById]
    @id_mutasi INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT id_mutasi, id_pengguna, tanggal_mutasi, lokasi_asal, lokasi_tujuan,
           ruang_penyimpanan_tujuan, alasan_mutasi, status_mutasi,
           disetujui_oleh, tanggal_persetujuan, alasan_penolakan, modified_by, modified_date
    FROM [database_siso].[siso_msmutasi]
    WHERE id_mutasi = @id_mutasi;
END
GO

-- 5. Update SP Search untuk return alasan_penolakan
ALTER PROCEDURE [database_siso].[sp_SisoMsMutasi_Search]
    @status_mutasi NVARCHAR(50) = NULL,
    @tanggal_mulai DATE = NULL,
    @tanggal_selesai DATE = NULL
AS
BEGIN
    SET NOCOUNT ON;
    SELECT id_mutasi, id_pengguna, tanggal_mutasi, lokasi_asal, lokasi_tujuan,
           ruang_penyimpanan_tujuan, alasan_mutasi, status_mutasi,
           disetujui_oleh, tanggal_persetujuan, alasan_penolakan, modified_by, modified_date
    FROM [database_siso].[siso_msmutasi]
    WHERE (@status_mutasi IS NULL OR status_mutasi = @status_mutasi)
      AND (@tanggal_mulai IS NULL OR tanggal_mutasi >= @tanggal_mulai)
      AND (@tanggal_selesai IS NULL OR tanggal_mutasi <= @tanggal_selesai)
    ORDER BY id_mutasi DESC;
END
GO

SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'siso_msmutasi' AND COLUMN_NAME = 'alasan_penolakan';

--=================================================================================================================--

-- =============================================
-- STORED PROCEDURES UNTUK TABEL SISO_MS_DTLMUTASI
-- Database: db_siso, Schema: database_siso
-- =============================================

-- SP Get All Detail Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsDtlMutasi_GetAll]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_mutasi, id_mutasi, id_barang, kuantitas, kondisi_barang, catatan
    FROM [database_siso].[siso_ms_dtlmutasi]
    ORDER BY id_dtl_mutasi;
END
GO

-- SP Get Detail Mutasi By ID
CREATE PROCEDURE [database_siso].[sp_SisoMsDtlMutasi_GetById]
    @id_dtl_mutasi INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_mutasi, id_mutasi, id_barang, kuantitas, kondisi_barang, catatan
    FROM [database_siso].[siso_ms_dtlmutasi]
    WHERE id_dtl_mutasi = @id_dtl_mutasi;
END
GO

-- SP Get Detail By Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsDtlMutasi_GetByMutasi]
    @id_mutasi INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_mutasi, id_mutasi, id_barang, kuantitas, kondisi_barang, catatan
    FROM [database_siso].[siso_ms_dtlmutasi]
    WHERE id_mutasi = @id_mutasi
    ORDER BY id_dtl_mutasi;
END
GO

-- SP Get Detail By Barang
CREATE PROCEDURE [database_siso].[sp_SisoMsDtlMutasi_GetByBarang]
    @id_barang INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        id_dtl_mutasi, id_mutasi, id_barang, kuantitas, kondisi_barang, catatan
    FROM [database_siso].[siso_ms_dtlmutasi]
    WHERE id_barang = @id_barang
    ORDER BY id_dtl_mutasi DESC;
END
GO

-- SP Insert Detail Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsDtlMutasi_Insert]
    @id_mutasi INT,
    @id_barang INT,
    @kuantitas INT,
    @kondisi_barang NVARCHAR(200) = NULL,
    @catatan NVARCHAR(500) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO [database_siso].[siso_ms_dtlmutasi] (
        id_mutasi, id_barang, kuantitas, kondisi_barang, catatan
    )
    VALUES (
        @id_mutasi, @id_barang, @kuantitas, @kondisi_barang, @catatan
    );
    
    SELECT SCOPE_IDENTITY() AS id_dtl_mutasi;
END
GO

-- SP Update Detail Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsDtlMutasi_Update]
    @id_dtl_mutasi INT,
    @id_mutasi INT,
    @id_barang INT,
    @kuantitas INT,
    @kondisi_barang NVARCHAR(200) = NULL,
    @catatan NVARCHAR(500) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE [database_siso].[siso_ms_dtlmutasi]
    SET 
        id_mutasi = @id_mutasi,
        id_barang = @id_barang,
        kuantitas = @kuantitas,
        kondisi_barang = @kondisi_barang,
        catatan = @catatan
    WHERE id_dtl_mutasi = @id_dtl_mutasi;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Detail Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsDtlMutasi_Delete]
    @id_dtl_mutasi INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[siso_ms_dtlmutasi] 
    WHERE id_dtl_mutasi = @id_dtl_mutasi;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

-- SP Delete Detail By Mutasi
CREATE PROCEDURE [database_siso].[sp_SisoMsDtlMutasi_DeleteByMutasi]
    @id_mutasi INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM [database_siso].[siso_ms_dtlmutasi] 
    WHERE id_mutasi = @id_mutasi;
    
    SELECT @@ROWCOUNT AS RowsAffected;
END
GO

SELECT * FROM database_siso.siso_ms_dtlmutasi
SELECT * FROM database_siso.pengguna

--=================================================================================================================--

USE db_siso
GO

-- =============================================
-- TABEL: siso_msstockopname (Header Stock Opname)
-- =============================================

-- Create Table
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.siso_msstockopname') AND type in (N'U'))
BEGIN
    CREATE TABLE database_siso.siso_msstockopname (
        so_id_opname INT IDENTITY(1,1) PRIMARY KEY,
        so_start_date DATE NOT NULL,
        so_end_date DATE,
        so_pic VARCHAR(50) NOT NULL,
        so_total_item INT DEFAULT 0,
        so_status VARCHAR(50) DEFAULT 'Draft' CHECK (so_status IN ('Draft', 'On Progress Approval Koor UPT', 'Approved', 'Rejected')),
        so_reject_reason TEXT NULL,
        created_by VARCHAR(50) NOT NULL,
        created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        modified_by VARCHAR(50) NULL,
        modified_date DATETIME NULL,
        so_deskripsi VARCHAR(150) NULL
    );
END
GO

-- =============================================
-- STORED PROCEDURES: siso_msstockopname
-- =============================================

-- SP GetAll
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsStockOpname_GetAll') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsStockOpname_GetAll
GO

CREATE PROCEDURE database_siso.sp_SisoMsStockOpname_GetAll
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        so_id_opname,
        so_start_date,
        so_end_date,
        so_pic,
        so_total_item,
        so_status,
        so_reject_reason,
        created_by,
        created_date,
        modified_by,
        modified_date,
        so_deskripsi
    FROM database_siso.siso_msstockopname
    ORDER BY so_id_opname DESC;
END
GO

-- SP GetById
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsStockOpname_GetById') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsStockOpname_GetById
GO

CREATE PROCEDURE database_siso.sp_SisoMsStockOpname_GetById
    @so_id_opname INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        so_id_opname,
        so_start_date,
        so_end_date,
        so_pic,
        so_total_item,
        so_status,
        so_reject_reason,
        created_by,
        created_date,
        modified_by,
        modified_date,
        so_deskripsi
    FROM database_siso.siso_msstockopname
    WHERE so_id_opname = @so_id_opname;
END
GO

-- SP Insert
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsStockOpname_Insert') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsStockOpname_Insert
GO

CREATE PROCEDURE database_siso.sp_SisoMsStockOpname_Insert
    @so_start_date DATE,
    @so_end_date DATE = NULL,
    @so_pic VARCHAR(50),
    @so_total_item INT = 0,
    @so_status VARCHAR(50) = 'Draft',
    @so_deskripsi VARCHAR(150) = NULL,
    @created_by VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO database_siso.siso_msstockopname (
        so_start_date, so_end_date, so_pic, so_total_item, 
        so_status, so_deskripsi, created_by, created_date
    )
    VALUES (
        @so_start_date, @so_end_date, @so_pic, @so_total_item,
        @so_status, @so_deskripsi, @created_by, GETDATE()
    );
    
    SELECT SCOPE_IDENTITY();
END
GO

-- SP Update
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsStockOpname_Update') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsStockOpname_Update
GO

CREATE PROCEDURE database_siso.sp_SisoMsStockOpname_Update
    @so_id_opname INT,
    @so_start_date DATE,
    @so_end_date DATE = NULL,
    @so_pic VARCHAR(50),
    @so_total_item INT = 0,
    @so_status VARCHAR(50) = 'Draft',
    @so_deskripsi VARCHAR(150) = NULL,
    @modified_by VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE database_siso.siso_msstockopname
    SET so_start_date = @so_start_date,
        so_end_date = @so_end_date,
        so_pic = @so_pic,
        so_total_item = @so_total_item,
        so_status = @so_status,
        so_deskripsi = @so_deskripsi,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE so_id_opname = @so_id_opname;
    
    SELECT @@ROWCOUNT;
END
GO

-- SP Approve/Reject
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsStockOpname_Approve') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsStockOpname_Approve
GO

CREATE PROCEDURE database_siso.sp_SisoMsStockOpname_Approve
    @so_id_opname INT,
    @so_status VARCHAR(50),
    @so_reject_reason TEXT = NULL,
    @modified_by VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE database_siso.siso_msstockopname
    SET so_status = @so_status,
        so_reject_reason = @so_reject_reason,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE so_id_opname = @so_id_opname;
    
    SELECT @@ROWCOUNT;
END
GO

-- SP Delete
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsStockOpname_Delete') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsStockOpname_Delete
GO

CREATE PROCEDURE database_siso.sp_SisoMsStockOpname_Delete
    @so_id_opname INT
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Delete detail first
    DELETE FROM database_siso.siso_msdtlstockopname WHERE so_id_opname = @so_id_opname;
    -- Delete header
    DELETE FROM database_siso.siso_msstockopname WHERE so_id_opname = @so_id_opname;
    
    SELECT @@ROWCOUNT;
END
GO

-- SP Search
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsStockOpname_Search') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsStockOpname_Search
GO

CREATE PROCEDURE database_siso.sp_SisoMsStockOpname_Search
    @so_status VARCHAR(50) = NULL,
    @tanggal_mulai DATE = NULL,
    @tanggal_selesai DATE = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        so_id_opname,
        so_start_date,
        so_end_date,
        so_pic,
        so_total_item,
        so_status,
        so_reject_reason,
        created_by,
        created_date,
        modified_by,
        modified_date,
        so_deskripsi
    FROM database_siso.siso_msstockopname
    WHERE (@so_status IS NULL OR so_status = @so_status)
      AND (@tanggal_mulai IS NULL OR so_start_date >= @tanggal_mulai)
      AND (@tanggal_selesai IS NULL OR so_start_date <= @tanggal_selesai)
    ORDER BY so_id_opname DESC;
END
GO


-- =============================================
-- TABEL: siso_msdtlstockopname (Detail Stock Opname)
-- =============================================

-- Create Table
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.siso_msdtlstockopname') AND type in (N'U'))
BEGIN
    CREATE TABLE database_siso.siso_msdtlstockopname (
        id_detail INT IDENTITY(1,1) PRIMARY KEY,
        so_id_opname INT NOT NULL,
        id_barang INT NOT NULL,
        id_ruangan INT NOT NULL,
        id_penyimpanan INT NOT NULL,
        original_id_ruangan INT NULL,
        original_id_penyimpanan INT NULL,
        original_kondisi_barang VARCHAR(100) NULL,
        original_jumlah_barang INT NULL,
        so_quantity INT NOT NULL,
        kondisi_barang VARCHAR(50) DEFAULT 'Good' CHECK (kondisi_barang IN ('Good', 'Not Good', 'Minor Damaged', 'Major Damaged')),
        keterangan_tambahan TEXT NULL,
        foto_barang VARCHAR(255) NULL,
        created_by VARCHAR(100) NOT NULL,
        created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        modified_by VARCHAR(100) NULL,
        modified_date DATETIME NULL,
        FOREIGN KEY (so_id_opname) REFERENCES database_siso.siso_msstockopname(so_id_opname),
        FOREIGN KEY (id_barang) REFERENCES database_siso.barang(id_barang),
        FOREIGN KEY (id_ruangan) REFERENCES database_siso.ruangan(id_ruangan),
        FOREIGN KEY (id_penyimpanan) REFERENCES database_siso.penyimpanan(id_penyimpanan)
    );
END
GO

-- =============================================
-- STORED PROCEDURES: siso_msdtlstockopname
-- =============================================

-- SP GetByStockOpname
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDtlStockOpname_GetByOpname') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDtlStockOpname_GetByOpname
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlStockOpname_GetByOpname
    @so_id_opname INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        d.id_detail,
        d.so_id_opname,
        d.id_barang,
        d.id_ruangan,
        d.id_penyimpanan,
        d.original_id_ruangan,
        d.original_id_penyimpanan,
        d.original_kondisi_barang,
        d.original_jumlah_barang,
        d.so_quantity,
        d.kondisi_barang,
        d.keterangan_tambahan,
        d.foto_barang,
        d.created_by,
        d.created_date,
        d.modified_by,
        d.modified_date,
        b.nama_barang,
        b.nomor_aktiva
    FROM database_siso.siso_msdtlstockopname d
    LEFT JOIN database_siso.barang b ON d.id_barang = b.id_barang
    WHERE d.so_id_opname = @so_id_opname
    ORDER BY d.id_detail;
END
GO

-- SP Insert Detail Stock Opname dengan Update Inventory
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDtlStockOpname_Insert') AND type in (N'P'))
DROP PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Insert
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Insert
@so_id_opname INT,
@id_barang INT,
@id_ruangan INT,
@id_penyimpanan INT,
@original_id_ruangan INT = NULL,
@original_id_penyimpanan INT = NULL,
@original_kondisi_barang VARCHAR(100) = NULL,
@original_jumlah_barang INT = NULL,
@so_quantity INT,
@kondisi_barang VARCHAR(50) = 'Good',
@keterangan_tambahan TEXT = NULL,
@foto_barang VARCHAR(255) = NULL,
@created_by VARCHAR(100)
AS
BEGIN
SET NOCOUNT ON;

BEGIN TRY
    BEGIN TRANSACTION;
    
    -- Validasi kondisi barang
    IF @kondisi_barang NOT IN ('Good', 'Not Good', 'Minor Damaged', 'Major Damaged')
    BEGIN
        RAISERROR('Kondisi barang hanya boleh Good, Not Good, Minor Damaged, Major Damaged', 16, 1);
        RETURN;
    END
    
    -- Insert ke detail stock opname
    INSERT INTO database_siso.siso_msdtlstockopname (
        so_id_opname, id_barang, id_ruangan, id_penyimpanan,
        original_id_ruangan, original_id_penyimpanan, original_kondisi_barang, original_jumlah_barang,
        so_quantity, kondisi_barang, keterangan_tambahan, foto_barang, created_by, created_date
    )
    VALUES (
        @so_id_opname, @id_barang, @id_ruangan, @id_penyimpanan,
        @original_id_ruangan, @original_id_penyimpanan, @original_kondisi_barang, @original_jumlah_barang,
        @so_quantity, @kondisi_barang, @keterangan_tambahan, @foto_barang, @created_by, GETDATE()
    );
    
    -- **UPDATE INVENTORY LANGSUNG** berdasarkan hasil stock opname
    UPDATE database_siso.barang 
    SET 
        jumlah_barang = @so_quantity,
        kondisi_barang = @kondisi_barang,
        id_dtl_penyimpanan = (
            SELECT TOP 1 id_dtl_penyimpanan 
            FROM database_siso.dtl_ruangan_penyimpanan 
            WHERE id_ruangan = @id_ruangan AND id_penyimpanan = @id_penyimpanan
        ),
        modified_by = @created_by,
        modified_date = GETDATE()
    WHERE id_barang = @id_barang;
    
    -- Update total item di header
    UPDATE database_siso.siso_msstockopname 
    SET so_total_item = (
        SELECT COUNT(*) 
        FROM database_siso.siso_msdtlstockopname 
        WHERE so_id_opname = @so_id_opname
    )
    WHERE so_id_opname = @so_id_opname;
    
    COMMIT TRANSACTION;
    SELECT SCOPE_IDENTITY() AS NewDetailId;
    
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    THROW;
END CATCH
END
GO

-- SP Update Detail Stock Opname (VERSI SEDERHANA - DIPERBAIKI)
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDtlStockOpname_Update') AND type in (N'P'))
DROP PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Update
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Update
@id_detail INT,
@id_ruangan INT,
@id_penyimpanan INT,
@so_quantity INT,
@kondisi_barang VARCHAR(50) = 'Good',
@keterangan_tambahan TEXT = NULL,
@foto_barang VARCHAR(255) = NULL,
@modified_by VARCHAR(100)
AS
BEGIN
SET NOCOUNT ON;

-- Validasi kondisi barang
IF @kondisi_barang NOT IN ('Good', 'Not Good', 'Minor Damaged', 'Major Damaged')
BEGIN
RAISERROR('Kondisi barang hanya boleh Good, Not Good, Minor Damaged, Major Damaged', 16, 1);
RETURN;
END

-- Update detail stock opname
UPDATE database_siso.siso_msdtlstockopname
SET 
id_ruangan = @id_ruangan,
id_penyimpanan = @id_penyimpanan,
so_quantity = @so_quantity,
kondisi_barang = @kondisi_barang,
keterangan_tambahan = @keterangan_tambahan,
foto_barang = @foto_barang,
modified_by = @modified_by,
modified_date = GETDATE()
WHERE id_detail = @id_detail;

-- Return jumlah baris yang diupdate (harus menggunakan SELECT, bukan @@ROWCOUNT langsung)
SELECT @@ROWCOUNT;

END
GO


-- SP Delete Detail dengan Restore Inventory ke kondisi original
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDtlStockOpname_Delete') AND type in (N'P'))
DROP PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Delete
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Delete
@id_detail INT
AS
BEGIN
SET NOCOUNT ON;

BEGIN TRY
    BEGIN TRANSACTION;
    
    -- Ambil data original sebelum delete
    DECLARE @id_barang INT, @so_id_opname INT;
    DECLARE @original_id_ruangan INT, @original_id_penyimpanan INT;
    DECLARE @original_kondisi_barang VARCHAR(100), @original_jumlah_barang INT;
    
    SELECT 
        @id_barang = id_barang,
        @so_id_opname = so_id_opname,
        @original_id_ruangan = original_id_ruangan,
        @original_id_penyimpanan = original_id_penyimpanan,
        @original_kondisi_barang = original_kondisi_barang,
        @original_jumlah_barang = original_jumlah_barang
    FROM database_siso.siso_msdtlstockopname 
    WHERE id_detail = @id_detail;
    
    -- Delete detail
    DELETE FROM database_siso.siso_msdtlstockopname 
    WHERE id_detail = @id_detail;
    
    -- **RESTORE INVENTORY** ke kondisi original
    IF @id_barang IS NOT NULL AND @original_id_ruangan IS NOT NULL
    BEGIN
        UPDATE database_siso.barang 
        SET 
            jumlah_barang = @original_jumlah_barang,
            kondisi_barang = @original_kondisi_barang,
            id_dtl_penyimpanan = (
                SELECT TOP 1 id_dtl_penyimpanan 
                FROM database_siso.dtl_ruangan_penyimpanan 
                WHERE id_ruangan = @original_id_ruangan AND id_penyimpanan = @original_id_penyimpanan
            ),
            modified_date = GETDATE()
        WHERE id_barang = @id_barang;
    END
    
    -- Update total item di header
    IF @so_id_opname IS NOT NULL
    BEGIN
        UPDATE database_siso.siso_msstockopname 
        SET so_total_item = (
            SELECT COUNT(*) 
            FROM database_siso.siso_msdtlstockopname 
            WHERE so_id_opname = @so_id_opname
        )
        WHERE so_id_opname = @so_id_opname;
    END
    
    COMMIT TRANSACTION;
    SELECT @@ROWCOUNT AS DeletedRows;
    
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    THROW;
END CATCH
END
GO

-- Cek apakah tabel header ada
SELECT TABLE_NAME 
FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_SCHEMA = 'database_siso' 
AND TABLE_NAME LIKE '%stock%opname%'
AND TABLE_NAME NOT LIKE '%dtl%';

-- Test delete satu record
SELECT * FROM database_siso.siso_msdtlstockopname WHERE id_detail = 2;
DELETE FROM database_siso.siso_msdtlstockopname WHERE id_detail = 1;

-- =============================================
-- TABEL: siso_msdupat (Header Dupat/Pengeluaran)
-- =============================================

-- Create Table
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.siso_msdupat') AND type in (N'U'))
BEGIN
    CREATE TABLE database_siso.siso_msdupat (
        id_dupat INT IDENTITY(1,1) PRIMARY KEY,
        tanggal_dupat DATETIME NOT NULL DEFAULT GETDATE(),
        id_pengguna VARCHAR(10) NOT NULL,
        keterangan_dupat VARCHAR(MAX) NULL,
        status_dupat VARCHAR(50) DEFAULT 'Draft',
        disetujui_oleh VARCHAR(10) NULL,
        tanggal_persetujuan DATETIME NULL,
        alasan_penolakan VARCHAR(500) NULL,
        modified_by VARCHAR(10) NULL,
        modified_date DATETIME NULL,
        FOREIGN KEY (id_pengguna) REFERENCES database_siso.pengguna(id_pengguna)
    );
END
GO

-- =============================================
-- STORED PROCEDURES: siso_msdupat
-- =============================================

-- SP GetAll
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDupat_GetAll') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDupat_GetAll
GO

CREATE PROCEDURE database_siso.sp_SisoMsDupat_GetAll
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        d.id_dupat,
        d.tanggal_dupat,
        d.id_pengguna,
        p.nama_pengguna,
        d.keterangan_dupat,
        d.status_dupat,
        d.disetujui_oleh,
        d.tanggal_persetujuan,
        d.alasan_penolakan,
        d.modified_by,
        d.modified_date
    FROM database_siso.siso_msdupat d
    LEFT JOIN database_siso.pengguna p ON d.id_pengguna = p.id_pengguna
    ORDER BY d.id_dupat DESC;
END
GO

-- SP GetById
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDupat_GetById') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDupat_GetById
GO

CREATE PROCEDURE database_siso.sp_SisoMsDupat_GetById
    @id_dupat INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        d.id_dupat,
        d.tanggal_dupat,
        d.id_pengguna,
        p.nama_pengguna,
        d.keterangan_dupat,
        d.status_dupat,
        d.disetujui_oleh,
        d.tanggal_persetujuan,
        d.alasan_penolakan,
        d.modified_by,
        d.modified_date
    FROM database_siso.siso_msdupat d
    LEFT JOIN database_siso.pengguna p ON d.id_pengguna = p.id_pengguna
    WHERE d.id_dupat = @id_dupat;
END
GO

-- SP Insert
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDupat_Insert') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDupat_Insert
GO

CREATE PROCEDURE database_siso.sp_SisoMsDupat_Insert
    @id_pengguna VARCHAR(10),
    @keterangan_dupat VARCHAR(MAX) = NULL,
    @status_dupat VARCHAR(50) = 'Draft'
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO database_siso.siso_msdupat (
        tanggal_dupat, id_pengguna, keterangan_dupat, status_dupat
    )
    VALUES (
        GETDATE(), @id_pengguna, @keterangan_dupat, @status_dupat
    );
    
    SELECT SCOPE_IDENTITY();
END
GO

-- SP Update
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDupat_Update') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDupat_Update
GO

CREATE PROCEDURE database_siso.sp_SisoMsDupat_Update
    @id_dupat INT,
    @id_pengguna VARCHAR(10),
    @keterangan_dupat VARCHAR(MAX) = NULL,
    @status_dupat VARCHAR(50) = NULL,
    @modified_by VARCHAR(10)
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE database_siso.siso_msdupat
    SET id_pengguna = @id_pengguna,
        keterangan_dupat = @keterangan_dupat,
        status_dupat = @status_dupat,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_dupat = @id_dupat;
    
    SELECT @@ROWCOUNT;
END
GO

-- SP Approve
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDupat_Approve') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDupat_Approve
GO

CREATE PROCEDURE database_siso.sp_SisoMsDupat_Approve
    @id_dupat INT,
    @status_dupat VARCHAR(50),
    @disetujui_oleh VARCHAR(10),
    @alasan_penolakan VARCHAR(500) = NULL,
    @modified_by VARCHAR(10)
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE database_siso.siso_msdupat
    SET status_dupat = @status_dupat,
        disetujui_oleh = @disetujui_oleh,
        tanggal_persetujuan = GETDATE(),
        alasan_penolakan = @alasan_penolakan,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE id_dupat = @id_dupat;
    
    SELECT @@ROWCOUNT;
END
GO

-- SP Delete
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDupat_Delete') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDupat_Delete
GO

CREATE PROCEDURE database_siso.sp_SisoMsDupat_Delete
    @id_dupat INT
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Delete detail first
    DELETE FROM database_siso.siso_msdtldupat WHERE id_dupat = @id_dupat;
    -- Delete header
    DELETE FROM database_siso.siso_msdupat WHERE id_dupat = @id_dupat;
    
    SELECT @@ROWCOUNT;
END
GO

-- SP Search
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDupat_Search') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDupat_Search
GO

CREATE PROCEDURE database_siso.sp_SisoMsDupat_Search
    @status_dupat VARCHAR(50) = NULL,
    @tanggal_mulai DATE = NULL,
    @tanggal_selesai DATE = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        d.id_dupat,
        d.tanggal_dupat,
        d.id_pengguna,
        p.nama_pengguna,
        d.keterangan_dupat,
        d.status_dupat,
        d.disetujui_oleh,
        d.tanggal_persetujuan,
        d.alasan_penolakan,
        d.modified_by,
        d.modified_date
    FROM database_siso.siso_msdupat d
    LEFT JOIN database_siso.pengguna p ON d.id_pengguna = p.id_pengguna
    WHERE (@status_dupat IS NULL OR d.status_dupat = @status_dupat)
      AND (@tanggal_mulai IS NULL OR d.tanggal_dupat >= @tanggal_mulai)
      AND (@tanggal_selesai IS NULL OR d.tanggal_dupat <= @tanggal_selesai)
    ORDER BY d.id_dupat DESC;
END
GO


-- =============================================
-- TABEL: siso_msdtldupat (Detail Dupat/Pengeluaran)
-- =============================================

-- Create Table
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.siso_msdtldupat') AND type in (N'U'))
BEGIN
    CREATE TABLE database_siso.siso_msdtldupat (
        id_dtl_dupat INT IDENTITY(1,1) PRIMARY KEY,
        id_barang INT NOT NULL,
        id_dupat INT NOT NULL,
        id_penyimpanan INT NOT NULL,
        keterangan VARCHAR(MAX) NULL,
        kondisi_barang VARCHAR(100) NULL,
        usulan_pengeluaran VARCHAR(50) DEFAULT 'Deleted',
        foto_barang VARCHAR(255) NULL,
        FOREIGN KEY (id_dupat) REFERENCES database_siso.siso_msdupat(id_dupat),
        FOREIGN KEY (id_barang) REFERENCES database_siso.barang(id_barang),
        FOREIGN KEY (id_penyimpanan) REFERENCES database_siso.penyimpanan(id_penyimpanan)
    );
END
GO

-- =============================================
-- STORED PROCEDURES: siso_msdtldupat
-- =============================================

-- SP GetByDupat
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDtlDupat_GetByDupat') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDtlDupat_GetByDupat
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlDupat_GetByDupat
    @id_dupat INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        d.id_dtl_dupat,
        d.id_barang,
        d.id_dupat,
        d.id_penyimpanan,
        d.keterangan,
        d.kondisi_barang,
        d.usulan_pengeluaran,
        COALESCE(d.foto_barang, b.foto_barang) AS foto_barang,
        b.nama_barang,
        b.nomor_aktiva
    FROM database_siso.siso_msdtldupat d
    LEFT JOIN database_siso.barang b ON d.id_barang = b.id_barang
    WHERE d.id_dupat = @id_dupat
    ORDER BY d.id_dtl_dupat;
END
GO

-- SP Insert Detail
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDtlDupat_Insert') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDtlDupat_Insert
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlDupat_Insert
    @id_barang INT,
    @id_dupat INT,
    @id_penyimpanan INT,
    @keterangan VARCHAR(MAX) = NULL,
    @kondisi_barang VARCHAR(100) = NULL,
    @usulan_pengeluaran VARCHAR(50) = 'Deleted',
    @foto_barang VARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO database_siso.siso_msdtldupat (
        id_barang, id_dupat, id_penyimpanan, keterangan, 
        kondisi_barang, usulan_pengeluaran, foto_barang
    )
    VALUES (
        @id_barang, @id_dupat, @id_penyimpanan, @keterangan,
        @kondisi_barang, @usulan_pengeluaran, @foto_barang
    );
    
    SELECT SCOPE_IDENTITY();
END
GO

-- SP Update Detail
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDtlDupat_Update') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDtlDupat_Update
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlDupat_Update
    @id_dtl_dupat INT,
    @id_penyimpanan INT,
    @keterangan VARCHAR(MAX) = NULL,
    @kondisi_barang VARCHAR(100) = NULL,
    @usulan_pengeluaran VARCHAR(50) = 'Deleted',
    @foto_barang VARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE database_siso.siso_msdtldupat
    SET id_penyimpanan = @id_penyimpanan,
        keterangan = @keterangan,
        kondisi_barang = @kondisi_barang,
        usulan_pengeluaran = @usulan_pengeluaran,
        foto_barang = @foto_barang
    WHERE id_dtl_dupat = @id_dtl_dupat;
    
    SELECT @@ROWCOUNT;
END
GO

-- SP Delete Detail
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'database_siso.sp_SisoMsDtlDupat_Delete') AND type in (N'P'))
    DROP PROCEDURE database_siso.sp_SisoMsDtlDupat_Delete
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlDupat_Delete
    @id_dtl_dupat INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM database_siso.siso_msdtldupat WHERE id_dtl_dupat = @id_dtl_dupat;
    
    SELECT @@ROWCOUNT;
END
GO

-- =============================================
-- Stored Procedure: Get Barang yang TIDAK ada di Detail Mutasi
-- =============================================
CREATE OR ALTER PROCEDURE [database_siso].[sp_Barang_GetAvailableForMutasi]
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        b.id_barang,
        b.nama_barang,
        b.nomor_aktiva,
        b.tipe_barang,
        b.jumlah_barang,
        b.jumlah_optimum,
        b.jumlah_minimum,
        b.satuan_barang,
        b.kondisi_barang,
        b.gambar_barang,
        b.kategori_barang,
        b.keterangan_penyimpanan,
        b.id_dtl_penyimpanan,
        b.status_barang,
        b.ketersediaan_barang,
        b.created_by,
        b.created_date,
        b.modified_by,
        b.modified_date
    FROM database_siso.barang b
    WHERE b.status_barang = 'Aktif'
    -- Exclude barang yang ada di mutasi aktif
    AND b.id_barang NOT IN (
        SELECT DISTINCT dm.id_barang
        FROM database_siso.siso_ms_dtlmutasi dm
        INNER JOIN database_siso.siso_msmutasi m ON dm.id_mutasi = m.id_mutasi
        WHERE m.status_mutasi IN ('Draft', 'On Progress Koor UPT', 'Approved')
    )
    -- Exclude barang yang ada di dupat aktif
    AND b.id_barang NOT IN (
        SELECT DISTINCT dd.id_barang
        FROM database_siso.siso_msdtldupat dd
        INNER JOIN database_siso.siso_msdupat d ON dd.id_dupat = d.id_dupat
        WHERE d.status_dupat IN ('Draft', 'On Progress Koor UPT', 'Approved')
    )
    ORDER BY b.nama_barang;
END;
GO

-- =============================================
-- SP: Get Barang Available for DUPAT (FIXED)
-- =============================================
CREATE OR ALTER PROCEDURE [database_siso].[sp_Barang_GetAvailableForDupat]
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        b.id_barang,
        b.nama_barang,
        b.nomor_aktiva,
        b.tipe_barang,
        b.jumlah_barang,
        b.jumlah_optimum,
        b.jumlah_minimum,
        b.satuan_barang,
        b.kondisi_barang,
        b.gambar_barang,
        b.kategori_barang,
        b.keterangan_penyimpanan,
        b.id_dtl_penyimpanan,
        b.status_barang,
        b.ketersediaan_barang,
        b.created_by,
        b.created_date,
        b.modified_by,
        b.modified_date,
        -- Info penyimpanan
        p.id_penyimpanan,
        p.nama_penyimpanan,
        drp.id_ruangan,
        r.nama_ruangan
    FROM database_siso.barang b
    LEFT JOIN database_siso.dtl_ruangan_penyimpanan drp ON b.id_dtl_penyimpanan = drp.id_dtl_penyimpanan
    LEFT JOIN database_siso.penyimpanan p ON drp.id_penyimpanan = p.id_penyimpanan
    LEFT JOIN database_siso.ruangan r ON drp.id_ruangan = r.id_ruangan
    WHERE b.status_barang = 'Aktif'
    -- Exclude barang yang ada di mutasi aktif
    AND b.id_barang NOT IN (
        SELECT DISTINCT dm.id_barang
        FROM database_siso.siso_ms_dtlmutasi dm
        INNER JOIN database_siso.siso_msmutasi m ON dm.id_mutasi = m.id_mutasi
        WHERE m.status_mutasi IN ('Draft', 'On Progress Koor UPT', 'Approved')
    )
    -- Exclude barang yang ada di dupat aktif
    AND b.id_barang NOT IN (
        SELECT DISTINCT dd.id_barang
        FROM database_siso.siso_msdtldupat dd
        INNER JOIN database_siso.siso_msdupat d ON dd.id_dupat = d.id_dupat
        WHERE d.status_dupat IN ('Draft', 'On Progress Koor UPT', 'Approved')
    )
    ORDER BY b.nama_barang;
END;
GO

-- =============================================
-- Stored Procedure: Get Barang untuk Stock Opname
-- =============================================
CREATE OR ALTER PROCEDURE [database_siso].[sp_Barang_GetAvailableForStockOpname]
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        b.id_barang,
        b.nama_barang,
        b.nomor_aktiva,
        b.tipe_barang,
        b.jumlah_barang,
        b.jumlah_optimum,
        b.jumlah_minimum,
        b.satuan_barang,
        b.kondisi_barang,
        b.gambar_barang,
        b.kategori_barang,
        b.keterangan_penyimpanan,
        b.id_dtl_penyimpanan,
        b.status_barang,
        b.ketersediaan_barang,
        b.created_by,
        b.created_date,
        b.modified_by,
        b.modified_date
    FROM database_siso.barang b
    WHERE b.status_barang = 'Aktif'
    -- Exclude barang yang ada di mutasi aktif
    AND b.id_barang NOT IN (
        SELECT DISTINCT dm.id_barang
        FROM database_siso.siso_ms_dtlmutasi dm
        INNER JOIN database_siso.siso_msmutasi m ON dm.id_mutasi = m.id_mutasi
        WHERE m.status_mutasi IN ('Draft', 'On Progress Koor UPT', 'Approved')
    )
    -- Exclude barang yang ada di stock opname aktif
    AND b.id_barang NOT IN (
        SELECT DISTINCT dso.id_barang
        FROM database_siso.siso_msdtlstockopname dso
        INNER JOIN database_siso.siso_msstockopname so ON dso.so_id_opname = so.so_id_opname
        WHERE so.so_status IN ('Draft', 'On Progress Koor UPT', 'Approved')
    )
    -- Exclude barang yang ada di dupat aktif
    AND b.id_barang NOT IN (
        SELECT DISTINCT dd.id_barang
        FROM database_siso.siso_msdtldupat dd
        INNER JOIN database_siso.siso_msdupat d ON dd.id_dupat = d.id_dupat
        WHERE d.status_dupat IN ('Draft', 'On Progress Koor UPT', 'Approved')
    )
    ORDER BY b.nama_barang;
END;
GO

-- =============================================
-- Stored Procedure: sp_SisoMsDtlStockOpname_Insert
-- Description: Insert detail stock opname and UPDATE Barang immediately (real-time)
-- =============================================

CREATE OR ALTER PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Insert
    @so_id_opname INT,
    @id_barang INT,
    @id_ruangan NVARCHAR(50),
    @id_penyimpanan NVARCHAR(50),
    @original_id_ruangan NVARCHAR(50),
    @original_id_penyimpanan NVARCHAR(50),
    @original_kondisi_barang NVARCHAR(50),
    @original_jumlah_barang INT,
    @so_quantity INT,
    @kondisi_barang NVARCHAR(50),
    @keterangan_tambahan NVARCHAR(500) = NULL,
    @foto_barang NVARCHAR(255) = NULL,
    @created_by NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        -- Insert detail stock opname
        INSERT INTO database_siso.siso_ms_dtl_stockopname (
            so_id_opname,
            id_barang,
            id_ruangan,
            id_penyimpanan,
            original_id_ruangan,
            original_id_penyimpanan,
            original_kondisi_barang,
            original_jumlah_barang,
            so_quantity,
            kondisi_barang,
            keterangan_tambahan,
            foto_barang,
            created_by,
            created_date
        )
        VALUES (
            @so_id_opname,
            @id_barang,
            @id_ruangan,
            @id_penyimpanan,
            @original_id_ruangan,
            @original_id_penyimpanan,
            @original_kondisi_barang,
            @original_jumlah_barang,
            @so_quantity,
            @kondisi_barang,
            @keterangan_tambahan,
            @foto_barang,
            @created_by,
            GETDATE()
        );
        
        DECLARE @id_detail INT = SCOPE_IDENTITY();
        
        -- **REAL-TIME UPDATE**: Update Barang immediately
        -- Get id_dtl_penyimpanan for new location
        DECLARE @new_id_dtl_penyimpanan INT;
        SELECT TOP 1 @new_id_dtl_penyimpanan = id_dtl_penyimpanan
        FROM database_siso.siso_ms_dtl_ruangan_penyimpanan
        WHERE id_ruangan = @id_ruangan
          AND id_penyimpanan = @id_penyimpanan;
        
        -- Update Barang table
        UPDATE database_siso.siso_ms_barang
        SET 
            jumlah_barang = @so_quantity,
            kondisi_barang = @kondisi_barang,
            id_dtl_penyimpanan = @new_id_dtl_penyimpanan,
            modified_by = @created_by,
            modified_date = GETDATE()
        WHERE id_barang = @id_barang;
        
        -- Log the change
        INSERT INTO database_siso.siso_ms_log_table (
            table_name,
            action_type,
            record_id,
            description,
            created_by,
            created_date
        )
        VALUES (
            'siso_ms_barang',
            'UPDATE',
            @id_barang,
            CONCAT('Stock Opname Real-time Update - SO #', @so_id_opname, 
                   ': Qty=', @so_quantity, ', Condition=', @kondisi_barang),
            @created_by,
            GETDATE()
        );
        
        COMMIT TRANSACTION;
        
        -- Return new ID
        SELECT @id_detail AS NewId;
        
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
            
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        RAISERROR(@ErrorMessage, 16, 1);
    END CATCH
END
GO

-- =============================================
-- Stored Procedure: sp_SisoMsDtlStockOpname_Update
-- Description: Update detail stock opname and UPDATE Barang immediately (real-time)
-- =============================================

CREATE OR ALTER PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Update
    @id_detail INT,
    @id_ruangan NVARCHAR(50),
    @id_penyimpanan NVARCHAR(50),
    @so_quantity INT,
    @kondisi_barang NVARCHAR(50),
    @keterangan_tambahan NVARCHAR(500) = NULL,
    @foto_barang NVARCHAR(255) = NULL,
    @modified_by NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        -- Get id_barang from detail
        DECLARE @id_barang INT;
        SELECT @id_barang = id_barang
        FROM database_siso.siso_ms_dtl_stockopname
        WHERE id_detail = @id_detail;
        
        -- Update detail stock opname
        UPDATE database_siso.siso_ms_dtl_stockopname
        SET 
            id_ruangan = @id_ruangan,
            id_penyimpanan = @id_penyimpanan,
            so_quantity = @so_quantity,
            kondisi_barang = @kondisi_barang,
            keterangan_tambahan = @keterangan_tambahan,
            foto_barang = @foto_barang,
            modified_by = @modified_by,
            modified_date = GETDATE()
        WHERE id_detail = @id_detail;
        
        -- **REAL-TIME UPDATE**: Update Barang immediately
        -- Get id_dtl_penyimpanan for new location
        DECLARE @new_id_dtl_penyimpanan INT;
        SELECT TOP 1 @new_id_dtl_penyimpanan = id_dtl_penyimpanan
        FROM database_siso.siso_ms_dtl_ruangan_penyimpanan
        WHERE id_ruangan = @id_ruangan
          AND id_penyimpanan = @id_penyimpanan;
        
        -- Update Barang table
        UPDATE database_siso.siso_ms_barang
        SET 
            jumlah_barang = @so_quantity,
            kondisi_barang = @kondisi_barang,
            id_dtl_penyimpanan = @new_id_dtl_penyimpanan,
            modified_by = @modified_by,
            modified_date = GETDATE()
        WHERE id_barang = @id_barang;
        
        -- Log the change
        INSERT INTO database_siso.siso_ms_log_table (
            table_name,
            action_type,
            record_id,
            description,
            created_by,
            created_date
        )
        VALUES (
            'siso_ms_barang',
            'UPDATE',
            @id_barang,
            CONCAT('Stock Opname Real-time Update - Detail #', @id_detail, 
                   ': Qty=', @so_quantity, ', Condition=', @kondisi_barang),
            @modified_by,
            GETDATE()
        );
        
        COMMIT TRANSACTION;
        
        SELECT @@ROWCOUNT AS AffectedRows;
        
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
            
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        RAISERROR(@ErrorMessage, 16, 1);
    END CATCH
END
GO

-- =============================================
-- Stored Procedure: sp_SisoMsDtlStockOpname_Delete
-- Description: Delete detail stock opname and RESTORE Barang to original data
-- =============================================

CREATE OR ALTER PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Delete
    @id_detail INT
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        -- Get original data before delete
        DECLARE @id_barang INT;
        DECLARE @original_id_ruangan NVARCHAR(50);
        DECLARE @original_id_penyimpanan NVARCHAR(50);
        DECLARE @original_kondisi_barang NVARCHAR(50);
        DECLARE @original_jumlah_barang INT;
        
        SELECT 
            @id_barang = id_barang,
            @original_id_ruangan = original_id_ruangan,
            @original_id_penyimpanan = original_id_penyimpanan,
            @original_kondisi_barang = original_kondisi_barang,
            @original_jumlah_barang = original_jumlah_barang
        FROM database_siso.siso_ms_dtl_stockopname
        WHERE id_detail = @id_detail;
        
        -- Delete detail
        DELETE FROM database_siso.siso_ms_dtl_stockopname
        WHERE id_detail = @id_detail;
        
        -- **RESTORE**: Restore Barang to original data
        -- Get original id_dtl_penyimpanan
        DECLARE @original_id_dtl_penyimpanan INT;
        SELECT TOP 1 @original_id_dtl_penyimpanan = id_dtl_penyimpanan
        FROM database_siso.siso_ms_dtl_ruangan_penyimpanan
        WHERE id_ruangan = @original_id_ruangan
          AND id_penyimpanan = @original_id_penyimpanan;
        
        -- Restore Barang table
        UPDATE database_siso.siso_ms_barang
        SET 
            jumlah_barang = @original_jumlah_barang,
            kondisi_barang = @original_kondisi_barang,
            id_dtl_penyimpanan = @original_id_dtl_penyimpanan,
            modified_by = 'SYSTEM_RESTORE',
            modified_date = GETDATE()
        WHERE id_barang = @id_barang;
        
        -- Log the restore
        INSERT INTO database_siso.siso_ms_log_table (
            table_name,
            action_type,
            record_id,
            description,
            created_by,
            created_date
        )
        VALUES (
            'siso_ms_barang',
            'RESTORE',
            @id_barang,
            CONCAT('Stock Opname Item Deleted - Restored to original: Qty=', 
                   @original_jumlah_barang, ', Condition=', @original_kondisi_barang),
            'SYSTEM_RESTORE',
            GETDATE()
        );
        
        COMMIT TRANSACTION;
        
        SELECT @@ROWCOUNT AS AffectedRows;
        
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
            
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        RAISERROR(@ErrorMessage, 16, 1);
    END CATCH
END
GO

-- =============================================
-- Stored Procedure: sp_SisoMsStockOpname_Approve
-- Description: Approve or Reject Stock Opname (data barang sudah terupdate real-time)
-- =============================================

CREATE OR ALTER PROCEDURE database_siso.sp_SisoMsStockOpname_Approve
    @so_id_opname INT,
    @so_status NVARCHAR(50),
    @so_reject_reason NVARCHAR(500) = NULL,
    @modified_by NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        -- Update Stock Opname status
        UPDATE database_siso.siso_ms_stockopname
        SET 
            so_status = @so_status,
            so_reject_reason = @so_reject_reason,
            modified_by = @modified_by,
            modified_date = GETDATE()
        WHERE so_id_opname = @so_id_opname;
        
        -- NOTE: Data barang SUDAH TERUPDATE secara real-time saat item ditambahkan/diubah
        -- Approval hanya untuk validasi proses, tidak perlu update barang lagi
        
        -- Log approval/rejection
        INSERT INTO database_siso.siso_ms_log_table (
            table_name,
            action_type,
            record_id,
            description,
            created_by,
            created_date
        )
        VALUES (
            'siso_ms_stockopname',
            @so_status,
            @so_id_opname,
            CONCAT('Stock Opname ', @so_status, 
                   CASE WHEN @so_reject_reason IS NOT NULL 
                        THEN CONCAT(' - Reason: ', @so_reject_reason) 
                        ELSE '' END),
            @modified_by,
            GETDATE()
        );
        
        COMMIT TRANSACTION;
        
        -- Return affected rows
        SELECT @@ROWCOUNT AS AffectedRows;
        
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
            
        -- Return error
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
        DECLARE @ErrorState INT = ERROR_STATE();
        
        RAISERROR(@ErrorMessage, @ErrorSeverity, @ErrorState);
    END CATCH
END
GO

-- =============================================
-- 1. sp_SisoMsDtlStockOpname_Insert
-- =============================================

IF EXISTS (SELECT * FROM sys.procedures WHERE name = 'sp_SisoMsDtlStockOpname_Insert')
BEGIN
    DROP PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Insert;
    PRINT '  - Dropped existing procedure';
END
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Insert
    @so_id_opname INT,
    @id_barang INT,
    @id_ruangan NVARCHAR(50),
    @id_penyimpanan NVARCHAR(50),
    @original_id_ruangan NVARCHAR(50),
    @original_id_penyimpanan NVARCHAR(50),
    @original_kondisi_barang NVARCHAR(50),
    @original_jumlah_barang INT,
    @so_quantity INT,
    @kondisi_barang NVARCHAR(50),
    @keterangan_tambahan NVARCHAR(500) = NULL,
    @foto_barang NVARCHAR(255) = NULL,
    @created_by NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        INSERT INTO database_siso.siso_ms_dtl_stockopname (
            so_id_opname, id_barang, id_ruangan, id_penyimpanan,
            original_id_ruangan, original_id_penyimpanan,
            original_kondisi_barang, original_jumlah_barang,
            so_quantity, kondisi_barang, keterangan_tambahan,
            foto_barang, created_by, created_date
        )
        VALUES (
            @so_id_opname, @id_barang, @id_ruangan, @id_penyimpanan,
            @original_id_ruangan, @original_id_penyimpanan,
            @original_kondisi_barang, @original_jumlah_barang,
            @so_quantity, @kondisi_barang, @keterangan_tambahan,
            @foto_barang, @created_by, GETDATE()
        );
        
        DECLARE @id_detail INT = SCOPE_IDENTITY();
        
        DECLARE @new_id_dtl_penyimpanan INT;
        SELECT TOP 1 @new_id_dtl_penyimpanan = id_dtl_penyimpanan
        FROM database_siso.siso_ms_dtl_ruangan_penyimpanan
        WHERE id_ruangan = @id_ruangan AND id_penyimpanan = @id_penyimpanan;
        
        UPDATE database_siso.siso_ms_barang
        SET jumlah_barang = @so_quantity,
            kondisi_barang = @kondisi_barang,
            id_dtl_penyimpanan = @new_id_dtl_penyimpanan,
            modified_by = @created_by,
            modified_date = GETDATE()
        WHERE id_barang = @id_barang;
        
        COMMIT TRANSACTION;
        SELECT @id_detail AS NewId;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        RAISERROR(@ErrorMessage, 16, 1);
    END CATCH
END
GO

PRINT '  - Created successfully';
PRINT '';

-- =============================================
-- 2. sp_SisoMsDtlStockOpname_Update
-- =============================================
PRINT 'Creating/Updating: sp_SisoMsDtlStockOpname_Update';

IF EXISTS (SELECT * FROM sys.procedures WHERE name = 'sp_SisoMsDtlStockOpname_Update')
BEGIN
    DROP PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Update;
    PRINT '  - Dropped existing procedure';
END
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Update
    @id_detail INT,
    @id_ruangan NVARCHAR(50),
    @id_penyimpanan NVARCHAR(50),
    @so_quantity INT,
    @kondisi_barang NVARCHAR(50),
    @keterangan_tambahan NVARCHAR(500) = NULL,
    @foto_barang NVARCHAR(255) = NULL,
    @modified_by NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        DECLARE @id_barang INT;
        SELECT @id_barang = id_barang
        FROM database_siso.siso_ms_dtl_stockopname
        WHERE id_detail = @id_detail;
        
        UPDATE database_siso.siso_ms_dtl_stockopname
        SET id_ruangan = @id_ruangan,
            id_penyimpanan = @id_penyimpanan,
            so_quantity = @so_quantity,
            kondisi_barang = @kondisi_barang,
            keterangan_tambahan = @keterangan_tambahan,
            foto_barang = @foto_barang,
            modified_by = @modified_by,
            modified_date = GETDATE()
        WHERE id_detail = @id_detail;
        
        DECLARE @new_id_dtl_penyimpanan INT;
        SELECT TOP 1 @new_id_dtl_penyimpanan = id_dtl_penyimpanan
        FROM database_siso.siso_ms_dtl_ruangan_penyimpanan
        WHERE id_ruangan = @id_ruangan AND id_penyimpanan = @id_penyimpanan;
        
        UPDATE database_siso.siso_ms_barang
        SET jumlah_barang = @so_quantity,
            kondisi_barang = @kondisi_barang,
            id_dtl_penyimpanan = @new_id_dtl_penyimpanan,
            modified_by = @modified_by,
            modified_date = GETDATE()
        WHERE id_barang = @id_barang;
        
        COMMIT TRANSACTION;
        SELECT @@ROWCOUNT AS AffectedRows;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        RAISERROR(@ErrorMessage, 16, 1);
    END CATCH
END
GO

PRINT '  - Created successfully';
PRINT '';

-- =============================================
-- 3. sp_SisoMsDtlStockOpname_Delete (PENTING!)
-- =============================================
PRINT 'Creating/Updating: sp_SisoMsDtlStockOpname_Delete';

IF EXISTS (SELECT * FROM sys.procedures WHERE name = 'sp_SisoMsDtlStockOpname_Delete')
BEGIN
    DROP PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Delete;
    PRINT '  - Dropped existing procedure';
END
GO

CREATE PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Delete
    @id_detail INT
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        DECLARE @id_barang INT;
        DECLARE @original_id_ruangan NVARCHAR(50);
        DECLARE @original_id_penyimpanan NVARCHAR(50);
        DECLARE @original_kondisi_barang NVARCHAR(50);
        DECLARE @original_jumlah_barang INT;
        
        SELECT 
            @id_barang = id_barang,
            @original_id_ruangan = original_id_ruangan,
            @original_id_penyimpanan = original_id_penyimpanan,
            @original_kondisi_barang = original_kondisi_barang,
            @original_jumlah_barang = original_jumlah_barang
        FROM database_siso.siso_ms_dtl_stockopname
        WHERE id_detail = @id_detail;
        
        DELETE FROM database_siso.siso_ms_dtl_stockopname
        WHERE id_detail = @id_detail;
        
        DECLARE @original_id_dtl_penyimpanan INT;
        SELECT TOP 1 @original_id_dtl_penyimpanan = id_dtl_penyimpanan
        FROM database_siso.siso_ms_dtl_ruangan_penyimpanan
        WHERE id_ruangan = @original_id_ruangan 
          AND id_penyimpanan = @original_id_penyimpanan;
        
        UPDATE database_siso.siso_ms_barang
        SET jumlah_barang = @original_jumlah_barang,
            kondisi_barang = @original_kondisi_barang,
            id_dtl_penyimpanan = @original_id_dtl_penyimpanan,
            modified_by = 'SYSTEM_RESTORE',
            modified_date = GETDATE()
        WHERE id_barang = @id_barang;
        
        COMMIT TRANSACTION;
        SELECT @@ROWCOUNT AS AffectedRows;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        RAISERROR(@ErrorMessage, 16, 1);
    END CATCH
END
GO

PRINT '  - Created successfully';
PRINT '';

-- =============================================
-- 4. sp_SisoMsStockOpname_Approve
-- =============================================
PRINT 'Creating/Updating: sp_SisoMsStockOpname_Approve';

IF EXISTS (SELECT * FROM sys.procedures WHERE name = 'sp_SisoMsStockOpname_Approve')
BEGIN
    DROP PROCEDURE database_siso.sp_SisoMsStockOpname_Approve;
    PRINT '  - Dropped existing procedure';
END
GO

CREATE PROCEDURE database_siso.sp_SisoMsStockOpname_Approve
    @so_id_opname INT,
    @so_status NVARCHAR(50),
    @so_reject_reason NVARCHAR(500) = NULL,
    @modified_by NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        UPDATE database_siso.siso_ms_stockopname
        SET so_status = @so_status,
            so_reject_reason = @so_reject_reason,
            modified_by = @modified_by,
            modified_date = GETDATE()
        WHERE so_id_opname = @so_id_opname;
        
        COMMIT TRANSACTION;
        SELECT @@ROWCOUNT AS AffectedRows;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        RAISERROR(@ErrorMessage, 16, 1);
    END CATCH
END
GO

PRINT '  - Created successfully';
PRINT '';

-- =============================================
-- Verification 
-- =============================================
PRINT '========================================';
PRINT 'Verification: Checking installed procedures';
PRINT '========================================';
PRINT '';

SELECT 
    name AS [Procedure Name],
    create_date AS [Created],
    modify_date AS [Modified]
FROM sys.procedures
WHERE name LIKE '%StockOpname%'
ORDER BY name;

SELECT * FROM database_siso.siso_msdtlstockopname

-- 1. Drop constraint dengan nama yang sebenarnya
IF EXISTS (SELECT * FROM sys.check_constraints WHERE name = 'CK__siso_msst__so_st__7755B73D')
BEGIN
    ALTER TABLE database_siso.siso_msstockopname 
    DROP CONSTRAINT CK__siso_msst__so_st__7755B73D;
    PRINT 'Dropped old CHECK constraint: CK__siso_msst__so_st__7755B73D';
END

-- 2. Tambah constraint yang baru dengan nama eksplisit
ALTER TABLE database_siso.siso_msstockopname 
ADD CONSTRAINT CK_siso_msstockopname_so_status_new
CHECK (so_status IN ('Draft', 'On Progress Koor UPT', 'Approved', 'Rejected'));

PRINT 'Added new CHECK constraint with correct values';

-- Drop existing procedure
IF EXISTS (SELECT * FROM sys.procedures WHERE name = 'sp_SisoMsStockOpname_Approve')
BEGIN
    DROP PROCEDURE database_siso.sp_SisoMsStockOpname_Approve;
    PRINT 'Dropped existing sp_SisoMsStockOpname_Approve';
END

-- Create new simple version without logging
CREATE PROCEDURE database_siso.sp_SisoMsStockOpname_Approve
    @so_id_opname INT,
    @so_status NVARCHAR(50),
    @so_reject_reason NVARCHAR(500) = NULL,
    @modified_by NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Simple update without logging or complex transactions
    UPDATE database_siso.siso_msstockopname
    SET so_status = @so_status,
        so_reject_reason = @so_reject_reason,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE so_id_opname = @so_id_opname;
    
    -- Return affected rows
    SELECT @@ROWCOUNT AS AffectedRows;
END
GO

-- Drop existing procedure
IF EXISTS (SELECT * FROM sys.procedures WHERE name = 'sp_SisoMsStockOpname_Approve')
BEGIN
    DROP PROCEDURE database_siso.sp_SisoMsStockOpname_Approve;
    PRINT 'Dropped existing sp_SisoMsStockOpname_Approve';
END

-- Create new version with auto end_date
CREATE PROCEDURE database_siso.sp_SisoMsStockOpname_Approve
    @so_id_opname INT,
    @so_status NVARCHAR(50),
    @so_reject_reason NVARCHAR(500) = NULL,
    @modified_by NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Update with conditional end_date
    UPDATE database_siso.siso_msstockopname
    SET so_status = @so_status,
        so_reject_reason = @so_reject_reason,
        so_end_date = CASE 
            WHEN @so_status = 'On Progress Koor UPT' THEN GETDATE()  -- Auto-fill end_date when sending to Koor UPT
            WHEN @so_status IN ('Approved', 'Rejected') THEN COALESCE(so_end_date, GETDATE())  -- Keep existing or set current
            ELSE so_end_date  -- Keep existing for other statuses
        END,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE so_id_opname = @so_id_opname;
    
    -- Return affected rows
    SELECT @@ROWCOUNT AS AffectedRows;
END
GO
