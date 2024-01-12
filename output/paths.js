export function pathss(app) {
  app.get('/api/test', (_, res) => res.send({ greeting: 'Hello' }));
}
