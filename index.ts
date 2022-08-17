import { app, router } from './deps.ts';
import { getLatestRelease } from './utils.ts';

router.get('/', async (ctx) => {
    ctx.response.type = 'text/plain';
    try {
        const latest = await getLatestRelease('nodejs/node');
        ctx.response.body = latest;
    } catch (err) {
        console.error(err);
        ctx.response.body = 'Failed to get latest release';
    }
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log('App listening on port 3000');
app.listen({ port: 3000 });
