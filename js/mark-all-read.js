const markAllRead = {
    init: function () {
        markAllRead.allReadLinkElem = document.body.querySelector("#header_all-is-read");
        markAllRead.allReadLinkElem.addEventListener("click",function (event){
            // event.preventDefault();
            // we reset notify and update the style
            markAllRead.updateNotify(0);
            markAllRead.updatePost();
        })
    },
    allNewPostElem : document.body.querySelectorAll(".post--new"),
    updateNotify: function (nb){
        const notifyNbElem = document.body.querySelector(".header_title_notify-nb");
        notifyNbElem.textContent = nb.toString();
        if(nb === 0){
            notifyNbElem.classList.add("notify--none");
        }
    },
    updatePost: function (index = null){
        if(!index){
            markAllRead.allNewPostElem.forEach(element => {
                element.classList.remove('post--new');
            })
        }
    }
}

document.addEventListener('DOMContentLoaded', markAllRead.init);