/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node publishing utility. */
const fs = require('node:fs');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const origin = 'https://oillinko.com';
const endpoint = 'https://api.indexnow.org/indexnow';
const args = process.argv.slice(2);
function option(name) { const i = args.indexOf(name); return i < 0 ? undefined : args[i + 1]; }

async function main() {
  const keyFile = option('--key-file');
  const key = (keyFile ? fs.readFileSync(keyFile, 'utf8') : process.env.INDEXNOW_KEY || '').trim();
  assert(/^[a-zA-Z0-9-]{8,128}$/.test(key), 'Provide INDEXNOW_KEY or --key-file; never put its value in a command argument.');
  const sitemapResponse = await fetch(`${origin}/sitemap.xml`, {redirect:'manual',signal:AbortSignal.timeout(30000)});
  assert.equal(sitemapResponse.status, 200, 'The production sitemap must return HTTP 200 directly.');
  const sitemap = await sitemapResponse.text();
  const published = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replaceAll('&amp;', '&')));
  const urlsFile = option('--urls-file');
  const urls = [...new Set(urlsFile ? fs.readFileSync(urlsFile,'utf8').trim().split(/\r?\n/).filter(Boolean) : published)];
  assert(urls.length > 0 && urls.length <= 10000, 'IndexNow accepts 1–10,000 URLs per request.');
  for(const url of urls) { const parsed = new URL(url); assert(parsed.origin === origin && !parsed.search && !parsed.hash && published.has(url), 'Only current canonical sitemap URLs may be submitted by this utility.'); }

  const keyLocation = `${origin}/${key}.txt`;
  const proof = await fetch(keyLocation, {redirect:'manual',signal:AbortSignal.timeout(30000)});
  assert.equal(proof.status, 200, 'Deploy the matching ownership file before submission.');
  assert.equal((await proof.text()).trim(), key, 'The ownership file must contain the exact key.');
  assert(proof.headers.get('content-type')?.includes('text/plain'), 'The ownership file must be plain text.');
  console.log(`Validated ${urls.length} canonical production URLs and the ownership file.`);
  if(!args.includes('--submit')) {console.log('Dry run only. Add --submit to notify IndexNow.'); return;}

  const response = await fetch(endpoint, {
    method:'POST', headers:{'Content-Type':'application/json; charset=utf-8','User-Agent':'Oillinko-IndexNow/1.0'},
    body:JSON.stringify({host:'oillinko.com',key,urlList:urls}), signal:AbortSignal.timeout(60000),
  });
  const responseText = await response.text();
  const result = {
    submittedAt:new Date().toISOString(), endpoint, host:'oillinko.com', urlCount:urls.length,
    urlListSha256:crypto.createHash('sha256').update(urls.join('\n')).digest('hex'),
    httpStatus:response.status,
    result:response.status === 200 ? 'received' : response.status === 202 ? 'received; ownership validation pending' : 'not accepted',
    indexingStatus:'not confirmed by this response',
    ...(![200,202].includes(response.status) ? {responseDetails:responseText.split(key).join('[redacted]').slice(0,1500)} : {}),
  };
  const receipt = option('--receipt'); if(receipt) fs.writeFileSync(receipt,JSON.stringify(result,null,2)+'\n');
  console.log(JSON.stringify(result,null,2));
  assert([200,202].includes(response.status), 'IndexNow did not accept this request. Diagnose the response status before retrying.');
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
