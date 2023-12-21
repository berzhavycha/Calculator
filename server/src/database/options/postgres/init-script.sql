CREATE USER calculator_user WITH PASSWORD 'calculator_user_password';

CREATE DATABASE calculatordb;
GRANT ALL PRIVILEGES ON DATABASE calculatordb TO calculator_user;

\c calculatordb;

CREATE TABLE IF NOT EXISTS calculation_expression (
  id SERIAL PRIMARY KEY,
  expression VARCHAR(255) NOT NULL,
  result INTEGER NOT NULL,
  last_request_at TIMESTAMP NOT NULL
)