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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_23_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMixcbiAgICAgICAgODUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICA5NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5LFxuICAgICAgICA0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwLFxuICAgICAgICA0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9zNXVPQ0J3OE1sV0FxWkVxWW9iaUMvdzdEMVFwYXhUVEZyWjhJRVc3VDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInE4QkpRTksyU09lR0Y3U1FsTFVVT1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGEyY2U3ZTEtZmQ3My00MjQyLWFlMzQtMzdiY2JhZDBjMDQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDIwMixcbiAgICAgIDg1LFxuICAgICAgOTMsXG4gICAgICAxNTcsXG4gICAgICAxNyxcbiAgICAgIDM0LFxuICAgICAgMTk2LFxuICAgICAgMTk4LFxuICAgICAgMTg2LFxuICAgICAgMTg1LFxuICAgICAgMTcxLFxuICAgICAgMTEzLFxuICAgICAgMTQwLFxuICAgICAgMTA1LFxuICAgICAgMjA4LFxuICAgICAgMTg4LFxuICAgICAgMCxcbiAgICAgIDgwLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY0LFxuICAgICAgMTA0LFxuICAgICAgMjAwLFxuICAgICAgODAsXG4gICAgICAyNDksXG4gICAgICA2MCxcbiAgICAgIDQ1LFxuICAgICAgMTU1LFxuICAgICAgMTU2LFxuICAgICAgMTkyLFxuICAgICAgOTIsXG4gICAgICAxMSxcbiAgICAgIDIxMCxcbiAgICAgIDE2NCxcbiAgICAgIDc3LFxuICAgICAgMTM5LFxuICAgICAgMzgsXG4gICAgICAxNTQsXG4gICAgICAxODYsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWM0s4WDROQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NTA3MDAyMzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkzNDkyODkwNDE5NDIwOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lYVy9jVUtFTG5iaXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNmJZY0ZqY2cxb2NsVTF6aFYxNVhoUTlMT3hnMFdVZFVSVmpmOXNobGgwQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2WGhTdjRCbEZMeGJ0TFJCNEVCaHFsd1h3d3FFS2NNTEtxcWRtSW9jRWF6UlVYN1VpWDZzbGdNVC9OUVZCeitlNHorY1pFc09hRmpqdWJzTEUvTnpoZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOcU03eXFaZ0t6bEFuTDlRenVlM2h0VEhySWRNRk1oVlBEaW5KTEhXK0xaWEpIN3RicGNqOTlMa21WOUdXS0lySzBvSnU0QktXRU5Tc2hpMURrekRCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY1MDcwMDIzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4NDAxODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHZlZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdmVi5qc29uIjogIntcImtleURhdGFcIjpcImM0WkV4NEQ5UEZJU2p5U3haRllZWkRHZUw4dEtDVFlnS2YxeVpJd0toczg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgzMTExNzA2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5ODQwMTkzNTIyXCJ9Igp9"  // PUT your SESSION_ID 


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
