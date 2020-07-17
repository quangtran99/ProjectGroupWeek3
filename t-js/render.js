function renderHashtagFilter(filterList) {
    filterList.sort((a, b) => b.id - a.id);
    let html = filterList.map(element => {
        // let myFunc = renderModal(JSON.stringify(element));
        if (element.parent != null) {
            return renderRetweet(element);
        }
        if (element.content.videoLink !== '') {
            return renderTweetWithVideo(element);
        }
        if (element.content.videoLink == '' && element.content.images.length == 0) {

            return `<div id="content" class="px-5 py-3">
            <div class="row">
                <div class="col-2"><img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
                </div>
                <div class="col-10">
                    <div>
                        <span id="tweetTitle">${element.title}</span>
                        <span><i class="ml-1 fas fa-badge-check"></i></span>
                        <span id="tweetAt">${element.at}</span>
                        <span id="tweetTime">${moment(element.time).fromNow()}</span>
                    </div>
                    <div class="mt-3">${renderDescription(element.id)}</div>
                </div>
            </div>
            <div class="row pt-3" style="display: flex; justify-content: center;">
            </div>
            <div class="row pt-3 functionBar">
                <div class="comment-func"><i class="fal fa-comment"></i><span class="ml-3">${element.comments}</span>
                </div>
                <div class="retweet-func" onclick="renderModal(${element.id})"><i class="far fa-retweet" id="reTweetIcon" style="cursor:pointer;"></i><span class="ml-3">${element.retweet}</span>
                </div>
                <div class="like-func"><i class="fal fa-heart"></i><span class="ml-3">${element.likes}</span>
                </div>
                <div class="upload-func"><i class="fal fa-upload" onclick="#"></i>
                </div>
            </div>
        </div>
            <hr/>`
        }
        return `<div id="content" class="px-5 py-3">
        <div class="row"><div class="col-2"><img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
        </div>
            <div class="col-10">
                <div>
                <span id="tweetTitle">${element.title}</span>
                    <span><i class="ml-1 fas fa-badge-check"></i></span>
                    <span id="tweetAt">${element.at}</span>
                    <span id="tweetTime">${moment(element.time).fromNow()}</span></div>
                    <div class="mt-3">${renderDescription(element.id)}</div></div>
                    </div><div class="row pt-3" style="display: flex; justify-content: center;">
                    <div id="image-container-tweet">${renderImgs(element)}</div>
                </div><div class="row pt-3 functionBar">
                <div class="comment-func"><i class="fal fa-comment"></i><span class="ml-3">${element.comments}</span></div>
                <div class="retweet-func" onclick="renderModal(${element.id})"><i class="far fa-retweet" id="reTweetIcon" style="cursor:pointer;"></i><span class="ml-3">${element.retweet}</span></div>
                <div class="like-func"><i class="fal fa-heart"></i><span class="ml-3">${element.likes}</span></div>
                <div class="upload-func"><i class="fal fa-upload" onclick="deleteAll(${element.id})"></i></div>
        </div>
        </div>
        <hr/>`

    }).join('')
    $('#retweetModal').modal('hide');
    $('#contentArea').empty();
    $('#contentArea').append(html);
}



