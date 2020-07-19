let MAX_CHAR = 140;

let tweetContents = document.getElementById("tweetArea");
let tweet = [];
let count = 0;
let remain = 140;
const countLetter = () => {
    let numOfText = tweetContents.value.length;
    remain = MAX_CHAR - numOfText;
    if (remain >= 20) {
        document.getElementById("remainArea").innerHTML = `${remain}`


        $('#indicatorContainer').data('radialIndicator').animate(100 - remain * 100 / 140)

    } else if (remain >= 0 && remain < 20) {
        document.getElementById("remainArea").innerHTML = `${remain}`
        document.getElementById("remainArea").style.color = '#00BFFF';
        $('#indicatorContainer').data('radialIndicator').animate(100 - remain * 100 / 140)
    }
    else if (remain < 0) {
        document.getElementById("remainArea").style.color = 'red';
        document.getElementById("remainArea").innerHTML = `${remain}`
    }
}
tweetContents.addEventListener("input", countLetter);

$('#indicatorContainer').radialIndicator({
    barColor: '#87CEEB',
    percentage: true,
    displayNumber: false
});
function renderTweet(tweet) {
    let b = [];
    for (let i = 0; i < tweet.length; i++) {
        if (tweet[i].childreContent == "") {
            b.push(` 
            <div class="row dien-row1"style="  border:1px solid #e6ecf0;">
                <div class="col-1 ">
                    <img src="team-placeholder.png" class="dien-imgUser"
                    style="width:40px;height:40px;">
                </div>
                <div class="col-11">
                    <div style="width:100%;height:100%;">
                        <span><b>Dien</b></span>
                        <span style="color: #e6ecf0">@Dien a few seconds ago</span>
                        <div class="dien-ContentTweet">${tweet[i].content}</div>  
                    </div>
                </div>
                <div class="dien-containerImage">
                <img src="https://cdn.discordapp.com/attachments/733234774646325309/733578515944833035/comment_icon.png" class="dien-imgTweet" />
                <div><i class="fas fa-retweet" style="cursor:pointer" onclick="retweet(${i})"data-toggle="modal" data-target="#myModal"></i></div>
                <div onclick="like(${i})"><i class="far fa-heart"></i>
                </div>
                <div><i class="far fa-trash-alt " style="cursor:pointer" onclick="remove(${i})" ></i></div>
                
                </div>
            </div>
            `);
        } else {
            b.push(` 
            <div class="row dien-row1"style="  border:1px solid #e6ecf0;">
                <div class="col-1 ">
                    <img src="team-placeholder.png" class="dien-imgUser"
                    style="width:40px;height:40px;">
                </div>
                <div class="col-11">
                    <div style="width:100%;height:100%;">
                        <span><b>Dien</b></span>
                        <span style="color: #e6ecf0">@Dien a few seconds ago</span>
                        <div class="dien-ContentTweet">${tweet[i].content}</div>  
                    </div>
                </div>
                <div class="dien-containerImage">
                <img src="https://cdn.discordapp.com/attachments/733234774646325309/733578515944833035/comment_icon.png" class="dien-imgTweet" />
                <div><i class="fas fa-retweet" style="cursor:pointer" onclick="retweet(${i})"data-toggle="modal" data-target="#myModal"></i></div>
                <div onclick="like(${i})"><i class="fas fa-heart"></i>
                </div>
                <div><i class="far fa-trash-alt " style="cursor:pointer" onclick="remove(${i})" ></i></div>
                
                </div>
                <div class="row">
    
    <div class="col-12" style="border:1px solid #e6ecf0;height:100px;width:400px;text-align:center;margin-left:100px;border-radius:40px; word-wrap: break-word;">
        ${tweet[i].childreContent}
    </div>
</div> 
            </div>
            
                    
                  
            `);
        }
    }
    c = b.join("");
    document.getElementById("tweetContent").innerHTML = c;
    }


