const express = require("express");

const app = express();
console.log("dirname: ", __dirname);
// dirname기본적으로 노드가 제공해주는 기능
//폴더의 위치정보를 알려줌
//dirname:  E:\JAEYEON_CHOI\node-workspace\bcrypt_fetch
//절대경로 써도 되고 dirname/현재위치도 가능

//app.set("views", "./views"); 아래꺼랑 같은 거
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

let cnt = 0;
app.get("/non_fetch",(req,res) =>{ 
    cnt++;
    console.log(cnt+"non_fetch 서버 연동");
   res.render("non_fetch", ); //cnt증가한 값을 키벨류로 전달하면 사용가능
});

app.get("/fetch01",(req,res) =>{ 
    cnt++;
    console.log(cnt+"fetch01 서버 연동");
   res.render("fetch01",{cnt}); 
});



app.get("/get_count",(req,res) =>{ 
    cnt++;
    console.log(cnt+"get_count 서버 연동");
    res.json({cnt:cnt}); //데이터를 주는 방식, 키벨류형식으로
});
app.get("/fetch_count",(req,res) =>{ 
    res.render("fetch_count");
});



app.get("/rest",(req,res) =>{ 
    res.render("rest");
});
app.get("/test",(req,res) =>{ 
    res.json("get 데이터를 요청할때!!"); //그전에는 키벨류였지만 이번에는 데이터자체
});
app.post("/test",(req,res) =>{ 
    res.json("post 데이터를 추가할때!!");
});
app.put("/test",(req,res) =>{ 
    res.json("put 데이터를 수정할때!!"); 
});
app.delete("/test",(req,res) =>{ 
    res.json("delete 데이터를 삭제할때!!"); 
});




app.listen(3000,()=>{console.log("3000연동")})