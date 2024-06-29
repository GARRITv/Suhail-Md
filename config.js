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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348162195613";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_39_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMixcbiAgICAgICAgMTg1LFxuICAgICAgICA5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDksXG4gICAgICAgIDY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2LFxuICAgICAgICA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDExLFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICA2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWRRSnFNeVdPd3FwR3hpc0M4K1FlY0M4MFlqbmJXeTlMd2VIeXZBQVlhYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA0NzgwMTY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NDdDMDEyRDE4QTYwMjI5NjgyRUYwNkI5QUI3MUM2N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk2ODI3NDhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA0NzgwMTY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRUU4RTkyNDEyMjQxOTBCRTJCQjg4RDZFQUM2OEUwNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk2ODI3NDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQVdHUWJQdjBSbVcwcU9lcVNjNUZMUVwiLFxuICBcInBob25lSWRcIjogXCIyMTQ2NTM0Yy1mOTc3LTQxM2YtODI2Yi0xZDg0MDQyNGMwMzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICAxNjcsXG4gICAgICAxMTMsXG4gICAgICAxNDcsXG4gICAgICA4NixcbiAgICAgIDE2MSxcbiAgICAgIDEzMixcbiAgICAgIDYsXG4gICAgICAxOCxcbiAgICAgIDIxNyxcbiAgICAgIDcsXG4gICAgICA2NyxcbiAgICAgIDMwLFxuICAgICAgMTU1LFxuICAgICAgNjQsXG4gICAgICAzMyxcbiAgICAgIDI1MCxcbiAgICAgIDIwNSxcbiAgICAgIDY5LFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMjMxLFxuICAgICAgMjAsXG4gICAgICAxNTUsXG4gICAgICAxNTUsXG4gICAgICAxODEsXG4gICAgICAyMDksXG4gICAgICAxMzUsXG4gICAgICAyMzYsXG4gICAgICAxMTQsXG4gICAgICAyMjIsXG4gICAgICAzOSxcbiAgICAgIDE1NSxcbiAgICAgIDEzLFxuICAgICAgMTQ4LFxuICAgICAgMTc1LFxuICAgICAgMjI3LFxuICAgICAgNDQsXG4gICAgICA2NixcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGOFBDQkZYWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNDc4MDE2ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQwMzgxNzI1MDgyMDA6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCI/XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSStjOHJRSEVMU05nYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5ZFVRSVhTMXNhcFI0aDVKdk9USWZqREE5WEZwazRrdGdOTlVJNE9wMDFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndoOVJzeEN0NkVmWTZzZmxMemZqZ3J3aGZlWk1SOVJaeGcrQWJUYXlHTkVGNnU3ejhROW1CMXRyMHdCa1lHUEVoanE4OW5yeFRraFYrdHlWUnZBL0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFtbWxwbWxGc0d3d0grZFdhMzRXTlozeWIvTXduRC96U3Evalc5WE9Da3FQNFEvTjdSdjlmSS9RbXd2ZW03dDJEV2s5dTZYTk54TTVzNW54aVhMNWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDQ3ODAxNjg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjgyNzQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTNEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFM0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZbWpjR053clNGMktzaFN6QkR4S0RIaE1PbTNmdUtBY0M1WDlEZWowRFFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5ODk5NzE0NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTY4Mjc0NzQ0MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "garri-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "garri",


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
