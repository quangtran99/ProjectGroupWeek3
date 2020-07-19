

let storage = []


const callApi = async () => {

    let random = (Math.floor(Math.random() * 300))
    let url = `https://get-artists-api.herokuapp.com/api?page_size=3&page=${random}`
    let data = await fetch(url)
    let result = await data.json()

    result.map(c => {
        c.isFollowing = false;
        return c;
    })

    storage.push(...result)
    console.log("abc : ", storage)
    render(result)
}

callApi()


const render = (list) => {
    let renderString = "";
    list.forEach((item, index) => {
        renderString += `<li class="list-group-item content">
  <div class="row" >
      <div class="col-2" id="image">
          <img src="${item.image}" id="moreToFollowImg" alt="Avatar">
      </div>
      <div class="col-6" id="artist">
          <div style="display: flex;">
              <h6 class="my-0 hashtag">${item.artist_name}</h6>
              <i class="ml-1 fas fa-badge-check"></i>
          </div>

          <small class="text-muted">@${item.artist_name}</small>

      </div>`
        if (!item.isFollowing) {
            renderString += `
      <div class="col-4" id="flwb">
          <a href="#" class="followBtn" id = "${index}" onclick = "followBtn(${index})">Follow</a>
      </div>
  </div>
  </li>`
        } else {
            renderString += `
        <div class="col-4" id="flwb">
            <a href="#" class="followingBtn" id = "${index}" onclick = "unfollowBtn(${index})"><span>Following</span></a>
        </div>
    </div>
    </li>`
        }
    });


    document.getElementById("artistPlace").innerHTML = renderString;

}



function followBtn(index) {
    storage[index].isFollowing = !storage[index].isFollowing;
    render(storage)
}

function unfollowBtn(index) {
    let character = storage[index];
    let html = ` <div id="dark-bg">
    <div class="pop-up-unf">
    <div class="Q-unfollow-pop-up">
        <div class="Q-unfollow-title">
            Unfollow @${character.artist_name} ?
        </div>
        <div class="Q-unfollow-description text-muted">
            Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected.
        </div>
        <button class="Q-unfollow-btn-cancel" onclick="closePopUp()">
            Cancel
        </button>
        <button class="Q-unfollow-btn" onclick="{followBtn(${index}); closePopUp();}">
            Unfollow
        </button>
    </div>
</div>
</div>`;
    document.getElementById("popup-region").innerHTML = html;
}



const closePopUp = () => {
    document.getElementById("popup-region").innerHTML = "";
}

const showMore = async () => {
    let random = (Math.floor(Math.random() * 400))
    let url = `https://get-artists-api.herokuapp.com/api?page_size=3&page=${random}`
    let data = await fetch(url)
    let result = await data.json()

    result.map(c => {
        c.isFollowing = false;
        return c;
    })

    storage.push(...result)

    console.log("newlist : ", storage)
    render(storage);
}

