import * as Log4js from "log4js";

// Log4js.configure('./filename');
Log4js.configure({
  appenders: {
    // 標準出力
    stdout: {
      type: "stdout"
    },
    // ファイル出力
    system: {
      type: "dateFile",
      // プロジェクトルートディレクトリを起点とした相対パスで解釈される
      // filename: path.join(__dirname, "../logs/system.log"),
      filename: "./logs/system.log",
      // `filename` の後ろにこのパターンでファイル名が付けられる
      pattern: ".yyyy-MM-dd",
      // `true` を指定すると、ローテートしたファイル名の末尾に拡張子が付く
      keepFileExt: true,
      // `true` を指定すると、ローテートしたファイルを .gz 形式で圧縮してくれる
      compress: true,
      // この数以上にログファイルが溜まると、古いファイルを削除してくれる
      daysToKeep: 5
    }
  },
  categories: {
    // 標準出力とファイルの両方に出力する
    default: {
      appenders: ["stdout", "system"],
      level: "info"
    }
  }
});
const logger = Log4js.getLogger();
logger.info("logger initialized.");

export default logger;
