const reels = [
  {
    ismuted: true,
    userName: "aksaansari011",
    likeCount: 23400,
    isLiked: false,
    commentCount: 560,
    caption: "Two souls, one heartbeat ❤️",
    video: "./videos/video4.mp4",
    userProfile: "https://images.unsplash.com/photo-1659458449816-74eb9256b590?q=80&w=387",
    shareCount: 210,
    isFollowed: true
  },
  {
    ismuted: true,
    userName: "travel_with_ali",
    likeCount: 15000,
    isLiked: true,
    commentCount: 320,
    caption: "Exploring the mountains today 🏔️✨",
    video: "./videos/video1.mp4",
    userProfile: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=449",
    shareCount: 95,
    isFollowed: false
  },
  {
    ismuted: true,
    userName: "tech_guru",
    likeCount: 9800,
    isLiked: false,
    commentCount: 120,
    caption: "5 secret phone tricks you should know! 📱💡",
    video: "./videos/video3.mp4",
    userProfile: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=464",
    shareCount: 60,
    isFollowed: true
  },
  {
    ismuted: true,
    userName: "foodie_rimsha",
    likeCount: 45200,
    isLiked: true,
    commentCount: 890,
    caption: "Best street momos in the city 😋🔥",
    video: "./videos/video2.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=387",
    shareCount: 300,
    isFollowed: false
  },
  {
    ismuted: true,
    userName: "funny_rahul",
    likeCount: 17800,
    isLiked: false,
    commentCount: 410,
    caption: "POV: Jab assignment last date pe yaad aaye 😂",
    video: "./videos/video5.mp4",
    userProfile: "https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=465",
    shareCount: 120,
    isFollowed: true
  }
];
let allReels = document.querySelector(".all-reels");

// Data render function
function addData() {
  let sum = "";
  reels.forEach((elm, idx) => {
    sum += `
      <div class="reel">
        <video ${elm.ismuted ? "muted" : ""} src="${elm.video}"></video>

        <div class="mute" data-id="${idx}">
          ${elm.ismuted ? '<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-line"></i>'}
        </div>

        <div class="bottom">
          <div class="user">
            <img src="${elm.userProfile}" alt="">
            <h4>${elm.userName}</h4>
            <button class="follow-btn" data-id="${idx}">
              ${elm.isFollowed ? "Unfollow" : "Follow"}
            </button>
          </div>
          <h3>${elm.caption}</h3>
        </div>

        <div class="right">
          <div class="like" data-id="${idx}">
            <h4>${elm.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
            <h6>${elm.likeCount}</h6>
          </div>
          <div class="comment">
            <h4><i class="ri-chat-3-line"></i></h4>
            <h6>${elm.commentCount}</h6>
          </div>
          <div class="share">
            <h4><i class="ri-share-forward-line"></i></h4>
            <h6>${elm.shareCount}</h6>
          </div>
        </div>
      </div>
    `;
  });

  allReels.innerHTML = sum;
  applyPlayPauseOnScroll();
}
addData();

// Auto play pause on scroll
function applyPlayPauseOnScroll() {
  const videos = document.querySelectorAll(".reel video");

  function checkVideos() {
    videos.forEach((video) => {
      const rect = video.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight + 150) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  allReels.addEventListener("scroll", checkVideos);
  checkVideos();
}

// Event listner
allReels.addEventListener("click", (e) => {
  let i = e.target.dataset.id;

  // like
  if (e.target.closest(".like")) {
    const id = e.target.closest(".like").dataset.id;
    reels[id].isLiked = !reels[id].isLiked;
    reels[id].likeCount += reels[id].isLiked ? 1 : -1;
    addData();
  }

  // follow
  if (e.target.classList.contains("follow-btn")) {
    reels[i].isFollowed = !reels[i].isFollowed;
    addData();
  }

  // mute and unmute feature
  if (e.target.closest(".mute")) {
    const id = e.target.closest(".mute").dataset.id;
    reels[id].ismuted = !reels[id].ismuted;
    addData();
  }
});
