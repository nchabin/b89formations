---
layout: "formation.njk"
tag: "plan"
title: "PowerShell, gérer l'automatisation de Windows"
description: ""
objectifs: "- Cette formation vous permettra de maîtriser le langage de scripts de Microsoft (à partir de la version PowerShell 4) pour automatiser des tâches d'administration sous Windows. 
 
- Vous mettrez en œuvre PowerShell dans des domaines aussi variés que le réseau, la gestion des processus, l'inventaire d'un parc de machines ou la gestion de l'Active Directory.
"
Public concerné: "Techniciens, administrateurs et ingénieurs systèmes et réseaux."
prerequis: "- Bonnes connaissances des systèmes d'exploitation Windows. 
 
- Connaissance d'un langage de script ou de programmation souhaitable. "                    
methode: "Pédagogie active basée sur des exemples, démonstrations, partages d’expériences, cas pratiques et évaluation des acquis tout au long de la formation.
"
duree: "3 jours"
tarif: "2080 € H.T."
sections:
  - titre: "Les bases du langage"
    sousPoints:
        - "Lien entre PowerShell et .NET"
        - "Principe, fonctionnalités, utilisation des commandes et cmdlets"
        - "Pipelines : comportement des flux, paramétrage, `pipelinevariable`"
        - "Filtres `where-object`, boucles `foreach`"
        - "Variables, types d'opérateurs"
        - "Windows ISE : environnement pour scripter"
  - titre: "Les types et opérateurs"
    sousPoints:
        - "Typage, règles de conversion"
        - "Variables, portée"
        - "Types de base"
        - "Expressions régulières, qualificateurs"
        - "Opérateurs : arithmétiques, logiques, redirection, etc."
        - "Comparateurs et collections"
  - titre: "Structures de contrôle et fonctions"
    sousPoints:
        - "Cmdlets de contrôle"
        - "Structures conditionnelles : `if`, `switch`"
        - "Boucles : `for`, `while`, `foreach`"
        - "Fonctions et modificateurs d’étendue"
        - "Passage d’arguments, intégration dans un pipeline"
  - titre: "Utilisation des cmdlets et modules"
    sousPoints:
        - "Cmdlets pour : archives, web, serveurs, réseau, administration, fichiers"
        - "Cmdlets notables : `invoke-webrequest`, `get-content`, `import-csv`, etc."
  - titre: "Utilisation des objets CIM"
    sousPoints:
        - "CIM vs WMI"
        - "Cmdlets : `get-ciminstance`, `new-cimsession`, etc."
        - "Classes WMI, méthodes et propriétés"
  - titre: "Utilisation de .NET et COM"
    sousPoints:
        - "Manipulation d’objets système via .NET"
        - "Classes système (ping, UDP, credential, etc.)"
        - "Interface graphique avec XAML"
  - titre: "Gestion des modules PowerShell et des packages"
    sousPoints:
        - "Fonctionnement et utilisation de modules"
        - "Modules courants : DHCP, DNS, Hyper-V, Active Directory"
        - "Cmdlets : `find-module`, `install-module`"
  - titre: "Les objets COM"
    sousPoints:
        - "Lister et exploiter les objets COM"
        - "Création et manipulation de fichiers Excel, PowerPoint, Word"
  - titre: "Cmdlets utiles et astuces PowerShell"
    sousPoints:
        - "Cmdlets : `get-random`, `get-process`, `get-hotfix`, `convertfrom-string`, etc."
        - "Cmdlet Psedit, création de liens symboliques, génération d’objets, etc."

---