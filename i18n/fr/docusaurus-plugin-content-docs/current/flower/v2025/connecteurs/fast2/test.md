---
title: Test
description: Valider la configuration d'une injection Fast2
intro: Afin de valider la configuration d'une tâche d'injection dans FlowerDocs, il est possible de suivre les étapes suivantes pour définir une source de punnet.
---

# Tâche d'import


* Dans la map, ouvrir la tâche ``ImportTask``
* Définir la propriété ``fileScanner`` avec un objet de classe ``DirectoryScanner`` avec les propriétés : 
 
  * ``filters`` avec le chemin des fichiers de description (ou ``punnet``) (par exemple : `D:\fast2\punnet1.xml`)
  * ``xmlSkipParse`` désactivée



# Exemple de punnet

Afin de déterminer les documents de test à injecter dans FlowerDocs, il est nécessaire de définir un ``punnet`` au format XML attendu par Fast2.
Ce fichier XML permet de préciser la classe du document à injecter et les dossiers dans lesquels le classer comme par exemple : 

```xml
<?xml version='1.0' encoding='UTF-8'?>
<ns:punnet xmlns:ns="http://www.arondor.com/xml/document">
	<documentset>
		<ns:document name="Doc1" canCreate="true">
			<ns:dataset>			
				<ns:data name="className" type="string">
					<ns:value>Document</ns:value>
				</ns:data>
				<ns:data name="name" type="string">
					<ns:value>Mon Document 2</ns:value>
				</ns:data>
			</ns:dataset>
			<ns:folderset>
				<ns:folder name="Test6">
					<ns:dataset>			
							<ns:data name="className" type="string">
								<ns:value>Folder</ns:value>
							</ns:data>
					</ns:dataset>
					<ns:folder name="parents" canCreate="true">
						<ns:dataset>			
							<ns:data name="className" type="string">
								<ns:value>Folder</ns:value>
							</ns:data>
						</ns:dataset>
						<ns:folder name="A1" canCreate="true">
							<ns:dataset>			
								<ns:data name="className" type="string">
									<ns:value>Folder</ns:value>
								</ns:data>
							</ns:dataset>
							<ns:folder name="A6" canCreate="true">
								<ns:dataset>			
									<ns:data name="className" type="string">
										<ns:value>Folder</ns:value>
									</ns:data>
								</ns:dataset>
							</ns:folder>
						</ns:folder>
					</ns:folder>
				</ns:folder>
			</ns:folderset>
		</ns:document>
	</documentset>
</ns:punnet>
```