function renderFromList() {
    tweetList.sort((a, b) => b.id - a.id);
    let html = tweetList.map(element => {
        // let myFunc = renderModal(JSON.stringify(element));
        if (element.parent != null) {

            return renderRetweet(element);
        }
        if (element.content.videoLink !== '' && element.content.images.length == 0) {

            return renderTweetWithVideo(element);
        }
        if (element.content.videoLink == '' && element.content.images.length == 0) {

            return `<div id="content" class="px-5 py-3">
            <div class="row">
                <div class="col-2"><img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
                </div>
                <div class="col-10">
                    <div>
                        <span id="tweetTitle">${element.title}</span>
                        <span><i class="ml-1 fas fa-badge-check"></i></span>
                        <span id="tweetAt">${element.at}</span>
                        <span id="tweetTime">${moment(element.time).fromNow()}</span>
                    </div>
                    <div class="mt-3">${renderDescription(element.id)}</div>
                </div>
            </div>
            <div class="row pt-3" style="display: flex; justify-content: center;">
            </div>
            <div class="row pt-3 functionBar">
                <div class="comment-func"><i class="fal fa-comment"></i><span class="ml-3">${element.comments}</span>
                </div>
                <div class="retweet-func" onclick="renderModal(${element.id})"><i class="far fa-retweet" id="reTweetIcon" style="cursor:pointer;"></i><span class="ml-3">${element.retweet}</span>
                </div>
                <div class="like-func"><i class="fal fa-heart"></i><span class="ml-3">${element.likes}</span>
                </div>
                <div class="upload-func"><i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
                </div>
            </div>
        </div>
            <hr/>`
        }


        return `<div id="content" class="px-5 py-3">
        <div class="row">
            <div class="col-2"><img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
            </div>
            <div class="col-10">
                <div>
                    <span id="tweetTitle">${element.title}</span>
                    <span><i class="ml-1 fas fa-badge-check"></i></span>
                    <span id="tweetAt">${element.at}</span>
                    <span id="tweetTime">${moment(element.time).fromNow()}</span>
                </div>
                <div class="mt-3">${renderDescription(element.id)}</div>
            </div>
        </div>
        <div class="row pt-3" style="display: flex; justify-content: center;">
            <div id="image-container-tweet">${renderImgs(element)}</div>
        </div>
        <div class="row pt-3 functionBar">
            <div class="comment-func"><i class="fal fa-comment"></i><span class="ml-3">${element.comments}</span>
            </div>
            <div class="retweet-func" onclick="renderModal(${element.id})"><i class="far fa-retweet" id="reTweetIcon" style="cursor:pointer;"></i><span class="ml-3">${element.retweet}</span>
            </div>
            <div class="like-func"><i class="fal fa-heart"></i><span class="ml-3">${element.likes}</span>
            </div>
            <div class="upload-func"><i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
            </div>
        </div>
    </div>
        <hr/>`

    }).join('')
    $('#retweetModal').modal('hide');
    $('#contentArea').empty();
    $('#contentArea').append(html);
}


function renderTweetWithVideo(element) {
    return `<div id="content" class="px-5 py-3">
    <div class="row">
        <div class="col-2"><img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
        </div>
        <div class="col-10">
            <div>
                <span id="tweetTitle">${element.title}</span>
                <span><i class="ml-1 fas fa-badge-check"></i></span>
                <span id="tweetAt">${element.at}</span>
                <span id="tweetTime">${moment(element.time).fromNow()}</span>
            </div>
            <div class="mt-3">${renderDescription(element.id)}</div>
        </div>
    </div>
    <div class="row pt-3" style="display: flex; justify-content: center;">
        <div id="player" style="width:500px; height:300px;">
            <iframe src="${element.content.videoLink}" allowfullscreen allowtransparency allow="autoplay" style="width:520px; height:300px;"></iframe>
        </div>
    </div>
    <div class="row pt-3 functionBar">
        <div class="comment-func"><i class="fal fa-comment"></i><span class="ml-3">${element.comments}</span>
        </div>
        <div class="retweet-func" onclick="renderModal(${element.id})" ><i class="far fa-retweet" id="reTweetIcon" style="cursor:pointer;"></i><span class="ml-3">${element.retweet}</span>
        </div>
        <div class="like-func"><i class="fal fa-heart"></i><span class="ml-3">${element.likes}</span>
        </div>
        <div class="upload-func"><i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
        </div>
    </div>
</div>
        <hr/>`
}



