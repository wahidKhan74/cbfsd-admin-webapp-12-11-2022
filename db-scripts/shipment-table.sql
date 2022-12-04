mysql> CREATE TABLE SHIPMENTS(
  shipmentId           INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  orderId              INTEGER,
  shipmentStatus       INTEGER,
  shipmentTitle        VARCHAR(255),
  shipmentDate         DATETIME DEFAULT CURRENT_TIMESTAMP,
  expectedDeliveryDate DATETIME,
  shipmentMethod       VARCHAR(255),
  shipmentCompany      VARCHAR(255),
  FOREIGN KEY (orderId) REFERENCES ORDERS(orderId)
);

mysql> SHOW TABLES;

mysql> DESC SHIPMENTS;