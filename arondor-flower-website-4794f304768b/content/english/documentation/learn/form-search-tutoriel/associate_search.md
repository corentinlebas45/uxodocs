+++
date = "2020-06-06T12:20:01+02:00"
title = "Association"
root = "false"
+++

{{%info%}}

Link a search to a team of users to make it usable.

{{%/info%}}

</br>

To do this: 

</br>

* Go to the **Administration > Identities > Team**menu,
* Select the user team to which the form should be linked (here `ALL_USERS`),
* In the **Properties**tab, click on the  **+** button (at the top of the property list) to create the new property at the bottom of the page,
* Choose **Search template** in the drop-down list,
* Enter the `value` field with **dossierClientSearch(fr=Dossiers Client,en=Client folders)**,
* Click on the **Save**button.

</br>

*Note: The `Value` field respects a format: `<identifiant>(<langue>=<libellé>,<langue2>=<libellé2>)`. The identifier is the id and the label is its name in the given language.*

</br>

Advanced search is now accessible and usable via the **Search > Client Folders**  menu:

</br> 

{{< img src="/img/documentation/learn/flowerDocs_search_advanced.png">}}
