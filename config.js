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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_31_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ0RJcEUvY0NaMEV2blZnQUZaRnhSaVJlNzkrbHA0MkRkMWdFcWMxUDVPQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRnJmMGFsZkFTNU9vN3VPekR6aERuZ1wiLFxuICBcInBob25lSWRcIjogXCI0NTBkNzYwNS0xZjAxLTQ3YjMtODQ1My0xZTUxNDZkZDQxODFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMjQ1LFxuICAgICAgMTAxLFxuICAgICAgMTQzLFxuICAgICAgMTY4LFxuICAgICAgNzAsXG4gICAgICAyMjQsXG4gICAgICAyNDQsXG4gICAgICAxNzksXG4gICAgICAxNDksXG4gICAgICAzOSxcbiAgICAgIDE0MyxcbiAgICAgIDE4LFxuICAgICAgMjIzLFxuICAgICAgMjI4LFxuICAgICAgMzksXG4gICAgICAyMDcsXG4gICAgICAxNDgsXG4gICAgICAzNyxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTYzLFxuICAgICAgNDUsXG4gICAgICAxNjUsXG4gICAgICAxMDAsXG4gICAgICAxMDAsXG4gICAgICAxODMsXG4gICAgICAyMDksXG4gICAgICAyMTIsXG4gICAgICAyNDksXG4gICAgICA5MSxcbiAgICAgIDgwLFxuICAgICAgODEsXG4gICAgICA3NyxcbiAgICAgIDI0NCxcbiAgICAgIDEwMSxcbiAgICAgIDIyLFxuICAgICAgNTIsXG4gICAgICA0MSxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6QzhmTU5FTDJXZ3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWC92c1ZvUktxRStBa212ZXFTOTFoU1NZT1IwMUdoY0poZG0yb0llUHN6UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1alZpcEtrcnBRREw0QWp0SlNNVVAwLzRNcTVoS1p2YkZCWTdoeVFqazJsL2YxNjYwdE96T2RpNGZYcjBTN1Z1cUhLL3NFS0Y4elp2S2VqMjRDNjFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaNFZ1OTh0WkhjWHR4ekI2MVpPVlF6RmNkOS9aNFlXaGFSUXhCcGtBSHRuSFhVenI1S1A5RjlVNit3RXVKWHJsbGNnZXB4SkhNODZseEwxRGhYL2tpQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzc5NTU0OTE6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlM0SVRBTUFcIixcbiAgICBcImxpZFwiOiBcIjQxMjEwNjEzODc0NjkxOjVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM3OTU1NDkxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzAwMjg5XG59Igp9"  // PUT your SESSION_ID 


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
