---
title: Confirmation
description: Pop up permettant de confirmer un choix utilisateur
---

:::info
Ce type de pop-up affiche un message permettant de confirmer un choix de l'utilisateur.
:::

Il existe deux types de popups de confirmation : les popups Valider/Annuler, et les popups Oui/Non.

Les deux types de popups fonctionnent de la même manière :

Lorsque l'utilisateur clique sur le bouton `Valider` (pour les popups Valider/Annuler) ou `Oui` (pour les popups Oui/Non), l'intégrateur a la main pour définir le traitement à exécuter.

var popup = JSAPI.get().getPopupAPI().buildCancelValidateConfirmationPopup('Cette action va être effectuée', function(confirmed){
	if(confirmed){
		// .....
    }
	popup.close();
});
popup.setDescription('Ma description');
popup.setTitle('Mon titre');
popup.setIcon('fa fa-remove');
popup.show();
var popup = JSAPI.get().getPopupAPI().buildYesNoConfirmationPopup('Confirmez-vous cette action ?', function(confirmed){
	if(confirmed){
		// .....
    }
	popup.close();
});
popup.setDescription('Ma description');
popup.setTitle('Mon titre');
popup.setIcon('fa fa-remove');
popup.show();
