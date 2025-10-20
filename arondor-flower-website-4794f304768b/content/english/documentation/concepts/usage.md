+++
title = "Use cases"
date = "2010-02-02"
+++


:::info
Discover these concepts in a simple case study: the **Supplier invoice management**  
:::


# Scenario
A supplier invoice management solution digitally manages the processing of invoices issued by suppliers.

To complicate our case study, let's add a little process! Invoices over €2,500 must be submitted to a third party for validation.

Invoices can be consulted by two departments within the company: 

* accounting department: in order to process invoices, a list of invoices to be processed will be presented to users
* the purchasing department: in order to be able to negotiate future orders, users will be able to consult all invoices issued by a given supplier

# Solution

## Document management

These invoices have a number of features in common: 

* A sender
* Issue date
* A part number
* A label
* Amount before tax
* Etc.


In this example, we opt for components of category *Document* since they will have a content (image, PDF...).
We choose a single document class *SupplierInvoice* referencing tag classes: 

|Tag classes|Type|Mandatory|
|-------------|----|-----------|
|Sender|Character string|Yes|
|DateEmission|Date|Yes|
|NumeroPiece|Character string|Yes|
|AmountHT|Decimal|Yes|

*The invoice label will be used to fill in the document name*


## Treatment

In order to notify the accounting department of the arrival of an invoice to be processed, we'll trigger the processing of an invoice processing task when a document of class *SupplierInvoice*. We therefore define the task class *ProcessingInvoice* with the following features:

### Processing stage tags

### Attachment

So that the accounting department can process the invoice based on the information (and file) in the received invoice, we add an attachment to the task class : 

* category: *Document*
* class : *SupplierInvoice*
* mandatory : *Yes*


### Replies

The invoices we receive are always perfect, so we add just one answer *Confirm* giving the accounting department only the option of validating the invoice received. 



## Consultation 


## Validation


:::info 
This type of design can be applied to *(all)* your use cases for electronic document management.
:::
