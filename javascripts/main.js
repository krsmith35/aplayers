console.log('This would be the main JS file.');
function onLinkedInLoad() {
     IN.Event.on(IN, "auth", onLinkedInAuth);
}

function onLinkedInAuth() {
     IN.API.Profile("me").result(displayProfiles);
}

function displayProfiles(profiles) {
     member = profiles.values[0];
     document.getElementById("profiles").innerHTML = 
          "<p id=\"" + member.id + "\">Hello " +  member.firstName + " " + member.lastName + "</p>";
}

/* Sample code from a tutorial about how to post profile data to html
function loadData() {
  IN.API.Profile("me")
    .fields(["id", "firstName", "lastName", "pictureUrl","headline","publicProfileUrl"])
    .result(function(result) {
      profile = result.values[0];
      profHTML = "<p><a href=\"" + profile.publicProfileUrl + "\">";
      profHTML += "<img class=img_border align=\"left\" src=\"" + profile.pictureUrl + "\"></a>";      
      profHTML += "<a href=\"" + profile.publicProfileUrl + "\">";
      profHTML += "<h2 class=myname>" + profile.firstName + " " + profile.lastName + "</a> </h2>";
      profHTML += "<span class=myheadline>" + profile.headline + "</span>";
      $("#profile").html(profHTML);
    });
}
*/

