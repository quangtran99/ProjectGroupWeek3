let MAX_CHAR = 140;

let tweetContents = document.getElementById("tweetArea");
let tweet=[];
let count=0;
let remain =140;
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
function renderTweet(list) {
    let b=list.map((item, index) =>` 
    <div class="row dien-row1"style="  border:1px solid #e6ecf0;">
        <div class="col-1 ">
            <img src="team-placeholder.png" class="dien-imgUser"
            style="width:40px;height:40px;">
        </div>
        <div class="col-11">
            <div style="width:100%;height:100%;">
                <span><b>Dien</b></span>
                <span style="color: #e6ecf0">@Dien a few seconds ago</span>
                <div class="dien-ContentTweet">${item.content}</div>  
            </div>
        </div>
        <div class="dien-containerImage">
        <img src="https://cdn.discordapp.com/attachments/733234774646325309/733578515944833035/comment_icon.png" class="dien-imgTweet" />
        <div><i class="fas fa-retweet" style="cursor:pointer" onclick="retweet(${index})"></i></div>
        <img src="https://cdn.discordapp.com/attachments/733234774646325309/733578519719968769/like_icon.png" class="dien-imgTweet" />
        <div><i class="far fa-trash-alt " style="cursor:pointer" onclick="remove(${index})"></i></div>
        
        </div>
    </div>
    `).join("");
    
    document.getElementById("tweetContent").innerHTML = b;
// console.log(tweetContents.value);
}

function dien_tweet(){
    count++;
    document.getElementById("tweetArea").innerHTML=``;
   // remain=140;
    tweet.push({content:tweetContents.value,islike:false,parent,id:count});
    console.log(tweet);
    document.getElementById("tweetArea").value = "";
   remain=140;
    $('#indicatorContainer').data('radialIndicator').animate(100 - remain * 100 / 140)
    renderTweet(tweet);
    countLetter();
}

function remove(index) {
     tweet.splice(index,1);
    renderTweet(tweet);
}