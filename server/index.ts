import express from 'express';
import { createEntityAdapter } from '@reduxjs/toolkit';
import type { Post } from '../src/app/services/post';

const app = express();
const port = 3000;

const adapter = createEntityAdapter<Post>()
let state;

export const getMockState = () => {
  if (!state) {
    state = adapter.getInitialState();
    state = adapter.setAll(state, [
      { id: 1, name: 'A sample post', fetched_at: new Date().toUTCString() },
      {
        id: 2,
        name: 'A post about rtk-query',
        fetched_at: new Date().toUTCString(),
      },
    ]);
  }
  return state;
}

app.get('/time/:offset', async (req, res) => {
    console.log('Received request for time');
    const { offset } = req.params as { offset: string }
    const date = new Date()
    const localDate = date.getTime() // local time
    const localOffset = date.getTimezoneOffset() * 60000
    const formattedOffset = Number(offset.replace(':', '.'))
    const target = localDate + localOffset + 3600000 * formattedOffset

    // Add 400 ms delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 400));

    res.status(200).json({ time: new Date(target).toUTCString() });
});

app.get('/posts/:id', async (req, res) => {
    const { id } = req.params as { id: string }
    state = adapter.updateOne(state, {
      id,
      changes: { fetched_at: new Date().toUTCString() },
    })
    res.status(200).json(state.entities[id]);
});

function start() {
    app.listen(port, () => {
        console.log(`Mock service app listening at http://localhost:${port}`);
    });
}

start();