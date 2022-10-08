"use strict";

// global to hold the User instance of the currently-logged-in user
let currentUser;
let $favoriteStar = $(".star");



/******************************************************************************
 * User login/signup/login
 */

/** Handle login form submission. If login ok, sets up the user instance */

async function login(evt) {
  console.debug("login", evt);
  evt.preventDefault();

  // grab the username and password
  const username = $("#login-username").val();
  const password = $("#login-password").val();

  // User.login retrieves user info from API and returns User instance
  // which we'll make the globally-available, logged-in user.
  currentUser = await User.login(username, password);

  $loginForm.trigger("reset");

  saveUserCredentialsInLocalStorage();
  updateUIOnUserLogin();
}

$loginForm.on("submit", login);

/** Handle signup form submission. */

async function signup(evt) {
  console.debug("signup", evt);
  evt.preventDefault();

  const name = $("#signup-name").val();
  const username = $("#signup-username").val();
  const password = $("#signup-password").val();

  // User.signup retrieves user info from API and returns User instance
  // which we'll make the globally-available, logged-in user.
  currentUser = await User.signup(username, password, name);

  saveUserCredentialsInLocalStorage();
  updateUIOnUserLogin();

  $signupForm.trigger("reset");
}

$signupForm.on("submit", signup);

/** Handle click of logout button
 *
 * Remove their credentials from localStorage and refresh page
 */

function logout(evt) {
  console.debug("logout", evt);
  localStorage.clear();
  location.reload();
}

$navLogOut.on("click", logout);

/******************************************************************************
 * Storing/recalling previously-logged-in-user with localStorage
 */

/** If there are user credentials in local storage, use those to log in
 * that user. This is meant to be called on page load, just once.
 */

async function checkForRememberedUser() {
  console.debug("checkForRememberedUser");
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  if (!token || !username) return false;

  // try to log in with these credentials (will be null if login failed)
  currentUser = await User.loginViaStoredCredentials(token, username);
}

/** Sync current user information to localStorage.
 *
 * We store the username/token in localStorage so when the page is refreshed
 * (or the user revisits the site later), they will still be logged in.
 */

function saveUserCredentialsInLocalStorage() {
  console.debug("saveUserCredentialsInLocalStorage");
  if (currentUser) {
    localStorage.setItem("token", currentUser.loginToken);
    localStorage.setItem("username", currentUser.username);
  }
}

/******************************************************************************
 * General UI stuff about users
 */

/** When a user signs up or registers, we want to set up the UI for them:
 *
 * - show the stories list
 * - update nav bar options for logged-in user
 * - generate the user profile part of the page
 */

async function updateUIOnUserLogin() {
  console.debug("updateUIOnUserLogin");
  $allFavoritesList.hide();
  $loginForm.hide();
  $signupForm.hide();
  // $allStoriesList.show();
  await getAndShowStoriesOnStart();
  updateNavOnLogin();
}
//Listeners for updateFavorites
$allStoriesList.on("click", "i", updateFavorites);
$allFavoritesList.on("click", "i", updateFavorites);

/**Toggle bi-star-filled class on event target */
function toggleStar(evt) {
  $(evt.target).toggleClass("bi-star-fill");
  $(evt.target).toggleClass("bi-star");
}

/**updates "Favorite-status" of target story */
function updateFavorites(evt) { //do data/API first, then UI last
  toggleStar(evt); //TODO: what if API is down? move down to bottom of this function
  const storyIdClicked = $(evt.target).parents("li").attr("id"); //can we use closest?
  const favoriteStory = currentUser.favorites.find(story => story.storyId === storyIdClicked);
  //we're not await the asynchronous functions TODO: just add await at line 139 142
  if (favoriteStory) {
    currentUser.removeFavorite(favoriteStory);
  }
  else {
    currentUser.addFavorite(storyList.stories.find(story => story.storyId === storyIdClicked));
    //TODO: try not to nested function call!
  }
  console.log("Successfully updated!"); //this is a lie (without await)
}

/** Puts Favorite Stories on Favorites Page */
function putFavoritesOnPage() {
  //console.debug("putFavoritesOnPage");

  $allStoriesList.hide();
  $allFavoritesList.empty();

  // loop through favorites array of current user and generate
  //story markup for each story
  for (let favorite of currentUser.favorites) {
    const $favoriteStory = generateStoryMarkup(favorite);
    $allFavoritesList.append($favoriteStory);
  }

  $allFavoritesList.show();
}

$("#favorites-link").on("click", putFavoritesOnPage);
