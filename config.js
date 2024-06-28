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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_49_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgwLFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgODMsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MixcbiAgICAgICAgMTIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICA1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZHhTRW5WWUVsWGVqYytlQkRuNE9vejl1Z1ZBL0szNktuc0N6STFjazZoRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMDE0V1QzQzJUUzY5WnZnRWhkSWEwZ1wiLFxuICBcInBob25lSWRcIjogXCJlZDg4NGIxZC05NjI1LTRjZDItYmU0Ny1kMjc1ZDI0MTQ0YzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMTk4LFxuICAgICAgMTYxLFxuICAgICAgMjI1LFxuICAgICAgMTQzLFxuICAgICAgNzYsXG4gICAgICAyNSxcbiAgICAgIDE0NCxcbiAgICAgIDE5MixcbiAgICAgIDE5MixcbiAgICAgIDE4OSxcbiAgICAgIDEyOCxcbiAgICAgIDE2LFxuICAgICAgMTA0LFxuICAgICAgNjYsXG4gICAgICAyNSxcbiAgICAgIDk5LFxuICAgICAgMjU1LFxuICAgICAgMTIzLFxuICAgICAgMTk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMzgsXG4gICAgICAyMDQsXG4gICAgICAxNjgsXG4gICAgICA5NCxcbiAgICAgIDIwNCxcbiAgICAgIDE2MyxcbiAgICAgIDExMCxcbiAgICAgIDE3OCxcbiAgICAgIDEzNSxcbiAgICAgIDI1MSxcbiAgICAgIDE4NixcbiAgICAgIDIwMixcbiAgICAgIDEzOCxcbiAgICAgIDE4MCxcbiAgICAgIDUxLFxuICAgICAgMTAsXG4gICAgICA1OSxcbiAgICAgIDIyMCxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1lKTTJTUjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjYxNDE4MDg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY1NDY0MDM0NTYyMTMzOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEhkMjdVRUVNKzUrYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3WnJkY2tsYTllSHhpdWExVVVJMnd0MlpVUWZaM3pROUl6RFF4eU1LemlJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkU0RTB5cDF6cS8vZlloYVUxVmNpZjY0WFVibzdualYyekdIbmV6c3AvQ2RlU3kyNk5SSTdESE1RTHBGdTJQa284bjBKK1hPTk1melBwc29CVzhSN0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhoZTJjdjZGbXp6SDFJVU5jODBpendBdmpOUldnQ0szR1JHcy9DZHBCRzhZKzJzempOT29Ca1VNTVFBdEJYR0dHbWdIU3NTQ1FNNW9kOXFTRDVwZGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjYxNDE4MDg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU1NzMzMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
