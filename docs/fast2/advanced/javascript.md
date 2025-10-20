Using the [JSTransform](../catalog/transformer.md#JSTransform) task can comes in quite handy for any tweaking of metadata, but will also get you covered in case of heavier operations, as long as your JavaScript talents match you problem solving skills !
To iterate through all documents crossing your JS task, here is a short code snippet to help you get started:

```js
punnet.getDocuments().forEach(function (doc) {
  // do something
});
```

Any data within a punnet can be accessed, added, edited or remove ! Make sure beforehand to respect the punnet object architecture ([quick reminder here](../getting-started/overall-concepts.md#punnet) if need be 😉).

Let's now go through 3 quick scenarios.

## Example #1 **Map document properties from JSON** <!-- Commentaire nettoyé -->

Depending on your use-case, the metadata could have been stored within a JSON file. Parsing such file and build a punnet based on its content is another kind of operation where this Fast2 task comes in handy !

The following script is one way to parse a basic JSON metadata file.

```js
// First, get content as String
var content = punnet
  .getDocumentList()
  .get(0)
  .getContentSet()
  .getContent()
  .get(0);
var bytes = manager.getPunnetContentFactory().getContentAsByteArray(content);

var String = Java.type("java.lang.String");
var lines = new String(bytes);

// Then, parse this fragment as JSON
var jsonObject = JSON.parse(lines);

// Clear existing document and create a new one
punnet.getDocumentList().clear();
var doc = punnet.addDocument(com.fast2.model.punnet.DocumentId.id());

// Fetch all properties from existing fragment and create them as Document data
for (pty in jsonObject)
  doc.getDataSet().addData(pty, "String", jsonObject[pty]);
```

Once this script is executed, you'll end up with a punnet whose first and only document will have its dataset full of metadata matching both keys and values from the JSON file.

Considering the following input embedded in a JSON file:

```json
{
  "name": "testName",
  "contentPath": "C:/path/to/sample.pdf",
  "key": "value"
}
```

the ouput punnet would then look like this:

```json
<!-- Commentaire nettoyé -->,
      "documentId": "ffde4769-3acd-4964-ab72-5912f1e65e1e"
    }
  ],
  "punnetId": "punnet.json#1"
}
```

Next step could be to attach the document content to your document, now that you have the `contentPath` data with its value easily resolved by the [AlterDocumentContent](../catalog/transformer.md#AlterDocumentContent) task.

## Example #2 **Delete content based on property** <!-- Commentaire nettoyé -->

Let us now supposed we want to filter out document contents based on a given property. For convenience, the reference value is stored at the punnet level, under the property `punnetKeyA`.

The filter criterion is the following: if the content has the value of its data `contentKeyA` matching the punnet value, the content is left in place. Otherwise, the content is deleted.

Before the punnet enters the JSTransform task, its structure looks like this:

```xml
<?xml version='1.0' encoding='UTF-8'?>

	
		
			
				
					
					path/of/first/content
				
				
					path/of/second/content
				
			
			
			
			
		
	
	
		
			valueA
		
	
	<folderSet >

```

The first content should then remain as is, while the second one is expected to be removed by the script of our task.

Speaking of it, the strategy will be to iterate through all the documents of the punnet; and for each document, iterate through all its contents. Finally, a simple condition will evaluate whether the content is to be kept.

```js
punnet.getDocuments().forEach(function (document) <!-- Commentaire nettoyé -->);
});
```

Once the task is completed (in other terms, once the script has been executed), the output punnet new structure is lightened:

```xml
<?xml version='1.0' encoding='UTF-8'?>

	
		
			
				
					
					path/of/first/content
				
			
			
			
			
		
	
	
		
			valueA
		
	
	<folderSet >

```

As expected, the second content is gone.
If the content to filter out was inside a parent content of this document (i.e. punnet > document > first level content > second level content), this JS code should have been adapted to add one deeper level of content scanning:

```js
punnet.getDocuments().forEach(function (document) <!-- Commentaire nettoyé -->);
  });
});
```

## Example #3 **Get content path** <!-- Commentaire nettoyé -->

Another application of this task could be to reach values outside the scope of the document dataset, like for example the path of the associated content.

This value is stored tightly within the content, which is why passing via the manager component of the JSTransform task is required.

```java
punnet.getDocuments().forEach(function (doc) <!-- Commentaire nettoyé -->);
```

The temporary variable `path`, which the value of the absolute path will be stored into, can thereafter be accessed as a regular metadata under the key `pathCopy` alongside the other document metadata.

We can envision further operations of this value (or any other from the dataset), such as truncating, hashing, comparison etc.

## Bonus tip

When a Java class needs to be manipulated within the JavaScript code, a variable analogous to a Java class needs to be created:

```js
var Id = Java.type("com.example.package.Id");

punnet.getDocuments().forEach(function (doc) <!-- Commentaire nettoyé -->);
```

## In the end, it's all just about you

As you can imagine, several other use-cases can be addressed by implementing on-the-fly JS scripts, just like the ones showed above. The capabilities of this task are endless: team with Fast2 on this fight floor, and tackle your migration with your sharpened coding skills !
