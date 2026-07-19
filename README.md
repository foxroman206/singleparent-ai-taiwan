# 📦 SingleParent AI Taiwan — 後端 Module 0：地基

這是全新重建的第一步，**先不加任何功能**，只確保「GitHub → Render → 資料庫」這條路真的通。
完成以下步驟後，你會拿到一個網址，打開它應該會看到系統正常運作的訊息。

---

## 第一步：把檔案放到 GitHub

1. 打開 https://github.com ，登入你的帳號。
2. 右上角點「+」→「New repository」。
3. Repository name 填：`singleparent-ai-taiwan-backend`
4. 選擇 **Private**（除非你想公開）。
5. 其他選項都不用勾，直接按綠色的「Create repository」按鈕。
6. 建立完成後，畫面會出現一個空的倉庫頁面，找到「uploading an existing file」這個藍色連結並點下去。
   （如果找不到，就在頁面上方找「Add file」→「Upload files」）
7. 把我提供的整個資料夾**裡面的所有檔案和資料夾**（不是壓縮檔本身，是解壓縮後的內容）拖曳到網頁中間的上傳框裡。
   - 現代瀏覽器（Chrome/Edge）拖曳整個資料夾也會自動保留裡面的結構，不用擔心。
8. 拖曳完成後，往下滑，找到「Commit changes」綠色按鈕，直接按下去。
9. 完成！現在你的程式碼已經在 GitHub 上了。

---

## 第二步：部署到 Render

1. 打開 https://render.com ，用 GitHub 帳號登入（比較簡單，會自動連結）。
2. 登入後點右上角「New」→ 選擇 **「Blueprint」**（⚠️ 一定要選 Blueprint，不要選 Web Service，這是上次失敗的原因）。
3. 選擇你剛剛建立的 `singleparent-ai-taiwan-backend` 倉庫。
4. Render 會自動讀取專案裡的 `render.yaml` 檔案，畫面上應該會顯示：
   - 1 個 Web Service（叫做 `singleparent-backend`）
   - 1 個 Database（叫做 `singleparent-db`）
5. 確認畫面內容後，按下「Apply」。
6. 接下來 Render 會自動：建立資料庫 → 安裝套件 → 建立資料表 → 啟動伺服器。這個過程大約 **3-8 分鐘**，中途不要關掉頁面。
7. 畫面左側可以看到即時的 log（跑動的文字），如果你看到綠色的 **"Live"** 字樣，就代表成功上線了。

---

## 第三步：測試（這一步非常重要，一定要做）

1. 在 Render 的服務頁面最上方，會有一個網址，長得像：
   `https://singleparent-backend-xxxx.onrender.com`
2. 點開這個網址，**在網址後面加上 `/health`**，例如：
   `https://singleparent-backend-xxxx.onrender.com/health`
3. 你應該會看到類似這樣的文字（代表資料庫也連線成功）：
   ```json
   {"status":"ok","database":"connected","service":"singleparent-ai-taiwan-backend","timestamp":"..."}
   ```
4. 再打開一個網址，這次加上 `/api`，例如：
   `https://singleparent-backend-xxxx.onrender.com/api`
   你應該會看到一個完整的 API 文件頁面（Swagger），列出目前有哪些功能。

---

## ✅ 如果看到上面兩個畫面，代表地基完全成功

請把這兩個網址回傳給我（`/health` 和 `/api` 的畫面截圖，或直接貼網址），
我確認沒問題後，我們就進入下一步：**加入會員註冊/登入功能**。

## ❌ 如果哪一步卡住了

把 Render 左側 log 視窗裡「紅色文字」的部分整段複製貼給我，
不用擔心看不懂英文錯誤訊息，直接貼過來，我來看。
