const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');

const mysql = require('mysql2');

const { urlencoded } = require('body-parser');

const errorController = require('./controllers/error');

const ports = process.env.PORT || 3000;

const AccountModel = require('./models/Account');

const router = require("../backend/routes/router");

const userRouter = require("./users/user.router");

var jwt =require('jsonwebtoken');

require("dotenv").config();

app.use(express.json());

app.use(cors());

app.use(bodyParser.json());



// database connection

const db = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'sinhvien',
        port:3306
});

// check database connection:

db.connect(err=>{
    if (err) {console.log(err,'dberr');}
    console.log('datatbase connected...');
})

/****************************************************************************************************/

//app Post Login
app.use("/users", userRouter);

/****************************************************************************************************/

// get all data Mã Lớp
app.get('/account',(req,res)=>{

    let qr = 'select * from account';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result)
        {
            res.send({
                message:'all account',
                data:result
            });
        }

    });

});

/****************************************************************************************************/

// get all data Mã Lớp
app.get('/account',(req,res)=>{

    let qr = 'select * from account';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result)
        {
            res.send({
                message:'all sinhvien lop',
                data:result
            });
        }

    });

});

// get Single data lớp

/****************************************************************************************************/

// get all data Mã Lớp
app.get('/lop',(req,res)=>{

    let qr = 'select * from lop';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result)
        {
            res.send({
                message:'all sinhvien lop',
                data:result
            });
        }

    });

});

// get Single data lớp
app.get('/lop/:ml',(req,res)=>{

    let gMal = req.params.ml;

    let qr = `select * from lop where ml = '${gMal}'`;

    db.query(qr,(err,result)=>{


        if(err) {console.log(err);}
        
        if(result)
        {
            res.send({
                message:'get single lop data',
                data:result    
            });
        }
        else{
                    res.send({
                        message:'data not found'
                    });
        }
    });
});

// Create lop data

app.post('/lop',(req,res)=>{

    console.log(req.body,'createdata');

    let mL = req.body.ml;
    let mK = req.body.mk;

    let qr = `insert into lop(ml,mk) 
                values('${mL}','${mK}')`;

    db.query(qr,(err,result)=>{

        if(err){console.log(err);}
        console.log(result,'result')
        res.send({
            message:'data inserted'           
        });
    });            
});

//update single data
app.put('/lop/:ml',(req,res)=>{



console.log(req.body,'updatedata lop ');

    let mL = req.body.ml;
    let MaK = req.params.mk;
    

    let qr = `update lop set mk = '${MaK}'
    where ml = '${mL}'`;

    db.query(qr,(err,result)=>{

        if(err) {console.log(err);}

        res.send({
            message:'data lop updated'
        });
    });
});

//delete single data

app.delete('/lop/:ml', (req,res)=>{
    
let qML = req.params.ml;
let qr = `delete from lop where ml = '${qML}'`;
db.query(qr,(err, result)=>{
    if(err) {console.log(err);}

    res.send(
       {
           message:'data lop deleted'
       } 
    )
});

});

//************************************************************************************* */

    // get all data Bậc đào tạo
app.get('/bacdaotao',(req,res)=>{

    let qr = 'select * from bacdaotao';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result)
        {
            res.send({
                message:'all bậc đào tạo',
                data:result
            });
        }

    });

});

//************************************************************************************* */
//get all data sinhvien

app.get('/sinhvien',(req,res)=>{

    let qr = 'select * from sinhvien';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result)
        {
            res.send({
                message:'all sinhvien data',
                data:result
            });
        }

    });

});

// get single data sinhvien
app.get('/sinhvien/:mssv',(req,res)=>{
    let gMaSV = req.params.mssv;
 
    let qr = `select * from sinhvien where mssv = ${gMaSV}`; 
 
    db.query(qr,(err,result)=>{
        if(err) {
            console.log(err);
        }
        if(result) {
             res.send({
                 message: 'get single data',
                 data:result
             });
        }
        else {
            res.send({
                message: 'data not found'
            });  
        }
    })
 });

