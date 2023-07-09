import React from "react";

const Test = () => {
  let roomListDiv = document?.getElementById("room-list");
  let messagesDiv = document.getElementById("messages");
  let newMessageForm = document.getElementById("new-message");
  let newRoomForm = document.getElementById("new-room");
  let statusDiv = document.getElementById("status");

  let roomTemplate = document.getElementById("room");
  let messageTemplate = document.getElementById("message");

  let messageField = newMessageForm.querySelector("#message");
  let usernameField = newMessageForm.querySelector("#username");
  let roomNameField = newRoomForm.querySelector("#name");

  var STATE = {
    room: "lobby",
    rooms: {},
    connected: false,
  };

  function addRoom(name) {
    if (STATE[name]) {
      changeRoom(name);
      return false;
    }

    var node = roomTemplate.content.cloneNode(true);
    var room = node.querySelector(".room");
    room.addEventListener("click", () => changeRoom(name));
    room.textContent = name;
    room.dataset.name = name;
    roomListDiv.appendChild(node);

    STATE[name] = [];
    changeRoom(name);
    return true;
  }
  function init() {
    console.log("here");
    // Initialize some rooms.
    addRoom("lobby");
    addRoom("rocket");
    changeRoom("lobby");
    addMessage(
      "lobby",
      "Rocket",
      "Hey! Open another browser tab, send a message.",
      true
    );
    addMessage("rocket", "Rocket", "This is another room. Neat, huh?", true);

    // Set up the form handler.
    newMessageForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const room = STATE.room;
      const message = messageField.value;
      const username = usernameField.value || "guest";
      if (!message || !username) return;

      if (STATE.connected) {
        fetch("/message", {
          method: "POST",
          body: new URLSearchParams({ room, username, message }),
        }).then((response) => {
          if (response.ok) messageField.value = "";
        });
      }
    });

    // Set up the new room handler.
    newRoomForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const room = roomNameField.value;
      if (!room) return;

      roomNameField.value = "";
      if (!addRoom(room)) return;

      addMessage(room, "Rocket", `Look, your own "${room}" room! Nice.`, true);
    });

    // Subscribe to server-sent events.
    subscribe("/events");
  }
  init();

  return (
    <div>
      <div id="sidebar">
        <div id="status" className="pending"></div>

        <div id="room-list">
          <div id="room">
            <button className="room"></button>
          </div>
        </div>

        <form id="new-room">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="new room..."
          ></input>
          <button type="submit">+</button>
        </form>
      </div>

      <div id="content">
        <div id="messages">
          <div id="message">
            <div className="message">
              <span className="username"></span>
              <span className="text"></span>
            </div>
          </div>
        </div>

        <form id="new-message">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="guest"
          />
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Send a message..."
          />
          <button type="submit" id="send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Test;
