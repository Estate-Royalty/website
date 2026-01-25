# Database Setup

## Prerequisites
- PostgreSQL database (local or cloud)
- Database connection URL

## Setup Instructions

1. **Create a PostgreSQL database:**
   ```bash
   createdb estate_royalty
   ```

2. **Set your database URL in `.env`:**
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/estate_royalty
   ```

3. **Run the schema SQL:**
   ```bash
   psql -d estate_royalty -f database/schema.sql
   ```

   Or using a connection string:
   ```bash
   psql $DATABASE_URL -f database/schema.sql
   ```

## Tables Created

### `property_assessments`
Stores submissions from property owners interested in tokenization.

### `investor_waitlist`
Stores submissions from investors joining the waitlist.

## Environment Variables

Add to your `.env` file:
```
DATABASE_URL=postgresql://username:password@host:port/database
```

## Testing

You can test the API endpoints:
- POST `/api/assessment` - Submit property assessment
- POST `/api/waitlist` - Join investor waitlist
