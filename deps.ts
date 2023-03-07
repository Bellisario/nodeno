import { Application, Router } from 'https://deno.land/x/oak@v12.0.1/mod.ts';

const app = new Application();
const router = new Router();

const GITHUB_TOKEN = Deno.env.get('GITHUB_TOKEN');

export { app, GITHUB_TOKEN, router };
