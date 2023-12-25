CREATE USER calculator_user WITH PASSWORD 'calculator_user_password';
CREATE DATABASE calculator_db;
GRANT ALL ON SCHEMA public TO calculator_user;
ALTER DATABASE calculator_db OWNER TO calculator_user;