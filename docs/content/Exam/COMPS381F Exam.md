# COMPS381F Exam

## Command 

### Git

```shell
git clone www.xxxxxx.git

git add file1 file2
git commit –m "commit commit commit"
git remote add lab01 https://github.com/your-GitHub-ID/lab01.git
git push -u lab01 master
```

### NPM

```shell
npm install #to download and install dependencies
npm start   #to run
node server.js  #同上
```
### IBM Bluemix

```shell
bx api https://api.ng.bluemix.net
bx login
bx target --cf
bx target -o YOUR-ORGANZAITON -s YOUR-SPACE
bx cf push YOUR-SERVER-APP-NAME
```

---

## MongoDB shell commands


```js
db.[collection_name].remove({});
db.[collection_name].deleteMany({}); //效果同上，但notes無教
```

```js
db.[collection_name].find({},{});

//title name is "Yo" 
db.[collection_name].find({title:"Yo"},{});
//title name have "Yo" 
db.[collection_name].find({title:/Yo/},{});

//$elemMatch    :   {}
//$or, $and,$not,$nor   :   []
```


```json
{
    "_id": ObjectId("5bd81a9a3afe250452175524"),
    "title": "A memorable vacation in London",
    "author": "John Smitch",
    "body": "I had a wonderful week with my family in the heart of London",
    "comments": [
        {
            "body": "Very good"
        },
        {
            "body": "Tell us more?"
        }
    ],
    "hidden": false,
    "meta": {
        "votes": 8,
        "favs": 20
    }
}
```
```js
//show the total amount of comments for author "john smith"
db.[collection_name].aggregate([
  {
    $unwind: "$comments"
  },
  {
    $group: {
      _id: "$author",
      total_comment: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      _id: "John Smitch"
    }
  }
]);

// 1
/*{
    "_id": "John Smitch",
    "total_comment": 4
}*/
```

```js
db.collection.update(
   {<query>},
   {<update>}, // $set, $push
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ]
   }
)
```

```js
// 當title是怪物獵人世界評測，rank改成10 !!! **只是頭一個**
db.posts.update({"title":"怪物獵人世界評測"}, {$set: {"rank": 10} });
// 當title是怪物獵人世界評測，rank改成10 !!! **全部改曬**
db.posts.update({"title":"怪物獵人世界評測"}, {$set: {"rank": 10}}, {multi: true});
// 呢個無個"set"字，會變覆蓋
db.posts.update({"title":"怪物獵人世界評測"}, {"rank": 99});
```

|  |   |
| :-: | :-: |
| > | $gt |
| >= | $gte |
| < | $lt |
| <= | $lte |
| = | $eq |
| != | $ne |

## MongoDB Schema

```js
 var blogSchema = new Schema({
    title:  String,
    comments: [{ body: String, date: Date }],
    date: {
        unique : true,
        type: Date, 
        default: Date.now,
        required: true
    },
    
    //default
    //min max
    //enum: ['a', 'b', 'c']
    //match: /text/
    //minlength, maxlength
  
  });
```

## curl


```html
<form action="http://rsosimpleinterest.azurewebsites.net/simpleinterest" method="get">
    Principal: <input type="text" name="p"><br> 
    Rate : <input type="text" name="r"><br> 
    Time : <input type="text" name="t"><br> 
    <input type="submit" value="Submit">
</form>
```


```shell
curl -X GET http://rsosimpleinterest.azurewebsites.net/simpleinterest?p=xxx&r=yyy&t=zzz

#In POST case
curl -d "p=xxx&r=yyy&t=zzz" -X POST http://rsosimpleinterest.azurewebsites.net/simpleinterest

#In json format
curl -d '{"p":"xxx", "r":"yyy", "t":"zzz"}' -H "Content-Type: application/json" -X POST http://rsosimpleinterest.azurewebsites.net/simpleinterest
```

## RESTful server (ejs)

> 跟翻上面 `from` 個action

```js
//get
app.get('/simpleinterest', function(req,res) {
  var result = {};
  result["p"] = req.query.p;
  result["r"] = req.query.r;
  result["t"] = req.query.t;
  result["i"] = result.p * result.r * result.t;
  
  //result as a json object 
  res.json(result); // use 'res.send(result)' is ok
  res.end(); // seems can ignore
});

//post 
app.post('/simpleinterest', function(req,res) {
  var result = {};
  result["p"] = req.body.p;
  result["r"] = req.body.r;
  result["t"] = req.body.t;
  result["i"] = result.p * result.r * result.t;
  
  //result as a json object 
  res.json(result); // use 'res.send(result)' is ok
  res.end(); // seems can ignore
});
```
### mid-term test Q5b

> https://www.jianshu.com/p/1564a3288102

```js
//http://localhost.com/convert?target=AUD&amt=300
function handle_incoming_request(req,res) {
    var parsedURL = url.parse(req.url,true);
    
    var queryAsObject = parsedURL.query; //target=AUD&amt=300
    
    res.writeHead(200,{'Content-Type':'text/text'}); 
    //application/json
    //application/xml
    //text/html
    //text/plain
    
    res.write("xxx");
    res.end();
}
```

### 分別 

> http://www.webpage.idv.tw/study/03/09/method.htm


|  | 儲存方式 | 資料大小 | Security | 例子 |
| :-: | :-: | :-: | :-: | :-: |
| GET | QUERY_STRING, is saved after the url | short, text | low | search |
| POST | message body | big, text/image etc... | high | login |

## MVC

* Model
    * The model represents the data used by an application, and the rules to manipulate that data. This includes `loading data from a database` , and `validating data` before storing it.

* View
    * The view represents the `user interface` of an application. 
    * A view is rendered by the application in response to a request , at which point it is displayed to the user in a web browser (or mobile apps).

* Controller
    * The controller provides the glue `between the model and the view`.
    * Controllers process incoming requests from the web browser, loading data from models and passing that data on to a view for presentation.

### Advantages Of MVC

* Reusable and extendable code.
* Separation of view logic from business logic.
* Facilitate division of work - allow simultaneous work between developers who are responsible for different components (such as UI layer and core logic).
* Easier to maintain.