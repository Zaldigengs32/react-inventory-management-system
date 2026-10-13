CREATE OR ALTER PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Insert
    @so_id_opname INT,
    @id_barang INT,
    @id_ruangan INT,
    @id_penyimpanan INT,
    @original_id_ruangan INT,
    @original_id_penyimpanan INT,
    @original_kondisi_barang VARCHAR(50),
    @original_jumlah_barang INT,
    @so_quantity INT,
    @kondisi_barang VARCHAR(50),
    @keterangan_tambahan TEXT = NULL,
    @foto_barang VARCHAR(255) = NULL,
    @created_by VARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        -- Validasi: cek apakah stock opname exists
        IF NOT EXISTS (SELECT 1 FROM database_siso.siso_msstockopname WHERE so_id_opname = @so_id_opname)
        BEGIN
            ROLLBACK TRANSACTION;
            RAISERROR('Stock Opname dengan ID %d tidak ditemukan', 16, 1, @so_id_opname);
            RETURN 0;
        END
        
        -- Validasi: cek apakah barang exists
        IF NOT EXISTS (SELECT 1 FROM database_siso.barang WHERE id_barang = @id_barang)
        BEGIN
            ROLLBACK TRANSACTION;
            RAISERROR('Barang dengan ID %d tidak ditemukan', 16, 1, @id_barang);
            RETURN 0;
        END
        
        -- Validasi: cek apakah barang sudah ada di stock opname ini
        IF EXISTS (SELECT 1 FROM database_siso.siso_msdtlstockopname WHERE so_id_opname = @so_id_opname AND id_barang = @id_barang)
        BEGIN
            ROLLBACK TRANSACTION;
            RAISERROR('Barang sudah ada dalam stock opname ini', 16, 1);
            RETURN 0;
        END
        
        INSERT INTO database_siso.siso_msdtlstockopname (
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
        
        -- Update barang dengan data baru
        DECLARE @new_id_dtl_penyimpanan INT;
        SELECT TOP 1 @new_id_dtl_penyimpanan = id_dtl_penyimpanan
        FROM database_siso.dtl_ruangan_penyimpanan
        WHERE id_ruangan = @id_ruangan AND id_penyimpanan = @id_penyimpanan;
        
        UPDATE database_siso.barang
        SET jumlah_barang = @so_quantity,
            kondisi_barang = @kondisi_barang,
            id_dtl_penyimpanan = @new_id_dtl_penyimpanan,
            modified_by = @created_by,
            modified_date = GETDATE()
        WHERE id_barang = @id_barang;
        
        -- *** AUTO UPDATE TOTAL ITEMS ***
        DECLARE @new_total_items INT;
        SELECT @new_total_items = COUNT(*)
        FROM database_siso.siso_msdtlstockopname
        WHERE so_id_opname = @so_id_opname;
        
        UPDATE database_siso.siso_msstockopname
        SET so_total_item = @new_total_items,
            modified_by = @created_by,
            modified_date = GETDATE()
        WHERE so_id_opname = @so_id_opname;
        
        COMMIT TRANSACTION;
        SELECT @id_detail AS NewId, @new_total_items AS TotalItems;
        
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
        
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
        DECLARE @ErrorState INT = ERROR_STATE();
        
        RAISERROR(@ErrorMessage, @ErrorSeverity, @ErrorState);
        RETURN 0;
    END CATCH
END
GO

CREATE OR ALTER PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Update
    @id_detail INT,
    @id_ruangan INT,
    @id_penyimpanan INT,
    @so_quantity INT,
    @kondisi_barang VARCHAR(50),
    @keterangan_tambahan text = NULL,
    @foto_barang VARCHAR(255) = NULL,
    @modified_by VARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        -- Validasi: cek apakah detail exists
        IF NOT EXISTS (SELECT 1 FROM database_siso.siso_msdtlstockopname WHERE id_detail = @id_detail)
        BEGIN
            ROLLBACK TRANSACTION;
            RAISERROR('Detail Stock Opname dengan ID %d tidak ditemukan', 16, 1, @id_detail);
            RETURN 0;
        END
        
        -- Ambil id_barang dan so_id_opname
        DECLARE @id_barang INT;
        DECLARE @so_id_opname INT;
        SELECT @id_barang = id_barang, @so_id_opname = so_id_opname
        FROM database_siso.siso_msdtlstockopname
        WHERE id_detail = @id_detail;
        
        -- Update detail
        UPDATE database_siso.siso_msdtlstockopname
        SET id_ruangan = @id_ruangan,
            id_penyimpanan = @id_penyimpanan,
            so_quantity = @so_quantity,
            kondisi_barang = @kondisi_barang,
            keterangan_tambahan = @keterangan_tambahan,
            foto_barang = @foto_barang,
            modified_by = @modified_by,
            modified_date = GETDATE()
        WHERE id_detail = @id_detail;
        
        DECLARE @updated_rows INT = @@ROWCOUNT;
        
        -- Update barang jika detail berhasil diupdate
        IF @updated_rows > 0
        BEGIN
            DECLARE @new_id_dtl_penyimpanan INT;
            SELECT TOP 1 @new_id_dtl_penyimpanan = id_dtl_penyimpanan
            FROM database_siso.dtl_ruangan_penyimpanan
            WHERE id_ruangan = @id_ruangan AND id_penyimpanan = @id_penyimpanan;
            
            UPDATE database_siso.barang
            SET jumlah_barang = @so_quantity,
                kondisi_barang = @kondisi_barang,
                id_dtl_penyimpanan = @new_id_dtl_penyimpanan,
                modified_by = @modified_by,
                modified_date = GETDATE()
            WHERE id_barang = @id_barang;
            
            -- *** AUTO UPDATE TOTAL ITEMS ***
            DECLARE @current_total_items INT;
            SELECT @current_total_items = COUNT(*)
            FROM database_siso.siso_msdtlstockopname
            WHERE so_id_opname = @so_id_opname;
            
            UPDATE database_siso.siso_msstockopname
            SET so_total_item = @current_total_items,
                modified_by = @modified_by,
                modified_date = GETDATE()
            WHERE so_id_opname = @so_id_opname;
        END
        
        COMMIT TRANSACTION;
        SELECT @updated_rows AS AffectedRows;
        
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
        
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
        DECLARE @ErrorState INT = ERROR_STATE();
        
        RAISERROR(@ErrorMessage, @ErrorSeverity, @ErrorState);
        RETURN 0;
    END CATCH
END
GO

CREATE OR ALTER PROCEDURE database_siso.sp_SisoMsDtlStockOpname_Delete
    @id_detail INT
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        -- Validasi: cek apakah detail exists
        IF NOT EXISTS (SELECT 1 FROM database_siso.siso_msdtlstockopname WHERE id_detail = @id_detail)
        BEGIN
            ROLLBACK TRANSACTION;
            RAISERROR('Detail Stock Opname dengan ID %d tidak ditemukan', 16, 1, @id_detail);
            RETURN 0;
        END
        
        -- Ambil data original untuk restore
        DECLARE @id_barang INT;
        DECLARE @so_id_opname INT;
        DECLARE @original_id_ruangan INT;
        DECLARE @original_id_penyimpanan INT;
        DECLARE @original_kondisi_barang VARCHAR(100);
        DECLARE @original_jumlah_barang INT;
        
        SELECT @id_barang = id_barang,
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
        
        DECLARE @deleted_rows INT = @@ROWCOUNT;
        
        -- Restore barang ke kondisi original jika delete berhasil
        IF @deleted_rows > 0
        BEGIN
            DECLARE @original_id_dtl_penyimpanan INT;
            SELECT TOP 1 @original_id_dtl_penyimpanan = id_dtl_penyimpanan
            FROM database_siso.dtl_ruangan_penyimpanan
            WHERE id_ruangan = @original_id_ruangan AND id_penyimpanan = @original_id_penyimpanan;
            
            UPDATE database_siso.barang
            SET jumlah_barang = @original_jumlah_barang,
                kondisi_barang = @original_kondisi_barang,
                id_dtl_penyimpanan = @original_id_dtl_penyimpanan,
                modified_by = 'SYSTEM_RESTORE',
                modified_date = GETDATE()
            WHERE id_barang = @id_barang;
            
            -- *** AUTO UPDATE TOTAL ITEMS ***
            DECLARE @remaining_total_items INT;
            SELECT @remaining_total_items = COUNT(*)
            FROM database_siso.siso_msdtlstockopname
            WHERE so_id_opname = @so_id_opname;
            
            UPDATE database_siso.siso_msstockopname
            SET so_total_item = @remaining_total_items,
                modified_by = 'SYSTEM_RESTORE',
                modified_date = GETDATE()
            WHERE so_id_opname = @so_id_opname;
        END
        
        COMMIT TRANSACTION;
        SELECT @deleted_rows AS AffectedRows;
        
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
        
        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
        DECLARE @ErrorState INT = ERROR_STATE();
        
        RAISERROR(@ErrorMessage, @ErrorSeverity, @ErrorState);
        RETURN 0;
    END CATCH
END
GO


-- Fix total items untuk semua stock opname yang udah ada
UPDATE so
SET so_total_item = (
    SELECT COUNT(*)
    FROM database_siso.siso_msdtlstockopname dtl
    WHERE dtl.so_id_opname = so.so_id_opname
),
modified_by = 'SYSTEM_FIX',
modified_date = GETDATE()
FROM database_siso.siso_msstockopname so;

PRINT 'Total items telah diperbaiki untuk semua stock opname.';


CREATE OR ALTER PROCEDURE database_siso.sp_SisoMsStockOpname_Approve
    @so_id_opname INT,
    @so_status NVARCHAR(50),
    @so_reject_reason NVARCHAR(500) = NULL,
    @modified_by NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Check if record exists first
    IF NOT EXISTS (SELECT 1 FROM database_siso.siso_msstockopname WHERE so_id_opname = @so_id_opname)
    BEGIN
        SELECT 0 AS AffectedRows;
        RETURN;
    END
    
    UPDATE database_siso.siso_msstockopname
    SET so_status = @so_status,
        so_end_date = CASE WHEN @so_status = 'On Progress Koor UPT' THEN GETDATE() ELSE so_end_date END,  -- UBAH INI!
        so_reject_reason = @so_reject_reason,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE so_id_opname = @so_id_opname;
    
    SELECT @@ROWCOUNT AS AffectedRows;
END
GO

-- Test procedure to debug the issue
CREATE OR ALTER PROCEDURE database_siso.sp_SisoMsStockOpname_Approve_Test
    @so_id_opname INT,
    @so_status NVARCHAR(50),
    @so_reject_reason NVARCHAR(500) = NULL,
    @modified_by NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Debug: Show current record
    SELECT 'BEFORE UPDATE' AS Step, so_id_opname, so_status, so_end_date, modified_by, modified_date
    FROM database_siso.siso_msstockopname 
    WHERE so_id_opname = @so_id_opname;
    
    -- Check if record exists
    IF NOT EXISTS (SELECT 1 FROM database_siso.siso_msstockopname WHERE so_id_opname = @so_id_opname)
    BEGIN
        SELECT 'RECORD NOT FOUND' AS Error, @so_id_opname AS SoIdOpname;
        RETURN;
    END
    
    -- Perform update
    UPDATE database_siso.siso_msstockopname
    SET so_status = @so_status,
        so_end_date = CASE WHEN @so_status = 'On Progress Koor UPT' THEN GETDATE() ELSE so_end_date END,
        so_reject_reason = @so_reject_reason,
        modified_by = @modified_by,
        modified_date = GETDATE()
    WHERE so_id_opname = @so_id_opname;
    
    -- Show result
    SELECT 'AFTER UPDATE' AS Step, so_id_opname, so_status, so_end_date, modified_by, modified_date
    FROM database_siso.siso_msstockopname 
    WHERE so_id_opname = @so_id_opname;
    
    SELECT @@ROWCOUNT AS AffectedRows;
END
GO