# Background
This is the frontend part of our Heroes Vs Zombies assignment, created as the final project for the Accelerated Learning course in Fullstack .Net development (Noroff). The HvZ Frontend is built using JavaScript and React and is a single-page application designed to manage physical games of Humans vs Zombies. The primary objective of this assignment is to connect our knowledge of frontend and backend development to create a fully functional and secure application that runs on Azure with Keycloak security and a database to store and retrieve data.

# Description
The main feature of the application is to act as a game management app for the Humans versus Zombies game. Users can join the game, chat with other players, and view game details such as the current game geo location, their own location, as well as their team members' locations. The app also allows players to view mission markers with descriptions, safezones, and gravestone markers for when humans died and turned to zombies on a live interactive map. Additionally, the app includes a unique feature where zombie players can turn human players into zombies by scanning their QR bitecode with a zombie's QR scanner.

# Login/Register
The application uses Keycloak for user authentication and registration. Users can register as a new user within the application and then join available games from the game list. When a user joins an available game (a game that hasn't ended), they are added as a player to the selected game and equipped with either a QR scanner as a zombie or a unique bitecode QR code, which zombies can scan to "kill" the player.

# QR-Code / QR-Scanner
The application includes a unique feature where players receive a unique QR code as their Bitecode, which is required by zombies to scan to "catch" them. This eliminates the need for players to manually input a long code each time they kill a human player.
![QRExample](https://user-images.githubusercontent.com/44801529/229130043-53129ad6-9e70-4ecf-bdb0-8040baa4ebe0.png)


# In game chat
We have added a chat system to our game to enhance the player experience by facilitating communication between players. The chat system allows players to communicate globally and in different categories, with some categories restricted to certain players. For example, the "squad" category is restricted to squad mates only, and messages cannot be seen by players outside of the category.

Additionally, the chat system includes a "zombie" tab for the local category, which enables zombies to communicate with each other exclusively, while humans cannot see their messages. Similarly, humans have their own local tab to communicate exclusively with other humans.

By implementing these different chat categories, players can communicate more efficiently and effectively with the players they need to, enhancing strategy and teamwork.
![ChatExample](https://user-images.githubusercontent.com/44801529/229127639-34473043-408c-40f9-a680-22f6b48c458f.png)

# Interactable Leaflet Map
We have introduced an Interactable Leaflet Map feature in our game to enhance the player experience by providing an interactive map of the game location. The map includes a number of features, such as real-time updates on the location of players within the player's faction, represented as yellow dots. The player location updates every 5 seconds, enabling players to track each other's movements and plan accordingly.
- We have also included grave markers on the map to show where players have been captured and killed by zombies. These markers can include an optional short description of how the player died.
- SafeZones are displayed as blue circles where the human players are safe from being captured by zombies. 
- The map also displays interactive game missions, complete with their given geo-locations, radius, and title. Players can click on the mission circles to highlight them and access mission descriptions as a tab in the game information.
![MissionExample](https://user-images.githubusercontent.com/44801529/229132877-f365d414-4a25-49d4-b124-31b879989fd9.png)
- To ensure that players can easily locate the playing area on the map, we have set up map bounds so that players cannot pan away from the game location.
overall We believe that this Interactable Leaflet Map feature will greatly enhance the player experience, improving strategy and coordination between players, and making the game more immersive and engaging.

-------------------------------------------------
# Admin section
Our Admin section is designed to make it easier for game masters (Admins) to control the game by modifying elements such as rules, map locations, and mission markers. As an admin, you can access the Admin section to create, edit, or delete maps and games.
![adminOptions](https://user-images.githubusercontent.com/44801529/229136464-8d10b476-b4ec-4f55-97d5-6892238746f9.png)

# Create Map
When you click on the Create button, an interactable map is displayed, and you can select the area where you want the game to take place. You can then specify the properties of the map, such as the Description and the Map Geo location Radius. Once the map is created, you can input the Title of the game, a game description, begin time, and end time. This will allow you to create a new game that is customized to your liking.
![Create Map](https://user-images.githubusercontent.com/44801529/229137448-47426b02-6752-4fb8-8603-684a5c09d127.png)

# Edit Map
When you click on the Edit button, a list of games will be displayed, and you can choose the game that you want to modify. You will then be able to change every aspect of the earlier created game, allowing you to fine-tune the game to your requirements.
![editGame](https://user-images.githubusercontent.com/44801529/229139431-2cd64d3a-8b60-47cb-892c-b709393bfce6.png)

# Delete 
When you click on the Delete button, you will be presented with two options: Maps or Games. Clicking on a game or map in the list will highlight it in red, indicating that it is marked for deletion. If you click on it again, it will be permanently deleted.
![delete](https://user-images.githubusercontent.com/44801529/229140380-af8ac71b-6568-4339-89a5-2fa574e469d6.png)

We believe that our Admin section is an essential feature that allows game masters to easily modify the game, enabling them to create more engaging and customized gameplay experiences.
-------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
