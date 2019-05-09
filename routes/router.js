const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
/*注册路由 */
router.post('/register',function(req,res){
    if(!req.body.phone){
        res.send({code:401,msg:'phone required'});
        return;
    }
    if(!req.body.upwd){
        res.send({code:402,msg:'upwd required'});
        return;
    }
	/*将用户数据插入数据库*/ 
    pool.query("insert into al_user set ?",[req.body],(err,result)=>{
		if(err)throw err;
        res.send(result);
    })
})
/* //登录接口；
router.post("user_register",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send("用户名不能为空");
	}
	if(!$upwd){
		res.send("请输入合法的密码");
	}
	pool.query("select uname,upwd from al_user",(err,result)=>{
		if(err)throw err;
		if(req.body>0){
			res.send("注册成功");
		}
	});
});

*/



module.exports=router;
