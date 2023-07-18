// ----- Configuration Zone! -----
// Don't forget to change this to your LIFF ID

const liffId = "1657801658-71k6mOlO";
//2000124387-PBEN8pOq
//U3fdda8d72903632bd19e9158138c74f9
// Don't forget to change this to your LIFF ID

liff.init(
  { liffId: liffId },
  () => {
    initLIFF();
  },
  err => {
    window.alert(err);
  }
);
function initLIFF() {
  if (liff.isLoggedIn()) {
    liff
      .getProfile()
      .then(profile => {
        document.getElementById("profileImage").src = profile.pictureUrl;
        document.getElementById("userId").innerHTML = profile.userId;
        document.getElementById("displayName").innerHTML = profile.displayName;
        document.getElementById("statusMessage").innerHTML =
          profile.statusMessage;
        document.getElementById("pictureUrl").href = profile.pictureUrl;
        document.getElementById("pictureUrl").innerHTML = profile.pictureUrl;
        document.getElementById(
          "email"
        ).innerHTML = liff.getDecodedIDToken().email;
      })
      .catch(e => {
        document.getElementById("userId").innerHTML = "No data, " + e;
        document.getElementById("displayName").innerHTML = "No data, " + e;
        document.getElementById("statusMessage").innerHTML = "No data, " + e;
        document.getElementById("pictureUrl").innerHTML = "No data, " + e;
        document.getElementById("email").innerHTML = "No data, " + e;
      });
  } else {
    document.getElementById("userId").innerHTML = "No data, Login first";
    document.getElementById("displayName").innerHTML = "No data, Login first";
    document.getElementById("statusMessage").innerHTML = "No data, Login first";
    document.getElementById("pictureUrl").innerHTML = "No data, Login first";
    document.getElementById("email").innerHTML = "No data, Login first";
  }

  document.getElementById("getOS").innerHTML = liff.getOS();
  document.getElementById("getLanguage").innerHTML = liff.getLanguage();
  document.getElementById("getVersion").innerHTML = liff.getVersion();
  document.getElementById("isInClient").innerHTML = liff.isInClient();
  document.getElementById("isLoggedIn").innerHTML = liff.isLoggedIn();
  var context = liff.getContext();
  if (context !== null) {
    document.getElementById("context_type").innerHTML = context.type;
    document.getElementById("context_viewType").innerHTML = context.viewType;
    document.getElementById("context_userId").innerHTML = context.userId;
    if (context.utouId) {
      document.getElementById("context_utouId").innerHTML = context.utouId;
    } else {
      document.getElementById("context_utouId").innerHTML =
        "You are not in the utou";
    }
    if (context.roomId) {
      document.getElementById("context_roomId").innerHTML = context.roomId;
    } else {
      document.getElementById("context_roomId").innerHTML =
        "You are not in the room";
    }
    if (context.groupId) {
      document.getElementById("context_groupId").innerHTML = context.groupId;
    } else {
      document.getElementById("context_groupId").innerHTML =
        "You are not in the group ";
    }
  } else {
    document.getElementById("context_type").innerHTML = "No data.";
    document.getElementById("context_viewType").innerHTML = "No data.";
    document.getElementById("context_userId").innerHTML = "No data.";
    document.getElementById("context_utouId").innerHTML = "No data.";
    document.getElementById("context_roomId").innerHTML = "No data.";
    document.getElementById("context_groupId").innerHTML = "No data.";
  }
}