// create data sinhvien

app.post('/sinhvien',(req,res)=>{

    console.log(req.body,'createdata');

    let gMaSV = req.body.mssv;
    let Name = req.body.ten;
    let Lop = req.body.ml;
    let Khoa = req.body.mk;
    let gt = req.body.gioitinh;
    let dc = req.body.diachi;
    let Gmail = req.body.gmail;
    let GhiChu = req.body.ghichu;
    let NoiSinh = req.body.noisinh;
    let BDT = req.body.bdt;
    let STC = req.body.stc;

    let qr = `insert into sinhvien(mssv,ten,ml,mk,gioitinh,diachi,gmail,ghichu,noisinh,bdt,stc) 
                values('${gMaSV}','${Name}','${Lop}','${Khoa}','${gt}','${dc}','${Gmail}','${GhiChu}','${NoiSinh}','${BDT}','${STC}')`;

    console.log(qr,'qr')
    db.query(qr,(err,result)=>{

        if(err){console.log(err);}
        console.log(result,'result')
        res.send({
            message:'Bạn đã thành công',
        })
    });           

});


//update single data sinhvien

app.put('/sinhvien/:mssv',(req,res)=>{

    console.log(req.body,'Updatedata SV');

    let gMaSV = req.body.mssv;
    let Name = req.body.ten;
    let Lop = req.body.ml;
    let Khoa = req.body.mk;
    let gt = req.body.gioitinh;
    let dc = req.body.diachi;
    let Gmail = req.body.gmail;
    let GhiChu = req.body.ghichu;
    let NoiSinh = req.body.noisinh;
    let BDT = req.body.bdt;
    let STC = req.body.stc;

    let qr = `update sinhvien set ten = '${Name}', ml = '${Lop}', mk = '${Khoa}', gioitinh = '${gt}', diachi = '${dc}', gmail = '${Gmail}', ghichu = '${GhiChu}',noisinh = '${NoiSinh}',bdt = '${BDT}',stc = '${STC}'
            where mssv = '${gMaSV}'`;

    db.query(qr,(err,result)=>{

            if(err) {console.log(err);}

            res.send({
                message:'data update'
            });
    });         

});


// delete sigle data sinhvien

app.delete('/sinhvien/:mssv',(req,res)=>{

        let qMaSV = req.params.mssv;

        let qr = `delete from sinhvien where mssv = '${qMaSV}'`;
        db.query(qr,(err, result)=>{
            if(err) {console.log(err);}

            res.send(
                {
                    message:'data deleted'
                }
            )
        });
});

/****************************************************************************************************/

//get all data Khoa

app.get('/khoa',(req,res)=>{

    let qr = 'select * from khoa';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result)
        {
            res.send({
                message:'all khoa data',
                data:result
            });
        }

    });

});

// get Single data Khoa
app.get('/khoa/:mk',(req,res)=>{

        let gMak = req.params.mk;

        let qr = `select * from khoa where mk = '${gMak}'`;

        db.query(qr,(err,result)=>{


            if(err) {console.log(err);}
            
            if(result)
            {
                res.send({
                    message:'get single Khoa data',
                    data:result    
                });
            }
            else{
                        res.send({
                            message:'data not found'
                        });
            }
        });
 });

 // Create khoa data

 app.post('/khoa',(req,res)=>{

        console.log(req.body,'createdata');

        let mK = req.body.mk;
        let tenKhoa = req.body.tenkhoa;
        let Lop = req.body.solop;

        let qr = `insert into khoa(mk,tenkhoa,solop) 
                    values('${mK}','${tenKhoa}','${Lop}')`;

        db.query(qr,(err,result)=>{

            if(err){console.log(err);}
            console.log(result,'result')
            res.send({
                message:'data inserted'           
            });
        });            
 });

