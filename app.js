const { json } = require("express");
const express = require("express");

const app = express();

let person1 = [];
let person2= [];
let person3= [];
let person4= [];
let p1 = [0,0,0,0];
let p2 = [0,0,0,0];
let p3 = [0,0,0,0];
let p4 = [0,0,0,0];
let i = 0;

//Function For randomNumber Generation
function randomNumber(){
let randomNumber = Math.floor(Math.random() * 3);
let Choice = "";
if(randomNumber == 0){
        Choice = 'stone';
} else if(randomNumber == 1){
        Choice = 'paper';
} else {
        Choice = 'scissor';
}
return Choice;
};

for(i=0;i<50;i++){
person1.push(randomNumber());
person2.push(randomNumber());
person3.push(randomNumber());
person4.push(randomNumber());
}

let x , y;
//Function to Compare the Values of Each Person and Return true i.e 1 if first Guy won and return 0 if he lose.
function compare(x,y){
        if((x =="stone")&&(y =="scissor")){
                return 1;
        }
        else if((x == "scissor")&&(y == "paper")){
                return 1;
        }
        else if ((x=="paper")&&(y == "stone")){
                return 1;
        }
        else{
                return 0;
        }
};
        let t; 
        let tem = [],tem1=[],tem2=[],tem3=[],tem4=[];

for(i=0;i<50;i++){
        t=compare(person1[i],person2[i]);
        if(t==1){
                p1[1]++;
                t=5;
        }
        else if(t==0){
                p2[0]++;
                t=5;
        }
        t=compare(person1[i],person3[i]);
        if(t==1){
                p1[2]++;
                t=5;
        }
        else if(t==0){
                p3[0]++;
                t=5;
        }
        t=compare(person1[i],person4[i]);
        if(t==1){
                p1[3]++;
                t=5;
        }
        else if(t==0){
                p4[0]++;
                t=5;
        }
        t=compare(person2[i],person3[i]);
        if(t==1){
                p2[2]++;
                t=5;
        }
        else if(t==0){
                p3[1]++;
                t=5;
        }
        t=compare(person2[i],person4[i]);
        if(t==1){
                p2[3]++;
                t=5;
        }
        else if(t==0){
                p4[1]++;
                t=5;       
        }
        t=compare(person3[i],person4[i]);
        if(t==1){
                p3[3]++;
                t=5;
        }
        else if(t==0){
                p4[2]++;   
                t=5;
        }

        var myJSON1=JSON.stringify(p1);
        var myJSON2=JSON.stringify(p2);
        var myJSON3=JSON.stringify(p3);
        var myJSON4=JSON.stringify(p4);
        data = {
          iteration : i+1,
          person_1 : myJSON1,
          person_2 : myJSON2,
          person_3 : myJSON3,
          person_4 : myJSON4
        };
        data1= {
                iteration : i+1,
                person_1 : myJSON1               
        };
        data2= {
                iteration : i+1,
                person_2 : myJSON2               
        };
        data3= {
                iteration : i+1,
                person_3 : myJSON3               
        };
        data4= {
                iteration : i+1,
                person_4 : myJSON4
        };
        tem.push(data);
        tem1.push(data1);
        tem2.push(data2);
        tem3.push(data3);
        tem4.push(data4);
};

app.route("/game")

.get(function(req,res){
    res.send(JSON.stringify(tem));

});

app.route("/game/:person")
.get(function(req,res){
        const temp = req.params.person;
        if(temp =="person1"){
                res.send(JSON.stringify(tem1));
        }
        else if(temp =="person2"){
                res.send(JSON.stringify(tem2));
        }
        else if(temp =="person3"){
                res.send(JSON.stringify(tem3));
        }
        else if(temp =="person4"){
                res.send(JSON.stringify(tem4));
        }
});

app.listen(3000, function(){
        console.log("Server is running at port 3000");
});