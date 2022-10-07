Hack-or-Snooze
Project notes and info for our first sprint!!!

<!-- successful test GET below -->
~ % curl -i https://hack-or-snooze-v3.herokuapp.com/stories

HTTP/1.1 200 OK
Server: Cowboy
Connection: keep-alive
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 3032
Etag: W/"bd8-4lXim73YeIUoYCUpyQlZr/nkWFA"
Date: Thu, 06 Oct 2022 17:20:45 GMT
Via: 1.1 vegur

{"stories":[{"author":"fakeJoel","createdAt":"2022-10-06T17:19:55.278Z","storyId":"da8fd200-1c43-4635-892b-ed68be791130","title":"java 101","updatedAt":"2022-10-06T17:19:55.278Z","url":"https://www.google.com/","username":"five5"},{"author":"AP","createdAt":"2022-10-06T00:23:59.331Z","storyId":"d242f712-f82a-4769-a4b8-ff3aa01de169","title":"cool house","updatedAt":"2022-10-06T00:23:59.331Z","url":"https://www.nytimes.com/2022/10/05/realestate/david-lee-hoffman-california-eviction.html","username":"testUsr"},{"author":"ur mom","createdAt":"2022-10-06T00:12:17.410Z","storyId":"53ca3ff5-bbe5-49cf-8249-d459ad4d2a0b","title":"What is a tree","updatedAt":"2022-10-06T00:12:17.410Z","url":"https://ecotree.green/en/blog/what-is-a-tree","username":"phoenixP95"},{"author":"Earth","createdAt":"2022-10-06T00:00:46.965Z","storyId":"ecd2ee7d-e245-4e2c-9ed7-d24d165326f4","title":"Rainbow Factz","updatedAt":"2022-10-06T00:00:46.965Z","url":"https://www.farmersalmanac.com/all-about-rainbows-17600","username":"phoenixP95"},{"author":"Elie Schoppik","createdAt":"2022-10-06T00:00:11.141Z","storyId":"adb9aded-ba4c-425a-9496-7aa99d18572b","title":"‘Buffett Indicator’ Warns Stocks Doomed for Worse Crash Than 2008","updatedAt":"2022-10-06T00:00:11.141Z","url":"https://www.ccn.com/buffett-indicator-warns-stocks-doomed-worse-crash-than-2008/","username":"rubenizag"},{"author":"Elie Schoppik","createdAt":"2022-10-06T00:00:11.141Z","storyId":"87659458-0703-415c-a4e2-47e5afb38b30","title":"Springboard's latest news!","updatedAt":"2022-10-06T00:00:11.141Z","url":"https://www.springboard.com/","username":"rubenizag"},{"author":"Elie Schoppik","createdAt":"2022-10-06T00:00:11.141Z","storyId":"6e9899c6-ffb4-4893-aaca-75f69f6c5ee5","title":"NES Emulator in Rust","updatedAt":"2022-10-06T00:00:11.141Z","url":"https://github.com/spieglt/nestur","username":"rubenizag"},{"author":"Elie Schoppik","createdAt":"2022-10-06T00:00:11.141Z","storyId":"0e0307c1-c50e-4f5f-b3fd-88e3eb9fa666","title":"Google!","updatedAt":"2022-10-06T00:00:11.141Z","url":"https://www.google.com","username":"rubenizag"},{"author":"Elie Schoppik","createdAt":"2022-10-06T00:00:11.141Z","storyId":"cc8403fc-16d5-486b-9335-1ea078a5886d","title":"Ottawa Library fines people using unreliable automatic calling system (1994)","updatedAt":"2022-10-06T00:00:11.141Z","url":"http://catless.ncl.ac.uk/Risks/16.54.html#subj2","username":"rubenizag"},{"author":"Elie Schoppik","createdAt":"2022-10-06T00:00:11.141Z","storyId":"e647ff70-44f1-4713-b83d-c6633d78e399","title":"Stock Picks from Space (2019)","updatedAt":"2022-10-06T00:00:11.141Z","url":"https://www.theatlantic.com/magazine/archive/2019/05/stock-value-satellite-images-investing/586009/","username":"rubenizag"},{"author":"Elie Schoppik","createdAt":"2022-10-06T00:00:11.141Z","storyId":"72119c8f-31ec-456a-914a-0b788f128d26","title":"Products I wish existed","updatedAt":"2022-10-06T00:00:11.141Z","url":"http://blog.eladgil.com/2020/01/products-i
<!-- successful GET test above -->

<!-- successful POST sign up user below -->
~ % curl -i \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"user":{"name":"Test User","username":"clchen-arcadia","password":"foo"}}' \
      https://hack-or-snooze-v3.herokuapp.com/signup

HTTP/1.1 201 Created
Server: Cowboy
Connection: keep-alive
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 317
Etag: W/"13d-XWGPdIfmzN3+N6S8mfHt/yqMMK8"
Date: Thu, 06 Oct 2022 17:23:52 GMT
Via: 1.1 vegur

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsY2hlbi1hcmNhZGlhIiwiaWF0IjoxNjY1MDc3MDMyfQ.peT4qGxySF3B1V6uAY0QlTBfQZ9meqBi-COk9zu3sTk","user":{"createdAt":"2022-10-06T17:23:52.445Z","favorites":[],"name":"Test User","stories":[],"updatedAt":"2022-10-06T17:23:52.445Z","username":"clchen-arcadia"}}%
<!-- successful POST sign up user above -->

<!-- login info below -->
username: clchen-arcadia
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsY2hlbi1hcmNhZGlhIiwiaWF0IjoxNjY1MDc3MDMyfQ.peT4qGxySF3B1V6uAY0QlTBfQZ9meqBi-COk9zu3sTk
<!-- login info above -->

<!-- successful POST for create new story below -->
~ % curl -i \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsY2hlbi1hcmNhZGlhIiwiaWF0IjoxNjY1MDc3MDMyfQ.peT4qGxySF3B1V6uAY0QlTBfQZ9meqBi-COk9zu3sTk", "story": {"author":"Elie Schoppik","title":"Four Tips for Moving Faster as a Developer", "url": "https://www.rithmschool.com/blog/developer-productivity"} }' \
      https://hack-or-snooze-v3.herokuapp.com/stories

HTTP/1.1 201 Created
Server: Cowboy
Connection: keep-alive
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 308
Etag: W/"134-ZwxYYoajB/czS4yKG94i+F+rdzM"
Date: Thu, 06 Oct 2022 17:31:25 GMT
Via: 1.1 vegur

{"story":{"author":"Elie Schoppik","createdAt":"2022-10-06T17:31:25.301Z","storyId":"c2f4b1f4-994f-4385-a256-516204b56ffe","title":"Four Tips for Moving Faster as a Developer","updatedAt":"2022-10-06T17:31:25.301Z","url":"https://www.rithmschool.com/blog/developer-productivity","username":"clchen-arcadia"}}%
<!-- successful POST for create new story above -->

storyId:

c2f4b1f4-994f-4385-a256-516204b56ffe

useful test line:

currentUser.addFavorite(newStory);
currentUser.removeFavorite(newStory);



POST
https://hack-or-snooze-v3.herokuapp.com/users/username/favorites/storyId
DELETE
https://hack-or-snooze-v3.herokuapp.com/users/username/favorites/storyId

https://hack-or-snooze-v3.herokuapp.com/user/clchen-arcadia/favorites/c2f4b1f4-994f-4385-a256-516204b56ffe?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsY2hlbi1hcmNhZGlhIiwiaWF0IjoxNjY1MDc3MDMyfQ.peT4qGxySF3B1V6uAY0QlTBfQZ9meqBi-COk9zu3sTk

https://hack-or-snooze-v3.herokuapp.com/user/clchen-arcadia/favorites/c2f4b1f4-994f-4385-a256-516204b56ffe?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsY2hlbi1hcmNhZGlhIiwiaWF0IjoxNjY1MDc3MDMyfQ.peT4qGxySF3B1V6uAY0QlTBfQZ9meqBi-COk9zu3sTk
