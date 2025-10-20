+++
date = "2020-02-01T15:20:01+02:00"
title = "Script OH"
+++

Ajouter un nouvel operation handler de type ScriptOperationHandler, qui référence un script. 
Voici le script qui, avec les mêmes conditions, applique les mêmes traitements que la table de décision précédente : 

  logger.info("[GEC_Workflow_OH]");
  var classId = RuleUtil.getClassId(component);
  var answerId = component.getAnswer().getId().getValue();
  logger.info("[GEC_Workflow_OH] classId=" + classId + ", answerId=" + answerId);

  var start="GEC_Step0_Creation"; 
  var step1="GEC_Step1_ATraiter";
  var end="GEC_Fin";

  var initiateAnswer="Initiate";
  var treatAnswer="Traiter";
  var adjournAnswer="Ajourner";
  var terminateAnswer="Terminer";

  switch (classId) {
    case start :
      changeClassOnAnswer(answerId, initiateAnswer, step1);
      component.setAssignee("");
      component.getData().setACL("acl-traitement");
      util.setTagValue(component, "Statut", "A Traiter");
      break;
    case step1:
      if(!changeClassOnAnswer(answerId, terminateAnswer, end)){
          changeClassOnAnswer(answerId, adjournAnswer, start);
          component.getData().setACL("acl-creation");
          util.setTagValue(component, "Statut", "RetourCreateur");
      } else {
        component.getData().setACL("acl-fin");
        component.setAssignee("");
        util.setTagValue(component, "Statut", "Fin");
      }
      break;
    default:
  }


  logger.info("[GEC_Workflow_OH] END");

  function changeClassOnAnswer(appliedAnswer, answerId, classToApply){
    if(appliedAnswer === answerId) { 
        util.changeClass(component, classToApply); 
        logger.info("[GEC_Workflow_OH] Class has been changed to "+ classToApply);
        return true;
      }
    return false;
  }
