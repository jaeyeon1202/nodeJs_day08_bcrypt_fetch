 const express = require("express");
 const bcrypt = require("bcrypt");
 const app = express();

 app.get("/",(req,res) =>{ //req.body를 통해서 해당하는 값을 꺼내온다
    const pwd = "test"; //bcrypt를 통해 암호화 처리를 해서 가져온다.
    const changePwd = bcrypt.hashSync(pwd,10); //암호화(pwd,10)=>10:암호화의 수준, 10의 수준으로 암호화한다. 
    //솔트값 수가 높아질수록 높은 수준의 암호
    //바로바로 처리가 됨, 더 높은 수준이 되면 암호화 때문에 처리 속도가 느려진
    //보통 10을 많이 줌.
    
    console.log("평문 비밀번호: ", pwd);
    console.log("변경 비밀번호: ", changePwd); //이거로 저장한다.
    
    //"test"와 암호화처리된 test는 일치하니 않는다.
    console.log("비밀번호 비교: ", pwd == changePwd); //flase
    const result = bcrypt.compareSync(pwd, changePwd); //true
    //compareSync비교해주는 기능 (평문, 암호화문) => 순서 바뀌면 안됨
    console.log("비밀번호 비교 result: ", result);

    res.send("비밀번호"); //기본경로 확인
 });

 app.listen(3000,()=>{console.log("3000연동")})