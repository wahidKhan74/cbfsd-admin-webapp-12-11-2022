mysql> CREATE TABLE ORDERS(
  orderId              INTEGER NOT NULL PRIMARY KEY,
  orderDate            DATETIME DEFAULT CURRENT_TIMESTAMP,
  orderStatus          VARCHAR(50) NOT NULL,
  totalItems           INTEGER NOT NULL,
  itemsSubTotal        INTEGER NOT NULL,
  shipmentCharges      INTEGER NOT NULL,
  totalAmount          INTEGER NOT NULL,
  paymentStatus        INTEGER DEFAULT 0,
  paymentStatusTitle   VARCHAR(255),
  paymentMethod        INTEGER,
  paymentMethodTitle   VARCHAR(255) NOT NULL,
  userId               INTEGER NOT NULL,
  name                 VARCHAR(255) NOT NULL,
  email                VARCHAR(255) NOT NULL,
  contact              BIGINT NOT NULL,
  address              VARCHAR(500) NOT NULL,
  FOREIGN KEY (userId) REFERENCES USERS(userId)
);


mysql> SHOW TABLES;

mysql> DESC ORDERS;