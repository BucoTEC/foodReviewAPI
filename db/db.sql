

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

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id  BIGINT NOT NULL REFERENCES  restaurants(id),
    name VARCHAR(50),
    review text NOT NULL,
    rating INT NOT NULL check (rating >=1 and rating <=5)
);

INSERT INTO reviews (restaurant_id, name, review, rating)  values (1, 'buco', 'ovo je moj test', 3);