function renderRetweet(element) {
    let parentTweet = tweetList.find(x => x.id == element.parent);
    if (parentTweet.content.videoLink !== '' && parentTweet.content.images.length == 0) {
        console.log(element);
        return `<div id="content" class="px-5 py-3">
        <div class="row">
            <div class="col-2">
                <img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
            </div>
            <div class="col-10">
                <div>
                    <span id="tweetTitle">${element.title}</span>
                    <span><i class="ml-1 fas fa-badge-check"></i></span>
                    <span id="tweetAt">${element.at}</span>
                    <span id="tweetTime">${moment(element.time).fromNow()}</span>
                </div>
                <div class="mt-3">${renderDescription(element.id)}</div>
            </div>
        </div>
        <div class="row pt-3" style="zoom:0.8; justify-content:center;">
            <div class="px-5 py-3" style="border: 5px solid #e6ecf0;border-radius:20px">
                <div class="row">
                    <div class="col-2">
                        <img src="${parentTweet.logo}" id="moreToFollowImg" alt="Avatar">
                    </div>
                    <div class="col-10">
                        <div>
                            <span id="tweetTitle">${parentTweet.title }</span>
                            <span><i class="ml-1 fas fa-badge-check"></i></span>
                            <span id="tweetAt">${parentTweet.at}</span>
                            <span id="tweetTime">${moment(parentTweet.time).fromNow()}</span>
                        </div>
                        <div>${renderDescription(parentTweet.id)}</div>
                    </div>
                </div>
                <div class="row pt-3" style="display: flex; justify-content: center;">
                    <div id="player" style="width:500px; height:300px;">
                        <iframe src="${parentTweet.content.videoLink}" allowfullscreen allowtransparency allow="autoplay" style="width:520px; height:300px;"></iframe>
                    </div>
                </div>
    
            </div>
        </div>
    
        <div class="row pt-3 functionBar">
            <div class="comment-func"><i class="fal fa-comment"></i><span class="ml-3">${element.comments}</span>
            </div>
            <div class="retweet-func" onclick="renderModal(${element.id})"><i class="far fa-retweet" id="reTweetIcon"  style="cursor:pointer;"></i><span class="ml-3">${element.retweet}</span>
            </div>
            <div class="like-func"><i class="fal fa-heart"></i><span class="ml-3">${element.likes}</span>
            </div>
            <div class="upload-func"><i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
            </div>
        </div>
    
    </div>
            <hr/>`
    }
    if (parentTweet.content.videoLink == '' && parentTweet.content.images.length == 0) {
        return `<div id="content" class="px-5 py-3">
        <div class="row">
            <div class="col-2">
                <img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
            </div>
            <div class="col-10">
                <div>
                    <span id="tweetTitle">${element.title}</span>
                    <span><i class="ml-1 fas fa-badge-check"></i></span>
                    <span id="tweetAt">${element.at}</span>
                    <span id="tweetTime">${moment(element.time).fromNow()}</span>
                </div>
                <div class="mt-3">${renderDescription(element.id)}</div>
            </div>
        </div>
        <div class="row pt-3" style="zoom:0.8; justify-content:center;">
            <div class="px-5 py-3" style="border: 5px solid #e6ecf0;border-radius:20px">
                <div class="row">
                    <div class="col-2">
                        <img src="${parentTweet.logo}" id="moreToFollowImg" alt="Avatar">
                    </div>
                    <div class="col-10">
                        <div>
                            <span id="tweetTitle">${parentTweet.title }</span>
                            <span><i class="ml-1 fas fa-badge-check"></i></span>
                            <span id="tweetAt">${parentTweet.at}</span>
                            <span id="tweetTime">${moment(parentTweet.time).fromNow()}</span>
                        </div>
                        <div>${renderDescription(parentTweet.id)}</div>
                    </div>
                </div>
    
            </div>
        </div>
    
        <div class="row pt-3 functionBar">
            <div class="comment-func"><i class="fal fa-comment"></i><span class="ml-3">${element.comments}</span>
            </div>
            <div class="retweet-func"><i class="far fa-retweet" id="reTweetIcon" onclick="renderModal(${element.id})" style="cursor:pointer;"></i><span class="ml-3">${element.retweet}</span>
            </div>
            <div class="like-func"><i class="fal fa-heart"></i><span class="ml-3">${element.likes}</span>
            </div>
            <div class="upload-func"><i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
            </div>
        </div>
    
    </div>
            <hr/>`
    }
    return `
    <div id="content" class="px-5 py-3">
    <div class="row">
        <div class="col-2">
            <img src="${element.logo}" id="moreToFollowImg" alt="Avatar">
        </div>
        <div class="col-10">
            <div>
                <span id="tweetTitle">${element.title}</span>
                <span><i class="ml-1 fas fa-badge-check"></i></span>
                <span id="tweetAt">${element.at}</span>
                <span id="tweetTime">${moment(element.time).fromNow()}</span>
            </div>
            <div class="mt-3">${renderDescription(element.id)}</div>
        </div>
    </div>
    <div class="row pt-3" style="zoom:0.8; justify-content:center;">
        <div class="px-5 py-3" style="border: 5px solid #e6ecf0;border-radius:20px">
            <div class="row">
                <div class="col-2">
                    <img src="${parentTweet.logo}" id="moreToFollowImg" alt="Avatar">
                </div>
                <div class="col-10">
                    <div>
                        <span id="tweetTitle">${parentTweet.title }</span>
                        <span><i class="ml-1 fas fa-badge-check"></i></span>
                        <span id="tweetAt">${parentTweet.at}</span>
                        <span id="tweetTime">${moment(parentTweet.time).fromNow()}</span>
                    </div>
                    <div>${renderDescription(parentTweet.id)}</div>
                </div>
            </div>
            <div class="row pt-3" style="display: flex; justify-content: center;">
                <div id="image-container-tweet">${renderImgs(parentTweet)}</div>
            </div>

        </div>
    </div>

    <div class="row pt-3 functionBar">
        <div class="comment-func"><i class="fal fa-comment"></i><span class="ml-3">${element.comments}</span>
        </div>
        <div class="retweet-func" onclick="renderModal(${element.id})"><i class="far fa-retweet" id="reTweetIcon" style="cursor:pointer;"></i><span class="ml-3">${element.retweet}</span>
        </div>
        <div class="like-func"><i class="fal fa-heart"></i><span class="ml-3">${element.likes}</span>
        </div>
        <div class="upload-func"><i class="fal fa-upload" onclick="deleteAll(${element.id})"></i>
        </div>
    </div>

</div>
        <hr/>`
}

