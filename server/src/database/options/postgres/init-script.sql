CREATE USER calculator_user WITH PASSWORD 'calculator_user_password';
CREATE DATABASE calculator_db;
ALTER DATABASE calculator_db OWNER TO calculator_user;
ALTER DATABASE calculator_db OWNER TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO calculator_user;
