function getProfile() {
  liff
    .getProfile()
    .then(profile => {
      console.log(JSON.stringify(profile));
      window.alert(JSON.stringify(profile));
    })
    .catch(e => {
      console.log(e);
      window.alert(e);
    });
}
function getAccessToken() {
  window.alert(liff.getAccessToken());
}
function getContext() {
  window.alert(JSON.stringify(liff.getContext()));
}

function sendMessage() {
  liff
    .sendMessages([{ type: "text", text: "Hello K Q" }])
    .then(() => {
      window.alert("Message has been sent");
    })
    .catch(e => {
      window.alert(e);
    });
}

function sendMessagebyUserid(userid) {
  liff
    .sendMessages([{
  "to": "U18519e29fc0e6d42dbbbbf9f8bc57b23",
  "messages": [
    {
      "type": "flex",
      "altText": "Flex Message with Approve and Reject Buttons",
      "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "ข้อความตัวอย่าง",
              "weight": "bold",
              "size": "xl",
              "margin": "md"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "button",
                  "style": "primary",
                  "action": {
                    "type": "uri",
                    "label": "อนุมัติ",
                    "uri": "https://www.example.com/approve"
                  },
                  "flex": 1
                },
                {
                  "type": "button",
                  "style": "secondary",
                  "action": {
                    "type": "uri",
                    "label": "ปฏิเสธ",
                    "uri": "https://www.example.com/reject"
                  },
                  "flex": 1
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
])
    .then(() => {
      window.alert("Message has been sent");
    })
    .catch(e => {
      window.alert(e);
    });
}

function login() {
  liff.login();
}

function scanCode() {
  liff
    .scanCode()
    .then(result => {
      window.alert(JSON.stringify(result));
    })
    .catch(e => {
      window.alert(e);
    });
}

function openWindow() {
  liff.openWindow({
    url: "https://sirateek.me",
    external: true
  });
}

function closeWindow() {
  liff.closeWindow();
}

function logout() {
  if (liff.isLoggedIn()) {
    liff.logout();
    window.alert("Successfully to Logout");
    location.reload();
  }
}

function shareTargetPicker() {
  liff
    .shareTargetPicker([
      {
        type: "text",
        text: "Hello from LIFF2.0!"
      }
    ])
    .then(() => {
      alert("Shared to the friend(s) you picked");
    })
    .catch(function(res) {
      alert(res);
    });
}
