---
title: Mise en place
draft: true
---

# Objectif

A travers ce module de formation, nous souhaitons créer une page FlowerDocs publique servant de portail de dépôt de CV de potentiels candidats. 
Cette page devra donc comprendre un formulaire réceptionnant les informations du candidat ainsi que le CV. Ce CV sera visualisable dans ARender sur cette page de dépôt après l'upload de celui-ci. La soumission de la candidature conduit à la création d'un document de type RH dans FlowerDocs. 


# Prérequis

Pour la suite de ce tutoriel, vous aurez besoin d'une classe de document `RH` contenant les tags de type `Chaîne de caractères` suivants : 

* Email avec le pattern suivant : 
```Regex
^(([^()\[\]\\.,;:\s@"]+(\.[^()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
```

* FirstName 
* LastName 

Ainsi que de la page publique `application-success` contenant le template suivant : 

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd ">
<html xmlns="http://www.w3.org/1999/xhtml " xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<script type="text/javascript" language="javascript" src="../../../scripts/vendor.min.js"></script>


<link href="../../../css/bootstrap.min.css?v=4.1.3" rel="stylesheet" type="text/css" />
<link href="../../../css/style.css" rel="stylesheet" type="text/css" />



<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="format-detection" content="date=no" />
<meta name="format-detection" content="address=no" />
<meta name="format-detection" content="telephone=no" />
<meta name="x-apple-disable-message-reformatting" />



<title>FlowerDocs - Dépôt de candidature</title>
</head>



<body class="authentication-bg authentication-bg-pattern">
    <div class="account-pages mt-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-pattern">
                        <div class="card-body p-4">
                            <div class="panel-heading text-center w-75 m-auto">
                                <h4 class="text-center">
                                    <img id="applicationLogo" src="../../../images/flower_logo-purple.png" style="width: 150px;">
                                </h4>
                            </div>
                            <div class="mt-3 text-center">
                                <svg version="1.1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;" xmlns="http://www.w3.org/2000/svg
                                    xmlns:xlink="http://www.w3.org/1999/xlink x="0px" y="0px" viewBox="0 0 98 98" style="height: 120px;" xml:space="preserve">
                                <style type="text/css">
.st0 {
    fill: #FFFFFF;
}



.st1 {
    fill: #1abc9c;
}



.st2 {
    fill: #FFFFFF;
    stroke: #1abc9c;
    stroke-width: 2;
    stroke-miterlimit: 10;
}



.st3 {
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-miterlimit: 10;
}
</style>
                                <g i:extraneous="self"> <circle id="XMLID50" class="st0" cx="49" cy="49" r="49"></circle> <g id="XMLID4"> <path
                                    id="XMLID49" class="st1"
                                    d="M77.3,42.7V77c0,0.6-0.4,1-1,1H21.7c-0.5,0-1-0.5-1-1V42.7c0-0.3,0.1-0.6,0.4-0.8l27.3-21.7
                                                        c0.3-0.3,0.8-0.3,1.2,0l27.3,21.7C77.1,42.1,77.3,42.4,77.3,42.7z"></path>
                                <path id="XMLID48" class="st2"
                                    d="M66.5,69.5h-35c-1.1,0-2-0.9-2-2V26.8c0-1.1,0.9-2,2-2h35c1.1,0,2,0.9,2,2v40.7
                                                        C68.5,68.6,67.6,69.5,66.5,69.5z"></path>
                                <path id="XMLID47" class="st1"
                                    d="M62.9,33.4H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7
                                                        c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,33,63.4,33.4,62.9,33.4z"></path>
                                <path id="XMLID46" class="st1"
                                    d="M62.9,40.3H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7
                                                        c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,39.9,63.4,40.3,62.9,40.3z"></path>
                                <path id="XMLID45" class="st1"
                                    d="M62.9,47.2H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7
                                                        c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,46.8,63.4,47.2,62.9,47.2z"></path>
                                <path id="XMLID44" class="st1"
                                    d="M62.9,54.1H47.2c-0.5,0-0.9-0.4-0.9-0.9v-0.2c0-0.5,0.4-0.9,0.9-0.9h15.7
                                                        c0.5,0,0.9,0.4,0.9,0.9v0.2C63.8,53.7,63.4,54.1,62.9,54.1z"></path>
                                <path id="XMLID43" class="st2"
                                    d="M41.6,40.1h-5.8c-0.6,0-1-0.4-1-1v-6.7c0-0.6,0.4-1,1-1h5.8c0.6,0,1,0.4,1,1v6.7
                                                        C42.6,39.7,42.2,40.1,41.6,40.1z"></path>
                                <path id="XMLID42" class="st2"
                                    d="M41.6,54.2h-5.8c-0.6,0-1-0.4-1-1v-6.7c0-0.6,0.4-1,1-1h5.8c0.6,0,1,0.4,1,1v6.7
                                                        C42.6,53.8,42.2,54.2,41.6,54.2z"></path>
                                <path id="XMLID41" class="st1" d="M23.4,46.2l25,17.8c0.3,0.2,0.7,0.2,1.1,0l26.8-19.8l-3.3,30.9H27.7L23.4,46.2z"></path> <path
                                    id="XMLID40" class="st3" d="M74.9,45.2L49.5,63.5c-0.3,0.2-0.7,0.2-1.1,0L23.2,45.2"></path> </g> </g> </svg>
                                <h3>Félicitations !</h3>
                                <p class="text-muted font-14 mt-2">
                                    Votre candidature a bien été déposée. Un email vous a été envoyé à l'adresse email renseignée : <b th:text="${email}">youremail@domain.com</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

