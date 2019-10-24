CREATE TABLE Users (
    userid int NOT NULL AUTO_INCREMENT,
    firstname varchar(255),
    lastname varchar(255),
    password varchar(255),
    email varchar(255),
    sensorid int(11),
    PRIMARY KEY (userid)
);

CREATE TABLE History (
    `timestamp` timestamp,
    uvindex int(11),
    sensorid int(11),
    history_id int(11),
    PRIMARY KEY (`timestamp`, sensorid, history_id)
)