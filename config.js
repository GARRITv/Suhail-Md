const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_21_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0LFxuICAgICAgICA0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTczLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcxLFxuICAgICAgICA4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEbm8xUmp2dUdkbm9qamVrWkMveXQ5bmdRKzlTa2VXV3lmdit4dFRoNmFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjIxOTU2MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4M0FDMkFCRUI5QUExRkVDNjkwOTUxMDAzODg2OUNBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTY4NTI3OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxcFZEOEdLN1JHZWNESzJBbVA2cm1BXCIsXG4gIFwicGhvbmVJZFwiOiBcImM1MTViMzUyLTkxNDktNDZlZS1hYzc3LTkyYzAwYjJkYjc4MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICA1NSxcbiAgICAgIDc3LFxuICAgICAgODcsXG4gICAgICAxOTcsXG4gICAgICAxMTIsXG4gICAgICAxMDQsXG4gICAgICAzLFxuICAgICAgNTYsXG4gICAgICAxNjgsXG4gICAgICAyMSxcbiAgICAgIDE5OSxcbiAgICAgIDE1NyxcbiAgICAgIDk5LFxuICAgICAgMjQ3LFxuICAgICAgNzAsXG4gICAgICA3NixcbiAgICAgIDIxNyxcbiAgICAgIDcxLFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICA5OSxcbiAgICAgIDM0LFxuICAgICAgMjExLFxuICAgICAgMjM0LFxuICAgICAgMTQyLFxuICAgICAgMTEyLFxuICAgICAgMTkxLFxuICAgICAgMTkyLFxuICAgICAgMTc3LFxuICAgICAgMjAwLFxuICAgICAgMTYsXG4gICAgICAyMzAsXG4gICAgICAzNixcbiAgICAgIDI2LFxuICAgICAgMjE0LFxuICAgICAgMCxcbiAgICAgIDE3MixcbiAgICAgIDExNixcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFSNVBUWkRQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYyMTk1NjEzOjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR0FSUkkgVFYgwrJbS2VubnkgUmlja3ldXCIsXG4gICAgXCJsaWRcIjogXCIxNDQzMTU5MzQ0NzY2Mzo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJMnk5YjRHRUlXaGdiUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitENnpmdDZjQ25xN0w3dkZpT0tUT1crV0dKYkVtWFdvN0ZDRzRXd3dGZ3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTnNXL1hSUGFOZFllNlgrQ3J1ejlrOTJLdEQ5eGluWDYxN2R5TG1ZVlRqWGdicklwQzNHYk5jY2syMURRdnBHSGI2Q3ZrWS9EdGI0d2drU2NFOFhpREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaVdBWUNwQU9EL2RXNHdaWnZSV3RKeEEzcGFnWjdwRVduYUlGTHgxcklhOENYRzdUMFJyM1dmNzdSWW43QmVsTEh3OXRwZHpkc0ZGdDB1bG9sVXROakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MjE5NTYxMzo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTY4NTI3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBTV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFNXLmpzb24iOiAie1wia2V5RGF0YVwiOlwickszTGduWi8rUzdMczdXNXRNQXNoVHE1MkJyWG9ucHNiekVzVFptYXM1az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQyNTU5NTAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
