console.info("Page de test en JavaScript");

//Déclaration des variables utilisées
let prenom = prompt("Prenom?") ;
let nom = prompt("Nom?") ;
let age = prompt("Age?") ;
//pour poser une question utiliser "let... = prompt("...")"


console.log (prenom + nom + age)
//console.log(typeof(1))

if(age>=18)
{
	console.log("Ok!");
}
else
{
	console.log("T'es pas majeur");
}

//boucle commmence à 0 une fois le ; elle ajoute 1 et repars (ajouter "=" si on veut le 10 compris)
//boucle permet de parcourir des tableaux -> donc efficace pour des données
for(let i = 0 ; i <= 10 ; i++)
{
	console.log(i);
}