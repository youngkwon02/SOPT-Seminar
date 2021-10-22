const express = require('express'); // Express 모듈 불러오기
const router = express.Router();  // Router() 미들웨어 불러오기

router.get("/", (req, res) => { // GET method로 api/ 요청이 들어옴
  const result = {  // 해당 로직을 수행
    status: 200,
    message: "api~!",
  };
  res.status(200).send(result);
})

module.exports = router;