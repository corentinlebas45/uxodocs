---
title: "Utiliser l’API REST"
weight: 
draft: false
icon: mdi-api
## search related keywords
keywords: ["tutorial", "REST", "API" ]
---

Ce guide suppose par exemple que l'URL de votre rendition se trouve à sa
valeur par défaut, <http://localhost:8761>

Il sera nécéssaire de modifier cette dernière de manière correspondante
à votre configuration.

## Liste des services exposés en REST

### Obtenir les "capabilities" de votre rendition

Afin d'obtenir les capabilities; il suffit d'appeller la ressource
capabilities à cette URL:

<http://localhost:8761/capabilities>

Vous devriez avoir un retour de cette forme, au format XML :

``` xml
<ar:capabilities xmlns:ar="http://www.arender.fr/rest">
    <ar:map>
        <ar:entry>
            <ar:string>com.arondor.viewer.client.client.api.Version</ar:string>
            <ar:string>3.1.0-rc3</ar:string>
        </ar:entry>
        <ar:entry>
            <ar:string>
                com.arondor.viewer.client.rendition.ServerAddressRest
            </ar:string>
            <ar:string>http://localhost:8761/</ar:string>
        </ar:entry>
        <ar:entry>
            <ar:string>
                com.arondor.viewer.client.api.document.ProgressiveDocumentPageLayout.isSupported
            </ar:string>
            <ar:boolean>false</ar:boolean>
        </ar:entry>
        <ar:entry>
            <ar:string>com.arondor.viewer.client.rendition.Version</ar:string>
            <ar:string>3.1.0-rc3</ar:string>
        </ar:entry>
        <ar:entry>
            <ar:string>com.arondor.viewer.client.rendition.ServerAddress</ar:string>
            <ar:string>http://localhost:8761/</ar:string>
        </ar:entry>
    </ar:map>
    <ar:category>com.arondor.viewer.client.rendition.Capabilities</ar:category>
</ar:capabilities>
```

La commande curl a lancer serait alors :

```bash
$> curl -H "Accept: application/xml" -H "Content-Type: application/xml" \
-X GET "http://localhost:8761/capabilities"
```

### Savoir si votre rendition contient un documentId ARender

Pour ce qui a attrait aux documents, nous allons devoir appeller la
ressource "document" exposée à <http://localhost:8761/document>

Par exemple, pour savoir si un document existe en rendition il suffit de
faire :

<http://localhost:8761/document/b64_I2RlZmF1bHQ=>

Ceci est l'ID du document par défaut. Tant qu'il n'a pas été ouvert une
première fois la rendition va répondre

``` xml
<ar:boolean xmlns:ar="http://www.arender.fr/rest">false</ar:boolean>
```

La commande curl a lancer est alors :

```bash
curl -H "Accept: application/xml" -H "Content-Type: application/xml" \
-X GET "http://localhost:8761/document/b64_I2RlZmF1bHQ="
```

### Obtenir le layout des pages d'un document ARender

Il est possible et utile avant de demander des images à la rendition en
curl de savoir la dimension et le nombre de pages d'un document.

De ce fait, il va falloir appeller la ressource document sur sa méthode
layout:

> `{http://localhost:8761/document/{documentId}/layout`

Un exemple de cet appel est :

```bash
$> curl -H "Accept: application/xml" -H "Content-Type: application/xml" \
-X GET "http://localhost:8761/document/b64_I2RlZmF1bHQ=/layout"
```

Voici un extrait du résultat

