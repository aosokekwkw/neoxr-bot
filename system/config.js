// Owner number
global.owner = '6287837703726'
// Owner name
global.owner_name = 'Fauzigntng'
// Maximum upload file size limit (Default : 250 MB)
global.max_upload = 250
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 3
// User Limitation (Default : 10)
global.limit = 10
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '212']
// Put target jid to forward friends story
global.forwards = '6287837703726@c.us'
// Get neoxr apikey by registering at https://api.neoxr.my.id
global.Api = new (require('./neoxrApi'))('5VC9rvNx')
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '164728'
global.chatai_key = 'MKPsfkgXLZPGrWoH'
// Footer text
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ FauziBotz-Md ッ'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'Diproses . . .'),
   invalid: Func.texted('bold', 'URL Tidak Valid!'),
   wrong: Func.texted('bold', 'Format yang salah!'),
   getdata: Func.texted('bold', 'Menggores metadata . . .'),
   fail: Func.texted('bold', 'Tidak bisa mendapatkan metadata!'),
   error: Func.texted('bold', 'Terjadi kesalahan!'),
   errorF: Func.texted('bold', 'Maaf fitur ini sedang error.'),
   premium: Func.texted('bold', 'Fitur ini hanya untuk pengguna premium.'),
   owner: Func.texted('bold', 'Perintah ini hanya untuk pemilik.'),
   god: Func.texted('bold', 'Perintah ini hanya untuk Guru'),
   group: Func.texted('bold', 'Perintah ini hanya akan bekerja dalam kelompok.'),
   botAdmin: Func.texted('bold', 'Perintah ini akan berfungsi ketika saya menjadi admin.'),
   admin: Func.texted('bold', 'Perintah ini hanya untuk admin grup.'),
   private: Func.texted('bold', 'Gunakan perintah ini di cha pribadit.')
})