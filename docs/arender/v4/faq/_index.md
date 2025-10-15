---
title: "FAQ"
draft: false
layout: faq
icon: mdi-comment-question-outline
weight: 10
keywords: ["faq", "purge", "version" ]
StartPage : '?'
---

[shortcode]

Certaines situations et/ou environnements exigent l'utilisation d'une
autre JVM que celle définit par défaut.

Pour cela, il faudra placer dans la variable d'environnement PATH de
l'utilisateur lançant ARender ou le service ARender le chemin vers le
dossier contenant les binaires java.
{{</ faq >}}

[shortcode]

ARender dans sa version actuelle est traduit en 13 langues :

Arabe, Allemand, Anglais, Espagnol, Français, Italien, Portuguais,
Chinois, Portuguais Brésilien, Hébreux, Russe, Polonais,Japonais.

Il est également possible d'ajouter de nouvelles langues dans le
déploiement WAR ou EAR d'ARender en ajoutant un fichier de label.

Pour ce faire, copiez la traduction anglaise des labels située dans
WEB-INF/classes/labels/ARenderLabels_en.properties et créez votre
propre traduction en la renommant avec la locale que vous souhaitez voir
supportée.
[shortcode]

[shortcode]
[shortcode]
Suite à une nouvelle installation, il se peut que côté client
(utilisateur) garde en cache une version ultérieure et que cela provoque
un problème d’incompatibilité avec l’application ARender Web-UI
nouvellement installée.

Le problème de compatibilité est réglé de lui-même à la péremption du
cache du navigateur Web, réglé en général avec un maximum de 24h.

Pour remédier à ce problème immédiatement, il suffit de purger le cache
du navigateur de l’utilisateur.

[shortcode]
[shortcode]
[shortcode]

1) Cliquer sur « _Outils_ » puis « _Options Internet_ »
2) Dans la partie « _Fichiers Internet temporaires_ », cliquer sur les
  « _Supprimer les fichiers_ »
3) Cocher la case « _Supprimer tout le contenu hors connexion_ », puis
  cliquer sur « _OK_ »

[shortcode]

[shortcode]

1) Cliquer sur « _Outils_ » puis « _Options Internet_ »
2) Dans la partie « _Historique de navigation_ », cliquer sur «
  _Supprimer_ »
3) Cocher la case « _Fichiers Internet Temporaires_ », puis cliquer sur
  « _Supprimer_ »
[shortcode]
[shortcode]

[shortcode]
Ce problème provient de la conception des applications dans le
framework GWT, qui utilise une ressource spécifique au chargement nommée
« arendergwt.nocache.js ». La mention ‘.nocache.’ devrait forcer le
navigateur à ne pas utiliser de cache pour ce fichier, mais n’est guère
respectée par Internet Explorer.
[shortcode]

[shortcode]

[shortcode]

Les fichiers de logs retranscrivent les informations et erreurs liées à
l’utilisation d’ARender.

### Serveur de rendition

Pour avoir accès aux logs aller dans le répertoire « logs » du dossier
d’installation du serveur de rendition (par défaut : « C:Program
FilesARender-Rendition-{NUMÉRO-VERSION}/logs »)

### WebSphere

Pour avoir accès aux logs applicatifs ARender, aller dans le répertoire
« logs » du dossier d’installation de WebSphere

- Par défaut :

  _«C:Program Files\IBMWebSphere\AppServer\profiles\App\Srv01\logs»_

- Les logs de FileNet CE sont en général situés par défaut :

  _« C:Program Files\IBMWebSphere\AppServer\profiles\App\Srv01\FileNet\server1»_

[shortcode]

[shortcode]

A l'aide d'ARender, vous pouvez visualiser un grand nombre de fichiers
comme :

En standard :

