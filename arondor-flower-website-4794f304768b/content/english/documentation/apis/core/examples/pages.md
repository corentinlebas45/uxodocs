+++
date = "2018-04-02T12:20:01+01:58"
title = "Retrieve page content"
description = "Recover the HTML code of your pages"
+++

The PageService service lets you perform `showPublicPage` and `showPrivatePage` operations on your scope's pages.

* `showPublicPage` retrieves the HTML content of a public page.

* `showPrivatePage` retrieves the HTML content of a private page.

# Examples

The following examples show how to retrieve a public or private page from your scope.


GET {{core}}/rest/public/{scope}/pages/{path} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
scope: the FlowerDocs scope
path: the page to retrieve

-- Headers --
token: {token}
Content-Type: application/json

GET {{core}}/rest/private/{scope}/pages/{path} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
scope: the FlowerDocs scope
path: the page to retrieve

-- Headers --
token: {token}
Content-Type: application/json
