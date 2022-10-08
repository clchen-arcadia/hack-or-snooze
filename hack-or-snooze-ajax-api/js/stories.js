"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <span class="star">${getStarHTML(story)}</span>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** This function will return a string of HTML to be used in a template literal.
 * Function accepts the story being marked up.
 * Will return empty string if there is no currentUser. If there is a currentUser,
 * function will return HTML for a star <i> that is bi-star-fill if the story is a favorite
 * in the local currentUser.favorites array of stories, and merely a bi-star if not.
 */
function getStarHTML(story) {
  if (currentUser) {
    if (currentUser.favorites.some(storyFav => storyFav.storyId === story.storyId)) {
      // currentUser has this story favorited.
      return `<i class="bi bi-star-fill"></i>`;
    }
    else {
      //currentUser does not have this story favorited.
      return `<i class="bi bi-star"></i>`;
    }
  }
  else {
    //there is no currentUser
    return '';
  }
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

$("#submit-story").on("submit", function (evt) {
  evt.preventDefault();
  getNewStoryFromUser();
  $submitStory.hide();
  $submitStory.trigger("reset");
  putStoriesOnPage();
});

/** Collects new Story data when user submits new story via the form,
 * passes it into Story.addStory(). No parameters. Returns nothing.
 */

async function getNewStoryFromUser() {
  const storyInputData = {
    title: $("#submit-title").val(),
    author: $("#submit-author").val(),
    url: $("#submit-url").val()
  };

  let newStory = await storyList.addStory(currentUser, storyInputData);
  const $story = generateStoryMarkup(newStory);
  $allStoriesList.prepend($story);
}
