mysql> CREATE TABLE ORDERITEMS(
  orderItemId          INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  orderId              INTEGER,
  productId            INTEGER,
  productCode          VARCHAR(255) NOT NULL,
  productImg           VARCHAR(255) NOT NULL,
  productTitle         VARCHAR(255) NOT NULL,
  productDescription   VARCHAR(255) NOT NULL,
  productCategory      VARCHAR(255) NOT NULL,
  price                INTEGER NOT NULL,
  quantity             INTEGER NOT NULL,
  totalPrice           INTEGER NOT NULL,
  FOREIGN KEY (orderId) REFERENCES ORDERS(orderId),
  FOREIGN KEY (productId) REFERENCES PRODUCTS(productId)
);

mysql> SHOW TABLES;

mysql> DESC ORDERITEMS;