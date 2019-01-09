[![Build Status](https://travis-ci.org/kcharles52/mydiary-front.svg?branch=develop)](https://travis-ci.org/kcharles52/mydiary-front)
[![Maintainability](https://api.codeclimate.com/v1/badges/f8195dae1f132bd17c75/maintainability)](https://codeclimate.com/github/kcharles52/mydiary-front/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f8195dae1f132bd17c75/test_coverage)](https://codeclimate.com/github/kcharles52/mydiary-front/test_coverage)
# MyDiary

This is an online application that helps users to record their memories.

## How to use the application
* Got to the link https://mydiary-front.herokuapp.com/
* Register for an account
* You will be automatically logged in
* The home page for a logged in user displays diary entries and a message if there are none
* Click on the endpoint `create journel` to create a diary entry
* You will automatically be directed to the list of entries
* You can edit an entry by clicking on the edit link under the entry
* You can view a single entry by clicking on the title on an entry


## Endpoints
HTTP Method|End point |Action        |Note
-----------------|---------------------------|--------------|--------------
POST | /| Register |Register a user|
POST | /|login | Login a user|
GET| /home  | fetch |Fetch all entries for a user
GET | /entry/<entry_Id> |fetch |Fetch the details of an entry for a user |
POST | /addEntry | add |Add an entry|
PUT | /edit/<entry_id> | Edit|Modify a diary entry|An entry can only be modified on the same day it was created.
DELETE | /delete/<entry_id> | Delete| Delete an entry

## Author
[Kato Charles](https://github.com/kcharles52)