//update single data
app.put('/khoa/:mk',(req,res)=>{

    console.log(req.body,'updatedata khoa ');

        let MaK = req.params.mk;
        let tenKhoa = req.body.tenkhoa;
        let Lop = req.body.solop;

        let qr = `update khoa set tenkhoa = '${tenKhoa}', solop = '${Lop}'
        where mk = '${MaK}'`;

        db.query(qr,(err,result)=>{

            if(err) {console.log(err);}

            res.send({
                message:'data khoa updated'
            });
        });
});

//delete single data

app.delete('/khoa/:mk', (req,res)=>{
        
    let qMK = req.params.mk;
    let qr = `delete from khoa where mk = '${qMK}'`;
    db.query(qr,(err, result)=>{
        if(err) {console.log(err);}

        res.send(
           {
               message:'data khoa deleted'
           } 
        )
    });

});

/****************************************************************************************************/

//get all data Môn học

app.get('/monhoc',(req,res)=>{

    let qr = 'select * from monhoc';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result)
        {
            res.send({
                message:'all monhoc data',
                data:result
            });
        }

    });

});

// get Single data Môn học
app.get('/monhoc/:mamh',(req,res)=>{

        let gMaMh = req.params.mamh;

        let qr = `select * from monhoc where mamh = '${gMaMh}'`;

        db.query(qr,(err,result)=>{


            if(err) {console.log(err);}
            
            if(result)
            {
                res.send({
                    message:'get single Môn học data',
                    data:result    
                });
            }
            else{
                        res.send({
                            message:'data not found'
                        });
            }
        });
 });

 // Create Môn học data

 app.post('/monhoc',(req,res)=>{

        console.log(req.body,'createdata');

        let MaMH = req.body.mamh;
        let Tenmh = req.body.tenmh;
        let MK = req.body.mk;
        let SLH = req.body.soLopHoc;
        let Stc = req.body.stc;

        let qr = `insert into monhoc(mamh,tenmh,mk,soLopHoc,stc) 
                    values('${MaMH}','${Tenmh}','${MK}','${SLH}','${Stc}')`;

        db.query(qr,(err,result)=>{

            if(err){console.log(err);}
            console.log(result,'result')
            res.send({
                message:'data inserted'           
            });
        });            
 });

//update single data
app.put('/monhoc/:mamh',(req,res)=>{



    console.log(req.body,'updatedata monhoc ');

    let MaMH = req.body.mamh;
    let Tenmh = req.body.tenmh;
    let MK = req.body.mk;
    let SLH = req.body.soLopHoc;
    let Stc = req.body.stc;

        let qr = `update monhoc set tenmh = '${Tenmh}', mk = '${MK}', soLopHoc = '${SLH}', stc = '${Stc}'
        where mamh = '${MaMH}'`;

        db.query(qr,(err,result)=>{

            if(err) {console.log(err);}

            res.send({
                message:'data Monhoc updated'
            });
        });
});

//delete single data

app.delete('/monhoc/:mamh', (req,res)=>{
        
    let qMaMH = req.params.mamh;
    let qr = `delete from monhoc where mamh = '${qMaMH}'`;
    db.query(qr,(err, result)=>{
        if(err) {console.log(err);}

        res.send(
           {
               message:'data Monhoc deleted'
           } 
        )
    });

});

/****************************************************************************************************/

//get all data diem 

app.get('/diem',(req,res)=>{

    let qr = 'select * from diem';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result)
        {
            res.send({
                message:'all diem data',
                data:result
            });
        }

    });

});

// get Single data diem
app.get('/diem/:mssv',(req,res)=>{

        let gMssv = req.params.mssv;

        let qr = `select * from diem where mssv = '${gMssv}'`;

        db.query(qr,(err,result)=>{


            if(err) {console.log(err);}
            
            if(result)
            {
                res.send({
                    message:'get single diem data',
                    data:result    
                });
            }
            else{
                        res.send({
                            message:'data not found'
                        });
            }
        });
 });

 // Create diem data

 app.post('/diem',(req,res)=>{

        console.log(req.body, 'createData');

        let msSV = req.body.mssv;
        let tenSV = req.body.ten;
        let mK = req.body.mk;
        let mMH = req.body.mamh;
        let Diem = req.body.diem;
        let STC = req.body.stc;

        let qr = `insert into diem(mssv,ten,mk,mamh,diem,stc) 
                    values('${msSV}','${tenSV}','${mK}','${mMH}','${Diem}','${STC}')`;
        
        db.query(qr, (err,result)=>{

            if(err){console.log(err);}
            console.log(result,'result')
            res.send({
                message:'data inserted',
            });
        });            

 });