function renderModal(id) {


    $("#retweetModal").remove();

    let thisElement = tweetList.find(x => x.id == id);
    let myModal;
    if (thisElement.content.videoLink !== '' && thisElement.content.images.length == 0) {
        myModal = `<div class="modal fade" id="retweetModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-1">
                        <img src="https://pbs.twimg.com/profile_images/809011055905017857/_Cyz0_6L_400x400.jpg" id="moreToFollowImg" alt="Avatar">
                    </div>
                    <div class="col-11">
                        <div contenteditable="true" placeholder="What's happening" id="tweetArea-modal" style="padding-left: 34px;"></div>

                        <div class="px-5 py-3 mb-3" style="border: 5px solid #e6ecf0;border-radius:20px">
                            <div class="row">
                                <div class="col-2">
                                    <img src="${thisElement.logo}" id="moreToFollowImg" alt="Avatar">
                                </div>
                                <div class="col-10">
                                    <div>
                                        <span id="tweetTitle">${thisElement.title}</span>
                                        <span><i class="ml-1 fas fa-badge-check"></i></span>
                                        <span id="tweetAt">${thisElement.at}</span>
                                        <span id="tweetTime">${moment(thisElement.time).fromNow()}</span>

                                    </div>
                                    <div>${thisElement.content.description}</div>
                                </div>

                            </div>


                            <div class="row pt-3" style="display: flex; justify-content: center;">
                                <div id="player" style="width:500px; height:300px;">
                                    <iframe src="${thisElement.content.videoLink}" allowfullscreen allowtransparency style="width:520px; height:300px;"></iframe>
                                </div>
                            </div>

                        </div>

                        <span id="remain"></span>
                        <!--  -->

                    </div>
                </div>
                <div class="modal-footer">
                    <div class="utilityBar">
                        <div class="icons" style="color:#16a2f2; width: 200px;">
                            <i class="fal fa-ad fa-lg"></i>
                            <i class="fal fa-tasks-alt fa-lg"></i>
                            <i class="fal fa-smile fa-lg"></i>
                        </div>

                        <button class="tweetbtn inputArea-tweetbtn" href="#" onclick="retweet(${thisElement.id})" style="width: 100px; margin-left: 21px;">Retweet</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
    } else if (thisElement.content.videoLink == '' && thisElement.content.images.length == 0) {
        myModal = `<div class="modal fade" id="retweetModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-1">
                        <img src="https://pbs.twimg.com/profile_images/809011055905017857/_Cyz0_6L_400x400.jpg" id="moreToFollowImg" alt="Avatar">
                    </div>
                    <div class="col-11">
                        <div contenteditable="true" placeholder="What's happening" id="tweetArea-modal" style="padding-left: 34px;"></div>

                        <div class="px-5 py-3 mb-3" style="border: 5px solid #e6ecf0;border-radius:20px">
                            <div class="row">
                                <div class="col-2">
                                    <img src="${thisElement.logo}" id="moreToFollowImg" alt="Avatar">
                                </div>
                                <div class="col-10">
                                    <div>
                                        <span id="tweetTitle">${thisElement.title}</span>
                                        <span><i class="ml-1 fas fa-badge-check"></i></span>
                                        <span id="tweetAt">${thisElement.at}</span>
                                        <span id="tweetTime">${moment(thisElement.time).fromNow()}</span>

                                    </div>
                                    <div>${thisElement.content.description}</div>
                                </div>

                            </div>

                        </div>

                        <span id="remain"></span>
                        <!--  -->

                    </div>
                </div>
                <div class="modal-footer">
                    <div class="utilityBar">
                        <div class="icons" style="color:#16a2f2; width: 200px;">
                            <i class="fal fa-ad fa-lg"></i>
                            <i class="fal fa-tasks-alt fa-lg"></i>
                            <i class="fal fa-smile fa-lg"></i>
                        </div>

                        <button class="tweetbtn inputArea-tweetbtn" href="#" onclick="retweet(${thisElement.id})" style="width: 100px; margin-left: 21px;">Retweet</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
    } else {
        myModal = `<div class="modal fade" id="retweetModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-1">
                        <img src="https://pbs.twimg.com/profile_images/809011055905017857/_Cyz0_6L_400x400.jpg" id="moreToFollowImg" alt="Avatar">
                    </div>
                    <div class="col-11">
                        <div contenteditable="true" placeholder="What's happening" id="tweetArea-modal" style="padding-left: 34px;"></div>

                        <div class="px-5 py-3 mb-3" style="border: 5px solid #e6ecf0;border-radius:20px">
                            <div class="row">
                                <div class="col-2">
                                    <img src="${thisElement.logo}" id="moreToFollowImg" alt="Avatar">
                                </div>
                                <div class="col-10">
                                    <div>
                                        <span id="tweetTitle">${thisElement.title}</span>
                                        <span><i class="ml-1 fas fa-badge-check"></i></span>
                                        <span id="tweetAt">${thisElement.at}</span>
                                        <span id="tweetTime">${moment(thisElement.time).fromNow()}</span>

                                    </div>
                                    <div>${thisElement.content.description}</div>
                                </div>

                            </div>


                            <div class="row pt-3" style="display: flex; justify-content: center;">
                                <div id="image-container-tweet">${renderImgs(thisElement)}</div>
                            </div>

                        </div>

                        <span id="remain"></span>
                        <!--  -->

                    </div>
                </div>
                <div class="modal-footer">
                    <div class="utilityBar">
                        <div class="icons" style="color:#16a2f2; width: 200px;">
                            <i class="fal fa-ad fa-lg"></i>
                            <i class="fal fa-tasks-alt fa-lg"></i>
                            <i class="fal fa-smile fa-lg"></i>
                        </div>

                        <button class="tweetbtn inputArea-tweetbtn" href="#" onclick="retweet(${thisElement.id})" style="width: 100px; margin-left: 21px;">Retweet</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
    }


    $(document.body).append(myModal);
    $('#retweetModal').modal('show');
}


function renderImgs(tweet) {
    let html = "";
    tweet.content.images.forEach((elem, i) => {
        if (i == 0) {
            html += `<div id="first-row"><img id="tweet-img" class="tweet" style="display: block;" height="250px" src="${elem}" />`
        } else if (i == 1) {
            html += `<img id="tweet-img" style="display: block;" class="tweet" height="250px" src="${elem}" /></div>`
        } else if (i == 2) {
            html += `<div id="second-row"><img id="tweet-img" class="tweet" style="display: block;" height="250px" src="${elem}" />`
        } else if (i == 3) {
            html += `<img id="tweet-img" style="display: block;" class="tweet" height="250px" src="${elem}" /></div>`
        }
    });

    if (tweet.content.images.length != 0 && tweet.content.images.length < 4) {
        html += "</div>"
    }
    if (tweet.content.images.length) {
        hasImgs = true;
    }
    return html;
}