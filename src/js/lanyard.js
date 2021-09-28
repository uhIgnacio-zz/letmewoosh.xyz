$(document).ready(function(){
    setInterval(() => {
        $.get("https://api.lanyard.rest/v1/users/319132815016984577", function({ data }){
            $(".discord-user").text(`${data.discord_user.username}#${data.discord_user.discriminator}`)
            if(data.active_on_discord_desktop === true){
                $(".discord").html('Online on <span class="fw-bold">Desktop</span>');
                $(".fa-circle").removeClass("offline");
                $(".fa-circle").addClass("online");
            }else if(data.active_on_discord_mobile === true){
                $(".discord").html('Online on <span class="fw-bold">Mobile</span>');
                $(".fa-circle").removeClass("offline");
                $(".fa-circle").addClass("online");
            }else {
                $(".discord").text("Offline");
                $(".fa-circle").removeClass("online");
                $(".fa-circle").addClass("offline");
            }

            if(data.listening_to_spotify === false){
                $(".spotify").html('Listening to <span class="fw-bold">nothing</span>');
            }else {
                $(".spotify").html(`Listening to <span class="fw-bold"><a target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}">${data.spotify.song}</a></span> by <span class="fw-bold"> ${data.spotify.artist}</span>`);
            }

            if(data.activities.length > 0){
                data.activities.forEach(activity => {
                    $(".activity").html(`<span class="fw-bold">${activity.name}</span> -> ${activity.state}`);
                });
            }else {
                $(".activity").html(`Doing <span class="fw-bold">nothing</span>`)
            }

            twemoji.parse(document.body);
        });
    }, 1000);
});
