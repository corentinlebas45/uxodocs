---
title: Sort documents in a punnet
---

![photo cover](../assets/img/cookbooks/photo-cover.avif)


As we have seen before in the [punnet structure](../getting-started/overall-concepts.md#punnet), punnets can be composed with several different documents, each one of them embedding its own data and values.

Whether it be for the purpose of processing order of these documents or any other operation requiring these same documents to be sorted in a different order, the catalog provides sufficient tooling to tackle this challenge.

For the matter, we will consider having to sort the documents based on a `Date` data, which will go by the name of "creation_date".

## 🧐 Where do we come from ?
For the educational aspect of this topic, let us consider a punnet gathering several documents, all with the same data : `creation_date`, currently `String`-typed.

Our punnet would look like this:


```txt
├─ Punnet
│     ├─ document_1
│     │       └─ dataset
│     │             ├─ creation_date=03/3/2020 3:03:03 PM
│     │             └─ ...
│     ├─ document_2
│     │       └─ dataset
│     │             ├─ creation_date=01/1/2020 1:01:01 PM
│     │             └─ ...
│     ├─ document_3
│     │       └─ dataset
│     │             ├─ creation_date=02/2/2020 2:02:02 PM
│     │             └─ ...
│     └─ ...
└─ ...
```


As we can see, the correct order should be **document_2**, then **document_3** and finally **document_1**.

## 🤔 Where to go ?
At a glance, we are just couple steps away from sorting our documents : we need to go over all documents, dig into their dataset and retrieve the value of the sorting criteria.

However we need to go through a String-to-Date conversion so the sorting will be done correctly over datetimes values, instead of alphabetical values.

!!! Check

    We will just reorganise all the documents within the punnet, they will be considered like tiles to rearrange, but we need not to mix their own data up (for obvious data integrity reasons).



## 🚀 Way to go !
The JSTransform task will be our hobbyhorse here since it offers the ability to handle the punnet at a pretty low cost in terms of performance and setup.


### ⚗️ JavaScript elaboration
You will need to add a new JSTransform task right after any task in your workflow have the punnet with all the documents (ex/ a ContentExtractor with all versions of a document extracted).

This JavaScript-ish task will be configured with the following script :

```js
// Java types required for Java objects
var SimpleDateFormat = Java.type("java.text.SimpleDateFormat");
var Document = Java.type("com.fast2.model.punnet.Document");
var Collections = Java.type("java.util.Collections");

// Global parameters
var dataToSort = "creation_date";
var dateFormat = "MM/d/yyyy hss aa";

var formatter = new SimpleDateFormat(dateFormat);

var compareByDate = function (doc1, doc2) <!-- Expression supprimée -->;
  } catch (e) {}
  return 0;
};

Collections.sort(punnet.getDocuments(), compareByDate);
```

Explanations :

- L7 : the data which you want to sort, in our case the `creation_date`
- L8 : the date format we deduced from the `String` value of the previous data 
- L12-L17 : we need to parse the value as date, to compare the date as so instead of regular `String` values (which could be too approximative) 

The output of this task will be the same documents in the punnet, just ordered by creation date ascending.




Head out now to the Run screen, and start your campaign.

### 🏁 Result
At the latest stage of your workflow, the document dataset is filled with the properties found in the JSON and integrated as metadata.


```txt
├─ Punnet
│     ├─ document_2
│     │       └─ dataset
│     │             ├─ creation_date=01/1/2020 1:01:01 PM
│     │             └─ ...
│     ├─ document_3
│     │       └─ dataset
│     │             ├─ creation_date=02/2/2020 2:02:02 PM
│     │             └─ ...
│     ├─ document_4
│     │       └─ dataset
│     │             ├─ creation_date=03/3/2020 3:03:03 PM
│     │             └─ ...
│     └─ ...
└─ ...
```


## 👏 Let's sum up
We can bring this scenario further by sorting based on 2 or more data, regular `int` values or else.

Since its just sorting, you might want to sort the documents in the reverse order. In this example, we left the default behavior (ascending), but a minor tweak to the previous script and you'll be good to go !

If this use-case echoes your early needs, other tasks can be tied to this map to reach a higher level of complexity characteristic of real-world migration projects.