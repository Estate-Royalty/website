-- Estate Royalty Database Schema

-- Property Assessment Submissions Table
CREATE TABLE IF NOT EXISTS property_assessments (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    property_location VARCHAR(255),
    property_type VARCHAR(50),
    property_value VARCHAR(50),
    monthly_rental_income VARCHAR(50),
    occupancy_rate VARCHAR(50),
    years_owned VARCHAR(50),
    current_financing VARCHAR(50),
    tokenization_goals TEXT,
    timeline VARCHAR(50),
    additional_info TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Investor Waitlist Table
CREATE TABLE IF NOT EXISTS investor_waitlist (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    country VARCHAR(100),
    investment_experience VARCHAR(50),
    investment_amount VARCHAR(50),
    preferred_vault VARCHAR(50),
    investment_goals TEXT,
    how_did_you_hear VARCHAR(50),
    additional_info TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_assessments_email ON property_assessments(email);
CREATE INDEX IF NOT EXISTS idx_assessments_created_at ON property_assessments(created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON investor_waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON investor_waitlist(created_at);
