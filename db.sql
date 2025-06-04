-- a. Data Barang dengan harga lebih besar dari 10,000 diurut berdasarkan Harga Satuan (ascending)
SELECT KODE, NAMA, HARGA_SATUAN FROM Barang WHERE HARGA_SATUAN > 10000 ORDER BY HARGA_SATUAN ASC;

-- b. Data Pelanggan yg namanya mengandung huruf "g" dengan alamat "BANDUNG"
SELECT KODE, NAMA, ALAMAT FROM Pelanggan WHERE NAMA LIKE '%g%' AND ALAMAT = 'BANDUNG';

-- c. Data seluruh transaksi sesuai dengan tampilan seperti di gambar
SELECT t.KODE, t.TANGGAL, p.NAMA AS NAMA_PELANGGAN, b.NAMA AS NAMA_BARANG, t.JUMLAH_BARANG AS JUMLAH, b.HARGA_SATUAN, ROUND(t.JUMLAH_BARANG * b.HARGA_SATUAN, 0) AS TOTAL
FROM Transaksi t JOIN Pelanggan p ON t.KODE_PELANGGAN = p.KODE JOIN Barang b ON t.KODE_BARANG = b.KODE ORDER BY NAMA_PELANGGAN ASC, t.KODE ASC;

-- d. Data Rekap nama, jumlah dan total harga pembelian sesuai tampilan yang diminta
SELECT p.NAMA AS NAMA_PELANGGAN, SUM(t.JUMLAH_BARANG) AS JUMLAH, SUM(t.JUMLAH_BARANG * b.HARGA_SATUAN) AS TOTAL_HARGA FROM Transaksi t JOIN Pelanggan p ON t.KODE_PELANGGAN = p.KODE JOIN Barang b ON t.KODE_BARANG = b.KODE GROUP BY p.NAMA
ORDER BY NAMA_PELANGGAN ASC;