``` xml
<ar:documentPageLayout xmlns:ar="http://www.arender.fr/rest">
    <ar:documentId>b64_I2RlZmF1bHQ=</ar:documentId>
    <ar:documentTitle>arender-en.pdf</ar:documentTitle>
    <ar:mimeType>application/pdf</ar:mimeType>
    <ar:pages>
        <ar:pageDimensions>
            <ar:width>720.0</ar:width>
            <ar:height>405.0</ar:height>
            <ar:rotation>0</ar:rotation>
            <ar:dpi>0</ar:dpi>
        </ar:pageDimensions>
        <ar:pageDimensions>
            <ar:width>720.0</ar:width>
            <ar:height>405.0</ar:height>
            <ar:rotation>0</ar:rotation>
            <ar:dpi>0</ar:dpi>
        </ar:pageDimensions>
        <ar:pageDimensions>
            <ar:width>720.0</ar:width>
            <ar:height>405.0</ar:height>
            <ar:rotation>0</ar:rotation>
            <ar:dpi>0</ar:dpi>
        </ar:pageDimensions>
        ...
    </ar:pages>
</ar:documentPageLayout>
```

### Uploader un document dans ARender

Afin d'envoyer un document dans ARender, nous pouvons utiliser les
méthodes de chargement partiels afin de ne pas saturer les connexions
et la mémoire.

Afin de débuter l'upload, la première méthode POST à appeller et celle
ci:

```bash
$> curl -H "Accept: application/xml" -H "Content-Type: application/xml" -X POST "http://localhost:8761/document/{documentId}/startPartialLoading?mimeType={mimeType}&documentTitle={documentTitle}&contentSize={contentSize}"
```

ContentSize est la taille finale du fichier à transférer. La rendition
attendra de recevoir excatement ce nombre de bytes lors du chargement
par parties.

Cette seconde méthode attends du Post binaire contrairement aux méthodes
vues pour le moment qui ont étées toujours étées en GET ou en POST sans
contenu.

Voici la commande curl considérant que vos données binaires sont dans
binaryData.bin:

```bash
$> curl --request POST --data-binary "@binaryData.bin" "http://localhost:8761/document/{documentId}/continuePartialLoading?offset={offset}&finished={finished}"
```

Le paramètre finished doit être mis à true quand le dernier morceau de
contenu a été envoyé. Offset correspond à la position en byte dans les
morceaux de données que vous transmettez à la rendition.

### Obtenir les images d'un document déjà chargé dans la rendition

Afin de demander des images à la rendition en curl il est important de
savoir la dimension et le nombre de pages d'un document.

Pour obtenir une image, il va falloir appeller la ressource document sur
sa méthode image:

> `{http://localhost:8761/document/{documentId}/image/{page}/{description}`

Le paramètre description correspond à \[IM\]() suivi de deux valeurs que
nous utilisons afin de décrire successivement la largeur de l'image
demandée, et sa rotation.

[shortcode]

IM_1080_90 demande une image de largeur 1080 pixels et tournée de 90°.

Un exemple d'un appel à cette méthode pourrait être de cette forme :

```bash
$> curl -X GET 'http://localhost:8761/document/b64_I2RlZmF1bHQ=/image/0/IM_1920_0'
```

Ceci obtient la première image du document par défaut à la résolution
1920 pixels de largeur (le ratio largeur hauteur est conservé par
rapport au document original).
[shortcode]

### Obtenir le contenu des pages d'un document déjà chargé dans la rendition

Après avoir demandé des images à la rendition en curl il est judicieux
de savoir également le contenu textuel des images ainsi récupérées. Pour
ce faire, il va falloir appeller la ressource document sur sa méthode
contents:

> `http://localhost:8761/document/{documentId}/contents/{page}`

Un exemple d'un appel à cette méthode pourrait être de cette forme :

```bash
$> curl -H "Accept: application/xml" -H "Content-Type: application/xml" \
-X GET 'http://localhost:8761/document/b64_I2RlZmF1bHQ=/contents/0'
```

Ceci obtient le contenu textuel de la première page du document par
défaut.

Voici un exemple du résultat attendu (abregé):

