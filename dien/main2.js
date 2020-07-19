let MAX_CHAR = 140;

let tweetContents = document.getElementById("tweetArea");
let tweet = [];
let count = 0;
let hs=[];
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
            b.unshift(` 
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
            b.unshift(` 
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
                <div class="row dien-row1"style="  border:1px solid #e6ecf0; width:520px;border-radius:40px;text-align:left;margin-left:33px;">
                <div class="col-1 ">
                    <img src="team-placeholder.png" class="dien-imgUser"
                    style="width:40px;height:40px;">
                </div>
                <div class="col-11">
                    <div style="width:100%;height:100%;">
                        <span><b>Dien</b></span>
                        <span style="color: #e6ecf0">@Dien a few seconds ago</span>
                        <div class="dien-ContentTweet">${tweet[i].childreContent}</div>  
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
                
            </div>
            
                    
                  
            `);
        }
    }
    b.push(`<hr />
    <!-- lam follow news  -->
    <div id="contentArea "style="  border:1px solid #e6ecf0;">

        <div class="row mx-auto t-row-style" >
            <div class="col-1  ">
                <img src="/t-img/cnn logo.jpg" alt="avatar" style="width:45px;">
            </div>
            <div class="col-11 ">
                <div class="d-flex justify-content-between">
                    <div>
                        <span class="t-title-style" style="font-size: 15px;"> CNN</span>
                        <span>
                            <!-- chen icon verify -->
                            <img src="/t-img/verify icon.jpg" alt="verify icon" style="width:17px;">
                        </span>
                        <span class="text-muted">@CNN . 6h</span>
                    </div>
                    <div>
                        <span class="d-flex justify-content-end ">
                            <img src="t-img/drop down icon.png" style="width:15px;">
                        </span>
                    </div>

                </div>
                <div>
                    <!-- news detail -->
                    <p style="width:520px;">CNN's Don Lemon talks to journalist Jemele Hill about an
                        op-ed
                        penned by former NBA
                        star Kareem Abdul-Jabbar on anti-semitism in sports and Hollywood.</p>
                    <!-- hashtag -->
                    <a href="https://www.youtube.com/results?search_query=%23CNN">#CNN</a>
                    <a href="https://www.youtube.com/results?search_query=%23News">#News</a>
                </div>
                <div style="border-radius: 15px; margin-bottom: 10px;">
                    <!-- chen video -->
                    <iframe width="540" height="300"
                        src="https://www.youtube.com/embed/XcAcXoISRU8?autoplay=1" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>

            </div>
            <!-- function bar -->
            <div class="d-flex justify-content-around" style="margin: 0px; width:100%;">
                <div>
                    <img class="t-function-icon" src="t-img/comment icon.png" alt="function icon">
                    <span class="ml-3">9</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/retweet icon.png" alt="function icon">
                    <span class="ml-3">10</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/like icon.png" alt="function icon">
                    <span class="ml-3">15</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/via icon.png" alt="function icon">
                    <span class="ml-3">20</span>
                </div>
            </div>
        </div>



        <div class="row mx-auto t-row-style">
            <div class="col-1  ">
                <img src="/t-img/abc news icon.png" alt="avatar" style="width:45px;">
            </div>
            <div class="col-11 ">
                <div class="d-flex justify-content-between">
                    <div>
                        <span class="t-title-style" style="font-size: 15px;">ABC News</span>
                        <span>
                            <!-- chen icon verify -->
                            <img src="/t-img/verify icon.jpg" alt="verify icon" style="width:17px;">
                        </span>
                        <span class="text-muted">@realABCNews . Jul 19
                        </span>
                    </div>
                    <div>
                        <span>
                            <img src="t-img/drop down icon.png" style="width:15px;">
                        </span>
                    </div>


                </div>
                <div>
                    <!-- news detail -->
                    <p style="width:520px;">MORE:Joe Biden has advanced in the Midwest against Pres.
                        Trump,
                        from a dead heat to a
                        17-point lead. It’s close in the South, 50-44%, Biden-Trump, compared with a
                        13-point Trump lead in late March. <a
                            href="https://abcnews.go.com/Politics/pandemic-surge-damages-trump-boosting-bidens-white-house/story?id=71779431">https://abcn.ws/2CSHN4r</a>
                    </p>
                    <!-- hashtag -->

                </div>


                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">BREAKING: Joe Biden opens up a 15-point lead over Pres. Trump
                        in
                        a new <a href="https://twitter.com/ABC?ref_src=twsrc%5Etfw">@ABC</a>
                        News/Washington
                        Post poll, ahead 55-40% among registered voters. That advantage narrows to
                        54-44%
                        among likely voters. <a href="https://t.co/wo5UBbbf8g">https://t.co/wo5UBbbf8g</a>
                    </p>&mdash; ABC News (@ABC) <a
                        href="https://twitter.com/ABC/status/1284700161189588993?ref_src=twsrc%5Etfw">July
                        19, 2020</a>
                </blockquote>

            </div>
            <div class="d-flex justify-content-around" style="margin: 0px; width:100%; padding-top: 5px;">
                <div>
                    <img class="t-function-icon" src="t-img/comment icon.png" alt="function icon">
                    <span class="ml-3">14</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/retweet icon.png" alt="function icon">
                    <span class="ml-3">69</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/like icon.png" alt="function icon">
                    <span class="ml-3">144</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/via icon.png" alt="function icon">
                    <span class="ml-3">49</span>
                </div>
            </div>


        </div>
    </div>

    <div class="row mx-auto t-row-style" style="  border:1px solid #e6ecf0;">

        <div class="col-1">
            <i style="font-size: 40px;" class="fas fa-user-circle"></i>
        </div>
        <div class="col-11 ">
            <div class="d-flex justify-content-between">
                <div>
                    <span class="t-title-style" style="font-size: 15px;">Dien's Tweet</span>
                    <span>
                        <!-- chen icon verify -->
                        <!-- <img src=".." alt="verify icon" style="width:17px;"> -->
                    </span>
                    <span class="text-muted"> . 8 h
                    </span>
                </div>
                <div>
                    <span>
                        <img src="t-img/drop down icon.png" style="width:15px;">
                    </span>
                </div>

            </div>
            <div>
                <!-- news detail -->
                <p>My memories
                    <a href="#">@adele</a>
                    Fantastic news
                    <a href="#">#adele</a></p>
                <!-- hashtag -->

            </div>
            <div>
                <!-- chen video live adele-->
                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">For further details please go to <a
                            href="https://t.co/l21mEjQSCp">https://t.co/l21mEjQSCp</a> <a
                            href="https://t.co/bK00qJ5iIC">pic.twitter.com/bK00qJ5iIC</a></p>&mdash;
                    Adele (@Adele) <a
                        href="https://twitter.com/Adele/status/801365088380796929?ref_src=twsrc%5Etfw">November
                        23, 2016</a>
                </blockquote>

            </div>
        </div>
        <div class="d-flex justify-content-around" style="margin: 0px; width:100%; padding-right: 5px;">
            <div>
                <img class="t-function-icon" src="t-img/comment icon.png" alt="function icon">
                <span class="ml-3">4</span>
            </div>
            <div>
                <img class="t-function-icon" src="/t-img/retweet icon.png" alt="function icon">
                <span class="ml-3">13</span>
            </div>
            <div>
                <img class="t-function-icon" src="/t-img/like icon.png" alt="function icon">
                <span class="ml-3">50</span>
            </div>
            <div>
                <img class="t-function-icon" src="/t-img/via icon.png" alt="function icon">
                <span class="ml-3">20</span>
            </div>
        </div>
    </div>`);
    c = b.join("");
    console.log(hs);
    document.getElementById("tweetContent").innerHTML = c;
}


function like(index) {
    if (tweet[index].islike === true) {
        tweet[index].islike = false;
    } else tweet[index].islike = true;
    let b = [];
    for (let i = 0; i < tweet.length; i++) {
        if (tweet[i].islike == false) {
            if (tweet[i].childreContent == "") {
                b.unshift(` 
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
            }
            else {
                b.unshift(` 
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
                <div class="row dien-row1"style="  border:1px solid #e6ecf0; width:520px;border-radius:40px;text-align:left;margin-left:33px;word-wrap:break-word;">
                <div class="col-1 ">
                    <img src="team-placeholder.png" class="dien-imgUser"
                    style="width:40px;height:40px;">
                </div>
                <div class="col-11">
                    <div style="width:100%;height:100%;">
                        <span><b>Dien</b></span>
                        <span style="color: #e6ecf0">@Dien a few seconds ago</span>
                        <div class="dien-ContentTweet">${tweet[i].childreContent}</div>  
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
            </div>
            `);
            }
        } else {
            if (tweet[i].childreContent == "") {
                b.unshift(` 
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
            } else {
                b.unshift(` 
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
                <div class="row dien-row1"style="  border:1px solid #e6ecf0; width:520px;border-radius:40px;text-align:left;margin-left:33px;word-wrap:break-word;">
                <div class="col-1 ">
                    <img src="team-placeholder.png" class="dien-imgUser"
                    style="width:40px;height:40px;">
                </div>
                <div class="col-11">
                    <div style="width:100%;height:100%;">
                        <span><b>Dien</b></span>
                        <span style="color: #e6ecf0">@Dien a few seconds ago</span>
                        <div class="dien-ContentTweet">${tweet[i].childreContent}</div>  
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
            </div>
            `);
            }
        }
    }
    b.push(`<hr />
    <!-- lam follow news  -->
    <div id="contentArea "style="  border:1px solid #e6ecf0;">

        <div class="row mx-auto t-row-style" >
            <div class="col-1  ">
                <img src="/t-img/cnn logo.jpg" alt="avatar" style="width:45px;">
            </div>
            <div class="col-11 ">
                <div class="d-flex justify-content-between">
                    <div>
                        <span class="t-title-style" style="font-size: 15px;"> CNN</span>
                        <span>
                            <!-- chen icon verify -->
                            <img src="/t-img/verify icon.jpg" alt="verify icon" style="width:17px;">
                        </span>
                        <span class="text-muted">@CNN . 6h</span>
                    </div>
                    <div>
                        <span class="d-flex justify-content-end ">
                            <img src="t-img/drop down icon.png" style="width:15px;">
                        </span>
                    </div>

                </div>
                <div>
                    <!-- news detail -->
                    <p style="width:520px;">CNN's Don Lemon talks to journalist Jemele Hill about an
                        op-ed
                        penned by former NBA
                        star Kareem Abdul-Jabbar on anti-semitism in sports and Hollywood.</p>
                    <!-- hashtag -->
                    <a href="https://www.youtube.com/results?search_query=%23CNN">#CNN</a>
                    <a href="https://www.youtube.com/results?search_query=%23News">#News</a>
                </div>
                <div style="border-radius: 15px; margin-bottom: 10px;">
                    <!-- chen video -->
                    <iframe width="540" height="300"
                        src="https://www.youtube.com/embed/XcAcXoISRU8?autoplay=1" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>

            </div>
            <!-- function bar -->
            <div class="d-flex justify-content-around" style="margin: 0px; width:100%;">
                <div>
                    <img class="t-function-icon" src="t-img/comment icon.png" alt="function icon">
                    <span class="ml-3">9</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/retweet icon.png" alt="function icon">
                    <span class="ml-3">10</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/like icon.png" alt="function icon">
                    <span class="ml-3">15</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/via icon.png" alt="function icon">
                    <span class="ml-3">20</span>
                </div>
            </div>
        </div>


        <hr />
        <div class="row mx-auto t-row-style">
            <div class="col-1  ">
                <img src="/t-img/abc news icon.png" alt="avatar" style="width:45px;">
            </div>
            <div class="col-11 ">
                <div class="d-flex justify-content-between">
                    <div>
                        <span class="t-title-style" style="font-size: 15px;">ABC News</span>
                        <span>
                            <!-- chen icon verify -->
                            <img src="/t-img/verify icon.jpg" alt="verify icon" style="width:17px;">
                        </span>
                        <span class="text-muted">@realABCNews . Jul 19
                        </span>
                    </div>
                    <div>
                        <span>
                            <img src="t-img/drop down icon.png" style="width:15px;">
                        </span>
                    </div>


                </div>
                <div>
                    <!-- news detail -->
                    <p style="width:520px;">MORE:Joe Biden has advanced in the Midwest against Pres.
                        Trump,
                        from a dead heat to a
                        17-point lead. It’s close in the South, 50-44%, Biden-Trump, compared with a
                        13-point Trump lead in late March. <a
                            href="https://abcnews.go.com/Politics/pandemic-surge-damages-trump-boosting-bidens-white-house/story?id=71779431">https://abcn.ws/2CSHN4r</a>
                    </p>
                    <!-- hashtag -->

                </div>


                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">BREAKING: Joe Biden opens up a 15-point lead over Pres. Trump
                        in
                        a new <a href="https://twitter.com/ABC?ref_src=twsrc%5Etfw">@ABC</a>
                        News/Washington
                        Post poll, ahead 55-40% among registered voters. That advantage narrows to
                        54-44%
                        among likely voters. <a href="https://t.co/wo5UBbbf8g">https://t.co/wo5UBbbf8g</a>
                    </p>&mdash; ABC News (@ABC) <a
                        href="https://twitter.com/ABC/status/1284700161189588993?ref_src=twsrc%5Etfw">July
                        19, 2020</a>
                </blockquote>

            </div>
            <div class="d-flex justify-content-around" style="margin: 0px; width:100%; padding-top: 5px;">
                <div>
                    <img class="t-function-icon" src="t-img/comment icon.png" alt="function icon">
                    <span class="ml-3">14</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/retweet icon.png" alt="function icon">
                    <span class="ml-3">69</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/like icon.png" alt="function icon">
                    <span class="ml-3">144</span>
                </div>
                <div>
                    <img class="t-function-icon" src="/t-img/via icon.png" alt="function icon">
                    <span class="ml-3">49</span>
                </div>
            </div>


        </div>
    </div>
    <hr />
    <div class="row mx-auto t-row-style" style="  border:1px solid #e6ecf0;">

        <div class="col-1">
            <i style="font-size: 40px;" class="fas fa-user-circle"></i>
        </div>
        <div class="col-11 ">
            <div class="d-flex justify-content-between">
                <div>
                    <span class="t-title-style" style="font-size: 15px;">Dien's Tweet</span>
                    <span>
                        <!-- chen icon verify -->
                        <!-- <img src=".." alt="verify icon" style="width:17px;"> -->
                    </span>
                    <span class="text-muted"> . 8 h
                    </span>
                </div>
                <div>
                    <span>
                        <img src="t-img/drop down icon.png" style="width:15px;">
                    </span>
                </div>

            </div>
            <div>
                <!-- news detail -->
                <p>My memories
                    <a href="#">@adele</a>
                    Fantastic news
                    <a href="#">#adele</a></p>
                <!-- hashtag -->

            </div>
            <div>
                <!-- chen video live adele-->
                <blockquote class="twitter-tweet">
                    <p lang="en" dir="ltr">For further details please go to <a
                            href="https://t.co/l21mEjQSCp">https://t.co/l21mEjQSCp</a> <a
                            href="https://t.co/bK00qJ5iIC">pic.twitter.com/bK00qJ5iIC</a></p>&mdash;
                    Adele (@Adele) <a
                        href="https://twitter.com/Adele/status/801365088380796929?ref_src=twsrc%5Etfw">November
                        23, 2016</a>
                </blockquote>

            </div>
        </div>
        <div class="d-flex justify-content-around" style="margin: 0px; width:100%; padding-right: 5px;">
            <div>
                <img class="t-function-icon" src="t-img/comment icon.png" alt="function icon">
                <span class="ml-3">4</span>
            </div>
            <div>
                <img class="t-function-icon" src="/t-img/retweet icon.png" alt="function icon">
                <span class="ml-3">13</span>
            </div>
            <div>
                <img class="t-function-icon" src="/t-img/like icon.png" alt="function icon">
                <span class="ml-3">50</span>
            </div>
            <div>
                <img class="t-function-icon" src="/t-img/via icon.png" alt="function icon">
                <span class="ml-3">20</span>
            </div>
        </div>
    </div>`)
    c = b.join("");

    document.getElementById("tweetContent").innerHTML = c;

    //render2();
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
                hs.push(h);
                h = "";
            }
        } else if (h !== "") { h += d[i] }
    }
    for (i = 0; i < ans.length; i++) {
        let a = ans[i];
        let vt = d.indexOf(a);
        let sub1 = d.substring(0, vt);
        let sub2 = d.substring(vt + a.length + 1, d.length + 1);
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
    tweet[indexReTweet].islike = false;
    tweet[indexReTweet].childreContent = tweet[indexReTweet].content;
    tweet[indexReTweet].content = d;
    renderTweet(tweet);

}
let indexReTweet;
function retweet(index) {
    indexReTweet = index;
}
renderTweet(``);