//update single data
app.put('/diem/:mssv',(req,res)=>{



    console.log(req.body,'updatedata Điểm ');

        let msSV = req.body.mssv;
        let tenSV = req.body.ten;
        let mK = req.body.mk;
        let mMH = req.body.mamh;
        let Diem = req.body.diem;
        let STC = req.body.stc;

        let qr = `update diem set ten = '${tenSV}', mk = '${mK}', mamh = '${mMH}', diem = '${Diem}',stc = '${STC}'
        where mssv = '${msSV}'`;

        db.query(qr,(err,result)=>{

            if(err) {console.log(err);}

            res.send({
                message:'data điểm updated'
            });
        });
});

//delete single data

app.delete('/diem/:mssv', (req,res)=>{
        
    let qMSSV = req.params.mssv;
    let qr = `delete from diem where mssv = '${qMSSV}'`;
    db.query(qr,(err, result)=>{
        if(err) {console.log(err);}

        res.send(
           {
               message:'data điểm deleted'
           } 
        )
    });

});

/****************************************************************************************************/

//get all data giaovien

app.get('/giaovien',(req,res)=>{

    let qr = 'select * from giaovien';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result)
        {
            res.send({
                message:'all giáo viên data',
                data:result
            });
        }

    });

});

// get Single data giáo viên
app.get('/giaovien/:mgv',(req,res)=>{

        let gMgv = req.params.mgv;

        let qr = `select * from giaovien where mgv = '${gMgv}'`;

        db.query(qr,(err,result)=>{


            if(err) {console.log(err);}
            
            if(result)
            {
                res.send({
                    message:'get single giáo viên data',
                    data:result    
                });
            }
            else{
                        res.send({
                            message:'data not found'
                        });
            }
        });
 });

 // Create giáo viên data

 app.post('/giaovien',(req,res)=>{

        console.log(req.body, 'createData');

        let mGV = req.body.mgv;
        let tenGV = req.body.tengv;
        let tenKhoa = req.body.mk;
        let tenMH = req.body.mamh;
        let Lop = req.body.ml;

        let qr = `insert into giaovien(mgv,tengv,mk,mamh,ml) 
                    values('${mGV}','${tenGV}','${tenKhoa}','${tenMH}','${Lop}')`;
        
        db.query(qr, (err,result)=>{

            if(err){console.log(err);}
            console.log(result,'result')
            res.send({
                message:'data inserted',
            });
        });            

 });

//update single data
app.put('/giaovien/:mgv',(req,res)=>{



    console.log(req.body,'updatedata Giáo viên ');

    let mGV = req.body.mgv;
        let tenGV = req.body.tengv;
        let maKhoa = req.body.mk;
        let mamH = req.body.mamh;
        let Lop = req.body.ml;

        let qr = `update giaovien set tengv = '${tenGV}', mk = '${maKhoa}', mamh = '${mamH}', ml = '${Lop}'
        where mgv = '${mGV}'`;

        db.query(qr,(err,result)=>{

            if(err) {console.log(err);}

            res.send({
                message:'data giáo viên updated'
            });
        });
});

//delete single data

app.delete('/giaovien/:mgv', (req,res)=>{
        
    let mGV = req.params.mgv;
    let qr = `delete from giaovien where mgv = '${mGV}'`;
    db.query(qr,(err, result)=>{
        if(err) {console.log(err);}

        res.send(
           {
               message:'data giáo viên deleted'
           } 
        )
    });

});


app.listen(3000,()=>{
    console.log('sever running.......');
});
