# ShopFlow API

```
Client ──────────► ShopFlow API ──────────► PostgreSQL
                          │
                    ┌─────┴─────┐
                    │           │
               Services      Routes
```

## Domain Areas

| Domain   | Owns                                    |
|----------|-----------------------------------------|
| users    | profiles, authentication, preferences   |
| products | catalog, inventory, categories         |
| orders   | transactions, cart, order history       |