function like(index) {
    if (tweet[index].islike === true) {
        tweet[index].islike = false;
    } else tweet[index].islike = true;
    let b = [];
    for (let i = 0; i < tweet.length; i++) {
        if (tweet[i].islike == false) {
            b.push(` 
            <div class="row dien-row1"style="  border:1px solid #e6ecf0;">
                <div class="col-1 ">
                    <img src="team-placeholder.png" class="dien-imgUser"
                    style="width:40px;height:40px;">
                </div>
                <div class="col-11">
                    <div style="width:100%;height:100%;">
                        <span><b>Dien</b></span>
                        <span style="color: #e6ecf0">@Dien a few seconds ago</span>
                        <div class="dien-ContentTweet">${tweet[i].content}</div>  
                    </div>
                </div>
                <div class="dien-containerImage">
                <img src="https://cdn.discordapp.com/attachments/733234774646325309/733578515944833035/comment_icon.png" class="dien-imgTweet" />
                <div><i class="fas fa-retweet" style="cursor:pointer" onclick="retweet(${i})"data-toggle="modal" data-target="#myModal"></i></div>
                <div onclick="like(${i})"><i class="far fa-heart"></i>
                </div>
                <div><i class="far fa-trash-alt " style="cursor:pointer" onclick="remove(${i})" ></i></div>
                
                </div>
            </div>
            `);
        } else {
            b.push(` 
            <div class="row dien-row1"style="  border:1px solid #e6ecf0;">
                <div class="col-1 ">
                    <img src="team-placeholder.png" class="dien-imgUser"
                    style="width:40px;height:40px;">
                </div>
                <div class="col-11">
                    <div style="width:100%;height:100%;">
                        <span><b>Dien</b></span>
                        <span style="color: #e6ecf0">@Dien a few seconds ago</span>
                        <div class="dien-ContentTweet">${tweet[i].content}</div>  
                    </div>
                </div>
                <div class="dien-containerImage">
                <img src="https://cdn.discordapp.com/attachments/733234774646325309/733578515944833035/comment_icon.png" class="dien-imgTweet" />
                <div><i class="fas fa-retweet" style="cursor:pointer" onclick="retweet(${i})"data-toggle="modal" data-target="#myModal"></i></div>
                <div onclick="like(${i})"><i class="fas fa-heart"></i>
                </div>
                <div><i class="far fa-trash-alt " style="cursor:pointer" onclick="remove(${i})" ></i></div>
                
                </div>
            </div>
            `);
        }
    }
    c = b.join("");
    document.getElementById("tweetContent").innerHTML = c;


}
function hashtag(id) {
    let d = document.getElementById(id).value;
    let ans = [];
    let h = "";
    for (let i = 0; i < d.length; i++) {
        if (d[i] === "#") {
            h += d[i];
        } else if (d[i] === " ") {
            if (h !== "") {
                ans.push(h);
                h = "";
            }
        } else if (h !== "") { h += d[i] }
    }
    console.log(ans);
    for (i = 0; i < ans.length; i++) {
        let a = ans[i];
        let vt = d.indexOf(a);
        console.log(vt);
        let sub1 = d.substring(0, vt);
        let sub2 = d.substring(vt + a.length + 1, d.length + 1);
        console.log(sub1, "/", sub2);
        d = sub1 + `<a href="#">${ans[i]}</a> ` + sub2;
    }
    return d;
    
}
function dien_tweet() {
    count++;

    document.getElementById("tweetArea").innerHTML = ``;
    // remain=140;
    tweet.push({ content: hashtag("tweetArea"), islike: false, parent, id: count, childreContent: "" });
    document.getElementById("tweetArea").value = "";
    remain = 140;
    $('#indicatorContainer').data('radialIndicator').animate(100 - remain * 100 / 140)
    renderTweet(tweet);
    countLetter();
}

function remove(index) {
    tweet.splice(index, 1);
    renderTweet(tweet);
}
function dien_tweet1() {
    if (remain >= 0) { dien_tweet(); }
}
function dienGet() {
    let a = hashtag("dien-retweetArea");
    let d = a;
    tweet[indexReTweet].childreContent = tweet[indexReTweet].content;
    tweet[indexReTweet].content = d;
    console.log(tweet[indexReTweet].childreContent);
    console.log(tweet[indexReTweet].content);
    renderTweet(tweet);

}
let indexReTweet;
function retweet(index) {
    indexReTweet = index;
    tweet[indexReTweet].islike = false;

}
