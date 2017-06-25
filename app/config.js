export default {
  port: process.env.PORT || 7559,
  host: "localhost",
  poolFilePath: "./resources/questions.csv",
  questionPrefix: "Pytanie",
  cellSeparator: ";",
  rowSeparator: "\n",
  isDev: false,
  dbConfig: {
    host: "192.168.137.1",
    user: "us",
    password: "",
    database: "pool_db"
  }
};
