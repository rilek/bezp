export default {
  port: process.env.PORT || 7559,
  host: "localhost",
  poolFilePath: "./resources/questions.csv",
  questionPrefix: "Pytanie",
  cellSeparator: ";",
  rowSeparator: "\n",
  isDev: true,
  dbConfig: {
    host: "192.168.0.103",
    user: "us",
    password: "",
    database: "pool_db"
  }
};