- PDF - toutes versions
- Images : JPEG, PNG, TIFF, GIF, BMP, JNG, PBM, PSD, EPS, PS, DCM
  (Format DICOM) et [tous les formats supportés par ImageMagick](http://www.imagemagick.org/script/formats.php)
- Microsoft Office (97-2013) : Word (.doc, .docx) , PowerPoint (.ppt,
  .pptx), Excel (.xls, .xlsx), WordML (.xml), Visio (.vsd)
- Fichiers composites : ZIP, EML, MSG
- Autres : TXT, OpenDocument (LibreOffice or OpenOffice)

En option :

- AutoCAD DWG

[shortcode]

[shortcode]
[shortcode]
La gestion des versions ARender est composée comme suit :

[Version de Génération].[Version Majeure].[Version Mineure]

Optionnellement, une version de packaging peut être introduite, sous la
forme :

[Version de Génération].[Version Majeure].[Version Mineure]-[Version Packaging]

_Chaque numéro indique :_

- **Version de Génération :** La génération représente les choix
  technologiques du produit, et constituent donc une rupture
  importante avec la génération précédente.
- **Version Majeure :** Chaque version majeure apporte des changements
  d'API et d'interface, ainsi que des nouvelles fonctionnalités
  importantes.
- **Version Mineure :** Chaque version mineure apporte des corrections
  d'anomalies, ainsi que des fonctionnalités additionnelles
  généralement désactivées par défaut.
- **Version Packaging :** Chaque version de packaging apporte uniquement
  des changements de configuration / paramétrage par défaut, sans
  changement de code du produit.

[shortcode]
[shortcode]
**Versions majeures et mineures :** la version majeure 2.3.0 a été publiée
le 18/06/2014, et a introduit des changements dans les API d'Annotations
et les API Javascript.

**Versions mineures et packaging :** la version mineure 2.3.5 a été publiée
le 28/01/2015, et la version 2.3.5-1 a été publiée le 02/02/2015.
[shortcode]
[shortcode]

### Rythme de publication

Une nouvelle version majeure est publiée chaque année, fin juin. Cette
version peut se traduire par l'incrémentation de la version de
génération. Ainsi, 2015 va connaître l'arrivée de la troisième
génération du produit, ARender 3.0.

Une nouvelle version mineure est publiée toutes les 6 semaines. Les
versions de packaging ne sont publiées qu'en cas de difficultés
remontées sur les versions mineures, à la demande.

### Compatibilité ascendante

Toutes les versions mineures d'une même version majeure sont
rétro-compatibles. Ceci est vrai pour :

- Les paramétrages spécifiques réalisés côté client ou serveur
- Les développements spécifiques réalisés sur les différentes API
- L'interopérabilité entre les serveurs de Présentation (Web-UI) et
  Rendition

Ceci implique donc que les montées de versions majeures peuvent être
impactantes pour les développements réalisés et peuvent requérir une
montée de version simultanée entre les différents modules d'ARender.

## Support Produit

Arondor s'engage à supporter les dernières versions mineures des deux
dernières versions majeures, soit les versions des deux dernières
années.
[shortcode]
[shortcode]

[shortcode]
[shortcode]
La plupart des documents visualisés dans ARender sont convertis en
images pour être visualisés par le navigateur.

Cette transformation (rendition) a plusieurs avantages :

- **Streaming :** seulement les pages visualisées sont envoyées au client
- **Réduction de la bande passante :** en général, les images produites
  sont de taille inférieure au document source
- **Qualité :** le travail étant opéré côté serveur, la qualité de
  restitution ne dépend pas du navigateur (polices installées,
  versions de composants graphiques, ...).

En général, le poids moyen d'une page plein écran est de l'ordre de
100ko (un exemple
[ici](http://arender.fr/ARender/ARender.html?url=http://www.arender.fr/pdf/arondor-private/itu/aroms2pdf/Appendices-A.docx.pdf)).

Mais lorsque l'image est complexe (documents numérisés, photos), le
poids par défaut peut exploser. Sur [ce
document](http://arender.fr/ARender/ARender.html?url=http://www.arender.fr/pdf/pdf/Aquarama038.pdf),
nous sommes plutôt à 900ko. De plus, cela dépend de la résolution de
l'écran du navigateur : un écran en 1600x900 va demander une image
d'une largeur d'environ 1300 pixels en plein écran.

La configuration par défaut d'ARender est plutôt conservatrice en termes
de qualité, et fonctionne bien pour la majeure partie des documents.
Mais il n'y a pas hélas de remède miracle. **En clair, il s'agit
toujours d'un arbitrage entre la qualité et la taille des images
produites.**

Côté ARender, toute la configuration est faite sur le serveur de
rendition, plus exactement dans le fichier
arender-rendition-{unix|windows}.xml, bean "jnipdfRenderer". Six
paramètres principaux permettent de jouer sur cet arbitrage, indiqués
ici avec leur valeur par défaut :

En détail :

```XML
    <property name="pageImageMimeType" value="image/jpeg" />
    <property name="quality" value="100"/>
    <property name="overZoom" value="1.0"/>
    <property name="maxWidth" value="8192"/>
    <property name="antiAlias" value="8"/>
    <property name="imageType" value="IMAGE_TYPE_RGB"/>
```

- **imageType** : le colorspace de l'image produite, à choisir parmi :

  ```cfg
    "IMAGE_TYPE_RGB"
    "IMAGE_TYPE_ARGB"
    "IMAGE_TYPE_ARGB_PRE"
    "IMAGE_TYPE_BGR"
    "IMAGE_TYPE_GRAY"
    "IMAGE_TYPE_BINARY"
    "IMAGE_TYPE_BINARY_DITHER"
  ```

- **pageImageMimeType** : le type d'image produit. Peut être :
  - image/jpeg : très efficace pour les photos et documents issus
    de numérisation
  - image/png : plus efficace pour les documents issus de
    bureautique (PDF éditique, Word, ...), comportant davantage
    d'à-plats.

    En résumé :

    ![image]([shortcode])

- **quality** : niveau de compression de l'image, jpeg ou png (1-100),
  par défaut à 100.

  > Le comportement et le gain des niveaux de compression dépend du
  > type de l'image générée. Le niveau de qualité maximal est
  > sélectionné par défaut.

- **maxWidth** : la taille maximale des images à produire (en pixels).
  Ceci est particulièrement important pour les documents de taille
  papier importants (plans en A0 par exemple), lorsque l'utilisateur
  zoome sur une partie du document.

- **antiAlias** : l'anti-aliasing à utiliser pour la rendition du
  texte, via la technique de sub-pixelling.

- **overZoom** : le niveau de zoom à appliquer par rapport à la taille
  attendue (float : 0.1 - 2.0, par défaut : 1.0)
[shortcode]

[shortcode]
Voici quelques exemples :

- la valeur 0.8 appliquera un zoom de 80% sur l'image à
  produire, donc si le client demande une image de 1000 pixels
  de large, la rendition produira une image de 800 pixels et ce
  sera au navigateur de re-zoomer à 1000, avec la partie de
  qualité qui s'ensuit.
- la valeur 1.2 appliquera un zoom à 120% sur l'image à
  produire, donc une image plus grande que nécessaire. Avec
  l'arrivée des écrans gérant le sub-pixelling, cette option
  peut s'avérer intéressante pour améliorer la qualité de
  l'image.

[shortcode]
[shortcode]

[shortcode]
[shortcode]
Depuis la version 4.5, les boutons et images pertinentes possèdent une description pouvant être lue par des aide pour malvoyant comme par exemple : 

Plus de détails dans notre documentation sur [l'accessibilité]({{< relref "/v4/feature/accessibility.fr.md">}})
[shortcode]

[shortcode]
