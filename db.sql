CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    price INT,
    on_sale boolean
);

CREATE TABLE restaurants (
    id INT,
    name VARCHAR(50),
    location VARCHAR(50),
    price_range INT
)


INSERT INTO restaurants (id, name, location, price_range) values (123, 'mcDonalds', 'Sarajevo', 3);