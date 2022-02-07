CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    price INT,
    on_sale boolean
);

CREATE TABLE restaurants (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check( price_range >= 1  and price_range <= 5)
);


INSERT INTO restaurants ( name, location, price_range) values ( 'mcDonalds', 'Sarajevo', 3);
INSERT INTO restaurants ( name, location, price_range) values ( 'mahir', 'Sarajevo', 2);
INSERT INTO restaurants ( name, location, price_range) values ( 'zeljo', 'Sarajevo', 5);
INSERT INTO restaurants ( name, location, price_range) values ( 'mcDonalds', 'Mostar', 3);