# Mise en place

## Création du template de base

Nous allons commencer par créer le formulaire de dépôt qui évoluera au cours de ce tutoriel pour atteindre notre objectif. 
Depuis la console d'administration FlowerDocs, créez le template de la page que nous appellerons `application-portal.html` dont le contenu de base est : 

```html

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml;" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.0/dropzone.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.0/dropzone.min.css;" rel="stylesheet" type="text/css"/>


<script type="text/javascript" language="javascript" src="../../../scripts/vendor.min.js"></script>
<script type="text/javascript" language="javascript" src="../../../scripts/jquery.scrollbar.js"></script>



<link href="../../../css/bootstrap.min.css?v=4.1.3" rel="stylesheet" type="text/css" />
<link href="../../../css/style.css" rel="stylesheet" type="text/css" />



<script type="text/javascript" language="javascript">
    Dropzone.autoDiscover = false;
    $(function() {
        var myDropzone = new Dropzone("#upload-file-form", {
            url : "../../../upload"
        });
    });
    function setSubmitUrl(form) {
        return false;
    }
</script>



<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="format-detection" content="date=no" />
<meta name="format-detection" content="address=no" />
<meta name="format-detection" content="telephone=no" />
<meta name="x-apple-disable-message-reformatting" />



<title>Flower - Dépôt de candidature</title>
</head>



<body class="authentication-bg authentication-bg-pattern">
    <div class="wrapper-page" style="display:flex; justify-content: center;">
        <div class="card-box bg-pattern">
            <div class="panel-heading text-center w-75 m-auto">
                <h4 class="text-center">
                    <img id="applicationLogo" src="../../../images/flower_logo-purple.png" style="width: 150px;">
                </h4>
                <p class="text-muted mb-4 mt-3">Déposer votre candidature en renseignant les informations demandées.</p>
            </div>
            <div class="p-20">
                <form class="form-horizontal mt-2" onsubmit="return setSubmitUrl(this);">
                    <div class="form-group mb-3">
                        <div class="col-12">
                            <label for="firstname">Prénom</label>
                        </div>
                        <div class="col-12">
                            <input class="form-control" type="text" id="firstname" name="firstname" required="true" placeholder="Saisissez votre prénom"
                                style="background-image: url("
                                data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC"); background-repeat:no-repeat; background-attachment:scroll; background-size: 16px 18px; background-position: 98% 50%;">
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="col-12">
                            <label for="lastname">Nom de famille</label>
                        </div>
                        <div class="col-12">
                            <input class="form-control" type="lastname" id="lastname" name="lastname" required="true" placeholder="Saisissez votre nom de famille"
                                style="background-image: url("
                                data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC"); background-repeat:no-repeat; background-attachment:scroll; background-size: 16px 18px; background-position: 98% 50%;">
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="col-12">
                            <label for="flower_login">Email</label>
                        </div>
                        <div class="col-12">
                            <input class="form-control" type="email" id="email" name="username" required="true" placeholder="Saisissez votre adresse email"
                                style="background-image: url("
                                data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC"); background-repeat:no-repeat; background-attachment:scroll; background-size: 16px 18px; background-position: 98% 50%;">
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="col-12">
                            <label for="upload-file-form">Ajouter votre CV</label>
                        </div>
                        <div class="col-12">
                            <div id="upload-file-form" class="dropzone"></div>
                        </div>
                    </div>
                    <div class="form-group text-center mt-4">
                        <div class="col-12">
                            <button class="btn btn-pink btn-block text-uppercase waves-effect waves-light" type="submit">Postuler</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
```

:::info
Ce template HTML embarque pour l'instant uniquement Dropzone.js et le css utilisé dans FlowerDocs. 
:::

## Création de la page

Afin de tester le rendu du template de notre page à chaque étape de notre formation, nous allons créer cette page. Pour cela, depuis l'onglet `Sécurité > Pages` de l'administration FlowerDocs, créez une nouvelle page FlowerDocs avec les paramètres suivant : 

* Type : Publique
* URL : application
* Templates HTML : sélectionnez le template créé lors de l'étape précédente
* Jeton : Oui

<br/>
Une fois la page avec votre template créée vous pourrez y accédez à l'adresse suivante : `/gui/public/<scope>/pages/application`.