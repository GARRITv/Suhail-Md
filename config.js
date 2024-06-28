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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_39_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNixcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICA4MixcbiAgICAgICAgMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICA3MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDgzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgODksXG4gICAgICAgIDM0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA4MixcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDgwLFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDMxLFxuICAgICAgICA5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaTRaMGVmcnFEU3dPRG8xYTN2eVlMdzluY1B3QVplZGNwYm5yLzJvS2VRUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNUlZUkZHMHRTSHVjLXFGX2djNGQzQVwiLFxuICBcInBob25lSWRcIjogXCIzMGFkYTEwYy1jODUwLTRmYTItODUzZi03OTE4NDRjYWY4MDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICA0MyxcbiAgICAgIDEyOSxcbiAgICAgIDIwMCxcbiAgICAgIDE0MyxcbiAgICAgIDE1OCxcbiAgICAgIDIxLFxuICAgICAgMTc0LFxuICAgICAgMTcyLFxuICAgICAgMjYsXG4gICAgICAzNCxcbiAgICAgIDksXG4gICAgICAzMixcbiAgICAgIDE1NyxcbiAgICAgIDk1LFxuICAgICAgMTIwLFxuICAgICAgMTA1LFxuICAgICAgMjQyLFxuICAgICAgMjI4LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDk0LFxuICAgICAgMTgwLFxuICAgICAgNjEsXG4gICAgICAyMzQsXG4gICAgICA4MixcbiAgICAgIDEyMCxcbiAgICAgIDUwLFxuICAgICAgMTA4LFxuICAgICAgMjI1LFxuICAgICAgNzYsXG4gICAgICA1NyxcbiAgICAgIDI1MyxcbiAgICAgIDIzMixcbiAgICAgIDM2LFxuICAgICAgMjksXG4gICAgICAxMTIsXG4gICAgICA2LFxuICAgICAgMTI1LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJYNUZFWVJIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYyMTk1NjEzOjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR0FSUkkgVFYgwrJbS2VubnkgUmlja3ldXCIsXG4gICAgXCJsaWRcIjogXCIxNDQzMTU5MzQ0NzY2Mzo1OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJMnk5YjRHRUpEVTk3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitENnpmdDZjQ25xN0w3dkZpT0tUT1crV0dKYkVtWFdvN0ZDRzRXd3dGZ3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMHpRTmh0SEpNdUZCL2crVWMwckNFMytFOE05aVN4bGMvWFNjM0R3TnpNTU9IcmtGWUhvZHpWR3BqQ2lsTnJKWFNHcXE5N2I4ekN3QXAwZWJVK0paQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibDlqYjFYa2E2eGhDN2J3RG5XbUVvSGwzRzNNWEJrenBaZmxXaWpLOWpYNXFUbVdvVlByeW5Vd01WMDRMWE15djBjK0htRHUweXlCOUN3TzcrSlpEQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MjE5NTYxMzo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTUyNzk1N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
