import { withBase } from "ufo";
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const OUTPUT_DIR = './public';
const PREVIEW_BASE_URL = '/ssg'

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const route = query.route as string || '/';
  
  const previewRoute = PREVIEW_BASE_URL + route;
  const nitroApp = useNitroApp();
  const appFetch = nitroApp.localFetch;
  
  const htmlRes = await appFetch(previewRoute, {
    headers: [["x-nitro-prerender", previewRoute]],
  });
  
  if (!htmlRes.ok) {
    throw new Error(`Failed to fetch ${previewRoute}: ${htmlRes.status}`);
  }
  
  const html = await htmlRes.text();
  
  const payloadRoute = route.endsWith('/') ? route : route + '/';
  const payloadUrl = PREVIEW_BASE_URL + payloadRoute + '_payload.json';
  const payloadRes = await appFetch(payloadUrl);
  
  const folderPath = join(OUTPUT_DIR, route);
  await mkdir(folderPath, { recursive: true });
  
  const htmlPath = join(folderPath, 'index.html');
  await writeFile(htmlPath, html, 'utf-8');
  
  if (payloadRes.ok) {
    const payload = await payloadRes.text();
    const payloadPath = join(folderPath, '_payload.json');
    await writeFile(payloadPath, payload, 'utf-8');
  }

  return {
    success: true,
    route,
    files: {
      html: htmlPath,
      payload: payloadRes.ok ? join(folderPath, '_payload.json') : null
    }
  };
});
