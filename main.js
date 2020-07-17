let MAX_CHAR = 140;

let tweetContents = document.getElementById("tweetArea");


const countLetter = () => {
    let numOfText = tweetContents.value.length;
    let remain = MAX_CHAR - numOfText;
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
function renderTweet() {
    document.getElementById("tweetContent").innerHTML = ` 
    <div class="row">
        <div class="col-1 ">
            <img src="team-placeholder.png" class="dien-imgUser"
            style="width:40px;height:40px;">
        </div>
        <div class="col-11">
            <div style="width:100%;height:100%;">
                <span><b>Dien</b></span>
                <span style="color: #e6ecf0">@Dien a few seconds ago</span>
                <div class="dien-ContentTweet">${ tweetContents.value}</div>  
            </div>
        </div>
        <div class="dien-containerImage">
        <img src="https://cdn.discordapp.com/attachments/733234774646325309/733578515944833035/comment_icon.png" class="dien-imgTweet" />
        <img src="https://cdn.discordapp.com/attachments/733234774646325309/733578517727412234/retweet_icon.png" class="dien-imgTweet" />
        <div onclick="retweet()"><img src="https://cdn.discordapp.com/attachments/733234774646325309/733578519719968769/like_icon.png" class="dien-imgTweet" /></div>
        <img src="https://cdn.discordapp.com/attachments/733234774646325309/733578512463560724/via_icon.png" class="dien-imgTweet" />
        <button type="button" class="btn btn-primary dien-btn">Primary</button>
        </div>
    </div>
    `
// console.log(tweetContents.value);
}
function dien_tweet(){
    renderTweet();
}
