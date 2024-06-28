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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_53_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICA0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3eFFFS3p1ZU04bUV3OTJZU05janlpNE5iSm53aUJxeGl1cWRZSXJWYUJRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNzA4MTQwNTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQjczMDZBQzM0MUQ2RUM2OEMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTU5MzYyNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHQk14U1cxM1IyT2VUVjBVbmk4TGt3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk0YmZlZDUzLTE2MTMtNDkwOS1iY2ViLTA1ZTNiMjY2YWY1OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICA0NCxcbiAgICAgIDc3LFxuICAgICAgMTAwLFxuICAgICAgMjUsXG4gICAgICAyMixcbiAgICAgIDI0MSxcbiAgICAgIDEzMixcbiAgICAgIDEzNyxcbiAgICAgIDE2LFxuICAgICAgNzcsXG4gICAgICAxOTMsXG4gICAgICAyNDEsXG4gICAgICA5MSxcbiAgICAgIDEyNCxcbiAgICAgIDIxMyxcbiAgICAgIDIwOSxcbiAgICAgIDExNyxcbiAgICAgIDcxLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgMTcwLFxuICAgICAgOTIsXG4gICAgICAyMTAsXG4gICAgICA1NixcbiAgICAgIDYzLFxuICAgICAgMTg4LFxuICAgICAgMjMwLFxuICAgICAgMjQ0LFxuICAgICAgNjksXG4gICAgICAyMjEsXG4gICAgICAxMTEsXG4gICAgICA3NCxcbiAgICAgIDgwLFxuICAgICAgNjAsXG4gICAgICAyMDEsXG4gICAgICAxODksXG4gICAgICAxNzgsXG4gICAgICA4MixcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhFUFZYTE5MXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcwODE0MDUwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzODUzMDEyNjgyNzU5MTo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIiTwnZCJ8J2Qh/CdkIDwnZCYIPCdkJbwnZCO8J2QjSRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdmptb0VMRUk3Vis3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlM5cDVDNGdMeHNoTkNBbG1HbzUwRE5LZGxlYWNObDVVQUdOS1h2bVp4QUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT0NIZTkvaElZVm4vcXpmT3Z5Ly9Wb3Fzdzd5VHQ1bWlzZUVoTUlTRmgyWVA4cnBYN2gvNEdsM0JHcTlybXBEeDYyRjhiTUlzM1JEWHpYdExXbXA3QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQTRjb0NkQmIyS1FEYlA2UFlRTWFjY2pkdUY1Wmw2bStiUnVwUk1Wcndpak5CMHpJa2orclRqSUgxZGN6SlA0RVFmRDVMcHNFNklRRlgvNFUwbjVUaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3MDgxNDA1MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NTkzNjE4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkQvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRC8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
