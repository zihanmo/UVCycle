CREATE TABLE Users (
    userid int NOT NULL AUTO_INCREMENT,
    firstname varchar(255),
    lastname varchar(255),
    password varchar(255),
    email varchar(255),
    sensor varchar(255),
    PRIMARY KEY (userid)
);

CREATE TABLE Workout (
    userid int NOT NULL,
    history int NOT NULL,
    duration int,
    PRIMARY KEY (userid, historyid),
    FOREIGN KEY (userid) REFERENCES Users(userid),
    FOREIGN KEY (historyid) REFERENCES History(historyid)
);