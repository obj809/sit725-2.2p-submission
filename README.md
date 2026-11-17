# sit725-2.2p-submission

## Run

```bash
npm install
npm start
```

Open http://localhost:3000

## Endpoints

- `GET /add?a=5&b=3` → `8`
- `POST /add` with JSON `{"a": 5, "b": 3}` → `8`

```bash
curl -X POST http://localhost:3000/add \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}'
```
