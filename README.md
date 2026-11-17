# sit725-2.2p-submission

SIT725 Task 2.2P: an Express server that serves `public/` and adds two numbers.

## Run

```bash
npm install
npm start
```

Open http://localhost:3000

## Endpoints

- `GET /add?a=5&b=3` → `8`
- `POST /add` with JSON `{"a": 5, "b": 3}` → `8`
