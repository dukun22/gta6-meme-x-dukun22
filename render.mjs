// Render the GTA 6 meme: lays out the meme as HTML (top text, neon street scene
// with the make.fun ghost waiting on the curb, a 99% loading bar, bottom text)
// and screenshots it with headless Chromium into meme.png (1024x1024).
import { writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));

const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1024px;height:1024px;background:#10101c;color:#fff;font-family:"Arial Black","DejaVu Sans",Arial,sans-serif;overflow:hidden}
.page{width:1024px;height:1024px;padding:16px 0 12px;display:flex;flex-direction:column}
.meme-text{font-size:56px;line-height:1.12;font-weight:900;text-align:center;letter-spacing:1px;
  color:#fff;-webkit-text-stroke:2px #000;paint-order:stroke fill;
  text-shadow:3px 3px 0 #000,-3px 3px 0 #000,3px -3px 0 #000,-3px -3px 0 #000,0 5px 0 #000}
.meme-text.small{font-size:44px}
.top{height:150px;flex:none;display:flex;align-items:center;justify-content:center;padding:0 30px}
.scene{height:600px;flex:none;position:relative;overflow:hidden;margin:0 0}
.scene img.bg{width:100%;height:100%;object-fit:cover;object-position:center 50%}
.load{position:absolute;top:34px;left:50%;transform:translateX(-50%);text-align:center}
.load .label{font-size:34px;font-weight:900;letter-spacing:3px;color:#fff;
  -webkit-text-stroke:1.5px #000;paint-order:stroke fill;
  text-shadow:2px 2px 0 #000,-2px 2px 0 #000,2px -2px 0 #000,-2px -2px 0 #000}
.load .bar{width:520px;height:34px;margin-top:8px;border:4px solid #fff;border-radius:18px;background:#10101c;overflow:hidden}
.load .fill{width:99%;height:100%;background:repeating-linear-gradient(45deg,#e6007e 0 18px,#ff4da6 18px 36px)}
.ghost{position:absolute;left:330px;bottom:14px;width:200px;text-align:center}
.ghost img{width:200px;height:200px;display:block}
.ghost .tag{display:inline-block;margin-top:-14px;padding:4px 18px;background:#e6007e;color:#fff;
  font-size:24px;font-weight:900;letter-spacing:1px;border:3px solid #fff;border-radius:20px}
.bottom{height:230px;flex:none;display:flex;align-items:center;justify-content:center;padding:0 30px}
</style></head><body><div class="page">
  <div class="top"><div class="meme-text">AFTER 13 YEARS OF<br>WAITING FOR GTA 6&hellip;</div></div>
  <div class="scene">
    <img class="bg" src="file://${root}/scene.png">
    <div class="load"><div class="label">LOADING&hellip; 99%</div><div class="bar"><div class="fill"></div></div></div>
    <div class="ghost"><img src="file://${root}/ghost-mark.png"><span class="tag">make.fun</span></div>
  </div>
  <div class="bottom"><div class="meme-text small">STILL STUCK AT 99%.<br>THE GHOST GAVE UP.</div></div>
</div></body></html>`;

const outHtml = '/tmp/meme.html';
writeFileSync(outHtml, html);
const chrome = join(homedir(), '.cache/ms-playwright/chromium-1148/chrome-linux/chrome');
const outPng = join(root, 'meme.png');
execFileSync(chrome, [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  '--force-device-scale-factor=1', '--window-size=1024,1024',
  `--screenshot=${outPng}`, `file://${outHtml}`,
], { stdio: 'inherit' });
console.log('wrote', outPng);