``` xml
<ar:pageContents xmlns:ar="http://www.arender.fr/rest">
    <ar:pageNumber>2</ar:pageNumber>
    <ar:positionTextList>
        <ar:positionText>
            <ar:pageNumber>2</ar:pageNumber>
            <ar:position>
                <ar:x>249.1</ar:x>
                <ar:y>-0.83999634</ar:y>
                <ar:w>456.0941</ar:w>
                <ar:h>36.0</ar:h>
            </ar:position>
            <ar:text>Document Viewing can be hard</ar:text>
            <ar:individualWidths>
                <ar:float>22.154755</ar:float>
                <ar:float>18.98465</ar:float>
                <ar:float>15.238159</ar:float>
                <ar:float>18.912598</ar:float>
                <ar:float>28.783173</ar:float>
                <ar:float>17.939941</ar:float>
                <ar:float>18.62442</ar:float>
                <ar:float>12.068054</ar:float>
                <ar:float>7.7451477</ar:float>
                <ar:float>20.425598</ar:float>
                <ar:float>8.285522</ar:float>
                <ar:float>17.723785</ar:float>
                <ar:float>25.757172</ar:float>
                <ar:float>8.285522</ar:float>
                <ar:float>18.912598</ar:float>
                <ar:float>16.967285</ar:float>
                <ar:float>7.991638</ar:float>
                <ar:float>14.985962</ar:float>
                <ar:float>17.255493</ar:float>
                <ar:float>18.912598</ar:float>
                <ar:float>7.9973145</ar:float>
                <ar:float>18.912598</ar:float>
                <ar:float>17.939941</ar:float>
                <ar:float>8.033325</ar:float>
                <ar:float>18.912598</ar:float>
                <ar:float>17.255493</ar:float>
                <ar:float>12.176147</ar:float>
                <ar:float>18.912598</ar:float>
            </ar:individualWidths>
            <ar:fontSize>36.0</ar:fontSize>
            <ar:font>ABCDEE+Calibri</ar:font>
            <ar:paragraphId>0</ar:paragraphId>
            <ar:rightToLeftText>false</ar:rightToLeftText>
        </ar:positionText>
        <ar:positionText>
            <ar:pageNumber>2</ar:pageNumber>
            <ar:position>
                <ar:x>91.584</ar:x>
                <ar:y>70.66</ar:y>
                <ar:w>102.79086</ar:w>
                <ar:h>18.0</ar:h>
            </ar:position>
            <ar:text>Deployment</ar:text>
            <ar:individualWidths>
                <ar:float>13.013329</ar:float>
                <ar:float>9.9132</ar:float>
                <ar:float>11.012665</ar:float>
                <ar:float>5.046707</ar:float>
                <ar:float>11.012665</ar:float>
                <ar:float>9.859131</ar:float>
                <ar:float>15.951233</ar:float>
                <ar:float>9.96727</ar:float>
                <ar:float>11.012665</ar:float>
                <ar:float>6.001999</ar:float>
            </ar:individualWidths>
            <ar:fontSize>18.0</ar:fontSize>
            <ar:font>Arial,Bold</ar:font>
            <ar:paragraphId>1</ar:paragraphId>
            <ar:rightToLeftText>false</ar:rightToLeftText>
        </ar:positionText>
        <ar:positionText>
            <ar:pageNumber>2</ar:pageNumber>
            <ar:position>
                <ar:x>91.584</ar:x>
                <ar:y>92.26001</ar:y>
                <ar:w>55.979996</ar:w>
                <ar:h>18.0</ar:h>
            </ar:position>
            <ar:text>Issues</ar:text>
            <ar:individualWidths>
                <ar:float>5.003998</ar:float>
                <ar:float>10.008003</ar:float>
                <ar:float>9.954002</ar:float>
                <ar:float>10.998001</ar:float>
                <ar:float>10.007996</ar:float>
                <ar:float>10.007996</ar:float>
            </ar:individualWidths>
            <ar:fontSize>18.0</ar:fontSize>
            <ar:font>Arial,Bold</ar:font>
            <ar:paragraphId>2</ar:paragraphId>
            <ar:rightToLeftText>false</ar:rightToLeftText>
        </ar:positionText>
        <ar:positionText>
            <ar:pageNumber>2</ar:pageNumber>
            <ar:position>
                <ar:x>61.296</ar:x>
                <ar:y>81.54001</ar:y>
                <ar:w>20.039997</ar:w>
                <ar:h>20.0</ar:h>
            </ar:position>
            <ar:text></ar:text>
            <ar:individualWidths>
                <ar:float>20.039997</ar:float>
            </ar:individualWidths>
            <ar:fontSize>20.0</ar:fontSize>
            <ar:font>ABCDEE+FontAwesome</ar:font>
            <ar:paragraphId>2</ar:paragraphId>
            <ar:rightToLeftText>false</ar:rightToLeftText>
        </ar:positionText>
        <ar:positionText>
            <ar:pageNumber>2</ar:pageNumber>
            <ar:position>
                <ar:x>91.584</ar:x>
                <ar:y>138.17</ar:y>
                <ar:w>81.684006</ar:w>
                <ar:h>18.0</ar:h>
            </ar:position>
            <ar:text>Technical</ar:text>
            <ar:individualWidths>
                <ar:float>9.720001</ar:float>
                <ar:float>10.008003</ar:float>
                <ar:float>9.918007</ar:float>
                <ar:float>10.998001</ar:float>
                <ar:float>11.070007</ar:float>
                <ar:float>5.003998</ar:float>
                <ar:float>10.007996</ar:float>
                <ar:float>9.953995</ar:float>
                <ar:float>5.003998</ar:float>
            </ar:individualWidths>
            <ar:fontSize>18.0</ar:fontSize>
            <ar:font>Arial,Bold</ar:font>
            <ar:paragraphId>3</ar:paragraphId>
            <ar:rightToLeftText>false</ar:rightToLeftText>
        </ar:positionText>
        <ar:positionText>
            <ar:pageNumber>2</ar:pageNumber>
            <ar:position>
                <ar:x>91.584</ar:x>
                <ar:y>159.77</ar:y>
                <ar:w>103.89601</ar:w>
                <ar:h>18.0</ar:h>
            </ar:position>
            <ar:text>Restrictions</ar:text>
            <ar:individualWidths>
                <ar:float>12.996002</ar:float>
                <ar:float>9.918007</ar:float>
                <ar:float>10.008003</ar:float>
                <ar:float>5.9940033</ar:float>
                <ar:float>6.9120026</ar:float>
                <ar:float>5.003998</ar:float>
                <ar:float>10.007996</ar:float>
                <ar:float>5.9940033</ar:float>
                <ar:float>5.003998</ar:float>
                <ar:float>11.052002</ar:float>
                <ar:float>10.998001</ar:float>
                <ar:float>10.007996</ar:float>
            </ar:individualWidths>
            <ar:fontSize>18.0</ar:fontSize>
            <ar:font>Arial,Bold</ar:font>
            <ar:paragraphId>4</ar:paragraphId>
            <ar:rightToLeftText>false</ar:rightToLeftText>
        </ar:positionText>
        <ar:positionText>
            <ar:pageNumber>2</ar:pageNumber>
            <ar:position>
                <ar:x>59.76</ar:x>
                <ar:y>145.05</ar:y>
                <ar:w>20.040005</ar:w>
                <ar:h>20.0</ar:h>
            </ar:position>
            <ar:text></ar:text>
            <ar:individualWidths>
                <ar:float>20.040005</ar:float>
            </ar:individualWidths>
            <ar:fontSize>20.0</ar:fontSize>
            <ar:font>ABCDEE+FontAwesome</ar:font>
            <ar:paragraphId>4</ar:paragraphId>
            <ar:rightToLeftText>false</ar:rightToLeftText>
        </ar:positionText>
        ...
    </ar:positionTextList>
</ar:pageContents>
```
