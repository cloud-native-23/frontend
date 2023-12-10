import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
	lng: "en",
	fallbackLng: "en",
	resources: {
		en: {
			translation: {
				"Stadium Matching System": "Stadium Matching System",
				"Home": "Home",
				"Venue": "Venue",
				"Login": "Login",
				"Rent": "Rent",
				"Admin": "Admin",
				"Session": "Session",
				"欲使用人數": "Number of People",
				"人": "people",
				"加入": "Join",
				"租借": "Rent",
				"已滿": "Full",
				"球技程度": "Level",
				"初級": "Beginner",
				"中級": "Intermediate",
				"高級": "Advanced",
				"Rented": "Rented",
				"Open": "Open",
				"Closed": "Closed",
				"場地資訊": "Info",
				"場地時段": "Schedule",
				"租借場地": "Rent",
				"場地": "Venue",
				"時段": "Session",
				"租借人": "Renter",
				"使用人數": "People",
				"目前人數": "Current People",
				"球技要求": "Level Requirements",
				"狀態": "Status",
				"無": "None",
				"點擊上傳圖片": "Click to upload image",
				"場館地址": "Stadium location",
				"場館名稱": "Stadium name",
				"場地名稱": "Venue name",
				"場": "courts",
				"單一場地可容納人數": "Capacity per court",
				"容納人數": "Capacity",
				"場地列表": "Court list",
				"新增": "Add",
				"至": "to",
				"開放日": "Open days",
				"週一": "Mon",
				"週二": "Tue",
				"週三": "Wed",
				"週四": "Thu",
				"週五": "Fri",
				"週六": "Sat",
				"週日": "Sun",
				"說明": "Description",
				"球場名稱": "Court name",
				"取消": "Cancel",
				"確認": "Confirm",
				"修改": "Edit",
				"上下架場地": "Delete/add venue sessions",
				"刪除場地": "Delete whole venue",
				"已加入隊伍": "Joined Successfully",
				"下架特定時段場地": "Disable venue sessions",
				"租借成功": "Rental Successfully",
				"允許配對球友?": "Teammates Matching Needed?",
				"想再找幾名球友?": "Number of Teammates Needed?",
				"球友球技要求": "Teammates Level",
				"確定": "Confirm",
				"球場": "Court",
				"使用人數不可為0": "Number of people cannot be 0",
				"可加入人數不可為0": "Number of teammates cannot be 0",
				"開始日期/時間": "Start Date/Time",
				"結束日期/時間": "End Date/Time",
				"平方公尺": "m²",
				"Square Meter": "m²",
				"Sport Center": "Sport Center",
				"Table Tennis Room": "Table Tennis Room",
				"Badminton Court": "Badminton Court",
				"Click to add a venue": "Click to add a venue",
				"Rental Period": "Rental Period",
				"Order Status": "Order Status",
				"Number of People": "Number of People",
				"Members": "Members",
				"Renter": "Renter",
				"Unpair": "Unpair",
				"Records": "Records",
				"Pairing Records": "Pairing Records",
				"Rental Records": "Rental Records",
				"Logout": "Logout",
				"Cancel Rental": "Cancel",
				"Confirm Cancellation?": "Confirm Cancellation?",
				"Location": "Location",
				"休館日": "Closing day",
				"場館地點": "Location",
				"場地數量": "Number of courts",
				"場地面積": "Area",
				"開放時間": "Open time",
				"單一場地容納人數": "Capacity per court",
				"位置連結": "Location Link",
				"上架特定時段場地": "Enable venue sessions",
				"上架場地": "Add venue sessions",
				"下架場地": "Disable venue sessions",
				"隊友Email": "Teammates Email",
				"欲加入人數": "People Joining",
				"地圖連結": "Location Link",
				"修改場地資訊": "Update Venue Info",
				"新增場地": "Create New Venue",
				"允許配對": "Teammates Matching",
				"可配對人數": "Teammates Needed",
				"目前使用人數": "Current People",
				"Please rent again.": "Please rent again.",
				"請選擇球友球技要求": "Please select teammates level",
				"隊友Email不符合人數": "Teammates Email does not match the number of people",
				"無法加入": "Cannot join",
				"Please login first.": "Please login first.",
				"球技要求不可跳級": "Cannot skip levels",
				"連線逾時，請重新登入！": "Connection timed out, please log in again!",
				"我了解一旦下架場地，則這個時段的訂單會全部取消。": "I understand that once the venue sessions are disabled, all orders for that time slot will be canceled.",
				"回到場地一覽": "Back to venue list",
				"請填寫所有必填欄位（包含圖片）": "Please fill in all required fields (including image).",
				"起始時間需要早於結束時間": "Start time must be before end time",
				"Provider cannot join a team or rent a court.": "Provider cannot join a team or rent a court.",
				"Available": "Available",
				"Booked": "Booked",
				"Disabled": "Disabled",
				"Cancel": "Cancel",
				"Type Email": "Type Email",
			}
		},
		zh: {
			translation: {
				"Stadium Matching System": "Stadium Matching System",
				"Home": "首頁",
				"Venue": "場地",
				"Login": "登入",
				"Rent": "租借場地",
				"Admin": "管理員",
				"Session": "時段",
				"上下架場地": "上下架場地",
				"欲使用人數": "欲使用人數",
				"人": "人",
				"球技程度": "球技程度",
				"初級": "初級",
				"中級": "中級",
				"高級": "高級",
				"Rented": "已租借",
				"Open": "開放中",
				"Closed": "未開放",
				"場地資訊": "場地資訊",
				"場地時段": "場地時段",
				"租借場地": "租借場地",
				"場地": "場地",
				"時段": "時段",
				"租借人": "租借人",
				"使用人數": "使用人數",
				"目前人數": "目前人數",
				"球技要求": "球技要求",
				"狀態": "狀態",
				"無": "無",
				"點擊上傳圖片": "點擊上傳圖片",
				"場館地址": "場館地址",
				"場館名稱": "場館名稱",
				"場地名稱": "場地名稱",
				"場地數量": "場地數量",
				"場": "場",
				"單一場地可容納人數": "單一場地可容納人數",
				"容納人數": "容納人數",
				"加入": "加入",
				"租借": "租借",
				"已滿": "已滿",
				"場地列表": "場地列表",
				"新增": "新增",
				"場地面積": "場地面積",
				"開放時間": "開放時間",
				"至": "至",
				"週一": "週一",
				"週二": "週二",
				"週三": "週三",
				"週四": "週四",
				"週五": "週五",
				"週六": "週六",
				"週日": "週日",
				"說明": "說明",
				"球場名稱": "球場名稱",
				"取消": "取消",
				"確認": "確認",
				"修改": "修改",
				"下架場地": "下架場地",
				"刪除場地": "刪除場地",
				"下架特定時段場地": "下架特定時段場地",
				"已加入隊伍": "已加入隊伍",
				"租借成功": "租借成功",
				"允許配對球友?": "允許配對球友?",
				"想再找幾名球友?": "想再找幾名球友?",
				"球友球技要求": "球友球技要求",
				"確定": "確定",
				"球場": "球場",
				"使用人數不可為0": "使用人數不可為0",
				"可加入人數不可為0": "可加入人數不可為0",
				"開始日期/時間": "開始日期/時間",
				"結束日期/時間": "結束日期/時間",
				"平方公尺": "平方公尺",
				"Rental Period": "租借期間",
				"Order Status": "訂單狀態",
				"Number of People": "人數",
				"Members": "成員",
				"Renter": "租借人",
				"Unpair": "取消配對",
				"Pairing Records": "配對紀錄",
				"Rental Records": "租借紀錄",
				"Square Meter": "平方公尺",
				"Sport Center": "運動中心",
				"Table Tennis Room": "桌球室",
				"Badminton Court": "羽球室",
				"Click to add a venue": "新增場地",
				"Records": "紀錄",
				"Logout": "登出",
				"Cancel Rental": "取消租借",
				"Confirm Cancellation?": "確定要取消預約嗎?",
				"Location": "場館地點",
				"休館日": "休館日",
				"場館地點": "場館地點",
				"開放日": "開放日",
				"單一場地容納人數": "單一場地容納人數",
				"位置連結": "位置連結",
				"上架特定時段場地": "上架特定時段場地",
				"上架場地": "上架場地",
				"隊友Email": "隊友Email",
				"欲加入人數": "欲加入人數",
				"地圖連結": "地圖連結",
				"修改場地資訊": "修改場地資訊",
				"新增場地": "新增場地",
				"允許配對": "允許配對",
				"可配對人數": "可配對人數",
				"目前使用人數": "目前使用人數",
				"Please rent again.": "請重新租借",
				"請選擇球友球技要求": "請選擇球友球技要求",
				"隊友Email不符合人數": "隊友Email不符合人數",
				"無法加入": "無法加入",
				"Please login first.": "請先登入",
				"球技要求不可跳級": "球技要求不可跳級",
				"連線逾時，請重新登入！": "連線逾時，請重新登入！",
				"我了解一旦下架場地，則這個時段的訂單會全部取消。": "我了解一旦下架場地，則這個時段的訂單會全部取消。",
				"回到場地一覽": "回到場地一覽",
				"請填寫所有必填欄位（包含圖片）": "請填寫所有必填欄位（包含圖片）",
				"起始時間需要早於結束時間": "起始時間需要早於結束時間",
				"Provider cannot join a team or rent a court.": "場地提供者無法加入隊伍或租借場地。",
				"Available": "開放中",
				"Booked": "已租借",
				"Disabled": "未開放",
				"Cancel": "取消",
				"Type Email": "輸入Email",
			}
		},
	},
});

export default i18n;
