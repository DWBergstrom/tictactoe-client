

# Tic Tac Toe Game Project


### Planning and process

To plan the project, I began with pen-and-paper wireframes to better visualize the outcome.  Once I had a general idea of the layout, I moved on to game logic,
starting strictly with psuedo-code.

After the psuedo code was structured, I moved to writing and testing the javascript for the game logic only (no API or auth yet).  Once the logic was down, I added the game board HTML and added the UI click handlers and events for the local game (still no API yet).

Next, auth:  I made sure the authentication events were functioning correctly (sign up, sign in, sign out, change password).

Finally, I tied in the game API and rolled it into the local game logic, as well as into the UI events.

### Wireframe and user stories:
+ [wireframe] (https://drive.google.com/file/d/1Qno1IxoMvwtiHDbqi2QBDZRj0MfcRASS)
+ User stories:
  - As a user, I can:
    - create an account
    - sign in and sign out
    - change my password
    - reset the game board to create a new game
    - click a square on the game board to change it to my game character (X)
    - win the game if I select three of my character text in a row
    - play on differnt sized devices
    - see how many games I have played
    - save my played games to a server

### Some roadblocks I encountered:
+ making sure that local game logic flowed properly once game API events were tied in (watching out for asynchronous issues)
+ making sure to structure each JS file for a given purpose (auth, ui, etc.)
+ CSS styling, especially positioning

### Technologies used:
+ JavaScript for the game logic
+ AJAX calls to the Ruby backend api
+ curl for testing API calls
+ HTML and CSS for styling (including bootstrap)

### Issues to resolve as well as planned improvements:
+ ensure that each function is appropriately located in each JS file (these could most likely be somewhat condensed in my project)
+ ensure gameBoard naming is consistent, and that the local copy is readily discernible from the API copy
+ Improve game statistics (games completed)
+ Fix styling:
  - add nav bar for auth items
  - add better box structure for game alerts
  - better board styling (colors, etc.)
+ Long term:
  - Play against the computer
  - Keep playing locally when network disconnects; push updates on reconnect
  - Multiplayer support
